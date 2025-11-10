export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  images: string[]
  technologies: string[]
  category: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  order: number
}

export interface Skill {
  id: string
  name: string
  category: string
  level: number
  icon: string
  color: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string | 'Present'
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  image: string
  rating: number
  message: string
  date: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface Stats {
  yearsOfExperience: number
  projectsCompleted: number
  happyClients: number
  awardsWon: number
}
