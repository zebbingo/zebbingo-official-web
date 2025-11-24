'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import cowboyImg from '../assets/cowboy.png'; // Removed import

const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background Decor - Magic Glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-zebbingo-100/50 rounded-full blur-3xl -z-10 opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-yellow-100/50 rounded-full blur-3xl -z-10 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold text-soft-ink leading-[1.1] mb-6">
                We&apos;re building <br />
                <span className="text-primary-gradient">something exciting.</span>
              </h1>
              <p className="text-lg md:text-xl text-soft-ink/80 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                A screen-free AI companion that nurtures curiosity, creativity, and emotional intelligence through personalized storytelling.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button size="lg" className="rounded-full text-lg h-14 px-8">
                Explore Characters <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="ghost" size="lg" className="rounded-full text-lg h-14 px-8">
                How it works
              </Button>
            </motion.div>
          </div>
          
          {/* Character Visual */}
          <motion.div 
            className="flex-1 w-full flex justify-center md:justify-end relative"
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
             {/* Glow effect behind the character */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-golden-halo blur-[60px] rounded-full -z-10"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image 
                src="/assets/cowboy.png"
                alt="Zebbingo Cowboy Character" 
                className="w-full max-w-lg h-auto object-contain drop-shadow-2xl"
                width={500}
                height={500}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
