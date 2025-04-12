import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { LanguageSelector } from "@/components/language-selector"

// Translations for Privacy Policy
const translations = {
  en: {
    backToHome: "Back to Home",
    privacyPolicy: "Privacy Policy",
    lastUpdated: "Last updated: April 10, 2025",
    intro:
      'Jolzt ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website jolzt.com or use our mobile application (collectively, the "Service").',
    readCarefully:
      "Please read this Privacy Policy carefully. By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy.",
    informationWeCollect: "1. Information We Collect",
    informationWeCollectText:
      "We collect information that you provide directly to us, information we collect automatically when you use our Service, and information from third-party sources.",
    informationYouProvide: "1.1 Information You Provide to Us",
    informationYouProvideText: "We may collect the following types of information when you use our Service:",
    personalInfo: "Personal Information:",
    personalInfoText:
      "Name, email address, phone number, postal address, date of birth, driver's license information, and payment information.",
    accountInfo: "Account Information:",
    accountInfoText: "Username, password, and profile information.",
    rentalInfo: "Rental Information:",
    rentalInfoText: "Rental dates, vehicle preferences, pickup and return locations, and other booking details.",
    communications: "Communications:",
    communicationsText:
      "Information you provide when you contact our customer service or communicate with us through the Service.",
    surveyResponses: "Survey Responses:",
    surveyResponsesText: "Information you provide when you participate in surveys or promotions.",
    infoCollectAuto: "1.2 Information We Collect Automatically",
    infoCollectAutoText: "When you use our Service, we may automatically collect certain information, including:",
    deviceInfo: "Device Information:",
    deviceInfoText:
      "Information about your device, including IP address, device type, operating system, browser type, and device identifiers.",
    usageInfo: "Usage Information:",
    usageInfoText:
      "Information about how you use our Service, including the pages you visit, the time and duration of your visits, and the actions you take.",
    locationInfo: "Location Information:",
    locationInfoText:
      "With your consent, we may collect precise location information from your device to provide location-based services.",
    cookiesInfo: "Cookies and Similar Technologies:",
    cookiesInfoText:
      "We use cookies and similar technologies to collect information about your browsing behavior and preferences.",
    howWeUseInfo: "2. How We Use Your Information",
    howWeUseInfoText: "We may use the information we collect for various purposes, including:",
    howWeUseItem1: "Providing, maintaining, and improving our Service",
    howWeUseItem2: "Processing and managing your car rental bookings",
    howWeUseItem3: "Verifying your identity and eligibility to rent vehicles",
    howWeUseItem4: "Communicating with you about your bookings, account, and our Service",
    howWeUseItem5: "Sending you marketing communications, promotions, and offers",
    howWeUseItem6: "Responding to your inquiries and providing customer support",
    howWeUseItem7: "Analyzing usage patterns and trends to improve our Service",
    howWeUseItem8: "Detecting, preventing, and addressing fraud, security issues, and technical problems",
    howWeUseItem9: "Complying with legal obligations and enforcing our terms and policies",
    howWeShareInfo: "3. How We Share Your Information",
    howWeShareInfoText: "We may share your information with the following categories of recipients:",
    serviceProviders: "Service Providers:",
    serviceProvidersText:
      "We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting, and customer service.",
    businessPartners: "Business Partners:",
    businessPartnersText:
      "We may share your information with our business partners, such as car rental agencies, to fulfill your bookings and provide the services you request.",
    legalRequirements: "Legal Requirements:",
    legalRequirementsText:
      "We may disclose your information if required to do so by law or in response to valid requests by public authorities.",
    businessTransfers: "Business Transfers:",
    businessTransfersText:
      "If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.",
    withConsent: "With Your Consent:",
    withConsentText: "We may share your information with third parties when you have given us your consent to do so.",
    yourRights: "4. Your Rights and Choices",
    yourRightsText:
      "Depending on your location, you may have certain rights regarding your personal information, including:",
    yourRightsItem1: "Accessing, correcting, or deleting your personal information",
    yourRightsItem2: "Objecting to or restricting the processing of your personal information",
    yourRightsItem3:
      "Requesting a copy of your personal information in a structured, commonly used, and machine-readable format",
    yourRightsItem4: "Withdrawing your consent at any time (where processing is based on consent)",
    yourRightsItem5: "Opting out of marketing communications",
    yourRightsExercise:
      'To exercise these rights, please contact us using the information provided in the "Contact Us" section below.',
    dataSecurity: "5. Data Security",
    dataSecurityText:
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
    dataRetention: "6. Data Retention",
    dataRetentionText:
      "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.",
    internationalTransfers: "7. International Data Transfers",
    internationalTransfersText:
      "Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country. We take appropriate measures to ensure that your personal information remains protected in accordance with this Privacy Policy.",
    childrenPrivacy: "8. Children's Privacy",
    childrenPrivacyText:
      "Our Service is not directed to children under the age of 18, and we do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us.",
    policyChanges: "9. Changes to This Privacy Policy",
    policyChangesText:
      'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.',
    contactUs: "10. Contact Us",
    contactUsText: "If you have any questions about this Privacy Policy, please contact us at:",
    contactEmail: "Email: privacy@jolzt.com",
    contactPhone: "Phone: +389 78 700 202",
  },
  mk: {
    backToHome: "Назад кон Почетна",
    privacyPolicy: "Политика за приватност",
    lastUpdated: "Последно ажурирано: 10 април, 2025",
    intro:
      'Jolzt ("ние", "наш" или "нас") е посветен на заштита на вашата приватност. Оваа Политика за приватност објаснува како собираме, користиме, откриваме и ги заштитуваме вашите информации кога ја посетувате нашата веб-страница jolzt.com или ја користите нашата мобилна апликација (заедно, "Услугата").',
    readCarefully:
      "Ве молиме внимателно прочитајте ја оваа Политика за приватност. Со пристапување или користење на нашата Услуга, вие потврдувате дека сте ги прочитале, разбрале и се согласувате да бидете обврзани со сите услови наведени во оваа Политика за приватност.",
    informationWeCollect: "1. Информации кои ги собираме",
    informationWeCollectText:
      "Ние собираме информации кои директно ни ги давате, информации кои автоматски ги собираме кога ја користите нашата Услуга и информации од извори на трети страни.",
    informationYouProvide: "1.1 Информации кои ни ги давате",
    informationYouProvideText: "Можеме да ги собираме следните видови информации кога ја користите нашата Услуга:",
    personalInfo: "Лични информации:",
    personalInfoText:
      "Име, е-пошта, телефонски број, поштенска адреса, датум на раѓање, информации за возачка дозвола и информации за плаќање.",
    accountInfo: "Информации за сметката:",
    accountInfoText: "Корисничко име, лозинка и информации за профилот.",
    rentalInfo: "Информации за изнајмување:",
    rentalInfoText:
      "Датуми на изнајмување, преференци за возило, локации за преземање и враќање и други детали за резервација.",
    communications: "Комуникации:",
    communicationsText:
      "Информации кои ги давате кога контактирате со нашата корисничка поддршка или комуницирате со нас преку Услугата.",
    surveyResponses: "Одговори на анкети:",
    surveyResponsesText: "Информации кои ги давате кога учествувате во анкети или промоции.",
    infoCollectAuto: "1.2 Информации кои автоматски ги собираме",
    infoCollectAutoText:
      "Кога ја користите нашата Услуга, можеме автоматски да собираме одредени информации, вклучувајќи:",
    deviceInfo: "Информации за уредот:",
    deviceInfoText:
      "Информации за вашиот уред, вклучувајќи IP адреса, тип на уред, оперативен систем, тип на прелистувач и идентификатори на уредот.",
    usageInfo: "Информации за користење:",
    usageInfoText:
      "Информации за тоа како ја користите нашата Услуга, вклучувајќи ги страниците кои ги посетувате, времето и траењето на вашите посети и дејствијата кои ги преземате.",
    locationInfo: "Информации за локација:",
    locationInfoText:
      "Со ваша согласност, можеме да собираме прецизни информации за локација од вашиот уред за да обезбедиме услуги базирани на локација.",
    cookiesInfo: "Колачиња и слични технологии:",
    cookiesInfoText:
      "Користиме колачиња и слични технологии за да собираме информации за вашето однесување при прелистување и преференци.",
    howWeUseInfo: "2. Како ги користиме вашите информации",
    howWeUseInfoText: "Можеме да ги користиме информациите кои ги собираме за различни цели, вклучувајќи:",
    howWeUseItem1: "Обезбедување, одржување и подобрување на нашата Услуга",
    howWeUseItem2: "Обработка и управување со вашите резервации за изнајмување автомобили",
    howWeUseItem3: "Верификување на вашиот идентитет и подобност за изнајмување возила",
    howWeUseItem4: "Комуницирање со вас за вашите резервации, сметка и нашата Услуга",
    howWeUseItem5: "Испраќање маркетинг комуникации, промоции и понуди",
    howWeUseItem6: "Одговарање на вашите прашања и обезбедување корисничка поддршка",
    howWeUseItem7: "Анализирање на обрасци на користење и трендови за подобрување на нашата Услуга",
    howWeUseItem8: "Откривање, спречување и решавање на измами, безбедносни проблеми и технички проблеми",
    howWeUseItem9: "Усогласување со законските обврски и спроведување на нашите услови и политики",
    howWeShareInfo: "3. Како ги споделуваме вашите информации",
    howWeShareInfoText: "Можеме да ги споделуваме вашите информации со следните категории на примачи:",
    serviceProviders: "Даватели на услуги:",
    serviceProvidersText:
      "Можеме да ги споделуваме вашите информации со даватели на услуги од трети страни кои извршуваат услуги во наше име, како што се обработка на плаќања, анализа на податоци, испорака на е-пошта, хостинг и корисничка услуга.",
    businessPartners: "Деловни партнери:",
    businessPartnersText:
      "Можеме да ги споделуваме вашите информации со нашите деловни партнери, како што се агенции за изнајмување автомобили, за да ги исполниме вашите резервации и да ги обезбедиме услугите кои ги барате.",
    legalRequirements: "Законски барања:",
    legalRequirementsText:
      "Можеме да ги откриеме вашите информации ако тоа се бара со закон или како одговор на валидни барања од јавните власти.",
    businessTransfers: "Деловни трансфери:",
    businessTransfersText:
      "Ако сме вклучени во спојување, аквизиција или продажба на целиот или дел од нашите средства, вашите информации може да бидат пренесени како дел од таа трансакција.",
    withConsent: "Со ваша согласност:",
    withConsentText: "Можеме да ги споделуваме вашите информации со трети страни кога сте ни дале согласност за тоа.",
    yourRights: "4. Вашите права и избори",
    yourRightsText:
      "Во зависност од вашата локација, можеби имате одредени права во врска со вашите лични информации, вклучувајќи:",
    yourRightsItem1: "Пристапување, корегирање или бришење на вашите лични информации",
    yourRightsItem2: "Приговарање или ограничување на обработката на вашите лични информации",
    yourRightsItem3:
      "Барање копија од вашите лични информации во структуриран, вообичаено користен и машински читлив формат",
    yourRightsItem4: "Повлекување на вашата согласност во било кое време (каде обработката се базира на согласност)",
    yourRightsItem5: "Откажување од маркетинг комуникации",
    yourRightsExercise:
      'За да ги остварите овие права, ве молиме контактирајте не користејќи ги информациите дадени во делот "Контактирајте не" подолу.',
    dataSecurity: "5. Безбедност на податоците",
    dataSecurityText:
      "Ние спроведуваме соодветни технички и организациски мерки за заштита на вашите лични информации од неовластен пристап, откривање, измена и уништување. Сепак, ниту еден метод на пренос преку Интернет или електронско складирање не е 100% безбеден, и не можеме да гарантираме апсолутна безбедност.",
    dataRetention: "6. Задржување на податоците",
    dataRetentionText:
      "Ги задржуваме вашите лични информации онолку долго колку што е потребно за да ги исполниме целите наведени во оваа Политика за приватност, освен ако подолг период на задржување не е потребен или дозволен со закон.",
    internationalTransfers: "7. Меѓународни трансфери на податоци",
    internationalTransfersText:
      "Вашите информации може да бидат пренесени и обработени во земји различни од земјата во која престојувате. Овие земји може да имаат закони за заштита на податоци кои се различни од законите на вашата земја. Преземаме соодветни мерки за да обезбедиме дека вашите лични информации остануваат заштитени во согласност со оваа Политика за приватност.",
    childrenPrivacy: "8. Приватност на децата",
    childrenPrivacyText:
      "Нашата Услуга не е наменета за деца под 18 години, и ние свесно не собираме лични информации од деца под 18 години. Ако сте родител или старател и верувате дека вашето дете ни има дадено лични информации, ве молиме контактирајте не.",
    policyChanges: "9. Промени на оваа Политика за приватност",
    policyChangesText:
      'Можеме да ја ажурираме оваа Политика за приватност од време на време. Ќе ве известиме за било какви промени со објавување на новата Политика за приватност на оваа страница и ажурирање на датумот "Последно ажурирано". Ви се советува периодично да ја прегледувате оваа Политика за приватност за било какви промени.',
    contactUs: "10. Контактирајте не",
    contactUsText: "Ако имате било какви прашања за оваа Политика за приватност, ве молиме контактирајте не на:",
    contactEmail: "Е-пошта: privacy@jolzt.com",
    contactPhone: "Телефон: +389 78 700 202",
  },
  sq: {
    backToHome: "Kthehu në Ballina",
    privacyPolicy: "Politika e Privatësisë",
    lastUpdated: "Përditësuar së fundmi: 10 prill, 2025",
    intro:
      'Jolzt ("ne", "tonë", ose "ne") është e përkushtuar për të mbrojtur privatësinë tuaj. Kjo Politikë e Privatësisë shpjegon se si mbledhim, përdorim, zbulojmë dhe ruajmë informacionin tuaj kur vizitoni faqen tonë të internetit jolzt.com ose përdorni aplikacionin tonë celular (së bashku, "Shërbimi").',
    readCarefully:
      "Ju lutemi lexoni me kujdes këtë Politikë të Privatësisë. Duke hyrë ose përdorur Shërbimin tonë, ju pranoni se keni lexuar, kuptuar dhe pajtoheni të jeni të detyruar nga të gjitha kushtet e përshkruara në këtë Politikë të Privatësisë.",
    informationWeCollect: "1. Informacioni që Mbledhim",
    informationWeCollectText:
      "Ne mbledhim informacion që ju na jepni drejtpërdrejt, informacion që mbledhim automatikisht kur përdorni Shërbimin tonë dhe informacion nga burime të palëve të treta.",
    informationYouProvide: "1.1 Informacioni që na Jepni",
    informationYouProvideText: "Ne mund të mbledhim llojet e mëposhtme të informacionit kur përdorni Shërbimin tonë:",
    personalInfo: "Informacion Personal:",
    personalInfoText:
      "Emri, adresa e emailit, numri i telefonit, adresa postare, data e lindjes, informacioni i patentës së shoferit dhe informacioni i pagesës.",
    accountInfo: "Informacion i Llogarisë:",
    accountInfoText: "Emri i përdoruesit, fjalëkalimi dhe informacioni i profilit.",
    rentalInfo: "Informacion i Qirasë:",
    rentalInfoText:
      "Datat e qirasë, preferencat e automjetit, vendndodhjet e marrjes dhe kthimit dhe detaje të tjera të rezervimit.",
    communications: "Komunikimet:",
    communicationsText:
      "Informacioni që jepni kur kontaktoni shërbimin tonë të klientit ose komunikoni me ne përmes Shërbimit.",
    surveyResponses: "Përgjigjet e Sondazheve:",
    surveyResponsesText: "Informacioni që jepni kur merrni pjesë në sondazhe ose promocione.",
    infoCollectAuto: "1.2 Informacioni që Mbledhim Automatikisht",
    infoCollectAutoText:
      "Kur përdorni Shërbimin tonë, ne mund të mbledhim automatikisht informacion të caktuar, duke përfshirë:",
    deviceInfo: "Informacion i Pajisjes:",
    deviceInfoText:
      "Informacion për pajisjen tuaj, duke përfshirë adresën IP, llojin e pajisjes, sistemin operativ, llojin e shfletuesit dhe identifikuesit e pajisjes.",
    usageInfo: "Informacion i Përdorimit:",
    usageInfoText:
      "Informacion për mënyrën se si përdorni Shërbimin tonë, duke përfshirë faqet që vizitoni, kohën dhe kohëzgjatjen e vizitave tuaja dhe veprimet që ndërmerrni.",
    locationInfo: "Informacion i Vendndodhjes:",
    locationInfoText:
      "Me pëlqimin tuaj, ne mund të mbledhim informacion të saktë të vendndodhjes nga pajisja juaj për të ofruar shërbime të bazuara në vendndodhje.",
    cookiesInfo: "Cookies dhe Teknologji të Ngjashme:",
    cookiesInfoText:
      "Ne përdorim cookies dhe teknologji të ngjashme për të mbledhur informacion për sjelljen tuaj të shfletimit dhe preferencat.",
    howWeUseInfo: "2. Si e Përdorim Informacionin Tuaj",
    howWeUseInfoText: "Ne mund të përdorim informacionin që mbledhim për qëllime të ndryshme, duke përfshirë:",
    howWeUseItem1: "Ofrimin, mirëmbajtjen dhe përmirësimin e Shërbimit tonë",
    howWeUseItem2: "Përpunimin dhe menaxhimin e rezervimeve tuaja të qirasë së makinave",
    howWeUseItem3: "Verifikimin e identitetit tuaj dhe përshtatshmërisë për të marrë me qira automjete",
    howWeUseItem4: "Komunikimin me ju për rezervimet tuaja, llogarinë dhe Shërbimin tonë",
    howWeUseItem5: "Dërgimin e komunikimeve të marketingut, promocioneve dhe ofertave",
    howWeUseItem6: "Përgjigjen ndaj pyetjeve tuaja dhe ofrimin e mbështetjes së klientit",
    howWeUseItem7: "Analizimin e modeleve të përdorimit dhe trendeve për të përmirësuar Shërbimin tonë",
    howWeUseItem8: "Zbulimin, parandalimin dhe adresimin e mashtrimit, çështjeve të sigurisë dhe problemeve teknike",
    howWeUseItem9: "Përputhjen me detyrimet ligjore dhe zbatimin e kushteve dhe politikave tona",
    howWeShareInfo: "3. Si e Ndajmë Informacionin Tuaj",
    howWeShareInfoText: "Ne mund të ndajmë informacionin tuaj me kategoritë e mëposhtme të marrësve:",
    serviceProviders: "Ofruesit e Shërbimeve:",
    serviceProvidersText:
      "Ne mund të ndajmë informacionin tuaj me ofrues shërbimesh të palëve të treta që kryejnë shërbime në emrin tonë, si përpunimi i pagesave, analiza e të dhënave, dërgimi i emailit, hostimi dhe shërbimi i klientit.",
    businessPartners: "Partnerët e Biznesit:",
    businessPartnersText:
      "Ne mund të ndajmë informacionin tuaj me partnerët tanë të biznesit, si agjencitë e qirasë së makinave, për të përmbushur rezervimet tuaja dhe për të ofruar shërbimet që kërkoni.",
    legalRequirements: "Kërkesat Ligjore:",
    legalRequirementsText:
      "Ne mund të zbulojmë informacionin tuaj nëse kërkohet ta bëjmë këtë me ligj ose në përgjigje të kërkesave të vlefshme nga autoritetet publike.",
    businessTransfers: "Transferimet e Biznesit:",
    businessTransfersText:
      "Nëse jemi të përfshirë në një bashkim, blerje ose shitje të të gjitha ose një pjese të aseteve tona, informacioni juaj mund të transferohet si pjesë e asaj transaksioni.",
    withConsent: "Me Pëlqimin Tuaj:",
    withConsentText:
      "Ne mund të ndajmë informacionin tuaj me palë të treta kur na keni dhënë pëlqimin tuaj për ta bërë këtë.",
    yourRights: "4. Të Drejtat dhe Zgjedhjet Tuaja",
    yourRightsText:
      "Në varësi të vendndodhjes suaj, mund të keni të drejta të caktuara në lidhje me informacionin tuaj personal, duke përfshirë:",
    yourRightsItem1: "Qasjen, korrigjimin ose fshirjen e informacionit tuaj personal",
    yourRightsItem2: "Kundërshtimin ose kufizimin e përpunimit të informacionit tuaj personal",
    yourRightsItem3:
      "Kërkimin e një kopje të informacionit tuaj personal në një format të strukturuar, të përdorur zakonisht dhe të lexueshëm nga makina",
    yourRightsItem4: "Tërheqjen e pëlqimit tuaj në çdo kohë (kur përpunimi bazohet në pëlqim)",
    yourRightsItem5: "Zgjedhjen për të mos marrë komunikime marketingu",
    yourRightsExercise:
      'Për të ushtruar këto të drejta, ju lutemi na kontaktoni duke përdorur informacionin e dhënë në seksionin "Na Kontaktoni" më poshtë.',
    dataSecurity: "5. Siguria e të Dhënave",
    dataSecurityText:
      "Ne zbatojmë masa të përshtatshme teknike dhe organizative për të mbrojtur informacionin tuaj personal kundër qasjes së paautorizuar, zbulimit, ndryshimit dhe shkatërrimit. Megjithatë, asnjë metodë e transmetimit përmes Internetit ose ruajtjes elektronike nuk është 100% e sigurt, dhe ne nuk mund të garantojmë siguri absolute.",
    dataRetention: "6. Ruajtja e të Dhënave",
    dataRetentionText:
      "Ne ruajmë informacionin tuaj personal për aq kohë sa është e nevojshme për të përmbushur qëllimet e përshkruara në këtë Politikë të Privatësisë, përveç nëse një periudhë më e gjatë e ruajtjes kërkohet ose lejohet me ligj.",
    internationalTransfers: "7. Transferimet Ndërkombëtare të të Dhënave",
    internationalTransfersText:
      "Informacioni juaj mund të transferohet dhe të përpunohet në vende të ndryshme nga vendi në të cilin banoni. Këto vende mund të kenë ligje të mbrojtjes së të dhënave që janë të ndryshme nga ligjet e vendit tuaj. Ne marrim masa të përshtatshme për të siguruar që informacioni juaj personal mbetet i mbrojtur në përputhje me këtë Politikë të Privatësisë.",
    childrenPrivacy: "8. Privatësia e Fëmijëve",
    childrenPrivacyText:
      "Shërbimi ynë nuk i drejtohet fëmijëve nën moshën 18 vjeç, dhe ne nuk mbledhim me vetëdije informacion personal nga fëmijët nën 18 vjeç. Nëse jeni prind ose kujdestar dhe besoni se fëmija juaj na ka dhënë informacion personal, ju lutemi na kontaktoni.",
    policyChanges: "9. Ndryshimet në këtë Politikë të Privatësisë",
    policyChangesText:
      'Ne mund të përditësojmë këtë Politikë të Privatësisë herë pas here. Ne do t\'ju njoftojmë për çdo ndryshim duke postuar Politikën e re të Privatësisë në këtë faqe dhe duke përditësuar datën "Përditësuar së fundmi". Ju këshilloheni të rishikoni periodikisht këtë Politikë të Privatësisë për çdo ndryshim.',
    contactUs: "10. Na Kontaktoni",
    contactUsText: "Nëse keni ndonjë pyetje në lidhje me këtë Politikë të Privatësisë, ju lutemi na kontaktoni në:",
    contactEmail: "Email: privacy@jolzt.com",
    contactPhone: "Telefon: +389 78 700 202",
  },
}

