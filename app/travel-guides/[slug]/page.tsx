import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import {
  ChevronLeftIcon,
  MapPinIcon,
  ClockIcon,
  ShareIcon,
  BookmarkIcon,
  CarIcon,
  CalendarIcon,
  ChevronRightIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SiteFooter } from "@/components/site-footer"

// This would typically come from a CMS or database
const getArticleData = (slug: string) => {
  // Sample data - in a real app, this would fetch from an API or database
  const articles = {
    "10-must-visit-places-around-lake-ohrid": {
      title: "10 Must-Visit Places Around Lake Ohrid",
      description:
        "Discover the crystal-clear waters, historic churches, and charming villages around one of Europe's oldest and deepest lakes.",
      location: "Ohrid, North Macedonia",
      readTime: "10 min read",
      date: "April 10, 2025",
      image: "/placeholder.svg?height=800&width=1600",
      category: "Nature",
      tags: ["UNESCO", "Lakes", "History", "Churches"],
      content: [
        {
          id: "intro",
          type: "text",
          content:
            "Lake Ohrid, one of Europe's oldest and deepest lakes, is a treasure trove of natural beauty, rich history, and cultural heritage. Straddling the border between North Macedonia and Albania, this UNESCO World Heritage site offers visitors an unforgettable experience with its crystal-clear waters, historic churches, and charming villages.",
        },
        {
          id: "why-visit",
          type: "text",
          content:
            "Whether you're interested in exploring ancient monasteries, relaxing on pristine beaches, or discovering unique flora and fauna, Lake Ohrid has something for everyone. In this guide, we'll take you through the 10 must-visit places around this magnificent lake.",
        },
        {
          id: "ohrid-old-town",
          type: "section",
          title: "1. Ohrid Old Town",
          image: "/placeholder.svg?height=400&width=800",
          imageAlt: "Ohrid Old Town with narrow cobblestone streets and traditional architecture",
          content:
            "Begin your Lake Ohrid adventure in the charming Old Town of Ohrid. With its narrow cobblestone streets, traditional architecture, and breathtaking views of the lake, the Old Town is a perfect introduction to the region's rich history and culture.\n\nAs you wander through the maze-like streets, you'll discover numerous historical buildings, craft shops, and cozy restaurants serving authentic Macedonian cuisine. Don't miss the chance to try local specialties like Ohrid trout, a delicacy that's unique to the lake.",
        },
        {
          id: "st-johns-kaneo",
          type: "section",
          title: "2. Church of St. John at Kaneo",
          image: "/placeholder.svg?height=400&width=800",
          imageAlt: "Church of St. John at Kaneo perched on a cliff overlooking Lake Ohrid",
          content:
            "Perched on a cliff overlooking the crystal-clear waters of Lake Ohrid, the Church of St. John at Kaneo is perhaps the most photographed landmark in North Macedonia. This Byzantine church, built in the 13th century, offers some of the most spectacular views of the lake and surrounding mountains.\n\nThe church's location is truly magical, especially during sunset when the golden light bathes the building and creates a mesmerizing reflection on the lake's surface. It's a perfect spot for photography enthusiasts and those seeking a moment of tranquility.",
        },
        {
          id: "plaosnik",
          type: "section",
          title: "3. Plaošnik Archaeological Site",
          image: "/placeholder.svg?height=400&width=800",
          imageAlt: "Plaošnik Archaeological Site with the reconstructed Church of St. Clement",
          content:
            "Plaošnik is one of the most significant historical and archaeological sites in North Macedonia. This is where St. Clement of Ohrid, a disciple of Saints Cyril and Methodius, established the first Slavic university in the 9th century, making it an important center of Slavic literacy and culture.\n\nThe site features the reconstructed Church of St. Clement and St. Panteleimon, built on the foundations of an early Christian basilica. Ongoing archaeological excavations continue to uncover remnants of different historical periods, from ancient times through the Byzantine and Ottoman eras.",
        },
        {
          id: "samuels-fortress",
          type: "section",
          title: "4. Samuel's Fortress",
          image: "/placeholder.svg?height=400&width=800",
          imageAlt: "Samuel's Fortress walls with panoramic view of Lake Ohrid",
          content:
            "Towering above the Old Town, Samuel's Fortress is a massive medieval stronghold that offers the most panoramic views of Lake Ohrid and the surrounding landscape. Built by Tsar Samuel in the late 10th century, the fortress was once the capital of the First Bulgarian Empire.\n\nToday, visitors can walk along the well-preserved walls and towers, imagining the fortress in its former glory. The view from the top is absolutely breathtaking, especially at sunset when the lake is bathed in golden light.",
        },
        {
          id: "bay-of-bones",
          type: "section",
          title: "5. Bay of Bones Museum",
          image: "/placeholder.svg?height=400&width=800",
          imageAlt: "Reconstructed prehistoric settlement at the Bay of Bones Museum",
          content:
            "The Bay of Bones Museum is a fascinating reconstruction of a prehistoric pile-dwelling settlement that existed at this exact location between 1200 and 600 BC. The museum consists of wooden platforms built on stilts above the water, just as the original settlement would have been.\n\nVisitors can walk through the reconstructed dwellings to get a glimpse of prehistoric life by the lake. The museum also includes an underwater archaeological site that can be explored by diving, offering a unique perspective on this ancient settlement.",
        },
      ],
      relatedArticles: [
        {
          title: "Exploring Skopje's Old Bazaar",
          slug: "exploring-skopjes-old-bazaar",
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          title: "Road Trip Through Mavrovo National Park",
          slug: "road-trip-through-mavrovo-national-park",
          image: "/placeholder.svg?height=200&width=400",
        },
      ],
    },
    "exploring-skopjes-old-bazaar": {
      title: "Exploring Skopje's Old Bazaar",
      description:
        "Walk through one of the oldest and largest marketplaces in the Balkans, with its authentic Ottoman architecture and vibrant atmosphere.",
      location: "Skopje, North Macedonia",
      readTime: "8 min read",
      date: "April 5, 2025",
      image: "/placeholder.svg?height=800&width=1600",
      category: "Culture",
      tags: ["History", "Architecture", "Shopping", "Food"],
      content: [
        {
          id: "intro",
          type: "text",
          content:
            "Skopje's Old Bazaar (Čaršija) is one of the oldest and largest marketplaces in the Balkans, a living testament to the city's rich Ottoman heritage. This vibrant district has been the commercial heart of Skopje since the 12th century, offering visitors a fascinating glimpse into the past while remaining a bustling center of trade and culture.",
        },
        {
          id: "why-visit",
          type: "text",
          content:
            "With its narrow cobblestone streets, historic buildings, traditional craftsmen, and authentic restaurants, the Old Bazaar offers a unique experience that combines history, culture, shopping, and gastronomy. In this guide, we'll take you through the must-see attractions and hidden gems of Skopje's Old Bazaar.",
        },
        {
          id: "historical-significance",
          type: "section",
          title: "1. Historical Significance",
          image: "/placeholder.svg?height=400&width=800",
          imageAlt: "Historic view of Skopje's Old Bazaar with traditional Ottoman architecture",
          content:
            "The Old Bazaar dates back to the 12th century and reached its peak during the Ottoman period (15th-19th centuries). Despite earthquakes, fires, and modernization, it has preserved its authentic character and remains one of the best-preserved Ottoman urban complexes in the Balkans.\n\nThe area is protected by law as a cultural heritage site of particular importance, with over 30 monuments of Islamic and Christian architecture.",
        },
        // Additional sections would be added here
      ],
      relatedArticles: [
        {
          title: "10 Must-Visit Places Around Lake Ohrid",
          slug: "10-must-visit-places-around-lake-ohrid",
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          title: "Road Trip Through Mavrovo National Park",
          slug: "road-trip-through-mavrovo-national-park",
          image: "/placeholder.svg?height=200&width=400",
        },
      ],
    },
    "road-trip-through-mavrovo-national-park": {
      title: "Road Trip Through Mavrovo National Park",
      description:
        "Experience breathtaking mountain scenery, pristine lakes, and outdoor activities in North Macedonia's largest national park.",
      location: "Mavrovo, North Macedonia",
      readTime: "12 min read",
      date: "March 28, 2025",
      image: "/placeholder.svg?height=800&width=1600",
      category: "Nature",
      tags: ["National Park", "Mountains", "Adventure", "Wildlife"],
      content: [
        {
          id: "intro",
          type: "text",
          content:
            "Mavrovo National Park, North Macedonia's largest national park, is a paradise for nature lovers and adventure seekers. Covering over 73,000 hectares of pristine wilderness, the park encompasses the stunning Mavrovo Lake, the Šar Mountains, and the Bistra massif, offering visitors a diverse landscape of peaks, valleys, forests, and waterways.",
        },
        {
          id: "why-visit",
          type: "text",
          content:
            "Whether you're interested in hiking through alpine meadows, skiing down snow-covered slopes, or simply enjoying the tranquility of untouched nature, Mavrovo National Park has something for everyone. In this guide, we'll take you on a road trip through the most spectacular locations in this natural wonderland.",
        },
        {
          id: "mavrovo-lake",
          type: "section",
          title: "1. Mavrovo Lake",
          image: "/placeholder.svg?height=400&width=800",
          imageAlt: "Panoramic view of Mavrovo Lake surrounded by mountains",
          content:
            "Your Mavrovo adventure begins at the stunning Mavrovo Lake, the largest artificial lake in North Macedonia. Created in the 1950s by damming the Mavrovo River, the lake is now a central feature of the national park and a popular destination for fishing, boating, and swimming during the summer months.\n\nThe lake is famous for its submerged church, St. Nicholas, which emerges from the water when levels are low, creating a hauntingly beautiful sight that photographers love to capture.",
        },
        // Additional sections would be added here
      ],
      relatedArticles: [
        {
          title: "10 Must-Visit Places Around Lake Ohrid",
          slug: "10-must-visit-places-around-lake-ohrid",
          image: "/placeholder.svg?height=200&width=400",
        },
        {
          title: "Exploring Skopje's Old Bazaar",
          slug: "exploring-skopjes-old-bazaar",
          image: "/placeholder.svg?height=200&width=400",
        },
      ],
    },
    // Add more articles as needed
  }

  return articles[slug as keyof typeof articles]
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticleData(params.slug)

  if (!article) {
    return {
      title: "Article Not Found | Jolzt Travel Guides",
      description: "The requested travel guide could not be found.",
    }
  }

  return {
    title: `${article.title} | Jolzt Travel Guides`,
    description: article.description,
    openGraph: {
      title: `${article.title} | Jolzt Travel Guides`,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleData(params.slug)

  if (!article) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <p className="mb-6">The travel guide you're looking for could not be found.</p>
        <Button asChild>
          <Link href="/travel-guides">Back to Travel Guides</Link>
        </Button>
      </div>
    )
  }

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
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
              <div className="container mx-auto">
                <Badge className="bg-[#f26522] mb-4">{article.category}</Badge>
                <h1 className="text-3xl md:text-5xl font-bold mb-2">{article.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
                  <div className="flex items-center gap-1">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{article.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Updated: {article.date}</span>
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
              {/* Table of Contents - Left Side (Hidden on Mobile) */}
              <div className="hidden lg:block lg:w-1/4">
                <div className="sticky top-24">
                  <Card className="border-[#f26522]/20">
                    <CardContent className="p-4">
                      <h2 className="text-lg font-bold mb-3">In this article:</h2>
                      <ul className="space-y-2">
                        {article.content
                          .filter((section) => section.type === "section")
                          .map((section) => (
                            <li key={section.id}>
                              <Link href={`#${section.id}`} className="text-[#f26522] hover:underline">
                                {section.title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:w-2/4">
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
                  {article.content
                    .filter((section) => section.type === "text")
                    .map((section) => (
                      <p
                        key={section.id}
                        className={section.id === "intro" ? "text-lg font-medium text-gray-700 mb-4" : "mb-4"}
                      >
                        {section.content}
                      </p>
                    ))}
                </div>

                {/* Article Sections */}
                <div className="space-y-12">
                  {article.content
                    .filter((section) => section.type === "section")
                    .map((section) => (
                      <div key={section.id} id={section.id} className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                        <div className="mb-4 rounded-lg overflow-hidden shadow-md">
                          <Image
                            src={section.image || "/placeholder.svg"}
                            alt={section.imageAlt}
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        <div className="prose max-w-none">
                          {section.content.split("\n\n").map((paragraph, i) => (
                            <p key={i} className="mb-4 text-gray-700 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
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
                    {article.relatedArticles.map((related) => (
                      <Card key={related.slug} className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="relative h-48">
                            <Image
                              src={related.image || "/placeholder.svg"}
                              alt={related.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold mb-2">{related.title}</h3>
                            <Link
                              href={`/travel-guides/${related.slug}`}
                              className="text-[#f26522] text-sm font-medium mt-2 inline-block"
                            >
                              Read more
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar / CTA Section */}
              <div className="lg:w-1/4">
                <div className="sticky top-24 space-y-8">
                  {/* Main CTA */}
                  <Card className="border-[#f26522]/20 overflow-hidden">
                    <div className="bg-[#f26522]/10 p-4">
                      <h3 className="font-bold text-lg text-[#f26522]">Explore {article.location.split(",")[0]}</h3>
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
                            <p className="text-xs text-gray-600">
                              Convenient pickup in Skopje or {article.location.split(",")[0]}
                            </p>
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

                  {/* Travel Tips */}
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-3">Travel Tips for {article.location.split(",")[0]}</h3>
                      <ul className="space-y-2 text-sm">
                        {article.category === "Nature" ? (
                          <>
                            <li className="flex items-start gap-2">
                              <span className="text-[#f26522] font-bold">•</span>
                              <span>Best time to visit: May to September for warm weather and outdoor activities</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#f26522] font-bold">•</span>
                              <span>Allow at least 2-3 days to explore the area thoroughly</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#f26522] font-bold">•</span>
                              <span>Bring comfortable walking shoes for hiking and exploring</span>
                            </li>
                          </>
                        ) : article.category === "Culture" ? (
                          <>
                            <li className="flex items-start gap-2">
                              <span className="text-[#f26522] font-bold">•</span>
                              <span>Best time to visit: Spring and fall for pleasant temperatures</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#f26522] font-bold">•</span>
                              <span>Many shops close on Sundays, plan accordingly</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#f26522] font-bold">•</span>
                              <span>Try local cuisine at traditional restaurants</span>
                            </li>
                          </>
                        ) : (
                          <>
                            <li className="flex items-start gap-2">
                              <span className="text-[#f26522] font-bold">•</span>
                              <span>Best time to visit: May to September for ideal weather</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#f26522] font-bold">•</span>
                              <span>Allow at least 2-3 days to explore the area</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#f26522] font-bold">•</span>
                              <span>Bring comfortable walking shoes for exploring</span>
                            </li>
                          </>
                        )}
                        <li className="flex items-start gap-2">
                          <span className="text-[#f26522] font-bold">•</span>
                          <span>Consider a guided tour to learn about local history and culture</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#f26522] font-bold">•</span>
                          <span>Having a car gives you the freedom to explore at your own pace</span>
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

        {/* Next/Previous Article Navigation */}
        <section className="py-8 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <Link href="/travel-guides/exploring-skopjes-old-bazaar">
                  <ChevronLeftIcon className="h-4 w-4" />
                  <span>Previous: Exploring Skopje's Old Bazaar</span>
                </Link>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <Link href="/travel-guides/road-trip-through-mavrovo-national-park">
                  <span>Next: Road Trip Through Mavrovo National Park</span>
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
