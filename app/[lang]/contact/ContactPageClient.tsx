"use client"

import { ContactForm } from "@/components/contact-form"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon } from "lucide-react"
import { LanguageSelector } from "@/components/language-selector"

// Translations for the contact page
const translations = {
  en: {
    title: "Contact Us",
    description: "Get in touch with the Jolzt team. We're here to help with any questions or concerns.",
    heading: "Contact Us",
    backToHome: "Back to Home",
    subheading:
      "Have questions or need assistance? Reach out to our team and we'll get back to you as soon as possible.",
    emailHeading: "Email Us",
    emailAddress: "jolztapp@gmail.com",
    phoneHeading: "Call Us",
    phoneNumber: "+38978700202",
  },
  mk: {
    title: "Контактирајте нè",
    description: "Стапете во контакт со тимот на Jolzt. Тука сме да помогнеме со сите прашања или грижи.",
    heading: "Контактирајте нè",
    backToHome: "Назад кон Почетна",
    subheading:
      "Имате прашања или ви треба помош? Контактирајте го нашиот тим и ќе ви одговориме во најкраток можен рок.",
    emailHeading: "Е-пошта",
    emailAddress: "jolztapp@gmail.com",
    phoneHeading: "Телефон",
    phoneNumber: "+38978700202",
  },
  sq: {
    title: "Na Kontaktoni",
    description: "Lidhuni me ekipin e Jolzt. Jemi këtu për t'ju ndihmuar me çdo pyetje ose shqetësim.",
    heading: "Na Kontaktoni",
    backToHome: "Kthehu në Ballina",
    subheading:
      "Keni pyetje ose keni nevojë për ndihmë? Kontaktoni ekipin tonë dhe do t'ju përgjigjemi sa më shpejt të jetë e mundur.",
    emailHeading: "Email",
    emailAddress: "jolztapp@gmail.com",
    phoneHeading: "Na Telefononi",
    phoneNumber: "+38978700202",
  },
}

export default function ContactPageClient({ params }: { params: { lang: string } }) {
  const lang = params.lang as keyof typeof translations
  const t = translations[lang] || translations.en

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4 md:gap-6">
            <Link href={`/${lang}`} className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Jolzt Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-xl font-bold text-[#f26522]">JOLZT</span>
            </Link>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <LanguageSelector />
            <Link
              href={`/${lang}`}
              className="text-sm font-medium hover:underline flex items-center gap-1 transition-colors hover:text-[#f26522]"
            >
              <ChevronLeftIcon className="h-4 w-4" />
              {t.backToHome}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative py-20 md:py-28">
          {/* Darker gradient background with overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#e05a1c] to-[#f26522] -z-10 h-[45vh] clip-diagonal" />
          <div className="absolute inset-0 bg-black/60 -z-10 h-[45vh] clip-diagonal" />
          <div className="container px-4 md:px-6">
            <div className="text-center relative z-10 bg-black/30 py-8 px-4 rounded-xl backdrop-blur-sm">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                {lang === "en" ? (
                  <>
                    Contact <span className="text-[#ffcc80]">JOLZT</span>
                  </>
                ) : lang === "mk" ? (
                  <>
                    Контактирајте <span className="text-[#ffcc80]">JOLZT</span>
                  </>
                ) : (
                  <>
                    Na Kontaktoni <span className="text-[#ffcc80]">JOLZT</span>
                  </>
                )}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] mb-8">
                {t.subheading}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <ContactForm lang={lang} />
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 h-full">
                  <div className="p-8">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">{t.emailHeading}</h3>
                        <a
                          href={`mailto:${t.emailAddress}`}
                          className="text-[#f26522] hover:text-[#e05a1c] transition-colors font-medium text-lg flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          {t.emailAddress}
                        </a>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">{t.phoneHeading}</h3>
                        <a
                          href={`tel:${t.phoneNumber}`}
                          className="text-[#f26522] hover:text-[#e05a1c] transition-colors font-medium text-lg flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          {t.phoneNumber}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} />

      <style jsx global>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        
        h1, h2, h3, h4, h5, h6 {
          letter-spacing: -0.025em;
        }
        
        p {
          line-height: 1.6;
        }
        
        .container {
          max-width: 1200px;
        }
      `}</style>
    </div>
  )
}