export default function PrivacyPolicyPage({ params }: { params: { lang: string } }) {
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
            <h1 className="text-3xl font-bold mb-6">{t.privacyPolicy}</h1>
            <div className="prose max-w-none">
              <p className="text-muted-foreground mb-6">{t.lastUpdated}</p>

              <p>{t.intro}</p>
              <p>{t.readCarefully}</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.informationWeCollect}</h2>
              <p>{t.informationWeCollectText}</p>

              <h3 className="text-lg font-medium mt-6 mb-3">{t.informationYouProvide}</h3>
              <p>{t.informationYouProvideText}</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>{t.personalInfo}</strong> {t.personalInfoText}
                </li>
                <li>
                  <strong>{t.accountInfo}</strong> {t.accountInfoText}
                </li>
                <li>
                  <strong>{t.rentalInfo}</strong> {t.rentalInfoText}
                </li>
                <li>
                  <strong>{t.communications}</strong> {t.communicationsText}
                </li>
                <li>
                  <strong>{t.surveyResponses}</strong> {t.surveyResponsesText}
                </li>
              </ul>

              <h3 className="text-lg font-medium mt-6 mb-3">{t.infoCollectAuto}</h3>
              <p>{t.infoCollectAutoText}</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>{t.deviceInfo}</strong> {t.deviceInfoText}
                </li>
                <li>
                  <strong>{t.usageInfo}</strong> {t.usageInfoText}
                </li>
                <li>
                  <strong>{t.locationInfo}</strong> {t.locationInfoText}
                </li>
                <li>
                  <strong>{t.cookiesInfo}</strong> {t.cookiesInfoText}
                </li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.howWeUseInfo}</h2>
              <p>{t.howWeUseInfoText}</p>
              <ul className="list-disc pl-6 mb-4">
                <li>{t.howWeUseItem1}</li>
                <li>{t.howWeUseItem2}</li>
                <li>{t.howWeUseItem3}</li>
                <li>{t.howWeUseItem4}</li>
                <li>{t.howWeUseItem5}</li>
                <li>{t.howWeUseItem6}</li>
                <li>{t.howWeUseItem7}</li>
                <li>{t.howWeUseItem8}</li>
                <li>{t.howWeUseItem9}</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.howWeShareInfo}</h2>
              <p>{t.howWeShareInfoText}</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>{t.serviceProviders}</strong> {t.serviceProvidersText}
                </li>
                <li>
                  <strong>{t.businessPartners}</strong> {t.businessPartnersText}
                </li>
                <li>
                  <strong>{t.legalRequirements}</strong> {t.legalRequirementsText}
                </li>
                <li>
                  <strong>{t.businessTransfers}</strong> {t.businessTransfersText}
                </li>
                <li>
                  <strong>{t.withConsent}</strong> {t.withConsentText}
                </li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.yourRights}</h2>
              <p>{t.yourRightsText}</p>
              <ul className="list-disc pl-6 mb-4">
                <li>{t.yourRightsItem1}</li>
                <li>{t.yourRightsItem2}</li>
                <li>{t.yourRightsItem3}</li>
                <li>{t.yourRightsItem4}</li>
                <li>{t.yourRightsItem5}</li>
              </ul>
              <p>{t.yourRightsExercise}</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.dataSecurity}</h2>
              <p>{t.dataSecurityText}</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.dataRetention}</h2>
              <p>{t.dataRetentionText}</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.internationalTransfers}</h2>
              <p>{t.internationalTransfersText}</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.childrenPrivacy}</h2>
              <p>{t.childrenPrivacyText}</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.policyChanges}</h2>
              <p>{t.policyChangesText}</p>

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
