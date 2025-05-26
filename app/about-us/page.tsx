import AboutSection2 from '@/components/about-2'
import CTASection from '@/components/cta-section'
import AboutSection from '@/components/home/about-section'
import OurProcess from '@/components/our-process'
import PageHero from '@/components/page-hero'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageHero title='About Us' backgroundImage='/about.jpg' />
      <AboutSection />
      <AboutSection2/>
      <OurProcess/>
      <CTASection/>
    </div>
  )
}

export default page
