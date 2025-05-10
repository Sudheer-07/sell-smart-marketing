
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container-fluid flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-bold text-softsell-blue dark:text-white flex items-center gap-2">
          <img src="/src/assets/favicon.svg" alt="SoftSell Logo" className="w-6 h-6 md:w-8 md:h-8" />
          SoftSell
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-gray-700 dark:text-gray-200 hover:text-softsell-blue dark:hover:text-softsell-lightBlue transition-colors">How It Works</a>
          <a href="#why-choose-us" className="text-gray-700 dark:text-gray-200 hover:text-softsell-blue dark:hover:text-softsell-lightBlue transition-colors">Why Choose Us</a>
          <a href="#testimonials" className="text-gray-700 dark:text-gray-200 hover:text-softsell-blue dark:hover:text-softsell-lightBlue transition-colors">Testimonials</a>
          <a href="#contact" className="btn-primary hover-lift">Get Started</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 dark:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t shadow-lg slide-in">
          <div className="container-fluid py-4 flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="text-gray-700 dark:text-gray-200 hover:text-softsell-blue dark:hover:text-softsell-lightBlue transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#why-choose-us" 
              className="text-gray-700 dark:text-gray-200 hover:text-softsell-blue dark:hover:text-softsell-lightBlue transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 dark:text-gray-200 hover:text-softsell-blue dark:hover:text-softsell-lightBlue transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="bg-softsell-blue text-white py-3 px-4 rounded-lg text-center font-medium hover-scale"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
