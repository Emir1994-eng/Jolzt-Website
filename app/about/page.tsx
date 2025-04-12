import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon, Sparkles, Heart, Zap, Coffee, Car, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { LanguageSelector } from "@/components/language-selector"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
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
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f26522] to-[#f58220] -z-10" />
          <div className="absolute -bottom-8 left-0 right-0 h-16 bg-white rounded-t-[50%] -z-5" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center text-white mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-bounce-slow">Hey There! We're Jolzt! 👋</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                We're making car rental super fun & ridiculously easy in North Macedonia! 🚗✨
              </p>
            </div>

            <Card className="relative overflow-hidden border-none shadow-xl bg-white/95 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-[#f26522] to-yellow-500" />
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <PartyPopper className="h-6 w-6 text-[#f26522]" />
                      Our Story (It's a Fun One!)
                    </h2>
                    <p className="text-lg mb-4">
                      It all started when we asked ourselves:{" "}
                      <span className="font-bold text-[#f26522]">"Why is renting a car such a pain?"</span> 🤔
                    </p>
                    <p className="text-lg mb-4">
                      We were tired of endless paperwork, confusing prices, and rental counters that felt like time
                      machines to the 1990s. So we decided to fix it! 🛠️
                    </p>
                    <p className="text-lg mb-4">
                      Our platform connects you directly with awesome rental companies in North Macedonia. No more
                      waiting in lines, no more paperwork headaches, and absolutely NO hidden fees! Just tap, book, and
                      drive. Simple as that! ✌️
                    </p>
                    <p className="text-lg">
                      Born with ❤️ in North Macedonia, we're on a mission to bring this hassle-free experience to
                      travelers across the Balkans. Because life's too short for complicated car rentals!
                    </p>
                  </div>
                  <div className="relative h-64 md:h-full min-h-[300px] rounded-lg overflow-hidden transform hover:rotate-2 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-orange-100 to-yellow-200 opacity-50" />
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Jolzt Team Having Fun"
                      fill
                      className="object-cover mix-blend-overlay"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-[#f26522] bg-white/80 px-6 py-3 rounded-full shadow-lg">
                        That's Us! 😎
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=200&width=200')] opacity-5 bg-repeat" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#f26522]">What Makes Us Tick ⚡</h2>
              <p className="text-xl max-w-2xl mx-auto text-gray-600">
                Here's the secret sauce that makes Jolzt so special (don't tell everyone!) 🤫
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-orange-50 to-white border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-[#f26522]/10 flex items-center justify-center mb-4 animate-pulse">
                      <Zap className="h-10 w-10 text-[#f26522]" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">No Nasty Surprises! 🎯</h3>
                    <p className="text-lg text-gray-600">
                      We hate hidden fees as much as you do! What you see is what you pay - no exceptions, no excuses,
                      no tiny asterisks!
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-white border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-[#f26522]/10 flex items-center justify-center mb-4 animate-pulse">
                      <Sparkles className="h-10 w-10 text-[#f26522]" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">Ridiculously Simple! 🙌</h3>
                    <p className="text-lg text-gray-600">
                      We're obsessed with making car rental so easy your grandma could do it! If it takes more than 3
                      minutes to book, we've failed!
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-white border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-[#f26522]/10 flex items-center justify-center mb-4 animate-pulse">
                      <Heart className="h-10 w-10 text-[#f26522]" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">Customer Love! ❤️</h3>
                    <p className="text-lg text-gray-600">
                      We're not happy unless you're happy! Our support team doesn't just solve problems - they make your
                      day better!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=200&width=200')] opacity-5 bg-repeat" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#f26522]">Meet Our Dream Team 🌟</h2>
              <p className="text-xl max-w-2xl mx-auto text-gray-600">
                The awesome humans behind Jolzt who are making car rental fun again!
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300 border-none bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-28 w-28 mb-4 ring-4 ring-[#f26522]/20">
                      <AvatarFallback className="bg-[#f26522]/10 text-[#f26522] text-2xl">MK</AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-xl mb-1">Marko Kostovski</h3>
                    <p className="text-sm text-[#f26522] mb-2">Co-Founder & CEO</p>
                    <p className="text-lg text-gray-600">
                      Tech enthusiast who believes car rental should be as easy as ordering coffee ☕
                    </p>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Coffee className="h-4 w-4 mr-1" /> Coffee Addict
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300 border-none bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-28 w-28 mb-4 ring-4 ring-[#f26522]/20">
                      <AvatarFallback className="bg-[#f26522]/10 text-[#f26522] text-2xl">ET</AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-xl mb-1">Elena Trajkovska</h3>
                    <p className="text-sm text-[#f26522] mb-2">Co-Founder & COO</p>
                    <p className="text-lg text-gray-600">Operations wizard who can solve any problem with a smile 😊</p>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Sparkles className="h-4 w-4 mr-1" /> Problem Solver
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300 border-none bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-28 w-28 mb-4 ring-4 ring-[#f26522]/20">
                      <AvatarFallback className="bg-[#f26522]/10 text-[#f26522] text-2xl">NS</AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-xl mb-1">Nikola Stefanovski</h3>
                    <p className="text-sm text-[#f26522] mb-2">CTO</p>
                    <p className="text-lg text-gray-600">Code ninja who turns coffee into amazing tech solutions ⚡</p>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Zap className="h-4 w-4 mr-1" /> Tech Wizard
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300 border-none bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-28 w-28 mb-4 ring-4 ring-[#f26522]/20">
                      <AvatarFallback className="bg-[#f26522]/10 text-[#f26522] text-2xl">AP</AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-xl mb-1">Ana Petrovska</h3>
                    <p className="text-sm text-[#f26522] mb-2">Head of Customer Experience</p>
                    <p className="text-lg text-gray-600">
                      Customer happiness champion who won't rest until you're smiling 🌈
                    </p>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Heart className="h-4 w-4 mr-1" /> People Person
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-[#f26522] to-[#f58220] text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] opacity-10 bg-repeat" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Experience Jolzt? 🚀</h2>
                <p className="text-xl mb-6">
                  Join thousands of happy travelers who've discovered the fun way to rent cars in North Macedonia. Book
                  your first ride today and see what all the fuss is about!
                </p>
                <Button
                  size="lg"
                  className="bg-white text-[#f26522] hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <Car className="h-5 w-5 mr-2" /> Book Your Adventure Now!
                </Button>
              </div>
              <div className="relative h-64 md:h-96 bg-white/10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Happy Jolzt Customer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 text-[#f26522] px-6 py-3 rounded-full font-bold text-xl shadow-lg transform rotate-6">
                    This could be you! 😎
                  </div>
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
