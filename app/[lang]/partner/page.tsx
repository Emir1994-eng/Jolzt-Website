"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon, ArrowRightIcon, CheckCircle2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LanguageSelector } from "@/components/language-selector"
import { SiteFooter } from "@/components/site-footer"

// Translations for the Partner page
const translations = {
  en: {
    backToHome: "Back to Home",
    partnerWithJolzt: "Partner With Jolzt",
    subtitle: "Join North Macedonia's fastest growing car rental platform and take your business to the next level",
    companyInformation: "Company Information",
    contactDetails: "Contact Details",
    tellUsAbout: "Tell us about your business",
    tellUsAboutDesc: "Please provide information about your rental company so we can better understand your needs.",
    companyName: "Company Name",
    companyNamePlaceholder: "Your rental company name",
    companyWebsite: "Company Website (optional)",
    companyWebsitePlaceholder: "https://www.example.com",
    companySize: "Company Size",
    small: "Small (1-10 vehicles)",
    medium: "Medium (11-50 vehicles)",
    large: "Large (50+ vehicles)",
    locations: "Locations",
    locationsPlaceholder: "e.g., Skopje, Ohrid, Skopje Airport",
    aboutBusiness: "Tell us about your business",
    aboutBusinessPlaceholder: "Share details about your rental company, types of vehicles, current operations, etc.",
    next: "Next",
    yourContactInfo: "Your Contact Information",
    yourContactInfoDesc: "Please provide your contact details so our partnership team can reach out to you.",
    firstName: "First Name",
    firstNamePlaceholder: "Your first name",
    lastName: "Last Name",
    lastNamePlaceholder: "Your last name",
    email: "Email Address",
    emailPlaceholder: "you@example.com",
    phone: "Phone Number",
    phonePlaceholder: "+389 XX XXX XXX",
    position: "Your Position",
    positionPlaceholder: "e.g., Owner, Manager, Director",
    additionalInfo: "Additional Information (optional)",
    additionalInfoPlaceholder: "Any specific questions or information you'd like to share with our team",
    submitApplication: "Submit Application",
    whyPartnerWithUs: "Why Partner With Us",
    accessNetwork: "Access our network of growing monthly user base",
    streamlineOperations: "Streamline operations with our easy-to-use management platform",
    dedicatedAccount: "Dedicated account manager and 24/7 support",
    noUpfrontCosts: "No upfront costs or monthly fees",
    onlyCommission: "Only 15% commission from each booking",
    partnerSuccessStories: "Partner Success Stories",
    needHelp: "Need help?",
    needHelpDesc: "Our partnership team is available to answer any questions you might have about joining Jolzt.",
    emailUs: "Email Us",
    callUs: "Call +389 XX XXX XXX",
    howItWorks: "How It Works",
    howItWorksDesc:
      "Becoming a Jolzt partner is simple. Here's how the process works from application to your first booking.",
    apply: "Apply",
    applyDesc: "Fill out the application form with details about your rental company and fleet.",
    onboarding: "Onboarding",
    onboardingDesc: "Our team will contact you to set up your account and provide training on our platform.",
    listYourFleet: "List Your Fleet",
    listYourFleetDesc: "Add your vehicles, set your rates, and define your rental policies and availability.",
    startEarning: "Start Earning",
    startEarningDesc: "Begin receiving bookings through the Jolzt platform and grow your business.",
    readyToGrow: "Ready to grow your rental business?",
    readyToGrowDesc:
      "Join our network of successful rental companies across North Macedonia and take advantage of our growing customer base.",
    applyNow: "Apply Now",
    activePartners: "Active Partners",
    needHelpHeading: "Need help?",
    needHelpText: "Our partnership team is available to answer any questions you might have about joining Jolzt.",
    partnersCount: "10+",
    partnersLabel: "Active Partners",
    bookingsCount: "1,000+",
    bookingsLabel: "Monthly Bookings",
    customersCount: "5,000+",
    customersLabel: "Happy Customers",
    citiesCount: "5+",
    citiesLabel: "Cities Covered",
    vehiclesCount: "30+",
    vehiclesLabel: "Vehicles",
    emailContact: "jolztapp@gmail.com",
    phoneContact: "078700202",
    whyJoinUs: "Why Join Jolzt?",
    joinNetworkText:
      "Join our growing network of successful rental companies across North Macedonia and start receiving bookings today.",
    benefitsTitle: "Benefits of partnering with us",
    benefit1: "Increased visibility and bookings",
    benefit2: "Streamlined rental management",
    benefit3: "24/7 customer support",
    benefit4: "No upfront costs",
  },
  mk: {
    backToHome: "Назад кон Почетна",
    partnerWithJolzt: "Станете партнер со Jolzt",
    subtitle:
      "Придружете се на најбрзо растечката платформа за изнајмување автомобили во Северна Македонија и подигнете го вашиот бизнис на следното ниво",
    companyInformation: "Информации за компанијата",
    contactDetails: "Контакт информации",
    tellUsAbout: "Кажете ни за вашиот бизнис",
    tellUsAboutDesc:
      "Ве молиме, дајте информации за вашата компанија за изнајмување за да можеме подобро да ги разбереме вашите потреби.",
    companyName: "Име на компанијата",
    companyNamePlaceholder: "Името на вашата компанија за изнајмување",
    companyWebsite: "Веб-страница на компанијата (опционално)",
    companyWebsitePlaceholder: "https://www.example.com",
    companySize: "Големина на компанијата",
    small: "Мала (1-10 возила)",
    medium: "Средна (11-50 возила)",
    large: "Голема (50+ возила)",
    locations: "Локации",
    locationsPlaceholder: "на пр., Скопје, Охрид, Аеродром Скопје",
    aboutBusiness: "Кажете ни за вашиот бизнис",
    aboutBusinessPlaceholder:
      "Споделете детали за вашата компанија за изнајмување, типови на возила, тековни операции, итн.",
    next: "Следно",
    yourContactInfo: "Вашите контакт информации",
    yourContactInfoDesc:
      "Ве молиме, дајте ги вашите контакт информации за да може нашиот тим за партнерство да ве контактира.",
    firstName: "Име",
    firstNamePlaceholder: "Вашето име",
    lastName: "Презиме",
    lastNamePlaceholder: "Вашето презиме",
    email: "Е-пошта",
    emailPlaceholder: "you@example.com",
    phone: "Телефонски број",
    phonePlaceholder: "+389 XX XXX XXX",
    position: "Вашата позиција",
    positionPlaceholder: "на пр., Сопственик, Менаџер, Директор",
    additionalInfo: "Дополнителни информации (опционално)",
    additionalInfoPlaceholder:
      "Било какви специфични прашања или информации кои би сакале да ги споделите со нашиот тим",
    submitApplication: "Поднесете апликација",
    whyPartnerWithUs: "Зошто да станете партнер со нас",
    accessNetwork: "Пристап до нашата мрежа на растечка месечна корисничка база",
    streamlineOperations: "Оптимизирајте ги операциите со нашата лесна за користење платформа за управување",
    dedicatedAccount: "Посветен менаџер на сметка и 24/7 поддршка",
    noUpfrontCosts: "Нема однапред трошоци или месечни такси",
    onlyCommission: "Само 15% провизија од секоја резервација",
    partnerSuccessStories: "Приказни за успех на партнерите",
    needHelp: "Ви треба помош?",
    needHelpDesc:
      "Нашиот тим за партнерство е достапен да одговори на било какви прашања кои можеби ги имате за придружување кон Jolzt.",
    emailUs: "Испратете ни е-пошта",
    callUs: "Јавете се на +389 XX XXX XXX",
    howItWorks: "Како функционира",
    howItWorksDesc:
      "Да станете партнер на Jolzt е едноставно. Еве како функционира процесот од апликација до вашата прва резервација.",
    apply: "Аплицирајте",
    applyDesc: "Пополнете го формуларот за апликација со детали за вашата компанија за изнајмување и флота.",
    onboarding: "Вклучување",
    onboardingDesc:
      "Нашиот тим ќе ве контактира за да ја поставите вашата сметка и да ви обезбеди обука на нашата платформа.",
    listYourFleet: "Наведете ја вашата флота",
    listYourFleetDesc:
      "Додадете ги вашите возила, поставете ги вашите цени и дефинирајте ги вашите политики за изнајмување и достапност.",
    startEarning: "Започнете да заработувате",
    startEarningDesc: "Започнете да примате резервации преку платформата Jolzt и развијте го вашиот бизнис.",
    readyToGrow: "Подготвени да го развиете вашиот бизнис за изнајмување?",
    readyToGrowDesc:
      "Придружете се на нашата мрежа на успешни компании за изнајмување низ Северна Македонија и искористете ја нашата растечка база на клиенти.",
    applyNow: "Аплицирајте сега",
    activePartners: "Active Partners",
    needHelpHeading: "Ви треба помош?",
    needHelpText:
      "Нашиот тим за партнерство е достапен да одговори на било какви прашања кои можеби ги имате за придружување кон Jolzt.",
    partnersCount: "10+",
    partnersLabel: "Активни Партнери",
    bookingsCount: "1,000+",
    bookingsLabel: "Месечни Резервации",
    customersCount: "5,000+",
    customersLabel: "Задоволни Клиенти",
    citiesCount: "5+",
    citiesLabel: "Покриени Градови",
    vehiclesCount: "30+",
    vehiclesLabel: "Возила",
    emailContact: "jolztapp@gmail.com",
    phoneContact: "078700202",
    whyJoinUs: "Зошто да се приклучите на Jolzt?",
    joinNetworkText:
      "Придружете се на нашата мрежа на успешни компании за изнајмување низ Северна Македонија и започнете да примате резервации денес.",
    benefitsTitle: "Придобивки од партнерството со нас",
    benefit1: "Зголемена видливост и резервации",
    benefit2: "Поедноставено управување со изнајмувањето",
    benefit3: "24/7 корисничка поддршка",
    benefit4: "Без почетни трошоци",
  },
  sq: {
    backToHome: "Kthehu në Ballina",
    partnerWithJolzt: "Bëhuni partner me Jolzt",
    subtitle:
      "Bashkohuni me platformën më të shpejtë në rritje të qirasë së makinave në Maqedoninë e Veriut dhe çoni biznesin tuaj në nivelin tjetër",
    companyInformation: "Informacione për kompaninë",
    contactDetails: "Detajet e kontaktit",
    tellUsAbout: "Na tregoni për biznesin tuaj",
    tellUsAboutDesc:
      "Ju lutemi jepni informacion për kompaninë tuaj të qirasë në mënyrë që të kuptojmë më mirë nevojat tuaja.",
    companyName: "Emri i kompanisë",
    companyNamePlaceholder: "Emri i kompanisë suaj të qirasë",
    companyWebsite: "Faqja e internetit e kompanisë (opsionale)",
    companyWebsitePlaceholder: "https://www.example.com",
    companySize: "Madhësia e kompanisë",
    small: "E vogël (1-10 automjete)",
    medium: "Mesatare (11-50 automjete)",
    large: "E madhe (50+ automjete)",
    locations: "Vendndodhjet",
    locationsPlaceholder: "p.sh., Shkup, Ohër, Aeroporti i Shkupit",
    aboutBusiness: "Na tregoni për biznesin tuaj",
    aboutBusinessPlaceholder:
      "Ndani detaje për kompaninë tuaj të qirasë, llojet e automjeteve, operacionet aktuale, etj.",
    next: "Tjetër",
    yourContactInfo: "Informacionet tuaja të kontaktit",
    yourContactInfoDesc:
      "Ju lutemi jepni detajet tuaja të kontaktit në mënyrë që ekipi ynë i partneritetit të mund t'ju kontaktojë.",
    firstName: "Emri",
    firstNamePlaceholder: "Emri juaj",
    lastName: "Mbiemri",
    lastNamePlaceholder: "Mbiemri juaj",
    email: "Adresa e emailit",
    emailPlaceholder: "you@example.com",
    phone: "Numri i telefonit",
    phonePlaceholder: "+389 XX XXX XXX",
    position: "Pozicioni juaj",
    positionPlaceholder: "p.sh., Pronar, Menaxher, Drejtor",
    additionalInfo: "Informacion shtesë (opsionale)",
    additionalInfoPlaceholder: "Çdo pyetje specifike ose informacion që dëshironi të ndani me ekipin tonë",
    submitApplication: "Dorëzoni aplikimin",
    whyPartnerWithUs: "Pse të bëheni partner me ne",
    accessNetwork: "Qasje në rrjetin tonë të bazës së përdoruesve në rritje mujore",
    streamlineOperations: "Thjeshtoni operacionet me platformën tonë të lehtë për përdorim",
    dedicatedAccount: "Menaxher i dedikuar i llogarisë dhe mbështetje 24/7",
    noUpfrontCosts: "Pa kosto paraprake ose tarifa mujore",
    onlyCommission: "Vetëm 15% komision nga çdo rezervim",
    partnerSuccessStories: "Histori suksesi të partnerëve",
    needHelp: "Keni nevojë për ndihmë?",
    needHelpDesc:
      "Ekipi ynë i partneritetit është i disponueshëm për t'iu përgjigjur çdo pyetjeje që mund të keni për t'u bashkuar me Jolzt.",
    emailUs: "Na dërgoni email",
    callUs: "Telefononi +389 XX XXX XXX",
    howItWorks: "Si funksionon",
    howItWorksDesc:
      "Të bëhesh partner i Jolzt është e thjeshtë. Ja se si funksionon procesi nga aplikimi deri te rezervimi juaj i parë.",
    apply: "Aplikoni",
    applyDesc: "Plotësoni formularin e aplikimit me detaje për kompaninë tuaj të qirasë dhe flotën.",
    onboarding: "Integrimi",
    onboardingDesc:
      "Ekipi ynë do t'ju kontaktojë për të konfiguruar llogarinë tuaj dhe për të ofruar trajnim në platformën tonë.",
    listYourFleet: "Listoni flotën tuaj",
    listYourFleetDesc:
      "Shtoni automjetet tuaja, vendosni tarifat tuaja dhe përcaktoni politikat dhe disponueshmërinë tuaj të qirasë.",
    startEarning: "Filloni të fitoni",
    startEarningDesc: "Filloni të merrni rezervime përmes platformës Jolzt dhe rritni biznesin tuaj.",
    readyToGrow: "Gati për të rritur biznesin tuaj të qirasë?",
    readyToGrowDesc:
      "Bashkohuni me rrjetin tonë të kompanive të suksesshme të qirasë në të gjithë Maqedoninë e Veriut dhe përfitoni nga baza jonë në rritje e klientëve.",
    applyNow: "Aplikoni tani",
    activePartners: "Active Partners",
    needHelpHeading: "Keni nevojë për ndihmë?",
    needHelpText:
      "Ekipi ynë i partneritetit është i disponueshëm për t'iu përgjigjur çdo pyetjeje që mund të keni për t'u bashkuar me Jolzt.",
    partnersCount: "10+",
    partnersLabel: "Partnerë Aktivë",
    bookingsCount: "1,000+",
    bookingsLabel: "Rezervime Mujore",
    customersCount: "5,000+",
    customersLabel: "Klientë të Kënaqur",
    citiesCount: "5+",
    citiesLabel: "Qytete të Mbuluara",
    vehiclesCount: "30+",
    vehiclesLabel: "Automjete",
    emailContact: "jolztapp@gmail.com",
    phoneContact: "078700202",
    whyJoinUs: "Pse të bashkoheni me Jolzt?",
    joinNetworkText:
      "Bashkohuni me rrjetin tonë të kompanive të suksesshme të qirasë në të gjithë Maqedoninë e Veriut dhe filloni të merrni rezervime sot.",
    benefitsTitle: "Përfitimet e partneritetit me ne",
    benefit1: "Vizibilitet dhe rezervime të rritura",
    benefit2: "Menaxhim i thjeshtuar i qirasë",
    benefit3: "Mbështetje për klientët 24/7",
    benefit4: "Pa kosto fillestare",
  },
}

