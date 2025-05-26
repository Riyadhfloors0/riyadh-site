"use client"

import ServiceCard from "../service-card"

const otherServices = [
  {
   id: "artificial-grass",
    title: "Artificial Turf Playgrounds",
    image: "/Artficial-Turf-Playgrounds.png",
    hoverContent: "Characterized by easy maintenance and its ability to withstand ..."
  },
  {
     id: "internal-external-finishes",
    title: "Interior and exterior decoration",
    image: "/Decor.png",
    hoverContent:"We turn your imagination into reality with precision, professionalism."
  },
  {
    id: "landscaping-service",
    title: "Landscaping",
    image: "/Land-scape.png",
     hoverContent:"It increases the value , attractiveness of the home  project, creates a positive impression"
  },
  {
    id: "rubber-floor-service",
    title: "Rubber floors",
    image: "/Rubber-Floors.webp",
     hoverContent:"Provides comfort and flexibility during movement..."
  },
]

export default function OtherServicesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-orange-500 font-medium mb-2">Our Services</p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-0">Other services</h2>
            <p className="text-gray-600">Here are more of our services</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherServices.map((service, index) => (
            <ServiceCard id={service.id} title={service.title} image={service.image} hoverContent={service.hoverContent} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
