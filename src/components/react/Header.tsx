import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const NAV_SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

interface HeaderProps {
  currentPath: string;
}

export const Header = ({ currentPath }: HeaderProps) => {
  const isHome = currentPath === '/';
  const activeSection = useScrollSpy(isHome ? NAV_SECTIONS.map(({ id }) => id) : []);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      event.preventDefault();
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const sectionLink = (section: (typeof NAV_SECTIONS)[number], mobile = false) => (
    <a
      key={section.id}
      href={section.id === 'home' ? (isHome ? '#home' : '/') : isHome ? `#${section.id}` : `/#${section.id}`}
      onClick={(event) => handleLinkClick(event, section.id)}
      aria-current={activeSection === section.id ? 'location' : undefined}
      className={`${mobile
        ? 'border-b border-line py-4 text-2xl font-display font-semibold'
        : 'py-1 text-base font-normal uppercase tracking-normal'} transition-colors hover:text-white/75 ${activeSection === section.id ? 'text-white' : 'text-white/95'}`}
    >
      {section.label}
    </a>
  );

  return (
    <>
      <a
        href="#main-content"
        className="absolute -top-16 left-4 z-[1200] rounded bg-ink px-4 py-3 font-bold text-canvas focus:top-4"
      >
        Skip to content
      </a>

      <header className="absolute inset-x-0 top-0 z-[1000]">
        <div className="relative h-[4.25rem] w-full">
          <nav className="absolute left-[18.75%] top-0 hidden items-center gap-[clamp(2rem,6.5vw,6rem)] pt-4 min-[900px]:flex" aria-label="Primary navigation">
            {sectionLink(NAV_SECTIONS[0])}
            {sectionLink(NAV_SECTIONS[1])}
          </nav>

          <div aria-hidden="true" className="nav-notch absolute left-1/2 top-0 hidden h-[3rem] w-[14vw] min-w-32 max-w-48 -translate-x-1/2 min-[900px]:block" />

          <nav className="absolute left-[65.3%] top-0 hidden items-center gap-[clamp(2rem,6.5vw,6rem)] pt-4 min-[900px]:flex" aria-label="Secondary navigation">
            {sectionLink(NAV_SECTIONS[2])}
            {sectionLink(NAV_SECTIONS[3])}
          </nav>

          <button
            className="absolute right-4 top-2.5 z-[1200] grid size-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md min-[900px]:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="fixed inset-0 z-[900] flex flex-col bg-canvas px-6 pb-8 pt-24 min-[900px]:hidden">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {NAV_SECTIONS.map((section) => sectionLink(section, true))}
          </nav>
        </div>
      )}
    </>
  );
};
