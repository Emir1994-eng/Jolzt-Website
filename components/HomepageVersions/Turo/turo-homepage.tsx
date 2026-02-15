"use client";

import { useEffect, useState } from "react";
import heroBg from "./hero-bg.jpg";
import axios from "axios";
import { format } from "date-fns";
import {
  Car,
  Menu,
  X,
  MapPin,
  CalendarDays,
  Clock,
  Search,
  ShieldCheck,
  CreditCard,
  Headphones,
  Smartphone,
  CarFront,
  Users,
  Fuel,
  Settings2,
  Star,
  ArrowRight,
  Zap,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useExperimentValue } from "@/app/hooks/useFeatureFlag";
import { GROWTHBOOK_CONFIG } from "@/app/config/growthbook";
import { analytics } from "@/lib/firebase";

interface HomePageCar {
  _id?: string;
  model?: string;
  modelType?: string;
  category?: string;
  productionYear?: number;
  images?: string[];
  regularPrice?: number;
  availableLocation?: string;
  reviews?: unknown[];
  numberOfSeats?: number;
  seats?: number;
  fuelType?: string;
  gear?: string;
  transmission?: string;
  features?: string[];
}

interface DisplayCar {
  id: string;
  name: string;
  category: string;
  year: number;
  image: string;
  price: number;
  location: string;
  rating: number;
  reviews: number;
  seats: number;
  fuel: string;
  transmission: string;
  features: string[];
  original: HomePageCar;
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

type LangKey = "en" | "mk" | "sq";
type VariantKey = keyof typeof HERO_TEXT_VARIANTS;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/* ───────────────────────── DATA ───────────────────────── */

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Cars", href: "#fleet" },
  { label: "Why Jolzt", href: "#why-jolzt" },
];

const STEPS = [
  {
    number: "01",
    title: "Book in minutes",
    description:
      "Choose dates, browse cars, and book instantly. No paperwork, no waiting in line.",
    highlight: "Save up to 30% compared to traditional rentals",
    icon: Smartphone,
  },
  {
    number: "02",
    title: "Skip the counter",
    description:
      "Go straight to your car with our digital check-in. No lines, no paperwork, just grab and drive.",
    highlight: "Average pickup time under 2 minutes",
    icon: Zap,
  },
  {
    number: "03",
    title: "Drive worry-free",
    description:
      "Full insurance included with 24/7 roadside assistance. Free cancellation up to 48 hours.",
    highlight: "98% customer satisfaction",
    icon: ShieldCheck,
  },
];

