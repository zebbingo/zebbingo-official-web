import type { Metadata } from "next";
import InfoPageLayout from "@/components/InfoPageLayout";

export const metadata: Metadata = {
  title: "Zebbingo | Privacy Policy",
  description: "Read the Zebbingo privacy policy and how we handle your data.",
};

const sections = [
  {
    title: "Who we are",
    content: (
      <>
        <p>
          We, Zebbingo Limited, are the “data controller” for the personal data collected through
          this website.
        </p>
        <p>
          We can be contacted at{" "}
          <a
            href="mailto:contact@zebbingo.com"
            className="underline underline-offset-4 transition-colors hover:text-zebbingo-blue-light"
          >
            contact@zebbingo.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "What data we collect",
    content: (
      <>
        <p>When you sign up on our website, we may collect:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Your name</li>
          <li>Your email address</li>
          <li>Your country</li>
          <li>Your date of birth</li>
        </ul>
        <p>
          We may also collect limited technical information, such as IP address or pages visited,
          to help us understand how our website is used.
        </p>
      </>
    ),
  },
  {
    title: "How we use your data",
    content: (
      <>
        <p>We use your personal data to:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Communicate with you about your sign-up or account</li>
          <li>Send updates or marketing emails, where you have consented</li>
          <li>Improve our website and services</li>
        </ul>
        <p>We use your data only for the purposes explained here.</p>
      </>
    ),
  },
  {
    title: "The lawful basis for processing your data",
    content: (
      <>
        <p>Under UK GDPR, we rely on the following lawful bases:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Consent, where you have opted in to receive marketing emails</li>
          <li>
            Legitimate interests, to operate and improve our website, provided your rights are not
            overridden
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Marketing communications",
    content: (
      <>
        <p>We will send you marketing emails only if you have actively opted in.</p>
        <p>
          You can unsubscribe at any time by clicking the link in any email we send, or by
          contacting us directly.
        </p>
      </>
    ),
  },
  {
    title: "Sharing your data",
    content: (
      <>
        <p>We do not sell your personal data.</p>
        <p>
          We may share your data with trusted service providers, such as email delivery or website
          hosting services, who process data on our behalf. These providers are required to keep
          your data secure and use it only for the agreed purpose.
        </p>
        <p>
          If we transfer your data outside the UK or EEA, we ensure it is protected by standard
          contractual clauses or other legal safeguards.
        </p>
      </>
    ),
  },
  {
    title: "Data storage and security",
    content: (
      <>
        <p>
          We take appropriate technical and organisational measures to protect your personal data.
        </p>
        <p>
          We keep your data only for as long as necessary to provide our services or to meet legal
          requirements.
        </p>
      </>
    ),
  },
  {
    title: "Your rights",
    content: (
      <>
        <p>Under UK GDPR, you have the right to:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Access the personal data we hold about you</li>
          <li>Ask us to correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to or restrict how we use your data</li>
          <li>Withdraw consent for our using your data at any time</li>
          <li>
            Lodge a complaint with the Information Commissioner’s Office at{" "}
            <a
              href="https://www.ico.org.uk"
              className="underline underline-offset-4 transition-colors hover:text-zebbingo-blue-light"
              target="_blank"
              rel="noreferrer"
            >
              www.ico.org.uk
            </a>
          </li>
        </ul>
        <p>To exercise any of these rights, please contact us using the details above.</p>
      </>
    ),
  },
  {
    title: "Children’s data",
    content: (
      <p>
        Our website is not intended for children under 16, and we do not knowingly collect
        personal data from children without parental consent.
      </p>
    ),
  },
  {
    title: "Changes to this policy",
    content: (
      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <InfoPageLayout
      title="Privacy Policy"
      description="This Privacy Policy explains how we collect, use and protect your personal data."
      lastUpdated="27 January 2026"
      sections={sections}
    />
  );
}
