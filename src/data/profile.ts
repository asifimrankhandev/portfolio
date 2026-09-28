export interface SocialProfile {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  firstName: string;
  title: string;
  email: string;
  location: { city: string; country: string; countryCode: string };
  availability: { open: boolean; label: string; detail: string };
  stack: string[];
}

export const profile: Profile = {
  name: 'Asif Imran Khan',
  firstName: 'Asif',
  title: 'Front-End Developer',
  email: 'imran@idexa.app',
  location: { city: 'Bangalore', country: 'India', countryCode: 'IN' },
  availability: {
    open: true,
    label: 'Open to work',
    detail: 'Open to new front-end roles and freelance projects',
  },
  stack: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'PHP'],
};

export const socialProfiles: SocialProfile[] = [
  { label: 'GitHub', url: 'https://github.com/techyaik' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/asif-imran-khan-50b170218' },
  { label: 'X (Twitter)', url: 'https://x.com/asifikhandev' },
];
