import ContactSection from '@/components/contact-section'
import MaxWidthWrapper from '@/components/globals/mx-width-container'
import PageHero from '@/components/page-hero'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageHero title='Contact Us' backgroundImage='/laser-screed.jpg' />
      <ContactSection />
      <MaxWidthWrapper>
<div className='w-full h-[400px] mt-8 mb-8'>
      <iframe   src="https://www.google.com/maps?q=Stamped+Concrete+Riyadh&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default page
