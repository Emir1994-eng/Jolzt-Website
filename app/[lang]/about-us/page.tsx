import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon, Sparkles, Heart, Zap, Coffee, Car, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { LanguageSelector } from "@/components/language-selector"
import { SiteFooter } from "@/components/site-footer"

// Translations for the About Us page
const translations = {
  en: {
    backToHome: "Back to Home",
    heyThere: "Hey There! We're Jolzt! 👋",
    subtitle: "We're making car rental super fun & ridiculously easy in North Macedonia! 🚗✨",
    ourStory: "Our Story (It's a Fun One!)",
    storyPart1: "It all started when we asked ourselves:",
    storyQuestion: '"Why is renting a car such a pain?"',
    storyPart2:
      "We were tired of endless paperwork, confusing prices, and rental counters that felt like time machines to the 1990s. So we decided to fix it! 🛠️",
    storyPart3:
      "Our platform connects you directly with awesome rental companies in North Macedonia. No more waiting in lines, no more paperwork headaches, and absolutely NO hidden fees! Just tap, book, and drive. Simple as that! ✌️",
    storyPart4:
      "Born with ❤️ in North Macedonia, we're on a mission to bring this hassle-free experience to travelers across the Balkans. Because life's too short for complicated car rentals!",
    thatsUs: "That's Us! 😎",
    whatMakesUsTick: "What Makes Us Tick ⚡",
    secretSauce: "Here's the secret sauce that makes Jolzt so special (don't tell everyone!) 🤫",
    noNastySurprises: "No Nasty Surprises! 🎯",
    noNastySurprisesDesc:
      "We hate hidden fees as much as you do! What you see is what you pay - no exceptions, no excuses, no tiny asterisks!",
    ridiculouslySimple: "Ridiculously Simple! 🙌",
    ridiculouslySimpleDesc:
      "We're obsessed with making car rental so easy your grandma could do it! If it takes more than 3 minutes to book, we've failed!",
    customerLove: "Customer Love! ❤️",
    customerLoveDesc:
      "We're not happy unless you're happy! Our support team doesn't just solve problems - they make your day better!",
    meetOurDreamTeam: "Meet Our Dream Team 🌟",
    dreamTeamDesc: "The awesome humans behind Jolzt who are making car rental fun again!",
    coffeeAddict: "Coffee Addict",
    problemSolver: "Problem Solver",
    techWizard: "Tech Wizard",
    peoplePerson: "People Person",
    readyToExperience: "Ready to Experience Jolzt? 🚀",
    readyToExperienceDesc:
      "Join thousands of happy travelers who've discovered the fun way to rent cars in North Macedonia. Book your first ride today and see what all the fuss is about!",
    bookYourAdventure: "Book Your Adventure Now!",
    couldBeYou: "This could be you! 😎",
    ceoRole: "Co-Founder & CEO",
    ceoDesc: "Tech enthusiast who believes car rental should be as easy as ordering coffee ☕",
    cooRole: "Co-Founder & COO",
    cooDesc: "Operations wizard who can solve any problem with a smile 😊",
    ctoRole: "CTO",
    ctoDesc: "Code ninja who turns coffee into amazing tech solutions ⚡",
    cxRole: "Co-Founder & CBO",
    cxDesc: "Customer happiness champion who won't rest until you're smiling 🌈",
  },
  mk: {
    backToHome: "Назад кон Почетна",
    heyThere: "Здраво! Ние сме Jolzt! 👋",
    subtitle: "Го правиме изнајмувањето на автомобили супер забавно и смешно лесно во Северна Македонија! 🚗✨",
    ourStory: "Нашата Приказна (Забавна е!)",
    storyPart1: "Сè започна кога се запрашавме:",
    storyQuestion: '"Зошто изнајмувањето на автомобил е толку мачно?"',
    storyPart2:
      "Бевме уморни од бескрајни документи, збунувачки цени и шалтери за изнајмување кои изгледаа како временски машини од 1990-тите. Затоа решивме да го поправиме! 🛠️",
    storyPart3:
      "Нашата платформа ве поврзува директно со одлични компании за изнајмување во Северна Македонија. Нема повеќе чекање во редови, нема повеќе главоболки со документи и апсолутно НЕМА скриени трошоци! Само допрете, резервирајте и возете. Едноставно како тоа! ✌️",
    storyPart4:
      "Родено со ❤️ во Северна Македонија, нашата мисија е да го донесеме ова безгрижно искуство на патниците низ Балканот. Бидејќи животот е премногу краток за комплицирано изнајмување на автомобили!",
    thatsUs: "Тоа сме ние! 😎",
    whatMakesUsTick: "Што нè прави посебни ⚡",
    secretSauce: "Еве го тајниот сос што го прави Jolzt толку посебен (не кажувајте на сите!) 🤫",
    noNastySurprises: "Без непријатни изненадувања! 🎯",
    noNastySurprisesDesc:
      "Ги мразиме скриените трошоци колку и вие! Она што го гледате е она што го плаќате - без исклучоци, без изговори, без ситни ѕвездички!",
    ridiculouslySimple: "Смешно едноставно! 🙌",
    ridiculouslySimpleDesc:
      "Опседнати сме со правење на изнајмувањето на автомобили толку лесно што и вашата баба би можела да го направи! Ако ви треба повеќе од 3 минути за да резервирате, ние сме неуспешни!",
    customerLove: "Љубов кон клиентите! ❤️",
    customerLoveDesc:
      "Не сме среќни ако вие не сте среќни! Нашиот тим за поддршка не само што решава проблеми - тие го прават вашиот ден подобар!",
    meetOurDreamTeam: "Запознајте го нашиот тим од соништата 🌟",
    dreamTeamDesc: "Неверојатните луѓе зад Jolzt кои го прават изнајмувањето на автомобили повторно забавно!",
    coffeeAddict: "Зависник од кафе",
    problemSolver: "Решавач на проблеми",
    techWizard: "Технички волшебник",
    peoplePerson: "Човек за луѓе",
    readyToExperience: "Подготвени да го искусите Jolzt? 🚀",
    readyToExperienceDesc:
      "Придружете се на илјадниците среќни патници кои го откриле забавниот начин за изнајмување автомобили во Северна Македонија. Резервирајте го вашето прво возење денес и видете за што е целата врева!",
    bookYourAdventure: "Резервирајте ја вашата авантура сега!",
    couldBeYou: "Ова би можеле да бидете вие! 😎",
    ceoRole: "Ко-основач и Извршен директор",
    ceoDesc:
      "Технолошки ентузијаст кој верува дека изнајмувањето на автомобили треба да биде лесно како нарачување кафе ☕",
    cooRole: "Ко-основач и Оперативен директор",
    cooDesc: "Оперативен волшебник кој може да реши секаков проблем со насмевка 😊",
    ctoRole: "Технички директор",
    ctoDesc: "Код нинџа кој го претвора кафето во неверојатни технолошки решенија ⚡",
    cxRole: "Ко-основач и Директор за бренд",
    cxDesc: "Шампион за среќа на клиентите кој нема да се одмори додека не се насмеете 🌈",
  },
  sq: {
    backToHome: "Kthehu në Ballina",
    heyThere: "Përshëndetje! Ne jemi Jolzt! 👋",
    subtitle:
      "Ne po e bëjmë marrjen me qira të makinave super argëtuese dhe qesharakisht të lehtë në Maqedoninë e Veriut! 🚗✨",
    ourStory: "Historia jonë (Është argëtuese!)",
    storyPart1: "Gjithçka filloi kur pyetëm veten:",
    storyQuestion: '"Pse marrja me qira e një makine është kaq e vështirë?"',
    storyPart2:
      "Ishim të lodhur nga letrat e pafundme, çmimet konfuze dhe sportelet e qirasë që dukeshin si makina kohore në vitet 1990. Kështu që vendosëm ta rregullojmë! 🛠️",
    storyPart3:
      "Platforma jonë ju lidh drejtpërdrejt me kompani të mrekullueshme qiraje në Maqedoninë e Veriut. Jo më pritje në radhë, jo më dhimbje koke me letra dhe absolutisht ASNJË tarifë të fshehur! Thjesht prekni, rezervoni dhe drejtoni. Kaq e thjeshtë! ✌️",
    storyPart4:
      "Lindur me ❤️ në Maqedoninë e Veriut, misioni ynë është të sjellim këtë përvojë pa stres për udhëtarët në të gjithë Ballkanin. Sepse jeta është shumë e shkurtër për qira të komplikuara të makinave!",
    thatsUs: "Këta jemi ne! 😎",
    whatMakesUsTick: "Çfarë na bën të veçantë ⚡",
    secretSauce: "Ja salca sekrete që e bën Jolzt kaq të veçantë (mos i tregoni të gjithëve!) 🤫",
    noNastySurprises: "Pa surpriza të pakëndshme! 🎯",
    noNastySurprisesDesc:
      "Ne i urrejmë tarifat e fshehura aq sa ju! Ajo që shihni është ajo që paguani - pa përjashtime, pa justifikime, pa yje të vegjël!",
    ridiculouslySimple: "Qesharakisht e thjeshtë! 🙌",
    ridiculouslySimpleDesc:
      "Jemi të obsesionuar me bërjen e qirasë së makinave aq të lehtë sa edhe gjyshja juaj mund ta bëjë! Nëse ju duhen më shumë se 3 minuta për të rezervuar, ne kemi dështuar!",
    customerLove: "Dashuri për klientët! ❤️",
    customerLoveDesc:
      "Ne nuk jemi të lumtur nëse ju nuk jeni të lumtur! Ekipi ynë i mbështetjes jo vetëm që zgjidh probleme - ata e bëjnë ditën tuaj më të mirë!",
    meetOurDreamTeam: "Njihuni me ekipin tonë të ëndrrave 🌟",
    dreamTeamDesc: "Njerëzit e mrekullueshëm pas Jolzt që po e bëjnë qiranë e makinave argëtuese përsëri!",
    coffeeAddict: "I varur nga kafeja",
    problemSolver: "Zgjidhës problemesh",
    techWizard: "Magjistar teknik",
    peoplePerson: "Person për njerëzit",
    readyToExperience: "Gati për të përjetuar Jolzt? 🚀",
    readyToExperienceDesc:
      "Bashkohuni me mijëra udhëtarë të lumtur që kanë zbuluar mënyrën argëtuese për të marrë me qira makina në Maqedoninë e Veriut. Rezervoni udhëtimin tuaj të parë sot dhe shihni për çfarë bëhet fjalë!",
    bookYourAdventure: "Rezervoni aventurën tuaj tani!",
    couldBeYou: "Ky mund të jeni ju! 😎",
    ceoRole: "Bashkëthemelues dhe CEO",
    ceoDesc: "Entuziast i teknologjisë që beson se qiraja e makinave duhet të jetë aq e lehtë sa porositja e kafesë ☕",
    cooRole: "Bashkëthemelues dhe COO",
    cooDesc: "Magjistar operacionesh që mund të zgjidhë çdo problem me buzëqeshje 😊",
    ctoRole: "CTO",
    ctoDesc: "Ninja kodi që shndërron kafen në zgjidhje të mahnitshme teknologjike ⚡",
    cxRole: "Drejtor dhe CBO",
    cxDesc: "Kampion i lumturisë së klientëve që nuk do të pushojë derisa të buzëqeshni 🌈",
  },
}

