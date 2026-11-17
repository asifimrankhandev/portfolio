import type { ImageMetadata } from 'astro';
import mapsArchitects from '@/assets/images/project-maps-architects.png';
import aspireHotel from '@/assets/images/project-aspire-hotel-slider2.jpeg';
import yumly from '@/assets/images/project-yumly-card.webp';
import aaronHolmes from '@/assets/images/project-aaron-holmes.jpeg';
import docease from '@/assets/images/project-docease.webp';
import lifio from '@/assets/images/project-lifio.webp';
import neonWidgets from '@/assets/images/project-neon-widgets.webp';
import refundBeacon from '@/assets/images/project-refund-beacon.webp';

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
  {
    id: 5,
    title: 'DocEase - PDF Reader & Scanner',
    description:
      'An all-in-one document app to read, edit, sign and scan PDFs, open DOC, XLS and PPT files, convert between formats, and pull text from photos, with every file kept on the device.',
    tech: ['Android', 'PDF Tools', 'Document Scanner'],
    category: 'Android App',
    link: 'https://play.google.com/store/apps/details?id=app.idexa.docease',
    image: docease,
  },
  {
    id: 6,
    title: 'Lifio - Habit & Mood Tracker',
    description:
      'A private, fully offline daily check-in app for habits, mood, water, sleep and notes, with streaks, rest days and mood calendars, and no account, ads or cloud.',
    tech: ['Android', 'Habit Tracking', 'Privacy-first'],
    category: 'Android App',
    link: 'https://play.google.com/store/apps/details?id=com.lifio.app',
    image: lifio,
  },
  {
    id: 7,
    title: 'Neon Widgets',
    description:
      'Big, bright, live home screen widgets for Android: countdowns to festivals and trips, weather, notes, photos, dates and to-dos you can tick straight from the widget, in bold neon colours.',
    tech: ['Android', 'Home Screen Widgets', 'Customisation'],
    category: 'Android App · Coming soon',
    link: 'https://idexa.app/neon-widgets/',
    image: neonWidgets,
  },
  {
    id: 8,
    title: 'Refund Beacon',
    description:
      'A private refund tracker that logs every return on one timeline, keeps receipts and retailer messages with each case, shows a clear next step, and drafts follow-ups when a refund runs late.',
    tech: ['Android', 'Personal Finance', 'Privacy-first'],
    category: 'Android App · Coming soon',
    link: 'https://idexa.app/refund-beacon/',
    image: refundBeacon,
  },
];

export const featuredProject = projectsData.find((project) => project.featured) ?? projectsData[0];
export const selectedProjects = projectsData.filter((project) => project !== featuredProject);
