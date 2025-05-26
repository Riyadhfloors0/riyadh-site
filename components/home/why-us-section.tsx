"use client"

import { Award, Trophy, Users, Target } from "lucide-react"
import Image from "next/image"

const statistics = [
  {
    id: 1,
    icon: Award,
    number: "20",
    suffix: "+",
    label: "Years Of Experience",
  },
  {
    id: 2,
    icon: Trophy,
    number: "790",
    suffix: "+",
    label: "Satisfied Clients",
  },
  {
    id: 3,
    icon: Users,
    number: "40",
    suffix: "+",
    label: "Professional Team",
  },
  {
    id: 4,
    icon: Target,
    number: "800",
    suffix: "+",
    label: "Successful Project",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-16 px-4 text-white overflow-hidden">
      {/* Wooden Background */}
      <div className="absolute inset-0">
        <Image src="/wooden-bg.jpg" alt="Wooden texture background" fill className="object-cover" priority />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image with Play Button (positioned lower) */}
          <div className="relative mt-8 lg:mt-16">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/why-us.jpeg"
                alt="Modern paved plaza with buildings"
                fill
                className="object-cover"
              />

              {/* Play Button Overlay */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </button>
              </div> */}
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <p className="text-orange-500 font-medium mb-3">Why Choose Us</p>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                We Provide The Best Materials For Your Floor and Paving
              </h2>
            </div>

            {/* Description */}
            <div className="mb-12">
              <p className="text-gray-200 leading-relaxed">
                <span className="text-white font-medium">Understanding Your Vision:</span> We place your vision at the
                heart of every project we undertake, to turn your ideas into reality.{" "}
                <span className="text-white font-medium">Flexibility:</span> We have the ability to execute projects of
                all sizes. <span className="text-white font-medium">Proven Track Record:</span> We are proud of
                executing leading projects that have earned the satisfaction of our clients.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {statistics.map((stat) => {
                const IconComponent = stat.icon
                return (
                  <div key={stat.id} className="text-center">
                    <div className="flex justify-center mb-4">
                      <IconComponent className="w-12 h-12 text-orange-500" strokeWidth={1.5} />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold mb-2">
                      {stat.number}
                      <span className="text-orange-500">{stat.suffix}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
