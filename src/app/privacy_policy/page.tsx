import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zebbingo | Privacy Policy",
  description: "Read the Zebbingo privacy policy and how we handle your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto w-full max-w-3xl">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-black">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-black/60">Last updated: 27 January 2026</p>
        </header>

        <div className="space-y-8 text-black/80 leading-relaxed">
          <p>This Privacy Policy explains how we collect, use and protect your personal data.</p>

          <section>
            <h2 className="text-xl font-display font-bold text-black">Who we are</h2>
            <p className="mt-2">
              We, Zebbingo Limited, are the “data controller” for the personal data collected through
              this website.
            </p>
            <p className="mt-2">
              We can be contacted at{" "}
              <a
                href="mailto:contact@zebbingo.com"
                className="underline underline-offset-4 text-black hover:text-zebbingo-blue-light transition-colors"
              >
                contact@zebbingo.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-black">What data we collect</h2>
            <p className="mt-2">When you sign up on our website, we may collect</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your country</li>
              <li>Your date of birth</li>
            </ul>
            <p className="mt-2">
              We may also collect limited technical information (such as IP address or pages visited)
              to help us understand how our website is used.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-black">How we use your data</h2>
            <p className="mt-2">We use your personal data to</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Communicate with you about your sign-up or account</li>
              <li>Send updates or marketing emails, where you have consented</li>
              <li>Improve our website and services</li>
            </ul>
            <p className="mt-2">We use your data only for the purposes explained here.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-black">
              The lawful basis for processing your data
            </h2>
            <p className="mt-2">Under UK GDPR, we rely on the following lawful bases:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Consent – where you have opted in to receive marketing emails</li>
              <li>
                Legitimate interests – to operate and improve our website, provided your rights are
                not overridden
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-black">Marketing communications</h2>
            <p className="mt-2">We will send you marketing emails only if you have actively opted in.</p>
            <p className="mt-2">
              You can unsubscribe at any time by clicking the link in any email we send, or by
              contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-black">Sharing your data</h2>
            <p className="mt-2">We do not sell your personal data.</p>
            <p className="mt-2">
              We may share your data with trusted service providers (such as email delivery or
              website hosting services) who process data on our behalf. These providers are required
              to keep your data secure and use it only for the agreed purpose.
            </p>
            <p className="mt-2">
              If we transfer your data outside the UK/EEA, we ensure it is protected by standard
              contractual clauses or other legal safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-black">Data storage and security</h2>
            <p className="mt-2">We take appropriate technical and organisational measures to protect your personal data.</p>
            <p className="mt-2">
              We keep your data only for as long as necessary to provide our services or to meet
              legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-black">Your rights</h2>
            <p className="mt-2">Under UK GDPR, you have the right to:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Ask us to correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict how we use your data</li>
              <li>At any time withdraw consent for our using your data</li>
              <li>
                Lodge a complaint with the Information Commissioner’s Office{" "}
                <a
                  href="https://www.ico.org.uk"
                  className="underline underline-offset-4 text-black hover:text-zebbingo-blue-light transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.ico.org.uk
                </a>
              </li>
            </ul>
            <p className="mt-2">To exercise any of these rights, please contact us using the details above.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-black">Children’s data</h2>
            <p className="mt-2">
              Our website is not intended for children under 16, and we do not knowingly collect
              personal data from children without parental consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-black">Changes to this policy</h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
