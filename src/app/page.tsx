import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 relative">
      
      {/* Main Container */}
      <div className="w-full max-w-7xl flex flex-col gap-8 md:gap-12">
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col items-start space-y-10 pt-8 lg:pt-16">
             {/* Top Headline */}
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              We&apos;re building something exciting.
            </h1>

            {/* Logo Section - Increased size to show text in image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 -ml-4">
              <Image 
                src="/assets/Zebbingo_Logo_RGB.png" 
                alt="Zebbingo Logo" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>

            {/* Description */}
            <p className="text-2xl md:text-3xl font-bold leading-tight text-black max-w-lg">
              Our interactive, AI-powered device nurtures curiosity, creativity and emotional intelligence through personalised storytelling that grows with every child.
            </p>
          </div>

          {/* Right Column - Cowboy */}
          <div className="flex justify-center lg:justify-end relative items-center h-full">
            <div className="relative w-80 h-80 md:w-[600px] md:h-[600px] lg:-mr-12">
              {/* Cowboy Image with Glow */}
              <Image
                src="/assets/cowboy.png"
                alt="Zebbingo Cowboy"
                fill
                className="object-contain drop-shadow-[0_0_60px_rgba(255,200,50,0.9)]"
                priority
              />
            </div>
          </div>
        
        </div>

        {/* Bottom Text */}
        <div className="mt-4 lg:mt-0 flex justify-end lg:pr-12">
          <p className="text-2xl md:text-3xl font-bold text-black text-right">
            What will you find on your <span className="text-[#6EC4E8]">Zebbingo</span> adventure?
          </p>
        </div>

      </div>
    </div>
  );
}
