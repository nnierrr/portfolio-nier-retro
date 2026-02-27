export interface Experience {
  id: string
  date: string
  badge: string
  badgeColor: string
  title: string
  company: string
  companyColor: string
  description: string
}

export interface Skill {
  label: string
  highlighted?: boolean
}

export interface SkillCategory {
  id: string
  title: string
  dotColor: string
  highlightColor: string
  skills: Skill[]
}

export interface Project {
  id: string
  image: string
  tag: string
  tagColor: string
  title: string
  description: string
  tech: string[]
}

export interface Testimonial {
  id: string
  starsColor: string
  quote: string
  author: string
  authorColor: string
}

export interface Stat {
  value: string
  label: string
  color: 'blue' | 'red' | 'green' | 'white'
}
