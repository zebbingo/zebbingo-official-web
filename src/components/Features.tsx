import { Radio, MessageCircle, Smartphone, ShieldCheck } from 'lucide-react';

const features = [
  {
    name: 'NFC Character Interaction',
    description: 'Simply place a character on top of the speaker to instantly unlock their unique stories and music. No screens required.',
    icon: Radio,
  },
  {
    name: 'AI Conversation Mode',
    description: 'Zebbingo listens and responds. Children can ask questions or chat with their favorite characters in real-time.',
    icon: MessageCircle,
  },
  {
    name: 'Parental Control App',
    description: 'Manage content, set usage limits, and monitor playtime remotely via our dedicated mobile companion app.',
    icon: Smartphone,
  },
  {
    name: 'Safe & Durable',
    description: 'Built for kids with child-safe materials, a robust 24-hour battery, and privacy-focused design.',
    icon: ShieldCheck,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Magic Inside Every Box
          </h2>
          <p className="text-lg text-gray-600">
            Zebbingo combines advanced technology with traditional play patterns to create a truly immersive experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="p-6 bg-gray-50 rounded-2xl hover:bg-zebbingo-50 transition-colors duration-300">
              <div className="w-12 h-12 bg-zebbingo-100 text-zebbingo-500 rounded-xl flex items-center justify-center mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

