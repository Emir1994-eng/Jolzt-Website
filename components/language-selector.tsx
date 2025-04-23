"use client"

import * as React from "react"
import { useRouter, usePathname } from "next/navigation"
import { GlobeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Move languages to lib/constants.ts for shared access
const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "mk", name: "Macedonian", nativeName: "Македонски" },
  { code: "sq", name: "Albanian", nativeName: "Shqip" },
] as const

type LanguageCode = typeof languages[number]['code']
type Language = typeof languages[number]

type LanguageContextType = {
  lang: LanguageCode
  setLang: (lang: LanguageCode) => void
}

const LanguageContext = React.createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
})

interface LanguageProviderProps {
  children: React.ReactNode
  initialLang?: LanguageCode
}

export function LanguageProvider({ 
  children, 
  initialLang = "en" 
}: LanguageProviderProps) {
  const [lang, setLang] = React.useState<LanguageCode>(initialLang)
  const router = useRouter()
  const pathname = usePathname()

  const setLanguage = React.useCallback((newLang: LanguageCode) => {
    if (newLang !== lang) {
      setLang(newLang)
      const pathWithoutLang = pathname.split('/').slice(2).join('/')
      router.push(`/${newLang}/${pathWithoutLang}`)
      document.documentElement.lang = newLang
    }
  }, [lang, pathname, router])

  // Sync language with URL on route changes
  React.useEffect(() => {
    const pathLang = pathname.split('/')[1]
    if (isValidLanguage(pathLang)) {
      setLang(pathLang)
    }
  }, [pathname])

  return (
    <LanguageContext.Provider value={{ lang, setLang: setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Helper function for type-safe language validation
function isValidLanguage(lang: string): lang is LanguageCode {
  return languages.some(l => l.code === lang)
}

// Move translations to separate file (lib/translations.ts)
const translations = {
  en: { home: "Home" },
  mk: { home: "Почетна" },
  sq: { home: "Ballina" },
} satisfies Record<LanguageCode, Record<string, string>>

type TranslationKey = keyof typeof translations.en

export function useTranslation() {
  const context = React.useContext(LanguageContext)
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }

  const t = React.useCallback((key: TranslationKey) => {
    return translations[context.lang][key] || key
  }, [context.lang])

  return { 
    t, 
    lang: context.lang, 
    setLang: context.setLang,
    languages // Expose languages for components that need them
  }
}

export function LanguageSelector() {
  const { lang: currentLang, setLang, languages } = useTranslation()
  const pathname = usePathname()

  const handleLanguageChange = React.useCallback((lang: Language) => {
    const pathWithoutLang = pathname.split('/').slice(2).join('/')
    setLang(lang.code)
    document.documentElement.lang = lang.code
  }, [pathname, setLang])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <GlobeIcon className="h-4 w-4" />
          <span>{currentLang.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang)}
            className={lang.code === currentLang ? "bg-muted" : ""}
          >
            <span className="mr-2">{lang.nativeName}</span>
            <span className="text-muted-foreground">{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}