export default function PartnerPage({ params }: { params: { lang: string } }) {
  const lang = params.lang || "en"
  const t = translations[lang as keyof typeof translations] || translations.en

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm shadow-sm">
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
            <Link
              href={`/${lang}`}
              className="text-sm font-medium hover:underline flex items-center gap-1 transition-colors hover:text-[#f26522]"
            >
              <ChevronLeftIcon className="h-4 w-4" />
              {t.backToHome}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative py-20 md:py-28">
          {/* Darker gradient background with overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#e05a1c] to-[#f26522] -z-10 h-[45vh] clip-diagonal" />
          <div className="absolute inset-0 bg-black/60 -z-10 h-[45vh] clip-diagonal" />
          <div className="container px-4 md:px-6">
            <div className="text-center relative z-10 bg-black/30 py-8 px-4 rounded-xl backdrop-blur-sm">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                {lang === "en" ? (
                  <>
                    Partner With <span className="text-[#ffcc80]">JOLZT</span>
                  </>
                ) : lang === "mk" ? (
                  <>
                    Станете партнер со <span className="text-[#ffcc80]">JOLZT</span>
                  </>
                ) : (
                  <>
                    Bëhuni partner me <span className="text-[#ffcc80]">JOLZT</span>
                  </>
                )}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] mb-8">
                {t.subtitle}
              </p>
            </div>

            <Card className="relative z-10 shadow-xl overflow-hidden border-none rounded-xl mt-8" id="partner-form">
              <CardContent className="p-0">
                <Tabs defaultValue="company" className="w-full">
                  <TabsList className="w-full grid grid-cols-2 rounded-none bg-gray-100">
                    <TabsTrigger
                      value="company"
                      className="py-5 data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#f26522] data-[state=active]:text-[#f26522] rounded-none transition-all font-medium"
                    >
                      {t.companyInformation}
                    </TabsTrigger>
                    <TabsTrigger
                      value="contact"
                      className="py-5 data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#f26522] data-[state=active]:text-[#f26522] rounded-none transition-all font-medium"
                    >
                      {t.contactDetails}
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="company" className="p-8 md:p-10">
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold mb-3 text-gray-800">{t.tellUsAbout}</h2>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">{t.tellUsAboutDesc}</p>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="company-name" className="text-base font-medium text-gray-700">
                            {t.companyName}
                          </Label>
                          <Input
                            id="company-name"
                            placeholder={t.companyNamePlaceholder}
                            className="mt-2 h-12 border-gray-300 focus:border-[#f26522] focus:ring-[#f26522]"
                          />
                        </div>

                        <div>
                          <Label htmlFor="company-website" className="text-base font-medium text-gray-700">
                            {t.companyWebsite}
                          </Label>
                          <Input
                            id="company-website"
                            placeholder={t.companyWebsitePlaceholder}
                            className="mt-2 h-12 border-gray-300 focus:border-[#f26522] focus:ring-[#f26522]"
                          />
                        </div>

                        <div>
                          <Label className="text-base font-medium text-gray-700">{t.companySize}</Label>
                          <RadioGroup defaultValue="small" className="mt-3 space-y-3">
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="small" id="small" className="text-[#f26522]" />
                              <Label htmlFor="small" className="font-normal text-gray-700">
                                {t.small}
                              </Label>
                            </div>
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="medium" id="medium" className="text-[#f26522]" />
                              <Label htmlFor="medium" className="font-normal text-gray-700">
                                {t.medium}
                              </Label>
                            </div>
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="large" id="large" className="text-[#f26522]" />
                              <Label htmlFor="large" className="font-normal text-gray-700">
                                {t.large}
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div>
                          <Label htmlFor="locations" className="text-base font-medium text-gray-700">
                            {t.locations}
                          </Label>
                          <Input
                            id="locations"
                            placeholder={t.locationsPlaceholder}
                            className="mt-2 h-12 border-gray-300 focus:border-[#f26522] focus:ring-[#f26522]"
                          />
                        </div>

                        <div>
                          <Label htmlFor="about" className="text-base font-medium text-gray-700">
                            {t.aboutBusiness}
                          </Label>
                          <Textarea
                            id="about"
                            placeholder={t.aboutBusinessPlaceholder}
                            className="mt-2 min-h-[150px] border-gray-300 focus:border-[#f26522] focus:ring-[#f26522]"
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <Button className="bg-[#f26522] hover:bg-[#e05a1c] transition-all duration-300 shadow-md hover:shadow-lg text-base px-8 py-6 h-auto rounded-full font-medium flex items-center gap-2">
                          {t.next}
                          <ArrowRightIcon className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="contact" className="p-8 md:p-10">
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold mb-3 text-gray-800">{t.yourContactInfo}</h2>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">{t.yourContactInfoDesc}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="first-name" className="text-base font-medium text-gray-700">
                            {t.firstName}
                          </Label>
                          <Input
                            id="first-name"
                            placeholder={t.firstNamePlaceholder}
                            className="mt-2 h-12 border-gray-300 focus:border-[#f26522] focus:ring-[#f26522]"
                          />
                        </div>

                        <div>
                          <Label htmlFor="last-name" className="text-base font-medium text-gray-700">
                            {t.lastName}
                          </Label>
                          <Input
                            id="last-name"
                            placeholder={t.lastNamePlaceholder}
                            className="mt-2 h-12 border-gray-300 focus:border-[#f26522] focus:ring-[#f26522]"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email" className="text-base font-medium text-gray-700">
                            {t.email}
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder={t.emailPlaceholder}
                            className="mt-2 h-12 border-gray-300 focus:border-[#f26522] focus:ring-[#f26522]"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone" className="text-base font-medium text-gray-700">
                            {t.phone}
                          </Label>
                          <Input
                            id="phone"
                            placeholder={t.phonePlaceholder}
                            className="mt-2 h-12 border-gray-300 focus:border-[#f26522] focus:ring-[#f26522]"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="position" className="text-base font-medium text-gray-700">
                          {t.position}
                        </Label>
                        <Input
                          id="position"
                          placeholder={t.positionPlaceholder}
                          className="mt-2 h-12 border-gray-300 focus:border-[#f26522] focus:ring-[#f26522]"
                        />
                      </div>

                      <div>
                        <Label htmlFor="additional-info" className="text-base font-medium text-gray-700">
                          {t.additionalInfo}
                        </Label>
                        <Textarea
                          id="additional-info"
                          placeholder={t.additionalInfoPlaceholder}
                          className="mt-2 min-h-[150px] border-gray-300 focus:border-[#f26522] focus:ring-[#f26522]"
                        />
                      </div>

                      <div className="pt-4 flex justify-end">
                        <Button className="bg-[#f26522] hover:bg-[#e05a1c] transition-all duration-300 shadow-md hover:shadow-lg text-base px-8 py-6 h-auto rounded-full font-medium flex items-center gap-2">
                          {t.submitApplication}
                          <ArrowRightIcon className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">{t.whyJoinUs}</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 text-center transform transition-transform hover:scale-105 hover:shadow-lg border border-gray-100">
                  <div className="text-5xl font-bold text-[#f26522] mb-3">{t.partnersCount}</div>
                  <div className="text-gray-700 font-medium">{t.partnersLabel}</div>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 text-center transform transition-transform hover:scale-105 hover:shadow-lg border border-gray-100">
                  <div className="text-5xl font-bold text-[#f26522] mb-3">{t.vehiclesCount}</div>
                  <div className="text-gray-700 font-medium">{t.vehiclesLabel}</div>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 text-center transform transition-transform hover:scale-105 hover:shadow-lg border border-gray-100">
                  <div className="text-5xl font-bold text-[#f26522] mb-3">{t.citiesCount}</div>
                  <div className="text-gray-700 font-medium">{t.citiesLabel}</div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">{t.benefitsTitle}</h3>
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
                  <div className="flex items-start gap-3 text-left bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <CheckCircle2Icon className="h-6 w-6 text-[#f26522] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t.benefit1}</p>
                  </div>
                  <div className="flex items-start gap-3 text-left bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <CheckCircle2Icon className="h-6 w-6 text-[#f26522] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t.benefit2}</p>
                  </div>
                  <div className="flex items-start gap-3 text-left bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <CheckCircle2Icon className="h-6 w-6 text-[#f26522] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t.benefit3}</p>
                  </div>
                  <div className="flex items-start gap-3 text-left bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <CheckCircle2Icon className="h-6 w-6 text-[#f26522] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t.benefit4}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">{t.joinNetworkText}</p>
              </div>

              <div className="mt-12 flex justify-center">
                <Button
                  className="bg-[#f26522] hover:bg-[#e05a1c] transition-all duration-300 shadow-md hover:shadow-lg text-lg px-10 py-7 h-auto rounded-full font-medium"
                  onClick={() => {
                    const formElement = document.getElementById("partner-form")
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  {t.applyNow}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">{t.needHelpHeading}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">{t.emailUs}</h3>
                  <p className="text-[#f26522] font-medium text-lg">{t.emailContact}</p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">Call Us</h3>
                  <p className="text-[#f26522] font-medium text-lg">+389{t.phoneContact}</p>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto leading-relaxed">{t.needHelpText}</p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} />

      <style jsx global>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        
        h1, h2, h3, h4, h5, h6 {
          letter-spacing: -0.025em;
        }
        
        p {
          line-height: 1.6;
        }
        
        .container {
          max-width: 1200px;
        }
      `}</style>
    </div>
  )
}
