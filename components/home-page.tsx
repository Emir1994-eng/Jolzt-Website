"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  StarIcon,
  CheckIcon,
  CheckCircle,
  GlobeIcon,
  ChevronRight,
  Building2Icon,
  CalendarIcon,
  DollarSignIcon,
  CarFrontIcon,
  ZapIcon,
  SmileIcon,
  ThumbsUpIcon,
  ArrowRightIcon,
  LayoutDashboard,
  MessageCircleMore,
  CalendarCheck2
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DatePickerWithRange } from "@/components/date-range-picker"
import { LocationSelector } from "@/components/location-selector"
import { GoodToKnow } from "@/components/good-to-know"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { AuthModal } from "@/components/auth-modal"
import { LanguageSelector } from "@/components/language-selector"
import { SiteFooter } from "@/components/site-footer"
import { useTranslations } from "@/utils/i18n"
import CarsLoading from "./ui/carsloading"
import axios from "axios"
import { useExperimentValue } from "@/app/hooks/useFeatureFlag";
import { GROWTHBOOK_CONFIG } from "@/app/config/growthbook";
import { format } from "date-fns"
import { analytics } from '@/lib/firebase'

interface Car {
  _id: string;
  model: string;
  category: string;
  regularPrice: number;
}

const HERO_TEXT_VARIANTS = {
  "0": {
    heading: {
      en: "Car Rental in Macedonia",
      mk: "Изнајмување автомобили во Македонија",
      sq: "Marrje me qira e veturave në Maqedoni",
    },
    subheading: {
      en: "Book online—skip the counter. Instant pickup at Skopje Airport or in the city. Full insurance included.",
      mk: "Резервирајте онлајн—избегнете го шалтерот. Инстант подигнување на аеродромот Скопје или во градот. Вклучено целосно осигурување.",
      sq: "Rezervoni online—anashkaloni sportelin. Marrje e menjëhershme në Aeroportin e Shkupit ose në qytet. Përfshirë sigurim të plotë.",
    },
    ratingline: {
      en: "Experience convenience, flexibility, and premium service every time you drive.",
      mk: "Искусете удобност, флексибилност и врвна услуга секој пат кога возите.",
      sq: "Përjetoni komoditet, fleksibilitet dhe shërbim premium çdo herë që vozitni.",
    },
    benefit1: {
      en: "Full Insurance included",
      mk: "Вклучено целосно осигурување",
      sq: "Sigurim i plotë i përfshirë",
    },
    benefit2: {
      en: "Free Cancellation up to 48 hours",
      mk: "Бесплатно откажување до 48 часа",
      sq: "Anulim falas deri në 48 orë",
    },
  },
  "1": {
    heading: {
      en: "Effortless Airport Pickup, From Touchdown to Keys in Hand",
      mk: "Лесно подигнување на аеродром, од слетување до клучеви во рака",
      sq: "Marrje e lehtë në aeroport, nga ulja deri te çelësat në dorë",
    },
    subheading: {
      en: "Land, walk out, get your car. No lines, no confusion, no waiting. Transparent pricing and simple instructions every step of the way.",
      mk: "Слетајте, излезете, земете го вашиот автомобил. Без редици, без конфузија, без чекање. Транспарентно цени и едноставни упатства на секој чекор.",
      sq: "Ulni, dilni, merrni veturën tuaj. Pa rreshta, pa konfuzion, pa pritje. Çmime transparente dhe udhëzime të thjeshta në çdo hap.",
    },
    ratingline: {
      en: "Trusted by travelers who want a smooth, predictable arrival experience.",
      mk: "Доверлив од патници кои сакаат непречено, предвидливо искуство при пристигнување.",
      sq: "I besuar nga udhëtarët që duan një përvojë të qetë dhe të parashikueshme të mbërritjes.",
    },
    benefit1: {
      en: "Instant Airport Pickup (No Counter, No Lines)",
      mk: "Инстант подигнување од аеродром (Без шалтер, без редици)",
      sq: "Marrje e menjëhershme në aeroport (Pa sportel, pa rreshta)",
    },
    benefit2: {
      en: "Clear Pricing & Simple Instructions",
      mk: "Јасни цени и едноставни упатства",
      sq: "Çmime të qarta dhe udhëzime të thjeshta",
    },
  },
  "2": {
    heading: {
      en: "Car Rental in Macedonia, Without the Guesswork",
      mk: "Изнајмување автомобили во Македонија, без погодување",
      sq: "Marrje me qira e veturave në Maqedoni, pa hamendje",
    },
    subheading: {
      en: "Clear pricing, simple instructions, and full insurance included—so you always know exactly what to expect.",
      mk: "Јасни цени, едноставни упатства и вклучено целосно осигурување—така што секогаш знаете што точно да очекувате.",
      sq: "Çmime të qarta, udhëzime të thjeshta dhe sigurim i plotë i përfshirë—kështu që gjithmonë e dini saktësisht se çfarë të prisni.",
    },
    ratingline: {
      en: "Safe, predictable, and easy from booking to return.",
      mk: "Безбедно, предвидливо и лесно од резервација до враќање.",
      sq: "E sigurt, e parashikueshme dhe e lehtë nga rezervimi deri në kthim.",
    },
    benefit1: {
      en: "Full Insurance Always Included",
      mk: "Секогаш вклучено целосно осигурување",
      sq: "Sigurim i plotë gjithmonë i përfshirë",
    },
    benefit2: {
      en: "Clear, Upfront Pricing (No Surprises)",
      mk: "Јасно, однапред цени (Без изненадувања)",
      sq: "Çmime të qarta dhe paraprake (Pa surpriza)",
    },
  },
} as const;

