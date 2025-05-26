import Image from "next/image"
import MaxWidthWrapper from "../globals/mx-width-container"

export default function Hero() {

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-140px)] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/hero.jpg" alt="Outdoor paved area" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <MaxWidthWrapper>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              We Provide Best Quality <span className="underline decoration-primary decoration-8 ">Flooring</span> and Paving Service
            </h1>

            <p className="text-xl text-gray-200 mb-6 font-medium">
              Where spaces are transformed into masterpieces that exceed expectations.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
              We are one of the leading companies in the Saudi market, and a trusted partner for major government and
              private institutions in the Kingdom, as well as individuals.
            </p>

            {/* <div className="flex items-center gap-3 text-white">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary">
                <Play className="w-5 h-5 ml-1 text-white" />
              </div>
              Watch Video
            </div> */}
          </div>
        </div>
        </MaxWidthWrapper>
      </div>
    </div>
  )
}
