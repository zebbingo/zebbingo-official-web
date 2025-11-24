'use client';

import { motion } from 'framer-motion';
import { characters } from '@/lib/data';
import CharacterCard from '@/components/CharacterCard';

const CharacterShowcase = () => {
  return (
    <section id="characters" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold text-zebbingo-900 mb-6"
          >
            Meet the Characters
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-soft-ink/80 leading-relaxed"
          >
            From ancient history to deep space, every figurine unlocks a new world of stories and interactive adventures.
          </motion.p>
        </div>

        {/* Character Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {characters.map((character, index) => (
            <motion.div
              key={character.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }} // Staggered reveal
            >
              <CharacterCard character={character} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CharacterShowcase;

