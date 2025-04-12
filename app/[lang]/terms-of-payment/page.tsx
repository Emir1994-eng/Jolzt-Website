import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { LanguageSelector } from "@/components/language-selector"

// Translations for Terms of Payment
const translations = {
  en: {
    backToHome: "Back to Home",
    termsOfPayment: "Terms of Payment",
    lastUpdated: "Last updated: April 10, 2025",
    intro:
      "These Terms of Payment govern all payment transactions made through the Jolzt website (jolzt.com) and mobile application. By making a payment through our Service, you agree to be bound by these terms.",
    paymentMethods: "1. Payment Methods",
    acceptedPaymentMethods: "1.1 Accepted Payment Methods:",
    acceptedPaymentMethodsText: "We accept the following payment methods:",
    acceptedPaymentMethodsItem1: "Major credit cards (Visa, Mastercard, American Express)",
    acceptedPaymentMethodsItem2: "PayPal",
    acceptedPaymentMethodsItem3: "Bank transfers (for certain bookings)",
    creditCardRequirements: "1.2 Credit Card Requirements:",
    creditCardRequirementsText:
      "All credit cards must be in the renter's name. We do not accept prepaid or debit cards. Some premium car categories may require 2 credit cards.",
    paymentVerification: "1.3 Payment Verification:",
    paymentVerificationText:
      "For security purposes, we may require additional verification for certain transactions, including but not limited to providing identification documents or verification codes.",
    paymentTimingAndProcess: "2. Payment Timing and Process",
    bookingPayment: "2.1 Booking Payment:",
    bookingPaymentText: "Full payment is required at the time of booking to confirm your reservation.",
    securityDeposit: "2.2 Security Deposit:",
    securityDepositText:
      "A security deposit may be required at the time of vehicle pickup. The amount will be specified in your rental agreement and will be pre-authorized on your credit card.",
    additionalCharges: "2.3 Additional Charges:",
    additionalChargesText: "Additional charges may be applied to your payment method after the rental period for:",
    additionalChargesItem1: "Fuel if the vehicle is not returned with the same fuel level as at pickup",
    additionalChargesItem2: "Late returns",
    additionalChargesItem3: "Traffic or parking violations",
    additionalChargesItem4: "Damage to the vehicle not covered by insurance",
    additionalChargesItem5: "Cleaning fees for excessive dirt or odors",
    additionalChargesItem6: "Toll fees or other road charges",
    currencyAndExchangeRates: "3. Currency and Exchange Rates",
    pricingCurrency: "3.1 Pricing Currency:",
    pricingCurrencyText: "All prices on our Service are displayed in Euros (€) unless otherwise specified.",
    currencyConversion: "3.2 Currency Conversion:",
    currencyConversionText:
      "If you make a payment in a currency other than Euros, the conversion will be processed by your payment provider at their current exchange rate. We are not responsible for any fees or exchange rate differences applied by your payment provider.",
    pricingAndTaxes: "4. Pricing and Taxes",
    priceComponents: "4.1 Price Components:",
    priceComponentsText: "The total price displayed during the booking process includes:",
    priceComponentsItem1: "Base rental rate",
    priceComponentsItem2: "Mandatory insurance",
    priceComponentsItem3: "Applicable taxes and fees",
    optionalAddOns: "4.2 Optional Add-ons:",
    optionalAddOnsText:
      "Additional services such as GPS, child seats, additional insurance coverage, or other extras will be clearly displayed as optional add-ons with their respective prices.",
    priceGuarantee: "4.3 Price Guarantee:",
    priceGuaranteeText:
      "Once your booking is confirmed, the price will not change unless you modify your reservation or incur additional charges as outlined in section 2.3.",
    refundsAndCancellations: "5. Refunds and Cancellations",
    cancellationPolicy: "5.1 Cancellation Policy:",
    cancellationPolicyText:
      "Our standard cancellation policy allows for free cancellation up to 48 hours before the scheduled pickup time. Cancellations made less than 48 hours before pickup may incur a cancellation fee of up to 100% of the booking amount.",
    refundProcess: "5.2 Refund Process:",
    refundProcessText:
      "Refunds will be processed to the original payment method used for the booking. Refunds typically take 5-10 business days to appear on your account, depending on your payment provider.",
    noShowPolicy: "5.3 No-Show Policy:",
    noShowPolicyText:
      "If you fail to pick up the vehicle at the scheduled time without prior notification, this will be considered a no-show and no refund will be provided.",
    paymentSecurity: "6. Payment Security",
    dataSecurity: "6.1 Data Security:",
    dataSecurityText:
      "All payment transactions are processed through secure and PCI-compliant payment gateways. We do not store your complete credit card information on our servers.",
    fraudPrevention: "6.2 Fraud Prevention:",
    fraudPreventionText:
      "We employ various fraud prevention measures to protect both our customers and our business. Suspicious transactions may be subject to additional verification or may be declined.",
    invoicing: "7. Invoicing",
    electronicInvoices: "7.1 Electronic Invoices:",
    electronicInvoicesText:
      "All invoices will be sent electronically to the email address provided during the booking process.",
    invoiceContent: "7.2 Invoice Content:",
    invoiceContentText:
      "Invoices will include all relevant details of your rental, including the base rate, additional services, taxes, and any other charges.",
    disputesAndChargebacks: "8. Disputes and Chargebacks",
    disputeResolution: "8.1 Dispute Resolution:",
    disputeResolutionText:
      "If you have any concerns or disputes regarding charges on your account, please contact our customer service team before initiating a chargeback with your payment provider.",
    chargebackConsequences: "8.2 Chargeback Consequences:",
    chargebackConsequencesText:
      "Fraudulent or unwarranted chargebacks may result in the termination of your account and may affect your ability to use our Service in the future.",
    changesToTerms: "9. Changes to Terms of Payment",
    changesToTermsText:
      "We reserve the right to modify these Terms of Payment at any time. Any changes will be effective immediately upon posting on our Service. Your continued use of our Service after such changes constitutes your acceptance of the new Terms of Payment.",
    contactUs: "10. Contact Us",
    contactUsText: "If you have any questions about these Terms of Payment, please contact us at:",
    contactEmail: "Email: payments@jolzt.com",
    contactPhone: "Phone: +389 78 700 202",
  },
  mk: {
    backToHome: "Назад кон Почетна",
    termsOfPayment: "Услови за плаќање",
    lastUpdated: "Последно ажурирано: 10 април, 2025",
    intro:
      "Овие Услови за плаќање ги регулираат сите трансакции за плаќање направени преку веб-страницата на Jolzt (jolzt.com) и мобилната апликација. Со правење на плаќање преку нашата Услуга, вие се согласувате да бидете обврзани со овие услови.",
    paymentMethods: "1. Начини на плаќање",
    acceptedPaymentMethods: "1.1 Прифатени начини на плаќање:",
    acceptedPaymentMethodsText: "Ги прифаќаме следните начини на плаќање:",
    acceptedPaymentMethodsItem1: "Главни кредитни картички (Visa, Mastercard, American Express)",
    acceptedPaymentMethodsItem2: "PayPal",
    acceptedPaymentMethodsItem3: "Банкарски трансфери (за одредени резервации)",
    creditCardRequirements: "1.2 Барања за кредитни картички:",
    creditCardRequirementsText:
      "Сите кредитни картички мора да бидат на име на изнајмувачот. Не прифаќаме припејд или дебитни картички. Некои премиум категории на автомобили може да бараат 2 кредитни картички.",
    paymentVerification: "1.3 Верификација на плаќање:",
    paymentVerificationText:
      "За безбедносни цели, можеме да бараме дополнителна верификација за одредени трансакции, вклучувајќи, но не ограничувајќи се на обезбедување на документи за идентификација или кодови за верификација.",
    paymentTimingAndProcess: "2. Време и процес на плаќање",
    bookingPayment: "2.1 Плаќање за резервација:",
    bookingPaymentText: "Целосно плаќање е потребно во моментот на резервација за да се потврди вашата резервација.",
    securityDeposit: "2.2 Безбедносен депозит:",
    securityDepositText:
      "Безбедносен депозит може да биде потребен во моментот на преземање на возилото. Износот ќе биде наведен во вашиот договор за изнајмување и ќе биде пред-авторизиран на вашата кредитна картичка.",
    additionalCharges: "2.3 Дополнителни трошоци:",
    additionalChargesText:
      "Дополнителни трошоци може да бидат применети на вашиот начин на плаќање по периодот на изнајмување за:",
    additionalChargesItem1: "Гориво ако возилото не е вратено со истото ниво на гориво како при преземањето",
    additionalChargesItem2: "Доцни враќања",
    additionalChargesItem3: "Сообраќајни или паркинг прекршоци",
    additionalChargesItem4: "Штета на возилото која не е покриена со осигурување",
    additionalChargesItem5: "Такси за чистење за прекумерна нечистотија или мириси",
    additionalChargesItem6: "Такси за патарини или други патни трошоци",
    currencyAndExchangeRates: "3. Валута и курсеви на размена",
    pricingCurrency: "3.1 Валута на цените:",
    pricingCurrencyText: "Сите цени на нашата Услуга се прикажани во Евра (€) освен ако не е поинаку наведено.",
    currencyConversion: "3.2 Конверзија на валута:",
    currencyConversionText:
      "Ако направите плаќање во валута различна од Евра, конверзијата ќе биде обработена од вашиот давател на услуги за плаќање по нивниот тековен курс на размена. Ние не сме одговорни за било какви такси или разлики во курсот на размена применети од вашиот давател на услуги за плаќање.",
    pricingAndTaxes: "4. Цени и даноци",
    priceComponents: "4.1 Компоненти на цената:",
    priceComponentsText: "Вкупната цена прикажана за време на процесот на резервација вклучува:",
    priceComponentsItem1: "Основна стапка на изнајмување",
    priceComponentsItem2: "Задолжително осигурување",
    priceComponentsItem3: "Применливи даноци и такси",
    optionalAddOns: "4.2 Опционални додатоци:",
    optionalAddOnsText:
      "Дополнителни услуги како GPS, детски седишта, дополнително осигурително покритие или други екстри ќе бидат јасно прикажани како опционални додатоци со нивните соодветни цени.",
    priceGuarantee: "4.3 Гаранција за цена:",
    priceGuaranteeText:
      "Откако вашата резервација е потврдена, цената нема да се промени освен ако не ја модифицирате вашата резервација или настанат дополнителни трошоци како што е наведено во делот 2.3.",
    refundsAndCancellations: "5. Поврати и откажувања",
    cancellationPolicy: "5.1 Политика за откажување:",
    cancellationPolicyText:
      "Нашата стандардна политика за откажување дозволува бесплатно откажување до 48 часа пред закажаното време за преземање. Откажувањата направени помалку од 48 часа пред преземањето може да предизвикаат такса за откажување до 100% од износот на резервацијата.",
    refundProcess: "5.2 Процес на поврат:",
    refundProcessText:
      "Повратите ќе бидат обработени на оригиналниот начин на плаќање користен за резервацијата. Повратите обично траат 5-10 работни дена за да се појават на вашата сметка, во зависност од вашиот давател на услуги за плаќање.",
    noShowPolicy: "5.3 Политика за недоаѓање:",
    noShowPolicyText:
      "Ако не успеете да го преземете возилото во закажаното време без претходно известување, ова ќе се смета за недоаѓање и нема да биде обезбеден поврат.",
    paymentSecurity: "6. Безбедност на плаќањето",
    dataSecurity: "6.1 Безбедност на податоците:",
    dataSecurityText:
      "Сите трансакции за плаќање се обработуваат преку безбедни и PCI-усогласени платежни портали. Ние не ги чуваме вашите целосни информации за кредитна картичка на нашите сервери.",
    fraudPrevention: "6.2 Превенција од измама:",
    fraudPreventionText:
      "Ние користиме различни мерки за превенција од измама за да ги заштитиме и нашите клиенти и нашиот бизнис. Сомнителните трансакции може да подлежат на дополнителна верификација или може да бидат одбиени.",
    invoicing: "7. Фактурирање",
    electronicInvoices: "7.1 Електронски фактури:",
    electronicInvoicesText:
      "Сите фактури ќе бидат испратени електронски на адресата за е-пошта обезбедена за време на процесот на резервација.",
    invoiceContent: "7.2 Содржина на фактурата:",
    invoiceContentText:
      "Фактурите ќе ги вклучуваат сите релевантни детали за вашето изнајмување, вклучувајќи ја основната стапка, дополнителните услуги, даноците и било кои други трошоци.",
    disputesAndChargebacks: "8. Спорови и повратни наплати",
    disputeResolution: "8.1 Решавање на спорови:",
    disputeResolutionText:
      "Ако имате било какви грижи или спорови во врска со наплатите на вашата сметка, ве молиме контактирајте го нашиот тим за корисничка поддршка пред да иницирате повратна наплата со вашиот давател на услуги за плаќање.",
    chargebackConsequences: "8.2 Последици од повратна наплата:",
    chargebackConsequencesText:
      "Измамничките или неоправданите повратни наплати може да резултираат со прекинување на вашата сметка и може да влијаат на вашата способност да ја користите нашата Услуга во иднина.",
    changesToTerms: "9. Промени на Условите за плаќање",
    changesToTermsText:
      "Го задржуваме правото да ги модифицираме овие Услови за плаќање во било кое време. Било какви промени ќе бидат ефективни веднаш по објавувањето на нашата Услуга. Вашето продолжено користење на нашата Услуга по таквите промени претставува ваше прифаќање на новите Услови за плаќање.",
    contactUs: "10. Контактирајте не",
    contactUsText: "Ако имате било какви прашања за овие Услови за плаќање, ве молиме контактирајте не на:",
    contactEmail: "Е-пошта: payments@jolzt.com",
    contactPhone: "Телефон: +389 78 700 202",
  },
  sq: {
    backToHome: "Kthehu në Ballina",
    termsOfPayment: "Kushtet e Pagesës",
    lastUpdated: "Përditësuar së fundmi: 10 prill, 2025",
    intro:
      "Këto Kushte të Pagesës rregullojnë të gjitha transaksionet e pagesave të bëra përmes faqes së internetit të Jolzt (jolzt.com) dhe aplikacionit celular. Duke bërë një pagesë përmes Shërbimit tonë, ju pajtoheni të jeni të detyruar nga këto kushte.",
    paymentMethods: "1. Metodat e Pagesës",
    acceptedPaymentMethods: "1.1 Metodat e Pranuara të Pagesës:",
    acceptedPaymentMethodsText: "Ne pranojmë metodat e mëposhtme të pagesës:",
    acceptedPaymentMethodsItem1: "Kartat kryesore të kreditit (Visa, Mastercard, American Express)",
    acceptedPaymentMethodsItem2: "PayPal",
    acceptedPaymentMethodsItem3: "Transfertat bankare (për rezervime të caktuara)",
    creditCardRequirements: "1.2 Kërkesat për Kartë Krediti:",
    creditCardRequirementsText:
      "Të gjitha kartat e kreditit duhet të jenë në emër të qiramarrësit. Ne nuk pranojmë karta të parapaguara ose të debitit. Disa kategori premium të makinave mund të kërkojnë 2 karta krediti.",
    paymentVerification: "1.3 Verifikimi i Pagesës:",
    paymentVerificationText:
      "Për qëllime sigurie, ne mund të kërkojmë verifikim shtesë për transaksione të caktuara, duke përfshirë por jo kufizuar në ofrimin e dokumenteve të identifikimit ose kodeve të verifikimit.",
    paymentTimingAndProcess: "2. Koha dhe Procesi i Pagesës",
    bookingPayment: "2.1 Pagesa e Rezervimit:",
    bookingPaymentText: "Pagesa e plotë kërkohet në momentin e rezervimit për të konfirmuar rezervimin tuaj.",
    securityDeposit: "2.2 Depozita e Sigurisë:",
    securityDepositText:
      "Një depozitë sigurie mund të kërkohet në momentin e marrjes së automjetit. Shuma do të specifikohet në marrëveshjen tuaj të qirasë dhe do të para-autorizohet në kartën tuaj të kreditit.",
    additionalCharges: "2.3 Tarifat Shtesë:",
    additionalChargesText: "Tarifa shtesë mund të aplikohen në metodën tuaj të pagesës pas periudhës së qirasë për:",
    additionalChargesItem1: "Karburant nëse automjeti nuk kthehet me të njëjtin nivel karburanti si në marrje",
    additionalChargesItem2: "Kthimet e vonuara",
    additionalChargesItem3: "Shkeljet e trafikut ose parkimit",
    additionalChargesItem4: "Dëmtimi i automjetit që nuk mbulohet nga sigurimi",
    additionalChargesItem5: "Tarifat e pastrimit për papastërti të tepërt ose erëra",
    additionalChargesItem6: "Tarifat e rrugës ose tarifa të tjera rrugore",
    currencyAndExchangeRates: "3. Monedha dhe Kurset e Këmbimit",
    pricingCurrency: "3.1 Monedha e Çmimit:",
    pricingCurrencyText: "Të gjitha çmimet në Shërbimin tonë shfaqen në Euro (€) përveç nëse specifikohet ndryshe.",
    currencyConversion: "3.2 Konvertimi i Monedhës:",
    currencyConversionText:
      "Nëse bëni një pagesë në një monedhë tjetër nga Euro, konvertimi do të përpunohet nga ofruesi juaj i pagesës me kursin e tyre aktual të këmbimit. Ne nuk jemi përgjegjës për asnjë tarifë ose ndryshim të kursit të këmbimit të aplikuar nga ofruesi juaj i pagesës.",
    pricingAndTaxes: "4. Çmimet dhe Taksat",
    priceComponents: "4.1 Komponentët e Çmimit:",
    priceComponentsText: "Çmimi total i shfaqur gjatë procesit të rezervimit përfshin:",
    priceComponentsItem1: "Tarifën bazë të qirasë",
    priceComponentsItem2: "Sigurimin e detyrueshëm",
    priceComponentsItem3: "Taksat dhe tarifat e aplikueshme",
    optionalAddOns: "4.2 Shtesat Opsionale:",
    optionalAddOnsText:
      "Shërbime shtesë si GPS, ndenjëse për fëmijë, mbulim shtesë sigurimi, ose ekstra të tjera do të shfaqen qartë si shtesa opsionale me çmimet e tyre përkatëse.",
    priceGuarantee: "4.3 Garancia e Çmimit:",
    priceGuaranteeText:
      "Pasi rezervimi juaj të konfirmohet, çmimi nuk do të ndryshojë përveç nëse modifikoni rezervimin tuaj ose shkaktoni tarifa shtesë siç përshkruhet në seksionin 2.3.",
    refundsAndCancellations: "5. Rimbursimet dhe Anulimet",
    cancellationPolicy: "5.1 Politika e Anulimit:",
    cancellationPolicyText:
      "Politika jonë standarde e anulimit lejon anulim falas deri në 48 orë para kohës së planifikuar të marrjes. Anulimet e bëra më pak se 48 orë para marrjes mund të shkaktojnë një tarifë anulimi deri në 100% të shumës së rezervimit.",
    refundProcess: "5.2 Procesi i Rimbursimit:",
    refundProcessText:
      "Rimbursimet do të përpunohen në metodën origjinale të pagesës të përdorur për rezervimin. Rimbursimet zakonisht marrin 5-10 ditë pune për t'u shfaqur në llogarinë tuaj, në varësi të ofruesit tuaj të pagesës.",
    noShowPolicy: "5.3 Politika e Mosparaqitjes:",
    noShowPolicyText:
      "Nëse nuk arrini të merrni automjetin në kohën e planifikuar pa njoftim paraprak, kjo do të konsiderohet si mosparaqitje dhe nuk do të ofrohet asnjë rimbursim.",
    paymentSecurity: "6. Siguria e Pagesës",
    dataSecurity: "6.1 Siguria e të Dhënave:",
    dataSecurityText:
      "Të gjitha transaksionet e pagesave përpunohen përmes portaleve të sigurta dhe të përputhshme me PCI. Ne nuk ruajmë informacionin e plotë të kartës suaj të kreditit në serverët tanë.",
    fraudPrevention: "6.2 Parandalimi i Mashtrimit:",
    fraudPreventionText:
      "Ne përdorim masa të ndryshme të parandalimit të mashtrimit për të mbrojtur si klientët tanë ashtu edhe biznesin tonë. Transaksionet e dyshimta mund t'i nënshtrohen verifikimit shtesë ose mund të refuzohen.",
    invoicing: "7. Faturimi",
    electronicInvoices: "7.1 Faturat Elektronike:",
    electronicInvoicesText:
      "Të gjitha faturat do të dërgohen elektronikisht në adresën e emailit të dhënë gjatë procesit të rezervimit.",
    invoiceContent: "7.2 Përmbajtja e Faturës:",
    invoiceContentText:
      "Faturat do të përfshijnë të gjitha detajet relevante të qirasë suaj, duke përfshirë tarifën bazë, shërbimet shtesë, taksat dhe çdo tarifë tjetër.",
    disputesAndChargebacks: "8. Mosmarrëveshjet dhe Kthimet e Pagesave",
    disputeResolution: "8.1 Zgjidhja e Mosmarrëveshjeve:",
    disputeResolutionText:
      "Nëse keni ndonjë shqetësim ose mosmarrëveshje në lidhje me tarifat në llogarinë tuaj, ju lutemi kontaktoni ekipin tonë të shërbimit të klientit përpara se të filloni një kthim pagese me ofruesin tuaj të pagesës.",
    chargebackConsequences: "8.2 Pasojat e Kthimit të Pagesës:",
    chargebackConsequencesText:
      "Kthimet e pagesave mashtruese ose të pajustifikuara mund të rezultojnë në përfundimin e llogarisë suaj dhe mund të ndikojnë në aftësinë tuaj për të përdorur Shërbimin tonë në të ardhmen.",
    changesToTerms: "9. Ndryshimet në Kushtet e Pagesës",
    changesToTermsText:
      "Ne rezervojmë të drejtën të modifikojmë këto Kushte të Pagesës në çdo kohë. Çdo ndryshim do të jetë efektiv menjëherë pas postimit në Shërbimin tonë. Përdorimi i vazhdueshëm i Shërbimit tonë pas ndryshimeve të tilla përbën pranimin tuaj të Kushteve të reja të Pagesës.",
    contactUs: "10. Na Kontaktoni",
    contactUsText: "Nëse keni ndonjë pyetje në lidhje me këto Kushte të Pagesës, ju lutemi na kontaktoni në:",
    contactEmail: "Email: payments@jolzt.com",
    contactPhone: "Telefon: +389 78 700 202",
  },
}

