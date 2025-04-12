import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { LanguageSelector } from "@/components/language-selector"

// Translations for Terms of Service
const translations = {
  en: {
    backToHome: "Back to Home",
    termsOfService: "Terms of Service",
    lastUpdated: "Last updated: April 10, 2025",
    introduction: "1. Introduction",
    introductionText1:
      'Welcome to Jolzt. These Terms of Service govern your use of our website located at jolzt.com and our mobile application (together or individually "Service") operated by Jolzt.',
    introductionText2:
      "Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here:",
    privacyPolicy: "Privacy Policy",
    introductionText3:
      "By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.",
    carRentalTerms: "2. Car Rental Terms",
    bookingAndReservation: "2.1 Booking and Reservation:",
    bookingAndReservationText:
      "All bookings made through our Service are subject to vehicle availability and confirmation. A reservation is only confirmed after payment is processed and you receive a confirmation email or notification.",
    rentalPeriod: "2.2 Rental Period:",
    rentalPeriodText:
      "The rental period begins at the time of vehicle pickup and ends at the time of vehicle return. Late returns may incur additional charges as specified in your rental agreement.",
    driverRequirements: "2.3 Driver Requirements:",
    driverRequirementsText:
      "All drivers must be at least 21 years old and hold a valid driver's license for at least 2 years. Some vehicle categories may have higher age requirements. Young driver surcharges may apply for drivers under 23 years old.",
    payment: "2.4 Payment:",
    paymentText:
      "Full payment is required at the time of booking. We accept major credit cards in the renter's name. Prepaid or debit cards are not accepted. Some premium car categories may require 2 credit cards.",
    vehicleUse: "3. Vehicle Use",
    authorizedUse: "3.1 Authorized Use:",
    authorizedUseText:
      "The vehicle may only be driven by the authorized driver(s) named in the rental agreement. Unauthorized drivers are not covered by insurance.",
    crossBorderTravel: "3.2 Cross-Border Travel:",
    crossBorderTravelText:
      "Vehicles may be taken into most other European countries with written permission from Jolzt. A foreign use charge may apply. Unauthorized cross-border travel will void insurance coverage.",
    prohibitedUse: "3.3 Prohibited Use:",
    prohibitedUseText: "Vehicles may not be used for:",
    prohibitedUseItem1: "Illegal activities",
    prohibitedUseItem2: "Racing or speed testing",
    prohibitedUseItem3: "Transporting more passengers than the vehicle is designed for",
    prohibitedUseItem4: "Towing or pushing other vehicles",
    prohibitedUseItem5: "Off-road driving",
    prohibitedUseItem6: "Driving under the influence of alcohol or drugs",
    insuranceAndLiability: "4. Insurance and Liability",
    basicInsurance: "4.1 Basic Insurance:",
    basicInsuranceText:
      "All rentals include basic insurance coverage with a deductible amount specified in your rental agreement.",
    additionalCoverage: "4.2 Additional Coverage:",
    additionalCoverageText:
      "Optional additional insurance coverage may be purchased at the time of booking or at vehicle pickup.",
    liability: "4.3 Liability:",
    liabilityText:
      "The renter is responsible for any damage to the vehicle during the rental period up to the deductible amount, unless the damage is covered by the insurance policy.",
    cancellationsAndModifications: "5. Cancellations and Modifications",
    cancellationPolicy: "5.1 Cancellation Policy:",
    cancellationPolicyText:
      "Free cancellation is available up to 48 hours before the scheduled pickup time. Cancellations made less than 48 hours before pickup may incur a cancellation fee.",
    modifications: "5.2 Modifications:",
    modificationsText:
      "Reservations may be modified subject to vehicle availability. Changes to the rental period, vehicle category, or pickup/return location may result in price adjustments.",
    intellectualProperty: "6. Intellectual Property",
    intellectualPropertyText:
      "The Service and its original content, features, and functionality are and will remain the exclusive property of Jolzt and its licensors. The Service is protected by copyright, trademark, and other laws of both North Macedonia and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Jolzt.",
    termination: "7. Termination",
    terminationText:
      "We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
    limitationOfLiability: "8. Limitation of Liability",
    limitationOfLiabilityText:
      "In no event shall Jolzt, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.",
    governingLaw: "9. Governing Law",
    governingLawText:
      "These Terms shall be governed and construed in accordance with the laws of North Macedonia, without regard to its conflict of law provisions.",
    changesToTerms: "10. Changes to Terms",
    changesToTermsText:
      "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
    contactUs: "11. Contact Us",
    contactUsText: "If you have any questions about these Terms, please contact us at:",
    contactEmail: "Email: support@jolzt.com",
    contactPhone: "Phone: +389 78 700 202",
  },
  mk: {
    backToHome: "Назад кон Почетна",
    termsOfService: "Услови за користење",
    lastUpdated: "Последно ажурирано: 10 април, 2025",
    introduction: "1. Вовед",
    introductionText1:
      'Добредојдовте во Jolzt. Овие Услови за користење го регулираат вашето користење на нашата веб-страница која се наоѓа на jolzt.com и нашата мобилна апликација (заедно или поединечно "Услуга") управувана од Jolzt.',
    introductionText2:
      "Нашата Политика за приватност исто така го регулира вашето користење на нашата Услуга и објаснува како собираме, заштитуваме и откриваме информации што произлегуваат од вашето користење на нашите веб-страници. Ве молиме прочитајте ја овде:",
    privacyPolicy: "Политика за приватност",
    introductionText3:
      "Со пристапување или користење на Услугата, вие се согласувате да бидете обврзани со овие Услови. Ако не се согласувате со кој било дел од условите, тогаш не смеете да пристапите до Услугата.",
    carRentalTerms: "2. Услови за изнајмување на автомобили",
    bookingAndReservation: "2.1 Резервација:",
    bookingAndReservationText:
      "Сите резервации направени преку нашата Услуга подлежат на достапност на возилото и потврда. Резервацијата е потврдена само откако ќе се обработи плаќањето и ќе добиете е-пошта или известување за потврда.",
    rentalPeriod: "2.2 Период на изнајмување:",
    rentalPeriodText:
      "Периодот на изнајмување започнува во моментот на преземање на возилото и завршува во моментот на враќање на возилото. Доцните враќања може да предизвикаат дополнителни трошоци како што е наведено во вашиот договор за изнајмување.",
    driverRequirements: "2.3 Барања за возачот:",
    driverRequirementsText:
      "Сите возачи мора да имаат најмалку 21 година и да поседуваат важечка возачка дозвола најмалку 2 години. Некои категории на возила може да имаат повисоки барања за возраст. Доплати за млади возачи може да се применат за возачи под 23 години.",
    payment: "2.4 Плаќање:",
    paymentText:
      "Целосно плаќање е потребно во моментот на резервација. Прифаќаме главни кредитни картички на име на изнајмувачот. Припејд или дебитни картички не се прифаќаат. Некои премиум категории на автомобили може да бараат 2 кредитни картички.",
    vehicleUse: "3. Користење на возилото",
    authorizedUse: "3.1 Овластено користење:",
    authorizedUseText:
      "Возилото може да го возат само овластениот возач(и) наведени во договорот за изнајмување. Неовластените возачи не се покриени со осигурување.",
    crossBorderTravel: "3.2 Прекугранично патување:",
    crossBorderTravelText:
      "Возилата може да се однесат во повеќето други европски земји со писмена дозвола од Jolzt. Може да се примени такса за странско користење. Неовластеното прекугранично патување ќе го поништи осигурителното покритие.",
    prohibitedUse: "3.3 Забрането користење:",
    prohibitedUseText: "Возилата не смеат да се користат за:",
    prohibitedUseItem1: "Нелегални активности",
    prohibitedUseItem2: "Трки или тестирање на брзина",
    prohibitedUseItem3: "Превоз на повеќе патници отколку што е дизајнирано возилото",
    prohibitedUseItem4: "Влечење или туркање на други возила",
    prohibitedUseItem5: "Возење надвор од пат",
    prohibitedUseItem6: "Возење под влијание на алкохол или дроги",
    insuranceAndLiability: "4. Осигурување и одговорност",
    basicInsurance: "4.1 Основно осигурување:",
    basicInsuranceText:
      "Сите изнајмувања вклучуваат основно осигурително покритие со износ на франшиза наведен во вашиот договор за изнајмување.",
    additionalCoverage: "4.2 Дополнително покритие:",
    additionalCoverageText:
      "Опционално дополнително осигурително покритие може да се купи во моментот на резервација или при преземање на возилото.",
    liability: "4.3 Одговорност:",
    liabilityText:
      "Изнајмувачот е одговорен за било каква штета на возилото за време на периодот на изнајмување до износот на франшизата, освен ако штетата не е покриена со полисата за осигурување.",
    cancellationsAndModifications: "5. Откажувања и модификации",
    cancellationPolicy: "5.1 Политика за откажување:",
    cancellationPolicyText:
      "Бесплатно откажување е достапно до 48 часа пред закажаното време за преземање. Откажувањата направени помалку од 48 часа пред преземањето може да предизвикаат такса за откажување.",
    modifications: "5.2 Модификации:",
    modificationsText:
      "Резервациите може да се модифицираат во зависност од достапноста на возилото. Промените во периодот на изнајмување, категоријата на возилото или локацијата за преземање/враќање може да резултираат со прилагодувања на цената.",
    intellectualProperty: "6. Интелектуална сопственост",
    intellectualPropertyText:
      "Услугата и нејзината оригинална содржина, карактеристики и функционалност се и ќе останат ексклузивна сопственост на Jolzt и неговите лиценцирани. Услугата е заштитена со авторски права, трговски марки и други закони на Северна Македонија и странски земји. Нашите трговски марки и трговски изглед не смеат да се користат во врска со било кој производ или услуга без претходна писмена согласност од Jolzt.",
    termination: "7. Прекинување",
    terminationText:
      "Можеме да го прекинеме или суспендираме вашиот пристап до Услугата веднаш, без претходно известување или одговорност, од било која причина, вклучувајќи без ограничување ако ги прекршите Условите.",
    limitationOfLiability: "8. Ограничување на одговорност",
    limitationOfLiabilityText:
      "Во никој случај Jolzt, ниту неговите директори, вработени, партнери, агенти, добавувачи или соработници, нема да бидат одговорни за било какви индиректни, случајни, специјални, последователни или казнени штети, вклучувајќи без ограничување, загуба на профит, податоци, употреба, добра волја или други нематеријални загуби, што произлегуваат од вашиот пристап до или користење или неможност за пристап или користење на Услугата.",
    governingLaw: "9. Меродавно право",
    governingLawText:
      "Овие Услови ќе бидат регулирани и толкувани во согласност со законите на Северна Македонија, без оглед на нејзините одредби за конфликт на закони.",
    changesToTerms: "10. Промени на Условите",
    changesToTermsText:
      "Го задржуваме правото, по наша дискреција, да ги модифицираме или замениме овие Услови во било кое време. Ако ревизијата е материјална, ќе се обидеме да обезбедиме најмалку 30 дена известување пред било кои нови услови да стапат на сила. Што претставува материјална промена ќе биде определено по наша дискреција.",
    contactUs: "11. Контактирајте не",
    contactUsText: "Ако имате било какви прашања за овие Услови, ве молиме контактирајте не на:",
    contactEmail: "Е-пошта: support@jolzt.com",
    contactPhone: "Телефон: +389 78 700 202",
  },
  sq: {
    backToHome: "Kthehu në Ballina",
    termsOfService: "Kushtet e Shërbimit",
    lastUpdated: "Përditësuar së fundmi: 10 prill, 2025",
    introduction: "1. Hyrje",
    introductionText1:
      'Mirë se vini në Jolzt. Këto Kushte të Shërbimit rregullojnë përdorimin tuaj të faqes sonë të internetit të vendosur në jolzt.com dhe aplikacionin tonë celular (së bashku ose individualisht "Shërbimi") të operuar nga Jolzt.',
    introductionText2:
      "Politika jonë e Privatësisë gjithashtu rregullon përdorimin tuaj të Shërbimit tonë dhe shpjegon se si mbledhim, ruajmë dhe zbulojmë informacionin që rezulton nga përdorimi juaj i faqeve tona të internetit. Ju lutemi lexojeni këtu:",
    privacyPolicy: "Politika e Privatësisë",
    introductionText3:
      "Duke hyrë ose përdorur Shërbimin, ju pranoni të jeni të detyruar nga këto Kushte. Nëse nuk pajtoheni me ndonjë pjesë të kushteve, atëherë nuk mund të hyni në Shërbim.",
    carRentalTerms: "2. Kushtet e Qirasë së Makinave",
    bookingAndReservation: "2.1 Rezervimi:",
    bookingAndReservationText:
      "Të gjitha rezervimet e bëra përmes Shërbimit tonë i nënshtrohen disponueshmërisë së automjetit dhe konfirmimit. Një rezervim konfirmohet vetëm pasi të jetë përpunuar pagesa dhe të merrni një email ose njoftim konfirmimi.",
    rentalPeriod: "2.2 Periudha e Qirasë:",
    rentalPeriodText:
      "Periudha e qirasë fillon në momentin e marrjes së automjetit dhe përfundon në momentin e kthimit të automjetit. Kthimet e vonuara mund të shkaktojnë tarifa shtesë siç specifikohet në marrëveshjen tuaj të qirasë.",
    driverRequirements: "2.3 Kërkesat për Shoferët:",
    driverRequirementsText:
      "Të gjithë shoferët duhet të jenë të paktën 21 vjeç dhe të mbajnë një patentë shoferi të vlefshme për të paktën 2 vjet. Disa kategori automjetesh mund të kenë kërkesa më të larta të moshës. Tarifat për shoferët e rinj mund të aplikohen për shoferët nën 23 vjeç.",
    payment: "2.4 Pagesa:",
    paymentText:
      "Pagesa e plotë kërkohet në momentin e rezervimit. Ne pranojmë kartat kryesore të kreditit në emër të qiramarrësit. Kartat e parapaguara ose të debitit nuk pranohen. Disa kategori premium të makinave mund të kërkojnë 2 karta krediti.",
    vehicleUse: "3. Përdorimi i Automjetit",
    authorizedUse: "3.1 Përdorimi i Autorizuar:",
    authorizedUseText:
      "Automjeti mund të drejtohet vetëm nga shoferi(ët) e autorizuar të përmendur në marrëveshjen e qirasë. Shoferët e paautorizuar nuk mbulohen nga sigurimi.",
    crossBorderTravel: "3.2 Udhëtimi Ndërkufitar:",
    crossBorderTravelText:
      "Automjetet mund të merren në shumicën e vendeve të tjera evropiane me leje me shkrim nga Jolzt. Mund të aplikohet një tarifë për përdorim të huaj. Udhëtimi ndërkufitar i paautorizuar do të anulojë mbulimin e sigurimit.",
    prohibitedUse: "3.3 Përdorimi i Ndaluar:",
    prohibitedUseText: "Automjetet nuk mund të përdoren për:",
    prohibitedUseItem1: "Aktivitete të paligjshme",
    prohibitedUseItem2: "Gara ose testim shpejtësie",
    prohibitedUseItem3: "Transportimin e më shumë pasagjerëve sesa është projektuar automjeti",
    prohibitedUseItem4: "Tërheqjen ose shtyrjen e automjeteve të tjera",
    prohibitedUseItem5: "Drejtimin jashtë rrugës",
    prohibitedUseItem6: "Drejtimin nën ndikimin e alkoolit ose drogës",
    insuranceAndLiability: "4. Sigurimi dhe Përgjegjësia",
    basicInsurance: "4.1 Sigurimi Bazë:",
    basicInsuranceText:
      "Të gjitha qiratë përfshijnë mbulim bazë sigurimi me një shumë të zbritshme të specifikuar në marrëveshjen tuaj të qirasë.",
    additionalCoverage: "4.2 Mbulimi Shtesë:",
    additionalCoverageText:
      "Mbulimi shtesë opsional i sigurimit mund të blihet në momentin e rezervimit ose në marrjen e automjetit.",
    liability: "4.3 Përgjegjësia:",
    liabilityText:
      "Qiramarrësi është përgjegjës për çdo dëmtim të automjetit gjatë periudhës së qirasë deri në shumën e zbritshme, përveç nëse dëmi mbulohet nga polica e sigurimit.",
    cancellationsAndModifications: "5. Anulimet dhe Modifikimet",
    cancellationPolicy: "5.1 Politika e Anulimit:",
    cancellationPolicyText:
      "Anulimi falas është i disponueshëm deri në 48 orë para kohës së planifikuar të marrjes. Anulimet e bëra më pak se 48 orë para marrjes mund të shkaktojnë një tarifë anulimi.",
    modifications: "5.2 Modifikimet:",
    modificationsText:
      "Rezervimet mund të modifikohen në varësi të disponueshmërisë së automjetit. Ndryshimet në periudhën e qirasë, kategorinë e automjetit, ose vendndodhjen e marrjes/kthimit mund të rezultojnë në rregullime të çmimit.",
    intellectualProperty: "6. Pronësia Intelektuale",
    intellectualPropertyText:
      "Shërbimi dhe përmbajtja e tij origjinale, veçoritë dhe funksionaliteti janë dhe do të mbeten pronë ekskluzive e Jolzt dhe licencuesve të saj. Shërbimi është i mbrojtur nga e drejta e autorit, marka tregtare dhe ligje të tjera të Maqedonisë së Veriut dhe vendeve të huaja. Markat tona tregtare dhe veshja tregtare nuk mund të përdoren në lidhje me ndonjë produkt ose shërbim pa pëlqimin paraprak me shkrim të Jolzt.",
    termination: "7. Përfundimi",
    terminationText:
      "Ne mund të përfundojmë ose pezullojmë qasjen tuaj në Shërbim menjëherë, pa njoftim paraprak ose përgjegjësi, për çdo arsye, duke përfshirë pa kufizim nëse shkelni Kushtet.",
    limitationOfLiability: "8. Kufizimi i Përgjegjësisë",
    limitationOfLiabilityText:
      "Në asnjë rast Jolzt, as drejtorët, punonjësit, partnerët, agjentët, furnizuesit ose bashkëpunëtorët e saj, nuk do të jenë përgjegjës për dëme indirekte, të rastësishme, të veçanta, pasojë ose ndëshkuese, duke përfshirë pa kufizim, humbjen e fitimeve, të dhënave, përdorimit, emrit të mirë ose humbjeve të tjera jo materiale, që rezultojnë nga qasja juaj ose përdorimi ose paaftësia për të hyrë ose përdorur Shërbimin.",
    governingLaw: "9. Ligji Qeverisës",
    governingLawText:
      "Këto Kushte do të qeverisen dhe interpretohen në përputhje me ligjet e Maqedonisë së Veriut, pa marrë parasysh dispozitat e saj për konfliktin e ligjeve.",
    changesToTerms: "10. Ndryshimet në Kushte",
    changesToTermsText:
      "Ne rezervojmë të drejtën, sipas gjykimit tonë të vetëm, për të modifikuar ose zëvendësuar këto Kushte në çdo kohë. Nëse një rishikim është material, ne do të përpiqemi të ofrojmë të paktën 30 ditë njoftim përpara se kushtet e reja të hyjnë në fuqi. Çfarë përbën një ndryshim material do të përcaktohet sipas gjykimit tonë të vetëm.",
    contactUs: "11. Na Kontaktoni",
    contactUsText: "Nëse keni ndonjë pyetje në lidhje me këto Kushte, ju lutemi na kontaktoni në:",
    contactEmail: "Email: support@jolzt.com",
    contactPhone: "Telefon: +389 78 700 202",
  },
}

