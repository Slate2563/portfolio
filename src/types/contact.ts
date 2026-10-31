export interface ContactLink {
  id: string
  label: string
  value: string
  href?: string
  icon: 'email' | 'location' | 'github' | 'linkedin'
}

export interface ContactInfo {
  title: string
  description: string
  links: ContactLink[]
}