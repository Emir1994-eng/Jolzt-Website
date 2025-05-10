"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

interface HeroSectionProps {
  dictionary: {
    title: string
    subtitle: string
    cta: string
    highlight: string
    highlightText: string
    benefits: {
      marketing: string
      earnings: string
      dashboard: string
      commitment: string
      transparency: string
    }
    trial: {
      title: string
      subtitle: string
    }
  }
}

export function HeroSection({ dictionary }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-orange-600 to-orange-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-pattern opacity-20"></div>

      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-68f6jehinosJ0MG491ffBKwnAvNk4k.svg"
            alt="Jolzt"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="font-bold text-2xl text-white tracking-tight">JOLZT</span>
        </div>
      </header>

      {/* Hero Content */}
      <div
        className={`container mx-auto px-6 md:px-8 lg:px-12 relative z-10 py-16 md:py-24 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full mb-8 shadow-lg">
              <span className="font-bold text-lg">{dictionary.highlight}</span>
              <span className="ml-2">{dictionary.highlightText}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-md">
              {dictionary.title}
            </h1>

            <p className="text-xl mb-10 text-white max-w-lg leading-relaxed drop-shadow-sm">{dictionary.subtitle}</p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-white/90 text-base sm:text-lg px-8 sm:px-10 py-7 h-auto rounded-lg font-bold shadow-xl transition-all duration-300 hover:shadow-2xl border-2 border-white/20 w-full sm:w-auto group"
              >
                <Link href="#partnership-form" className="flex items-center justify-center gap-3">
                  {dictionary.cta}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="bg-orange-400/30 backdrop-blur-sm text-white px-6 py-4 rounded-lg font-medium inline-block shadow-lg border border-white/20">
              <span className="font-bold">Limited Offer:</span> Only 3 spots remaining out of 5 total!
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 overflow-hidden relative transform transition-all duration-500 hover:shadow-orange-300/30 hover:-translate-y-1">
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-md font-bold text-sm shadow-lg">
                2 Months Free
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl"></div>

              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{dictionary.trial.title}</h3>
                <p className="text-gray-600">{dictionary.trial.subtitle}</p>
              </div>

              <div className="space-y-5 mb-6 relative z-10">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 rounded-full p-1.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{dictionary.benefits.marketing}</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 rounded-full p-1.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{dictionary.benefits.earnings}</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 rounded-full p-1.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{dictionary.benefits.dashboard}</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 rounded-full p-1.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    {dictionary.benefits.transparency || "Full transparency on all bookings and revenue"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