export default function TermsOfServicePage({ params }: { params: { lang: string } }) {
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

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">{t.termsOfService}</h1>
            <div className="prose max-w-none">
              <p className="text-muted-foreground mb-6">{t.lastUpdated}</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.introduction}</h2>
              <p>{t.introductionText1}</p>
              <p>
                {t.introductionText2}{" "}
                <Link href={`/${lang}/privacy-policy`} className="text-[#f26522] hover:underline">
                  {t.privacyPolicy}
                </Link>
                .
              </p>
              <p>{t.introductionText3}</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.carRentalTerms}</h2>
              <p>
                <strong>{t.bookingAndReservation}</strong> {t.bookingAndReservationText}
              </p>
              <p>
                <strong>{t.rentalPeriod}</strong> {t.rentalPeriodText}
              </p>
              <p>
                <strong>{t.driverRequirements}</strong> {t.driverRequirementsText}
              </p>
              <p>
                <strong>{t.payment}</strong> {t.paymentText}
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.vehicleUse}</h2>
              <p>
                <strong>{t.authorizedUse}</strong> {t.authorizedUseText}
              </p>
              <p>
                <strong>{t.crossBorderTravel}</strong> {t.crossBorderTravelText}
              </p>
              <p>
                <strong>{t.prohibitedUse}</strong> {t.prohibitedUseText}
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>{t.prohibitedUseItem1}</li>
                <li>{t.prohibitedUseItem2}</li>
                <li>{t.prohibitedUseItem3}</li>
                <li>{t.prohibitedUseItem4}</li>
                <li>{t.prohibitedUseItem5}</li>
                <li>{t.prohibitedUseItem6}</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.insuranceAndLiability}</h2>
              <p>
                <strong>{t.basicInsurance}</strong> {t.basicInsuranceText}
              </p>
              <p>
                <strong>{t.additionalCoverage}</strong> {t.additionalCoverageText}
              </p>
              <p>
                <strong>{t.liability}</strong> {t.liabilityText}
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.cancellationsAndModifications}</h2>
              <p>
                <strong>{t.cancellationPolicy}</strong> {t.cancellationPolicyText}
              </p>
              <p>
                <strong>{t.modifications}</strong> {t.modificationsText}
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.intellectualProperty}</h2>
              <p>{t.intellectualPropertyText}</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.termination}</h2>
              <p>{t.terminationText}</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.limitationOfLiability}</h2>
              <p>{t.limitationOfLiabilityText}</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.governingLaw}</h2>
              <p>{t.governingLawText}</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.changesToTerms}</h2>
              <p>{t.changesToTermsText}</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.contactUs}</h2>
              <p>{t.contactUsText}</p>
              <p>
                {t.contactEmail}
                <br />
                {t.contactPhone}
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter lang={lang} />
    </div>
  )
}
