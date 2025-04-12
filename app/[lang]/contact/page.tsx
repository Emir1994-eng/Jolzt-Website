import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

// Translations for the contact page
const translations = {
  en: {
    title: "Contact Us",
    description: "Get in touch with the Jolzt team. We're here to help with any questions or concerns.",
  },
  mk: {
    title: "Контактирајте нè",
    description: "Стапете во контакт со тимот на Jolzt. Тука сме да помогнеме со сите прашања или грижи.",
  },
  sq: {
    title: "Na Kontaktoni",
    description: "Lidhuni me ekipin e Jolzt. Jemi këtu për t'ju ndihmuar me çdo pyetje ose shqetësim.",
  },
}

export const metadata: Metadata = {
  title: "Contact Us | Jolzt",
  description: "Get in touch with the Jolzt team. We're here to help with any questions or concerns.",
}

export default function ContactPage({ params }: { params: { lang: string } }) {
  return <ContactPageClient params={params} />
}
