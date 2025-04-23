import type { Metadata } from "next"
import "../globals.css"

export const supportedLanguages = ["en", "mk", "sq"] as const
export type SupportedLanguage = typeof supportedLanguages[number]

// Generate type-safe metadata
export async function generateMetadata({
  params,
}: {
  params: { lang: SupportedLanguage }
}): Promise<Metadata> {
  return {
    title: {
      en: "Jolzt - Car Rental in North Macedonia",
      mk: "Jolzt - Изнајмување автомобили",
      sq: "Jolzt - Qiraja e makinave",
    }[params.lang],
    description: {
      en: "Rent a car in North Macedonia...",
      mk: "Изнајмете автомобил...",
      sq: "Prenoto një makinë...",
    }[params.lang],
  }
}

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }))
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return <>{children}</>
}