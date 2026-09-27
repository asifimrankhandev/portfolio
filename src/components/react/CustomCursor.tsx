import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea');
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
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
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

      <div
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
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
