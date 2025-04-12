"use client"

import { useCallback } from "react"

// Import all translations
import enTranslations from "@/locales/en.json"
import mkTranslations from "@/locales/mk.json"
import sqTranslations from "@/locales/sq.json"

// Define the translations object
const translations = {
  en: enTranslations,
  mk: mkTranslations,
  sq: sqTranslations,
}

export type SupportedLanguage = "en" | "mk" | "sq"

// Helper function to get a nested value from an object using a dot-notation path
const getNestedValue = (obj: any, path: string, defaultValue = ""): string => {
  const keys = path.split(".")
  let result = obj

  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = result[key]
    } else {
      return defaultValue
    }
  }

  return result || defaultValue
}

export const getTranslation = (lang: SupportedLanguage = "en", key: string): string => {
  const currentTranslations = translations[lang] || translations.en
  return getNestedValue(currentTranslations, key, key)
}

// Re-adding the useTranslations function to fix the import error
export const useTranslations = (lang: SupportedLanguage = "en") => {
  // Get translations for the current language
  const currentTranslations = translations[lang] || translations.en

  // Translation function
  const t = useCallback(
    (key: string, defaultValue: string = key): string => {
      return getNestedValue(currentTranslations, key, defaultValue)
    },
    [currentTranslations],
  )

  return { t, lang }
}
