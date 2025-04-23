"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon, CheckIcon, ChevronRightIcon, ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LanguageSelector } from "@/components/language-selector"
import { SiteFooter } from "@/components/site-footer"

// Translations for the How It Works page
const translations = {
  en: {
    home: "Home",
    howJolztWorks: "How Jolzt Works",
    description:
      "Renting a car has never been easier. Learn how Jolzt is revolutionizing car rental in North Macedonia.",
    forRenters: "For Renters",
    forRentalCompanies: "For Rental Companies",
    searchCompare: "Search & Compare",
    searchCompareDesc:
      "Enter your pickup location, dates, and times to see all available cars from multiple rental companies in one place.",
    comparePrice: "Compare prices from multiple rental companies",
    seeRealTime: "See real-time availability and transparent pricing",
    filterByCar: "Filter by car type, features, and more",
    bookInMinutes: "Book in Minutes",
    bookInMinutesDesc:
      "Select your car and complete your booking in just a few taps. No lengthy forms or complicated processes.",
    quickEasy: "Quick and easy booking process",
    securePayment: "Secure payment options",
    instantConfirmation: "Instant confirmation",
    skipCounter: "Skip the Counter",
    skipCounterDesc:
      "No more waiting in long lines at rental counters. With Jolzt, you can go straight to your car with our digital check-in process.",
    digitalCheckIn: "Digital check-in through the Jolzt app",
    noWaiting: "No waiting in lines or filling out paperwork",
    getToYourCar: "Get to your car in minutes",
    driveReturn: "Drive & Return",
    driveReturnDesc:
      "Enjoy your trip with peace of mind knowing that 24/7 roadside assistance is included. When it's time to return, simply park the car and complete the digital check-out.",
    roadsideAssistance: "24/7 roadside assistance included",
    easyDigital: "Easy digital check-out process",
    noSurprise: "No surprise fees or charges",
    downloadApp: "Download the App & Start Renting",
    joinPlatform: "Join the Platform",
    joinPlatformDesc:
      "Register your rental company on Jolzt by providing your business information and completing the verification process.",
    simpleRegistration: "Simple registration process",
    dedicatedOnboarding: "Dedicated onboarding support",
    noUpfront: "No upfront costs or monthly fees",
    listYourFleet: "List Your Fleet",
    listYourFleetDesc:
      "Add your vehicles to the Jolzt platform with detailed information, photos, and pricing. Our intuitive dashboard makes it easy to manage your fleet.",
    easyToUse: "Easy-to-use fleet management dashboard",
    setYourOwn: "Set your own pricing and availability",
    bulkUpload: "Bulk upload options for larger fleets",
    manageBookings: "Manage Bookings",
    manageBookingsDesc:
      "Receive booking notifications in real-time and manage all your reservations through the Jolzt partner dashboard.",
    realTimeBooking: "Real-time booking notifications",
    centralizedBooking: "Centralized booking management",
    digitalCheckInOut: "Digital check-in/check-out process",
    growYourBusiness: "Grow Your Business",
    growYourBusinessDesc:
      "Increase your revenue and expand your customer base with Jolzt's marketing and promotional tools.",
    accessToWider: "Access to a wider customer base",
    performanceAnalytics: "Performance analytics and insights",
    marketingPromotional: "Marketing and promotional support",
    becomeJolztPartner: "Become a Jolzt Partner",
    frequentlyAsked: "Frequently Asked Questions",
    faqDesc: "Find answers to common questions about using Jolzt for your car rental needs.",
    isInsuranceIncluded: "Is insurance included?",
    isInsuranceIncludedAnswer:
      "Yes, all rentals include basic insurance coverage. Additional coverage options are available during the booking process if you want extra protection.",
    canIModify: "Can I modify or cancel my booking?",
    canIModifyAnswer:
      "Yes, you can modify or cancel your booking through the app or website. Free cancellation is available up to 48 hours before your scheduled pickup time.",
    whatPaymentMethods: "What payment methods are accepted?",
    whatPaymentMethodsAnswer:
      "We accept all major credit cards in the renter's name. Prepaid or debit cards are not accepted. Some premium car categories may require 2 credit cards.",
    isThereMileage: "Is there a mileage limit?",
    isThereMileageAnswer:
      "Most of our rentals come with unlimited mileage. If there is a mileage restriction on your specific rental, it will be clearly indicated during the booking process.",
    viewAllFAQs: "View All FAQs",
  },
  mk: {
    home: "Почетна",
    howJolztWorks: "Како функционира Jolzt",
    description:
      "Изнајмувањето автомобил никогаш не било полесно. Дознајте како Jolzt го револуционизира изнајмувањето автомобили во Северна Македонија.",
    forRenters: "За изнајмувачи",
    forRentalCompanies: "За компании за изнајмување",
    searchCompare: "Пребарај и спореди",
    searchCompareDesc:
      "Внесете ја вашата локација за преземање, датуми и време за да ги видите сите достапни автомобили од повеќе компании за изнајмување на едно место.",
    comparePrice: "Споредете цени од повеќе компании за изнајмување",
    seeRealTime: "Видете достапност во реално време и транспарентни цени",
    filterByCar: "Филтрирајте по тип на автомобил, карактеристики и повеќе",
    bookInMinutes: "Резервирајте за минути",
    bookInMinutesDesc:
      "Изберете го вашиот автомобил и завршете ја вашата резервација со само неколку допири. Без долги формулари или сложени процеси.",
    quickEasy: "Брз и лесен процес на резервација",
    securePayment: "Безбедни опции за плаќање",
    instantConfirmation: "Инстантна потврда",
    skipCounter: "Прескокнете го шалтерот",
    skipCounterDesc:
      "Нема повеќе чекање во долги редици на шалтери за изнајмување. Со Jolzt, можете да одите директно до вашиот автомобил со нашиот дигитален процес на пријавување.",
    digitalCheckIn: "Дигитално пријавување преку апликацијата Jolzt",
    noWaiting: "Нема чекање во редици или пополнување документи",
    getToYourCar: "Стигнете до вашиот автомобил за минути",
    driveReturn: "Возете и вратете",
    driveReturnDesc:
      "Уживајте во вашето патување со мир во умот знаејќи дека е вклучена 24/7 помош на пат. Кога е време за враќање, едноставно паркирајте го автомобилот и завршете го дигиталното одјавување.",
    roadsideAssistance: "Вклучена 24/7 помош на пат",
    easyDigital: "Лесен процес на дигитално одјавување",
    noSurprise: "Нема изненадувачки такси или трошоци",
    downloadApp: "Преземете ја апликацијата и започнете со изнајмување",
    joinPlatform: "Придружете се на платформата",
    joinPlatformDesc:
      "Регистрирајте ја вашата компанија за изнајмување на Jolzt со обезбедување на вашите деловни информации и завршување на процесот на верификација.",
    simpleRegistration: "Едноставен процес на регистрација",
    dedicatedOnboarding: "Посветена поддршка за вклучување",
    noUpfront: "Нема однапред трошоци или месечни такси",
    listYourFleet: "Наведете ја вашата флота",
    listYourFleetDesc:
      "Додадете ги вашите возила на платформата Jolzt со детални информации, фотографии и цени. Нашата интуитивна контролна табла го олеснува управувањето со вашата флота.",
    easyToUse: "Лесна за користење контролна табла за управување со флота",
    setYourOwn: "Поставете ги вашите цени и достапност",
    bulkUpload: "Опции за масовно поставување за поголеми флоти",
    manageBookings: "Управувајте со резервации",
    manageBookingsDesc:
      "Примајте известувања за резервации во реално време и управувајте со сите ваши резервации преку контролната табла на партнерот Jolzt.",
    realTimeBooking: "Известувања за резервации во реално време",
    centralizedBooking: "Централизирано управување со резервации",
    digitalCheckInOut: "Дигитален процес на пријавување/одјавување",
    growYourBusiness: "Развијте го вашиот бизнис",
    growYourBusinessDesc:
      "Зголемете ги вашите приходи и проширете ја вашата база на клиенти со маркетинг и промотивни алатки на Jolzt.",
    accessToWider: "Пристап до поширока база на клиенти",
    performanceAnalytics: "Аналитика на перформанси и увиди",
    marketingPromotional: "Маркетинг и промотивна поддршка",
    becomeJolztPartner: "Станете партнер на Jolzt",
    frequentlyAsked: "Често поставувани прашања",
    faqDesc:
      "Најдете одговори на вообичаени прашања за користење на Jolzt за вашите потреби за изнајмување автомобили.",
    isInsuranceIncluded: "Дали е вклучено осигурување?",
    isInsuranceIncludedAnswer:
      "Да, сите изнајмувања вклучуваат основно осигурително покритие. Дополнителни опции за покритие се достапни за време на процесот на резервација ако сакате дополнителна заштита.",
    canIModify: "Дали можам да ја изменам или откажам мојата резервација?",
    canIModifyAnswer:
      "Да, можете да ја измените или откажете вашата резервација преку апликацијата или веб-страницата. Бесплатно откажување е достапно до 48 часа пред вашето закажано време за преземање.",
    whatPaymentMethods: "Кои начини на плаќање се прифатени?",
    whatPaymentMethodsAnswer:
      "Прифаќаме сите главни кредитни картички на име на изнајмувачот. Претплатени или дебитни картички не се прифаќаат. Некои премиум категории на автомобили може да бараат 2 кредитни картички.",
    isThereMileage: "Дали има ограничување на километража?",
    isThereMileageAnswer:
      "Повеќето од нашите изнајмувања доаѓаат со неограничена километража. Ако има ограничување на километража за вашето специфично изнајмување, тоа јасно ќе биде наведено за време на процесот на резервација.",
    viewAllFAQs: "Погледнете ги сите ЧПП",
  },
  sq: {
    home: "Ballina",
    howJolztWorks: "Si funksionon Jolzt",
    description:
      "Marrja me qira e një makine nuk ka qenë kurrë më e lehtë. Mësoni se si Jolzt po revolucionarizon qiranë e makinave në Maqedoninë e Veriut.",
    forRenters: "Për qiramarrësit",
    forRentalCompanies: "Për kompanitë e qirasë",
    searchCompare: "Kërko dhe Krahaso",
    searchCompareDesc:
      "Vendosni vendndodhjen tuaj të marrjes, datat dhe oraret për të parë të gjitha makinat e disponueshme nga shumë kompani qiraje në një vend.",
    comparePrice: "Krahasoni çmimet nga shumë kompani qiraje",
    seeRealTime: "Shihni disponueshmërinë në kohë reale dhe çmimet transparente",
    filterByCar: "Filtroni sipas llojit të makinës, karakteristikave dhe më shumë",
    bookInMinutes: "Rezervoni në minuta",
    bookInMinutesDesc:
      "Zgjidhni makinën tuaj dhe përfundoni rezervimin tuaj me vetëm disa prekje. Pa formularë të gjatë ose procese të komplikuara.",
    quickEasy: "Proces i shpejtë dhe i lehtë rezervimi",
    securePayment: "Opsione të sigurta pagese",
    instantConfirmation: "Konfirmim i menjëhershëm",
    skipCounter: "Anashkaloni sportelit",
    skipCounterDesc:
      "Jo më pritje në radhë të gjata në sportelet e qirasë. Me Jolzt, mund të shkoni direkt te makina juaj me procesin tonë dixhital të check-in.",
    digitalCheckIn: "Check-in dixhital përmes aplikacionit Jolzt",
    noWaiting: "Pa pritje në radhë ose plotësim dokumentesh",
    getToYourCar: "Shkoni te makina juaj në minuta",
    driveReturn: "Drejtoni dhe Ktheni",
    driveReturnDesc:
      "Shijoni udhëtimin tuaj me qetësi duke ditur se asistenca rrugore 24/7 është e përfshirë. Kur është koha për t'u kthyer, thjesht parkoni makinën dhe përfundoni check-out dixhital.",
    roadsideAssistance: "Asistencë rrugore 24/7 e përfshirë",
    easyDigital: "Proces i lehtë check-out dixhital",
    noSurprise: "Pa tarifa ose pagesa surprizë",
    downloadApp: "Shkarkoni aplikacionin dhe filloni të merrni me qira",
    joinPlatform: "Bashkohuni me platformën",
    joinPlatformDesc:
      "Regjistroni kompaninë tuaj të qirasë në Jolzt duke dhënë informacionin tuaj të biznesit dhe duke përfunduar procesin e verifikimit.",
    simpleRegistration: "Proces i thjeshtë regjistrimi",
    dedicatedOnboarding: "Mbështetje e dedikuar për fillimin",
    noUpfront: "Pa kosto paraprake ose tarifa mujore",
    listYourFleet: "Listoni flotën tuaj",
    listYourFleetDesc:
      "Shtoni automjetet tuaja në platformën Jolzt me informacion të detajuar, foto dhe çmime. Paneli ynë intuitiv e bën të lehtë menaxhimin e flotës suaj.",
    easyToUse: "Panel i lehtë për përdorim për menaxhimin e flotës",
    setYourOwn: "Vendosni çmimet dhe disponueshmërinë tuaj",
    bulkUpload: "Opsione ngarkimi në masë për flota më të mëdha",
    manageBookings: "Menaxhoni rezervimet",
    manageBookingsDesc:
      "Merrni njoftime rezervimi në kohë reale dhe menaxhoni të gjitha rezervimet tuaja përmes panelit të partnerit Jolzt.",
    realTimeBooking: "Njoftime rezervimi në kohë reale",
    centralizedBooking: "Menaxhim i centralizuar i rezervimeve",
    digitalCheckInOut: "Proces dixhital check-in/check-out",
    growYourBusiness: "Rritni biznesin tuaj",
    growYourBusinessDesc:
      "Rritni të ardhurat tuaja dhe zgjeroni bazën tuaj të klientëve me mjetet e marketingut dhe promocionale të Jolzt.",
    accessToWider: "Qasje në një bazë më të gjerë klientësh",
    performanceAnalytics: "Analitika dhe njohuri të performancës",
    marketingPromotional: "Mbështetje marketingu dhe promocionale",
    becomeJolztPartner: "Bëhuni partner i Jolzt",
    frequentlyAsked: "Pyetje të bëra shpesh",
    faqDesc:
      "Gjeni përgjigje për pyetjet e zakonshme rreth përdorimit të Jolzt për nevojat tuaja të qirasë së makinave.",
    isInsuranceIncluded: "A është e përfshirë sigurimi?",
    isInsuranceIncludedAnswer:
      "Po, të gjitha qiratë përfshijnë mbulim bazë sigurimi. Opsionet shtesë të mbulimit janë të disponueshme gjatë procesit të rezervimit nëse dëshironi mbrojtje shtesë.",
    canIModify: "A mund ta modifikoj ose anuloj rezervimin tim?",
    canIModifyAnswer:
      "Po, mund ta modifikoni ose anuloni rezervimin tuaj përmes aplikacionit ose faqes së internetit. Anulimi falas është i disponueshëm deri në 48 orë para kohës së planifikuar të marrjes.",
    whatPaymentMethods: "Cilat metoda pagese pranohen?",
    whatPaymentMethodsAnswer:
      "Ne pranojmë të gjitha kartat kryesore të kreditit në emër të qiramarrësit. Kartat e parapaguara ose të debitit nuk pranohen. Disa kategori premium të makinave mund të kërkojnë 2 karta krediti.",
    isThereMileage: "A ka kufizim kilometrazhi?",
    isThereMileageAnswer:
      "Shumica e qirave tona vijnë me kilometrazh të pakufizuar. Nëse ka një kufizim kilometrazhi për qiranë tuaj specifike, kjo do të tregohet qartë gjatë procesit të rezervimit.",
    viewAllFAQs: "Shikoni të gjitha FAQ",
  },
}

