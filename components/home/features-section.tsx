"use client"

import { ArrowRight, Award, CheckCircle, Users } from "lucide-react"
import MaxWidthWrapper from "../globals/mx-width-container"
import { Button } from "../ui/button"
import Link from "next/link"

const features = [
  {
    id: 1,
    icon: Award,
    title: "Satisfaction Guarantee",
    description:
      "We take the time to understand your unique needs and deliver tailored solutions that exceed your expectations.",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    iconColor: "text-orange-500",
  },
  {
    id: 2,
    icon: CheckCircle,
    title: "Best Material Standards",
    description: "Our commitment to quality ensures that every project is completed to the highest standards.",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    iconColor: "text-orange-500",
  },
  {
    id: 3,
    icon: Users,
    title: "Professional Team",
    description: "Our team of skilled professionals is passionate about creating beautiful and functional spaces.",
    bgColor: "bg-orange-500",
    textColor: "text-white",
    iconColor: "text-white",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16  bg-gray-50">
      <MaxWidthWrapper>
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={feature.id}
                  className={`${feature.bgColor} p-8 rounded-lg shadow-sm text-center transition-transform duration-300 hover:scale-105`}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <IconComponent className={`w-12 h-12 ${feature.iconColor}`} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold ${feature.textColor} mb-4`}>{feature.title}</h3>

                  <p
                    className={`${feature.textColor} ${feature.id === 3 ? "opacity-90" : "text-gray-600"} leading-relaxed mb-6`}
                  >
                    {feature.description}
                  </p>
                  <Link href="/about-us">
                    <Button
                      className={`inline-flex items-center gap-2 text-white hover:text-gray-200 font-medium transition-colors`}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
