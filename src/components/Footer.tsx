import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-primary-foreground py-16 md:py-20 px-4 md:px-8">
      <div className="container mx-auto text-center space-y-8">
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's Bloom Together
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Ready to bring the beauty of HADAD's handcrafted gypsophila to your sales business? We're here to help you create something extraordinary.
          </p>
        </div>

        <div className="space-y-6 animate-fade-in-scale">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold">
              Get in touch:
            </h3>
            
            <a 
              href="mailto:hadadfarm5@gmail.com"
              className="inline-flex items-center space-x-3 text-lg md:text-xl bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>hadadfarm5@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm md:text-base text-primary-foreground/70 italic">
            "Every inquiry is the beginning of a beautiful creation"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;