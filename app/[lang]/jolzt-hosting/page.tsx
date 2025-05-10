import { getDictionary } from "@/dictionaries"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorks } from "@/components/how-it-works"
import { ZeroCommission } from "@/components/zero-commission"
import { SocialProof } from "@/components/social-proof"
import { PartnershipForm } from "@/components/partnership-form"
// import { Footer } from "@/components/footer"
import type { Metadata } from "next"

type Props = {
  params: { lang: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Get the dictionary based on the language
  const lang = params.lang && ["en", "mk", "sq"].includes(params.lang) ? params.lang : "en"
  const dictionary = await getDictionary(lang)

  return {
    title: `Jolzt - ${dictionary.hero.title}`,
    description: dictionary.hero.subtitle,
  }
}

export default async function DemoHostPage({ params }: Props) {
  try {
    // Default to English if no language is specified
    const lang = params.lang && ["en", "mk", "sq"].includes(params.lang) ? params.lang : "en"
    const dictionary = await getDictionary(lang)

    // Add fallback values for any potentially missing properties
    const safeDict = {
      ...dictionary,
      hero: {
        ...dictionary.hero,
        benefits: {
          ...dictionary.hero?.benefits,
          transparency: dictionary.hero?.benefits?.transparency || "Full transparency on all bookings and revenue",
        },
      },
      dashboard: dictionary.dashboard || {
        title: "Powerful Dashboard at Your Fingertips",
        subtitle: "Manage your entire car rental business from one intuitive platform",
        cta: "Start Free Trial",
        tabs: {
          listings: "Car Listings",
          calendar: "Availability",
          pricing: "Pricing",
          earnings: "Earnings",
        },
        description: {
          listings:
            "Easily manage all your car listings in one place. Add new cars, update details, and track their status.",
          calendar:
            "Set your car's availability with our intuitive calendar. Select dates, set recurring availability, and manage bookings.",
          pricing:
            "Set flexible pricing for your vehicles. Define regular rates, deposits, and special discounts for longer rentals.",
          earnings:
            "Track your earnings in real-time. See available funds, pending payments, and complete transaction history.",
        },
      },
    }

    return (
      <div className="min-h-screen flex flex-col">
        <div className="absolute top-6 right-6 z-50">
          <LanguageSwitcher currentLang={lang} />
        </div>
         <main className="flex-1">
          <HeroSection dictionary={safeDict.hero} />
          <FeaturesSection dictionary={safeDict.features} />
          <HowItWorks dictionary={safeDict.howItWorks} />
          <ZeroCommission dictionary={safeDict.zeroCommission} />
          <SocialProof dictionary={safeDict.socialProof} />
          <PartnershipForm dictionary={safeDict.form} /> 
        </main>
        {/* <Footer dictionary={safeDict.footer} />  */}
      </div>
    )
  } catch (error) {
    console.error("Error rendering page:", error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong</h1>
          <p className="text-gray-600 mb-6">We're sorry, but there was an error loading this page.</p>
          <a href="/" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
            Return Home
          </a>
        </div>
      </div>
    )
  }
}
