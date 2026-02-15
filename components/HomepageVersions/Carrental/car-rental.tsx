"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"
import { format } from "date-fns"
import {
  Globe,
  Menu,
  X,
  MapPin,
  Calendar,
  ChevronRight,
  Star,
  Shield,
  Tag,
  Search,
  Smartphone,
  Footprints,
  CarFront,
  ArrowRight,
  Fuel,
  Users,
  Gauge,
} from "lucide-react"
import { useExperimentValue } from "@/app/hooks/useFeatureFlag"
import { GROWTHBOOK_CONFIG } from "@/app/config/growthbook"
import { analytics } from "@/lib/firebase"

interface HomePageCar {
  _id?: string
  model?: string
  modelType?: string
  category?: string
  productionYear?: number
  images?: string[]
  regularPrice?: number
  availableLocation?: string
  reviews?: unknown[]
  numberOfSeats?: number
  seats?: number
  fuelType?: string
  gear?: string
  transmission?: string
  features?: string[]
}

interface CarCard {
  id: string
  name: string
  type: string
  year: number
  image: string
  price: string
  rating: number
  seats: number
  fuel: string
  transmission: string
  location: string
  badge: string
  source: HomePageCar
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
} as const

type LangKey = "en" | "mk" | "sq"
type VariantKey = keyof typeof HERO_TEXT_VARIANTS

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const LOCATIONS = [
  "Skopje Airport (SKP)",
  "Skopje City",
  "Ohrid Airport (OHD)",
  "Ohrid City",
  "Bitola",
]

const STEPS = [
  {
    icon: Smartphone,
    title: "Book in Minutes",
    description:
      "Choose your dates, browse cars, and book instantly. No paperwork, no waiting.",
    stat: "Save up to 30% vs traditional rentals",
  },
  {
    icon: Footprints,
    title: "Skip the Counter",
    description:
      "Go straight to your car with our digital check-in. No lines, just grab and drive.",
    stat: "Average pickup under 2 minutes",
  },
  {
    icon: CarFront,
    title: "Drive Worry-Free",
    description:
      "Full insurance included with 24/7 roadside assistance. Free cancellation up to 48h.",
    stat: "98% customer satisfaction",
  },
]

const EXPERIENCES = [
  {
    title: "City Hopping",
    description: "Compact cars perfect for navigating Skopje and beyond",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920&auto=format&fit=crop",
    from: "34",
  },
  {
    title: "Mountain Adventure",
    description: "SUVs built for Macedonian mountain roads and national parks",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920&auto=format&fit=crop",
    from: "60",
  },
  {
    title: "Business Class",
    description: "Premium sedans for a refined travel experience",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop",
    from: "75",
  },
]

const BADGE_STYLES: Record<string, string> = {
  "Best Seller": "bg-amber-50 text-amber-700",
  "Great for Mountains": "bg-emerald-50 text-emerald-700",
  "Economy Choice": "bg-sky-50 text-sky-700",
  "Premium Pick": "bg-violet-50 text-violet-700",
}

const FALLBACK_CARS: CarCard[] = [
  {
    id: "fallback-1",
    name: "Opel Astra",
    type: "SUV",
    year: 2017,
    image:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop",
    price: "40",
    rating: 4.9,
    seats: 5,
    fuel: "Diesel",
    transmission: "Manual",
    location: "Skopje",
    badge: "Best Seller",
    source: {},
  },
  {
    id: "fallback-2",
    name: "BMW F10",
    type: "Luxury",
    year: 2005,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop",
    price: "39",
    rating: 4.8,
    seats: 4,
    fuel: "Diesel",
    transmission: "Automatic",
    location: "Skopje International Airport",
    badge: "Premium Pick",
    source: {},
  },
  {
    id: "fallback-3",
    name: "Golf 8",
    type: "Hatchback",
    year: 2020,
    image:
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=800&auto=format&fit=crop",
    price: "80",
    rating: 5.0,
    seats: 4,
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Skopje International Airport",
    badge: "Best Seller",
    source: {},
  },
  {
    id: "fallback-4",
    name: "Toyota RAV4",
    type: "SUV",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1568844293986-8d0400f4745b?q=80&w=800&auto=format&fit=crop",
    price: "60",
    rating: 4.9,
    seats: 4,
    fuel: "Hybrid",
    transmission: "Automatic",
    location: "Skopje International Airport",
    badge: "Great for Mountains",
    source: {},
  },
]

