import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ChevronLeftIcon, CheckIcon, ChevronRightIcon, ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LanguageSelector, useTranslation, LanguageProvider } from "@/components/language-selector"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: 'How It Works - Jolzt Car Rental',
  description: 'Learn how to easily rent a car in North Macedonia with our step-by-step guide.',
}

export default function HowItWorksPage() {
  return (
    <LanguageProvider>
      <HowItWorksContent />
    </LanguageProvider>
  )
}

function HowItWorksContent() {
  const { t } = useTranslation()

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
            <Link href="/" className="text-sm font-medium hover:underline flex items-center gap-1">
              <ChevronLeftIcon className="h-4 w-4" />
              {t("home")}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">How Jolzt Works</h1>
              <p className="text-xl text-gray-600">
                Renting a car has never been easier. Learn how Jolzt is revolutionizing car rental in North Macedonia.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-colors shadow-lg">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-[#f26522] border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="renters" className="relative z-10">
              <div className="max-w-md mx-auto mb-12">
                <TabsList className="w-full grid grid-cols-2 bg-white p-1 rounded-md shadow-sm">
                  <TabsTrigger
                    value="renters"
                    className="rounded-sm data-[state=active]:bg-[#f26522] data-[state=active]:text-white"
                  >
                    For Renters
                  </TabsTrigger>
                  <TabsTrigger
                    value="companies"
                    className="rounded-sm data-[state=active]:bg-[#f26522] data-[state=active]:text-white"
                  >
                    For Rental Companies
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="renters">
                <div className="max-w-5xl mx-auto">
                  <div className="grid gap-16 md:gap-24">
                    {/* Step 1 */}
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/2 order-2 md:order-1">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f26522] text-white flex items-center justify-center text-xl font-bold">
                            1
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Search & Compare</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                              Enter your pickup location, dates, and times to see all available cars from multiple
                              rental companies in one place.
                            </p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Compare prices from multiple rental companies</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">
                                  See real-time availability and transparent pricing
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Filter by car type, features, and more</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/2 order-1 md:order-2">
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <Image
                            src="/placeholder.svg?height=400&width=600"
                            alt="Search and Compare"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/2">
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <Image
                            src="/placeholder.svg?height=400&width=600"
                            alt="Book in Minutes"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-1/2">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f26522] text-white flex items-center justify-center text-xl font-bold">
                            2
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Book in Minutes</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                              Select your car and complete your booking in just a few taps. No lengthy forms or
                              complicated processes.
                            </p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Quick and easy booking process</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Secure payment options</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Instant confirmation</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/2 order-2 md:order-1">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f26522] text-white flex items-center justify-center text-xl font-bold">
                            3
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Skip the Counter</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                              No more waiting in long lines at rental counters. With Jolzt, you can go straight to your
                              car with our digital check-in process.
                            </p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Digital check-in through the Jolzt app</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">No waiting in lines or filling out paperwork</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Get to your car in minutes</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/2 order-1 md:order-2">
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <Image
                            src="/placeholder.svg?height=400&width=600"
                            alt="Skip the Counter"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/2">
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <Image
                            src="/placeholder.svg?height=400&width=600"
                            alt="Drive and Return"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-1/2">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f26522] text-white flex items-center justify-center text-xl font-bold">
                            4
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Drive & Return</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                              Enjoy your trip with peace of mind knowing that 24/7 roadside assistance is included. When
                              it's time to return, simply park the car and complete the digital check-out.
                            </p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">24/7 roadside assistance included</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Easy digital check-out process</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">No surprise fees or charges</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-16 text-center">
                  <Link href="https://app.jolzt.com" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-[#f26522] hover:bg-[#e05a1c] px-8 py-6 h-auto text-lg rounded-md shadow-md"
                    >
                      Download the App & Start Renting
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="companies">
                <div className="max-w-5xl mx-auto">
                  <div className="grid gap-16 md:gap-24">
                    {/* Step 1 */}
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/2 order-2 md:order-1">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f26522] text-white flex items-center justify-center text-xl font-bold">
                            1
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Join the Platform</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                              Register your rental company on Jolzt by providing your business information and
                              completing the verification process.
                            </p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Simple registration process</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Dedicated onboarding support</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">No upfront costs or monthly fees</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/2 order-1 md:order-2">
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <Image
                            src="/placeholder.svg?height=400&width=600"
                            alt="Join the Platform"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/2">
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <Image
                            src="/placeholder.svg?height=400&width=600"
                            alt="List Your Fleet"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-1/2">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f26522] text-white flex items-center justify-center text-xl font-bold">
                            2
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">List Your Fleet</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                              Add your vehicles to the Jolzt platform with detailed information, photos, and pricing.
                              Our intuitive dashboard makes it easy to manage your fleet.
                            </p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Easy-to-use fleet management dashboard</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Set your own pricing and availability</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Bulk upload options for larger fleets</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/2 order-2 md:order-1">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f26522] text-white flex items-center justify-center text-xl font-bold">
                            3
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Manage Bookings</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                              Receive booking notifications in real-time and manage all your reservations through the
                              Jolzt partner dashboard.
                            </p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Real-time booking notifications</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Centralized booking management</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Digital check-in/check-out process</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/2 order-1 md:order-2">
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <Image
                            src="/placeholder.svg?height=400&width=600"
                            alt="Manage Bookings"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/2">
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <Image
                            src="/placeholder.svg?height=400&width=600"
                            alt="Grow Your Business"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-1/2">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f26522] text-white flex items-center justify-center text-xl font-bold">
                            4
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">Grow Your Business</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                              Increase your revenue and expand your customer base with Jolzt's marketing and promotional
                              tools.
                            </p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Access to a wider customer base</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Performance analytics and insights</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Marketing and promotional support</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-16 text-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#f26522] hover:bg-[#e05a1c] px-8 py-6 h-auto text-lg rounded-md shadow-md"
                    >
                      <Link href="/partner" className="flex items-center">
                        Become a Jolzt Partner
                        <ArrowRightIcon className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Find answers to common questions about using Jolzt for your car rental needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Is insurance included?</h3>
                    <p className="text-gray-600">
                      Yes, all rentals include basic insurance coverage. Additional coverage options are available
                      during the booking process if you want extra protection.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Can I modify or cancel my booking?</h3>
                    <p className="text-gray-600">
                      Yes, you can modify or cancel your booking through the app or website. Free cancellation is
                      available up to 48 hours before your scheduled pickup time.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">What payment methods are accepted?</h3>
                    <p className="text-gray-600">
                      We accept all major credit cards in the renter's name. Prepaid or debit cards are not accepted.
                      Some premium car categories may require 2 credit cards.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Is there a mileage limit?</h3>
                    <p className="text-gray-600">
                      Most of our rentals come with unlimited mileage. If there is a mileage restriction on your
                      specific rental, it will be clearly indicated during the booking process.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-10">
                <Button asChild className="bg-[#f26522] hover:bg-[#e05a1c]">
                  <Link href="/contact" className="flex items-center">
                    View All FAQs
                    <ChevronRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
