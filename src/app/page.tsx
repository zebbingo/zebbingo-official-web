import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-x-hidden">

      {/* ==================== MOBILE/TABLET LAYOUT (< 1280px) ==================== */}
      <div className="xl:hidden flex flex-col items-center w-full max-w-[600px] mx-auto text-center">

        {/* 1. Logo - Spanning nearly whole width */}
        <div className="relative w-[90%] aspect-square max-h-[300px] -my-10">
           <Image
            src="/assets/Zebbingo_Logo_RGB.png"
            alt="Zebbingo Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* 2. Whitespace */}
        <div className="h-8 md:h-12"></div>

        {/* 3. Cowboy Image - Glowing */}
        <div className="relative w-[80%] aspect-square max-w-[400px]">
          <Image
            src="/assets/cowboy.png"
            alt="Zebbingo Cowboy"
            fill
            className="object-contain drop-shadow-[0_0_50px_rgba(255,200,50,0.8)]"
            priority
          />
        </div>

        {/* 4. Whitespace (same as above) */}
        <div className="h-8 md:h-12"></div>

        {/* 5. Heading - Bold, ensure single line */}
        {/* Using clamp or responsive text to ensure it fits on one line */}
        <h1 className="text-[clamp(1.2rem,4vw,2rem)] font-bold text-black leading-tight w-full">
          We&apos;re building something exciting.
        </h1>

        {/* 6. Main Text - Split into two paragraphs, NOT bold */}
        <div className="mt-4 text-base md:text-lg text-black leading-relaxed px-2 space-y-4 font-normal">
          <p>
            Our interactive, AI-powered device nurtures curiosity, creativity and emotional intelligence.
          </p>
          <p>
            Through personalised storytelling that grows with every child.
          </p>
        </div>

        {/* 7. CTA - Single line, Bold */}
        <div className="mt-8 w-full">
          <p className="text-[clamp(1rem,3.5vw,1.8rem)] font-bold text-black">
            What will you find on your <span className="text-[#6EC4E8]">Zebbingo</span> adventure?
          </p>
        </div>

      </div>


      {/* ==================== DESKTOP LAYOUT (>= 1280px) ==================== */}
      {/* This preserves the original layout that was confirmed as "fine" */}
      <div className="hidden xl:flex w-full max-w-[1400px] flex-col gap-10">

        {/* Content Grid */}
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-8 items-start">

          {/* Left Column */}
          <div className="flex flex-col items-start space-y-0 -mt-12">
             {/* Top Headline */}
            <h1 className="text-5xl font-bold text-black leading-tight tracking-tight">
              We&apos;re building something exciting.
            </h1>

            {/* Logo Section */}
            <div className="relative w-96 h-96 -ml-5 -mt-8 -mb-8">
              <Image
                src="/assets/Zebbingo_Logo_RGB.png"
                alt="Zebbingo Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>

            {/* Description */}
            <p className="text-3xl xl:text-4xl 2xl:text-[2.5rem] font-bold leading-tight text-black max-w-2xl tracking-tight -mt-4">
              Our interactive, AI-powered device nurtures curiosity, creativity and emotional intelligence through personalised storytelling that grows with every child.
            </p>
          </div>

          {/* Right Column - Cowboy */}
          <div className="flex justify-end relative items-center h-full pointer-events-none">
            <div className="relative w-[680px] h-[680px] -mr-20 -mt-20">
              {/* Cowboy Image with Glow */}
              <Image
                src="/assets/cowboy.png"
                alt="Zebbingo Cowboy"
                fill
                className="object-contain drop-shadow-[0_0_70px_rgba(255,200,50,0.95)]"
                priority
              />
            </div>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="mt-8 flex justify-end pr-20 relative z-10">
          <p className="text-3xl xl:text-4xl 2xl:text-[2.5rem] font-bold text-black text-right tracking-tight">
            What will you find on your <span className="text-[#6EC4E8]">Zebbingo</span> adventure?
          </p>
        </div>

      </div>
    </div>
  );
}
