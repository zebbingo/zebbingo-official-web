'use client';

import { motion } from 'framer-motion';
import { Heart, Lightbulb, Sparkles, BookOpen } from 'lucide-react';

const values = [
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'Merging the magic of storytelling with the power of AI.',
  },
  {
    icon: Heart,
    title: 'Companionship',
    description: 'A friend that listens, learns, and grows with your child.',
  },
  {
    icon: Lightbulb,
    title: 'Curiosity',
    description: 'Sparking questions and nurturing a love for learning.',
  },
  {
    icon: BookOpen,
    title: 'Storytelling',
    description: 'Timeless tales that inspire imagination and wonder.',
  },
];

const Mission = () => {
  return (
    <section id="mission" className="py-24 bg-porcelain relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zebbingo-50 rounded-full blur-3xl opacity-60 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold text-zebbingo-900 mb-8"
          >
            Our Mission
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-soft-ink leading-relaxed font-medium"
          >
            &quot;We bridge the gap between <span className="text-zebbingo-600">timeless storytelling</span> and <span className="text-zebbingo-600">cutting-edge AI technology</span>, fostering curiosity and joy in every child.&quot;
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-white shadow-sm hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-zebbingo-100 rounded-xl flex items-center justify-center text-zebbingo-600 mb-6">
                <value.icon size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-zebbingo-900 mb-3">
                {value.title}
              </h3>
              <p className="text-soft-ink/80 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
