import { Calendar, HardHat, Home } from "lucide-react"
import MaxWidthWrapper from "./globals/mx-width-container"

export default function OurProcess() {
  return (
    <section className="py-16 bg-white">
      <MaxWidthWrapper>
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-medium mb-4">How We Work</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Working Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We provide integrated solutions to meet your diverse needs, whether in flooring, finishing, even playgrounds
            and gardens.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Step 01 */}
          <div className="text-center">
            <div className="relative mb-8">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-10">
                01
              </div>
              {/* Icon Container */}
              <div className="border-2 border-orange-500 w-24 h-24 mx-auto flex items-center justify-center mt-4">
                <Calendar className="w-8 h-8 text-orange-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Make an Appointment</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Provide your name, email address, phone number. In the message field, specify that you would like to
              schedule an appointment and briefly describe your needs.
            </p>
          </div>

          {/* Step 02 */}
          <div className="text-center">
            <div className="relative mb-8">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-10">
                02
              </div>
              {/* Icon Container - Filled */}
              <div className="bg-orange-500 w-24 h-24 mx-auto flex items-center justify-center mt-4">
                <HardHat className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Team Come To Your Home</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Highly experienced specialized engineers with the possibility of installation throughout the Kingdom of
              Saudi Arabia
            </p>
          </div>

          {/* Step 03 */}
          <div className="text-center">
            <div className="relative mb-8">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-10">
                03
              </div>
              {/* Icon Container */}
              <div className="border-2 border-orange-500 w-24 h-24 mx-auto flex items-center justify-center mt-4">
                <Home className="w-8 h-8 text-orange-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us Now</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Experts in the installation of various types of flooring in all cities of the Kingdom of Saudi Arabia
            </p>
          </div>
        </div>
      </div>
      </MaxWidthWrapper>
    </section>
  )
}
