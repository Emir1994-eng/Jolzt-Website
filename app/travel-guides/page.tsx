import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon, SearchIcon, MapPinIcon, CalendarIcon, ArrowRightIcon, ChevronRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteFooter } from "@/components/site-footer"

export default function TravelGuidesPage() {
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
            <Link href="/" className="text-sm font-medium hover:underline flex items-center gap-1">
              <ChevronLeftIcon className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f26522] to-[#f58220] -z-10 h-[40vh]" />
          <div className="container px-4 md:px-6">
            <div className="text-center text-white mb-12 relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Travel Guides & Destinations</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Discover the best places to visit in North Macedonia and plan your perfect road trip
              </p>
            </div>

            <Card className="relative z-10 mb-8 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Search destinations, attractions, or activities"
                      className="pl-10 h-12 text-base border-gray-300 focus:border-[#f26522] focus:ring-[#f26522]"
                    />
                  </div>
                  <Button className="bg-[#f26522] hover:bg-[#e05a1c] h-12 px-6 text-base font-medium">Search</Button>
                </div>
              </CardContent>
            </Card>

            <div className="relative z-10">
              <Tabs defaultValue="all" className="relative z-10">
                <TabsList className="w-full grid grid-cols-4 mb-8 bg-white shadow-sm rounded-md overflow-hidden">
                  <TabsTrigger
                    value="all"
                    className="py-3 data-[state=active]:bg-[#f26522] data-[state=active]:text-white data-[state=active]:shadow-none transition-all"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    value="cities"
                    className="py-3 data-[state=active]:bg-[#f26522] data-[state=active]:text-white data-[state=active]:shadow-none transition-all"
                  >
                    Cities
                  </TabsTrigger>
                  <TabsTrigger
                    value="nature"
                    className="py-3 data-[state=active]:bg-[#f26522] data-[state=active]:text-white data-[state=active]:shadow-none transition-all"
                  >
                    Nature
                  </TabsTrigger>
                  <TabsTrigger
                    value="culture"
                    className="py-3 data-[state=active]:bg-[#f26522] data-[state=active]:text-white data-[state=active]:shadow-none transition-all"
                  >
                    Culture
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-8">
                  <div id="popular-destinations">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Featured Destinations</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      <Card className="overflow-hidden transition-all hover:shadow-md group">
                        <CardContent className="p-0">
                          <div className="relative">
                            <Image
                              src="/placeholder.svg?height=200&width=400"
                              alt="Lake Ohrid"
                              width={400}
                              height={200}
                              className="w-full aspect-[16/9] object-cover transition-transform group-hover:scale-105 duration-300"
                            />
                            <Badge className="absolute top-4 left-4 bg-[#f26522]">Featured</Badge>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                              <div className="flex items-center gap-1 text-white">
                                <MapPinIcon className="h-4 w-4" />
                                <span className="text-sm font-medium">Ohrid</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">
                                Nature
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                UNESCO
                              </Badge>
                              <div className="text-xs text-muted-foreground ml-auto flex items-center gap-1">
                                <CalendarIcon className="h-3 w-3" />
                                Apr 10, 2025
                              </div>
                            </div>
                            <h3 className="font-bold text-xl mb-2 group-hover:text-[#f26522] transition-colors">
                              10 Must-Visit Places Around Lake Ohrid
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                              Discover the crystal-clear waters, historic churches, and charming villages around one of
                              Europe's oldest and deepest lakes. Lake Ohrid is a UNESCO World Heritage site that offers
                              breathtaking natural beauty and rich cultural heritage.
                            </p>
                            <Button variant="link" className="px-0 text-[#f26522] group-hover:underline" asChild>
                              <Link
                                href="/travel-guides/10-must-visit-places-around-lake-ohrid"
                                className="flex items-center"
                              >
                                Read more
                                <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>

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
                            <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white">
                              <MapPinIcon className="h-4 w-4" />
                              <span className="text-sm font-medium">Skopje</span>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">
                                Culture
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                History
                              </Badge>
                              <div className="text-xs text-muted-foreground ml-auto flex items-center gap-1">
                                <CalendarIcon className="h-3 w-3" />
                                Apr 5, 2025
                              </div>
                            </div>
                            <h3 className="font-bold text-xl mb-2">Exploring Skopje's Old Bazaar</h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                              Walk through one of the oldest and largest marketplaces in the Balkans, with its authentic
                              Ottoman architecture and vibrant atmosphere. Discover hidden gems, traditional crafts, and
                              delicious local cuisine.
                            </p>
                            <Button variant="link" className="px-0 text-[#f26522]" asChild>
                              <Link href="/travel-guides/exploring-skopjes-old-bazaar">Read more</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>

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
                            <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white">
                              <MapPinIcon className="h-4 w-4" />
                              <span className="text-sm font-medium">Mavrovo</span>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">
                                Nature
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                Adventure
                              </Badge>
                              <div className="text-xs text-muted-foreground ml-auto flex items-center gap-1">
                                <CalendarIcon className="h-3 w-3" />
                                Mar 28, 2025
                              </div>
                            </div>
                            <h3 className="font-bold text-xl mb-2">Road Trip Through Mavrovo National Park</h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                              Experience breathtaking mountain scenery, pristine lakes, and outdoor activities in North
                              Macedonia's largest national park. Perfect for hiking, skiing, and wildlife spotting
                              throughout the year.
                            </p>
                            <Button variant="link" className="px-0 text-[#f26522]" asChild>
                              <Link href="/travel-guides/road-trip-through-mavrovo-national-park">Read more</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="mt-8">
                      <Button variant="outline" className="border-[#f26522] text-[#f26522]">
                        Load More Articles
                      </Button>
                    </div>
                  </div>

                  <div id="road-trips" className="pt-8 mt-8 border-t border-gray-200">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Road Trip Ideas</h2>
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
                          <Button className="mt-6 bg-[#f26522] hover:bg-[#e05a1c]">
                            Book a Car Now
                            <ArrowRightIcon className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                        <div className="md:w-1/2">
                          <div className="rounded-lg overflow-hidden shadow-md">
                            <Image
                              src="/placeholder.svg?height=400&width=600"
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
                </TabsContent>

                <TabsContent value="cities">
                  <div className="text-center py-12">
                    <h3 className="text-xl font-bold mb-2">City Guides Coming Soon</h3>
                    <p className="text-muted-foreground">
                      We're working on detailed guides for all major cities in North Macedonia.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="nature">
                  <div className="text-center py-12">
                    <h3 className="text-xl font-bold mb-2">Nature Guides Coming Soon</h3>
                    <p className="text-muted-foreground">
                      We're working on comprehensive guides for North Macedonia's natural attractions.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="culture">
                  <div className="text-center py-12">
                    <h3 className="text-xl font-bold mb-2">Cultural Guides Coming Soon</h3>
                    <p className="text-muted-foreground">
                      We're working on in-depth guides to North Macedonia's rich cultural heritage.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-[#f26522] to-[#f58220] text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Travel Newsletter</h2>
              <p className="mb-8">
                Get the latest travel guides, tips, and special offers delivered straight to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Your email address" className="bg-white" />
                <Button className="bg-white text-[#f26522] hover:bg-white/90">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