// Define a type for the language keys
type LangKey = "en" | "mk" | "sq";
// Define a type for the variant keys
type VariantKey = keyof typeof HERO_TEXT_VARIANTS;

export default function HomePage({ lang = "en" }: { lang?: string }) {
  const { t } = useTranslations(lang)
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [authModalOpen, setAuthModalOpen] = useState(false)

  const [selectedLocation, setSelectedLocation] = useState({
    value: 'skopje',
    label: 'Skopje'
  });

  const [pickupTime, setPickupTime] = useState("12:30")
  const [returnTime, setReturnTime] = useState("08:30")
  const [dateRange, setDateRange] = useState({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 3)),
  });

  const handleLocationChange = (value: string, label: string) => {
    setSelectedLocation({ value, label });
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.post('/api/cars', {
          action: 'getCars',
          query: {
            region: 'Macedonia',
            'availability.status': 'Active',
            limit: 8
          }
        })
        setCars(response.data?.data?.foundCars || [])
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to load cars')
        console.error('API Error:', err)
        setCars([])
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  const handleBookNowClick = () => {

    if (!analytics) {
      console.warn("Analytics not available");
      return;
    }

    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "Show_Cars",
        content_type: "car",
      });
    }

    const formatDate = (date: Date) => format(date, 'dd-MM-yyyy');
    const startDate = dateRange.from ? formatDate(dateRange.from) : '';
    const endDate = dateRange.to ? formatDate(dateRange.to) : '';

    if (!startDate || !endDate) {
      e.preventDefault();
      // Optionally show error to user
      return;
    }

    const url = new URL("https://app.jolzt.com");
    url.searchParams.append('region', "Macedonia");
    url.searchParams.append('startDate', startDate);
    url.searchParams.append('endDate', endDate);
    url.searchParams.append('startTime', pickupTime);
    url.searchParams.append('returnTime', returnTime);
    url.searchParams.append('appliedDiscountCode', "true");
    url.searchParams.append('discountCode', "D1SCT1");

    // Open in new tab
    window.open(url.toString(), '_blank', 'noopener,noreferrer');
  }

  const handleCarClick = (carId: string) => (event: React.MouseEvent) => {

    const car = cars.find(c => c._id === carId)

    if (!car) {
      console.error('Car not found');
      return;
    }

    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "Web_Car_Select",
        content_type: "car",
        car_id: car._id,
        car_model: car.model,
        category: car.category,
        eur_price_per_day: car.regularPrice,
      });
    }

  }

  // 3. Implement the useExperimentValue hook
  const heroVariant = useExperimentValue<string>(
    GROWTHBOOK_CONFIG.EXPERIMENTS.VARIANT_A,
    {
      defaultValue: "0",
      possibleValues: ["0", "1", "2"],
    }
  );

  // 4. Dynamically select the text based on variant and language
  const currentVariantText = HERO_TEXT_VARIANTS[heroVariant.value as VariantKey] || HERO_TEXT_VARIANTS["0"];

  // Helper to safely access translation for the current language
  const getLocalizedText = (textMap: typeof currentVariantText.heading) => {
    return textMap[lang] || textMap["en"]; // Fallback to English if current lang is not found
  };

  // Get the specific translated texts for the current variant
  const headingText = getLocalizedText(currentVariantText.heading);
  const subheadingText = getLocalizedText(currentVariantText.subheading);
  const ratingLineText = getLocalizedText(currentVariantText.ratingline);
  const benefit1Text = getLocalizedText(currentVariantText.benefit1);
  const benefit2Text = getLocalizedText(currentVariantText.benefit2);

  if (loading) return <CarsLoading />
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>
  if (!cars) return <div className="p-4">No cars data available</div>


  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 w-full bg-gradient-to-r from-black to-black z-50 px-4 py-3 text-center text-white">
        <p className="text-sm font-medium">
          🎉 Use code{" "}
          <span className="font-bold text-yellow-300">D1SCT1</span> at
          checkout to get{" "}
          <span className="font-bold text-yellow-300">40% OFF</span> your first
          booking!
        </p>
      </div>

      <header className="border-b bg-white">
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
            <Link href="https://app.jolzt.com" target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="bg-[#f26522] hover:bg-[#e05a1c] text-xs md:text-sm"
                onClick={handleBookNowClick}
              >
                Book Your Ride
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f26522] to-[#f58220] -z-10" />
          <div className="container px-4 md:px-6 py-8 md:py-16 lg:py-24">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Desktop layout - left column */}
              <div className="flex flex-col justify-center space-y-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    {headingText}
                  </h1>
                  <p className="text-white text-base md:text-lg mb-6 max-w-lg">{subheadingText}</p>
                </div>

                <div className="hidden lg:block">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-white rounded-full px-3 py-1 flex items-center gap-1">
                      <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold">4.8</span>
                    </div>
                    <span className="text-white text-sm">{ratingLineText}</span>
                  </div>

                  <div className="flex flex-row gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                      <CheckIcon className="h-6 w-6 mb-2" />
                      <p className="font-medium">{benefit1Text}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                      <GlobeIcon className="h-6 w-6 mb-2" />
                      <p className="font-medium">{benefit2Text}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop layout - right column */}
              <div className="hidden lg:block">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{t("home.booking.pickupReturn")}</div>
                    </div>
                    <LocationSelector onLocationChange={handleLocationChange} />
                    <DatePickerWithRange
                      date={dateRange}
                      onDateChange={setDateRange}
                      pickupTime={pickupTime}
                      setPickupTime={setPickupTime}
                      returnTime={returnTime}
                      setReturnTime={setReturnTime}
                      onLocationChange={handleLocationChange}
                    />
                    {/* <Link href="https://app.jolzt.com" target="_blank" rel="noopener noreferrer"> */}
                    <Button className="w-full bg-[#f26522] hover:bg-[#e05a1c]" onClick={handleBookNowClick}>
                      <CheckIcon className="h-4 w-4 mr-2" /> {t("common.bookNow")}
                    </Button>
                    {/* </Link> */}
                    <div className="text-[#f26522] text-sm">{t("common.smallCTAUnderline")}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile layout - stacked vertically */}
            <div className="lg:hidden flex flex-col space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{t("home.booking.pickupReturn")}</div>
                  </div>
                  <LocationSelector onLocationChange={handleLocationChange} />
                  <DatePickerWithRange
                    date={dateRange}
                    onDateChange={setDateRange}
                    pickupTime={pickupTime}
                    setPickupTime={setPickupTime}
                    returnTime={returnTime}
                    setReturnTime={setReturnTime}
                    onLocationChange={handleLocationChange}
                  />
                  {/* <Link href='https://app.jolzt.com' target="_blank" rel="noopener noreferrer"> */}
                  <Button className="w-full bg-[#f26522] hover:bg-[#e05a1c]" onClick={handleBookNowClick}>
                    <CheckIcon className="h-4 w-4 mr-2" /> {t("common.bookNow")}
                  </Button>
                  {/* </Link> */}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-white rounded-full px-3 py-1 flex items-center gap-1">
                    <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">4.8</span>
                  </div>
                  <span className="text-white text-sm">{ratingLineText}</span>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                    <CheckIcon className="h-6 w-6 mb-2" />
                    <p className="font-medium">{benefit1Text}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                    <GlobeIcon className="h-6 w-6 mb-2" />
                    <p className="font-medium">{benefit2Text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.howItWorks.title")}</h2>
              <p className="text-base md:text-lg text-muted-foreground">{t("home.howItWorks.description")}</p>
            </div>

            {/* Desktop version - improved UI */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute left-1/2 top-12 h-1 bg-gradient-to-r from-[#f26522] to-[#f58220] w-[calc(100%-200px)] -translate-x-1/2 z-0"></div>
                <div className="grid grid-cols-3 gap-8 relative z-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white rounded-full p-4 shadow-lg border-4 border-[#f26522] mb-6">
                      <ZapIcon className="h-10 w-10 text-[#f26522]" />
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 h-full">
                      <h3 className="text-xl font-bold mb-3">{t("home.howItWorks.bookInMinutes")}</h3>
                      <p className="text-muted-foreground">{t("home.howItWorks.bookInMinutesDesc")}</p>
                      <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                        <div className="flex items-center justify-center text-sm text-[#f26522]">
                          <CheckIcon className="h-4 w-4 mr-1" /> {t("home.howItWorks.saveUp")}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white rounded-full p-4 shadow-lg border-4 border-[#f26522] mb-6">
                      <SmileIcon className="h-10 w-10 text-[#f26522]" />
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 h-full">
                      <h3 className="text-xl font-bold mb-3">{t("home.howItWorks.skipCounter")}</h3>
                      <p className="text-muted-foreground">{t("home.howItWorks.skipCounterDesc")}</p>
                      <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                        <div className="flex items-center justify-center text-sm text-[#f26522]">
                          <CheckIcon className="h-4 w-4 mr-1" /> {t("home.howItWorks.pickupTime")}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white rounded-full p-4 shadow-lg border-4 border-[#f26522] mb-6">
                      <ThumbsUpIcon className="h-10 w-10 text-[#f26522]" />
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 h-full">
                      <h3 className="text-xl font-bold mb-3">{t("home.howItWorks.driveWorryFree")}</h3>
                      <p className="text-muted-foreground">{t("home.howItWorks.driveWorryFreeDesc")}</p>
                      <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                        <div className="flex items-center justify-center text-sm text-[#f26522]">
                          <CheckIcon className="h-4 w-4 mr-1" /> {t("home.howItWorks.satisfaction")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-12">
                <Button asChild className="bg-[#f26522] hover:bg-[#e05a1c] px-8 py-6 h-auto text-lg rounded-full">
                  <Link href={`/${lang}/how-jolzt-works`}>
                    {t("home.howItWorks.learnMore")}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile version - improved UI */}
            <div className="md:hidden">
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#f26522] text-white flex items-center justify-center">
                    <ZapIcon className="h-5 w-5" />
                  </div>
                  <div className="pt-3 text-center">
                    <h3 className="text-lg font-bold mb-2">{t("home.howItWorks.bookInMinutes")}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{t("home.howItWorks.bookInMinutesDesc")}</p>
                    <div className="flex items-center justify-center text-xs text-[#f26522]">
                      <CheckIcon className="h-3 w-3 mr-1" /> {t("home.howItWorks.saveUp")}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#f26522] text-white flex items-center justify-center">
                    <SmileIcon className="h-5 w-5" />
                  </div>
                  <div className="pt-3 text-center">
                    <h3 className="text-lg font-bold mb-2">{t("home.howItWorks.skipCounter")}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{t("home.howItWorks.skipCounterDesc")}</p>
                    <div className="flex items-center justify-center text-xs text-[#f26522]">
                      <CheckIcon className="h-3 w-3 mr-1" /> {t("home.howItWorks.pickupTime")}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#f26522] text-white flex items-center justify-center">
                    <ThumbsUpIcon className="h-5 w-5" />
                  </div>
                  <div className="pt-3 text-center">
                    <h3 className="text-lg font-bold mb-2">{t("home.howItWorks.driveWorryFree")}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{t("home.howItWorks.driveWorryFreeDesc")}</p>
                    <div className="flex items-center justify-center text-xs text-[#f26522]">
                      <CheckIcon className="h-3 w-3 mr-1" /> {t("home.howItWorks.satisfaction")}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Button asChild className="bg-[#f26522] hover:bg-[#e05a1c]">
                  <Link href={`/${lang}/how-jolzt-works`}>{t("home.howItWorks.learnMore")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.findRide.title")}</h2>
              <p className="text-base md:text-lg text-muted-foreground">{t("home.findRide.description")}</p>
            </div>

            {/* Desktop version - grid */}
            <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {cars && cars.map((car) => (
                <Card key={car?._id} className="overflow-hidden transition-all hover:shadow-md">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-slate-100 relative">
                      {car.images?.[0] ? (
                        <img
                          src={car.images[0]}
                          alt={`${car.model} ${car.modelType}`}
                          className="w-full h-full object-cover" // Ensures image covers container
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                          }}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <CarFrontIcon className="h-16 w-16 text-[#f26522]/40" />
                        </div>
                      )}
                      {car.isPremium && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-[#f26522]">
                            {t("home.findRide.mostPopular")}
                          </Badge>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-lg mb-0">
                            {car.model} {car.modelType}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {car.category} • {car.productionYear}
                          </p>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs font-normal">
                          {car.availableLocation}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          ({car.reviews?.length || 0} reviews)
                        </span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-medium">From</div>
                        <div className="text-xl font-bold text-[#f26522]">
                          €{car.regularPrice}
                          <span className="text-sm font-normal text-muted-foreground">/day</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
                        {Array.from({ length: 4 }).map((_, index) => (
                          <div key={index} className="flex items-center gap-1">
                            <CheckIcon className="h-3 w-3 text-[#f26522]" />
                            {car.features?.[index] || '—'}
                          </div>
                        ))}
                      </div>
                      <Link href="https://app.jolzt.com" target="_blank" rel="noopener noreferrer" passHref>
                        <Button
                          onClick={handleCarClick(car?._id)}
                          variant="outline"
                          className="w-full border-[#f26522] text-[#f26522] hover:bg-[#f26522] hover:text-white"
                        >
                          <CheckIcon className="h-4 w-4 mr-2" /> {t("common.bookNow")}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Mobile version - carousel */}
            <div className="md:hidden">
              <div className="relative">
                <Carousel className="w-full overflow-visible">
                  <CarouselContent className="-ml-2 -mr-2">
                    {cars.map((car) => (
                      <CarouselItem key={car._id} className="pl-2 basis-[85%] min-w-0">
                        <Card className="overflow-hidden h-full">
                          <CardContent className="p-0 h-full flex flex-col">
                            <div className="h-48 w-full bg-slate-100 relative flex-shrink-0">
                              {car.images?.[0] ? (
                                <img
                                  src={car.images[0]}
                                  alt={`${car.model} ${car.modelType}`}
                                  className="w-full h-full object-cover object-center"
                                />
                              ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <CarFrontIcon className="h-16 w-16 text-[#f26522]/40" />
                                </div>
                              )}
                              {car.isPremium && (
                                <div className="absolute top-4 left-4">
                                  <Badge className="bg-[#f26522]">
                                    {t("home.findRide.mostPopular")}
                                  </Badge>
                                </div>
                              )}
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent h-12"></div>
                            </div>
                            <div className="p-5 flex-grow">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h3 className="font-bold text-lg mb-0">
                                    {car.model} {car.modelType}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    {car.category} • {car.productionYear}
                                  </p>
                                </div>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                </div>
                              </div>

                              <div className="flex items-center gap-2 mb-3">
                                <Badge variant="outline" className="text-xs font-normal">
                                  {car.availableLocation}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  ({car.reviews?.length || 0} reviews)
                                </span>
                              </div>

                              <div className="flex items-center justify-between mb-4">
                                <div className="text-sm font-medium">From</div>
                                <div className="text-xl font-bold text-[#f26522]">
                                  €{car.regularPrice}
                                  <span className="text-sm font-normal text-muted-foreground">/day</span>
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
                                <div className="flex items-center gap-1">
                                  <CheckIcon className="h-3 w-3 text-[#f26522]" />
                                  {car.gear === 'Automatic' ? 'Automatic' : 'Manual'}
                                </div>
                                <div className="flex items-center gap-1">
                                  <CheckIcon className="h-3 w-3 text-[#f26522]" />
                                  {car.features?.includes('Air Conditioning') ? 'A/C' : 'No A/C'}
                                </div>
                                <div className="flex items-center gap-1">
                                  <CheckIcon className="h-3 w-3 text-[#f26522]" />
                                  {car.addons?.find(a => a.addonName === 'Child Seat') ? 'Child Seat' : 'No Child Seat'}
                                </div>
                                <div className="flex items-center gap-1">
                                  <CheckIcon className="h-3 w-3 text-[#f26522]" />
                                  {car.insurance ? 'Insured' : 'No Insurance'}
                                </div>
                              </div>
                              <Link href="https://app.jolzt.com" target="_blank" rel="noopener noreferrer" passHref>
                                <Button
                                  onClick={handleCarClick(car?._id)}
                                  variant="outline"
                                  className="w-full border-[#f26522] text-[#f26522] hover:bg-[#f26522] hover:text-white"
                                >
                                  <CheckIcon className="h-4 w-4 mr-2" /> {t("common.bookNow")}
                                </Button>
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                <div className="flex justify-center mt-4 items-center gap-2">
                  <div className="text-xs text-muted-foreground flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <path d="M17 8l4 4-4 4"></path>
                      <path d="M3 12h18"></path>
                    </svg>
                    {t("home.findRide.swipeMore")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Good to Know Section */}
        <section className="py-12 bg-slate-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">{t("home.goodToKnow")}</h2>
            <GoodToKnow lang={lang} />
          </div>
        </section>

        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div id="road-trips" className="pt-8 mt-8 border-t border-gray-200">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Plan Your Perfect Road Trip</h3>
                    <p className="text-gray-600 mb-6">
                      North Macedonia is perfect for road trips, with diverse landscapes, historic sites, and
                      charming towns all within a short drive of each other. Rent a car with Jolzt and explore at
                      your own pace.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#f26522] text-white flex items-center justify-center shrink-0 mt-0.5">
                          1
                        </div>
                        <div>
                          <h4 className="font-medium">Choose your destinations</h4>
                          <p className="text-sm text-muted-foreground">
                            Browse our travel guides to find inspiration
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#f26522] text-white flex items-center justify-center shrink-0 mt-0.5">
                          2
                        </div>
                        <div>
                          <h4 className="font-medium">Book your perfect car</h4>
                          <p className="text-sm text-muted-foreground">
                            Select a vehicle that suits your journey
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#f26522] text-white flex items-center justify-center shrink-0 mt-0.5">
                          3
                        </div>
                        <div>
                          <h4 className="font-medium">Hit the road</h4>
                          <p className="text-sm text-muted-foreground">
                            Enjoy the freedom to explore at your own pace
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link href="https://app.jolzt.com" target="_blank" rel="noopener noreferrer">
                      <Button className="mt-6 bg-[#f26522] hover:bg-[#e05a1c]" >
                        Book a Car Now
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="md:w-1/2">
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="travel-w-jolzt.jpg?height=100&width=100"
                        alt="Road Trip in North Macedonia"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{t("home.travelGuides.title")}</h2>
                <p className="text-muted-foreground">{t("home.travelGuides.description")}</p>
              </div>
              <Button asChild variant="outline" className="mt-4 md:mt-0 border-[#f26522] text-[#f26522]">
                <Link href={`/${lang}/travel-guides-and-destinations`}>{t("common.viewAll")}</Link>
              </Button>
            </div> */}

        {/* Desktop version - grid */}
        {/* <Link
                href={`/${lang}/travel-guides-and-destinations/10-must-visit-places-around-lake-ohrid`}
                className="block"
              >
                <Card className="overflow-hidden transition-all hover:shadow-md">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Lake Ohrid"
                        width={400}
                        height={200}
                        className="w-full aspect-[16/9] object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-[#f26522]">{t("home.travelGuides.featured")}</Badge>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-muted-foreground mb-2">
                        {t("home.travelGuides.travelGuide")} • 5 {t("home.travelGuides.minRead")}
                      </div>
                      <h3 className="font-bold text-xl mb-2">10 Must-Visit Places Around Lake Ohrid</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        Discover the crystal-clear waters, historic churches, and charming villages around one of
                        Europe's oldest and deepest lakes.
                      </p>
                      <Button variant="outline" className="px-0 text-[#f26522]">
                        {t("common.readMore")}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link> */}
        {/* Mobile version - carousel */}

        <section className="py-16 md:py-24 bg-gradient-to-br from-[#f26522] to-[#f58220] relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10 mix-blend-overlay"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-xl mx-auto text-center text-white mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("home.partnerSection.ownRental")}</h2>
              <h3 className="text-xl md:text-2xl font-medium mb-6">{t("home.partnerSection.increaseBookings")}</h3>
              <div className="h-1 w-24 bg-white/50 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="text-white order-1">
                <div className="grid gap-4 md:gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/20 transition-transform hover:translate-x-2">
                    <div className="flex items-center gap-4">
                      <div className="bg-white rounded-full p-3 shadow-lg shrink-0">
                        <DollarSignIcon className="h-5 w-5 md:h-6 md:w-6 text-[#f26522]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base md:text-lg">{t("home.partnerSection.increaseRevenue")}</h4>
                        <p className="text-white/80 text-sm md:text-base">
                          {t("home.partnerSection.increaseRevenueDesc")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/20 transition-transform hover:translate-x-2">
                    <div className="flex items-center gap-4">
                      <div className="bg-white rounded-full p-3 shadow-lg shrink-0">
                        <CalendarIcon className="h-5 w-5 md:h-6 md:w-6 text-[#f26522]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base md:text-lg">{t("home.partnerSection.streamlined")}</h4>
                        <p className="text-white/80 text-sm md:text-base">{t("home.partnerSection.streamlinedDesc")}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/20 transition-transform hover:translate-x-2">
                    <div className="flex items-center gap-4">
                      <div className="bg-white rounded-full p-3 shadow-lg shrink-0">
                        <Building2Icon className="h-5 w-5 md:h-6 md:w-6 text-[#f26522]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base md:text-lg">{t("home.partnerSection.growBusiness")}</h4>
                        <p className="text-white/80 text-sm md:text-base">
                          {t("home.partnerSection.growBusinessDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 md:mt-10">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-[#f26522] hover:bg-white/90 font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto rounded-full shadow-lg transition-transform hover:scale-105 w-full md:w-auto"
                  >
                    <Link href={`/${lang}/partner`}>
                      {t("home.partnerSection.partnerWithJolzt")}
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="hidden lg:block order-2">
                <div className="text-white order-1">
                  <div className="grid gap-4 md:gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/20 transition-transform hover:translate-x-2">
                      <div className="flex items-center gap-4">
                        <div className="bg-white rounded-full p-3 shadow-lg shrink-0">
                          <LayoutDashboard className="h-5 w-5 md:h-6 md:w-6 text-[#f26522]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-base md:text-lg">{t("home.partnerSection.hostDashboard")}</h4>
                          <p className="text-white/80 text-sm md:text-base">
                            {t("home.partnerSection.hostDashboardText")}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/20 transition-transform hover:translate-x-2">
                      <div className="flex items-center gap-4">
                        <div className="bg-white rounded-full p-3 shadow-lg shrink-0">
                          <MessageCircleMore className="h-5 w-5 md:h-6 md:w-6 text-[#f26522]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-base md:text-lg">{t("home.partnerSection.hostChat")}</h4>
                          <p className="text-white/80 text-sm md:text-base">{t("home.partnerSection.hostChatText")}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/20 transition-transform hover:translate-x-2">
                      <div className="flex items-center gap-4">
                        <div className="bg-white rounded-full p-3 shadow-lg shrink-0">
                          <CalendarCheck2 className="h-5 w-5 md:h-6 md:w-6 text-[#f26522]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-base md:text-lg">{t("home.partnerSection.hostReserations")}</h4>
                          <p className="text-white/80 text-sm md:text-base">
                            {t("home.partnerSection.hostReserationsText")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#111827] to-[#1f2937] relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10 mix-blend-overlay"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-2xl mx-auto text-center text-white mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {t("services.title")}
              </h2>
              <h3 className="text-xl md:text-2xl font-medium mb-6 text-white/90">
                {t("services.subtitle")}
              </h3>
              <div className="h-1 w-24 bg-white/40 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-stretch">

              {/* Luggage Service */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 text-white flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold mb-4">
                    {t("services.luggageTitle")}
                  </h4>

                  <p className="text-white/80 mb-6 text-base md:text-lg">
                    {t("services.luggageDesc")}
                  </p>

                  <div className="grid gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#f58220]" />
                      <span className="text-white/90">
                        {t("services.luggageFeature1")}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#f58220]" />
                      <span className="text-white/90">
                        {t("services.luggageFeature2")}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#f58220]" />
                      <span className="text-white/90">
                        {t("services.luggageFeature3")}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="mt-8 bg-[#f58220] hover:bg-[#f26522] text-white font-bold rounded-full px-6 py-5 h-auto shadow-lg transition-transform hover:scale-105"
                >
                  <Link href="https://luggage.jolzt.com/">
                    {t("services.luggageCta")}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Laundry Service */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 text-white flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold mb-4">
                    {t("services.laundryTitle")}
                  </h4>

                  <p className="text-white/80 mb-6 text-base md:text-lg">
                    {t("services.laundryDesc")}
                  </p>

                  <div className="grid gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#f58220]" />
                      <span className="text-white/90">
                        {t("services.laundryFeature1")}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#f58220]" />
                      <span className="text-white/90">
                        {t("services.laundryFeature2")}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#f58220]" />
                      <span className="text-white/90">
                        {t("services.laundryFeature3")}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="mt-8 bg-[#f58220] hover:bg-[#f26522] text-white font-bold rounded-full px-6 py-5 h-auto shadow-lg transition-transform hover:scale-105"
                >
                  <Link href="https://laundry.jolzt.com/">
                    {t("services.laundryCta")}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

            </div>
          </div>
        </section>

      </main>
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
      <SiteFooter lang={lang} />
    </div>
  )
}
