import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-zebbingo-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
             <h3 className="text-xl font-display font-bold text-zebbingo-600 mb-4">Zebbingo</h3>
             <p className="text-soft-ink/80 max-w-sm">
               Bringing imagination to life through screen-free AI companionship.
             </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-soft-ink mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/#mission" className="text-soft-ink/80 hover:text-zebbingo-600 transition-colors">Mission</Link></li>
              <li><Link href="/#about" className="text-soft-ink/80 hover:text-zebbingo-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-soft-ink/80 hover:text-zebbingo-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-soft-ink mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/#characters" className="text-soft-ink/80 hover:text-zebbingo-600 transition-colors">Characters</Link></li>
              <li><Link href="/#features" className="text-soft-ink/80 hover:text-zebbingo-600 transition-colors">Features</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zebbingo-50 pt-8 text-center text-sm text-soft-ink/60">
          <p>© {new Date().getFullYear()} Zebbingo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
