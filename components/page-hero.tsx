import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface PageHeroProps {
  title: string
  backgroundImage?: string
  className?: string
}

export default function PageHero({
  title,
  backgroundImage,
  className = "",
}: PageHeroProps) {
  return (
    <section className={`relative h-96 flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt={`${title} background`}
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide">{title}</h1>

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center justify-center space-x-2 text-sm md:text-base opacity-90">
          <Link href="/" className="hover:text-gray-300 transition-colors duration-200">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-300">{title}</span>
        </nav>
      </div>
    </section>
  )
}
