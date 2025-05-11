"use client"

import Link from "next/link"
import { MessageCircle, Mail, Phone } from "lucide-react"
import Image from "next/image"

interface FooterProps {
  dictionary: {
    terms: string
    privacy: string
    copyright: string
    contact: {
      title: string
      viber: string
      whatsapp: string
      email: string
      phone: string
    }
  }
}

export function Footer({ lang = "en" }: { lang?: string }) {

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-68f6jehinosJ0MG491ffBKwnAvNk4k.svg"
                alt="Jolzt"
                width={30}
                height={30}
                className="h-8 w-8"
              />
              <span className="font-bold text-lg text-white">JOLZT</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Boost your car rental business with Jolzt. We help you get more bookings with 0% commission for 2 months.
              Limited time offer - only 3 spots available out of 5 total!
            </p>
            <p className="text-sm text-gray-400">Jolzt 2025</p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Jolzt</h3>
            <ul className="space-y-4 mb-8">
              <li>
                <a
                  href="viber://chat?number=%2B38978700202"
                  className="flex items-center gap-3 text-gray-300 hover:text-orange-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-purple-600 rounded-full p-2">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <span>Viber: 078 700 202</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/38978700202"
                  className="flex items-center gap-3 text-gray-300 hover:text-orange-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-green-600 rounded-full p-2">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <span>WhatsApp: 078 700 202</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:jolztapp@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-orange-300 transition-colors"
                >
                  <div className="bg-blue-600 rounded-full p-2">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <span>jolztapp@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+38978700202"
                  className="flex items-center gap-3 text-gray-300 hover:text-orange-300 transition-colors"
                >
                  <div className="bg-gray-600 rounded-full p-2">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <span>Contact: 078 700 202</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}/about-us`} className="text-gray-300 hover:text-orange-300 transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/how-jolzt-works`} className="text-gray-300 hover:text-orange-300 transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-gray-300 hover:text-orange-300 transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
