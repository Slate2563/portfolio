import type { ContactInfo } from '../types/contact'

export const contactInfo: ContactInfo = {
  title: "Let's Work Together",
  description:
    "Have a project in mind, an interesting idea, or an opportunity to discuss? Feel free to get in touch.",

  links: [
    {
      id: 'email',
      label: 'Email',
      value: 'sheinyuminmaung2563@gmail.com',
      href: 'mailto:sheinyuminmaung2563@gmail.com?subject=Portfolio%20Inquiry',
      icon: 'email',
    },
    {
      id: 'location',
      label: 'Location',
      value: 'Yangon, Myanmar',
      icon: 'location',
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'Slate2563',
      href: 'https://github.com/Slate2563',
      icon: 'github',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/shein-yu-8a6460251',
      href: 'https://www.linkedin.com/in/shein-yu-8a6460251/',
      icon: 'linkedin',
    },
  ],
}