const FALLBACK_CARS: DisplayCar[] = [
  {
    id: "fallback-1",
    name: "Opel Astra",
    category: "suv",
    year: 2017,
    image: "/images/car-opel-astra.jpg",
    price: 40,
    location: "Skopje",
    rating: 5,
    reviews: 0,
    seats: 5,
    fuel: "Petrol",
    transmission: "Manual",
    features: ["Front wheel drive", "USB input", "Bluetooth"],
    original: {},
  },
  {
    id: "fallback-2",
    name: "Bmw F10 Bmw",
    category: "luxury",
    year: 2005,
    image: "/images/car-bmw-f10.jpg",
    price: 39,
    location: "Skopje International Airport",
    rating: 5,
    reviews: 0,
    seats: 4,
    fuel: "Diesel",
    transmission: "Automatic",
    features: ["All wheel drive", "Front wheel drive"],
    original: {},
  },
  {
    id: "fallback-3",
    name: "Golf 8",
    category: "hatchback",
    year: 2020,
    image: "/images/car-golf-8.jpg",
    price: 80,
    location: "Skopje International Airport",
    rating: 5,
    reviews: 0,
    seats: 4,
    fuel: "Diesel",
    transmission: "Automatic",
    features: ["Reclining seats", "USB input"],
    original: {},
  },
  {
    id: "fallback-4",
    name: "Opel Astra",
    category: "hatchback",
    year: 2018,
    image: "/images/car-opel-astra.jpg",
    price: 34,
    location: "Skopje International Airport",
    rating: 5,
    reviews: 0,
    seats: 4,
    fuel: "Diesel",
    transmission: "Manual",
    features: ["Front wheel drive", "Bluetooth"],
    original: {},
  },
  {
    id: "fallback-5",
    name: "Golf 6",
    category: "hatchback",
    year: 2019,
    image: "/images/car-golf-8.jpg",
    price: 50,
    location: "Skopje International Airport",
    rating: 5,
    reviews: 0,
    seats: 4,
    fuel: "Diesel",
    transmission: "Automatic",
    features: ["Reclining seats", "USB input"],
    original: {},
  },
  {
    id: "fallback-6",
    name: "Skoda Octavia",
    category: "sedan",
    year: 2023,
    image: "/images/car-skoda-octavia.jpg",
    price: 70,
    location: "Skopje International Airport",
    rating: 5,
    reviews: 0,
    seats: 4,
    fuel: "Diesel",
    transmission: "Automatic",
    features: ["Reclining seats", "USB input"],
    original: {},
  },
  {
    id: "fallback-7",
    name: "Skoda Kamiq",
    category: "suv",
    year: 2023,
    image: "/images/car-skoda-kamiq.jpg",
    price: 75,
    location: "Skopje International Airport",
    rating: 5,
    reviews: 0,
    seats: 4,
    fuel: "Petrol",
    transmission: "Automatic",
    features: ["Reclining seats"],
    original: {},
  },
  {
    id: "fallback-8",
    name: "Toyota RAV4",
    category: "suv",
    year: 2023,
    image: "/images/car-toyota-rav4.jpg",
    price: 60,
    location: "Skopje International Airport",
    rating: 5,
    reviews: 0,
    seats: 4,
    fuel: "Petrol",
    transmission: "Automatic",
    features: ["Reclining seats"],
    original: {},
  },
];

const TRUST_FEATURES = [
  {
    icon: ShieldCheck,
    title: "Full Insurance Always Included",
    description:
      "No hidden fees at the counter. Every rental includes comprehensive coverage.",
    stat: "100% covered",
  },
  {
    icon: Zap,
    title: "Instant Confirmation",
    description:
      "Confirmed in seconds. Skip the counter with our digital check-in.",
    stat: "Under 2 min pickup",
  },
  {
    icon: Star,
    title: "4.8/5 Customer Rating",
    description:
      "Safe, predictable, and easy from booking to return. Trusted by thousands.",
    stat: "98% satisfaction",
  },
  {
    icon: BadgeCheck,
    title: "Clear, Upfront Pricing",
    description: "The price you see is the price you pay. No surprises, ever.",
    stat: "Save up to 30%",
  },
];

