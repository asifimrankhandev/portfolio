import { useEffect, useState } from 'react';

export const useScrollSpy = (sectionIds: string[], offset = 140): string => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const isMobileNav = window.innerWidth <= 820;
      const headerOffset = isMobileNav ? Math.max(window.innerHeight * 0.3, 180) : offset;
      const scrollPosition = window.scrollY + headerOffset;

      let currentId = sectionIds[0];
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentId = id;
          }
        }
      }
      setActiveSection(currentId);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};
