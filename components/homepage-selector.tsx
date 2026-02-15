"use client"

import HomePage from "@/components/home-page"
import TuroHomePage from "@/components/HomepageVersions/Turo/turo-homepage"
import CarRentalHomepage from "@/components/HomepageVersions/Carrental/car-rental"
import { useFeatureValue } from "@/app/hooks/useFeatureFlag"

export default function HomepageSelector({ lang }: { lang: string }) {
  const homepageVariant = useFeatureValue<number | string>("custom-homepages", 1)
  const variantNumber = Number(homepageVariant)

  if (variantNumber === 2) {
    return <TuroHomePage lang={lang} />
  }

  if (variantNumber === 3) {
    return <CarRentalHomepage lang={lang} />
  }

  return <HomePage lang={lang} />
}
