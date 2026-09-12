import { useState, useEffect } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Determine if device has a fine pointer (mouse)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const checkHover = (e) => {
      const target = e.target;
      // Check if we're hovering over something clickable
      const isClickable = target.closest('a') || 
                          target.closest('button') || 
                          target.closest('input') || 
                          target.closest('textarea') ||
                          target.tagName.toLowerCase() === 'a' ||
                          target.tagName.toLowerCase() === 'button';
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousemove', checkHover);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', checkHover);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Global Spotlight Glow (Very subtle) */}
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div 
          className="absolute -translate-x-1/2 -translate-y-1/2 opacity-20 transition-opacity duration-500 ease-out mix-blend-overlay"
          style={{
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%)',
          }}
        />
      </div>

      {/* Actual Cursor Dot */}
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div 
          className={`absolute rounded-full bg-white -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
            isHovering ? 'w-12 h-12 opacity-50' : 'w-4 h-4 opacity-100'
          }`}
        />
      </div>
    </>
  );
};