export default function AboutPage({ params }: { params: { lang: string } }) {
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
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f26522] to-[#f58220] -z-10" />
          <div className="absolute -bottom-8 left-0 right-0 h-16 bg-white rounded-t-[50%] -z-5" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center text-white mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-bounce-slow">{t.heyThere}</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">{t.subtitle}</p>
            </div>

            <Card className="relative overflow-hidden border-none shadow-xl bg-white/95 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-[#f26522] to-yellow-500" />
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <PartyPopper className="h-6 w-6 text-[#f26522]" />
                      {t.ourStory}
                    </h2>
                    <p className="text-lg mb-4">
                      {t.storyPart1} <span className="font-bold text-[#f26522]">{t.storyQuestion}</span> 🤔
                    </p>
                    <p className="text-lg mb-4">{t.storyPart2}</p>
                    <p className="text-lg mb-4">{t.storyPart3}</p>
                    <p className="text-lg">{t.storyPart4}</p>
                  </div>
                  <div className="relative h-64 md:h-full min-h-[300px] rounded-lg overflow-hidden transform hover:rotate-2 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-orange-100 to-yellow-200 opacity-50" />
                    <Image
                      src="/about-us-1.jpg?height=400&width=600"
                      alt="Jolzt Team Having Fun"
                      fill
                      className="object-cover mix-blend-overlay"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-[#f26522] bg-white/80 px-6 py-3 rounded-full shadow-lg">
                        {t.thatsUs}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-repeat" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#f26522]">{t.whatMakesUsTick}</h2>
              <p className="text-xl max-w-2xl mx-auto text-gray-600">{t.secretSauce}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-orange-50 to-white border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-[#f26522]/10 flex items-center justify-center mb-4 animate-pulse">
                      <Zap className="h-10 w-10 text-[#f26522]" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{t.noNastySurprises}</h3>
                    <p className="text-lg text-gray-600">{t.noNastySurprisesDesc}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-white border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-[#f26522]/10 flex items-center justify-center mb-4 animate-pulse">
                      <Sparkles className="h-10 w-10 text-[#f26522]" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{t.ridiculouslySimple}</h3>
                    <p className="text-lg text-gray-600">{t.ridiculouslySimpleDesc}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-white border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-[#f26522]/10 flex items-center justify-center mb-4 animate-pulse">
                      <Heart className="h-10 w-10 text-[#f26522]" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{t.customerLove}</h3>
                    <p className="text-lg text-gray-600">{t.customerLoveDesc}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-repeat" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#f26522]">{t.meetOurDreamTeam}</h2>
              <p className="text-xl max-w-2xl mx-auto text-gray-600">{t.dreamTeamDesc}</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300 border-none bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-28 w-28 mb-4 ring-4 ring-[#f26522]/20">
                      <AvatarFallback className="bg-[#f26522]/10 text-[#f26522] text-2xl">EZ</AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-xl mb-1">Emir Zekjovikj</h3>
                    <p className="text-sm text-[#f26522] mb-2">{t.ceoRole}</p>
                    <p className="text-lg text-gray-600">{t.ceoDesc}</p>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Coffee className="h-4 w-4 mr-1" /> {t.coffeeAddict}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300 border-none bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-28 w-28 mb-4 ring-4 ring-[#f26522]/20">
                      <AvatarFallback className="bg-[#f26522]/10 text-[#f26522] text-2xl">MS</AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-xl mb-1">Marko Strahilov</h3>
                    <p className="text-sm text-[#f26522] mb-2">{t.cooRole}</p>
                    <p className="text-lg text-gray-600">{t.cooDesc}</p>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Sparkles className="h-4 w-4 mr-1" /> {t.problemSolver}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300 border-none bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-28 w-28 mb-4 ring-4 ring-[#f26522]/20">
                      <AvatarFallback className="bg-[#f26522]/10 text-[#f26522] text-2xl">BP</AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-xl mb-1">Bogdan Prodanov</h3>
                    <p className="text-sm text-[#f26522] mb-2">{t.cxRole}</p>
                    <p className="text-lg text-gray-600">{t.cxDesc}</p>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Heart className="h-4 w-4 mr-1" /> {t.peoplePerson}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300 border-none bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-28 w-28 mb-4 ring-4 ring-[#f26522]/20">
                      <AvatarFallback className="bg-[#f26522]/10 text-[#f26522] text-2xl">MM</AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-xl mb-1">Mahir Mersimoski</h3>
                    <p className="text-sm text-[#f26522] mb-2">{t.ctoRole}</p>
                    <p className="text-lg text-gray-600">{t.ctoDesc}</p>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Zap className="h-4 w-4 mr-1" /> {t.techWizard}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-[#f26522] to-[#f58220] text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-repeat" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.readyToExperience}</h2>
                <p className="text-xl mb-6">{t.readyToExperienceDesc}</p>
                <Link href={`https://app.jolzt.com/`} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-white text-[#f26522] hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    <Car className="h-5 w-5 mr-2" /> {t.bookYourAdventure}
                  </Button>
                </Link>
              </div>
              <div className="relative h-64 md:h-96 bg-white/10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/about-us-2.jpg?height=400&width=600"
                  alt="Happy Jolzt Customer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 text-[#f26522] px-6 py-3 rounded-full font-bold text-xl shadow-lg transform rotate-6">
                    {t.couldBeYou}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} />
    </div>
  )
}
