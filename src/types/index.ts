// ─── Content Types (Sanity CMS Ready) ───────────────────────────────────────
// These interfaces mirror the Sanity schema definitions.
// When Sanity is connected, replace static data with GROQ queries.

export interface Service {
  _id: string
  title: string
  slug: string
  description: string
  icon: string
  order: number
}

export interface Testimonial {
  _id: string
  authorName: string
  authorRole: string
  authorCompany: string
  text: string
  initials: string
}

export interface BlogPost {
  _id: string
  title: string
  slug: string
  excerpt: string
  category: string
  publishedAt: string
  mainImage?: {
    asset: { url: string }
    alt: string
  }
}

export interface CoverageArea {
  name: string
  description: string
  active: boolean
  coordinates: { x: number; y: number }
}

export interface CareerOpening {
  _id: string
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Contract'
  postedAt: string
}

export interface CompanyInfo {
  name: string
  tagline: string
  description: string
  address: string
  phone: string
  email: string
  yearsOperating: number
  officersCount: number
  clientLocations: number
  satisfactionRate: number
  socialLinks: {
    facebook?: string
    instagram?: string
    linkedin?: string
    twitter?: string
  }
}

export interface NavItem {
  label: string
  href: string
}

// ─── Static Data (replace with Sanity GROQ queries in production) ─────────────

export const SERVICES: Service[] = [
  { _id: '1', title: 'Manned Guarding', slug: 'manned-guarding', description: 'Professional uniformed security officers deployed at commercial premises, gatehouses, and key entry checkpoints.', icon: 'shield', order: 1 },
  { _id: '2', title: 'Residential Security', slug: 'residential-security', description: 'Dedicated estate security covering gated communities, apartment complexes, and private residences 24/7.', icon: 'home', order: 2 },
  { _id: '3', title: 'Commercial Security', slug: 'commercial-security', description: 'Comprehensive security management for offices, retail outlets, warehouses, and business parks.', icon: 'building', order: 3 },
  { _id: '4', title: 'Construction Site Security', slug: 'construction-security', description: '24-hour guarding of active construction sites, protecting equipment, materials, and restricted zones.', icon: 'hard-hat', order: 4 },
  { _id: '5', title: 'CCTV Monitoring', slug: 'cctv-monitoring', description: 'Remote surveillance management and CCTV monitoring with real-time incident escalation protocols.', icon: 'camera', order: 5 },
  { _id: '6', title: 'Access Control', slug: 'access-control', description: 'Electronic and manned access control systems for regulated entry management at secure facilities.', icon: 'lock', order: 6 },
  { _id: '7', title: 'Security Consultancy', slug: 'security-consultancy', description: 'Expert risk assessments, security audits, and strategic recommendations for organizations and facilities.', icon: 'clipboard', order: 7 },
  { _id: '8', title: 'Event Security', slug: 'event-security', description: 'Crowd management, VIP protection, and venue security for corporate events, concerts, and public gatherings.', icon: 'calendar', order: 8 },
]

export const TESTIMONIALS: Testimonial[] = [
  { _id: '1', authorName: 'James Mwangi', authorRole: 'Estate Manager', authorCompany: 'Crystal Rivers Residences', initials: 'JM', text: 'LindaKeith has provided consistently professional and reliable security coverage for our estate. Their officers are well-trained, disciplined, and the supervision team is always responsive to any concerns we raise.' },
  { _id: '2', authorName: 'Alice Kamau', authorRole: 'Project Director', authorCompany: 'BuildRight Kenya Ltd', initials: 'AK', text: 'Since partnering with LindaKeith, our construction site in Ruiru has experienced zero equipment theft. Their 24/7 presence and detailed occurrence books give us complete confidence in site security.' },
  { _id: '3', authorName: 'Peter Ochieng', authorRole: 'Head of Operations', authorCompany: 'Nexus Events Kenya', initials: 'PO', text: 'The event security team LindaKeith deployed for our corporate conference was exceptional. Professional in appearance, courteous to guests, and highly effective in access management.' },
  { _id: '4', authorName: 'Sarah Wambui', authorRole: 'Facilities Manager', authorCompany: 'Thika Business Park', initials: 'SW', text: 'What sets LindaKeith apart is their supervision model. We know someone is regularly checking on the officers at our premises. The reporting is detailed, timely, and genuinely useful to management.' },
]

export const BLOG_POSTS: BlogPost[] = [
  { _id: '1', title: 'Understanding Security Risk Assessments: A Guide for Kenyan Businesses', slug: 'security-risk-assessments-kenya', excerpt: 'Learn how a professional security risk assessment can identify vulnerabilities before they become incidents, saving your business from costly disruptions.', category: 'Risk Management', publishedAt: '2026-05-28' },
  { _id: '2', title: 'CCTV Monitoring vs. Manned Guarding: Which Solution Does Your Business Need?', slug: 'cctv-vs-manned-guarding', excerpt: 'A practical comparison of electronic surveillance and physical security to help business owners make informed decisions about their security infrastructure.', category: 'Technology', publishedAt: '2026-05-14' },
  { _id: '3', title: 'Access Control Best Practices for Residential Estates in Nairobi', slug: 'access-control-residential-nairobi', excerpt: 'Practical access control strategies that have proven effective at residential estates across Nairobi, Ruiru, and Juja — from manual to electronic systems.', category: 'Best Practices', publishedAt: '2026-04-30' },
]

export const COVERAGE_AREAS: CoverageArea[] = [
  { name: 'Ruiru', description: 'Primary Operations Hub', active: true, coordinates: { x: 185, y: 155 } },
  { name: 'Juja', description: 'Industrial & Residential Cover', active: true, coordinates: { x: 205, y: 135 } },
  { name: 'Thika', description: 'Commercial & Manufacturing', active: true, coordinates: { x: 215, y: 108 } },
  { name: 'Nairobi', description: 'CBD & Suburbs', active: true, coordinates: { x: 175, y: 195 } },
  { name: 'Kiambu County', description: 'Planned Expansion', active: false, coordinates: { x: 140, y: 240 } },
  { name: 'Mombasa', description: 'Planned Expansion', active: false, coordinates: { x: 250, y: 320 } },
]

export const COMPANY_INFO: CompanyInfo = {
  name: 'LindaKeith Security Limited',
  tagline: 'Protecting People, Property & Business Operations Across Kenya',
  description: 'LindaKeith Security Limited is a Kenya-registered security services company delivering professional manned guarding, surveillance, and access control solutions to businesses, residential estates, and institutions across Nairobi, Ruiru, Thika, and Juja.',
  address: 'Ruiru, Kiambu County, Kenya',
  phone: '+254 700 000 000',
  email: 'info@lindakeith.co.ke',
  yearsOperating: 5,
  officersCount: 50,
  clientLocations: 20,
  satisfactionRate: 99,
  socialLinks: {
    facebook: 'https://facebook.com/lindakeith',
    instagram: 'https://instagram.com/lindakeith',
    linkedin: 'https://linkedin.com/company/lindakeith',
  },
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]
