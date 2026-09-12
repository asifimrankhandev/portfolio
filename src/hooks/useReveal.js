import { useEffect, useRef } from 'react';

export const useReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      if (ref.current) {
        ref.current.classList.add('visible');
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return ref;
};