export default function TermsOfPaymentPage({ params }: { params: { lang: string } }) {
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
            <h1 className="text-3xl font-bold mb-6">{t.termsOfPayment}</h1>
            <div className="prose max-w-none">
              <p className="text-muted-foreground mb-6">{t.lastUpdated}</p>

              <p>{t.intro}</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.paymentMethods}</h2>
              <p>
                <strong>{t.acceptedPaymentMethods}</strong> {t.acceptedPaymentMethodsText}
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>{t.acceptedPaymentMethodsItem1}</li>
                <li>{t.acceptedPaymentMethodsItem2}</li>
                <li>{t.acceptedPaymentMethodsItem3}</li>
              </ul>
              <p>
                <strong>{t.creditCardRequirements}</strong> {t.creditCardRequirementsText}
              </p>
              <p>
                <strong>{t.paymentVerification}</strong> {t.paymentVerificationText}
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.paymentTimingAndProcess}</h2>
              <p>
                <strong>{t.bookingPayment}</strong> {t.bookingPaymentText}
              </p>
              <p>
                <strong>{t.securityDeposit}</strong> {t.securityDepositText}
              </p>
              <p>
                <strong>{t.additionalCharges}</strong> {t.additionalChargesText}
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>{t.additionalChargesItem1}</li>
                <li>{t.additionalChargesItem2}</li>
                <li>{t.additionalChargesItem3}</li>
                <li>{t.additionalChargesItem4}</li>
                <li>{t.additionalChargesItem5}</li>
                <li>{t.additionalChargesItem6}</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.currencyAndExchangeRates}</h2>
              <p>
                <strong>{t.pricingCurrency}</strong> {t.pricingCurrencyText}
              </p>
              <p>
                <strong>{t.currencyConversion}</strong> {t.currencyConversionText}
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.pricingAndTaxes}</h2>
              <p>
                <strong>{t.priceComponents}</strong> {t.priceComponentsText}
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>{t.priceComponentsItem1}</li>
                <li>{t.priceComponentsItem2}</li>
                <li>{t.priceComponentsItem3}</li>
              </ul>
              <p>
                <strong>{t.optionalAddOns}</strong> {t.optionalAddOnsText}
              </p>
              <p>
                <strong>{t.priceGuarantee}</strong> {t.priceGuaranteeText}
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.refundsAndCancellations}</h2>
              <p>
                <strong>{t.cancellationPolicy}</strong> {t.cancellationPolicyText}
              </p>
              <p>
                <strong>{t.refundProcess}</strong> {t.refundProcessText}
              </p>
              <p>
                <strong>{t.noShowPolicy}</strong> {t.noShowPolicyText}
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.paymentSecurity}</h2>
              <p>
                <strong>{t.dataSecurity}</strong> {t.dataSecurityText}
              </p>
              <p>
                <strong>{t.fraudPrevention}</strong> {t.fraudPreventionText}
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.invoicing}</h2>
              <p>
                <strong>{t.electronicInvoices}</strong> {t.electronicInvoicesText}
              </p>
              <p>
                <strong>{t.invoiceContent}</strong> {t.invoiceContentText}
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">{t.disputesAndChargebacks}</h2>
              <p>
                <strong>{t.disputeResolution}</strong> {t.disputeResolutionText}
              </p>
              <p>
                <strong>{t.chargebackConsequences}</strong> {t.chargebackConsequencesText}
              </p>

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
