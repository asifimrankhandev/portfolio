import { useReveal } from '../hooks/useReveal';

const ExperienceItem = ({ exp }) => {
  const expRef = useReveal();
  
  return (
    <div ref={expRef} className="reveal border-b border-white/10 py-12 first:border-t-0">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* Date & Location */}
        <div className="lg:col-span-1">
          <p className="text-xs font-bold tracking-widest uppercase text-white/50 mb-1">
            {exp.date}
          </p>
          <p className="text-xs font-medium uppercase tracking-widest text-white/40">
            {exp.location}
          </p>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <h3 className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-2">
            {exp.role}
          </h3>
          <p className="text-sm font-bold tracking-widest uppercase text-white mb-8">
            {exp.company}
          </p>
          
          <ul className="space-y-4 text-white/70 font-light leading-relaxed text-base md:text-lg">
            {exp.achievements.map((achievement, i) => (
              <li key={i} className="leading-relaxed">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  const revealRef = useReveal();

  const experiences = [
    {
      role: "Freelancer",
      company: "AIK Studio",
      date: "2024 - PRESENT",
      location: "Worldwide",
      achievements: [
        "Specializing in building responsive and accessible front-end experiences.",
        "Delivering high-quality digital products for clients worldwide."
      ]
    },
    {
      role: "Senior Executive Clinical",
      company: "SAGILITY INDIA PRIVATE LIMITED",
      date: "01/2023 - PRESENT",
      location: "Bangalore, IN",
      achievements: [
        "Assign standardized codes for diagnoses and procedures.",
        "Ensure compliance with healthcare regulations.",
        "Communicate with insurers to resolve claims."
      ]
    },
    {
      role: "ER Nurse",
      company: "NEW JANAPRIYA SUPER SPECIALITY HOSPITAL",
      date: "10/2022 - 01/2023",
      location: "India",
      achievements: [
        "Rapid assessment and prioritization of patient conditions.",
        "Administered medications and performed critical procedures.",
        "Collaborated with teams for effective treatment plans."
      ]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#111111]" id="experience">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20 reveal" ref={revealRef}>
          <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Work Experience</p>
          <div className="w-12 h-px bg-white/20 mb-8"></div>
          <h2 className="font-serif text-[3rem] md:text-[4rem] leading-none tracking-tight text-white italic">
            Professional <br className="hidden sm:block" />
            Background.
          </h2>
        </div>

        <div className="border-t border-white/10">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
