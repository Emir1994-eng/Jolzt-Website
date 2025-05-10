"use client"

import { Check, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/dropdown-menu"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const languages = [
  { code: "en", name: "English" },
  { code: "mk", name: "Македонски" },
  { code: "sq", name: "Shqip" },
]

export function LanguageSwitcher({ currentLang }: { currentLang?: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const [lang, setLang] = useState(currentLang || "en")

  useEffect(() => {
    if (currentLang) {
      setLang(currentLang)
    } else {
      // Extract language from URL path if not provided
      const pathParts = pathname?.split("/") || []
      const langCode = pathParts[1]
      if (langCode && languages.some((l) => l.code === langCode)) {
        setLang(langCode)
      }
    }
  }, [currentLang, pathname])

  const handleLanguageChange = (langCode: string) => {
    // Replace the language code in the URL path
    const pathParts = pathname?.split("/") || []
    if (pathParts.length > 1) {
      pathParts[1] = langCode
      router.push(pathParts.join("/"))
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-1 h-10 bg-white/90 backdrop-blur-sm shadow-md border-0 hover:bg-white"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{languages.find((l) => l.code === lang)?.name || "English"}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleLanguageChange(language.code)}
          >
            {lang === language.code && <Check className="h-4 w-4" />}
            <span className={lang === language.code ? "font-medium" : ""}>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
