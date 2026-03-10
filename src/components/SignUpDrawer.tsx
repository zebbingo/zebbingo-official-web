'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Nationality {
  id?: number;
  isActive: boolean;
  iso2?: string;
  iso3?: string;
  nameEn?: string;
  nameZh?: string;
  phoneCode?: string;
  sortOrder?: number;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const SignUpDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nationality, setNationality] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [nationalities, setNationalities] = useState<Nationality[]>([]);
  const [isLoadingNationalities, setIsLoadingNationalities] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const closeDrawer = () => {
    setIsOpen(false);
    setSubmissionStatus(null);
    setEmailError('');
  };

  const getEmailValidationMessage = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) {
      return 'Email is required.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(trimmed) ? '' : 'Please enter a valid email address.';
  };

  // Fetch nationalities when drawer opens
  useEffect(() => {
    if (isOpen && nationalities.length === 0 && !isLoadingNationalities) {
      fetchNationalities();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const fetchNationalities = async () => {
    setIsLoadingNationalities(true);
    try {
      if (!API_BASE_URL) {
        throw new Error('Missing NEXT_PUBLIC_API_BASE_URL');
      }
      const response = await fetch(`${API_BASE_URL}/zebNationality/list`);
      const data = await response.json();

      // Log the response to debug
      console.log('Nationality API response:', data);

      // Handle different response formats
      let nationalityList: Nationality[] = [];
      if (Array.isArray(data)) {
        nationalityList = data;
      } else if (data.data && Array.isArray(data.data)) {
        nationalityList = data.data;
      } else if (data.list && Array.isArray(data.list)) {
        nationalityList = data.list;
      } else if (data.result && Array.isArray(data.result)) {
        nationalityList = data.result;
      }

      // Log the parsed list
      if (nationalityList.length > 0) {
        console.log('Parsed nationality list:', nationalityList);
        console.log('First item keys:', Object.keys(nationalityList[0]));
      }

      // Sort by sortOrder, then alphabetically by nameEn
      const sortedNationalities = nationalityList.sort((a, b) => {
        const orderA = a.sortOrder ?? Number.POSITIVE_INFINITY;
        const orderB = b.sortOrder ?? Number.POSITIVE_INFINITY;
        if (orderA !== orderB) {
          return orderA - orderB;
        }
        const nameA = (a.nameEn || '').toLowerCase();
        const nameB = (b.nameEn || '').toLowerCase();
        return nameA.localeCompare(nameB);
      });

      setNationalities(sortedNationalities);
    } catch (error) {
      console.error('Failed to fetch nationalities:', error);
    } finally {
      setIsLoadingNationalities(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailValidationMessage = getEmailValidationMessage(email);
    if (emailValidationMessage) {
      setEmailError(emailValidationMessage);
      return;
    }
    setEmailError('');

    // Validate required fields
    if (!email || !firstName || !lastName || !nationality) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      // Find the selected nationality object to get name
      const selectedNat = nationalities.find(nat => {
        const value = nat.id?.toString();
        return value === nationality;
      });

      // Get nationality name (nameEn) or fallback to the selected value
      const nationalityName = selectedNat?.nameEn || nationality || '';

      // Prepare the request body (API expects PascalCase keys)
      const requestBody: Record<string, unknown> = {
        Email: email,
        FirstName: firstName,
        LastName: lastName,
        Nationality: nationalityName,
        MarketingOptIn: marketingOptIn,
      };

      // DateOfBirth is optional – only include when user provided a value
      if (dateOfBirth) {
        requestBody.DateOfBirth = dateOfBirth;
      }

      // Call the API
      if (!API_BASE_URL) {
        throw new Error('Missing NEXT_PUBLIC_API_BASE_URL');
      }
      const response = await fetch(`${API_BASE_URL}/zebOfficialWebsiteUserInfo/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const result = await response.json();
      console.log('Subscription response:', result);

      const resultType = result?.type === 'success' ? 'success' : 'error';
      const resultMessage =
        typeof result?.message === 'string' && result.message.trim().length > 0
          ? result.message
          : resultType === 'success'
            ? 'Thank you for your subscription. We will keep you posted on future events.'
            : 'Something went wrong. Please try again.';

      setIsSubmitting(false);
      setSubmissionStatus({
        type: resultType,
        message: resultMessage,
      });

      if (resultType === 'success') {
        // Reset form and close drawer after 3 seconds
        setTimeout(() => {
          setSubmissionStatus(null);
          setFirstName('');
          setLastName('');
          setEmail('');
          setEmailError('');
          setNationality('');
          setDateOfBirth('');
          setMarketingOptIn(false);
          setIsOpen(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Failed to submit subscription:', error);
      setIsSubmitting(false);
      setSubmissionStatus({
        type: 'error',
        message: 'Failed to submit subscription. Please try again.',
      });
    }
  };

  return (
    <>
      {/* Sign Up Button - Fixed on the right side (Desktop) */}
      <motion.button
        onClick={() => (isOpen ? closeDrawer() : setIsOpen(true))}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-gradient-to-b from-red-500 to-red-600 text-white px-5 py-20 rounded-l-3xl shadow-2xl hover:from-red-600 hover:to-red-700 transition-all font-display font-black text-base tracking-widest hidden md:flex items-center justify-center border-2 border-red-400"
        whileHover={{ scale: 1.08, x: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ x: 0 }}
        animate={{
          x: isOpen ? '-100%' : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{
          boxShadow: isOpen
            ? 'none'
            : '0 0 25px rgba(239, 68, 68, 0.6), 0 0 50px rgba(239, 68, 68, 0.4), 0 0 75px rgba(239, 68, 68, 0.2)'
        }}
        aria-label="SignUp"
      >
        <span className="[writing-mode:vertical-rl] transform rotate-180 whitespace-nowrap drop-shadow-lg text-[1.75rem] font-extrabold">
          Tell Me More
        </span>
      </motion.button>

      {/* Mobile Sign Up Button - Right side (smaller) */}
      <motion.button
        onClick={() => (isOpen ? closeDrawer() : setIsOpen(true))}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-gradient-to-b from-red-500 to-red-600 text-white px-2 py-10 rounded-l-2xl shadow-2xl hover:from-red-600 hover:to-red-700 transition-all font-display font-black flex items-center justify-center md:hidden border-2 border-red-400"
        whileHover={{ scale: 1.06, x: -3 }}
        whileTap={{ scale: 0.95 }}
        initial={{ x: 0 }}
        animate={{
          x: isOpen ? '-100%' : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{
          boxShadow: isOpen
            ? 'none'
            : '0 0 18px rgba(239, 68, 68, 0.5), 0 0 36px rgba(239, 68, 68, 0.35), 0 0 54px rgba(239, 68, 68, 0.2)'
        }}
        aria-label="SignUp"
      >
        <span className="[writing-mode:vertical-rl] transform rotate-180 whitespace-nowrap drop-shadow-lg text-[1rem] font-extrabold">
          Tell Me More
        </span>
      </motion.button>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
              onClick={closeDrawer}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed right-0 top-1/2 -translate-y-1/2 max-h-[92vh] sm:max-h-[720px] h-auto w-full sm:max-w-md bg-white shadow-2xl z-40 flex flex-col rounded-l-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-zebbingo-100 flex-shrink-0">
                <h2 className="text-xl font-display font-bold text-soft-ink">
                  Tell Me More
                </h2>
                <button
                  onClick={closeDrawer}
                  className="p-2 hover:bg-zebbingo-50 rounded-full transition-colors text-soft-ink hover:text-zebbingo-600"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 min-h-0">
                {submissionStatus ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                        submissionStatus.type === 'success'
                          ? 'bg-green-100'
                          : 'bg-red-100'
                      }`}
                    >
                      {submissionStatus.type === 'success' ? (
                        <svg
                          className="w-8 h-8 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <X className="w-8 h-8 text-red-600" />
                      )}
                    </motion.div>
                    <p className="text-soft-ink/80">{submissionStatus.message}</p>
                  </div>
                ) : (
                  <>
                    <p className="text-soft-ink/80 mb-6">
                      Join our mailing list to receive more information
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-soft-ink mb-2"
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => {
                            const nextEmail = e.target.value;
                            setEmail(nextEmail);
                            if (emailError) {
                              setEmailError(getEmailValidationMessage(nextEmail));
                            }
                          }}
                          onBlur={() => setEmailError(getEmailValidationMessage(email))}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-soft-ink bg-white ${
                            emailError
                              ? 'border-red-400 focus:ring-red-500'
                              : 'border-zebbingo-200 focus:ring-zebbingo-500'
                          }`}
                          placeholder="Enter your email"
                          aria-invalid={emailError ? 'true' : 'false'}
                          aria-describedby={emailError ? 'email-error' : undefined}
                          required
                        />
                        {emailError && (
                          <p id="email-error" className="mt-2 text-xs text-red-600">
                            {emailError}
                          </p>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-soft-ink mb-2"
                          >
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full px-4 py-3 border border-zebbingo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zebbingo-500 focus:border-transparent text-soft-ink bg-white"
                            placeholder="First name"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-soft-ink mb-2"
                          >
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full px-4 py-3 border border-zebbingo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zebbingo-500 focus:border-transparent text-soft-ink bg-white"
                            placeholder="Last name"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="nationality"
                          className="block text-sm font-medium text-soft-ink mb-2"
                        >
                          Country <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="nationality"
                          value={nationality}
                          onChange={(e) => setNationality(e.target.value)}
                          className="w-full px-4 py-3 border border-zebbingo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zebbingo-500 focus:border-transparent text-soft-ink bg-white"
                          disabled={isLoadingNationalities}
                          required
                        >
                          <option value="">
                            {isLoadingNationalities ? 'Loading...' : 'Select your country'}
                          </option>
                          {nationalities.map((nat, index) => {
                            // Use name as the primary field for country name
                            const value = nat.id?.toString() || index.toString();
                            // Use name as label, fallback to other fields
                            const label = nat.nameEn || value;

                            return (
                              <option key={value || index} value={value}>
                                {label}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="dateOfBirth"
                          className="block text-sm font-medium text-soft-ink mb-2"
                        >
                          Date of Birth <span className="text-gray-400 text-xs">(optional)</span>
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="date"
                            id="dateOfBirth"
                            lang="en-GB"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            className="w-full px-4 py-3 border border-zebbingo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zebbingo-500 focus:border-transparent text-soft-ink bg-white"
                            placeholder="DD/MM/YYYY"
                            title="Date format: DD/MM/YYYY"
                          />
                          {dateOfBirth && (
                            <button
                              type="button"
                              onClick={() => setDateOfBirth('')}
                              className="shrink-0 px-3 py-2 text-sm border border-zebbingo-200 rounded-lg text-soft-ink hover:bg-zebbingo-50"
                              aria-label="Clear date of birth"
                            >
                              Clear
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="flex items-start gap-3 px-4 py-3">
                        <input
                          type="checkbox"
                          id="marketingOptIn"
                          checked={marketingOptIn}
                          onChange={(e) => setMarketingOptIn(e.target.checked)}
                          className="mt-1 h-4 w-4 text-zebbingo-600 focus:ring-2 focus:ring-zebbingo-500"
                        />
                        <label
                          htmlFor="marketingOptIn"
                          className="text-sm text-soft-ink/90"
                        >
                          I agree to receive emails about updates and new products.
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="w-full mt-6 bg-gradient-to-b from-red-500 to-red-600 text-white px-6 py-4 rounded-xl shadow-lg hover:from-red-600 hover:to-red-700 transition-all font-display font-black text-[1.2rem] tracking-wide disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        disabled={isSubmitting}
                        style={{
                          boxShadow: isSubmitting 
                            ? 'none' 
                            : '0 4px 15px rgba(239, 68, 68, 0.4), 0 0 10px rgba(239, 68, 68, 0.2)'
                        }}
                      >
                        <span className="drop-shadow-sm">
                          {isSubmitting ? 'Processing...' : 'Sign Up'}
                        </span>
                      </button>
                      <p className="mt-3 text-xs text-soft-ink/70 text-center">
                        Please see our{" "}
                        <Link
                          href="/privacy_policy"
                          className="underline underline-offset-4 text-soft-ink hover:text-zebbingo-600 transition-colors"
                          onClick={closeDrawer}
                        >
                          Privacy Policy
                        </Link>{" "}
                        for more information about how we handle your data.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SignUpDrawer;
