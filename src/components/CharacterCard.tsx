'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Character } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const isComingSoon = character.status === 'coming_soon';

  return (
    <motion.div
      whileHover={isComingSoon ? {} : { y: -8, scale: 1.02 }}
      className={cn(
        "group relative bg-white rounded-3xl overflow-visible transition-all duration-300",
        isComingSoon 
          ? "opacity-80 border-2 border-dashed border-zebbingo-200 cursor-default" 
          : "shadow-sm hover:shadow-glow cursor-pointer border border-transparent"
      )}
    >
      {/* Background Gradient Blob (Visible on Hover) */}
      {!isComingSoon && (
        <div 
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl bg-gradient-to-br",
            character.gradient || "from-zebbingo-400 to-zebbingo-600"
          )}
        />
      )}

      {/* Card Content Container */}
      <div className="p-6 pb-8 flex flex-col items-center relative z-10">
        
        {/* Character Image Area */}
        <div className="relative w-full aspect-square mb-6 flex items-center justify-center">
          {/* Golden Halo Effect behind image */}
          {!isComingSoon && (
            <motion.div 
              className="absolute w-[80%] h-[80%] bg-golden-halo blur-2xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          )}
          
          <div className={cn(
            "relative w-48 h-48 transition-all duration-500",
            isComingSoon ? "grayscale opacity-50" : "group-hover:scale-110"
          )}>
            <Image
              src={character.imagePath}
              alt={character.name}
              fill
              className="object-contain drop-shadow-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Status Badge */}
          {isComingSoon && (
            <div className="absolute top-0 right-0 bg-zebbingo-100 text-zebbingo-600 px-3 py-1 rounded-full text-xs font-bold font-display flex items-center gap-1 shadow-sm">
              <Clock size={12} />
              Coming Soon
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="text-center space-y-2 w-full">
          <h3 className="text-2xl font-display font-bold text-zebbingo-900 group-hover:text-primary-gradient transition-colors">
            {character.name}
          </h3>
          <p className="text-sm font-bold text-zebbingo-500 uppercase tracking-wide">
            {character.role}
          </p>
          <p className="text-soft-ink/80 text-sm leading-relaxed line-clamp-2 mt-2 min-h-[40px]">
            {character.description}
          </p>
        </div>

        {/* Tags (Optional, visible on hover or always if preferred) */}
        {character.tags && character.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
            {character.tags.slice(0, 2).map(tag => (
              <span key={tag} className="px-2 py-0.5 bg-zebbingo-50 text-zebbingo-700 text-[10px] rounded-md font-medium border border-zebbingo-100">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CharacterCard;

