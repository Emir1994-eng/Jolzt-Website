import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jolzt - Car Rental in North Macedonia",
  description: "Rent a car in North Macedonia with Jolzt. Easy booking, great rates, and excellent service.",
}

// Define the supported languages
export const supportedLanguages = ["en", "mk", "sq"]

// Generate static params for all supported languages
export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }))
}

export default function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>) {
  // Default to English if an unsupported language is provided
  const lang = supportedLanguages.includes(params.lang) ? params.lang : "en"

  return (
    <html lang={lang}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
