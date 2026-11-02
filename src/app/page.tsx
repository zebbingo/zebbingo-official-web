import Image from "next/image";
import Link from "next/link";
import ProductIntroduction from "@/components/ProductIntroduction";

export default function Home() {
  return (
    <div className="relative isolate">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.94), rgba(255,255,255,0.94)), url('/assets/background.png')" }}
      />
      <header className="px-6 pr-16 pt-8 md:pl-10 md:pr-28">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6">
          <Image
            src="/assets/Zebbingo.png"
            alt="Zebbingo"
            width={730}
            height={160}
            sizes="160px"
            className="h-auto w-32 sm:w-40"
            priority
          />
          <nav aria-label="Main navigation">
            <Link
              href="/safety/"
              className="font-semibold underline underline-offset-4 hover:text-sky-800"
            >
              Safety
            </Link>
          </nav>
        </div>
      </header>
      <ProductIntroduction />
    </div>
  );
}
