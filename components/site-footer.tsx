"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/utils/i18n"

export function SiteFooter({ lang = "en" }: { lang?: string }) {
  const { t } = useTranslations(lang)

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-bold mb-4">JOLZT</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}`} className="text-sm hover:underline">
                  {t("footer.home")}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about-us`} className="text-sm hover:underline">
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/how-jolzt-works`} className="text-sm hover:underline">
                  {t("footer.howItWorks")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}/travel-guides-and-destinations`} className="text-sm hover:underline">
                  {t("footer.travelGuides")}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/partner`} className="text-sm hover:underline">
                  {t("footer.partner")}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-sm hover:underline">
                  {t("footer.help")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}/terms-of-service`} className="text-sm hover:underline">
                  {t("footer.termsOfService")}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/privacy-policy`} className="text-sm hover:underline">
                  {t("footer.privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/terms-of-payment`} className="text-sm hover:underline">
                  {t("footer.termsOfPayment")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">{t("footer.downloadApp")}</h3>
            <p className="text-sm text-slate-400 mb-4">Get the Jolzt app for the best experience</p>
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-white text-white hover:bg-white/10 justify-start"
                asChild
              >
                <Link
                  href="https://apps.apple.com/mk/app/jolzt-rent-a-car-macedonia/id6618112125"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="App Store"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  {t("footer.appStore")}
                </Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-white text-white hover:bg-white/10 justify-start"
                asChild
              >
                <Link
                  href="https://play.google.com/store/apps/details?id=com.jolzt&hl=en&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Google Play"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  {t("footer.googlePlay")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-8 border-t border-slate-700">
          <div className="text-sm text-slate-400">
            {t("footer.copyright")} {new Date().getFullYear()}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${lang}/terms-of-service`} className="text-sm text-slate-400 hover:underline">
              {t("footer.termsOfService")}
            </Link>
            <Link href={`/${lang}/privacy-policy`} className="text-sm text-slate-400 hover:underline">
              {t("footer.privacyPolicy")}
            </Link>
            <Link href={`/${lang}/terms-of-payment`} className="text-sm text-slate-400 hover:underline">
              {t("footer.termsOfPayment")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
