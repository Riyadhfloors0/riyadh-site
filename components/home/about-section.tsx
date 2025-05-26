"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"
import MaxWidthWrapper from "../globals/mx-width-container"
import Link from "next/link"

const features = [
  "Best Quality Standards",
  "100% Satisfaction Guarantee",
  "Quality Control System",
  "Commitment to Customers",
  "Highly Professional Team",
  "Best Materials",
]

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <MaxWidthWrapper>
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Images and Experience */}
          <div className="relative">
            {/* Orange accent squares */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-500 rounded-lg z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-orange-500 rounded-lg"></div>

            {/* Main background image */}
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/about-home.jpg"
                alt="Workers in safety vests"
                fill
                className="object-cover"
              />
            </div>

            {/* Overlapping interior image */}
            <div className="absolute top-8 left-8 w-64 h-48 rounded-lg overflow-hidden shadow-xl border-4 border-white z-20">
              <Image
                src="/microcement.jpg"
                alt="Modern interior space"
                fill
                className="object-cover"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute bottom-8 left-8 bg-white rounded-lg p-6 shadow-xl z-30">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">
                  20<span className="text-orange-500">+</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Years Of
                  <br />
                  Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="relative">
            {/* Header */}
            <div className="mb-8">
              <p className="text-orange-500 font-medium mb-3">About Riyadh Floors</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                We Have 20 Years of Experience in Flooring & Paving Service
              </h2>
            </div>

            {/* Description paragraphs */}
            <div className="space-y-4 mb-8 text-gray-600 leading-relaxed">
              <p>
                Riyadh Floors Company is your partner in transforming spaces into artistic masterpieces that combine
                beauty and durability, with a unique character that reflects your personality or brand.
              </p>
              <p>
                We offer integrated solutions to meet your diverse needs, whether in flooring, finishes, playgrounds, or
                gardens.
              </p>
              <p>
                We have gained the trust of many ministries and government agencies to implement a range of the
                Kingdom&apos;s most important pioneering national projects.
              </p>
            </div>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
           

            {/* More About Us button */}
            <Link href="/services">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium">
              More About Us
            </Button>
            </Link>
          </div>
        </div>
      </div>
      </MaxWidthWrapper>
    </section>
  )
}
