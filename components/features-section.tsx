"use client"

import { BarChart, Calendar, MessageSquare, DollarSign } from "lucide-react"
import Image from "next/image"

interface FeaturesSectionProps {
  dictionary: {
    title: string
    subtitle: string
    features: {
      title: string
      description: string
      icon: string
      bullets: string[]
    }[]
  }
}

export function FeaturesSection({ dictionary }: FeaturesSectionProps) {
  // Map string icon names to actual components
  const iconMap = {
    BarChart: BarChart,
    Calendar: Calendar,
    MessageSquare: MessageSquare,
    DollarSign: DollarSign,
  }

  // Dashboard screenshots
  const dashboardImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%2000.01.30-1LaJlevHCktgEYsDTYvlIzsStsQ7TO.png",
      alt: "Car listings management dashboard",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-08%20at%2023.56.04-X7lUODIY73cc6I9FTox6LZleq3Hho5.png",
      alt: "Availability calendar dashboard",
    },
    {
      src: "/car-rental-support-dashboard.png",
      alt: "Customer support dashboard with active inquiries",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%2000.04.53-COWE1P5SkITkfFwWxwhV7TxODlBeVZ.png",
      alt: "Earnings dashboard showing pending revenue",
    },
  ]

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 relative inline-block">
            {dictionary.title}
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-500 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">{dictionary.subtitle}</p>
        </div>

        {dictionary.features.map((feature, index) => {
          const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
          const isEven = index % 2 === 0
          const dashboardImage = dashboardImages[index]

          return (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center mb-24 ${isEven ? "" : "md:flex-row-reverse"}`}
            >
              <div className={isEven ? "order-1" : "order-2"}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{feature.description}</p>

                <ul className="space-y-3">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center transform transition-transform group-hover:scale-110">
                        <span className="text-green-600 text-sm font-bold">✓</span>
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`relative rounded-xl overflow-hidden shadow-xl border border-gray-200 ${
                  isEven ? "order-2" : "order-1"
                }`}
              >
                <div className="bg-white p-2">
                  {index === 0 ? (
                    // Special handling for Car Listings (index 0)
                    <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-gray-200 shadow-md">
                      <Image
                        src={dashboardImage.src || "/placeholder.svg"}
                        alt={dashboardImage.alt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ) : index === 3 ? (
                    // Special handling for Earnings Dashboard (index 3)
                    <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-gray-200 shadow-md">
                      <Image
                        src={dashboardImage.src || "/placeholder.svg"}
                        alt={dashboardImage.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ) : (
                    // Standard handling for other images
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 shadow-md">
                      <Image
                        src={dashboardImage.src || "/placeholder.svg"}
                        alt={dashboardImage.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
