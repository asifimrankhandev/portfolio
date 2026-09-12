import { useReveal } from '../hooks/useReveal';

const ServiceItem = ({ service, index }) => {
  const itemRef = useReveal();
  
  return (
    <div 
      ref={itemRef}
      className="reveal border-b border-white/10 py-12 flex flex-col md:flex-row gap-8 items-start group"
    >
      <div className="w-12 pt-2">
        <span className="text-xs font-bold tracking-widest uppercase text-white/40 group-hover:text-white transition-colors">
          0{index + 1}
        </span>
      </div>
      
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
        <h3 className="font-serif text-3xl md:text-4xl text-white tracking-tight">
          {service.title}
        </h3>
        <p className="text-white/70 font-light leading-relaxed text-base md:text-lg">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export const Services = () => {
  const revealRef = useReveal();

  const services = [
    {
      title: "Front-End Development",
      description: "I build responsive and accessible front-end experiences with a focus on clean implementation, usability, and polished digital presentation."
    },
    {
      title: "Healthcare Operations",
      description: "My background in nursing and medical coding brings precision, compliance awareness, and structured problem-solving to every digital workflow I help build."
    },
    {
      title: "User-Centered Solutions",
      description: "I solve problems with empathy and attention to detail, creating robust interfaces that feel intuitive, accessible, and reliable for real users."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#111111] overflow-hidden" id="services">
      
      {/* Dynamic Infinite Marquee */}
      <div className="relative w-full flex whitespace-nowrap opacity-10 pointer-events-none mb-24 md:mb-32">
        <div className="animate-marquee flex gap-8 whitespace-nowrap">
          <span className="font-serif text-[4rem] md:text-[6rem] lg:text-[8rem] text-white italic tracking-tighter">
            FRONT-END ENGINEERING — UI/UX DESIGN — ACCESSIBLE INTERFACES — PERFORMANCE OPTIMIZATION —
          </span>
          <span className="font-serif text-[4rem] md:text-[6rem] lg:text-[8rem] text-white italic tracking-tighter">
            FRONT-END ENGINEERING — UI/UX DESIGN — ACCESSIBLE INTERFACES — PERFORMANCE OPTIMIZATION —
          </span>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-20 reveal" ref={revealRef}>
          <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">My Expertise</p>
          <div className="w-12 h-px bg-white/20 mb-8"></div>
          <h2 className="font-serif text-[3rem] md:text-[4rem] leading-none tracking-tight text-white italic">
            What I <br className="hidden sm:block" />
            do.
          </h2>
        </div>

        <div className="border-t border-white/10">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