export default function HowItWorksPage({ params }: { params: { lang: string } }) {
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
              {t.home}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{t.howJolztWorks}</h1>
              <p className="text-xl text-gray-600">{t.description}</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src="/how-it-works-intro.mp4?height=600&width=1200"  // Update path if needed
                    type="video/mp4"
                  />
                </video>
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
                    {t.forRenters}
                  </TabsTrigger>
                  <TabsTrigger
                    value="companies"
                    className="rounded-sm data-[state=active]:bg-[#f26522] data-[state=active]:text-white"
                  >
                    {t.forRentalCompanies}
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
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">{t.searchCompare}</h2>
                            <p className="text-gray-600 mb-6 text-lg">{t.searchCompareDesc}</p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.comparePrice}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.seeRealTime}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.filterByCar}</span>
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
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">{t.bookInMinutes}</h2>
                            <p className="text-gray-600 mb-6 text-lg">{t.bookInMinutesDesc}</p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.quickEasy}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.securePayment}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.instantConfirmation}</span>
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
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">{t.skipCounter}</h2>
                            <p className="text-gray-600 mb-6 text-lg">{t.skipCounterDesc}</p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.digitalCheckIn}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.noWaiting}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.getToYourCar}</span>
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
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">{t.driveReturn}</h2>
                            <p className="text-gray-600 mb-6 text-lg">{t.driveReturnDesc}</p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.roadsideAssistance}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.easyDigital}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.noSurprise}</span>
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
                      {t.downloadApp}
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
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">{t.joinPlatform}</h2>
                            <p className="text-gray-600 mb-6 text-lg">{t.joinPlatformDesc}</p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.simpleRegistration}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.dedicatedOnboarding}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.noUpfront}</span>
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
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">{t.listYourFleet}</h2>
                            <p className="text-gray-600 mb-6 text-lg">{t.listYourFleetDesc}</p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.easyToUse}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.setYourOwn}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.bulkUpload}</span>
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
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">{t.manageBookings}</h2>
                            <p className="text-gray-600 mb-6 text-lg">{t.manageBookingsDesc}</p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.realTimeBooking}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.centralizedBooking}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.digitalCheckInOut}</span>
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
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">{t.growYourBusiness}</h2>
                            <p className="text-gray-600 mb-6 text-lg">{t.growYourBusinessDesc}</p>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.accessToWider}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.performanceAnalytics}</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{t.marketingPromotional}</span>
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
                      <Link href={`/${lang}/partner`} className="flex items-center">
                        {t.becomeJolztPartner}
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
                <h2 className="text-3xl font-bold mb-4 text-gray-900">{t.frequentlyAsked}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">{t.faqDesc}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{t.isInsuranceIncluded}</h3>
                    <p className="text-gray-600">{t.isInsuranceIncludedAnswer}</p>
                  </CardContent>
                </Card>

                <Card className="shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{t.canIModify}</h3>
                    <p className="text-gray-600">{t.canIModifyAnswer}</p>
                  </CardContent>
                </Card>

                <Card className="shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{t.whatPaymentMethods}</h3>
                    <p className="text-gray-600">{t.whatPaymentMethodsAnswer}</p>
                  </CardContent>
                </Card>

                <Card className="shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{t.isThereMileage}</h3>
                    <p className="text-gray-600">{t.isThereMileageAnswer}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-10">
                <Button asChild className="bg-[#f26522] hover:bg-[#e05a1c]">
                  <Link href={`/${lang}/contact`} className="flex items-center">
                    {t.viewAllFAQs}
                    <ChevronRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} />
    </div>
  )
}
