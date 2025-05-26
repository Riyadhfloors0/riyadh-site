import ContactSection from '@/components/contact-section'
import OtherServicesSection from '@/components/home/other-services'
import ServicesSection from '@/components/home/service-section'
import WhyChooseUsSection from '@/components/home/why-us-section'
import PageHero from '@/components/page-hero'
import React from 'react'

const page = () => {
    return (
        <div>
            <PageHero title='Services' backgroundImage='/brushed-concrete.jpg' />
            <ServicesSection />
            <OtherServicesSection />
            <WhyChooseUsSection />
            <ContactSection />
        </div>
    )
}

export default page