const BADGES = ["Best Seller", "Great for Mountains", "Economy Choice", "Premium Pick"]

const mapCarCard = (car: HomePageCar, index: number): CarCard => {
  const modelName = [car.model, car.modelType].filter(Boolean).join(" ").trim()

  return {
    id: car._id || `api-${index}`,
    name: modelName || "Car",
    type: car.category || "Car",
    year: car.productionYear || new Date().getFullYear(),
    image: car.images?.[0] || "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop",
    price: String(car.regularPrice || 0),
    rating: 5,
    seats: car.numberOfSeats || car.seats || 4,
    fuel: car.fuelType || "Petrol",
    transmission: car.gear || car.transmission || "Automatic",
    location: car.availableLocation || "Skopje",
    badge: BADGES[index % BADGES.length],
    source: car,
  }
}

/* ─────────────────────────────────────────────
   HEADER
   ───────────────────────────────────────────── */

function Header({
  lang,
  onBookNowClick,
}: {
  lang: string
  onBookNowClick: () => void
}) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(220,13%,91%)] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href={`/${lang}`} className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(24,100%,50%)]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path
                d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-[hsl(220,15%,10%)]">
            JOLZT
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-[hsl(220,10%,46%)] transition-colors hover:text-[hsl(220,15%,10%)]"
          >
            How It Works
          </Link>
          <Link
            href="#vehicles"
            className="text-sm font-medium text-[hsl(220,10%,46%)] transition-colors hover:text-[hsl(220,15%,10%)]"
          >
            Vehicles
          </Link>
          <Link
            href="#experiences"
            className="text-sm font-medium text-[hsl(220,10%,46%)] transition-colors hover:text-[hsl(220,15%,10%)]"
          >
            Experiences
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            className="flex items-center gap-1.5 text-sm font-medium text-[hsl(220,10%,46%)] transition-colors hover:text-[hsl(220,15%,10%)]"
          >
            <Globe className="h-4 w-4" />
            {lang.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={onBookNowClick}
            className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            Book Your Ride
          </button>
        </div>

        <button
          type="button"
          className="text-[hsl(220,15%,10%)] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[hsl(220,13%,91%)] bg-white px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-[hsl(220,10%,46%)]"
              onClick={() => setMobileOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#vehicles"
              className="text-sm font-medium text-[hsl(220,10%,46%)]"
              onClick={() => setMobileOpen(false)}
            >
              Vehicles
            </Link>
            <Link
              href="#experiences"
              className="text-sm font-medium text-[hsl(220,10%,46%)]"
              onClick={() => setMobileOpen(false)}
            >
              Experiences
            </Link>
            <button
              type="button"
              className="mt-2 rounded-full bg-neutral-900 px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => {
                onBookNowClick()
                setMobileOpen(false)
              }}
            >
              Book Your Ride
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

/* ─────────────────────────────────────────────
   HERO + SUPER SEARCH BAR
   ───────────────────────────────────────────── */

