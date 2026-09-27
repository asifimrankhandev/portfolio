export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  link: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'MAPS Architects',
    description:
      'An official portfolio website for MAPS Architects, highlighting their high-end residential and commercial architectural projects with a highly visual, masonry-style gallery.',
    tech: ['Architecture', 'Portfolio', 'Web Design'],
    category: 'Real Project',
    link: 'https://mapsarchitects.in/',
    image: '/assets/images/project-maps-architects.png',
  },
  {
    id: 2,
    title: 'The Aspire Hotel',
    description:
      'The official website for The Aspire Hotel in Guwahati, showcasing luxurious modern rooms, amenities, and a smooth booking-focused hospitality experience.',
    tech: ['Hospitality', 'Hotel Website', 'Booking UX'],
    category: 'Real Project',
    link: 'https://theaspirehotel.com/',
    image: '/assets/images/project-aspire-hotel-slider2.jpeg',
  },
  {
    id: 3,
    title: 'Yumly - Recipes & Meal Planner',
    description:
      'A recipe and meal-planning app that helps users discover, save, and cook delicious meals with ingredient search, step-by-step instructions, and personalized meal plans.',
    tech: ['Android', 'Recipes', 'Meal Planning'],
    category: 'Real Project',
    link: 'https://play.google.com/store/apps/details?id=com.aik.yumly',
    image: '/assets/images/project-yumly-card.webp',
  },
  {
    id: 4,
    title: 'Aaron Holmes Residential',
    description:
      'A luxury real estate platform for London and UK property experts with dynamic listings, advanced search filters, and market intelligence reports.',
    tech: ['PHP', 'UI/UX', 'Real Estate Tech'],
    category: 'Real Project',
    link: 'https://aaron-holmes.com/design/index.php?page=home',
    image: '/assets/images/project-aaron-holmes.jpeg',
  },
];
