"use client"

import Image from "next/image"
import MaxWidthWrapper from "../globals/mx-width-container"

const projects = [
  {
    id: 1,
    title: "Modern Interior Design",
    image: "/microcement.jpg",
    size: "large",
    position: "left-top",
  },
  {
    id: 2,
    title: "Commercial Flooring",
    image: "/commercial-flooring.webp",
    size: "large",
    position: "left-bottom",
  },
  {
    id: 3,
    title: "Resin bound Riyadh floors",
    image: "/resin-bound.jpg",
    size: "featured",
    position: "center",
    hasOverlay: true,
  },
  {
    id: 4,
    title: "Outdoor Paving",
    image: "/outdor-paving.jpg",
    size: "small",
    position: "right-top",
  },
  {
    id: 5,
    title: "Concrete Flooring",
    image: "/brushed-concrete.jpg",
    size: "small",
    position: "right-middle",
  },
  {
    id: 6,
    title: "Interior Spaces",
    image: "/micro-cement.jpeg",
    size: "small",
    position: "right-bottom",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-16  bg-white" id="projects">
      <MaxWidthWrapper>
      <div className=" mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-3">Our Projects</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Latest Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From flooring to landscaping, we offer a wide range of services to meet all your needs.
          </p>
        </div>

        {/* Projects Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[600px]">
          {/* Left Column - 2 Large Images */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Top Large Image */}
            <div className="relative h-64 lg:h-[48%] rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src={projects[0].image || "/placeholder.svg"}
                alt={projects[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Bottom Large Image */}
            <div className="relative h-64 lg:h-[48%] rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src={projects[1].image || "/placeholder.svg"}
                alt={projects[1].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Center Column - Featured Image */}
          <div className="lg:col-span-4">
            <div className="relative h-64 lg:h-full rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src={projects[2].image || "/placeholder.svg"}
                alt={projects[2].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Text Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl lg:text-2xl font-bold">{projects[2].title}</h3>
              </div>

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Right Column - 3 Small Images */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Top Small Image */}
            <div className="relative h-48 lg:h-[30%] rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src={projects[3].image || "/placeholder.svg"}
                alt={projects[3].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Middle Small Image */}
            <div className="relative h-48 lg:h-[30%] rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src={projects[4].image || "/placeholder.svg"}
                alt={projects[4].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Bottom Small Image */}
            <div className="relative h-48 lg:h-[30%] rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src={projects[5].image || "/placeholder.svg"}
                alt={projects[5].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
      </MaxWidthWrapper>
    </section>
  )
}
