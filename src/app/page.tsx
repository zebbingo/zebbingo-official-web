import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 relative">

      {/* Main Container */}
      <div className="w-full max-w-[1400px] flex flex-col gap-6 md:gap-10">

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-4 lg:gap-8 items-start">

          {/* Left Column */}
          <div className="flex flex-col items-start space-y-0 -mt-4 lg:-mt-12">
             {/* Top Headline - Reduced size */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight tracking-tight whitespace-nowrap">
              We&apos;re building something exciting.
            </h1>

            {/* Logo Section */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 -ml-5 -mt-8 -mb-8">
              <Image
                src="/assets/Zebbingo_Logo_RGB.png"
                alt="Zebbingo Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>

            {/* Description - Increased size */}
            <p className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold leading-tight text-black max-w-xl lg:max-w-2xl tracking-tight -mt-4">
              Our interactive, AI-powered device nurtures curiosity, creativity and emotional intelligence through personalised storytelling that grows with every child.
            </p>
          </div>

          {/* Right Column - Cowboy */}
          <div className="flex justify-center lg:justify-end relative items-center h-full mt-4 lg:mt-0 pointer-events-none">
            <div className="relative w-96 h-96 md:w-[600px] md:h-[600px] lg:w-[680px] lg:h-[680px] lg:-mr-20 lg:-mt-20">
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
        <div className="mt-2 lg:-mt-16 flex justify-end lg:pr-20 relative z-10">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-right tracking-tight">
            What will you find on your <span className="text-[#6EC4E8]">Zebbingo</span> adventure?
          </p>
        </div>

      </div>
    </div>
  );
}
