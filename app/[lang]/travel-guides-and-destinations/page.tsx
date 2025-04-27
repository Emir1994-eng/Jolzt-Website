import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon, SearchIcon, MapPinIcon, CalendarIcon, ArrowRightIcon, ChevronRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteFooter } from "@/components/site-footer"
import { LanguageSelector } from "@/components/language-selector"

// Translations for the Travel Guides page
const translations = {
  en: {
    backToHome: "Back to Home",
    travelGuides: "Travel Guides & Destinations",
    subtitle: "Discover the best places to visit in North Macedonia and plan your perfect road trip",
    searchPlaceholder: "Search destinations, attractions, or activities",
    search: "Search",
    all: "All",
    cities: "Cities",
    nature: "Nature",
    culture: "Culture",
    featuredDestinations: "Featured Destinations",
    featured: "Featured",
    nature: "Nature",
    unesco: "UNESCO",
    cityGuide: "City Guide",
    history: "History",
    adventure: "Adventure",
    minRead: "min read",
    lakeOhridTitle: "10 Must-Visit Places Around Lake Ohrid",
    lakeOhridDesc:
      "Discover the crystal-clear waters, historic churches, and charming villages around one of Europe's oldest and deepest lakes. Lake Ohrid is a UNESCO World Heritage site that offers breathtaking natural beauty and rich cultural heritage.",
    skopjeTitle: "Exploring Skopje's Old Bazaar",
    skopjeDesc:
      "Walk through one of the oldest and largest marketplaces in the Balkans, with its authentic Ottoman architecture and vibrant atmosphere. Discover hidden gems, traditional crafts, and delicious local cuisine.",
    mavrovoTitle: "Road Trip Through Mavrovo National Park",
    mavrovoDesc:
      "Experience breathtaking mountain scenery, pristine lakes, and outdoor activities in North Macedonia's largest national park. Perfect for hiking, skiing, and wildlife spotting throughout the year.",
    readMore: "Read more",
    loadMore: "Load More Articles",
    roadTripIdeas: "Road Trip Ideas",
    planYourPerfect: "Plan Your Perfect Road Trip",
    roadTripDesc:
      "North Macedonia is perfect for road trips, with diverse landscapes, historic sites, and charming towns all within a short drive of each other. Rent a car with Jolzt and explore at your own pace.",
    chooseDestinations: "Choose your destinations",
    browseTravel: "Browse our travel guides to find inspiration",
    bookPerfectCar: "Book your perfect car",
    selectVehicle: "Select a vehicle that suits your journey",
    hitTheRoad: "Hit the road",
    enjoyFreedom: "Enjoy the freedom to explore at your own pace",
    bookCarNow: "Book a Car Now",
    cityGuidesComingSoon: "City Guides Coming Soon",
    cityGuidesDesc: "We're working on detailed guides for all major cities in North Macedonia.",
    natureGuidesComingSoon: "Nature Guides Coming Soon",
    natureGuidesDesc: "We're working on comprehensive guides for North Macedonia's natural attractions.",
    culturalGuidesComingSoon: "Cultural Guides Coming Soon",
    culturalGuidesDesc: "We're working on in-depth guides to North Macedonia's rich cultural heritage.",
    subscribeNewsletter: "Subscribe to Our Travel Newsletter",
    subscribeDesc: "Get the latest travel guides, tips, and special offers delivered straight to your inbox",
    emailPlaceholder: "Your email address",
    subscribe: "Subscribe",
    viewAll: "View all articles",
    swipeMore: "Swipe to see more",
  },
  mk: {
    backToHome: "Назад кон Почетна",
    travelGuides: "Туристички водичи и дестинации",
    subtitle: "Откријте ги најдобрите места за посета во Северна Македонија и испланирајте го вашето совршено патување",
    searchPlaceholder: "Пребарајте дестинации, атракции или активности",
    search: "Пребарај",
    all: "Сите",
    cities: "Градови",
    nature: "Природа",
    culture: "Култура",
    featuredDestinations: "Истакнати дестинации",
    featured: "Истакнато",
    nature: "Природа",
    unesco: "УНЕСКО",
    cityGuide: "Градски водич",
    history: "Историја",
    adventure: "Авантура",
    minRead: "мин. читање",
    lakeOhridTitle: "10 места кои мора да ги посетите околу Охридското Езеро",
    lakeOhridDesc:
      "Откријте ги кристално чистите води, историските цркви и шармантните села околу едно од најстарите и најдлабоки езера во Европа. Охридското Езеро е место на светското наследство на УНЕСКО кое нуди неверојатна природна убавина и богато културно наследство.",
    skopjeTitle: "Истражување на Старата чаршија во Скопје",
    skopjeDesc:
      "Прошетајте низ еден од најстарите и најголемите пазари на Балканот, со неговата автентична отоманска архитектура и живописна атмосфера. Откријте скриени бисери, традиционални занаети и вкусна локална кујна.",
    mavrovoTitle: "Патување со автомобил низ Националниот парк Маврово",
    mavrovoDesc:
      "Доживејте неверојатни планински пејзажи, чисти езера и активности на отворено во најголемиот национален парк во Северна Македонија. Совршено за пешачење, скијање и набљудување на дивиот свет во текот на целата година.",
    readMore: "Прочитај повеќе",
    loadMore: "Вчитај повеќе статии",
    roadTripIdeas: "Идеи за патување со автомобил",
    planYourPerfect: "Испланирајте го вашето совршено патување",
    roadTripDesc:
      "Северна Македонија е совршена за патувања со автомобил, со разновидни пејзажи, историски локалитети и шармантни градови, сите на кратко возење едни од други. Изнајмете автомобил со Jolzt и истражувајте во свое темпо.",
    chooseDestinations: "Изберете ги вашите дестинации",
    browseTravel: "Прегледајте ги нашите туристички водичи за да најдете инспирација",
    bookPerfectCar: "Резервирајте го вашиот совршен автомобил",
    selectVehicle: "Изберете возило кое одговара на вашето патување",
    hitTheRoad: "На пат",
    enjoyFreedom: "Уживајте во слободата да истражувате во свое темпо",
    bookCarNow: "Резервирајте автомобил сега",
    cityGuidesComingSoon: "Градски водичи наскоро",
    cityGuidesDesc: "Работиме на детални водичи за сите поголеми градови во Северна Македонија.",
    natureGuidesComingSoon: "Водичи за природа наскоро",
    natureGuidesDesc: "Работиме на сеопфатни водичи за природните атракции на Северна Македонија.",
    culturalGuidesComingSoon: "Културни водичи наскоро",
    culturalGuidesDesc: "Работиме на детални водичи за богатото културно наследство на Северна Македонија.",
    subscribeNewsletter: "Претплатете се на нашиот туристички билтен",
    subscribeDesc: "Добивајте ги најновите туристички водичи, совети и специјални понуди директно во вашето сандаче",
    emailPlaceholder: "Вашата е-пошта",
    subscribe: "Претплати се",
    viewAll: "Погледнете ги сите статии",
    swipeMore: "Повлечете за повеќе",
  },
  sq: {
    backToHome: "Kthehu në Ballina",
    travelGuides: "Udhëzues udhëtimi dhe destinacione",
    subtitle:
      "Zbuloni vendet më të mira për të vizituar në Maqedoninë e Veriut dhe planifikoni udhëtimin tuaj të përsosur",
    searchPlaceholder: "Kërkoni destinacione, atraksione ose aktivitete",
    search: "Kërko",
    all: "Të gjitha",
    cities: "Qytete",
    nature: "Natyrë",
    culture: "Kulturë",
    featuredDestinations: "Destinacione të veçanta",
    featured: "I veçantë",
    nature: "Natyrë",
    unesco: "UNESCO",
    cityGuide: "Udhëzues qyteti",
    history: "Histori",
    adventure: "Aventurë",
    minRead: "min lexim",
    lakeOhridTitle: "10 vende që duhet të vizitoni rreth Liqenit të Ohrit",
    lakeOhridDesc:
      "Zbuloni ujërat kristal të pastër, kishat historike dhe fshatrat tërheqëse rreth një prej liqeneve më të vjetra dhe më të thella të Evropës. Liqeni i Ohrit është një vend i Trashëgimisë Botërore të UNESCO-s që ofron bukuri natyrore mahnitëse dhe trashëgimi të pasur kulturore.",
    skopjeTitle: "Eksplorimi i Çarshisë së Vjetër të Shkupit",
    skopjeDesc:
      "Ecni nëpër një nga tregjet më të vjetra dhe më të mëdha në Ballkan, me arkitekturën e saj autentike osmane dhe atmosferën e gjallë. Zbuloni xhevahire të fshehura, zanate tradicionale dhe kuzhinë të shijshme lokale.",
    mavrovoTitle: "Udhëtim me makinë nëpër Parkun Kombëtar Mavrovo",
    mavrovoDesc:
      "Përjetoni pamje mahnitëse malore, liqene të pastër dhe aktivitete në natyrë në parkun më të madh kombëtar të Maqedonisë së Veriut. Perfekt për hiking, ski dhe vëzhgimin e kafshëve të egra gjatë gjithë vitit.",
    readMore: "Lexo më shumë",
    loadMore: "Ngarko më shumë artikuj",
    roadTripIdeas: "Ide për udhëtime me makinë",
    planYourPerfect: "Planifikoni udhëtimin tuaj të përsosur",
    roadTripDesc:
      "Maqedonia e Veriut është perfekte për udhëtime me makinë, me peizazhe të ndryshme, vende historike dhe qytete tërheqëse të gjitha brenda një distance të shkurtër nga njëra-tjetra. Merrni me qira një makinë me Jolzt dhe eksploroni në ritmin tuaj.",
    chooseDestinations: "Zgjidhni destinacionet tuaja",
    browseTravel: "Shfletoni udhëzuesit tanë të udhëtimit për të gjetur frymëzim",
    bookPerfectCar: "Rezervoni makinën tuaj të përsosur",
    selectVehicle: "Zgjidhni një automjet që i përshtatet udhëtimit tuaj",
    hitTheRoad: "Nisuni në rrugë",
    enjoyFreedom: "Shijoni lirinë për të eksploruar në ritmin tuaj",
    bookCarNow: "Rezervoni një makinë tani",
    cityGuidesComingSoon: "Udhëzues qytetesh së shpejti",
    cityGuidesDesc: "Ne po punojmë në udhëzues të detajuar për të gjitha qytetet kryesore në Maqedoninë e Veriut.",
    natureGuidesComingSoon: "Udhëzues natyre së shpejti",
    natureGuidesDesc: "Ne po punojmë në udhëzues gjithëpërfshirës për atraksionet natyrore të Maqedonisë së Veriut.",
    culturalGuidesComingSoon: "Udhëzues kulturorë së shpejti",
    culturalGuidesDesc:
      "Ne po punojmë në udhëzues të thelluar për trashëgiminë e pasur kulturore të Maqedonisë së Veriut.",
    subscribeNewsletter: "Abonohu në buletinin tonë të udhëtimit",
    subscribeDesc:
      "Merrni udhëzuesit më të fundit të udhëtimit, këshilla dhe oferta speciale direkt në kutinë tuaj postare",
    emailPlaceholder: "Adresa juaj e emailit",
    subscribe: "Abonohu",
    viewAll: "Shiko të gjitha artikujt",
    swipeMore: "Rrëshqit për më shumë",
  },
}

