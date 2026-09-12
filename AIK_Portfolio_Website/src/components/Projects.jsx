import { useReveal } from '../hooks/useReveal';
import { useTilt } from '../hooks/useTilt';
import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "MAPS Architects",
    description: "An official portfolio website for MAPS Architects, highlighting their high-end residential and commercial architectural projects with a highly visual, masonry-style gallery.",
    tech: ["Architecture", "Portfolio", "Web Design"],
    link: "https://mapsarchitects.in/",
    image: "/assets/images/project-maps-architects.png"
  },
  {
    id: 2,
    title: "The Aspire Hotel",
    description: "The official website for The Aspire Hotel in Guwahati, showcasing luxurious modern rooms, amenities, and a smooth booking-focused hospitality experience.",
    tech: ["Hospitality", "Hotel Website", "Booking UX"],
    link: "https://theaspirehotel.com/",
    image: "/assets/images/project-aspire-hotel-slider2.jpeg"
  },
  {
    id: 3,
    title: "Yumly - Recipes & Meal Planner",
    description: "A recipe and meal-planning app that helps users discover, save, and cook delicious meals with ingredient search, step-by-step instructions, and personalized meal plans.",
    tech: ["Android", "Recipes", "Meal Planning"],
    link: "https://play.google.com/store/apps/details?id=com.aik.yumly",
    image: "/assets/images/project-yumly-card.webp"
  },
  {
    id: 4,
    title: "Aaron Holmes Residential",
    description: "A luxury real estate platform for London and UK property experts with dynamic listings, advanced search filters, and market intelligence reports.",
    tech: ["PHP", "UI/UX", "Real Estate Tech"],
    link: "https://aaron-holmes.com/design/index.php?page=home",
    image: "/assets/images/project-aaron-holmes.jpeg"
  }
];

const ProjectGalleryCard = ({ project, index }) => {
  const projectRef = useReveal();
  const tiltRef = useTilt({ max: 8, scale: 1.01 });
  
  return (
    <article 
      ref={projectRef}
      className="reveal flex flex-col group"
    >
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block relative w-full overflow-visible mb-6"
        ref={tiltRef}
      >
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#f0f0f0] shadow-xl">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          {/* Subtle dark overlay on hover */}
          <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/10 transition-colors duration-700"></div>
          
          {/* Elegant Floating Icon */}
          <div className="absolute top-6 right-6 w-14 h-14 bg-[#fdfdfc] rounded-full flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 shadow-xl border border-[#111111]/10">
            <ExternalLink className="w-6 h-6 text-[#111111]" />
          </div>
        </div>
      </a>
      
      <div className="flex flex-col flex-grow pt-8 gap-6">
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#111111]/40">
            Project — 0{index + 1}
          </span>
          <h3 className="font-serif text-3xl md:text-4xl text-[#111111] tracking-tight group-hover:opacity-70 transition-opacity">
            {project.title}
          </h3>
        </div>
        
        <p className="text-[#111111]/70 font-light leading-relaxed text-base md:text-lg max-w-xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((t, i) => (
            <span 
              key={i} 
              className="px-4 py-2 text-[10px] font-bold tracking-widest uppercase text-[#111111]/60 border border-[#111111]/10 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export const Projects = () => {
  const revealRef = useReveal();

  return (
    <section className="py-24 md:py-32 bg-[#fdfdfc]" id="projects">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-20 md:mb-32 reveal" ref={revealRef}>
          <p className="text-xs font-bold uppercase tracking-widest text-[#111111]/50 mb-4">Selected Work</p>
          <div className="w-12 h-px bg-[#111111]/20 mb-8"></div>
          <h2 className="font-serif text-[3rem] md:text-[4rem] leading-none tracking-tight text-[#111111] italic">
            Visual <br className="hidden sm:block" />
            Gallery.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-y-24 items-start">
          {projectsData.map((project, index) => (
            <ProjectGalleryCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
};