function HeroSection({
  location,
  onLocationChange,
  dateLabel,
  pickupTime,
  returnTime,
  onPickupTimeChange,
  onReturnTimeChange,
  onSearchCars,
  headingText,
  subheadingText,
  ratingLineText,
  benefit1Text,
  benefit2Text,
}: {
  location: string
  onLocationChange: (value: string) => void
  dateLabel: string
  pickupTime: string
  returnTime: string
  onPickupTimeChange: (value: string) => void
  onReturnTimeChange: (value: string) => void
  onSearchCars: () => void
  headingText: string
  subheadingText: string
  ratingLineText: string
  benefit1Text: string
  benefit2Text: string
}) {
  const [showLocations, setShowLocations] = useState(false)

  return (
    <section
      id="hero"
      className="bg-[hsl(210,20%,98%)] px-6 pb-20 pt-16 lg:pb-28 lg:pt-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Trust badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[hsl(220,13%,91%)] bg-white px-4 py-2 shadow-sm">
          <Star className="h-4 w-4 fill-[hsl(24,100%,50%)] text-[hsl(24,100%,50%)]" />
          <span className="text-sm text-[hsl(220,10%,46%)]">
            {ratingLineText}
          </span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-3xl text-balance text-5xl font-bold leading-[1.1] tracking-tight text-[hsl(220,15%,10%)] md:text-6xl lg:text-[5rem]">
          {headingText}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[hsl(220,10%,46%)]">
          {subheadingText}
        </p>

        {/* Trust pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-[hsl(24,100%,50%)]">
            <Shield className="h-4 w-4" />
            {benefit1Text}
          </span>
          <span className="flex items-center gap-2 rounded-full bg-[hsl(220,14%,96%)] px-4 py-2 text-sm font-medium text-[hsl(220,15%,20%)]">
            <Tag className="h-4 w-4" />
            {benefit2Text}
          </span>
        </div>
      </div>

      {/* Floating Super Search Bar */}
      <div className="mx-auto mt-12 max-w-5xl">
        <div className="rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-[hsl(220,13%,91%)]">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-0">
            {/* Location */}
            <div className="relative flex-1 lg:border-r lg:border-[hsl(220,13%,91%)]">
              <label htmlFor="location" className="sr-only">
                Pickup location
              </label>
              <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[hsl(220,10%,46%)]" />
              <input
                id="location"
                type="text"
                placeholder="Airport or City"
                value={location}
                onChange={(e) => onLocationChange(e.target.value)}
                onFocus={() => setShowLocations(true)}
                onBlur={() => setTimeout(() => setShowLocations(false), 200)}
                className="w-full bg-transparent py-3 pl-11 pr-4 text-sm text-[hsl(220,15%,10%)] placeholder:text-[hsl(220,10%,46%)] focus:outline-none"
              />
              {showLocations && (
                <div className="absolute left-0 right-0 top-full z-20 mt-2 rounded-xl bg-white p-2 shadow-xl ring-1 ring-[hsl(220,13%,91%)]">
                  {LOCATIONS.filter((l) =>
                    l.toLowerCase().includes(location.toLowerCase()),
                  ).map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      className="w-full rounded-lg px-3 py-2 text-left text-sm text-[hsl(220,15%,10%)] transition-colors hover:bg-[hsl(220,14%,96%)]"
                      onMouseDown={() => {
                        onLocationChange(loc)
                        setShowLocations(false)
                      }}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Date */}
            <div className="flex-1 lg:border-r lg:border-[hsl(220,13%,91%)]">
              <label htmlFor="dates" className="sr-only">
                Date range
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[hsl(220,10%,46%)]" />
                <input
                  id="dates"
                  type="text"
                  placeholder="Feb 9 - Feb 12, 2026"
                  className="w-full bg-transparent py-3 pl-11 pr-4 text-sm text-[hsl(220,15%,10%)] placeholder:text-[hsl(220,10%,46%)] focus:outline-none"
                  readOnly
                  value={dateLabel}
                />
              </div>
            </div>

            {/* Time selectors */}
            <div className="flex flex-1 gap-2 lg:px-3">
              <select
                value={pickupTime}
                onChange={(e) => onPickupTimeChange(e.target.value)}
                className="flex-1 rounded-lg bg-[hsl(220,14%,96%)] px-3 py-3 text-sm text-[hsl(220,15%,10%)] focus:outline-none focus:ring-1 focus:ring-[hsl(220,15%,10%)]"
              >
                <option>12:30</option>
                <option>13:00</option>
                <option>13:30</option>
                <option>14:00</option>
              </select>
              <select
                value={returnTime}
                onChange={(e) => onReturnTimeChange(e.target.value)}
                className="flex-1 rounded-lg bg-[hsl(220,14%,96%)] px-3 py-3 text-sm text-[hsl(220,15%,10%)] focus:outline-none focus:ring-1 focus:ring-[hsl(220,15%,10%)]"
              >
                <option>08:30</option>
                <option>09:00</option>
                <option>09:30</option>
                <option>10:00</option>
              </select>
            </div>

            {/* Search button */}
            <button
              type="button"
              onClick={onSearchCars}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 lg:w-[25%]"
            >
              <Search className="h-4 w-4" />
              Search Cars
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        <p className="mt-3 text-center text-xs text-[hsl(220,10%,46%)]">
          {"Today's discount is applied on the next step."}
        </p>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   HOW IT WORKS
   ───────────────────────────────────────────── */

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(24,100%,50%)]">
            How It Works
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-[hsl(220,15%,10%)] md:text-5xl">
            Three simple steps
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[hsl(220,10%,46%)]">
            Renting a car with Jolzt is quick, easy, and worry-free. We
            simplified the process to save you time and money.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="group relative rounded-2xl bg-[hsl(210,20%,98%)] p-8 shadow-lg transition-shadow hover:shadow-xl"
            >
              <span className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(24,100%,50%)] text-xs font-bold text-white">
                {i + 1}
              </span>

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[hsl(24,100%,50%)]">
                <step.icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3 text-xl font-bold text-[hsl(220,15%,10%)]">
                {step.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-[hsl(220,10%,46%)]">
                {step.description}
              </p>
              <p className="text-xs font-semibold text-[hsl(24,100%,50%)]">
                {step.stat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   BROWSE BY EXPERIENCE
   ───────────────────────────────────────────── */

function ExperienceSection() {
  return (
    <section id="experiences" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(24,100%,50%)]">
            Browse by Experience
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-[hsl(220,15%,10%)] md:text-5xl">
            Find your perfect ride
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[hsl(220,10%,46%)]">
            Choose from our wide selection of vehicles at the best prices in
            North Macedonia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.title}
              className="group relative flex h-96 cursor-pointer flex-col justify-end overflow-hidden rounded-2xl shadow-lg"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${exp.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/30 to-transparent" />

              <div className="relative z-10 p-6">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-orange-400">
                  {"\u20AC"}
                  {exp.from}/day
                </p>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {exp.title}
                </h3>
                <p className="mb-4 text-sm text-neutral-300">
                  {exp.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-all group-hover:gap-2.5">
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   FEATURED VEHICLES / FLEET GRID
   ───────────────────────────────────────────── */

function FeaturedVehicles({
  cars,
  loading,
  error,
  onCarClick,
}: {
  cars: CarCard[]
  loading: boolean
  error: string | null
  onCarClick: (carId: string) => () => void
}) {
  return (
    <section id="vehicles" className="bg-[hsl(210,20%,98%)] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(24,100%,50%)]">
            Featured Fleet
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-[hsl(220,15%,10%)] md:text-5xl">
            Popular vehicles
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[hsl(220,10%,46%)]">
            From compact cars to luxury SUVs, we have the perfect option for
            every trip.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {loading && (
            <div className="col-span-full text-center text-sm text-[hsl(220,10%,46%)]">
              Loading cars...
            </div>
          )}
          {!loading && error && (
            <div className="col-span-full text-center text-sm text-red-500">{error}</div>
          )}
          {!loading && !error && cars.map((car) => (
            <div
              key={car.id + car.year}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl"
            >
              {/* Car image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${car.image}')` }}
                />
                {/* Urgency badge */}
                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${BADGE_STYLES[car.badge]}`}
                >
                  {car.badge}
                </span>
              </div>

              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[hsl(220,15%,10%)]">
                    {car.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-[hsl(24,100%,50%)] text-[hsl(24,100%,50%)]" />
                    <span className="text-xs font-medium text-[hsl(220,15%,10%)]">
                      {car.rating}
                    </span>
                  </div>
                </div>

                <p className="mb-4 text-xs text-[hsl(220,10%,46%)]">
                  {car.location} &middot; {car.year}
                </p>

                <div className="mb-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[hsl(220,10%,46%)]">
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {car.seats} Seats
                  </span>
                  <span className="flex items-center gap-1">
                    <Fuel className="h-3.5 w-3.5" />
                    {car.fuel}
                  </span>
                  <span className="flex items-center gap-1">
                    <Gauge className="h-3.5 w-3.5" />
                    {car.transmission}
                  </span>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xs text-[hsl(220,10%,46%)]">
                      From
                    </span>
                    <p>
                      <span className="text-3xl font-bold text-[hsl(220,15%,10%)]">
                        {"\u20AC"}
                        {car.price}
                      </span>
                      <span className="ml-1 text-sm text-[hsl(220,10%,46%)]">
                        /day
                      </span>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onCarClick(car.id)}
                    className="flex items-center gap-1 rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-neutral-800"
                  >
                    Book
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────────── */

function FooterSection() {
  return (
    <footer className="border-t border-[hsl(220,13%,91%)] bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(24,100%,50%)]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-[hsl(220,15%,10%)]">
                JOLZT
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[hsl(220,10%,46%)]">
              Clear pricing, simple instructions, and full insurance included.
              Car rental in Macedonia made easy.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-[hsl(220,15%,10%)]">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[hsl(220,10%,46%)] transition-colors hover:text-[hsl(220,15%,10%)]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[hsl(220,10%,46%)] transition-colors hover:text-[hsl(220,15%,10%)]"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[hsl(220,10%,46%)] transition-colors hover:text-[hsl(220,15%,10%)]"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-[hsl(220,15%,10%)]">
              Support
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[hsl(220,10%,46%)] transition-colors hover:text-[hsl(220,15%,10%)]"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[hsl(220,10%,46%)] transition-colors hover:text-[hsl(220,15%,10%)]"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[hsl(220,10%,46%)] transition-colors hover:text-[hsl(220,15%,10%)]"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-[hsl(220,15%,10%)]">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[hsl(220,10%,46%)] transition-colors hover:text-[hsl(220,15%,10%)]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[hsl(220,10%,46%)] transition-colors hover:text-[hsl(220,15%,10%)]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[hsl(220,10%,46%)] transition-colors hover:text-[hsl(220,15%,10%)]"
                >
                  Insurance Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[hsl(220,13%,91%)] pt-8 md:flex-row">
          <p className="text-xs text-[hsl(220,10%,46%)]">
            {"\u00A9"} 2026 Jolzt. All rights reserved.
          </p>
          <p className="text-xs text-[hsl(220,10%,46%)]">
            Made with care in North Macedonia
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
   ───────────────────────────────────────────── */

export default function CarrentalHomepage({ lang = "en" }: { lang?: string }) {
  const [cars, setCars] = useState<CarCard[]>(FALLBACK_CARS)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [location, setLocation] = useState("Skopje Airport (SKP)")
  const [pickupTime, setPickupTime] = useState("12:30")
  const [returnTime, setReturnTime] = useState("08:30")
  const [dateRange] = useState({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 3)),
  })

  const heroVariant = useExperimentValue<string>(
    GROWTHBOOK_CONFIG.EXPERIMENTS.VARIANT_A,
    {
      defaultValue: "0",
      possibleValues: ["0", "1", "2"],
    },
  )

  const currentVariantText =
    HERO_TEXT_VARIANTS[heroVariant.value as VariantKey] || HERO_TEXT_VARIANTS["0"]
  const currentLang = (lang as LangKey) || "en"
  const getLocalizedText = (textMap: typeof currentVariantText.heading) => {
    return textMap[currentLang] || textMap.en
  }

  const headingText = getLocalizedText(currentVariantText.heading)
  const subheadingText = getLocalizedText(currentVariantText.subheading)
  const ratingLineText = getLocalizedText(currentVariantText.ratingline)
  const benefit1Text = getLocalizedText(currentVariantText.benefit1)
  const benefit2Text = getLocalizedText(currentVariantText.benefit2)

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.post("/api/cars", {
          action: "getCars",
          query: {
            region: "Macedonia",
            "availability.status": "Active",
            limit: 8,
          },
        })

        const foundCars = (response.data?.data?.foundCars || []) as HomePageCar[]
        const mappedCars = foundCars.map(mapCarCard)
        setCars(mappedCars.length > 0 ? mappedCars : FALLBACK_CARS)
      } catch (fetchError: unknown) {
        const err = fetchError as { response?: { data?: { error?: string } } }
        setError(err.response?.data?.error || "Failed to load cars")
        setCars(FALLBACK_CARS)
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  const openBookingUrl = () => {
    const formatDate = (date: Date) => format(date, "dd-MM-yyyy")
    const startDate = dateRange.from ? formatDate(dateRange.from) : ""
    const endDate = dateRange.to ? formatDate(dateRange.to) : ""

    if (!startDate || !endDate) {
      return
    }

    const url = new URL("https://app.jolzt.com")
    url.searchParams.append("region", "Macedonia")
    url.searchParams.append("startDate", startDate)
    url.searchParams.append("endDate", endDate)
    url.searchParams.append("startTime", pickupTime)
    url.searchParams.append("returnTime", returnTime)
    url.searchParams.append("location", location || "Skopje Airport (SKP)")
    url.searchParams.append("appliedDiscountCode", "true")
    url.searchParams.append("discountCode", "D1SCT1")

    window.open(url.toString(), "_blank", "noopener,noreferrer")
  }

  const handleBookNowClick = () => {
    if (!analytics) {
      console.warn("Analytics not available")
    }

    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "Show_Cars",
        content_type: "car",
      })
    }

    openBookingUrl()
  }

  const handleCarClick = (carId: string) => () => {
    const car = cars.find((carItem) => carItem.id === carId)

    if (!car) {
      return
    }

    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "Web_Car_Select",
        content_type: "car",
        car_id: car.source._id || car.id,
        car_model: car.name,
        category: car.type,
        eur_price_per_day: Number(car.price),
      })
    }

    openBookingUrl()
  }

  const dateLabel = `${format(dateRange.from, "MMM d, yyyy")} - ${format(dateRange.to, "MMM d, yyyy")}`

  return (
    <div className="min-h-screen bg-[hsl(210,20%,98%)]">
      <Header lang={lang} onBookNowClick={handleBookNowClick} />
      <HeroSection
        location={location}
        onLocationChange={setLocation}
        dateLabel={dateLabel}
        pickupTime={pickupTime}
        returnTime={returnTime}
        onPickupTimeChange={setPickupTime}
        onReturnTimeChange={setReturnTime}
        onSearchCars={handleBookNowClick}
        headingText={headingText}
        subheadingText={subheadingText}
        ratingLineText={ratingLineText}
        benefit1Text={benefit1Text}
        benefit2Text={benefit2Text}
      />
      <HowItWorksSection />
      <ExperienceSection />
      <FeaturedVehicles
        cars={cars}
        loading={loading}
        error={error}
        onCarClick={handleCarClick}
      />
      <FooterSection />
    </div>
  )
}
