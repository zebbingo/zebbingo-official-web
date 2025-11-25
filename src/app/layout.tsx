import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Zebbingo',
  description: "Our interactive, AI-powered device nurtures curiosity, creativity and emotional intelligence through personalised storytelling that grows with every child.",
  icons: {
    icon: '/logo_white_backgroud.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
