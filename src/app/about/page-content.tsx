'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Heart, Lightbulb } from 'lucide-react';
// import zebbingoImg from '../../assets/zebbingo.png'; // Removed import

const AboutPageContent = () => {
  return (
    <div className="bg-porcelain min-h-screen">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-zebbingo-100/50 rounded-full blur-3xl -z-10 opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-display font-bold text-zebbingo-900 mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-soft-ink/80 max-w-3xl mx-auto leading-relaxed"
          >
            We are building a bridge between the timeless magic of storytelling and the boundless potential of artificial intelligence.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-zebbingo-200 to-transparent rounded-full blur-3xl opacity-30 scale-90" />
              <Image 
                src="/assets/zebbingo.png"
                alt="Zebbingo Mascot"
                className="relative w-full max-w-md mx-auto drop-shadow-2xl"
                width={400}
                height={400}
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-zebbingo-800">
                The Spirit of Zebbingo
              </h2>
              <p className="text-lg text-soft-ink leading-relaxed">
                Zebbingo is more than just a name; it&apos;s the embodiment of curiosity. Our mascot, Zebbingo, is a time traveler and explorer, journeying through history to collect stories and wisdom.
              </p>
              <p className="text-lg text-soft-ink leading-relaxed">
                Like him, we believe that the best way to learn is through adventure. We don&apos;t just make toys; we create companions that invite children to ask questions, imagine new worlds, and discover the joy of conversation.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-zebbingo-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-zebbingo-900">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Companionship",
                desc: "We design for emotional connection, not just utility. A friend that listens is worth more than a device that just plays."
              },
              {
                icon: Sparkles,
                title: "Delight",
                desc: "Every interaction should feel magical. From the golden glow to the tactile finish, we obsess over the details that bring joy."
              },
              {
                icon: Lightbulb,
                title: "Curiosity",
                desc: "Questions are the engine of growth. We build safe spaces for children to wonder, ask, and explore freely."
              }
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-zebbingo-100 text-center hover:shadow-glow transition-shadow"
              >
                <div className="w-16 h-16 mx-auto bg-zebbingo-100 text-zebbingo-600 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-display font-bold text-zebbingo-800 mb-4">{value.title}</h3>
                <p className="text-soft-ink/80 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPageContent;

