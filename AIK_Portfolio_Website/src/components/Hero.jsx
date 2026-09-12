import { useReveal } from '../hooks/useReveal';
import { useMagnetic } from '../hooks/useMagnetic';

export const Hero = () => {
  const textRef = useReveal();
  const imageRef = useReveal();
  const badgeMagnetic = useMagnetic(0.5);
  const btn1Magnetic = useMagnetic(0.2);
  const btn2Magnetic = useMagnetic(0.2);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-[#fdfdfc]" id="home">
      <div className="container mx-auto px-6 max-w-7xl relative z-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left: Text Content */}
        <div className="w-full lg:w-3/5 reveal" ref={textRef}>
          
          <div className="mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-[#111111]/50 mb-4">
              Front-End Developer
            </p>
            <div className="w-12 h-px bg-[#111111]/20"></div>
          </div>
          
          <h1 className="font-serif text-[4.5rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] leading-[0.9] tracking-tighter text-[#111111] mb-8">
            Radical <br className="hidden sm:block" />
            <span className="italic opacity-60 font-light">empathy</span> <br className="hidden sm:block" />
            in code.
          </h1>
          
          <p className="max-w-md text-[#111111]/70 font-light leading-relaxed text-lg md:text-xl mb-12">
            Hi, I’m Asif Imran Khan. A former Registered Nurse turned Frontend Engineer. I build accessible, high-performance interfaces with clinical precision and human care.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <a 
              ref={btn1Magnetic}
              href="#contact" 
              className="group flex items-center gap-4 text-[#111111] hover:opacity-70 transition-opacity p-4 -ml-4"
            >
              <span className="text-xs font-bold uppercase tracking-widest pointer-events-none">Get in touch</span>
              <div className="w-8 h-px bg-[#111111] group-hover:w-12 transition-all duration-300 pointer-events-none"></div>
            </a>
            
            <a 
              ref={btn2Magnetic}
              href="#projects" 
              className="group flex items-center gap-4 text-[#111111]/60 hover:text-[#111111] transition-colors p-4 -ml-4 sm:ml-0"
            >
              <span className="text-xs font-bold uppercase tracking-widest pointer-events-none">View work</span>
              <div className="w-8 h-px bg-[#111111]/40 group-hover:w-12 group-hover:bg-[#111111] transition-all duration-300 pointer-events-none"></div>
            </a>
          </div>

        </div>
        
        {/* Right: Elegant Image */}
        <div className="w-full lg:w-2/5 reveal relative" ref={imageRef}>
          <div className="relative w-full aspect-[3/4] max-w-[450px] mx-auto lg:ml-auto overflow-hidden bg-[#f0f0f0] animate-float">
            <img 
              src="/assets/images/profile-optimized.webp" 
              alt="Asif Imran Khan" 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          
          {/* Dynamic Spinning Badge */}
          <div 
            ref={badgeMagnetic}
            className="absolute -bottom-8 -left-8 w-32 h-32 hidden lg:flex items-center justify-center z-30 cursor-pointer"
          >
            <div className="w-full h-full animate-spin-slow pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#111111]" fill="currentColor">
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                <text className="text-[10px] font-bold uppercase tracking-[0.25em]">
                  <textPath href="#circlePath" startOffset="0%">
                    AVAILABLE FOR WORK • FRONTEND EXPERT • 
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute w-2 h-2 bg-[#111111] rounded-full pointer-events-none"></div>
          </div>
          
          <div className="absolute top-1/4 -right-12 w-32 h-px bg-[#111111]/10 hidden lg:block pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};
