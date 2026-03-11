import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type InfoPageSection = {
  title: string;
  content: ReactNode;
};

type InfoPageLayoutProps = {
  title: string;
  description: string;
  lastUpdated?: string;
  sections: InfoPageSection[];
};

export default function InfoPageLayout({
  title,
  description,
  lastUpdated,
  sections,
}: InfoPageLayoutProps) {
  return (
    <main className="min-h-screen bg-white pt-28 pb-16 xl:bg-transparent">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zebbingo-700 transition-colors hover:text-zebbingo-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>

        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-display font-bold text-zebbingo-900 md:text-5xl">
            {title}
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-soft-ink/80">
            {description}
          </p>
          {lastUpdated ? (
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-zebbingo-600/80">
              Last updated: {lastUpdated}
            </p>
          ) : null}
        </header>

        <div className="space-y-8">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-zebbingo-100 bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="mb-4 text-2xl font-display font-bold text-zebbingo-800">
                {section.title}
              </h2>
              <div className="space-y-4 leading-relaxed text-soft-ink">{section.content}</div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
