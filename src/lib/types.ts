export interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  imagePath: string;
  status: 'active' | 'coming_soon';
  tags?: string[];
  gradient?: string; // Optional custom gradient for the character card
}

// Helper to get image path, falling back to a default if not found (in a real app)
// For now, we assume assets exist or map to the ones we have
export const getCharacterImage = (id: string) => {
  // Mapping based on available assets in src/assets
  const imageMap: Record<string, string> = {
    'zebbingo': 'zebbingo.png',
    'cowboy': 'cowboy.png',
    'astronaut': 'astronaut.png',
    'cleopatra': 'cleopatra.png',
    'doctor': 'doctor.png',
    'fire-fighter': 'fire_fighter.png',
    'julius-caesar': 'julius_caesar.png',
    'ninja': 'ninja.png',
    'princess': 'princess.png',
    'puppy': 'puppy.png',
    'scientist': 'scientist.png',
    't-rex': 't-rex.png',
    'unicorn': 'unicorn.png',
    // Default fallback for others until assets are added
    'default': 'zebbingo.png'
  };

  return imageMap[id] || imageMap['default'];
};

