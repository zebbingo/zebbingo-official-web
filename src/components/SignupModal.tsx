'use client';

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SignupFormData = {
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  dob: string;
};

const initialFormState: SignupFormData = {
  email: "",
  firstName: "",
  lastName: "",
  country: "",
  dob: "",
};

export default function SignupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<SignupFormData>(initialFormState);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setSubmitted(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleChange =
    (field: keyof SignupFormData) => (event: ChangeEvent<HTMLInputElement>) => {
      setSubmitted(false);
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialFormState);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSubmitted(false);
  };

  return (
    <>
      {/* Fixed CTA on the middle-right; hover or click reveals slide-in form */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <div
          className="relative flex items-center"
          onMouseEnter={() => setIsOpen(true)}
        >
          <Button
            size="lg"
            variant="outline"
            className="rounded-l-2xl rounded-r-none h-28 px-3 text-base shadow-glow text-black"
            aria-haspopup="dialog"
            onClick={() => setIsOpen((prev) => !prev)}
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            Sign Up
          </Button>

          <div
            className={cn(
              "absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 w-[min(420px,calc(100vw-48px))] max-w-md bg-white rounded-3xl shadow-2xl border border-zebbingo-100/80 p-6 sm:p-7 transition-all duration-300",
              isOpen
                ? "opacity-100 translate-x-0 pointer-events-auto"
                : "opacity-0 translate-x-4 pointer-events-none"
            )}
            role="dialog"
            aria-modal="true"
            aria-labelledby="signup-title"
            aria-describedby="signup-description"
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 text-zebbingo-500 hover:text-zebbingo-700"
              aria-label="Close signup form"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-2 mb-5">
              <h2 id="signup-title" className="text-2xl font-bold text-soft-ink">
                Join the adventure
              </h2>
              <p
                id="signup-description"
                className="text-soft-ink/80 text-sm leading-relaxed"
              >
                Share your details so we can keep you posted about Zebbingo.
              </p>
            </div>

            {submitted && (
              <div className="mb-4 rounded-2xl border border-emerald-100 bg-emerald-50 text-emerald-800 px-4 py-3 text-sm">
                Thanks for signing up! We&apos;ll be in touch soon.
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-soft-ink mb-1">
                  Email
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange("email")}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-zebbingo-100 bg-zebbingo-50/60 px-4 py-3 text-soft-ink placeholder:text-soft-ink/50 focus:border-zebbingo-400 focus:outline-none focus:ring-2 focus:ring-zebbingo-200"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-soft-ink mb-1">
                    First name
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange("firstName")}
                    placeholder="Alex"
                    className="w-full rounded-2xl border border-zebbingo-100 bg-zebbingo-50/60 px-4 py-3 text-soft-ink placeholder:text-soft-ink/50 focus:border-zebbingo-400 focus:outline-none focus:ring-2 focus:ring-zebbingo-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-soft-ink mb-1">
                    Last name
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange("lastName")}
                    placeholder="Morgan"
                    className="w-full rounded-2xl border border-zebbingo-100 bg-zebbingo-50/60 px-4 py-3 text-soft-ink placeholder:text-soft-ink/50 focus:border-zebbingo-400 focus:outline-none focus:ring-2 focus:ring-zebbingo-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-soft-ink mb-1">
                    Nationality / Country
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange("country")}
                    placeholder="Canada"
                    className="w-full rounded-2xl border border-zebbingo-100 bg-zebbingo-50/60 px-4 py-3 text-soft-ink placeholder:text-soft-ink/50 focus:border-zebbingo-400 focus:outline-none focus:ring-2 focus:ring-zebbingo-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-soft-ink mb-1">
                    Date of birth (optional)
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange("dob")}
                    className="w-full rounded-2xl border border-zebbingo-100 bg-zebbingo-50/60 px-4 py-3 text-soft-ink placeholder:text-soft-ink/50 focus:border-zebbingo-400 focus:outline-none focus:ring-2 focus:ring-zebbingo-200"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                <p className="text-xs text-soft-ink/70">
                  By submitting, you agree to be contacted about Zebbingo updates.
                </p>
                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="ghost"
                    className="rounded-full px-5"
                    onClick={closeModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="outline"
                    className="rounded-full px-6 text-black"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
