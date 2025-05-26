"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, MapPin, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { useState } from "react"
import MaxWidthWrapper from "../globals/mx-width-container"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <>
      <div className="bg-zinc-800 text-white py-2 px-4 hidden md:block">
        <MaxWidthWrapper>
          <div className="mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-2 sm:mb-0">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>صبةالخراسانه مطبوعه ديكورات صبة مرؤحه بالرياض</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>alirahamndir1234@gmail.com</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Facebook className="w-4 h-4 hover:text-orange-500 cursor-pointer transition-colors" />
              <Twitter className="w-4 h-4 hover:text-orange-500 cursor-pointer transition-colors" />
              <Instagram className="w-4 h-4 hover:text-orange-500 cursor-pointer transition-colors" />
              <Youtube className="w-4 h-4 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg">
        <MaxWidthWrapper>
          <div className="mx-auto">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                  <div className="w-8 h-8 border-2 border-white rounded transform rotate-45"></div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">Riyadh</h1>
                  <p className="text-sm text-gray-600">FLOORS</p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link
                  href="/"
                  className={`font-medium transition-colors ${
                    isActive("/") ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  HOME
                </Link>
                <Link
                  href="/services"
                  className={`transition-colors ${
                    isActive("/services") ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  SERVICES
                </Link>
                <Link
                  href="/about-us"
                  className={`transition-colors ${
                    isActive("/about-us") ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  ABOUT US
                </Link>
                <Link
                  href="/contact-us"
                  className={`transition-colors ${
                    isActive("/contact-us") ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  CONTACT US
                </Link>
              </div>

              {/* Get A Quote Button & Mobile Menu */}
              <div className="flex items-center gap-4">
                <Link href="/contact-us">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg hidden sm:block">
                    Get A Quote
                  </Button>
                </Link>
                {/* Mobile Menu Button */}
                <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="lg:hidden border-t border-gray-200 py-4">
                <div className="flex flex-col space-y-4">
                  <Link href="/" className={`${isActive("/") ? "text-orange-500 font-medium" : "text-gray-700"}`}>
                    HOME
                  </Link>
                  <Link
                    href="/services"
                    className={`${isActive("/services") ? "text-orange-500 font-medium" : "text-gray-700"}`}
                  >
                    SERVICES
                  </Link>
                  <Link
                    href="/about-us"
                    className={`${isActive("/about-us") ? "text-orange-500 font-medium" : "text-gray-700"}`}
                  >
                    ABOUT US
                  </Link>
                  <Link
                    href="/contact-us"
                    className={`${isActive("/contact-us") ? "text-orange-500 font-medium" : "text-gray-700"}`}
                  >
                    CONTACT US
                  </Link>
                  <Link href="/contact-us">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg w-fit">
                      Get A Quote
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  )
}
