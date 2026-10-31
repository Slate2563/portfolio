
export type ProjectCategory =
  | 'Web Application'
  | 'Mobile Application'
  | 'Full-Stack Application'
  | 'Learning Project'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  description: string
  technologies: string[]
  image?: string
  featured: boolean
  status: 'Completed' | 'In Development' | 'Planning'
  demoUrl?: string
  sourceUrl?: string
}

export const projects: Project[] = [
  {
    id: 'pcms',
    title: 'Personal Cashflow Management System',
    category: 'Full-Stack Application',
    description:
      'A personal finance application designed to help users manage wallets, track daily income and expenses, and monitor their cash flow. Built with Spring Boot, React Native, and MySQL, it focuses on structured financial records, data management, and a foundation for future synchronization and financial analytics.',
    technologies: [
      'Java',
      'Spring Boot',
      'React Native',
      'MySQL',
      'n8n',
    ],
    featured: true,
    status: 'In Development',
  },
  {
    id: 'habit-tracker',
    title: 'Habit Tracker & Exercise Management',
    category: 'Mobile Application',
    description:
      'A mobile application designed to help users build consistent habits and manage their exercise routines. It aims to provide habit tracking, activity recording, progress monitoring, streak tracking, and performance analytics through a structured and user-friendly experience.',
    technologies: [
      'Java',
      'Spring Boot',
      'React Native',
      'TypeScript',
      'MySQL',
    ],
    featured: true,
    status: 'Planning',
  },
  {
    id: 'developer-portfolio',
    title: 'Developer Portfolio Website',
    category: 'Web Application',
    description:
      'A responsive developer portfolio website built to showcase my technical skills, development journey, and software projects. It features a consistent design system, dark and light themes, reusable components, accessible layouts, and responsive interfaces for different screen sizes.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
    ],
    featured: true,
    status: 'In Development',
  },
]
