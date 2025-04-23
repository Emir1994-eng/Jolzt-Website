// lib/constants.ts
export const supportedLanguages = ["en", "mk", "sq"] as const
export type SupportedLanguage = typeof supportedLanguages[number]

export const defaultLanguage: SupportedLanguage = "en"