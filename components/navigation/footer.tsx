"use client"

import { MapPin, Phone, Mail, ChevronRight } from "lucide-react"
import MaxWidthWrapper from "../globals/mx-width-container"
import Link from "next/link"
import { Button } from "../ui/button"

const quickLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "services" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/contact-us" },
]



export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <MaxWidthWrapper>
        <div className="mx-auto  py-12 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Logo and Company Info */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                  <div className="w-8 h-8 border-2 border-white rounded transform rotate-45"></div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Riyadh</h1>
                  <p className="text-sm text-gray-300">FLOORS</p>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
                Where spaces turn into masterpieces that exceed expectations
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-3">
                <Link href="https://wa.me/+9660568912128" target="_blank" rel="noopener noreferrer">
                          <Button>
                           Contact on Whatsapp
                          </Button>
                          </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors duration-300 group"
                    >
                      <ChevronRight className="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 leading-relaxed">
                      صبةالخراسانه مطبوعه ديكورات صبة مرؤحه بالرياض
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <a
                    href="tel:+966500888750"
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                  >
                    (+966)0568912128
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <a
                    href="mailto:riyadfloor@gmail.com"
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                  >
                    alirahamndir1234@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">Riyadh floors company</p>
              <p className="text-gray-500 text-sm">Copyright © 2024. All rights reserved.</p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
