'use client'
import Image from "next/image"
import {useParams } from "next/navigation"
import { Play, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { servicesData } from "@/constants/service-data"
import PageHero from "@/components/page-hero"
import ContactSection from "@/components/contact-section"
import Link from "next/link"



export default function ServicePage() {

  const {service:serviceParam} = useParams()
  console.log(serviceParam)
  const serviceData = servicesData.find((service) => service.id === serviceParam)

  if (!serviceData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">404 - Service Not Found</h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-center">
        Oops! The service you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/services"
        className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
      >
        Explore Services
      </Link>
    </div>
    )
  }
  return (
    <div className="min-h-screen bg-white">
      <PageHero title={serviceData.title} backgroundImage={serviceData.gridImages[0]}/>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{serviceData.mainHeading}</h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">{serviceData.description}</p>
        </div>

        {/* Image Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-3 gap-2">
            {serviceData.gridImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${serviceData.title} example ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{serviceData.featuresTitle}</h2>
          <div className="space-y-6">
            {serviceData.features.map((feature, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}:</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Riyadh Floors Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{serviceData.whyChooseTitle}</h2>
          <div className="space-y-6">
            {serviceData.whyChoosePoints.map((point, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{point.title}:</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Text */}
        {serviceData.closingText && (
          <div className="mb-16">
            <p className="text-gray-600 leading-relaxed">{serviceData.closingText}</p>
          </div>
        )}

        {/* Where Used Section with Featured Image */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left side - Advantages with checkmarks */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{serviceData.whereUsedTitle}</h2>
              <div className="space-y-4 mb-6">
                {serviceData.advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-600 leading-relaxed">{advantage}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">{serviceData.usageDescription}</p>
            </div>

            {/* Right side - Featured Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={serviceData.featuredImage || "/placeholder.svg"}
                  alt={serviceData.featuredImageTitle}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 rounded-full w-16 h-16 p-0">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </Button>
                </div>
              </div>
              <p className="text-center text-gray-900 mt-4 font-semibold text-lg">{serviceData.featuredImageTitle}</p>
            </div>
          </div>
        </div>

        {/* Final Usage Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{serviceData.finalUsageTitle}</h2>
          <p className="text-gray-600 leading-relaxed">{serviceData.finalUsageDescription}</p>
        </div>
      </div>
      <ContactSection />
    </div>
  )
}


