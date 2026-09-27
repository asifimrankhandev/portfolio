export interface ExperienceEntry {
  role: string;
  company?: string;
  date: string;
  location: string;
  achievements: string[];
}

const EXPERIENCE_START = new Date('2022-10-01');

export const getExperienceYears = (): number => {
  const ms = Date.now() - EXPERIENCE_START.getTime();
  return Math.max(1, Math.floor(ms / (365.25 * 24 * 60 * 60 * 1000)));
};

export const experienceData: ExperienceEntry[] = [
  {
    role: 'Freelancer',
    date: '2024 — PRESENT',
    location: 'Worldwide',
    achievements: [
      'Specializing in building responsive and accessible front-end experiences.',
      'Delivering high-quality digital products for clients worldwide.',
    ],
  },
  {
    role: 'Senior Executive Clinical',
    company: 'SAGILITY INDIA PRIVATE LIMITED',
    date: '01/2023 — PRESENT',
    location: 'Bangalore, IN',
    achievements: [
      'Assign standardized codes for diagnoses and procedures.',
      'Ensure compliance with healthcare regulations.',
      'Communicate with insurers to resolve claims.',
    ],
  },
  {
    role: 'ER Nurse',
    company: 'NEW JANAPRIYA SUPER SPECIALITY HOSPITAL',
    date: '10/2022 — 01/2023',
    location: 'India',
    achievements: [
      'Rapid assessment and prioritization of patient conditions.',
      'Administered medications and performed critical procedures.',
      'Collaborated with teams for effective treatment plans.',
    ],
  },
];
