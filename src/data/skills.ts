
import type { LucideIcon } from 'lucide-react'

import {
  Code2,
  Monitor,
  Smartphone,
  Database,
  Wrench,
} from 'lucide-react'

export interface SkillCategory {
  id: string
  title: string
  description: string
  icon: LucideIcon
  technologies: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Server-side application development and API design.',
    icon: Code2,
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Spring Security',
      'Maven',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building responsive and maintainable user interfaces.',
    icon: Monitor,
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML',
      'CSS',
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Cross-platform mobile application development.',
    icon: Smartphone,
    technologies: [
      'React Native',
      'Expo',
    ],
  },
  {
    id: 'database',
    title: 'Database & Automation',
    description: 'Data management and workflow automation.',
    icon: Database,
    technologies: [
      'MySQL',
      'SQL',
      'n8n',
    ],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    description: 'Tools used in development and project management.',
    icon: Wrench,
    technologies: [
      'Git',
      'GitHub',
      'VS Code',
      'IntelliJ IDEA',
      'MySQL Workbench',
    ],
  },
]
