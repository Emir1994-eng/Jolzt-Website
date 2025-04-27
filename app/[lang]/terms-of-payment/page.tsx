import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { LanguageSelector } from "@/components/language-selector"

// Translations for Terms of Payment
const translations = {
  en: {
    // Header
    backToHome: "Back to Home",
    paymentTermsTitle: "Payment Terms",
    lastUpdated: "Last updated: April 10, 2025",

    // Introduction
    introductionTitle: "INTRODUCTION",
    introductionText1: "These Terms regulate the payment process for services offered by JOLZT LLC Skopje with EMBS 7760957 (hereinafter: 'JOLZT') on its website and/or application and/or other media of JOLZT (collectively 'JOLZT Platform', 'Platform JOLZT' or simply 'Platform').",
    introductionText2: "By using the platform, you agree to these terms, indicating that you have thoroughly read, understood, and accepted them, along with all rules, conditions, policies, and other documents mentioned and/or attached as links in these Terms. Each time you access our platform, it means that you agree to these Terms. If you do not agree with them, you are not authorized to receive additional information or continue using the JOLZT platform.",

    // Making a Reservation
    reservationTitle: "Making a Reservation",
    reservationText1: "To access the JOLZT platform and all its features and benefits, you need to register and create a user profile and become a member of JOLZT.",
    reservationText2: "To register your user profile, you need to provide accurate, up-to-date, and complete information during the registration process and update such information as needed.",
    reservationText3: "Upon receiving a registration request on the Platform, the JOLZT team verifies your user profile to determine if you meet the registration rules and conditions.",
    reservationText4: "Registration and use of the Platform are completely free for users.",
    reservationText5: "More on how to register a profile on the JOLZT Platform can be found in our Terms and Conditions of Use.",
    reservationText6: "After successfully registering your user profile, you can order and use the services offered by JOLZT.",
    reservationText7: "By selecting the desired service (listing) posted on the JOLZT Platform by the Client, a window will open with a review of the selected listings. It is important to check the content of the selected listing before proceeding further. Just by selecting a listing, it does not mean a reservation has been made. If you do not send a reservation request and the User's inactivity time on the Platform exceeds 30 minutes, the content of the window with the review of selected listings will be deleted.",
    reservationText8: "If you want to proceed further, you need to click on the 'Make a reservation request' button. By doing so, you send a reservation request to the Client, agreeing to pay all costs and fees, including the vehicle rental.",
    reservationText9: "Upon sending the reservation request, it will be forwarded by JOLZT to the Client. The Client must approve the sent request, which, upon approval, JOLZT will forward to the User.",
    reservationText10: "The Client has the right to cancel the reservation request only if there is a real and justified reason following applicable rules, conditions, policies, and regulations. JOLZT reserves the right to impose additional charges and fees, as well as cancel/suspend the Client's user profile if it notices a reservation cancellation without a real and justified reason.",
    reservationText11: "By confirming the reservation, a contractual relationship – lease – is established between the Client and the User. The conditions and rules stated in the ad, including all details about the vehicle, prices, and rules, are an integral part of the Rental Agreement. You will be able to generate the concluded Rental Agreement on the platform, the content of which corresponds to the made and approved reservation.",
    reservationText12: "Upon receiving the reservation confirmation from JOLZT, you can proceed to payment.",

    // Payment
    paymentTitle: "Payment",
    paymentText1: "To complete the payment, you need to enter the following information: name, surname, address (city, street, number), date of birth, phone, email address, and additional comments if you have any.",
    paymentText2: "The advantage of registering as a User on the Platform is that you enter this information only once. This way, each of your subsequent reservations will be faster and easier.",
    paymentText3: "If you have a voucher and/or promotional code that you want to use, enter the voucher/code number in the 'Promotional Code / Voucher' field.",
    paymentText4: "Payment is made electronically in real-time at the time of the transaction. Payment can only be made by credit card (Visa and/or MasterCard).",
    paymentText5: "To complete the payment, you need to enter the credit card information – cardholder's name, card number, CVV (the last three numbers on the back of the card), and the card's expiration date – on a secure and encrypted website.",
    paymentText6: "Upon successful authorization, the User receives a notification of the successful/unsuccessful payment by email and/or SMS.",
    paymentText7: "When making an online payment for your reservations, you can choose to save your credit card details on the device you log in from.",
    paymentText8: "JOLZT does not store credit card details nor shares payment information with third parties unless it is necessary to process payments.",
    paymentText9: "JOLZT fully disclaims any responsibility for damages that may be caused to the Client and/or third parties if it occurs due to improper and unauthorized use of the credit card or if, for any reason, it is misused or used without the owner's knowledge and consent or if it is stolen. In such cases, JOLZT is not obliged to refund the paid funds. JOLZT is not responsible for the internet traffic costs of the User and will not be liable for any damage that may occur as a result of potential technical problems on the Platform and/or internet connection interruption at the time of using electronic services when online purchasing.",
    paymentText10: "The final step to fully completing the reservation is clicking the 'Finish reservation' button. After this, you will receive a confirmation email with reservation details. As a registered user or client, you can always check the status of the reservation via the link you receive by email or in your user profile in the 'Made reservations' section.",

    // Prices
    pricesTitle: "Prices of Services Available on the Platform",
    pricesText1: "The applicable prices for each service are published on the Platform. Each published price represents a total amount of: 1) Rent due to the Client and 2) Fee due to JOLZT.",
    pricesText2: "The price is fixed and corresponds to the price available at the time of sending the reservation request.",
    pricesText3: "JOLZT has the right to retain an amount as a fee for its services for each made vehicle reservation unless otherwise agreed.",
    pricesText4: "The displayed prices of the services published on the Platform include all applicable taxes. JOLZT has no obligation to calculate and pay any taxes and charges for the income that the Client earns based on the rental of their vehicle.",
    pricesText5: "Prices are expressed in the official currency of the country in which the User orders.",
    pricesText6: "Below we present the fee structure that JOLZT charges for different types of reservations:",
    pricesListItem1: "Short reservation (up to 24 hours): JOLZT retains 35% of the paid price as a fee, while the remaining 65% of the price belongs to the Client.",
    pricesListItem2: "Short to medium reservation (1 to 3 days): JOLZT retains 30% of the paid price as a fee, while the remaining 70% of the price belongs to the Client.",
    pricesListItem3: "Medium reservation (4 to 7 days): JOLZT retains 25% of the paid price as a fee, while the remaining 75% of the price belongs to the Client.",
    pricesListItem4: "Medium to long reservation (8 to 30 days): JOLZT retains 20% of the paid price as a fee, while the remaining 80% of the price belongs to the Client.",
    pricesListItem5: "Long reservation (more than 30 days): JOLZT retains 15% of the paid price as a fee, while the remaining 85% of the price belongs to the Client.",

    // Changes and Cancellations
    changesTitle: "Right to Change and Cancel Ads and Reservations on the Platform",
    changesText1: "If the User cancels the reservation before it is confirmed by the Client, JOLZT will reasonably cancel any pre-authorization from the User's payment method and/or refund any nominal amounts that may have been charged from the User's payment method in connection with the requested reservation.",
    changesText2: "If the User cancels their reservation after the reservation request has been confirmed by the Client, the amount that should be paid to the Client is determined according to the following cancellation conditions:",
    changesSubtitle1: "I. Reservation made 30 days before its start:",
    changesListItem1: "If the reservation is canceled within 48 hours before its start, the User is entitled to a full refund of the paid funds;",
    changesListItem2: "If the reservation is canceled within 24 hours before its start, the User is entitled to a 50% refund of the paid funds;",
    changesListItem3: "If the reservation is canceled on the day of its start, the User is not entitled to a refund of the paid funds. In such a case, the Client retains the paid amount as a rental fee, while JOLZT has the right to retain the appropriate fee for the made reservation unless otherwise agreed.",
    changesSubtitle2: "II. Reservation made more than 30 days before its start:",
    changesListItem4: "If the reservation is canceled within the first 14 days after booking, the User is entitled to a full refund of the paid funds;",
    changesListItem5: "If the reservation is canceled on the 15th day or later after booking, the User is not entitled to a refund of the paid funds. In such a case, the Client retains the paid amount as a rental fee, while JOLZT has the right to retain the appropriate fee for the made reservation unless otherwise agreed.",
    changesText3: "Clients are obliged to accurately, tidily and promptly update the cancellation conditions in their listing according to these Terms of Payment.",
    changesText4: "Any change and modification of the listing and reservation is allowed. In such a case, JOLZT has the right to impose additional charges related to the modifications of the listing or reservation.",
    changesText5: "All changes or modifications to the listing or reservation must be immediately communicated via the JOLZT platform. Clear and timely communication helps ensure that all parties are informed and agree with the new conditions.",
    changesText6: "If the change results in additional costs, they will be clearly communicated to the User before confirming the change. The User will have the opportunity to review and accept these costs. Failure to pay additional amounts may result in the cancellation of the change request and potentially the original reservation.",
    changesText7: "If the User does not return the rented vehicle to the Client in a timely manner according to the conditions stated in the listing, the confirmed reservation, and the concluded rental agreement, it may result in additional payments by the User for late return.",
    changesText8: "The Client is not entitled to any compensation or refund for reservations canceled as a result of the cancellation or suspension of their user profile.",

    // Footer
    footerText: "By using the JOLZT Platform, you agree to adhere to these Terms of Payment. Providing clarity and compliance with these terms helps maintain a smooth and confidential experience for all Users and Clients. These payment terms may be changed without prior notice by JOLZT. Updated payment terms will be published on our Platform and will apply to all future transactions."
  },

  mk: {
    backToHome: "Назад кон Почетна",
    // Header
    paymentTermsTitle: "Услови за плаќање",
    lastUpdated: "Последно ажурирање: 10 април 2025",

    // Introduction
    introductionTitle: "ВОВЕД",
    introductionText1: "Овие Услови го регулираат процесот на плаќање за услугите понудени од JOLZT DOO Скопје со ЕМБС 7760957 (во натамошниот текст: 'JOLZT') на неговата веб-страница и/или апликација и/или други медиуми на JOLZT (колективно 'Платформа JOLZT', 'JOLZT Платформа' или едноставно 'Платформа').",
    introductionText2: "Со користење на платформата, вие се согласувате со овие услови, што укажува дека сте ги прочитале, разбрале и прифатиле, заедно со сите правила, услови, политики и други документи споменати и/или прикачени како врски во овие Услови. Секој пат кога ќе ја пристапите нашата платформа, тоа значи дека се согласувате со овие Услови. Ако не се согласувате со нив, не сте овластени да примате дополнителни информации или да продолжите да ја користите JOLZT платформата.",

    // Making a Reservation
    reservationTitle: "Правење резервација",
    reservationText1: "За да ја пристапите JOLZT платформата и сите нејзини функции и придобивки, треба да се регистрирате и да креирате кориснички профил и да станете член на JOLZT.",
    reservationText2: "За да го регистрирате вашиот кориснички профил, треба да обезбедите точни, ажурирани и целосни информации за време на процесот на регистрација и да ги ажурирате таквите информации по потреба.",
    reservationText3: "По примање на барање за регистрација на Платформата, тимот на JOLZT го проверува вашиот кориснички профил за да утврди дали ги исполнувате правилата и условите за регистрација.",
    reservationText4: "Регистрацијата и користењето на Платформата се целосно бесплатни за корисниците.",
    reservationText5: "Повеќе за тоа како да регистрирате профил на JOLZT Платформата може да најдете во нашите Услови за користење.",
    reservationText6: "По успешното регистрирање на вашиот кориснички профил, можете да ги нарачате и користите услугите понудени од JOLZT.",
    reservationText7: "Со избирање на посакуваната услуга (оглас) објавен на JOLZT Платформата од страна на Клиентот, ќе се отвори прозорец со преглед на избраните огласи. Важно е да го проверите содржината на избраниот оглас пред да продолжите понатаму. Само со избирање на оглас, не значи дека е направена резервација. Ако не испратите барање за резервација и времето на неактивност на Корисникот на Платформата надмине 30 минути, содржината на прозорецот со преглед на избраните огласи ќе биде избришана.",
    reservationText8: "Ако сакате да продолжите понатаму, треба да кликнете на копчето 'Направи барање за резервација'. Со тоа, испраќате барање за резервација до Клиентот, согласувајќи се да ги платите сите трошоци и такси, вклучувајќи го и закупот на возилото.",
    reservationText9: "По испраќање на барањето за резервација, тоа ќе биде проследено од JOLZT до Клиентот. Клиентот мора да го одобри испратеното барање, кое по одобрување, JOLZT ќе го проследи до Корисникот.",
    reservationText10: "Клиентот има право да го откаже барањето за резервација само ако постои вистинска и оправдана причина во согласност со применливите правила, услови, политики и прописи. JOLZT си ја задржува правото да наметне дополнителни такси и да го откаже/суспендира корисничкиот профил на Клиентот ако забележи откажување на резервација без вистинска и оправдана причина.",
    reservationText11: "Со потврдување на резервацијата, се воспоставува договорна врска – закуп – помеѓу Клиентот и Корисникот. Условите и правилата наведени во огласот, вклучувајќи ги сите детали за возилото, цените и правилата, се составен дел од Договорот за закуп. Ќе можете да го генерирате склучениот Договор за закуп на платформата, чија содржина одговара на направената и одобрена резервација.",
    reservationText12: "По примање на потврда за резервација од JOLZT, можете да продолжите со плаќање.",

    // Payment
    paymentTitle: "Плаќање",
    paymentText1: "За да го завршите плаќањето, треба да ги внесете следните информации: име, презиме, адреса (град, улица, број), датум на раѓање, телефон, е-пошта и дополнителни коментари доколку ги имате.",
    paymentText2: "Предноста на регистрирањето како Корисник на Платформата е што ги внесувате овие информации само еднаш. На овој начин, секоја наредна резервација ќе биде побрза и полесна.",
    paymentText3: "Ако имате ваучер и/или промотивен код што сакате да го користите, внесете го бројот на ваучерот/кодот во полето 'Промотивен код / Ваучер'.",
    paymentText4: "Плаќањето се врши електронски во реално време во моментот на трансакцијата. Плаќањето може да се изврши само со кредитна картичка (Visa и/или MasterCard).",
    paymentText5: "За да го завршите плаќањето, треба да ги внесете информациите за кредитната картичка – име на сопственикот на картичката, број на картичката, CVV (последните три броја на задната страна на картичката) и рокот на важност на картичката – на безбедна и шифрирана веб-страница.",
    paymentText6: "По успешна авторизација, Корисникот добива известување за успешното/неуспешното плаќање по е-пошта и/или SMS.",
    paymentText7: "При правење онлајн плаќање за вашите резервации, можете да изберете да ги зачувате деталите за вашата кредитна картичка на уредот од кој се најавувате.",
    paymentText8: "JOLZT не ги зачувува деталите за кредитните картички ниту ги споделува информациите за плаќање со трети страни освен ако тоа не е неопходно за обработка на плаќањата.",
    paymentText9: "JOLZT целосно се ослободува од одговорност за штети што може да бидат предизвикани на Клиентот и/или трети страни ако се случи поради неправилна и неовластена употреба на кредитната картичка или ако, поради која било причина, таа е злоупотребена или користена без знаење и согласност на сопственикот или ако е украдена. Во такви случаи, JOLZT не е должна да ги врати платените средства. JOLZT не е одговорна за трошоците за интернет сообраќај на Корисникот и нема да биде одговорна за каква било штета што може да настане како резултат на потенцијални технички проблеми на Платформата и/или прекин на интернет конекцијата во моментот на користење на електронските услуги при онлајн купување.",
    paymentText10: "Последниот чекор за целосно завршување на резервацијата е кликнување на копчето 'Заврши резервација'. После ова, ќе добиете потврдна е-пошта со детали за резервацијата. Како регистриран корисник или клиент, секогаш можете да ја проверите состојбата на резервацијата преку линкот што го добивате по е-пошта или во вашиот кориснички профил во делот 'Направени резервации'.",

    // Prices
    pricesTitle: "Цени на услугите достапни на Платформата",
    pricesText1: "Применливите цени за секоја услуга се објавени на Платформата. Секоја објавена цена претставува вкупен износ од: 1) Закуп што му припаѓа на Клиентот и 2) Надомест што му припаѓа на JOLZT.",
    pricesText2: "Цената е фиксна и одговара на цената достапна во моментот на испраќање на барањето за резервација.",
    pricesText3: "JOLZT има право да задржи износ како надомест за неговите услуги за секоја направена резервација на возило, освен ако не е поинаку договорено.",
    pricesText4: "Прикажаните цени на услугите објавени на Платформата ги вклучуваат сите применливи даноци. JOLZT нема обврска да пресметува и плаќа какви било даноци и такси за приходот што го заработува Клиентот врз основа на закупот на неговото возило.",
    pricesText5: "Цените се изразени во официјалната валута на земјата во која Корисникот нарачува.",
    pricesText6: "Подолу ја прикажуваме структурата на надомест што JOLZT наплатува за различни типови на резервации:",
    pricesListItem1: "Кратка резервација (до 24 часа): JOLZT задржува 35% од платената цена како надомест, додека преостанатите 65% од цената му припаѓаат на Клиентот.",
    pricesListItem2: "Кратка до средна резервација (1 до 3 дена): JOLZT задржува 30% од платената цена како надомест, додека преостанатите 70% од цената му припаѓаат на Клиентот.",
    pricesListItem3: "Средна резервација (4 до 7 дена): JOLZT задржува 25% од платената цена како надомест, додека преостанатите 75% од цената му припаѓаат на Клиентот.",
    pricesListItem4: "Средна до долга резервација (8 до 30 дена): JOLZT задржува 20% од платената цена како надомест, додека преостанатите 80% од цената му припаѓаат на Клиентот.",
    pricesListItem5: "Долга резервација (повеќе од 30 дена): JOLZT задржува 15% од платената цена како надомест, додека преостанатите 85% од цената му припаѓаат на Клиентот.",

    // Changes and Cancellations
    changesTitle: "Право на промена и откажување на огласи и резервации на Платформата",
    changesText1: "Ако Корисникот ја откаже резервацијата пред да биде потврдена од Клиентот, JOLZT разумно ќе ја откаже секоја претходна авторизација од начинот на плаќање на Корисникот и/или ќе ги врати сите номинални износи што може да бидат наплатени од начинот на плаќање на Корисникот во врска со побараната резервација.",
    changesText2: "Ако Корисникот ја откаже својата резервација откако барањето за резервација ќе биде потврдено од Клиентот, износот што треба да се плати на Клиентот се утврдува според следните услови за откажување:",
    changesSubtitle1: "I. Резервација направена 30 дена пред нејзиниот почеток:",
    changesListItem1: "Ако резервацијата е откажана во рок од 48 часа пред нејзиниот почеток, Корисникот има право на целосно враќање на платените средства;",
    changesListItem2: "Ако резервацијата е откажана во рок од 24 часа пред нејзиниот почеток, Корисникот има право на враќање на 50% од платените средства;",
    changesListItem3: "Ако резервацијата е откажана на денот на нејзиниот почеток, Корисникот нема право на враќање на платените средства. Во таков случај, Клиентот ги задржува платените средства како надомест за закуп, додека JOLZT има право да го задржи соодветниот надомест за направената резервација, освен ако не е поинаку договорено.",
    changesSubtitle2: "II. Резервација направена повеќе од 30 дена пред нејзиниот почеток:",
    changesListItem4: "Ако резервацијата е откажана во првите 14 дена по резервирањето, Корисникот има право на целосно враќање на платените средства;",
    changesListItem5: "Ако резервацијата е откажана на 15-тиот ден или подоцна по резервирањето, Корисникот нема право на враќање на платените средства. Во таков случај, Клиентот ги задржува платените средства како надомест за закуп, додека JOLZT има право да го задржи соодветниот надомест за направената резервација, освен ако не е поинаку договорено.",
    changesText3: "Клиентите се должни точно, уредно и навремено да ги ажурираат условите за откажување во нивниот оглас согласно овие Услови за плаќање.",
    changesText4: "Секоја промена и модификација на огласот и резервацијата е дозволена. Во таков случај, JOLZT има право да наметне дополнителни такси поврзани со модификациите на огласот или резервацијата.",
    changesText5: "Сите промени или модификации на огласот или резервацијата мора веднаш да се комуницираат преку JOLZT платформата. Јасна и навремена комуникација помага да се осигура дека сите страни се информирани и се согласни со новите услови.",
    changesText6: "Ако промената резултира со дополнителни трошоци, тие ќе бидат јасно комуницирани до Корисникот пред потврдување на промената. Корисникот ќе има можност да ги прегледа и прифати овие трошоци. Неплаќање на дополнителни износи може да резултира со откажување на барањето за промена и потенцијално на оригиналната резервација.",
    changesText7: "Ако Корисникот не го врати изнајменото возило на Клиентот навремено согласно условите наведени во огласот, потврдената резервација и склучениот договор за закуп, тоа може да резултира со дополнителни плаќања од страна на Корисникот за доцно враќање.",
    changesText8: "Клиентот нема право на никаква компензација или враќање на средства за резервации откажани како резултат на откажувањето или суспензијата на неговиот кориснички профил.",

    // Footer
    footerText: "Со користење на JOLZT Платформата, вие се согласувате да се придржувате до овие Услови за плаќање. Обезбедувајќи јасност и усогласеност со овие услови помага да се одржи мазно и доверливо искуство за сите Корисници и Клиенти. Овие услови за плаќање може да се променат без претходно известување од страна на JOLZT. Ажурираните услови за плаќање ќе бидат објавени на нашата Платформа и ќе важат за сите идни трансакции."
  },
sq: {
    // Header
    backToHome: "Kthehu në Faqen Kryesore",
    paymentTermsTitle: "Kushtet e Pagesës",
    lastUpdated: "Përditësuar së fundi: 10 Prill 2025",

    // Introduction
    introductionTitle: "HYRJE",
    introductionText1: "Këto Kushte rregullojnë procesin e pagesës për shërbimet e ofruara nga JOLZT DOO Shkup me EMBS 7760957 (në tekstin e mëtejmë: 'JOLZT') në faqen e saj të internetit dhe/ose aplikacionin dhe/ose media të tjera të JOLZT (të quajtura së bashku 'Platforma JOLZT', 'Platforma JOLZT' ose thjesht 'Platforma').",
    introductionText2: "Duke përdorur platformën, ju pranoni këto kushte, duke treguar se i keni lexuar me kujdes, kuptuar dhe pranuar ato, së bashku me të gjitha rregullat, kushtet, politikat dhe dokumentet e tjera të përmendura dhe/ose të bashkëngjitura si lidhje në këto Kushte. Sa herë që hyni në platformën tonë, do të thotë se ju pajtoheni me këto Kushte. Nëse nuk pajtoheni me to, nuk jeni të autorizuar të merrni informacion shtesë ose të vazhdoni të përdorni platformën JOLZT.",

    // Making a Reservation
    reservationTitle: "Bërja e një Rezervimi",
    reservationText1: "Për të hyrë në platformën JOLZT dhe të gjitha veçoritë dhe përfitimet e saj, duhet të regjistroheni dhe të krijoni një profil përdoruesi dhe të bëheni anëtar i JOLZT.",
    reservationText2: "Për të regjistruar profilin tuaj të përdoruesit, duhet të siguroni informacion të saktë, të përditësuar dhe të plotë gjatë procesit të regjistrimit dhe të përditësoni këto informacione sipas nevojës.",
    reservationText3: "Pas marrjes së një kërkese regjistrimi në Platformë, ekipi i JOLZT verifikon profilin tuaj të përdoruesit për të përcaktuar nëse plotësoni rregullat dhe kushtet e regjistrimit.",
    reservationText4: "Regjistrimi dhe përdorimi i Platformës janë plotësisht falas për përdoruesit.",
    reservationText5: "Më shumë se si të regjistroni një profil në Platformën JOLZT mund të gjeni në Kushtet tona të Përdorimit.",
    reservationText6: "Pas regjistrimit të suksesshëm të profilit tuaj të përdoruesit, mund të porosisni dhe përdorni shërbimet e ofruara nga JOLZT.",
    reservationText7: "Duke zgjedhur shërbimin e dëshiruar (listimin) të postuar në Platformën JOLZT nga Klienti, do të hapet një dritare me një shqyrtim të listimeve të zgjedhura. Është e rëndësishme të kontrolloni përmbajtjen e listimit të zgjedhur përpara se të vazhdoni më tej. Vetëm duke zgjedhur një listim, nuk do të thotë që është bërë një rezervim. Nëse nuk dërgoni një kërkesë rezervimi dhe koha e mosveprimit të Përdoruesit në Platformë kalon 30 minuta, përmbajtja e dritares me shqyrtimin e listimeve të zgjedhura do të fshihet.",
    reservationText8: "Nëse dëshironi të vazhdoni më tej, duhet të klikoni në butonin 'Bëni një kërkesë rezervimi'. Duke bërë këtë, ju dërgoni një kërkesë rezervimi te Klienti, duke u pajtuar të paguani të gjitha kostot dhe tarifat, duke përfshirë qiranë e automjetit.",
    reservationText9: "Pas dërgimit të kërkesës për rezervim, ajo do të dërgohet nga JOLZT te Klienti. Klienti duhet të miratojë kërkesën e dërguar, e cila pas miratimit, JOLZT do ta dërgojë te Përdoruesi.",
    reservationText10: "Klienti ka të drejtë të anulojë kërkesën për rezervim vetëm nëse ekziston një arsye e vërtetë dhe e justifikuar në përputhje me rregullat, kushtet, politikat dhe rregulloret e zbatueshme. JOLZT rezervon të drejtën të vendosë tarifa dhe pagesa shtesë, si dhe të anulojë/pezullojë profilin e përdoruesit të Klientit nëse vëren një anulim rezervimi pa një arsye të vërtetë dhe të justifikuar.",
    reservationText11: "Duke konfirmuar rezervimin, krijohet një marrëdhënie kontraktuale - qira - midis Klientit dhe Përdoruesit. Kushtet dhe rregullat e përcaktuara në reklamë, duke përfshirë të gjitha detajet për automjetin, çmimet dhe rregullat, janë pjesë përbërëse e Kontratës së Qirasë. Ju do të jeni në gjendje të gjeneroni Kontratën e Qirasë së përfunduar në platformë, përmbajtja e së cilës korrespondon me rezervimin e bërë dhe të miratuar.",
    reservationText12: "Pas marrjes së konfirmimit të rezervimit nga JOLZT, mund të vazhdoni me pagesën.",

    // Payment
    paymentTitle: "Pagesa",
    paymentText1: "Për të përfunduar pagesën, duhet të vendosni informacionin e mëposhtëm: emri, mbiemri, adresa (qyteti, rruga, numri), data e lindjes, telefoni, adresa e email-it dhe komente shtesë nëse keni.",
    paymentText2: "Përparësia e regjistrimit si Përdorues në Platformë është se ju vendosni këto informacione vetëm një herë. Në këtë mënyrë, çdo rezervim pasues do të jetë më i shpejtë dhe më i lehtë.",
    paymentText3: "Nëse keni një vouchër dhe/ose kod promocional që dëshironi të përdorni, vendosni numrin e vouchërit/kodit në fushën 'Kodi Promocional / Vouchër'.",
    paymentText4: "Pagesa bëhet elektronikisht në kohë reale në kohën e transaksionit. Pagesa mund të bëhet vetëm me kartë krediti (Visa dhe/ose MasterCard).",
    paymentText5: "Për të përfunduar pagesën, duhet të vendosni informacionin e kartës së kreditit - emri i mbajtësit të kartës, numri i kartës, CVV (tre numrat e fundit në pjesën e pasme të kartës) dhe data e skadimit të kartës - në një faqe të sigurt dhe të koduar të internetit.",
    paymentText6: "Pas autorizimit të suksesshëm, Përdoruesi merr një njoftim për pagesën e suksesshme/të pasuksesshme me email dhe/ose SMS.",
    paymentText7: "Kur bëni pagesë online për rezervimet tuaja, mund të zgjidhni të ruani detajet e kartës suaj të kreditit në pajisjen nga e cila hyni.",
    paymentText8: "JOLZT nuk ruan detajet e kartave të kreditit dhe nuk i shpërndan informacionet e pagesës me palët e treta përveç nëse është e nevojshme për përpunimin e pagesave.",
    paymentText9: "JOLZT shpall plotësisht përgjegjësinë e saj për dëmet që mund të shkaktohen Klientit dhe/ose palëve të treta nëse ndodhin për shkak të përdorimit të pasaktë dhe të paautorizuar të kartës së kreditit ose nëse, për ndonjë arsye, ajo përdoret gabimisht ose pa dijeninë dhe miratimin e pronarit ose nëse është vjedhur. Në raste të tilla, JOLZT nuk është e detyruar të kthejë fondet e paguara. JOLZT nuk është përgjegjëse për kostot e trafikut të internetit të Përdoruesit dhe nuk do të jetë përgjegjëse për ndonjë dëmtim që mund të ndodhë si rezultat i problemeve teknike të mundshme në Platformë dhe/ose ndërprerjes së lidhjes me internetin në kohën e përdorimit të shërbimeve elektronike gjatë blerjeve online.",
    paymentText10: "Hapi i fundit për të përfunduar plotësisht rezervimin është klikimi në butonin 'Përfundo rezervimin'. Pas kësaj, do të merrni një email konfirmimi me detajet e rezervimit. Si përdorues ose klient i regjistruar, gjithmonë mund të kontrolloni statusin e rezervimit përmes lidhjes që merrni me email ose në profilin tuaj të përdoruesit në seksionin 'Rezervimet e bëra'.",

    // Prices
    pricesTitle: "Çmimet e Shërbimeve të Disponueshme në Platformë",
    pricesText1: "Çmimet e zbatueshme për çdo shërbim janë publikuar në Platformë. Çdo çmim i publikuar përfaqëson një shumë totale prej: 1) Qiraja që i takon Klientit dhe 2) Tarifa që i takon JOLZT.",
    pricesText2: "Çmimi është fiks dhe korrespondon me çmimin e disponueshëm në kohën e dërgimit të kërkesës për rezervim.",
    pricesText3: "JOLZT ka të drejtën të mbajë një shumë si tarifë për shërbimet e saj për çdo rezervim të bërë të automjetit, përveç nëse është marrëveshur ndryshe.",
    pricesText4: "Çmimet e shfaqura të shërbimeve të publikuara në Platformë përfshijnë të gjitha taksat e zbatueshme. JOLZT nuk ka asnjë detyrim për të llogaritur dhe paguar ndonjë taksë dhe tarifë për të ardhurat që fiton Klienti bazuar në qiranë e automjetit të tyre.",
    pricesText5: "Çmimet shprehen në monedhën zyrtare të vendit në të cilin porositet nga Përdoruesi.",
    pricesText6: "Më poshtë paraqesim strukturën e tarifave që JOLZT ngarkon për lloje të ndryshme rezervimesh:",
    pricesListItem1: "Rezervim i shkurtër (deri në 24 orë): JOLZT mban 35% të çmimit të paguar si tarifë, ndërsa 65% e mbetur e çmimit i përket Klientit.",
    pricesListItem2: "Rezervim i shkurtër deri në mesatar (1 deri në 3 ditë): JOLZT mban 30% të çmimit të paguar si tarifë, ndërsa 70% e mbetur e çmimit i përket Klientit.",
    pricesListItem3: "Rezervim mesatar (4 deri në 7 ditë): JOLZT mban 25% të çmimit të paguar si tarifë, ndërsa 75% e mbetur e çmimit i përket Klientit.",
    pricesListItem4: "Rezervim mesatar deri në të gjatë (8 deri në 30 ditë): JOLZT mban 20% të çmimit të paguar si tarifë, ndërsa 80% e mbetur e çmimit i përket Klientit.",
    pricesListItem5: "Rezervim i gjatë (më shumë se 30 ditë): JOLZT mban 15% të çmimit të paguar si tarifë, ndërsa 85% e mbetur e çmimit i përket Klientit.",

    // Changes and Cancellations
    changesTitle: "E drejta për Ndryshim dhe Anulim të Reklamave dhe Rezervimeve në Platformë",
    changesText1: "Nëse Përdoruesi anulon rezervimin para se të konfirmohet nga Klienti, JOLZT do të anulojë çdo autorizim paraprak nga metoda e pagesës së Përdoruesit dhe/ose do të kthejë çdo shumë nominale që mund të jetë ngarkuar nga metoda e pagesës së Përdoruesit në lidhje me rezervimin e kërkuar.",
    changesText2: "Nëse Përdoruesi anulon rezervimin e tij pasi kërkesa për rezervim është konfirmuar nga Klienti, shuma që duhet të paguhet Klientit përcaktohet sipas kushteve të mëposhtme të anulimit:",
    changesSubtitle1: "I. Rezervim i bërë 30 ditë para fillimit të tij:",
    changesListItem1: "Nëse rezervimi anulohet brenda 48 orëve para fillimit të tij, Përdoruesi ka të drejtë për rimbursim të plotë të fondeve të paguara;",
    changesListItem2: "Nëse rezervimi anulohet brenda 24 orëve para fillimit të tij, Përdoruesi ka të drejtë për rimbursim 50% të fondeve të paguara;",
    changesListItem3: "Nëse rezervimi anulohet në ditën e fillimit të tij, Përdoruesi nuk ka të drejtë për rimbursim të fondeve të paguara. Në një rast të tillë, Klienti ruan shumën e paguar si tarifë qiraje, ndërsa JOLZT ka të drejtën të mbajë tarifën e duhur për rezervimin e bërë, përveç nëse është marrëveshur ndryshe.",
    changesSubtitle2: "II. Rezervim i bërë më shumë se 30 ditë para fillimit të tij:",
    changesListItem4: "Nëse rezervimi anulohet brenda 14 ditëve të para pas rezervimit, Përdoruesi ka të drejtë për rimbursim të plotë të fondeve të paguara;",
    changesListItem5: "Nëse rezervimi anulohet në ditën e 15-të ose më vonë pas rezervimit, Përdoruesi nuk ka të drejtë për rimbursim të fondeve të paguara. Në një rast të tillë, Klienti ruan shumën e paguar si tarifë qiraje, ndërsa JOLZT ka të drejtën të mbajë tarifën e duhur për rezervimin e bërë, përveç nëse është marrëveshur ndryshe.",
    changesText3: "Klientët janë të detyruar të përditësojnë me saktësi, në mënyrë të rregullt dhe në kohën e duhur kushtet e anulimit në listimet e tyre sipas këtyre Kushteve të Pagesës.",
    changesText4: "Çdo ndryshim dhe modifikim i listimit dhe rezervimit lejohet. Në një rast të tillë, JOLZT ka të drejtën të vendosë tarifa shtesë që lidhen me modifikimet e listimit ose rezervimit.",
    changesText5: "Të gjitha ndryshimet ose modifikimet e listimit ose rezervimit duhet të komunikojnë menjëherë përmes platformës JOLZT. Komunikimi i qartë dhe në kohë ndihmon për të siguruar që të gjitha palët të informohen dhe të bien dakord me kushtet e reja.",
    changesText6: "Nëse ndryshimi rezulton në kosto shtesë, ato do të komunikojnë qartë me Përdoruesin para se të konfirmojë ndryshimin. Përdoruesi do të ketë mundësinë të shqyrtojë dhe të pranojë këto kosto. Mos pagesa e shumave shtesë mund të rezultojë në anulimin e kërkesës për ndryshim dhe potencialisht në rezervimin origjinal.",
    changesText7: "Nëse Përdoruesi nuk e kthen automjetin e marrë me qira Klientit në kohën e duhur sipas kushteve të përcaktuara në listim, rezervimit të konfirmuar dhe kontratës së qirasë së përfunduar, kjo mund të rezultojë në pagesa shtesë nga ana e Përdoruesit për kthim të vonuar.",
    changesText8: "Klienti nuk ka të drejtë për asnjë kompensim ose rimbursim për rezervime të anuluara si rezultat i anulimit ose pezullimit të profilit të përdoruesit të tij.",

    // Footer
    footerText: "Duke përdorur Platformën JOLZT, ju pranoni t'i përmbaheni këtyre Kushteve të Pagesës. Sigurimi i qartësisë dhe pajtueshmërisë me këto kushte ndihmon për të ruajtur një përvojë të qetë dhe konfidenciale për të gjithë Përdoruesit dhe Klientët. Këto kushte pagese mund të ndryshohen pa paralajmërim nga JOLZT. Kushtet e përditësuara të pagesës do të publikohen në Platformën tonë dhe do të zbatohen për të gjitha transaksionet e ardhshme."
}
}

