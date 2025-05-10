import { en } from "./en"
import { mk } from "./mk"
import { sq } from "./sq"

export const dictionaries = {
  en,
  mk,
  sq,
}

export const getDictionary = async (locale: string) => {
  return dictionaries[locale as keyof typeof dictionaries] || dictionaries.en
}
