import Image from "next/image"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="relative h-96 lg:h-[500px] flex items-center overflow-hidden my-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/micro-cement.jpeg"
          alt="Modern office interior with large windows and contemporary furniture"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
            Need Flooring Advice? Ask Our Experts For Free, Glad To Help You
          </h2>

          <p className="text-white/90 mb-8 leading-relaxed lg:text-lg">
            If you are looking for a distinctive garden design that adds beauty to your outdoor space, do not hesitate
            to contact us at Riyadh Flooring Company. We offer you the best prices and highest quality with innovative
            and customized designs.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded transition-colors duration-200 underline"
          >
            Contact Us
          </Link>
        </div>
      </div>
      
    </section>
  )
}
