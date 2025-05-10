"use client"

import { Check } from "lucide-react"

interface HowItWorksProps {
  dictionary: {
    title: string
    subtitle: string
    jolztRole: {
      title: string
      items: string[]
    }
    hostRole: {
      title: string
      items: string[]
    }
  }
}

export function HowItWorks({ dictionary }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 relative inline-block">
            {dictionary.title}
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-500 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">{dictionary.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <h3 className="text-2xl font-bold mb-8 relative z-10">{dictionary.jolztRole.title}</h3>
            <ul className="space-y-5 relative z-10">
              {dictionary.jolztRole.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 hover:translate-x-1 transition-transform duration-200"
                >
                  <div className="mt-1 bg-white rounded-full p-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-10 border border-gray-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <h3 className="text-2xl font-bold mb-8 relative z-10">{dictionary.hostRole.title}</h3>
            <ul className="space-y-5 relative z-10">
              {dictionary.hostRole.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 hover:translate-x-1 transition-transform duration-200"
                >
                  <div className="mt-1 bg-gray-800 rounded-full p-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
