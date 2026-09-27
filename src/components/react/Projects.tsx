import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projectsData, type Project } from '@/data/projects';

const ProjectRow = ({ project, index }: { project: Project; index: number }) => {
  const imageOnLeft = index % 2 === 1;

  return (
    <article className="project-row grid grid-cols-1 items-center gap-6 min-[900px]:grid-cols-2 min-[900px]:gap-0">
      <div className={`project-copy relative z-10 ${imageOnLeft ? 'min-[900px]:order-2' : ''}`}>
        <p className="mb-2 font-display text-sm font-semibold tracking-[0.08em] text-cyan">
          Project / {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="mb-6 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
          {project.title}
        </h3>

        <div className={`project-description rounded-xl border border-white/[0.07] px-5 py-5 shadow-[0_1rem_3rem_rgba(0,0,0,0.2)] backdrop-blur-xl sm:px-7 sm:py-6 ${imageOnLeft ? 'min-[900px]:-ml-14' : 'min-[900px]:-mr-14'}`}>
          <p className="text-sm leading-7 text-white/80 sm:text-base sm:leading-7">{project.description}</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies and focus areas`}>
            {project.tech.map((technology) => (
              <li key={technology} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.08em] text-white/65">
                {technology}
              </li>
            ))}
          </ul>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-cyan transition-colors hover:text-white"
          >
            Visit project <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`project-image group relative block aspect-[1.55] w-full overflow-hidden rounded-xl border border-white/10 bg-surface-muted shadow-[0_1.5rem_4rem_rgba(0,0,0,0.3)] ${imageOnLeft ? 'min-[900px]:order-1' : 'min-[900px]:order-2'}`}
        aria-label={`View ${project.title} project (opens in a new tab)`}
      >
        <img
          src={project.image}
          alt={`${project.title} website preview`}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />
        <span className="absolute right-4 top-4 grid size-10 translate-y-1 place-items-center rounded-full border border-white/15 bg-canvas/80 text-white opacity-0 backdrop-blur transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <ExternalLink className="size-4" aria-hidden="true" />
        </span>
      </a>
    </article>
  );
};

export const Projects = () => (
  <div className="relative">
    <div className="reveal mb-20 text-center md:mb-28" data-reveal>
      <h2 className="mx-auto w-fit font-display text-4xl font-bold leading-none tracking-tight text-gradient-heading sm:text-5xl md:text-6xl">
        Recent Work
      </h2>
      <p className="mt-4 text-sm text-white/75 sm:text-base">A collection of projects I’ve worked on.</p>
    </div>

    <div className="relative flex flex-col gap-20 md:gap-36">
      {projectsData.map((project, index) => (
        <div key={project.id} className="reveal" data-reveal>
          <ProjectRow project={project} index={index} />
        </div>
      ))}
    </div>
  </div>
);
