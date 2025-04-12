"use client"

import * as React from "react"
import { useRouter, usePathname } from "next/navigation"
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

const LanguageContext = React.createContext<{
  lang: string
  setLang: (lang: string) => void
}>({
  lang: "en",
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = React.useState("en")
  const router = useRouter()

  const setLanguage = (newLang: string) => {
    if (newLang !== lang) {
      setLang(newLang)

      const currentPath = window.location.pathname
      const pathWithoutLang = currentPath.split("/").slice(2).join("/")
      const newPath = `/${newLang}/${pathWithoutLang}`

      router.push(newPath)

      document.documentElement.lang = newLang
    }
  }

  return <LanguageContext.Provider value={{ lang, setLang: setLanguage }}>{children}</LanguageContext.Provider>
}

export function useTranslation() {
  const context = React.useContext(LanguageContext)
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }

  const translations = {
    en: {
      home: "Home",
      // Add other translations here
    },
    mk: {
      home: "Почетна",
      // Add other translations here
    },
    sq: {
      home: "Ballina",
      // Add other translations here
    },
  }

  const t = (key: keyof (typeof translations)["en"]) => {
    return translations[context.lang as keyof typeof translations]?.[key] || key
  }

  return { t, lang: context.lang }
}

// Add back the LanguageSelector component
export function LanguageSelector() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLang, setCurrentLang] = React.useState<string>("en")

  // Extract current language from URL on component mount
  React.useEffect(() => {
    const pathParts = pathname.split("/")
    if (pathParts.length > 1 && languages.some((lang) => lang.code === pathParts[1])) {
      setCurrentLang(pathParts[1])
    }
  }, [pathname])

  const handleLanguageChange = (lang: Language) => {
    // Get current path without language prefix
    let pathWithoutLang = pathname.split("/").slice(2).join("/")
    if (pathWithoutLang === "") {
      // If we're on the homepage, don't add an extra slash
      pathWithoutLang = ""
    }

    // Navigate to the same page but with different language
    const newPath = `/${lang.code}/${pathWithoutLang}`
    router.push(newPath)

    // Update current language
    setCurrentLang(lang.code)

    // Update HTML lang attribute
    document.documentElement.lang = lang.code
  }

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