export default function TravelGuidesPage({ params }: { params: { lang: string } }) {
  const lang = params.lang || "en"
  const t = translations[lang as keyof typeof translations] || translations.en

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
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
            <Link href={`/${lang}`} className="text-sm font-medium hover:underline flex items-center gap-1">
              <ChevronLeftIcon className="h-4 w-4" />
              {t.backToHome}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f26522] to-[#f58220] -z-10 h-[40vh]" />
          <div className="container px-4 md:px-6">
            <div className="text-center text-white mb-12 relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{t.travelGuides}</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">{t.subtitle}</p>
            </div>

            <Card className="relative z-10 mb-8 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder={t.searchPlaceholder}
                      className="pl-10 h-12 text-base border-gray-300 focus:border-[#f26522] focus:ring-[#f26522]"
                    />
                  </div>
                  <Button className="bg-[#f26522] hover:bg-[#e05a1c] h-12 px-6 text-base font-medium">
                    {t.search}
                  </Button>
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
                    {t.all}
                  </TabsTrigger>
                  <TabsTrigger
                    value="cities"
                    className="py-3 data-[state=active]:bg-[#f26522] data-[state=active]:text-white data-[state=active]:shadow-none transition-all"
                  >
                    {t.cities}
                  </TabsTrigger>
                  <TabsTrigger
                    value="nature"
                    className="py-3 data-[state=active]:bg-[#f26522] data-[state=active]:text-white data-[state=active]:shadow-none transition-all"
                  >
                    {t.nature}
                  </TabsTrigger>
                  <TabsTrigger
                    value="culture"
                    className="py-3 data-[state=active]:bg-[#f26522] data-[state=active]:text-white data-[state=active]:shadow-none transition-all"
                  >
                    {t.culture}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-8">
                  <div id="popular-destinations">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">{t.featuredDestinations}</h2>
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
                            <Badge className="absolute top-4 left-4 bg-[#f26522]">{t.featured}</Badge>
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
                                {t.nature}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {t.unesco}
                              </Badge>
                              <div className="text-xs text-muted-foreground ml-auto flex items-center gap-1">
                                <CalendarIcon className="h-3 w-3" />
                                Apr 10, 2025
                              </div>
                            </div>
                            <h3 className="font-bold text-xl mb-2 group-hover:text-[#f26522] transition-colors">
                              {t.lakeOhridTitle}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{t.lakeOhridDesc}</p>
                            <Button variant="link" className="px-0 text-[#f26522] group-hover:underline" asChild>
                              <Link
                                href={`/${lang}/travel-guides-and-destinations/10-must-visit-places-around-lake-ohrid`}
                                className="flex items-center"
                              >
                                {t.readMore}
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
                                {t.culture}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {t.history}
                              </Badge>
                              <div className="text-xs text-muted-foreground ml-auto flex items-center gap-1">
                                <CalendarIcon className="h-3 w-3" />
                                Apr 5, 2025
                              </div>
                            </div>
                            <h3 className="font-bold text-xl mb-2">{t.skopjeTitle}</h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{t.skopjeDesc}</p>
                            <Button variant="link" className="px-0 text-[#f26522]" asChild>
                              <Link href={`/${lang}/travel-guides-and-destinations/exploring-skopjes-old-bazaar`}>
                                {t.readMore}
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
                                {t.nature}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {t.adventure}
                              </Badge>
                              <div className="text-xs text-muted-foreground ml-auto flex items-center gap-1">
                                <CalendarIcon className="h-3 w-3" />
                                Mar 28, 2025
                              </div>
                            </div>
                            <h3 className="font-bold text-xl mb-2">{t.mavrovoTitle}</h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{t.mavrovoDesc}</p>
                            <Button variant="link" className="px-0 text-[#f26522]" asChild>
                              <Link
                                href={`/${lang}/travel-guides-and-destinations/road-trip-through-mavrovo-national-park`}
                              >
                                {t.readMore}
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="mt-8">
                      <Button variant="outline" className="border-[#f26522] text-[#f26522]">
                        {t.loadMore}
                      </Button>
                    </div>
                  </div>

                  <div id="road-trips" className="pt-8 mt-8 border-t border-gray-200">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">{t.roadTripIdeas}</h2>
                    <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/2">
                          <h3 className="text-xl font-bold mb-4 text-gray-900">{t.planYourPerfect}</h3>
                          <p className="text-gray-600 mb-6">{t.roadTripDesc}</p>
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-[#f26522] text-white flex items-center justify-center shrink-0 mt-0.5">
                                1
                              </div>
                              <div>
                                <h4 className="font-medium">{t.chooseDestinations}</h4>
                                <p className="text-sm text-muted-foreground">{t.browseTravel}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-[#f26522] text-white flex items-center justify-center shrink-0 mt-0.5">
                                2
                              </div>
                              <div>
                                <h4 className="font-medium">{t.bookPerfectCar}</h4>
                                <p className="text-sm text-muted-foreground">{t.selectVehicle}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-[#f26522] text-white flex items-center justify-center shrink-0 mt-0.5">
                                3
                              </div>
                              <div>
                                <h4 className="font-medium">{t.hitTheRoad}</h4>
                                <p className="text-sm text-muted-foreground">{t.enjoyFreedom}</p>
                              </div>
                            </div>
                          </div>
                          <Link href="https://app.jolzt.com" target="_blank" rel="noopener noreferrer" passHref>
                            <Button className="mt-6 bg-[#f26522] hover:bg-[#e05a1c]">
                              {t.bookCarNow}
                              <ArrowRightIcon className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
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
                    <h3 className="text-xl font-bold mb-2">{t.cityGuidesComingSoon}</h3>
                    <p className="text-muted-foreground">{t.cityGuidesDesc}</p>
                  </div>
                </TabsContent>

                <TabsContent value="nature">
                  <div className="text-center py-12">
                    <h3 className="text-xl font-bold mb-2">{t.natureGuidesComingSoon}</h3>
                    <p className="text-muted-foreground">{t.natureGuidesDesc}</p>
                  </div>
                </TabsContent>

                <TabsContent value="culture">
                  <div className="text-center py-12">
                    <h3 className="text-xl font-bold mb-2">{t.culturalGuidesComingSoon}</h3>
                    <p className="text-muted-foreground">{t.culturalGuidesDesc}</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-[#f26522] to-[#f58220] text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">{t.subscribeNewsletter}</h2>
              <p className="mb-8">{t.subscribeDesc}</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder={t.emailPlaceholder} className="bg-white" />
                <Button className="bg-white text-[#f26522] hover:bg-white/90">{t.subscribe}</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} />
    </div>
  )
}
