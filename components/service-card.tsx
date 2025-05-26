import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'



interface ServiceCardProps {
    
    id: string;
    title: string;
    image: string;
    hoverContent: string
}
const ServiceCard = ({id,title, image, hoverContent}:ServiceCardProps) => {
  return (
      <div
                key={id}
                className="group relative overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:z-10"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Content Container */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  {/* Default Content */}
                  <div className="transition-all duration-500 group-hover:opacity-0 group-hover:transform group-hover:-translate-y-4">
                    <h3 className="text-xl font-bold mb-2">{ title}</h3>
                  </div>

                  {/* Hover Content */}
                  <div className="absolute inset-x-6 bottom-6 opacity-0 transform translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold mb-3">{ title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed mb-4">{ hoverContent}</p>
                    <Link href={`/services/${id}`}>
                    <button className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
  )
}

export default ServiceCard
