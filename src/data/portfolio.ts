export const VALLEY_ARTWORK_URL =
  'https://lh3.googleusercontent.com/aida/ALJJyrA7wzszkeBaMSB3GhScg_v7H1eJs9rZYTns-x0FTXKbqk6w5HKrkI0PW9ru1fe9ZK__kPjZC3GyRFokYheXj32oaMqC8vLh4o_6WMMNgvzLJ-BsoxywuXuEahk7i9oecTf170QIzALCBOVBys2BXzwdX7fFjjB0xEvyS89d3ac6ht-WzbPEPyv6uy_IcYX5OsLjlz8LGH54XOYvdAx09nKVWkcfQskpJYdQOe2vkApf';

export interface EducationItem {
  period: string;
  school: string;
  degree: string;
  description: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
}

export interface AchievementItem {
  category: string;
  title: string;
  detail: string;
}

export interface ProjectItem {
  id: string;
  year: string;
  category: 'engineering' | 'visual';
  overlayTitle: string;
  role: string;
  title: string;
  tagline: string;
  tags: string[];
  ctaLabel: string;
  imagePosition: string;
  imageFilter: string;
  scrimGradient: string;
  caseStudy: {
    overview: string;
    highlights: string[];
    metrics: { label: string; value: string }[];
    palette: { name: string; hex: string }[];
  };
}

export interface SkillGroup {
  id: string;
  icon: 'code' | 'design' | 'mindset';
  title: string;
  skills: string[];
}

export const PROFILE = {
  brand: 'Khansa',
  fullName: 'Khansa Shabihah',
  eyebrow: 'Jakarta · Informatics Engineering & Visual Design',
  introPrimary:
    "Informatics Engineering student with two terms of experience as a member of the Student Council's Publication, Documentation, and Design (PDD) division. Proficient in managing visual information and digital communication.",
  introSecondary:
    'Ready to contribute to a team, bringing strong adaptability and creativity.',
  city: 'Jakarta, Indonesia',
  focus: 'TypeScript & Visual Design',
  email: 'k34469207@gmail.com',
  whatsappUrl: 'https://wa.me/6289525018595',
  linkedinUrl: 'https://www.linkedin.com/in/khansa-shabihah-745b84433',
};

export const EDUCATION: EducationItem[] = [
  {
    period: '2026 – Present',
    school: 'University (Undergraduate)',
    degree: 'Undergraduate — Informatics Engineering',
    description:
      'Focusing on software development, TypeScript, and visual communication.',
  },
  {
    period: 'Jun 2023 – Jun 2026',
    school: 'MAS ATTAQWA',
    degree: 'Science Major',
    description:
      'Active student leader in creative digital documentation and design.',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: 'Jul 2024 – Mei 2026',
    role: 'Publication, Documentation & Design (PDD)',
    organization: 'MAS Attaqwa Student Council',
    description:
      'Served two terms managing visual information, event documentation, promotional assets, and digital communication across student council initiatives.',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    category: 'Literary & Creative Writing',
    title: 'Top 100 Best Short Story Writers',
    detail:
      'Selected among 100 finalists out of thousands of participants in the Tangerang City Anniversary competition (Junior High School).',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'editorial-portfolio',
    year: '2026',
    category: 'engineering',
    overlayTitle: 'Khansa · Portfolio',
    role: 'Front-End Engineering & UI',
    title: 'Personal Editorial Portfolio',
    tagline:
      'Calm, painterly aesthetic portfolio blending high-contrast editorial typography with responsive TypeScript architecture and subtle ambient parallax effects.',
    tags: ['TypeScript', 'Python & C++', 'Responsive UI', 'Editorial Design'],
    ctaLabel: 'View Project Exploration',
    imagePosition: 'center 40%',
    imageFilter: 'brightness(0.92) contrast(1.05)',
    scrimGradient:
      'linear-gradient(rgba(7, 36, 26, 0.12) 0%, rgba(7, 36, 26, 0.65) 100%)',
    caseStudy: {
      overview:
        'Designed and engineered around the Serene Editorial Craftsman design language—pairing expansive white canvas whitespace and Cormorant Garamond mixed-weight headlines with a lush, animated valley stage dissolved softly into the layout.',
      highlights: [
        'Mixed-weight serif headline composition contrasting italic light clauses with bold focal statements.',
        'Seamless top dissolve gradient mask bridging stark white editorial copy into natural painterly scenery.',
        'Reduced-motion safe ambient drift and floating light motes respecting system accessibility settings.',
      ],
      metrics: [
        { label: 'Core Stack', value: 'React + TypeScript' },
        { label: 'Type Pairing', value: 'Cormorant + Jakarta' },
        { label: 'Layout Grid', value: '1160px Editorial' },
      ],
      palette: [
        { name: 'Pure Canvas', hex: '#FFFFFF' },
        { name: 'Soft Meadow', hex: '#F7F8F6' },
        { name: 'Deep Evergreen', hex: '#1E3A2F' },
        { name: 'Golden Light', hex: '#D4A359' },
      ],
    },
  },
  {
    id: 'pdd-visual-archive',
    year: '2024 – 2026',
    category: 'visual',
    overlayTitle: 'PDD · Visual Archive',
    role: 'Visual Direction & Media',
    title: 'Student Council PDD Visual Archive',
    tagline:
      'Comprehensive branding, digital event publication, and photographic documentation archive executed over two terms for student council events.',
    tags: [
      'Editorial Layout',
      'Event Branding',
      'Digital Media',
      'Information Architecture',
    ],
    ctaLabel: 'Explore Design System',
    imagePosition: 'center 75%',
    imageFilter: 'saturate(1.12) brightness(0.86)',
    scrimGradient:
      'linear-gradient(rgba(30, 58, 47, 0.18) 0%, rgba(17, 28, 22, 0.68) 100%)',
    caseStudy: {
      overview:
        'A two-term creative direction and documentation effort for MAS Attaqwa Student Council, unifying event announcements, stage visuals, and post-event photographic archives under a cohesive visual communication standard.',
      highlights: [
        'Standardized publication templates for multi-channel announcements and student event calendars.',
        'Coordinated live photographic documentation workflows across ceremonies, competitions, and workshops.',
        'Structured digital visual archives for fast retrieval and consistent institutional memory.',
      ],
      metrics: [
        { label: 'Tenure', value: '2 Full Terms' },
        { label: 'Division', value: 'PDD Student Council' },
        { label: 'Discipline', value: 'Brand & Media' },
      ],
      palette: [
        { name: 'Parchment Tint', hex: '#FAF9F5' },
        { name: 'Sage Wash', hex: '#E8EFEA' },
        { name: 'Meadow Leaf', hex: '#7BA05B' },
        { name: 'Charcoal Ink', hex: '#111315' },
      ],
    },
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'dev',
    icon: 'code',
    title: 'Development & Technical',
    skills: [
      'TypeScript',
      'C++',
      'Python',
      'Responsive Layout',
    ],
  },
  {
    id: 'design',
    icon: 'design',
    title: 'Visual Design & PDD',
    skills: [
      'Graphic Design',
      'Editorial Layout',
      'Event Documentation',
      'Digital Storytelling',
      'Brand Identity',
    ],
  },
  {
    id: 'mindset',
    icon: 'mindset',
    title: 'Teamwork & Mindset',
    skills: [
      'Adaptability',
      'Creativity',
      'Cross-Team Communication',
      'Information Management',
      'Creative Writing',
    ],
  },
];
