// These re-exports allow the page.tsx to import from individual named paths.
// In a full project, each would be its own file.
// This barrel file is a convenience for the prototype structure.

'use client'
export { TrustBarSection } from './TrustBarSection'
export { AboutSection } from './AboutSection'
export { WhyChooseSection, CoverageSection, ProcessSection, BlogSection, CareersSection, CTASection } from './OtherSections'
