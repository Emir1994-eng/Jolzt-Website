"use client"

import { DollarSign, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

interface ZeroCommissionProps {
  dictionary: {
    title: string
    subtitle: string
    description: string
    cta: string
    benefits: string[]
    firstTwoMonths?: string
    trialPeriod?: string
    afterTrial?: string
    standardPlan?: string
    commission?: string
    youKeep100?: string
    continueOrCancel?: string
    keyBenefits?: string
    limitedTimeOffer?: string
    expiresSoon?: string
    days?: string
    hours?: string
    minutes?: string
  }
}

export function ZeroCommission({ dictionary }: ZeroCommissionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("zero-commission")
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="zero-commission" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div
          className={`max-w-4xl mx-auto bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl overflow-hidden shadow-xl transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="p-10 md:p-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">{dictionary.title}</h2>
                <p className="text-lg text-orange-700">{dictionary.subtitle}</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{dictionary.description}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-1">{dictionary.firstTwoMonths || "First 2 Months"}</h3>
                  <p className="text-gray-500 text-sm">{dictionary.trialPeriod || "Trial Period"}</p>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="text-center">
                    <span className="text-6xl font-bold text-green-500">0%</span>
                    <p className="text-gray-500">{dictionary.commission || "Commission"}</p>
                  </div>
                </div>
                <div className="bg-green-50 rounded-md p-4">
                  <div className="flex items-center gap-2 text-green-700">
                    <Check className="h-5 w-5" />
                    <span className="font-medium">{dictionary.youKeep100 || "You keep 100% of earnings"}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-1">{dictionary.afterTrial || "After Trial"}</h3>
                  <p className="text-gray-500 text-sm">{dictionary.standardPlan || "Standard Plan"}</p>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="text-center">
                    <span className="text-6xl font-bold text-orange-500">20%</span>
                    <p className="text-gray-500">{dictionary.commission || "Commission"}</p>
                  </div>
                </div>
                <div className="bg-orange-50 rounded-md p-4">
                  <div className="flex items-center gap-2 text-orange-700">
                    <Check className="h-5 w-5" />
                    <span className="font-medium">{dictionary.continueOrCancel || "Continue or cancel anytime"}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 mb-10 shadow-md">
              <h3 className="text-xl font-bold mb-4">{dictionary.keyBenefits || "Key Benefits"}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {dictionary.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 rounded-full p-1.5 flex-shrink-0">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 mb-8 border border-orange-200 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-orange-800 text-lg">
                  {dictionary.limitedTimeOffer || "Limited Time Offer"}
                </span>
                <span className="text-sm text-orange-600 font-medium">{dictionary.expiresSoon || "Expires soon"}</span>
              </div>
              <div className="flex justify-center gap-4">
                <div className="bg-white rounded-md p-3 w-20 text-center shadow-sm">
                  <div className="text-2xl font-bold text-orange-500">07</div>
                  <div className="text-xs text-gray-500">{dictionary.days || "Days"}</div>
                </div>
                <div className="bg-white rounded-md p-3 w-20 text-center shadow-sm">
                  <div className="text-2xl font-bold text-orange-500">12</div>
                  <div className="text-xs text-gray-500">{dictionary.hours || "Hours"}</div>
                </div>
                <div className="bg-white rounded-md p-3 w-20 text-center shadow-sm">
                  <div className="text-2xl font-bold text-orange-500">45</div>
                  <div className="text-xs text-gray-500">{dictionary.minutes || "Minutes"}</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-10 py-6 h-auto rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto group"
              >
                <Link href="#partnership-form" className="flex items-center justify-center gap-2">
                  {dictionary.cta}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
