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
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d382.2012470653076!2d-1.9975102900159403!3d52.58438074566222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487099801905df89%3A0xd64059c013588210!2sCar%20park%20B%20-%20Patients%20%26%20Visitors!5e0!3m2!1sen!2s!4v1738264108210!5m2!1sen!2s"
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