export default function TermsOfPaymentPage({ params }: { params: { lang: string } }) {
  const lang = params.lang || "en";
  const t = translations[lang as keyof typeof translations] || translations.en;

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
            <h1 className="text-3xl font-bold mb-6">{t.paymentTermsTitle}</h1>
            <div className="prose max-w-none">
              <p className="text-muted-foreground mb-6">{t.lastUpdated}</p>

              {/* Introduction */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.introductionTitle}</h2>
              <p>{t.introductionText1}</p>
              <p>{t.introductionText2}</p>

              {/* Making a Reservation */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.reservationTitle}</h2>
              <p>{t.reservationText1}</p>
              <p>{t.reservationText2}</p>
              <p>{t.reservationText3}</p>
              <p>{t.reservationText4}</p>
              <p>{t.reservationText5}</p>
              <p>{t.reservationText6}</p>
              <p>{t.reservationText7}</p>
              <p>{t.reservationText8}</p>
              <p>{t.reservationText9}</p>
              <p>{t.reservationText10}</p>
              <p>{t.reservationText11}</p>
              <p>{t.reservationText12}</p>

              {/* Payment */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.paymentTitle}</h2>
              <p>{t.paymentText1}</p>
              <p>{t.paymentText2}</p>
              <p>{t.paymentText3}</p>
              <p>{t.paymentText4}</p>
              <p>{t.paymentText5}</p>
              <p>{t.paymentText6}</p>
              <p>{t.paymentText7}</p>
              <p>{t.paymentText8}</p>
              <p>{t.paymentText9}</p>
              <p>{t.paymentText10}</p>

              {/* Prices */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.pricesTitle}</h2>
              <p>{t.pricesText1}</p>
              <p>{t.pricesText2}</p>
              <p>{t.pricesText3}</p>
              <p>{t.pricesText4}</p>
              <p>{t.pricesText5}</p>
              <p>{t.pricesText6}</p>
              <ul className="list-disc pl-6 mb-4">
                <li>{t.pricesListItem1}</li>
                <li>{t.pricesListItem2}</li>
                <li>{t.pricesListItem3}</li>
                <li>{t.pricesListItem4}</li>
                <li>{t.pricesListItem5}</li>
              </ul>

              {/* Changes and Cancellations */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.changesTitle}</h2>
              <p>{t.changesText1}</p>
              <p>{t.changesText2}</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">{t.changesSubtitle1}</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>{t.changesListItem1}</li>
                <li>{t.changesListItem2}</li>
                <li>{t.changesListItem3}</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-3">{t.changesSubtitle2}</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>{t.changesListItem4}</li>
                <li>{t.changesListItem5}</li>
              </ul>

              <p>{t.changesText3}</p>
              <p>{t.changesText4}</p>
              <p>{t.changesText5}</p>
              <p>{t.changesText6}</p>
              <p>{t.changesText7}</p>
              <p>{t.changesText8}</p>

              {/* Footer */}
              <p className="mt-8">{t.footerText}</p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}