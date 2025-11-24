import { Character } from './types';

// Import all images to ensure they are bundled (Next.js handles static assets differently, 
// but for type safety in our data object, we can reference paths relative to public or imported assets if we change strategy.
// For now, we'll use string paths that match what we expect in the public folder or handle imports in the component.)

export const characters: Character[] = [
  {
    id: 'zebbingo',
    name: 'Zebbingo',
    role: 'The Time Traveller',
    description: 'A curious soul drawn to the mysteries of the past and the wonders of the future. The embodiment of exploration.',
    imagePath: '/assets/zebbingo.png', // Assuming we'll move assets to public or import them
    status: 'active',
    tags: ['Flagship', 'Adventure', 'History'],
    gradient: 'from-blue-400 to-indigo-500'
  },
  {
    id: 'tara',
    name: 'Tara',
    role: 'The T-Rex',
    description: 'An adventurous dinosaur stomping through prehistoric jungles, teaching about the ancient world.',
    imagePath: '/assets/t-rex.png',
    status: 'active',
    tags: ['Dinosaurs', 'Nature', 'History'],
    gradient: 'from-green-400 to-emerald-600'
  },
  {
    id: 'cleopatra',
    name: 'Cleopatra',
    role: 'Queen of Egypt',
    description: 'Dazzling beauty, diplomatic skill, and ancient history come alive with this legendary ruler.',
    imagePath: '/assets/cleopatra.png',
    status: 'active',
    tags: ['History', 'Leadership', 'Royalty'],
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'julius-caesar',
    name: 'Julius Caesar',
    role: 'Roman General',
    description: 'Master strategist sharing tales of ambition, leadership, and the glory of Rome.',
    imagePath: '/assets/julius_caesar.png',
    status: 'active',
    tags: ['History', 'Strategy', 'Leadership'],
    gradient: 'from-red-500 to-red-700'
  },
  {
    id: 'ishi',
    name: 'Ishi',
    role: 'The Ninja',
    description: 'Stealth, mystery, and the legends of feudal Japan whisper through the night.',
    imagePath: '/assets/ninja.png',
    status: 'active',
    tags: ['History', 'Japan', 'Mystery'],
    gradient: 'from-slate-700 to-slate-900'
  },
  {
    id: 'nate',
    name: 'Nate',
    role: 'The Cowboy',
    description: 'Guardian of the Wild West, bringing justice and tales of the frontier.',
    imagePath: '/assets/cowboy.png',
    status: 'active',
    tags: ['History', 'Western', 'Adventure'],
    gradient: 'from-amber-600 to-orange-700'
  },
  {
    id: 'dr-emma',
    name: 'Dr. Emma',
    role: 'The Doctor',
    description: 'Tales of medical heroes, how the body works, and the joy of helping others.',
    imagePath: '/assets/doctor.png',
    status: 'active',
    tags: ['Career', 'Science', 'Health'],
    gradient: 'from-teal-400 to-teal-600'
  },
  {
    id: 'dr-nova',
    name: 'Dr. Nova',
    role: 'The Scientist',
    description: 'Unraveling the mysteries of the cosmos and the excitement of scientific discovery.',
    imagePath: '/assets/scientist.png',
    status: 'active',
    tags: ['Career', 'Science', 'Space'],
    gradient: 'from-indigo-400 to-purple-600'
  },
  {
    id: 'celeste',
    name: 'Celeste',
    role: 'The Astronaut',
    description: 'Exploring nebulae, distant worlds, and the wonders of zero gravity.',
    imagePath: '/assets/astronaut.png',
    status: 'active',
    tags: ['Career', 'Space', 'Adventure'],
    gradient: 'from-blue-500 to-violet-600'
  },
  {
    id: 'blake',
    name: 'Cpt. Blake',
    role: 'The Firefighter',
    description: 'Stories of bravery, safety, and the importance of our community heroes.',
    imagePath: '/assets/fire_fighter.png',
    status: 'active',
    tags: ['Career', 'Safety', 'Hero'],
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 'pip',
    name: 'Pip',
    role: 'The Puppy',
    description: 'An adorable, wonder-filled exploration of the everyday world through a puppy\'s eyes.',
    imagePath: '/assets/puppy.png',
    status: 'active',
    tags: ['Animals', 'Fun', 'Early Learning'],
    gradient: 'from-yellow-300 to-orange-400'
  },
  {
    id: 'serena',
    name: 'Serena',
    role: 'The Princess',
    description: 'An inquisitive explorer using her powers and position to help her kingdom.',
    imagePath: '/assets/princess.png',
    status: 'active',
    tags: ['Fantasy', 'Leadership', 'Magic'],
    gradient: 'from-pink-400 to-rose-500'
  },
  {
    id: 'lumi',
    name: 'Lumi',
    role: 'The Unicorn',
    description: 'Spreading magic, rainbows, and happiness wherever she gallops.',
    imagePath: '/assets/unicorn.png',
    status: 'active',
    tags: ['Fantasy', 'Magic', 'Animals'],
    gradient: 'from-fuchsia-400 to-pink-600'
  },
  {
    id: 'lucius',
    name: 'Lucius',
    role: 'Roman Centurion',
    description: 'Experience military life, discipline, and the daily reality of the Roman Empire.',
    imagePath: '/assets/julius_caesar.png', // Reusing asset for demo
    status: 'coming_soon',
    tags: ['History', 'Military', 'Discipline']
  },
  {
    id: 'maximus',
    name: 'Maximus',
    role: 'Gladiator',
    description: 'Hard-bitten gladiator sharing stories of courage, skill, and survival in the arena.',
    imagePath: '/assets/julius_caesar.png', // Reusing asset for demo
    status: 'coming_soon',
    tags: ['History', 'Action', 'Courage']
  },
  {
    id: 'george',
    name: 'Washington',
    role: 'First President',
    description: 'The "Father of the Nation" discussing leadership, liberty, and the founding of the US.',
    imagePath: '/assets/cowboy.png', // Reusing asset for demo placeholder
    status: 'coming_soon',
    tags: ['History', 'Leadership', 'USA']
  },
  {
    id: 'cat',
    name: 'Whiskers',
    role: 'The Cat',
    description: 'Curious tales from the rooftops.',
    imagePath: '/assets/zebbingo.png', // Placeholder
    status: 'coming_soon',
    tags: ['Animals']
  },
  {
    id: 'shakespeare',
    name: 'Shakespeare',
    role: 'The Bard',
    description: 'The world\'s greatest storyteller.',
    imagePath: '/assets/zebbingo.png', // Placeholder
    status: 'coming_soon',
    tags: ['History', 'Arts']
  },
  {
    id: 'amelia',
    name: 'Amelia',
    role: 'The Aviator',
    description: 'Taking to the skies.',
    imagePath: '/assets/zebbingo.png', // Placeholder
    status: 'coming_soon',
    tags: ['History', 'Adventure']
  },
  {
    id: 'viking',
    name: 'Erik',
    role: 'The Viking',
    description: 'Sailing the northern seas.',
    imagePath: '/assets/zebbingo.png', // Placeholder
    status: 'coming_soon',
    tags: ['History', 'Adventure']
  }
];
