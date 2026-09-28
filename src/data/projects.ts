import type { ImageMetadata } from 'astro';
import mapsArchitects from '@/assets/images/project-maps-architects.png';
import aspireHotel from '@/assets/images/project-aspire-hotel-slider2.jpeg';
import yumly from '@/assets/images/project-yumly-card.webp';
import aaronHolmes from '@/assets/images/project-aaron-holmes.jpeg';

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  link: string;
  image: ImageMetadata;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'MAPS Architects',
    description:
      'An official portfolio website for MAPS Architects, highlighting their high-end residential and commercial architectural projects with a highly visual, masonry-style gallery.',
    tech: ['Architecture', 'Portfolio', 'Web Design'],
    category: 'Website',
    link: 'https://mapsarchitects.in/',
    image: mapsArchitects,
    featured: true,
  },
  {
    id: 2,
    title: 'The Aspire Hotel',
    description:
      'The official website for The Aspire Hotel in Guwahati, showcasing luxurious modern rooms, amenities, and a smooth booking-focused hospitality experience.',
    tech: ['Hospitality', 'Hotel Website', 'Booking UX'],
    category: 'Website',
    link: 'https://theaspirehotel.com/',
    image: aspireHotel,
  },
  {
    id: 3,
    title: 'Yumly - Recipes & Meal Planner',
    description:
      'A recipe and meal-planning app that helps users discover, save, and cook delicious meals with ingredient search, step-by-step instructions, and personalized meal plans.',
    tech: ['Android', 'Recipes', 'Meal Planning'],
    category: 'Android App',
    link: 'https://play.google.com/store/apps/details?id=com.aik.yumly',
    image: yumly,
  },
  {
    id: 4,
    title: 'Aaron Holmes Residential',
    description:
      'A luxury real estate platform for London and UK property experts with dynamic listings, advanced search filters, and market intelligence reports.',
    tech: ['PHP', 'UI/UX', 'Real Estate Tech'],
    category: 'Web Platform',
    link: 'https://aaron-holmes.com/design/index.php?page=home',
    image: aaronHolmes,
  },
];

export const featuredProject = projectsData.find((project) => project.featured) ?? projectsData[0];
export const selectedProjects = projectsData.filter((project) => project !== featuredProject);
