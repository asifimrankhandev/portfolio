import { useReveal } from '../hooks/useReveal';

export const About = () => {
  const titleRef = useReveal();
  const quoteRef = useReveal();
  const textRef = useReveal();
  const statsRef = useReveal();

  return (
    <section className="py-24 md:py-32 bg-[#fdfdfc]" id="about">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-20 reveal" ref={titleRef}>
          <p className="text-xs font-bold uppercase tracking-widest text-[#111111]/50 mb-4">Background</p>
          <div className="w-12 h-px bg-[#111111]/20 mb-8"></div>
          <h2 className="font-serif text-[3rem] md:text-[4rem] leading-none tracking-tight text-[#111111] italic">
            Precision & <br className="hidden sm:block" />
            Empathy.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Large Pull Quote */}
          <div className="lg:col-span-5 reveal" ref={quoteRef}>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.4] text-[#111111] tracking-tight">
              "My journey did not start behind a screen, but at the bedside. I build applications with the same care I once used in healthcare."
            </p>
          </div>

          {/* Body Text & Stack */}
          <div className="lg:col-span-7 flex flex-col gap-16 reveal" ref={textRef}>
            
            <div className="text-[#111111]/70 font-light leading-relaxed text-lg">
              <p className="mb-6">
                As a Registered Nurse, I learned to navigate high-pressure environments where precision and empathy are everything. In 2025, I decided to channel that same dedication into building digital solutions. 
              </p>
              <p>
                Today, I focus on accessible front-end experiences, creating user-centric applications that are both robust in architecture and intuitive in design.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" ref={statsRef}>
              {/* Stack */}
              <div className="bg-[#111111]/[0.02] backdrop-blur-md rounded-2xl p-8 border border-[#111111]/10 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#111111] mb-6 border-b border-[#111111]/10 pb-4">
                  Technical Stack
                </h4>
                <div className="flex flex-col gap-3 text-[#111111]/70 font-light leading-relaxed text-sm">
                  <span>React / JavaScript / PHP</span>
                  <span>HTML / CSS / Tailwind</span>
                  <span>Accessible UI Development</span>
                  <span>Responsive Design Systems</span>
                </div>
              </div>

              {/* Core Competencies */}
              <div className="bg-[#111111]/[0.02] backdrop-blur-md rounded-2xl p-8 border border-[#111111]/10 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#111111] mb-6 border-b border-[#111111]/10 pb-4">
                  Core Competencies
                </h4>
                <div className="flex flex-col gap-3 text-[#111111]/70 font-light leading-relaxed text-sm">
                  <span>Front-End Engineering</span>
                  <span>User-Centered Problem Solving</span>
                  <span>Healthcare Administration</span>
                  <span>Critical Care & Triage</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
