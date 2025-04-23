
import type { Metadata } from "next"

import { LanguageProvider } from "@/components/language-selector"
import { HowItWorksContent } from "./content"

export const metadata: Metadata = {
  title: 'How It Works - Jolzt Car Rental',
  description: 'Learn how to easily rent a car in North Macedonia with our step-by-step guide.',
}

export default function HowItWorksPage() {
  return (
    <LanguageProvider>
      <HowItWorksContent />
    </LanguageProvider>
  )
}

