import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon, MapPinIcon, ClockIcon, ShareIcon, BookmarkIcon, CarIcon, CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteFooter } from "@/components/site-footer"
import { Separator } from "@/components/ui/separator"

export default function LakeOhridGuidePage() {
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
            <Link href="/travel-guides" className="text-sm font-medium hover:underline flex items-center gap-1">
              <ChevronLeftIcon className="h-4 w-4" />
              Back to Travel Guides
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="h-[40vh] md:h-[50vh] relative">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Lake Ohrid panoramic view"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
              <div className="container mx-auto">
                <Badge className="bg-[#f26522] mb-4">UNESCO World Heritage</Badge>
                <h1 className="text-3xl md:text-5xl font-bold mb-2">10 Must-Visit Places Around Lake Ohrid</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
                  <div className="flex items-center gap-1">
                    <MapPinIcon className="h-4 w-4" />
                    <span>Ohrid, North Macedonia</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    <span>10 min read</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Updated: April 10, 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:w-2/3">
                {/* Social Share */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="rounded-full">
                      <ShareIcon className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      <BookmarkIcon className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                  </div>
                </div>

                {/* Introduction */}
                <div className="prose max-w-none mb-8">
                  <p className="text-lg font-medium text-gray-700 mb-4">
                    Lake Ohrid, one of Europe's oldest and deepest lakes, is a treasure trove of natural beauty, rich
                    history, and cultural heritage. Straddling the border between North Macedonia and Albania, this
                    UNESCO World Heritage site offers visitors an unforgettable experience with its crystal-clear
                    waters, historic churches, and charming villages.
                  </p>
                  <p className="mb-4">
                    Whether you're interested in exploring ancient monasteries, relaxing on pristine beaches, or
                    discovering unique flora and fauna, Lake Ohrid has something for everyone. In this guide, we'll take
                    you through the 10 must-visit places around this magnificent lake.
                  </p>
                </div>

                {/* Table of Contents */}
                <Card className="mb-8 border-[#f26522]/20">
                  <CardContent className="p-4">
                    <h2 className="text-lg font-bold mb-3">In this article:</h2>
                    <ul className="space-y-2">
                      <li>
                        <Link href="#ohrid-old-town" className="text-[#f26522] hover:underline">
                          1. Ohrid Old Town
                        </Link>
                      </li>
                      <li>
                        <Link href="#st-johns-kaneo" className="text-[#f26522] hover:underline">
                          2. Church of St. John at Kaneo
                        </Link>
                      </li>
                      <li>
                        <Link href="#plaosnik" className="text-[#f26522] hover:underline">
                          3. Plaošnik Archaeological Site
                        </Link>
                      </li>
                      <li>
                        <Link href="#samuel-fortress" className="text-[#f26522] hover:underline">
                          4. Samuel's Fortress
                        </Link>
                      </li>
                      <li>
                        <Link href="#bay-of-bones" className="text-[#f26522] hover:underline">
                          5. Bay of Bones Museum
                        </Link>
                      </li>
                      <li>
                        <Link href="#more" className="text-[#f26522] hover:underline">
                          And more...
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Article Sections */}
                <div className="space-y-12">
                  {/* Section 1 */}
                  <div id="ohrid-old-town">
                    <h2 className="text-2xl font-bold mb-4">1. Ohrid Old Town</h2>
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=800"
                        alt="Ohrid Old Town with narrow cobblestone streets and traditional architecture"
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="prose max-w-none">
                      <p>
                        Begin your Lake Ohrid adventure in the charming Old Town of Ohrid. With its narrow cobblestone
                        streets, traditional architecture, and breathtaking views of the lake, the Old Town is a perfect
                        introduction to the region's rich history and culture.
                      </p>
                      <p>
                        As you wander through the maze-like streets, you'll discover numerous historical buildings,
                        craft shops, and cozy restaurants serving authentic Macedonian cuisine. Don't miss the chance to
                        try local specialties like Ohrid trout, a delicacy that's unique to the lake.
                      </p>
                      <h3 className="text-xl font-bold mt-4 mb-2">What to see in Ohrid Old Town:</h3>
                      <ul>
                        <li>The Ancient Theatre - a Hellenistic theatre dating back to 200 BC</li>
                        <li>Robevi Family House - a beautiful example of traditional Ohrid architecture</li>
                        <li>The main pedestrian street with numerous shops and cafes</li>
                        <li>The Upper Gate, one of the entrances to the old fortified town</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div id="st-johns-kaneo">
                    <h2 className="text-2xl font-bold mb-4">2. Church of St. John at Kaneo</h2>
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=800"
                        alt="Church of St. John at Kaneo perched on a cliff overlooking Lake Ohrid"
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="prose max-w-none">
                      <p>
                        Perched on a cliff overlooking the crystal-clear waters of Lake Ohrid, the Church of St. John at
                        Kaneo is perhaps the most photographed landmark in North Macedonia. This Byzantine church, built
                        in the 13th century, offers some of the most spectacular views of the lake and surrounding
                        mountains.
                      </p>
                      <p>
                        The church's location is truly magical, especially during sunset when the golden light bathes
                        the building and creates a mesmerizing reflection on the lake's surface. It's a perfect spot for
                        photography enthusiasts and those seeking a moment of tranquility.
                      </p>
                      <blockquote className="italic border-l-4 border-[#f26522] pl-4 my-4">
                        "The Church of St. John at Kaneo is not just a religious monument; it's a symbol of Ohrid's
                        enduring beauty and spiritual significance." - Local Guide
                      </blockquote>
                      <p>
                        A wooden walkway along the lakeshore connects the church to Ohrid's Old Town, offering a
                        pleasant stroll with continuous views of the lake. The interior of the church, though small,
                        contains valuable frescoes that have survived centuries.
                      </p>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div id="plaosnik">
                    <h2 className="text-2xl font-bold mb-4">3. Plaošnik Archaeological Site</h2>
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=800"
                        alt="Plaošnik Archaeological Site with the reconstructed Church of St. Clement"
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="prose max-w-none">
                      <p>
                        Plaošnik is one of the most significant historical and archaeological sites in North Macedonia.
                        This is where St. Clement of Ohrid, a disciple of Saints Cyril and Methodius, established the
                        first Slavic university in the 9th century, making it an important center of Slavic literacy and
                        culture.
                      </p>
                      <p>
                        The site features the reconstructed Church of St. Clement and St. Panteleimon, built on the
                        foundations of an early Christian basilica. Ongoing archaeological excavations continue to
                        uncover remnants of different historical periods, from ancient times through the Byzantine and
                        Ottoman eras.
                      </p>
                      <h3 className="text-xl font-bold mt-4 mb-2">Highlights of Plaošnik:</h3>
                      <ul>
                        <li>The reconstructed Church of St. Clement with beautiful modern frescoes</li>
                        <li>Remains of a 5th-century baptistery with a well-preserved mosaic floor</li>
                        <li>Archaeological excavations showcasing different historical layers</li>
                        <li>Panoramic views of Lake Ohrid and the surrounding landscape</li>
                      </ul>
                    </div>
                  </div>

                  {/* Continue with more sections... */}
                  <div id="more" className="text-center py-4">
                    <p className="text-gray-600 mb-4">
                      This article continues with more amazing places around Lake Ohrid, including Samuel's Fortress,
                      Bay of Bones Museum, St. Naum Monastery, Galicica National Park, and more.
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Author"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">Written by Travel Expert</h3>
                      <p className="text-sm text-gray-600">
                        Our travel expert has explored North Macedonia extensively and specializes in cultural and
                        historical tourism.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative h-48">
                          <Image
                            src="/placeholder.svg?height=200&width=400"
                            alt="Skopje Old Bazaar"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold mb-2">Exploring Skopje's Old Bazaar</h3>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            Walk through one of the oldest and largest marketplaces in the Balkans, with its authentic
                            Ottoman architecture and vibrant atmosphere.
                          </p>
                          <Link href="#" className="text-[#f26522] text-sm font-medium mt-2 inline-block">
                            Read more
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative h-48">
                          <Image
                            src="/placeholder.svg?height=200&width=400"
                            alt="Mavrovo National Park"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold mb-2">Road Trip Through Mavrovo National Park</h3>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            Experience breathtaking mountain scenery, pristine lakes, and outdoor activities in North
                            Macedonia's largest national park.
                          </p>
                          <Link href="#" className="text-[#f26522] text-sm font-medium mt-2 inline-block">
                            Read more
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Sidebar / CTA Section */}
              <div className="lg:w-1/3">
                <div className="sticky top-24 space-y-8">
                  {/* Main CTA */}
                  <Card className="border-[#f26522]/20 overflow-hidden">
                    <div className="bg-[#f26522]/10 p-4">
                      <h3 className="font-bold text-lg text-[#f26522]">Explore Lake Ohrid</h3>
                      <p className="text-sm text-gray-700">Book your car now and discover all these amazing places</p>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        <div className="flex items-start gap-2">
                          <CarIcon className="h-5 w-5 text-[#f26522] mt-0.5" />
                          <div>
                            <h4 className="font-medium text-sm">Freedom to Explore</h4>
                            <p className="text-xs text-gray-600">Visit all locations at your own pace</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPinIcon className="h-5 w-5 text-[#f26522] mt-0.5" />
                          <div>
                            <h4 className="font-medium text-sm">Multiple Pickup Locations</h4>
                            <p className="text-xs text-gray-600">Convenient pickup in Skopje or Ohrid</p>
                          </div>
                        </div>
                        <Separator />
                        <div className="text-center">
                          <p className="text-sm font-medium mb-2">Starting from</p>
                          <p className="text-2xl font-bold text-[#f26522]">
                            €45<span className="text-sm">/day</span>
                          </p>
                          <p className="text-xs text-gray-600 mb-4">All-inclusive pricing, no hidden fees</p>
                          <Button className="w-full bg-[#f26522] hover:bg-[#e05a1c]">Book Your Car Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Map */}
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-3">Lake Ohrid Map</h3>
                      <div className="aspect-square bg-gray-100 rounded-md relative overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=400&width=400"
                          alt="Map of Lake Ohrid with points of interest"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        Interactive map showing all the locations mentioned in this guide
                      </p>
                    </CardContent>
                  </Card>

                  {/* Travel Tips */}
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-3">Travel Tips</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-[#f26522] font-bold">•</span>
                          <span>Best time to visit: May to September for warm weather and swimming</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f26522] font-bold">•</span>
                          <span>Allow at least 2-3 days to explore the lake and its surroundings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f26522] font-bold">•</span>
                          <span>Try the famous Ohrid trout, a local delicacy (sustainably farmed)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f26522] font-bold">•</span>
                          <span>Bring comfortable walking shoes for exploring the old town</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f26522] font-bold">•</span>
                          <span>Consider a boat tour to see the lake from a different perspective</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Newsletter */}
                  <Card className="bg-gray-50">
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2">Get Travel Updates</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Subscribe to our newsletter for the latest travel guides and special offers
                      </p>
                      <div className="space-y-2">
                        <input
                          type="email"
                          placeholder="Your email address"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                        <Button className="w-full bg-[#f26522] hover:bg-[#e05a1c]">Subscribe</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