const FOOTER_LINKS = {
  Company: ["About Us", "Careers", "Blog", "Press"],
  Support: ["Help Center", "Contact Us", "FAQ", "Live Chat"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  Locations: ["Skopje", "Ohrid", "Bitola", "Skopje Airport"],
};

const mapCarForDisplay = (car: HomePageCar, index: number): DisplayCar => {
  const modelName = [car.model, car.modelType].filter(Boolean).join(" ").trim();
  const features =
    Array.isArray(car.features) && car.features.length > 0
      ? car.features.slice(0, 4)
      : ["Insurance included", "Roadside assistance", "Free cancellation"];

  return {
    id: car._id || `api-fallback-${index}`,
    name: modelName || "Car",
    category: (car.category || "car").toLowerCase(),
    year: car.productionYear || new Date().getFullYear(),
    image: car.images?.[0] || "/placeholder.svg",
    price: car.regularPrice || 0,
    location: car.availableLocation || "Skopje",
    rating: 5,
    reviews: car.reviews?.length || 0,
    seats: car.numberOfSeats || car.seats || 4,
    fuel: car.fuelType || "Petrol",
    transmission: car.gear || car.transmission || "Automatic",
    features,
    original: car,
  };
};

/* ───────────────────────── NAVBAR ───────────────────────── */

function Navbar({
  lang,
  onBookNowClick,
}: {
  lang: string;
  onBookNowClick: () => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href={`/${lang}`} className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF6B00]">
              <Car className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              JOLZT
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href={`/${lang}`}
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {lang.toUpperCase()}
            </a>
            <button
              type="button"
              onClick={onBookNowClick}
              className="rounded-full bg-[#FF6B00] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#e55f00]"
            >
              Book Your Ride
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-white/60"
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
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-[#0a0a0a]/95 backdrop-blur-xl px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/60"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              className="mt-2 rounded-full bg-[#FF6B00] px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => {
                onBookNowClick();
                setMobileOpen(false);
              }}
            >
              Book Your Ride
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ───────────────────────── HERO + SEARCH ───────────────────────── */

function HeroSearch({
  headingText,
  subheadingText,
  ratingLineText,
  benefit1Text,
  benefit2Text,
  locationLabel,
  dateLabel,
  pickupTime,
  onSearchCars,
}: {
  headingText: string;
  subheadingText: string;
  ratingLineText: string;
  benefit1Text: string;
  benefit2Text: string;
  locationLabel: string;
  dateLabel: string;
  pickupTime: string;
  onSearchCars: () => void;
}) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg.src}
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Rating badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/10">
          <Star className="h-4 w-4 fill-[#FF6B00] text-[#FF6B00]" />
          <span className="text-sm font-medium text-white">
            {ratingLineText}
          </span>
        </div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {headingText}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          {subheadingText}
        </p>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-white/40">
            <ShieldCheck className="h-4 w-4" />
            <span className="text-sm">{benefit1Text}</span>
          </div>
          <div className="flex items-center gap-2 text-white/40">
            <CreditCard className="h-4 w-4" />
            <span className="text-sm">{benefit2Text}</span>
          </div>
          <div className="flex items-center gap-2 text-white/40">
            <Headphones className="h-4 w-4" />
            <span className="text-sm">24/7 Roadside Assistance</span>
          </div>
        </div>
      </div>

      {/* Floating search bar */}
      <div className="relative z-10 mt-12 w-full max-w-4xl px-4 sm:px-6 mb-16 lg:mb-24">
        <div className="rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 p-3 shadow-2xl shadow-black/50">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            {/* Location */}
            <div className="flex flex-1 items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
              <MapPin className="h-5 w-5 text-[#FF6B00] shrink-0" />
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">
                  Pick-up Location
                </p>
                <p className="text-sm font-medium text-white">
                  {locationLabel}
                </p>
              </div>
            </div>

            {/* Dates */}
            <div className="flex flex-1 items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
              <CalendarDays className="h-5 w-5 text-[#FF6B00] shrink-0" />
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">
                  Pick-up / Drop-off
                </p>
                <p className="text-sm font-medium text-white">
                  {dateLabel}
                </p>
              </div>
            </div>

            {/* Time */}
            <div className="hidden flex-1 items-center gap-3 rounded-xl bg-white/5 px-4 py-3 lg:flex">
              <Clock className="h-5 w-5 text-[#FF6B00] shrink-0" />
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">
                  Pick-up Time
                </p>
                <p className="text-sm font-medium text-white">{pickupTime}</p>
              </div>
            </div>

            {/* Search button */}
            <button
              type="button"
              onClick={onSearchCars}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#e55f00] hover:shadow-lg hover:shadow-[#FF6B00]/25 md:px-10"
            >
              <Search className="h-4 w-4" />
              Search Cars
            </button>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-white/30">
          {"Today's discount is applied on the next step."}
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── HOW IT WORKS ───────────────────────── */

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#111111] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FF6B00]">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Renting a car with Jolzt is quick, easy, and worry-free
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
            {"We've simplified the process to save you time and money."}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-[#FF6B00]/20 hover:bg-white/[0.04]"
            >
              <span className="text-5xl font-bold text-white/[0.06]">
                {step.number}
              </span>
              <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B00]/10 text-[#FF6B00]">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {step.description}
              </p>
              <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[#FF6B00]">
                <span className="inline-block h-1 w-1 rounded-full bg-[#FF6B00]" />
                {step.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── POPULAR CARS ───────────────────────── */

function PopularCars({
  cars,
  loading,
  error,
  onCarClick,
}: {
  cars: DisplayCar[];
  loading: boolean;
  error: string | null;
  onCarClick: (carId: string) => () => void;
}) {
  const [scrollPos, setScrollPos] = useState(0);

  function scroll(dir: "left" | "right") {
    const el = document.getElementById("car-scroll");
    if (!el) return;
    const amount = 370;
    const newPos =
      dir === "left"
        ? Math.max(0, scrollPos - amount)
        : scrollPos + amount;
    el.scrollTo({ left: newPos, behavior: "smooth" });
    setScrollPos(newPos);
  }

  return (
    <section id="fleet" className="bg-[#0e0e0e] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#FF6B00]">
              Find your perfect ride
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Choose from our wide selection of vehicles at the best
              prices in North Macedonia
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/20 hover:text-white"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/20 hover:text-white"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable row */}
        <div
          id="car-scroll"
          className="mt-10 flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {loading && (
            <div className="text-white/60 px-2">Loading cars...</div>
          )}
          {!loading && error && (
            <div className="text-red-400 px-2">{error}</div>
          )}
          {!loading && !error && cars.map((car, i) => (
            <div
              key={`${car.id}-${car.year}-${i}`}
              className="group flex-shrink-0 w-[320px] overflow-visible rounded-2xl border border-white/5 bg-[#161616] transition-all hover:border-[#FF6B00]/20"
            >
              {/* Image — pops out */}
              <div className="relative mx-auto -mt-2 w-[90%] pt-4">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="absolute left-2 top-6 rounded-full bg-[#0a0a0a]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/70 backdrop-blur-sm">
                  {car.category}
                </span>
              </div>

              {/* Details */}
              <div className="p-5 pt-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {car.name}
                    </h3>
                    <p className="text-sm text-white/40">
                      {car.year} &middot; {car.location} ({car.reviews} reviews)
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: car.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-3 w-3 fill-[#FF6B00] text-[#FF6B00]"
                      />
                    ))}
                  </div>
                </div>

                {/* Specs */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/50">
                    <Users className="h-3 w-3" />
                    {car.seats}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/50">
                    <Fuel className="h-3 w-3" />
                    {car.fuel}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/50">
                    <Settings2 className="h-3 w-3" />
                    {car.transmission}
                  </span>
                </div>

                {/* Features */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {car.features.map((f) => (
                    <span
                      key={f}
                      className="rounded bg-[#FF6B00]/10 px-2 py-0.5 text-[10px] font-medium text-[#FF6B00]"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="mt-5 flex items-end justify-between border-t border-white/5 pt-4">
                  <div>
                    <p className="text-xs text-white/40">From</p>
                    <p className="text-2xl font-bold text-white">
                      {"€"}
                      {car.price}
                      <span className="text-sm font-normal text-white/40">
                        /day
                      </span>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onCarClick(car.id)}
                    className="flex items-center gap-1.5 rounded-full bg-[#FF6B00] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#e55f00]"
                  >
                    Search cars
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {!loading && !error && cars.length === 0 && (
            <div className="text-white/60 px-2">No cars available right now.</div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── TRUST SECTION ───────────────────────── */

function TrustSection() {
  return (
    <section id="why-jolzt" className="bg-[#111111] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FF6B00]">
            Why Jolzt
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {"We've simplified the process to save you time and money"}
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-[#FF6B00]/20 hover:bg-white/[0.04]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] transition-colors group-hover:bg-[#FF6B00]/20">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {feature.description}
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
                {feature.stat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */

function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF6B00]">
                <Car className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                JOLZT
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/40">
              Renting a car with Jolzt is quick, easy, and worry-free.{" "}
              {"We've simplified the process to save you time and money."}
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">
                {heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Jolzt. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-white/30 transition-colors hover:text-white"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-white/30 transition-colors hover:text-white"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-white/30 transition-colors hover:text-white"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */

export default function JolztHomepage({ lang = "en" }: { lang?: string }) {
  const [cars, setCars] = useState<DisplayCar[]>(FALLBACK_CARS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedLocation] = useState({
    value: "skopje-airport",
    label: "Skopje Airport (SKP)",
  });
  const [pickupTime] = useState("12:30");
  const [returnTime] = useState("08:30");
  const [dateRange] = useState({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 3)),
  });

  const heroVariant = useExperimentValue<string>(
    GROWTHBOOK_CONFIG.EXPERIMENTS.VARIANT_A,
    {
      defaultValue: "0",
      possibleValues: ["0", "1", "2"],
    }
  );

  const currentVariantText =
    HERO_TEXT_VARIANTS[heroVariant.value as VariantKey] || HERO_TEXT_VARIANTS["0"];
  const currentLang = (lang as LangKey) || "en";
  const getLocalizedText = (textMap: typeof currentVariantText.heading) => {
    return textMap[currentLang] || textMap.en;
  };

  const headingText = getLocalizedText(currentVariantText.heading);
  const subheadingText = getLocalizedText(currentVariantText.subheading);
  const ratingLineText = getLocalizedText(currentVariantText.ratingline);
  const benefit1Text = getLocalizedText(currentVariantText.benefit1);
  const benefit2Text = getLocalizedText(currentVariantText.benefit2);

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
        });

        const foundCars = (response.data?.data?.foundCars || []) as HomePageCar[];
        const mappedCars = foundCars.map(mapCarForDisplay);
        setCars(mappedCars.length > 0 ? mappedCars : FALLBACK_CARS);
      } catch (fetchError: unknown) {
        const err = fetchError as { response?: { data?: { error?: string } } };
        setError(err.response?.data?.error || "Failed to load cars");
        setCars(FALLBACK_CARS);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const openBookingUrl = () => {
    const formatDate = (date: Date) => format(date, "dd-MM-yyyy");
    const startDate = dateRange.from ? formatDate(dateRange.from) : "";
    const endDate = dateRange.to ? formatDate(dateRange.to) : "";

    if (!startDate || !endDate) {
      return;
    }

    const url = new URL("https://app.jolzt.com");
    url.searchParams.append("region", "Macedonia");
    url.searchParams.append("startDate", startDate);
    url.searchParams.append("endDate", endDate);
    url.searchParams.append("startTime", pickupTime);
    url.searchParams.append("returnTime", returnTime);
    url.searchParams.append("location", selectedLocation.value);
    url.searchParams.append("appliedDiscountCode", "true");
    url.searchParams.append("discountCode", "D1SCT1");

    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };

  const handleBookNowClick = () => {
    if (!analytics) {
      console.warn("Analytics not available");
    }

    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "Show_Cars",
        content_type: "car",
      });
    }

    openBookingUrl();
  };

  const handleCarClick = (carId: string) => () => {
    const car = cars.find((carItem) => carItem.id === carId);

    if (!car) {
      return;
    }

    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "Web_Car_Select",
        content_type: "car",
        car_id: car.original._id || car.id,
        car_model: car.name,
        category: car.category,
        eur_price_per_day: car.price,
      });
    }

    openBookingUrl();
  };

  const dateLabel = `${format(dateRange.from, "MMM d, yyyy")} - ${format(
    dateRange.to,
    "MMM d, yyyy"
  )}`;

  return (
    <main className="bg-[#0a0a0a]">
      <Navbar lang={lang} onBookNowClick={handleBookNowClick} />
      <HeroSearch
        headingText={headingText}
        subheadingText={subheadingText}
        ratingLineText={ratingLineText}
        benefit1Text={benefit1Text}
        benefit2Text={benefit2Text}
        locationLabel={selectedLocation.label}
        dateLabel={dateLabel}
        pickupTime={pickupTime}
        onSearchCars={handleBookNowClick}
      />
      <HowItWorks />
      <PopularCars
        cars={cars}
        loading={loading}
        error={error}
        onCarClick={handleCarClick}
      />
      <TrustSection />
      <SiteFooter />
    </main>
  );
}
