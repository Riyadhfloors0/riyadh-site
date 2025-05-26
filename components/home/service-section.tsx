"use client"

import { Button } from "@/components/ui/button"
import MaxWidthWrapper from "../globals/mx-width-container"
import ServiceCard from "../service-card"
import Link from "next/link"

const services = [
  {
    id: "stamped-concrete",
    title: "Stamped Concrete",
    image: "/stamped-concrete.jpeg",
    description:
      "Decorative concrete that mimics the appearance of brick, slate, flagstone, stone, tile, and even wood.",
    hoverContent:
      "Stamped concrete offers endless design possibilities with various patterns, textures, and colors. Ideal for driveways, patios, and walkways.",
  },
  {
     id: "resin-bound",
    title: "Resin bound",
    image: "/resin-bound.webp",
    description: "Durable and visually appealing surface solution.",
    hoverContent:
      "Resin Bound is characterized by its high durability and visual appeal. Perfect for walkways, sidewalks.",
  },
  {
    id: "terrazzo",
    title: "Terrazzo",
    image: "/terazzo.jpg",
    description: "Classic composite material with marble chips in cement or resin.",
    hoverContent:
      "Terrazzo flooring combines beauty and durability, perfect for high-traffic areas with its polished finish and endless design options.",
  },
  {
    id: "exposed-aggregate",
    title: "Exposed Aggregate",
    image: "/exposed-aggregate.png",
    description: "Textured concrete surface revealing decorative stones and aggregates.",
    hoverContent:
      "Exposed aggregate provides excellent slip resistance and natural beauty, ideal for outdoor applications and pool areas.",
  },
  {
    id: "polished-concrete",
    title: "Polished Concrete",
    image: "/polished-concrete.webp",
    description: "Smooth, glossy concrete surface with enhanced durability.",
    hoverContent:
      "Polished concrete offers a sophisticated, low-maintenance flooring solution with excellent light reflectivity and durability.",
  },
  {
     id: "artificial-epoxy",
    title: "Artificial Epoxy",
    image: "/artificial-epoxy.webp",
    description: "High-performance epoxy coating for industrial and commercial floors.",
    hoverContent:
      "Artificial epoxy provides chemical resistance and easy maintenance, perfect for warehouses and industrial facilities.",
  },
  {
      id: "brushed-concrete",
    title: "Brushed Concrete",
    image: "/brushed-concrete.jpg",
    description: "Textured concrete surface with brushed finish for enhanced grip.",
    hoverContent:
      "Brushed concrete offers excellent traction and slip resistance, ideal for ramps, walkways, and outdoor applications.",
  },
  {
    id: "microcement-topcrete",
    title: "Microcement & Top Crete",
    image: "/microcement.jpg",
    description: "Ultra-thin decorative coating for modern surfaces.",
    hoverContent:
      "Microcement provides seamless, contemporary finishes with excellent adhesion and versatility for walls and floors.",
  },
  {
     id: "colored-concrete",
    title: "colored concrete",
    image: "/colored-concrete.webp",
    description: "Vibrant concrete solutions with integrated color systems.",
    hoverContent:
      "Colored concrete offers unlimited design possibilities with fade-resistant pigments and long-lasting beauty.",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <MaxWidthWrapper>
        <div className=" mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div className="mb-6 lg:mb-0">
              <p className="text-orange-500 font-medium mb-2">Our Services</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What We Provide</h2>
            </div>

            <div className="lg:max-w-md">
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over a decade of experience, we offer comprehensive, end-to-end solutions to create modern and unique
                spaces, whether residential, commercial, or sports-related.
              </p>
              <Link href="/services">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg">All Services</Button>
              </Link>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (

              <ServiceCard id={service.id} title={service.title} image={service.image} hoverContent={service.hoverContent} key={index} />

            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
