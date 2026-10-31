export interface Experience {
  id: string
  position: string
  company: string
  employmentType?: string
  location?: string
  startDate: string
  endDate: string
  description: string
  responsibilities: string[]
  technologies?: string[]
}