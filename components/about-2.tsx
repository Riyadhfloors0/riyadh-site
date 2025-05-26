import Image from "next/image"
import { Target, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AboutSection2() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="w-full grid lg:grid-cols-2">
        {/* Left Side - Image */}
        <div className="relative h-96 lg:h-screen">
          <Image
            src="/about-us.jpeg"
            alt="Modern office interior with OVER DO IT text on wall"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side - Content */}
        <div className="bg-zinc-800 text-white p-8 lg:p-16 flex items-center">
          <div className="max-w-xl">
            {/* Header */}
            <p className="text-orange-500 font-medium mb-4">Why Choose Us</p>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 leading-tight">
              We Provide The Best Materials For Your Floor and Paving
            </h2>

            {/* Description */}
            <p className="text-gray-300 mb-12 leading-relaxed">
              Understanding Your Vision: We place your vision at the heart of every project we undertake, to turn your
              ideas into reality. Flexibility: We have the ability to execute projects of all sizes. Proven Track
              Record: We are proud of executing leading projects that have earned the satisfaction of our clients.
              Exceptional Results: We use the latest technologies and consider innovation the cornerstone of everything
              we offer.
            </p>

            {/* Vision and Mission */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Our Vision */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 p-2 rounded-full mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  To be the pioneers of integrated solutions in flooring, to be the first choice for customers
                  finishing, landscaping and playgrounds in the Middle East, to be an effective member in implementing
                  the Kingdom&apos;s Vision 2030 and its pioneering role in the region.
                </p>
              </div>

              {/* Our Mission */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 p-2 rounded-full mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Looking for quality and excellence, by providing modern designs and services of unparalleled quality.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/services">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded transition-colors duration-200 underline">
              Our Services
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
