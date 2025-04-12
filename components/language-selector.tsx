"use client"

import * as React from "react"
import { GlobeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Language = {
  code: string
  name: string
  nativeName: string
}

const languages: Language[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
  },
  {
    code: "mk",
    name: "Macedonian",
    nativeName: "Македонски",
  },
  {
    code: "sq",
    name: "Albanian",
    nativeName: "Shqip",
  },
]

// Translation dictionaries
const translations = {
  en: {
    home: "Home",
    about: "About Us",
    howItWorks: "How It Works",
    travelGuides: "Travel Guides",
    partner: "Partner with Jolzt",
    help: "Help & Contact",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    termsOfPayment: "Terms of Payment",
    downloadApp: "Download App",
    appStore: "Download on App Store",
    googlePlay: "Get it on Google Play",
    copyright: "© Jolzt",
    signIn: "Sign In / Register",
    bookNow: "Book Now",
    showCars: "Show Cars",
    rentNow: "Rent Now",
    // Add more translations as needed
  },
  mk: {
    home: "Почетна",
    about: "За Нас",
    howItWorks: "Како Функционира",
    travelGuides: "Туристички Водичи",
    partner: "Станете Партнер",
    help: "Помош & Контакт",
    termsOfService: "Услови за Користење",
    privacyPolicy: "Политика за Приватност",
    termsOfPayment: "Услови за Плаќање",
    downloadApp: "Преземи ја Апликацијата",
    appStore: "Преземи од App Store",
    googlePlay: "Преземи од Google Play",
    copyright: "© Jolzt",
    signIn: "Најави се / Регистрирај се",
    bookNow: "Резервирај Сега",
    showCars: "Прикажи Автомобили",
    rentNow: "Изнајми Сега",
    // Add more translations as needed
  },
  sq: {
    home: "Ballina",
    about: "Rreth Nesh",
    howItWorks: "Si Funksionon",
    travelGuides: "Udhëzues Turistik",
    partner: "Bëhu Partner",
    help: "Ndihmë & Kontakt",
    termsOfService: "Kushtet e Shërbimit",
    privacyPolicy: "Politika e Privatësisë",
    termsOfPayment: "Kushtet e Pagesës",
    downloadApp: "Shkarko Aplikacionin",
    appStore: "Shkarko nga App Store",
    googlePlay: "Shkarko nga Google Play",
    copyright: "© Jolzt",
    signIn: "Hyr / Regjistrohu",
    bookNow: "Rezervo Tani",
    showCars: "Shfaq Makinat",
    rentNow: "Merr me Qira Tani",
    // Add more translations as needed
  },
}

// Create a context for the current language
export const LanguageContext = React.createContext<{
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}>({
  language: languages[0],
  setLanguage: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = React.useState<Language>(languages[0])

  const t = React.useCallback(
    (key: string) => {
      return translations[language.code as keyof typeof translations]?.[key as keyof (typeof translations)["en"]] || key
    },
    [language],
  )

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useTranslation() {
  const context = React.useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }
  return context
}

export function LanguageSelector() {
  const [language, setLanguage] = React.useState<Language>(languages[0])

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    // In a real app, this would update the app's language context
    // and potentially redirect to a localized version of the page

    // For demonstration purposes, we'll just store the language preference in localStorage
    localStorage.setItem("preferredLanguage", lang.code)

    // In a production app, you would also update the HTML lang attribute
    document.documentElement.lang = lang.code
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <GlobeIcon className="h-4 w-4" />
          <span>{language.code.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang)}
            className={lang.code === language.code ? "bg-muted" : ""}
          >
            <span className="mr-2">{lang.nativeName}</span>
            <span className="text-muted-foreground">{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
