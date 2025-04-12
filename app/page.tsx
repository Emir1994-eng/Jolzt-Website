"use client"

import { AvatarFallback } from "@/components/ui/avatar"
import { Avatar } from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link"
import {
  StarIcon,
  CheckIcon,
  GlobeIcon,
  ChevronRight,
  Building2Icon,
  CalendarIcon,
  DollarSignIcon,
  CarFrontIcon,
  ZapIcon,
  SmileIcon,
  ThumbsUpIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DatePickerWithRange } from "@/components/date-range-picker"
import { LocationSelector } from "@/components/location-selector"
import { GoodToKnow } from "@/components/good-to-know"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useState } from "react"
import { AuthModal } from "@/components/auth-modal"
import { LanguageSelector } from "@/components/language-selector"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  const [authModalOpen, setAuthModalOpen] = useState(false)
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4 md:gap-6">
            <Link href="/" className="flex items-center gap-2">
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
            <Button
              size="sm"
              className="bg-[#f26522] hover:bg-[#e05a1c] text-xs md:text-sm"
              onClick={() => (window.location.href = "https://app.jolzt.com")}
            >
              Sign In / Register
            </Button>
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
                  <Badge variant="outline" className="bg-white text-[#f26522] mb-4">
                    5 years of JOLZT. 5 years of excellence.
                  </Badge>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    BOOK INSTANTLY, SKIP COUNTERS
                  </h1>
                  <p className="text-white text-base md:text-lg mb-6 max-w-lg">
                    Discover a hassle-free way to book your next car rental in North Macedonia. With Jolzt, you can skip
                    the counters and easily rent a car directly from the app, all from the comfort of your home.
                  </p>
                </div>

                <div className="hidden lg:block">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-white rounded-full px-3 py-1 flex items-center gap-1">
                      <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold">4.8</span>
                    </div>
                    <span className="text-white text-sm">
                      Experience convenience, flexibility, and top-tier service every time you drive.
                    </span>
                  </div>

                  <div className="flex flex-row gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                      <CheckIcon className="h-6 w-6 mb-2" />
                      <p className="font-medium">Easy pickup and returns</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                      <GlobeIcon className="h-6 w-6 mb-2" />
                      <p className="font-medium">Drive across borders</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop layout - right column */}
              <div className="hidden lg:block">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Pick-up & return</div>
                      <Button variant="link" size="sm" className="text-[#f26522] text-xs md:text-sm">
                        Different return location
                      </Button>
                    </div>
                    <LocationSelector />
                    <DatePickerWithRange />
                    <Button className="w-full bg-[#f26522] hover:bg-[#e05a1c]" onClick={() => setAuthModalOpen(true)}>
                      Show cars
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile layout - stacked vertically */}
            <div className="lg:hidden flex flex-col space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Pick-up & return</div>
                    <Button variant="link" size="sm" className="text-[#f26522] text-xs p-0">
                      Different return location
                    </Button>
                  </div>
                  <LocationSelector />
                  <DatePickerWithRange />
                  <Button className="w-full bg-[#f26522] hover:bg-[#e05a1c]" onClick={() => setAuthModalOpen(true)}>
                    Show cars
                  </Button>
                  <Button variant="link" size="sm" className="text-[#f26522] text-xs mx-auto">
                    Apply corporate rate
                  </Button>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-white rounded-full px-3 py-1 flex items-center gap-1">
                    <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">4.8</span>
                  </div>
                  <span className="text-white text-sm">
                    Experience convenience, flexibility, and top-tier service every time you drive.
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                    <CheckIcon className="h-6 w-6 mb-2" />
                    <p className="font-medium">Easy pickup and returns</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                    <GlobeIcon className="h-6 w-6 mb-2" />
                    <p className="font-medium">Drive across borders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Renting a car with Jolzt is quick, easy, and hassle-free. We've simplified the process to save you time
                and money.
              </p>
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
                      <h3 className="text-xl font-bold mb-3">Book in Minutes</h3>
                      <p className="text-muted-foreground">
                        Select your dates, browse cars, and book instantly. No paperwork, no waiting in line.
                      </p>
                      <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                        <div className="flex items-center justify-center text-sm text-[#f26522]">
                          <CheckIcon className="h-4 w-4 mr-1" /> Save up to 30% vs traditional rentals
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white rounded-full p-4 shadow-lg border-4 border-[#f26522] mb-6">
                      <SmileIcon className="h-10 w-10 text-[#f26522]" />
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 h-full">
                      <h3 className="text-xl font-bold mb-3">Skip the Counter</h3>
                      <p className="text-muted-foreground">
                        Go straight to your car with our digital check-in. No lines, no paperwork, just grab and go.
                      </p>
                      <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                        <div className="flex items-center justify-center text-sm text-[#f26522]">
                          <CheckIcon className="h-4 w-4 mr-1" /> Average pickup time under 2 minutes
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white rounded-full p-4 shadow-lg border-4 border-[#f26522] mb-6">
                      <ThumbsUpIcon className="h-10 w-10 text-[#f26522]" />
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 h-full">
                      <h3 className="text-xl font-bold mb-3">Drive Worry-Free</h3>
                      <p className="text-muted-foreground">
                        Full insurance included with 24/7 roadside assistance. Free cancellation up to 48 hours.
                      </p>
                      <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                        <div className="flex items-center justify-center text-sm text-[#f26522]">
                          <CheckIcon className="h-4 w-4 mr-1" /> 98% customer satisfaction rate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-12">
                <Button asChild className="bg-[#f26522] hover:bg-[#e05a1c] px-8 py-6 h-auto text-lg rounded-full">
                  <Link href="/how-it-works">
                    Learn More About How Jolzt Works
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
                    <h3 className="text-lg font-bold mb-2">Book in Minutes</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Select dates, browse cars, and book instantly. No paperwork needed.
                    </p>
                    <div className="flex items-center justify-center text-xs text-[#f26522]">
                      <CheckIcon className="h-3 w-3 mr-1" /> Save up to 30% vs traditional rentals
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#f26522] text-white flex items-center justify-center">
                    <SmileIcon className="h-5 w-5" />
                  </div>
                  <div className="pt-3 text-center">
                    <h3 className="text-lg font-bold mb-2">Skip the Counter</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Go straight to your car with digital check-in. Just grab and go.
                    </p>
                    <div className="flex items-center justify-center text-xs text-[#f26522]">
                      <CheckIcon className="h-3 w-3 mr-1" /> Average pickup time under 2 minutes
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#f26522] text-white flex items-center justify-center">
                    <ThumbsUpIcon className="h-5 w-5" />
                  </div>
                  <div className="pt-3 text-center">
                    <h3 className="text-lg font-bold mb-2">Drive Worry-Free</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Full insurance with 24/7 assistance. Free cancellation up to 48h.
                    </p>
                    <div className="flex items-center justify-center text-xs text-[#f26522]">
                      <CheckIcon className="h-3 w-3 mr-1" /> 98% customer satisfaction rate
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Button asChild className="bg-[#f26522] hover:bg-[#e05a1c]">
                  <Link href="/how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Ride</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Choose from our wide selection of vehicles at the best prices in North Macedonia. From compact cars to
                luxury SUVs, we have the perfect option for every journey.
              </p>
            </div>

            {/* Desktop version - grid */}
            <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Link href="/travel-guides/10-must-visit-places-around-lake-ohrid" className="block">
                <Card className="overflow-hidden transition-all hover:shadow-md">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-slate-100 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <CarFrontIcon className="h-16 w-16 text-[#f26522]/40" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#f26522]">Most Popular</Badge>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-lg mb-0">Volkswagen Golf</h3>
                          <p className="text-sm text-muted-foreground">Hatchback • 2022</p>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs font-normal">
                          Auto Rent Ltd.
                        </Badge>
                        <span className="text-xs text-muted-foreground">(32 reviews)</span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-medium">From</div>
                        <div className="text-xl font-bold text-[#f26522]">
                          €25<span className="text-sm font-normal text-muted-foreground">/day</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <CheckIcon className="h-3 w-3 text-[#f26522]" /> 4-5 Seats
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckIcon className="h-3 w-3 text-[#f26522]" /> 2 Small Bags
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckIcon className="h-3 w-3 text-[#f26522]" /> A/C
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckIcon className="h-3 w-3 text-[#f26522]" /> Manual/Auto
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full border-[#f26522] text-[#f26522] hover:bg-[#f26522] hover:text-white"
                      >
                        Rent Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/travel-guides/exploring-skopjes-old-bazaar" className="block">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-slate-100 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <CarFrontIcon className="h-16 w-16 text-[#f26522]/40" />
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-lg mb-0">Toyota Corolla</h3>
                          <p className="text-sm text-muted-foreground">Sedan • 2021</p>
                        </div>
                        <div className="flex">
                          {[...Array(4)].map((_, i) => (
                            <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <StarIcon className="h-4 w-4 text-yellow-400" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs font-normal">
                          Macedonia Rentals
                        </Badge>
                        <span className="text-xs text-muted-foreground">(18 reviews)</span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-medium">From</div>
                        <div className="text-xl font-bold text-[#f26522]">
                          €35<span className="text-sm font-normal text-muted-foreground">/day</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <CheckIcon className="h-3 w-3 text-[#f26522]" /> 5 Seats
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckIcon className="h-3 w-3 text-[#f26522]" /> 3 Bags
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckIcon className="h-3 w-3 text-[#f26522]" /> A/C
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckIcon className="h-3 w-3 text-[#f26522]" /> Auto
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full border-[#f26522] text-[#f26522] hover:bg-[#f26522] hover:text-white"
                      >
                        Rent Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/travel-guides/road-trip-through-mavrovo-national-park" className="block">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-slate-100 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <CarFrontIcon className="h-16 w-16 text-[#f26522]/40" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-green-600">Best Value</Badge>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-lg mb-0">Hyundai Tucson</h3>
                          <p className="text-sm text-muted-foreground">SUV • 2023</p>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs font-normal">
                          Balkan Cars
                        </Badge>
                        <span className="text-xs text-muted-foreground">(27 reviews)</span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-medium">From</div>
                        <div className="text-xl font-bold text-[#f26522]">
                          €45<span className="text-sm font-normal text-muted-foreground">/day</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <CheckIcon className="h-3 w-3 text-[#f26522]" /> 5-7 Seats
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckIcon className="h-3 w-3 text-[#f26522]" /> 4 Bags
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckIcon className="h-3 w-3 text-[#f26522]" /> A/C
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckIcon className="h-3 w-3 text-[#f26522]" /> Auto
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full border-[#f26522] text-[#f26522] hover:bg-[#f26522] hover:text-white"
                      >
                        Rent Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-slate-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CarFrontIcon className="h-16 w-16 text-[#f26522]/40" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-purple-600">Premium</Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg mb-0">Mercedes C-Class</h3>
                        <p className="text-sm text-muted-foreground">Luxury • 2022</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs font-normal">
                        Premium Rentals
                      </Badge>
                      <span className="text-xs text-muted-foreground">(15 reviews)</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-medium">From</div>
                      <div className="text-xl font-bold text-[#f26522]">
                        €75<span className="text-sm font-normal text-muted-foreground">/day</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <CheckIcon className="h-3 w-3 text-[#f26522]" /> 5 Seats
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckIcon className="h-3 w-3 text-[#f26522]" /> 4 Bags
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckIcon className="h-3 w-3 text-[#f26522]" /> Premium Features
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckIcon className="h-3 w-3 text-[#f26522]" /> Auto
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-[#f26522] text-[#f26522] hover:bg-[#f26522] hover:text-white"
                    >
                      Rent Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mobile version - carousel */}
            <div className="md:hidden">
              <div className="relative">
                <Carousel className="w-full overflow-visible">
                  <CarouselContent className="-ml-2 -mr-2">
                    <CarouselItem className="md:hidden pl-2 pr-2 basis-[85%] min-w-0">
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="aspect-[4/3] bg-slate-100 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <CarFrontIcon className="h-16 w-16 text-[#f26522]/40" />
                            </div>
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-[#f26522]">Most Popular</Badge>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent h-12"></div>
                          </div>
                          <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-bold text-lg mb-0">Volkswagen Golf</h3>
                                <p className="text-sm text-muted-foreground">Hatchback • 2022</p>
                              </div>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant="outline" className="text-xs font-normal">
                                Auto Rent Ltd.
                              </Badge>
                              <span className="text-xs text-muted-foreground">(32 reviews)</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                              <div className="text-sm font-medium">From</div>
                              <div className="text-xl font-bold text-[#f26522]">
                                €25<span className="text-sm font-normal text-muted-foreground">/day</span>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
                              <div className="flex items-center gap-1">
                                <CheckIcon className="h-3 w-3 text-[#f26522]" /> 4-5 Seats
                              </div>
                              <div className="flex items-center gap-1">
                                <CheckIcon className="h-3 w-3 text-[#f26522]" /> 2 Small Bags
                              </div>
                              <div className="flex items-center gap-1">
                                <CheckIcon className="h-3 w-3 text-[#f26522]" /> A/C
                              </div>
                              <div className="flex items-center gap-1">
                                <CheckIcon className="h-3 w-3 text-[#f26522]" /> Manual/Auto
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              className="w-full border-[#f26522] text-[#f26522] hover:bg-[#f26522] hover:text-white"
                            >
                              Rent Now
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                    <CarouselItem className="md:hidden pl-2 pr-2 basis-[85%] min-w-0">
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="aspect-[4/3] bg-slate-100 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <CarFrontIcon className="h-16 w-16 text-[#f26522]/40" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent h-12"></div>
                          </div>
                          <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-bold text-lg mb-0">Toyota Corolla</h3>
                                <p className="text-sm text-muted-foreground">Sedan • 2021</p>
                              </div>
                              <div className="flex">
                                {[...Array(4)].map((_, i) => (
                                  <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                                <StarIcon className="h-4 w-4 text-yellow-400" />
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant="outline" className="text-xs font-normal">
                                Macedonia Rentals
                              </Badge>
                              <span className="text-xs text-muted-foreground">(18 reviews)</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                              <div className="text-sm font-medium">From</div>
                              <div className="text-xl font-bold text-[#f26522]">
                                €35<span className="text-sm font-normal text-muted-foreground">/day</span>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
                              <div className="flex items-center gap-1">
                                <CheckIcon className="h-3 w-3 text-[#f26522]" /> 5 Seats
                              </div>
                              <div className="flex items-center gap-1">
                                <CheckIcon className="h-3 w-3 text-[#f26522]" /> 3 Bags
                              </div>
                              <div className="flex items-center gap-1">
                                <CheckIcon className="h-3 w-3 text-[#f26522]" /> A/C
                              </div>
                              <div className="flex items-center gap-1">
                                <CheckIcon className="h-3 w-3 text-[#f26522]" /> Auto
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              className="w-full border-[#f26522] text-[#f26522] hover:bg-[#f26522] hover:text-white"
                            >
                              Rent Now
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                    <CarouselItem className="md:hidden pl-2 pr-2 basis-[85%] min-w-0">
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="aspect-[4/3] bg-slate-100 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <CarFrontIcon className="h-16 w-16 text-[#f26522]/40" />
                            </div>
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-green-600">Best Value</Badge>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent h-12"></div>
                          </div>
                          <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-bold text-lg mb-0">Hyundai Tucson</h3>
                                <p className="text-sm text-muted-foreground">SUV • 2023</p>
                              </div>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant="outline" className="text-xs font-normal">
                                Balkan Cars
                              </Badge>
                              <span className="text-xs text-muted-foreground">(27 reviews)</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                              <div className="text-sm font-medium">From</div>
                              <div className="text-xl font-bold text-[#f26522]">
                                €45<span className="text-sm font-normal text-muted-foreground">/day</span>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
                              <div className="flex items-center gap-1">
                                <CheckIcon className="h-3 w-3 text-[#f26522]" /> 5-7 Seats
                              </div>
                              <div className="flex items-center gap-1">
                                <CheckIcon className="h-3 w-3 text-[#f26522]" /> 4 Bags
                              </div>
                              <div className="flex items-center gap-1">
                                <CheckIcon className="h-3 w-3 text-[#f26522]" /> A/C
                              </div>
                              <div className="flex items-center gap-1">
                                <CheckIcon className="h-3 w-3 text-[#f26522]" /> Auto
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              className="w-full border-[#f26522] text-[#f26522] hover:bg-[#f26522] hover:text-white"
                            >
                              Rent Now
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                    <CarouselItem className="md:hidden pl-2 pr-2 basis-[85%] min-w-0">
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="aspect-[4/3] bg-slate-100 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <CarFrontIcon className="h-16 w-16 text-[#f26522]/40" />
                            </div>
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-purple-600">Premium</Badge>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent h-12"></div>
                          </div>
                          <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-bold text-lg mb-0">Mercedes C-Class</h3>
                                <p className="text-sm text-muted-foreground">Luxury • 2022</p>
                              </div>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant="outline" className="text-xs font-normal">
                                Premium Rentals
                              </Badge>
                              <span className="text-xs text-muted-foreground">(15 reviews)</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                              <div className="text-sm font-medium">From</div>
                              <div className="text-xl font-bold text-[#f26522]">
                                €75<span className="text-sm font-normal text-muted-foreground">/day</span>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-4">
                              <div className="flex items-center gap-1">
                                <CheckIcon className="h-3 w-3 text-[#f26522]" /> 5 Seats
                              </div>
                              <div className="flex items-center gap-1">
                                <CheckIcon className="h-3 w-3 text-[#f26522]" /> 4 Bags
                              </div>
                              <div className="flex items-center gap-1">
                                <CheckIcon className="h-3 w-3 text-[#f26522]" /> Premium Features
                              </div>
                              <div className="flex items-center gap-1">
                                <CheckIcon className="h-3 w-3 text-[#f26522]" /> Auto
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              className="w-full border-[#f26522] text-[#f26522] hover:bg-[#f26522] hover:text-white"
                            >
                              Rent Now
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
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
                    Swipe to see more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">
              GOOD TO KNOW WHEN RENTING IN NORTH MACEDONIA
            </h2>
            <GoodToKnow />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Travel Guides & Destinations</h2>
                <p className="text-muted-foreground">Discover the best places to visit in North Macedonia</p>
              </div>
              <Button asChild variant="outline" className="mt-4 md:mt-0 border-[#f26522] text-[#f26522]">
                <Link href="/travel-guides">View all articles</Link>
              </Button>
            </div>

            {/* Desktop version - grid */}
            <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/travel-guides/10-must-visit-places-around-lake-ohrid" className="block">
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
                      <Badge className="absolute top-4 left-4 bg-[#f26522]">Featured</Badge>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-muted-foreground mb-2">Travel Guide • 5 min read</div>
                      <h3 className="font-bold text-xl mb-2">10 Must-Visit Places Around Lake Ohrid</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        Discover the crystal-clear waters, historic churches, and charming villages around one of
                        Europe's oldest and deepest lakes.
                      </p>
                      <Button variant="outline" className="px-0 text-[#f26522]">
                        Read more
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/travel-guides/exploring-skopjes-old-bazaar" className="block">
                <Card className="overflow-hidden transition-all hover:shadow-md">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Skopje Old Bazaar"
                        width={400}
                        height={200}
                        className="w-full aspect-[16/9] object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-muted-foreground mb-2">City Guide • 4 min read</div>
                      <h3 className="font-bold text-xl mb-2">Exploring Skopje's Old Bazaar</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        Walk through one of the oldest and largest marketplaces in the Balkans, with its authentic
                        Ottoman architecture and vibrant atmosphere.
                      </p>
                      <Button variant="outline" className="px-0 text-[#f26522]">
                        Read more
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/travel-guides/road-trip-through-mavrovo-national-park" className="block">
                <Card className="overflow-hidden transition-all hover:shadow-md">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Mavrovo National Park"
                        width={400}
                        height={200}
                        className="w-full aspect-[16/9] object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-muted-foreground mb-2">Adventure • 6 min read</div>
                      <h3 className="font-bold text-xl mb-2">Road Trip Through Mavrovo National Park</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        Experience breathtaking mountain scenery, pristine lakes, and outdoor activities in North
                        Macedonia's largest national park.
                      </p>
                      <Button variant="outline" className="px-0 text-[#f26522]">
                        Read more
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Mobile version - carousel */}
            <div className="md:hidden">
              <div className="relative">
                <Carousel className="w-full overflow-visible">
                  <CarouselContent className="-ml-2 -mr-2">
                    <CarouselItem className="md:hidden pl-2 pr-2 basis-[85%] min-w-0">
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
                            <Badge className="absolute top-4 left-4 bg-[#f26522]">Featured</Badge>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent h-12"></div>
                          </div>
                          <div className="p-6">
                            <div className="text-sm text-muted-foreground mb-2">Travel Guide • 5 min read</div>
                            <h3 className="font-bold text-xl mb-2">10 Must-Visit Places Around Lake Ohrid</h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                              Discover the crystal-clear waters, historic churches, and charming villages around one of
                              Europe's oldest and deepest lakes.
                            </p>
                            <Button
                              variant="outline"
                              className="px-0 text-[#f26522]"
                              onClick={() =>
                                (window.location.href = "/travel-guides/10-must-visit-places-around-lake-ohrid")
                              }
                            >
                              Read more
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                    <CarouselItem className="md:hidden pl-2 pr-2 basis-[85%] min-w-0">
                      <Card className="overflow-hidden transition-all hover:shadow-md">
                        <CardContent className="p-0">
                          <div className="relative">
                            <Image
                              src="/placeholder.svg?height=200&width=400"
                              alt="Skopje Old Bazaar"
                              width={400}
                              height={200}
                              className="w-full aspect-[16/9] object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent h-12"></div>
                          </div>
                          <div className="p-6">
                            <div className="text-sm text-muted-foreground mb-2">City Guide • 4 min read</div>
                            <h3 className="font-bold text-xl mb-2">Exploring Skopje's Old Bazaar</h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                              Walk through one of the oldest and largest marketplaces in the Balkans, with its authentic
                              Ottoman architecture and vibrant atmosphere.
                            </p>
                            <Button
                              variant="outline"
                              className="px-0 text-[#f26522]"
                              onClick={() => (window.location.href = "/travel-guides/exploring-skopjes-old-bazaar")}
                            >
                              Read more
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                    <CarouselItem className="md:hidden pl-2 pr-2 basis-[85%] min-w-0">
                      <Card className="overflow-hidden transition-all hover:shadow-md">
                        <CardContent className="p-0">
                          <div className="relative">
                            <Image
                              src="/placeholder.svg?height=200&width=400"
                              alt="Mavrovo National Park"
                              width={400}
                              height={200}
                              className="w-full aspect-[16/9] object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent h-12"></div>
                          </div>
                          <div className="p-6">
                            <div className="text-sm text-muted-foreground mb-2">Adventure • 6 min read</div>
                            <h3 className="font-bold text-xl mb-2">Road Trip Through Mavrovo National Park</h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                              Experience breathtaking mountain scenery, pristine lakes, and outdoor activities in North
                              Macedonia's largest national park.
                            </p>
                            <Button
                              variant="outline"
                              className="px-0 text-[#f26522]"
                              onClick={() =>
                                (window.location.href = "/travel-guides/road-trip-through-mavrovo-national-park")
                              }
                            >
                              Read more
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
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
                    Swipe to see more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-[#f26522] to-[#f58220] relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10 mix-blend-overlay"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-xl mx-auto text-center text-white mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Own a Rental Company?</h2>
              <h3 className="text-xl md:text-2xl font-medium mb-6">
                Increase bookings, streamline operations, and maximize revenue
              </h3>
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
                        <h4 className="font-bold text-base md:text-lg">Increase Revenue</h4>
                        <p className="text-white/80 text-sm md:text-base">
                          Our partners see an average 35% boost in bookings
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
                        <h4 className="font-bold text-base md:text-lg">Streamlined Operations</h4>
                        <p className="text-white/80 text-sm md:text-base">
                          Manage your entire fleet from one dashboard
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/20 transition-transform hover:translate-x-2">
                    <div className="flex items-center gap-4">
                      <div className="bg-white rounded-full p-3 shadow-lg shrink-0">
                        <Building2Icon className="h-5 w-5 md:h-6 md:w-6 text-[#f26522]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base md:text-lg">Grow Your Business</h4>
                        <p className="text-white/80 text-sm md:text-base">Access new markets and customer segments</p>
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
                    <Link href="/partner">
                      Partner With Jolzt
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="hidden lg:block order-2">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <Avatar className="h-12 w-12 border-2 border-white">
                          <AvatarFallback className="bg-[#f26522]/20 text-white">AR</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-white/90 text-sm mb-2">
                          "Partnering with Jolzt has increased our bookings by 40% and simplified our operations. Their
                          platform is intuitive and their support team is exceptional."
                        </p>
                        <p className="text-white/70 text-sm font-medium">Auto Rent Ltd., Ohrid</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <Avatar className="h-12 w-12 border-2 border-white">
                          <AvatarFallback className="bg-[#f26522]/20 text-white">MR</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-white/90 text-sm mb-2">
                          "Since joining Jolzt, we've expanded our fleet by 15 vehicles to meet the increased demand.
                          The platform has transformed our business model completely."
                        </p>
                        <p className="text-white/70 text-sm font-medium">Macedonia Rentals, Skopje</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <Avatar className="h-12 w-12 border-2 border-white">
                          <AvatarFallback className="bg-[#f26522]/20 text-white">BT</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-white/90 text-sm mb-2">
                          "The onboarding process was seamless, and we started seeing results within the first month.
                          Jolzt has become an essential part of our business strategy."
                        </p>
                        <p className="text-white/70 text-sm font-medium">Balkan Cars, Skopje Airport</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
      <SiteFooter />
    </div>
  )
}
