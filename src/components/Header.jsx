import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Header = () => {
  const { themePreference, setThemePreference } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const activeSection = useScrollSpy(isHome ? ['home', 'projects', 'about', 'contact'] : []);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e, sectionId) => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e) => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <a 
        href="#main-content"
        className="absolute -top-12 left-4 z-[1200] px-4 py-3 rounded bg-[#111111] text-white font-bold focus:top-4 transition-all"
      >
        Skip to content
      </a>
      
      <header className={`fixed top-0 inset-x-0 z-[1000] transition-all duration-700 ${isScrolled ? 'bg-[#111111]/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8 mix-blend-difference'}`}>
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            className={`font-serif text-2xl md:text-3xl font-extrabold italic tracking-tight transition-opacity hover:opacity-70 ${isScrolled ? 'text-white' : 'text-[#fdfdfc]'}`} 
            to="/" 
            aria-label="Home"
            onClick={handleLogoClick}
          >
            AIK.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Primary navigation">
            {['about', 'projects', 'contact'].map((section) => (
              <a 
                key={section}
                className={`text-sm tracking-wide uppercase transition-colors duration-300 ${activeSection === section ? 'font-bold' : 'opacity-70 hover:opacity-100'} ${isScrolled ? 'text-white' : 'text-[#fdfdfc]'}`} 
                href={isHome ? `#${section}` : `/#${section}`} 
                onClick={(e) => handleLinkClick(e, section)}
              >
                {section}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 -mr-2 ${isScrolled ? 'text-white' : 'text-[#fdfdfc]'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-[#111111] pt-28 px-6 pb-6 flex flex-col md:hidden overflow-y-auto">
          <nav className="flex flex-col gap-8 items-start animate-in fade-in slide-in-from-bottom-4 duration-300 w-full">
            {['about', 'projects', 'contact'].map((section) => (
              <a 
                key={section}
                className={`text-5xl font-serif tracking-tight w-full py-4 border-b border-white/10 transition-colors ${activeSection === section ? 'text-white italic' : 'text-white/50'}`} 
                href={isHome ? `#${section}` : `/#${section}`} 
                onClick={(e) => handleLinkClick(e, section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};
