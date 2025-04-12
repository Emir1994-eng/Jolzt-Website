"use client"

import { useParams } from "next/navigation"
import { getTranslation } from "@/utils/i18n"
import type { SupportedLanguage } from "@/utils/i18n"

export function useTranslations() {
  const params = useParams()
  const lang = (params?.lang as SupportedLanguage) || "en"

  const t = (key: string): string => {
    return getTranslation(lang, key)
  }

  return { t, lang }
}
