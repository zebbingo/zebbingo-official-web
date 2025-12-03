import type { Metadata } from "next";
import "./globals.css";
import packageInfo from "../../package.json";

export const metadata: Metadata = {
  title: 'Zebbingo | AI learning toy',
  description: "Zebbingo is a children's audio device which uses a range of figurines to unlock stories, songs and conversation to inform, educate and entertain.",
  icons: {
    icon: '/logo_white_backgroud.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zebbingo",
    "url": "https://www.zebbingo.com",
    "logo": "https://www.zebbingo.com/logo_white_backgroud.png"
  };

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col" data-version={packageInfo.version}>
        {/* 
          Inject JSON-LD structured data for SEO.
          We use dangerouslySetInnerHTML to prevent React from escaping special characters in the JSON string,
          ensuring search engines can parse it correctly. This is safe as the data is static.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
