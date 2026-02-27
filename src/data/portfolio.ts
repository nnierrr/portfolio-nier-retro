import type { Experience, SkillCategory, Project, Testimonial, Stat } from '../types'

export const stats: Stat[] = [
  { value: '5+',   label: 'YEARS EXP',        color: 'blue'  },
  { value: '30+',  label: 'PROJECTS SHIPPED',  color: 'red'   },
  { value: '15+',  label: 'TECHNOLOGIES',      color: 'green' },
  { value: '100%', label: 'SHIP RATE',         color: 'white' },
]

export const experiences: Experience[] = [
  {
    id: 'vertere',
    date: 'MAY 2023 — PRESENT',
    badge: 'CURRENT',
    badgeColor: '#0066FF',
    title: 'System Analyst / Tech Lead',
    company: 'Vertere / Sun Life',
    companyColor: '#0066FF',
    description:
      'Leading cross-functional teams to architect and deliver enterprise-grade microfrontend systems. Building reusable component libraries with React, Angular, and Spring Boot on AWS infrastructure with Docker and Kubernetes.',
  },
  {
    id: 'freelance',
    date: 'SEP 2021 — MAY 2023',
    badge: 'FREELANCE',
    badgeColor: '#FF3300',
    title: 'Mobile & Web Software Engineer',
    company: 'Self-Employed / Multiple Clients',
    companyColor: '#FF3300',
    description:
      'Delivered end-to-end iOS and Android solutions for diverse clients. Built ride-hailing apps, project management tools, and social platforms using Flutter, Firebase, and real-time mapping integrations.',
  },
  {
    id: 'leentech',
    date: 'JAN 2019 — SEP 2021',
    badge: 'PROMOTED 2x',
    badgeColor: '#00AA55',
    title: 'Senior Mobile Engineer / Fullstack Dev',
    company: 'LEENTech Network Solutions',
    companyColor: '#00AA55',
    description:
      'Promoted twice in 2 years — from Fullstack Web Dev to Hybrid Mobile Dev to Senior Engineer. Led development teams, built Ionic and Flutter apps, and maintained Laravel-based enterprise platforms.',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    id: 'mobile',
    title: 'MOBILE',
    dotColor: '#0066FF',
    highlightColor: '#0066FF',
    skills: [
      { label: 'Flutter / Dart', highlighted: true },
      { label: 'Ionic' },
      { label: 'React Native' },
    ],
  },
  {
    id: 'frontend',
    title: 'FRONTEND',
    dotColor: '#FF3300',
    highlightColor: '#FF3300',
    skills: [
      { label: 'React / Next.js', highlighted: true },
      { label: 'Angular' },
      { label: 'Vue / Vuex' },
      { label: 'TypeScript / SCSS' },
    ],
  },
  {
    id: 'backend',
    title: 'BACKEND',
    dotColor: '#00AA55',
    highlightColor: '#00AA55',
    skills: [
      { label: 'Node.js / Express', highlighted: true },
      { label: 'PHP / Laravel' },
      { label: 'Spring Boot / Java' },
    ],
  },
  {
    id: 'infra',
    title: 'INFRA',
    dotColor: '#0A0A0A',
    highlightColor: '#0A0A0A',
    skills: [
      { label: 'AWS / GCP' },
      { label: 'Docker / K8s' },
      { label: 'Firebase / MySQL / MongoDB' },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'ride-hailing',
    image: 'generated-1772196384306.png',
    tag: 'FLUTTER',
    tagColor: '#0066FF',
    title: 'Ride Hailing App',
    description:
      'Real-time ride matching with Firebase backend, live GPS tracking, and driver-passenger communication. Optimized for low-latency location updates.',
    tech: ['Flutter', 'Firebase', 'Google Maps', 'Socket.IO'],
  },
  {
    id: 'social-platform',
    image: 'generated-1772196391122.png',
    tag: 'IONIC',
    tagColor: '#FF3300',
    title: 'Social Media Platform',
    description:
      'Cross-platform social app with real-time feeds, media sharing, user profiles, and push notifications. Seamless experience across iOS and Android.',
    tech: ['Ionic', 'Node.js', 'MongoDB', 'WebSockets'],
  },
  {
    id: 'delivery-logistics',
    image: 'generated-1772196409421.png',
    tag: 'FLUTTER',
    tagColor: '#00AA55',
    title: 'Delivery & Logistics App',
    description:
      'Distance-based pricing engine with real-time delivery tracking, route optimization via Google Maps, and automated dispatch for multi-driver fleets.',
    tech: ['Flutter', 'Google Maps', 'Firebase', 'REST API'],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 'startup',
    starsColor: '#0066FF',
    quote:
      '"Nieric delivered our Flutter app ahead of schedule. Clean architecture, zero bugs in production. He thinks like a product owner, not just a coder."',
    author: '— Startup Founder, On-Demand Platform',
    authorColor: '#0066FF',
  },
  {
    id: 'leentech-mgr',
    starsColor: '#FF3300',
    quote:
      '"Promoted twice in two years for a reason. Nieric\'s ability to lead teams while staying hands-on with code is rare. A true full-stack problem solver."',
    author: '— Engineering Manager, LEENTech',
    authorColor: '#FF3300',
  },
  {
    id: 'enterprise',
    starsColor: '#00AA55',
    quote:
      '"His microfrontend architecture saved us months of refactoring. Nieric doesn\'t just write code — he builds systems that scale with your business."',
    author: '— Tech Lead, Enterprise Finance',
    authorColor: '#00AA55',
  },
]
