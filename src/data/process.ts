export interface ProcessStep {
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Understand before building',
    description:
      'I start with the goals, the people using the product, and the constraints — reading the design, the content, and the existing code before writing markup.',
  },
  {
    title: 'Components, not pages',
    description:
      'I break interfaces into reusable, typed components and account for every state — loading, empty, error, and the edge cases between them.',
  },
  {
    title: 'Accessible and fast by default',
    description:
      'Semantic HTML, keyboard support, and a close eye on page weight are part of the first pass, not a cleanup task at the end.',
  },
  {
    title: 'Ship, check, refine',
    description:
      'I test on real devices and browsers, measure Core Web Vitals, and iterate on what the build actually does rather than what the mockup promised.',
  },
];
