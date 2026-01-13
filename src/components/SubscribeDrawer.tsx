'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from './ui/button';

interface Nationality {
  id?: number;
  name?: string;
  nameZh?: string;
  country?: string;
  countryName?: string;
  nationality?: string;
  code?: string;
  [key: string]: any;
}

const SubscribeDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nationality, setNationality] = useState('');
  const [nationalities, setNationalities] = useState<Nationality[]>([]);
  const [isLoadingNationalities, setIsLoadingNationalities] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      const response = await fetch('https://uat.zebbie.ai/api/zebNationality/list');
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
      
      setNationalities(nationalityList);
    } catch (error) {
      console.error('Failed to fetch nationalities:', error);
    } finally {
      setIsLoadingNationalities(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Find the selected nationality object to get nameZh
      // The value stored is: nat.id?.toString() || nat.code || nat.value || countryName || index.toString()
      const selectedNat = nationalities.find((nat, index) => {
        const countryName = nat.nameZh || nat.name || nat.countryName || nat.country || nat.nationality || nat.label || '';
        const value = nat.id?.toString() || nat.code || nat.value || countryName || index.toString();
        return value === nationality;
      });
      
      // Get nationality name (nameZh) or fallback to the selected value
      const nationalityName = selectedNat?.nameZh || selectedNat?.name || nationality || '';
      
      // Prepare the request body
      const requestBody = {
        nationality: nationalityName,
        name: name,
        email: email,
      };
      
      // Call the API
      const response = await fetch('https://uat.zebbie.ai/api/zebOfficialWebsiteUserInfo/submit', {
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
      console.log('Subscription successful:', result);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form and close drawer after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setName('');
        setEmail('');
        setNationality('');
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      console.error('Failed to submit subscription:', error);
      setIsSubmitting(false);
      // You might want to show an error message to the user here
      alert('Failed to submit subscription. Please try again.');
    }
  };

  return (
    <>
      {/* Subscribe Button - Fixed on the right side (Desktop) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
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
        aria-label="Subscribe"
      >
        <span className="[writing-mode:vertical-rl] transform rotate-180 whitespace-nowrap drop-shadow-lg text-lg font-extrabold">
          SUBSCRIBE
        </span>
      </motion.button>

      {/* Mobile Subscribe Button - Bottom right corner */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-br from-red-500 to-red-600 text-white px-8 py-4 rounded-full shadow-2xl hover:from-red-600 hover:to-red-700 transition-all font-display font-black text-base md:hidden border-2 border-red-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          boxShadow: '0 0 25px rgba(239, 68, 68, 0.6), 0 0 50px rgba(239, 68, 68, 0.4), 0 0 75px rgba(239, 68, 68, 0.2)'
        }}
        aria-label="Subscribe"
      >
        <span className="drop-shadow-lg font-extrabold">SUBSCRIBE</span>
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
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed right-0 top-1/2 -translate-y-1/2 max-h-[85vh] sm:max-h-[600px] h-auto w-full sm:max-w-md bg-white shadow-2xl z-40 flex flex-col rounded-l-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-zebbingo-100 flex-shrink-0">
                <h2 className="text-xl font-display font-bold text-soft-ink">
                  Subscribe
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-zebbingo-50 rounded-full transition-colors text-soft-ink hover:text-zebbingo-600"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 min-h-0">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4"
                    >
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
                    </motion.div>
                    <h3 className="text-xl font-display font-bold text-soft-ink mb-2">
                      Thank you!
                    </h3>
                    <p className="text-soft-ink/80">
                      Your subscription has been confirmed. You'll hear from us soon.
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-soft-ink/80 mb-6">
                      Join the mailing list for future event information
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-soft-ink mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 border border-zebbingo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zebbingo-500 focus:border-transparent text-soft-ink bg-white"
                          placeholder="Enter your name"
                        />
                      </div>
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
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 border border-zebbingo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zebbingo-500 focus:border-transparent text-soft-ink bg-white"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="nationality"
                          className="block text-sm font-medium text-soft-ink mb-2"
                        >
                          Nationality
                        </label>
                        <select
                          id="nationality"
                          value={nationality}
                          onChange={(e) => setNationality(e.target.value)}
                          className="w-full px-4 py-3 border border-zebbingo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zebbingo-500 focus:border-transparent text-soft-ink bg-white"
                          disabled={isLoadingNationalities}
                        >
                          <option value="">
                            {isLoadingNationalities ? 'Loading...' : 'Select your nationality'}
                          </option>
                          {nationalities.map((nat, index) => {
                            // Use nameZh as the primary field for country name
                            const countryName = nat.nameZh || nat.name || nat.countryName || nat.country || nat.nationality || nat.label || '';
                            // Use id as the primary value, fallback to code or nameZh
                            const value = nat.id?.toString() || nat.code || nat.value || countryName || index.toString();
                            // Use nameZh as label, fallback to other fields
                            const label = countryName || nat.code || nat.name || nat.value || value;
                            
                            return (
                              <option key={value || index} value={value}>
                                {label}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <Button
                        type="submit"
                        className="w-full mt-6"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Processing...' : 'Subscribe'}
                      </Button>
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

export default SubscribeDrawer;

