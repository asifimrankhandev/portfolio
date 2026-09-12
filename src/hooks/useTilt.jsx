import { useEffect, useRef } from 'react';

export const useTilt = (settings = {}) => {
  const ref = useRef(null);
  
  const defaultSettings = {
    max: 15,
    perspective: 1000,
    scale: 1.02,
    speed: 1000,
    ...settings
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Disable on touch devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    let transitionTimeout;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = (e.clientX - left) / width; // 0 to 1
      const y = (e.clientY - top) / height; // 0 to 1
      
      const tiltX = (defaultSettings.max / 2) - (x * defaultSettings.max);
      const tiltY = (y * defaultSettings.max) - (defaultSettings.max / 2);
      
      element.style.transform = `perspective(${defaultSettings.perspective}px) rotateX(${tiltY}deg) rotateY(${-tiltX}deg) scale3d(${defaultSettings.scale}, ${defaultSettings.scale}, ${defaultSettings.scale})`;
    };

    const handleMouseEnter = () => {
      element.style.transition = 'none';
      clearTimeout(transitionTimeout);
    };

    const handleMouseLeave = () => {
      element.style.transition = `transform ${defaultSettings.speed}ms cubic-bezier(.03,.98,.52,.99)`;
      element.style.transform = `perspective(${defaultSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [defaultSettings.max, defaultSettings.perspective, defaultSettings.scale, defaultSettings.speed]);

  return ref;
};
