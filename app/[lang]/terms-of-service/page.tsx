import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { LanguageSelector } from "@/components/language-selector"

const translations = {
  en: {
    // Header
    backToHome: "Back to Home",
    termsOfService: "Terms and Conditions of Use",
    lastUpdated: "Last updated: April 10, 2025",

    // Welcome Section
    welcomeTitle: "Welcome",
    welcomeText1: "Dear User, welcome to JOLZT! Please read these Terms and Conditions of Use (hereinafter referred to as 'Terms and Conditions') and pre-contractual information carefully before you start using the JOLZT platform.",
    welcomeText2: "By using the platform, you agree to these Terms and Conditions, confirming that you have read, understood, and accepted these terms and conditions, as well as all the terms, conditions, policies, and other documents attached as links in these Terms and Conditions.",
    welcomeText3: "Each time you access the platform, we will consider that you agree with these terms and conditions. If you do not agree with these Terms and Conditions, you do not have the right to receive further information or continue using JOLZT.",

    // Changes and Amendments
    changesTitle: "Changes and Amendments",
    changesText1: "JOLZT reserves the right to modify the terms and conditions and other policies and rules at any time at its discretion. If we modify these Terms and Conditions, we will post the changes. We will also update the 'Last Modified' date at the top of these terms and conditions.",
    changesText2: "If you continue to access or use the platform after we post the change or notify you of the change, you confirm with each further use of the platform that you agree to be bound by the amended terms and conditions. If the amended terms and conditions are not acceptable to you, your only option is to stop using and accessing the platform and to close (deactivate) your JOLZT user profile within 30 days.",

    // Introduction
    introductionTitle: "INTRODUCTION",
    introductionText1: "These Terms and Conditions regulate and define the process of using the tools, capabilities, and benefits offered by JOLZT DOO Skopje with EMBS 7760957 (in this text: 'JOLZT') on its website and/or application and/or other media of JOLZT (collectively 'JOLZT Platform', 'Platform JOLZT' or simply 'Platform').",
    introductionText2: "When used in these Terms and Conditions, 'JOLZT', 'we', 'us' or 'our' refers to the entity – the legal entity JOLZT DOO Skopje with which you enter into a contract and commit to respecting these Terms and Conditions as well as all other terms, conditions, and policies of JOLZT.",
    introductionText3: "JOLZT provides an online platform that connects platform users ('Members') and enables them to post, offer, search, and book rental and use services of passenger motor vehicles (in this text: 'Vehicles') under lease. Members who post and offer services are 'Clients' or 'Hosts', and members who search, book, or use services are 'Guests' or 'Users'.",
    introductionText4: "JOLZT does not own, control, offer, or manage any listings, client services, or transportation services. JOLZT is not a party to the agreements made directly between Clients and Users, nor does JOLZT act as a travel agency, taxi company, transportation company, rental car company, insurance company, or organizer or seller of transport services and packages.",

    // Age Restriction
    ageRestrictionTitle: "Age Restriction",
    ageRestrictionText: "Our platform is not intended to attract users who are under 18 years of age. These individuals are not allowed to use the platform under any circumstances.",

    // Member Responsibilities
    memberResponsibilitiesTitle: "Member Responsibilities",
    memberResponsibilitiesText: "JOLZT does not recommend or endorse any member or any vehicle. Members are bound by these Terms and Conditions to provide accurate information. Although JOLZT may provide certain verification processes or conduct background checks, we do not provide any guarantees regarding the posted data of members, the behavior, identity, or suitability of any member, or the quality, condition, legality, or correctness of any vehicle.",

    // Related Policies
    relatedPoliciesTitle: "Related Policies",
    relatedPoliciesText1: "JOLZT provides, respects, and uses other terms, conditions, and policies such as our",
    privacyPolicy: "Privacy Policy",
    relatedPoliciesText2: "which describes our collection and use of personal data, our",
    paymentTerms: "Payment Terms",
    relatedPoliciesText3: "which govern all payment services provided to members, and our",
    cookiePolicy: "Cookie Policy",
    relatedPoliciesText4: "which governs the use of 'cookies' we use that enable our platform to function and help us understand which information and ads are most useful to members, as well as all other policies, rules, and terms of JOLZT that help us and you to achieve greater satisfaction, safety, and protection when using the platform.",

    // Right to Use
    rightToUseTitle: "Right to Use the Platform",
    rightToUseText1: "The right to use JOLZT is granted to individuals who are at least 18 years old. Any access to or use of JOLZT by any person under 18 years of age is expressly prohibited.",
    rightToUseText2: "By accessing or using JOLZT, you guarantee and declare under full moral, material, and criminal responsibility that you are 18 or older, that you have the legal capacity to enter into a contract and be bound by these Terms and Conditions, and that you are familiar with the specific rights, obligations, and conditions provided by the Road Traffic Safety Act and the Vehicle Act, as well as all other applicable legal regulations.",
    rightToUseText3: "We note that the attached regulations are for informational purposes only and we do not assume any responsibility if they are amended, supplemented, canceled, or replaced by another regulation at the time of agreeing to these Terms and Conditions.",

    // User Profile
    userProfileTitle: "User Profile",
    registrationTitle: "Registration",
    registrationText1: "To access the JOLZT platform and all its functions and benefits, you need to register and create a user profile and become a member of JOLZT. Registration of a user profile is done directly on the JOLZT Platform in accordance with the Terms and Conditions of registration.",
    registrationText2: "To register your user profile, you need to provide accurate, up-to-date, and complete information during the registration process and update such information as needed.",
    registrationText3: "During the registration process as a Client / Host, you provide us with data and documents such as: name and surname, residential address, date of birth, email, mobile phone number, information about your vehicle, and creating a password or connecting through a third-party service profile (including but not limited to: Apple, Facebook, and Google).",
    registrationText4: "During the registration process as a User, you provide us with data and documents such as: name and surname, residential address, date of birth, email, mobile phone number, valid driver's license, and creating a password or connecting through a third-party service profile (including but not limited to: Apple, Facebook, and Google).",
    registrationText5: "For your safety and compliance with all JOLZT rules, conditions, and policies, as well as applicable legal regulations, we reserve the right to request additional data and documents during the registration and verification process, as well as during the use of the platform.",

    // Verification
    verificationTitle: "Verification",
    verificationText1: "Upon receiving a registration request on the Platform, the JOLZT team verifies your user profile, i.e., determines whether you meet the registration rules and conditions.",
    verificationText2: "JOLZT reserves the right to refuse the registration of your profile if it determines that:",
    verificationListItem1: "You use more than 1 (one) user profile;",
    verificationListItem2: "Any information provided during the registration process or thereafter is found to be inaccurate, fraudulent, incomplete, outdated, or otherwise in violation of these Terms and Conditions, all other policies, rules, and conditions of JOLZT, as well as applicable legal regulations.",

    // Cancellation/Suspension
    cancellationTitle: "Cancellation/Suspension",
    cancellationText1: "JOLZT reserves the right to suspend or cancel your user profile if:",
    cancellationListItem1: "You create more than 1 (one) user profile;",
    cancellationListItem2: "It is determined that any information provided during the registration process or thereafter is found to be inaccurate, fraudulent, incomplete, outdated, or otherwise in violation of these Terms and Conditions, all other policies, rules, and conditions of JOLZT, as well as applicable legal regulations.",

    // Personal Data
    personalDataTitle: "Personal Data",
    personalDataText1: "Your privacy is important to us. We, together with our team, assure you that we fully comply with applicable legal regulations for the protection of personal data and strive to ensure the highest level of protection of your privacy and your personal data.",
    personalDataText2: "Please review our Privacy Policy to understand how we collect, use, and protect your personal data. By using the JOLZT platform, you agree to the collection and use of your data as outlined in the Privacy Policy.",

    // Rules for Clients
    clientRulesTitle: "Rules for Clients",
    clientRulesText1: "As a Client, you are fully responsible for the proper use and access to your profile and other content on the Platform in accordance with applicable laws, as well as the principles of good faith, morality, generally accepted customs, and public order and peace. By using the Platform, you commit to strictly adhere to these Terms and Conditions.",
    clientRulesText2: "As a Client, you are fully responsible for accurately entering your individual usernames and passwords, which must be non-transferable and sufficiently complex to avoid using the same usernames and passwords as on other platforms, in order to protect your profile from fraudulent use by third parties or any other form of damage. In addition, it is prohibited to interfere with the normal use or utilization of the Platform on behalf of other Clients and/or Users.",
    clientRulesText3: "As a Client on JOLZT, you can create posts, i.e., advertisements for the lease of your vehicle(s). To create an advertisement, you will be asked various questions about the Vehicle, including, but not limited to, location, capacity, size, features, availability, prices, and related rules and financial conditions.",
    clientRulesText4: "With each publication of your advertisements, you guarantee and declare that each advertisement you create and the reservation or use of the vehicle in the advertisement you create (a) will not violate any agreement you have made with any third parties, and (b) will comply with all applicable laws, tax regulations, and rules and regulations that may apply to any vehicle included in the advertisement you create.",
    clientRulesText5: "When you confirm a reservation request or receive a reservation confirmation from JOLZT, you as the Client enter into a contractual relationship (lease) directly with the User as the lessee and commit to providing the service in accordance with these Terms and Conditions, other rules, conditions, and policies of JOLZT, as well as all applicable legal regulations.",
    clientRulesText6: "All terms you include in any additional agreement with Users must: (a) comply with these Terms and Conditions, all other policies, rules, and conditions of JOLZT, as well as applicable legal regulations, and (b) be made available in the advertisement description.",
    clientRulesText7: "Your relationship with JOLZT is that of an independent individual or entity, not an employee, collaborator, agent, or partner of JOLZT, except that JOLZT acts as a collection intermediary as described in the payment terms. JOLZT does not direct or control your offering, and you understand that you have full discretion whether and when to provide your offering, at what price, and under what conditions.",
    clientRulesText8: "Responsibility for (not) knowing and (not) following all laws, regulations, and rules related to your listing lies with you. All legal information we provide is for informational purposes only, and you should independently confirm your legal rights and obligations.",
    clientRulesText9: "We point out that if you are a Client and act on behalf of a legal entity or any other entity which may be considered a legal person, you are still responsible as a Client in accordance with these Terms and Conditions, other rules, conditions, and policies of JOLZT, as well as applicable legal regulations.",
    clientRulesText10: "If you are a Client and a reservation for your vehicle is requested through JOLZT, you will be obligated either to confirm or to reject the reservation within the reservation period, which is ---- hours. Otherwise, the requested reservation will automatically expire, and the vehicle will not be reserved.",
    clientRulesText11: "As a Client, you do not have the right to cancel a User's reservation without a real and justified reason in accordance with applicable rules, conditions, policies, and regulations. JOLZT reserves the right to impose additional charges and fees, as well as cancel/suspend your user profile if it notices a cancellation of a reservation without a real and justified reason.",
    clientRulesText12: "Any changes and modifications to your listings and reservations are allowed, with the potential consequence that JOLZT has the right to impose additional charges related to the reservation modification.",
    clientRulesText13: "As a Client on the platform, you confirm that you are aware of the tax obligations imposed by the tax regulations of the Republic of North Macedonia and that JOLZT has no obligation to calculate and pay any taxes and fees for the income you earn as a Client for renting your own vehicle.",

    // Client Recommendations
    clientRecommendationsTitle: "Our general recommendations for you as a Client are as follows:",
    clientRecommendationsList: [
      "Accuracy of information: Provide accurate, up-to-date, and complete information about your vehicle.",
      "Safety and maintenance: Ensure that your vehicle is in good condition, regularly maintained, and safe for use.",
      "Hygiene: Provide a clean and hygienic vehicle for your Users as Renters.",
      "Appropriate documents: Ensure that all necessary documents are up-to-date and available.",
      "Usage rules: Clearly state all the rules and restrictions for using your vehicle.",
      "Respecting reservations: Honor all confirmed reservations.",
      "Responding to reports: Respond to reports of damage or issues from Users promptly."
    ],

    // Client Commitments
    clientCommitmentsTitle: "By advertising and renting your vehicle, in accordance with applicable legal regulations, you confirm and commit to the following:",
    clientCommitmentsList: [
      "The vehicle you advertise and rent is properly, timely, and legally registered.",
      "The vehicle you advertise and rent has a valid traffic permit.",
      "The vehicle you advertise is exclusively your property and/or you have the right to rent it.",
      "You will not violate any third party's rights by advertising and renting the subject vehicle.",
      "You have valid compulsory liability insurance for the period of renting your vehicle.",
      "You will not advertise and rent the vehicle for the purpose of taking it outside the borders without proper authorization.",
      "You will not advertise and rent a vehicle whose engine power exceeds 77 kilowatts to a beginner driver.",
      "You will not rent to a person who does not have the right to operate a motor vehicle.",
      "You will fully comply with the Road Traffic Safety Act and the Vehicle Act."
    ],

    // Rules for Users
    userRulesTitle: "Rules for Users",
    userRulesText1: "As a User, you are fully responsible for the proper use and access to your profile and other content on the Platform in accordance with applicable law, as well as principles of good faith, morals, generally accepted customs, and public order.",
    userRulesText2: "As a User, you are entirely responsible for correctly entering your individual usernames and passwords, which must be non-transferable and sufficiently complex so that the same usernames and passwords are not used on other platforms.",
    userRulesText3: "On the platform, you can search for Client listings by type of Vehicle, vehicle performance, rental period and dates, and similar. For more precise searching, the platform offers filtering of your preferences ('Filters').",
    userRulesText4: "By selecting the desired option (listing), you send a reservation request to the Client, agreeing to pay all costs and fees, including, but not limited to, vehicle rental fees and other related costs.",
    userRulesText5: "When you receive a reservation confirmation from JOLZT, you as a User enter into a Rental Agreement (Lease) directly with the Client as the Lessor and commit to comply with these Rules and conditions, other JOLZT rules, terms, and policies, as well as all applicable legal regulations.",
    userRulesText6: "Your relationship with JOLZT is that of an independent individual or entity, not that of an employee, collaborator, agent, or partner of JOLZT, except that JOLZT acts as a collection agent as described in the Payment Terms.",
    userRulesText7: "As a User, you are solely and exclusively responsible for returning the Vehicle in the condition in which it was handed over to you at the time of delivery. As a User, you expressly confirm and agree that you are solely responsible for your own actions and any omissions, as well as the actions and omissions of any third parties to whom you have allowed access to the vehicle.",
    userRulesText8: "If, as a User, you cancel your reservation before the requested reservation is confirmed by the Client, JOLZT will cancel any pre-authorization from your payment method and/or refund any nominal amounts charged to your payment method in connection with the requested reservation within a reasonable time.",

    // User Commitments
    userCommitmentsTitle: "By making reservations and using a rented vehicle, in accordance with applicable legal regulations, you confirm and commit to the following:",
    userCommitmentsList: [
      "You have a valid driver's license issued in the Republic of North Macedonia, a foreign driver's license, or an international driver's license.",
      "Your driver's license does not have a restriction for operating a motor vehicle with an automatic transmission (if applicable).",
      "You have not been issued a penalty for the cessation of the validity of the driver's license or a ban on operating a motor vehicle.",
      "The validity period of your driver's license has not expired.",
      "You will not use the vehicle if you are so tired or ill or in such a mental state that makes you incapable of safely operating the vehicle.",
      "You will not use the vehicle under the influence of medications that are marked as not to be used before or during driving.",
      "You will not operate the vehicle under the influence of narcotic drugs or psychotropic substances.",
      "You will not operate the vehicle under the influence of alcohol.",
      "You will not operate the vehicle if you are a novice driver during restricted hours without proper accompaniment.",
      "You will not operate the vehicle outside the borders without proper authorization.",
      "You will fully comply with the traffic rules established by the Road Traffic Safety Act."
    ],

    // Rental Agreement
    rentalAgreementTitle: "Rental Agreement",
    rentalAgreementText1: "By initiating and confirming a reservation through JOLZT, the Client and the User agree and confirm that they are entering into a legal-binding relationship, namely a Rental Agreement. The terms and conditions stated in the listing, including all details about the vehicle, prices, and rules, are an integral part of this rental agreement.",
    rentalAgreementText2: "Both parties are permitted to formally conclude a rental agreement, as well as to enter into additional agreements or annexes to further regulate or resolve any specific needs or circumstances, provided they do not contradict the basic terms of the listing, these rules and conditions, other rules, conditions, and policies of JOLZT, as well as applicable positive regulations.",
    rentalAgreementText3: "JOLZT is not responsible for the obligations arising from the concluded Rental Agreement between the User and the Client. Under no circumstances can JOLZT be held liable for obligations related to the payment of fees/rental, the handover of the vehicle into possession, liability for damage caused to the vehicle and/or other items and third parties, as well as for subleasing the vehicle.",

    // Taxes
    taxesTitle: "Taxes",
    taxesText1: "By agreeing to these terms and conditions and subsequently listing vehicles and making vehicle reservations, members understand and agree that they are solely responsible for their tax obligations. JOLZT cannot and does not offer tax advice to any member.",

    // Prohibited Activities
    prohibitedActivitiesTitle: "Prohibited Activities",
    prohibitedActivitiesText1: "By joining JOLZT and using the platform, you confirm that you are solely responsible for compliance with applicable laws, other rules, regulations, and tax obligations that may apply to your use of JOLZT. In connection with your use of JOLZT, you agree that you will not, nor will you allow any third party to:",
    prohibitedActivitiesList: [
      "Violate or circumvent these Terms and Conditions or applicable laws.",
      "Use JOLZT for any commercial or other purposes not expressly permitted.",
      "Copy, store, or otherwise access or use any information about other members improperly.",
      "Use JOLZT in connection with the distribution of unsolicited commercial messages ('spam').",
      "Advertise a vehicle that you do not own or do not have permission to rent.",
      "Use JOLZT to search for, make, or accept a reservation outside of the JOLZT platform.",
      "Request, accept, or make any payment for listing and reservation outside of the JOLZT platform.",
      "Discriminate or harass based on race, national origin, religion, gender, etc.",
      "Use, display, copy the JOLZT platform or any of its elements without express written consent.",
      "Disrupt the brand and reputation of JOLZT.",
      "Use any automated means to access or collect data from the platform.",
      "Circumvent any technological measure implemented to protect the platform.",
      "Attempt to reverse engineer any software used to provide the platform.",
      "Take any action that damages or adversely affects the platform."
    ],

    // Cancellation and Suspension
    cancellationSuspensionTitle: "Cancellation and Suspension of User Account",
    cancellationSuspensionText1: "JOLZT may, at its discretion and without liability to you, where applicable under these Terms and Conditions, other rules, conditions, and policies of JOLZT, as well as all applicable laws, with or without prior notice and at any time, decide to restrict, suspend, deactivate, or cancel your user account.",
    cancellationSuspensionText2: "In such a case, you may face some or all of the following consequences:",
    cancellationSuspensionList: [
      "Your user account will be deactivated or suspended.",
      "Any future reservations will be immediately terminated.",
      "Notification to your Users or Clients that reservations are canceled.",
      "Refunds to your Users for all confirmed reservations.",
      "As a Client, you will not be entitled to any compensation for canceled reservations."
    ],

    // Limitation of Liability
    liabilityTitle: "Limitation of Liability",
    liabilityText1: "By using the JOLZT platform or collective content, you acknowledge that you are doing so fully informed and at your own responsibility and risk. You also acknowledge and agree that JOLZT has no obligation to conduct checks on the status and background of any member.",
    liabilityText2: "JOLZT does not guarantee that the JOLZT Platform, including but not limited to listings or any vehicles, will meet your requirements. JOLZT does not guarantee the quality of any listings, vehicles, clients, users, nor the accuracy, truthfulness, completeness, or reliability of any collective content available on the JOLZT Platform.",
    liabilityText3: "Neither JOLZT nor any other party involved in creating, producing, or maintaining JOLZT will be responsible for any incidental, special, or consequential damages (material or immaterial).",

    // Dispute Resolution
    disputeResolutionTitle: "Dispute Resolution",
    disputeResolutionText1: "In terms of the interpretation and application of these Terms and Conditions, the law of the Republic of North Macedonia applies. In the event of a dispute regarding the use of JOLZT and the application of these Terms and Conditions as well as all other rules, conditions, and policies of JOLZT, the competent court in Skopje, Republic of North Macedonia, will have jurisdiction for its resolution.",

    // Contact Us
    contactTitle: "Contact Us",
    contactText: "If you have any questions about these Terms, please contact us at:",
    contactEmail: "Email: support@jolzt.com",
    contactPhone: "Phone: +389 78 700 202"
  },
mk: {
    backToHome: "Назад кон Почетна",
    termsOfService: "Услови за користење",
    lastUpdated: "Последно ажурирано: 10 април, 2025",

    welcomeTitle: "Добредојде",
    welcomeText1: "Драги кориснику, добредојдовте во JOLZT! Ве молиме внимателно прочитајте ги овие Услови за користење (во продолжение 'Услови') и преддоговорните информации пред да започнете со користење на JOLZT платформата.",
    welcomeText2: "Со користење на платформата, вие се согласувате со овие Услови, потврдувајќи дека сте ги прочитале, разбрале и ги прифатиле овие услови, како и сите термини, услови, политики и други документи прикачени како линкови во овие Услови.",
    welcomeText3: "Секој пат кога ќе ја пристапите платформата, ќе сметаме дека се согласувате со овие услови. Ако не се согласувате со овие Услови, немате право да примате дополнителни информации или да продолжите да ја користите JOLZT.",

    changesTitle: "Промени и измени",
    changesText1: "JOLZT си го задржува правото да ги менува условите и другите политики и правила во секое време по свое усмотрение. Ако ги измениме овие Услови, ќе ги објавиме промените. Исто така ќе го ажурираме датумот 'Последно изменето' на врвот на овие услови.",
    changesText2: "Ако продолжите да ја пристапувате или користите платформата откако ќе ги објавиме промените или ќе ве известиме за промената, вие со секој понатамошен употреба на платформата потврдувате дека се согласувате да бидете обврзани со изменетите услови. Ако изменетите услови не ви се прифатливи, вашата единствена опција е да престанете да ја користите и пристапувате до платформата и да го затворите (деактивирате) вашиот JOLZT кориснички профил во рок од 30 дена.",

    introductionTitle: "ВОВЕД",
    introductionText1: "Овие Услови го регулираат и дефинираат процесот на користење на алатките, можностите и придобивките понудени од JOLZT ДОО Скопје со ЕМБС 7760957 (во овој текст: 'JOLZT') на неговата веб-страница и/или апликација и/или други медиуми на JOLZT (колективно 'JOLZT платформа', 'Платформа JOLZT' или едноставно 'Платформа').",
    introductionText2: "Кога се користи во овие Услови, 'JOLZT', 'ние', 'нас' или 'наш' се однесува на ентитетот – правното лице JOLZT ДОО Скопје со кое склучувате договор и се обврзувате да ги почитувате овие Услови како и сите други услови, политики и правила на JOLZT.",
    introductionText3: "JOLZT обезбедува онлајн платформа која ги поврзува корисниците на платформата ('Членови') и им овозможува да објавуваат, нудат, пребаруваат и резервираат услуги за изнајмување и користење на патнички моторни возила (во овој текст: 'Возила') под закуп. Членовите кои објавуваат и нудат услуги се 'Клиенти' или 'Домаќини', а членовите кои пребаруваат, резервираат или користат услуги се 'Гости' или 'Корисници'.",
    introductionText4: "JOLZT не е сопственик, не ги контролира, нуди или управува со никакви листинзи, клиентски услуги или транспортни услуги. JOLZT не е страна во договорите склучени директно помеѓу Клиентите и Корисниците, ниту пак JOLZT дејствува како туристичка агенција, такси компанија, транспортна компанија, компанија за изнајмување автомобили, осигурателна компанија или организатор или продавач на транспортни услуги и пакети.",

    ageRestrictionTitle: "Возрастно ограничување",
    ageRestrictionText: "Нашата платформа не е наменета за привлекување корисници кои се под 18 години. Овие лица не смеат да ја користат платформата под никакви околности.",

    memberResponsibilitiesTitle: "Одговорности на членовите",
    memberResponsibilitiesText: "JOLZT не препорачува или одобрува никаков член или било кое возило. Членовите се обврзани со овие Услови да обезбедат точни информации. Иако JOLZT може да обезбеди одредени процеси на верификација или да спроведе проверки на позадина, ние не даваме никакви гаранции во врска со објавените податоци на членовите, однесувањето, идентитетот или соодветноста на било кој член, или квалитетот, состојбата, законитоста или исправноста на било кое возило.",

    relatedPoliciesTitle: "Поврзани политики",
    relatedPoliciesText1: "JOLZT обезбедува, почитува и користи други термини, услови и политики како нашата",
    privacyPolicy: "Политика за приватност",
    relatedPoliciesText2: "која го опишува нашето собирање и користење на лични податоци, нашите",
    paymentTerms: "Услови за плаќање",
    relatedPoliciesText3: "кои ги регулираат сите платни услуги обезбедени за членовите, и нашата",
    cookiePolicy: "Политика за колачиња",
    relatedPoliciesText4: "која го регулира користењето на 'колачињата' што ги користиме и кои овозможуваат нашата платформа да функционира и ни помагаат да разбереме кои информации и реклами се најкорисни за членовите, како и сите други политики, правила и услови на JOLZT што ни помагаат и вам да постигнете поголема задоволство, безбедност и заштита при користење на платформата.",

    rightToUseTitle: "Право на користење на платформата",
    rightToUseText1: "Правото на користење на JOLZT им се доделува на лица кои се најмалку 18 години стари. Секој пристап или користење на JOLZT од страна на лице под 18 години е строго забрането.",
    rightToUseText2: "Со пристапување или користење на JOLZT, вие гарантирате и изјавувате под целосна морална, материјална и кривична одговорност дека имате 18 или повеќе години, дека имате правна способност да склучите договор и да бидете обврзани од овие Услови, и дека сте запознаени со специфичните права, обврски и услови предвидени со Законот за безбедност на сообраќајот на патиштата и Законот за возилата, како и сите други применливи правни прописи.",
    rightToUseText3: "Истакнуваме дека приложените прописи се само за информативни цели и не преземаме никаква одговорност ако тие се изменети, дополнети, поништени или заменети со друг пропис во моментот на согласување на овие Услови.",

    userProfileTitle: "Кориснички профил",
    registrationTitle: "Регистрација",
    registrationText1: "За да пристапите до JOLZT платформата и сите нејзини функции и придобивки, треба да се регистрирате и креирате кориснички профил и да станете член на JOLZT. Регистрацијата на кориснички профил се врши директно на JOLZT платформата во согласност со Условите за регистрација.",
    registrationText2: "За да го регистрирате вашиот кориснички профил, треба да обезбедите точни, ажурирани и целосни информации за време на процесот на регистрација и да ги ажурирате таквите информации по потреба.",
    registrationText3: "Во текот на процесот на регистрација како Клиент / Домаќин, ни ги давате следните податоци и документи: име и презиме, адреса на живеење, датум на раѓање, е-пошта, број на мобилен телефон, информации за вашето возило и креирање лозинка или поврзување преку профил на услуга од трета страна (вклучувајќи, но не ограничувајќи се на: Apple, Facebook и Google).",
    registrationText4: "Во текот на процесот на регистрација како Корисник, ни ги давате следните податоци и документи: име и презиме, адреса на живеење, датум на раѓање, е-пошта, број на мобилен телефон, важечка возачка дозвола и креирање лозинка или поврзување преку профил на услуга од трета страна (вклучувајќи, но не ограничувајќи се на: Apple, Facebook и Google).",
    registrationText5: "За ваша безбедност и усогласеност со сите правила, услови и политики на JOLZT, како и со применливите правни прописи, ние си го задржуваме правото да побараме дополнителни податоци и документи за време на процесот на регистрација и верификација, како и за време на користењето на платформата.",

    verificationTitle: "Верификација",
    verificationText1: "По примањето на барање за регистрација на Платформата, тимот на JOLZT го проверува вашиот кориснички профил, односно утврдува дали ги исполнувате правилата и условите за регистрација.",
    verificationText2: "JOLZT си го задржува правото да ја одбие регистрацијата на вашиот профил ако утврди дека:",
    verificationListItem1: "Користите повеќе од 1 (еден) кориснички профил;",
    verificationListItem2: "Било која информација дадена за време на процесот на регистрација или потоа се утврди дека е неточна, измамничка, нецелосна, застарена или на друг начин во спротивност со овие Услови, сите други политики, правила и услови на JOLZT, како и применливите правни прописи.",

    cancellationTitle: "Откажување/Суспензија",
    cancellationText1: "JOLZT си го задржува правото да го суспендира или откаже вашиот кориснички профил ако:",
    cancellationListItem1: "Креирате повеќе од 1 (еден) кориснички профил;",
    cancellationListItem2: "Се утврди дека било која информација дадена за време на процесот на регистрација или потоа е неточна, измамничка, нецелосна, застарена или на друг начин во спротивност со овие Услови, сите други политики, правила и услови на JOLZT, како и применливите правни прописи.",

    personalDataTitle: "Лични податоци",
    personalDataText1: "Вашата приватност е важна за нас. Ние, заедно со нашиот тим, ви гарантираме дека целосно ги почитуваме применливите правни прописи за заштита на личните податоци и се трудиме да обезбедиме највисоко ниво на заштита на вашата приватност и вашите лични податоци.",
    personalDataText2: "Ве молиме прегледајте ја нашата Политика за приватност за да разберете како ги собираме, користиме и заштитуваме вашите лични податоци. Со користење на JOLZT платформата, вие се согласувате со собирањето и користењето на вашите податоци како што е наведено во Политиката за приватност.",

    clientRulesTitle: "Правила за Клиентите",
    clientRulesText1: "Како Клиент, вие сте целосно одговорни за правилното користење и пристап до вашиот профил и друга содржина на Платформата во согласност со применливите закони, како и принципите на добра волја, морал, општо прифатени обичаи и јавен ред и мир. Со користење на Платформата, вие се обврзувате строго да ги почитувате овие Услови.",
    clientRulesText2: "Како Клиент, вие сте целосно одговорни за точното внесување на вашите индивидуални кориснички имиња и лозинки, кои мора да бидат непреносливи и доволно сложени за да се избегне користење на истите кориснички имиња и лозинки како на други платформи, со цел да го заштитите вашиот профил од измамничка употреба од страна на трети лица или било која друга форма на штета. Дополнително, е забрането да се попречи нормалната употреба или искористување на Платформата во име на други Клиенти и/или Корисници.",
    clientRulesText3: "Како Клиент на JOLZT, можете да креирате објави, односно реклами за изнајмување на вашето возило/а. За да креирате реклама, ќе ви бидат поставени различни прашања во врска со Возилото, вклучувајќи, но не ограничувајќи се на: локација, капацитет, големина, карактеристики, достапност, цени и поврзани правила и финансиски услови.",
    clientRulesText4: "Со секоја објава на вашите реклами, вие гарантирате и изјавувате дека секоја реклама што ја креирате и резервацијата или употребата на возилото во рекламата што ја креирате (а) нема да ги прекрши било каквите договори што сте ги склучиле со трети страни, и (б) ќе биде во согласност со сите применливи закони, даночни прописи и правила и прописи што може да се применуваат на било кое возило вклучено во рекламата што ја креирате.",
    clientRulesText5: "Кога ќе потврдите барање за резервација или ќе добиете потврда за резервација од JOLZT, вие како Клиент влегувате во договорна врска (закуп) директно со Корисникот како изнајмувач и се обврзувате да ја обезбедите услугата во согласност со овие Услови, другите правила, услови и политики на JOLZT, како и сите применливи правни прописи.",
    clientRulesText6: "Сите услови што ги вклучувате во било кој дополнителен договор со Корисниците мора: (а) да бидат во согласност со овие Услови, сите други политики, правила и услови на JOLZT, како и применливите правни прописи, и (б) да бидат достапни во описот на рекламата.",
    clientRulesText7: "Вашата врска со JOLZT е онаа на независен поединец или ентитет, а не вработен, соработник, агент или партнер на JOLZT, освен што JOLZT дејствува како посредник за наплата како што е опишано во условите за плаќање. JOLZT не ги насочува или контролира вашите понуди, и вие разбирате дека имате целосна дискреција да одлучите дали и кога да ја обезбедите вашата понуда, по која цена и под кои услови.",
    clientRulesText8: "Одговорноста за (не)познавање и (не)почитување на сите закони, прописи и правила поврзани со вашата објава лежи на вас. Сите правни информации што ги обезбедуваме се само за информативни цели, и треба самостојно да ги потврдите вашите законски права и обврски.",
    clientRulesText9: "Истакнуваме дека ако сте Клиент и дејствувате во име на правно лице или било кој друг ентитет што може да се смета за правно лице, вие сепак сте одговорни како Клиент во согласност со овие Услови, другите правила, услови и политики на JOLZT, како и применливите правни прописи.",
    clientRulesText10: "Ако сте Клиент и се побара резервација за вашето возило преку JOLZT, ќе бидете обврзани или да ја потврдите или да ја одбиете резервацијата во рокот за резервација, кој изнесува ---- часа. Во спротивно, побараната резервација автоматски ќе истече, и возилото нема да биде резервирано.",
    clientRulesText11: "Како Клиент, вие немате право да откажете резервација на Корисник без вистинска и оправдана причина во согласност со применливите правила, услови, политики и прописи. JOLZT си го задржува правото да наметне дополнителни такси и трошоци, како и да го откаже/суспендира вашиот кориснички профил ако забележи откажување на резервација без вистинска и оправдана причина.",
    clientRulesText12: "Сите промени и модификации на вашите објави и резервации се дозволени, со можна последица дека JOLZT има право да наметне дополнителни такси поврзани со модификацијата на резервацијата.",
    clientRulesText13: "Како Клиент на платформата, вие потврдувате дека сте свесни за даночните обврски наметнати со даночните прописи на Република Северна Македонија и дека JOLZT нема обврска да ги пресметува и плати било какви даноци и такси за приходот што го заработувате како Клиент за изнајмување на вашето сопствено возило.",

    clientRecommendationsTitle: "Нашите општи препораки за вас како Клиент се како што следува:",
    clientRecommendationsList: [
      "Точност на информациите: Обезбедете точни, ажурирани и целосни информации за вашето возило.",
      "Безбедност и одржување: Осигурајте се дека вашето возило е во добра состојба, редовно одржувано и безбедно за употреба.",
      "Хигиена: Обезбедете чисто и хигиенско возило за вашите Корисници како Изнајмувачи.",
      "Соодветни документи: Осигурајте се дека сите потребни документи се ажурирани и достапни.",
      "Правила за употреба: Јасно наведете ги сите правила и ограничувања за користење на вашето возило.",
      "Почитување на резервациите: Почитувајте ги сите потврдени резервации.",
      "Одговор на пријави: Одговорете на пријави за штета или проблеми од Корисниците веднаш и соодветно."
    ],

    clientCommitmentsTitle: "Со рекламирање и изнајмување на вашето возило, во согласност со применливите правни прописи, вие потврдувате и се обврзувате на следново:",
    clientCommitmentsList: [
      "Возилото што го рекламирате и изнајмувате е правилно, навремено и законски регистрирано.",
      "Возилото што го рекламирате и изнајмувате има важечка сообраќајна дозвола.",
      "Возилото што го рекламирате е исклучиво ваш имот и/или имате право да го изнајмувате.",
      "Нема да ги прекршите правата на трети лица со рекламирање и изнајмување на предметното возило.",
      "Имате важечко задолжително осигурување одговорност за периодот на изнајмување на вашето возило.",
      "Нема да рекламирате и изнајмувате возило со цел да го однесете надвор од границите на Република Северна Македонија без соодветна овласт.",
      "Нема да рекламирате и изнајмувате возило чија што моќност на моторот надминува 77 киловати на почетник возач.",
      "Нема да изнајмувате и дозволите управување со вашето возило на лице кое нема право да управува со моторно возило.",
      "Целосно ќе ги почитувате Законот за безбедност на сообраќајот на патиштата и Законот за возилата."
    ],

    userRulesTitle: "Правила за Корисниците",
    userRulesText1: "Како Корисник, вие сте целосно одговорни за правилното користење и пристап до вашиот профил и друга содржина на Платформата во согласност со применливите закони, како и принципите на добра волја, морал, општо прифатени обичаи и јавен ред.",
    userRulesText2: "Како Корисник, вие сте целосно одговорни за точното внесување на вашите индивидуални кориснички имиња и лозинки, кои мора да бидат непреносливи и доволно сложени за да не се користат истите кориснички имиња и лозинки како на други платформи.",
    userRulesText3: "На платформата, можете да пребарувате објави на Клиентите по тип на Возило, перформанси на возилото, период и датуми на изнајмување и слично. За попрецизно пребарување, платформата нуди филтрирање на вашите преференции ('Филтри').",
    userRulesText4: "Со избор на посакуваната опција (објава), испраќате барање за резервација до Клиентот, согласувајќи се да ги платите сите трошоци и такси, вклучувајќи, но не ограничувајќи се на, таксите за изнајмување на возилото и другите поврзани трошоци.",
    userRulesText5: "Кога ќе добиете потврда за резервација од JOLZT, вие како Корисник влегувате во Договор за изнајмување (Закуп) директно со Клиентот како Изнајмувач и се обврзувате да ги почитувате овие Правила и услови, другите правила, термини и политики на JOLZT, како и сите применливи правни прописи.",
    userRulesText6: "Вашата врска со JOLZT е онаа на независен поединец или ентитет, а не вработен, соработник, агент или партнер на JOLZT, освен што JOLZT дејствува како наплатен агент како што е опишано во Условите за плаќање.",
    userRulesText7: "Како Корисник, вие сте единствено и исклучиво одговорни за враќање на Возилото во состојбата во која ви е предадено во моментот на испораката. Како Корисник, вие изрично потврдувате и се согласувате дека сте единствено одговорни за вашите сопствени дејства и пропусти, како и дејствата и пропустите на сите трети лица на кои им дозволивте пристап до возилото.",
    userRulesText8: "Ако, како Корисник, ја откажете вашата резервација пред бараната резервација да биде потврдена од Клиентот, JOLZT ќе ги откаже сите претходни овластувања од вашиот начин на плаќање и/или ќе ги врати сите номинални износи наплатени на вашиот начин на плаќање во врска со бараната резервација во разумен рок.",

    userCommitmentsTitle: "Со правење резервации и користење на изнајмено возило, во согласност со применливите правни прописи, вие потврдувате и се обврзувате на следново:",
    userCommitmentsList: [
      "Имате важечка возачка дозвола издадена во Република Северна Македонија, странска возачка дозвола или меѓународна возачка дозвола.",
      "Вашата возачка дозвола нема ограничување за управување со моторно возило со автоматски менувач (доколку е применливо).",
      "Не ви е изречена казна за престанок на важењето на возачката дозвола или забрана за управување со моторно возило.",
      "Периодот на важење на вашата возачка дозвола не е истечен.",
      "Нема да го користите возилото ако сте толку уморни или болни или во таква психичка состојба што ве прави неспособни безбедно да управувате со возилото.",
      "Нема да го користите возилото под влијание на лекови кои се означени да не се користат пред или за време на возењето.",
      "Нема да управувате со возилото под влијание на наркотични дроги или психотропни супстанции.",
      "Нема да управувате со возилото под влијание на алкохол.",
      "Нема да управувате со возилото ако сте почетник возач во забранетото време без соодветно придружување.",
      "Нема да управувате со возилото надвор од границите без соодветна овласт.",
      "Целосно ќе ги почитувате сообраќајните правила утврдени со Законот за безбедност на сообраќајот на патиштата."
    ],

    rentalAgreementTitle: "Договор за изнајмување",
    rentalAgreementText1: "Со иницирање и потврдување на резервација преку JOLZT, Клиентот и Корисникот се согласуваат и потврдуваат дека влегуваат во правно обврзувачка врска, имено Договор за изнајмување. Условите и условите наведени во објавата, вклучувајќи ги сите детали за возилото, цените и правилата, се составен дел од овој договор за изнајмување.",
    rentalAgreementText2: "Двете страни се овластени формално да склучат договор за изнајмување, како и да склучат дополнителни договори или анекси за понатамошно регулирање или решавање на било какви специфични потреби или околности, под услов да не се во спротивност со основните услови на објавата, овие правила и услови, другите правила, услови и политики на JOLZT, како и применливите позитивни прописи.",
    rentalAgreementText3: "JOLZT не е одговорен за обврските што произлегуваат од склучениот Договор за изнајмување помеѓу Корисникот и Клиентот. Во никој случај JOLZT не може да се смета за одговорен за обврски поврзани со плаќањето на таксите/изнајмувањето, предавањето на возилото во сопственост, одговорноста за штета нанесена на возилото и/или други предмети и трети лица, како и за подзакуп на возилото.",

    taxesTitle: "Даноци",
    taxesText1: "Со согласување на овие услови и последователно објавување на возила и правење резервации на возила, членовите разбираат и се согласуваат дека се единствено одговорни за своите даночни обврски. JOLZT не може и не нуди даночни советувања на ниту еден член.",

    prohibitedActivitiesTitle: "Забранети активности",
    prohibitedActivitiesText1: "Со приклучување на JOLZT и користење на платформата, вие потврдувате дека самите сте одговорни за усогласеноста со применливите закони, други правила, прописи и даночни обврски што може да се применуваат на вашето користење на JOLZT. Во врска со вашето користење на JOLZT, вие се согласувате дека нема да, ниту ќе дозволите на која било трета страна да:",
    prohibitedActivitiesList: [
      "Прекршува или заобиколува овие Услови или применливите закони.",
      "Користи JOLZT за какви било комерцијални или други цели што не се експлицитно дозволени.",
      "Копира, складира или на друг начин пристапува или користи какви било информации за други членови на несоодветен начин.",
      "Користи JOLZT во врска со дистрибуција на непосакувани комерцијални пораки ('спам').",
      "Рекламира возило што не е ваш или за кое немате дозвола да изнајмувате.",
      "Користи JOLZT за пребарување, правење или прифаќање на резервација надвор од JOLZT платформата.",
      "Бара, прифаќа или прави какви било плаќања за објавување и резервација надвор од JOLZT платформата.",
      "Дискриминира или малтретира врз основа на раса, национално потекло, религија, пол итн.",
      "Користи, прикажува, копира JOLZT платформата или било кој нејзин елемент без изрична писмена согласност.",
      "На било кој начин го нарушува брендот и угледот на JOLZT.",
      "Користи какви било автоматизирани средства за пристап или собирање податоци од платформата.",
      "Заобиколува какви било технолошки мерки имплементирани за заштита на платформата.",
      "Се обидува да го декомпилира, дешифрира или обратно инженерски анализира било кој софтвер што се користи за обезбедување на JOLZT платформата.",
      "Превзема какви било дејства што директно штетат или негативно влијаат - или би можеле да штетат или негативно влијаат - на перформансите или правилното функционирање на JOLZT платформата."
    ],

    cancellationSuspensionTitle: "Откажување и суспендирање на корисничка сметка",
    cancellationSuspensionText1: "JOLZT може, по свое усмотрение и без одговорност кон вас, каде што е применливо согласно овие Услови, другите правила, услови и политики на JOLZT, како и сите применливи закони, со или без претходна најава и во секое време, да одлучи да ја ограничи, суспендира, деактивира или откаже вашата корисничка сметка.",
    cancellationSuspensionText2: "Во таков случај, може да се соочите со некои или сите од следните последици:",
    cancellationSuspensionList: [
      "Вашата корисничка сметка ќе биде деактивирана или суспендирана.",
      "Сите идни резервации веднаш ќе бидат прекинати.",
      "Известување до вашите Корисници или Клиенти дека потенцијалната или потврдена резервација е откажана.",
      "Враќање на парите на вашите Корисници за сите потврдени резервации.",
      "Како Клиент, немате право на никаква компензација или враќање на пари за откажани резервации како резултат на откажувањето или суспендирањето на вашата корисничка сметка."
    ],

    liabilityTitle: "Ограничување на одговорност",
    liabilityText1: "Со користење на JOLZT платформата или колективната содржина, вие признавате дека го правите тоа целосно информирани и на ваша одговорност и ризик. Вие исто така признавате и се согласувате дека JOLZT нема обврска да спроведува проверки на статусот и позадината на било кој член.",
    liabilityText2: "JOLZT не гарантира дека JOLZT платформата, вклучувајќи, но не ограничувајќи се на објавите или било кои возила, ќе ги задоволи вашите барања. JOLZT не гарантира квалитетот на какви било објави, возила, клиенти, корисници, ниту точноста, вистинитоста, комплетноста или сигурноста на која било колективна содржина достапна на JOLZT платформата.",
    liabilityText3: "Ниту JOLZT, ниту која било друга страна вклучена во создавањето, производството или одржувањето на JOLZT нема да биде одговорна за какви било инцидентни, специјални или последователни штети (материјални или нематеријални).",

    disputeResolutionTitle: "Решавање на спорови",
    disputeResolutionText1: "Во однос на толкувањето и примената на овие Услови, се применува законот на Република Северна Македонија. Во случај на спор во врска со користењето на JOLZT и примената на овие Услови како и сите други правила, услови и политики на JOLZT, надлежен за негово решавање ќе биде надлежниот суд во Скопје, Република Северна Македонија.",

    contactTitle: "Контактирајте не",
    contactText: "Ако имате било какви прашања во врска со овие Услови, ве молиме контактирајте не на:",
    contactEmail: "Е-пошта: support@jolzt.com",
    contactPhone: "Телефон: +389 78 700 202"
  },
  sq: {
    // Header
    backToHome: "Kthehu në Faqen Kryesore",
    termsOfService: "Kushtet dhe Kushtet e Përdorimit",
    lastUpdated: "Përditësuar së fundi: 10 Prill 2025",

    // Welcome Section
    welcomeTitle: "Mirësevini",
    welcomeText1: "Përdorues i dashur, mirësevini në JOLZT! Ju lutemi lexoni me kujdes këto Kushte dhe Kushte të Përdorimit (në tekstin e mëtejmë: 'Kushtet dhe Kushtet') dhe informacionin paraprak kontraktual përpara se të filloni të përdorni platformën JOLZT.",
    welcomeText2: "Duke përdorur platformën, ju pranoni këto Kushte dhe Kushte, duke konfirmuar se i keni lexuar, kuptuar dhe pranuar këto kushte, si dhe të gjitha termat, kushtet, politikat dhe dokumentet e tjera të bashkëngjitura si lidhje në këto Kushte dhe Kushte.",
    welcomeText3: "Sa herë që hyni në platformë, ne do të konsiderojmë se ju pajtoheni me këto kushte. Nëse nuk pajtoheni me këto Kushte dhe Kushte, nuk keni të drejtë të merrni informacion të mëtejshëm ose të vazhdoni të përdorni JOLZT.",

    // Changes and Amendments
    changesTitle: "Ndryshimet dhe Amendamentet",
    changesText1: "JOLZT rezervon të drejtën të modifikojë kushtet dhe kushtet dhe politikat dhe rregullat e tjera në çdo kohë sipas gjykimit të saj. Nëse modifikojmë këto Kushte dhe Kushte, ne do t'i postojmë ndryshimet. Do të përditësojmë gjithashtu datën 'Përditësuar Së Fundi' në krye të këtyre kushteve.",
    changesText2: "Nëse vazhdoni të hyni ose përdorni platformën pasi ne kemi postuar ndryshimet ose ju kemi njoftuar për ndryshimin, ju konfirmoni me çdo përdorim të mëtejshëm të platformës se pranoni të jeni të lidhur nga kushtet dhe kushtet e ndryshuara. Nëse kushtet e ndryshuara nuk janë të pranueshme për ju, opsioni juaj i vetëm është të ndaloni përdorimin dhe hyrjen në platformë dhe të mbyllni (çaktivizoni) profilin tuaj të përdoruesit JOLZT brenda 30 ditësh.",

    // Introduction
    introductionTitle: "HYRJE",
    introductionText1: "Këto Kushte dhe Kushte rregullojnë dhe përcaktojnë procesin e përdorimit të mjeteve, aftësive dhe përfitimeve të ofruara nga JOLZT DOO Skopje me EMBS 7760957 (në këtë tekst: 'JOLZT') në faqen e saj të internetit dhe/ose aplikacionin dhe/ose media të tjera të JOLZT (të quajtura së bashku 'Platforma JOLZT', 'Platforma JOLZT' ose thjesht 'Platforma').",
    introductionText2: "Kur përdoret në këto Kushte dhe Kushte, 'JOLZT', 'ne', 'na' ose 'tonë' i referohet entitetit – entitetit juridik JOLZT DOO Skopje me të cilin ju lidhni një kontratë dhe angazhoheni të respektoni këto Kushte dhe Kushte si dhe të gjitha termat, kushtet dhe politikat e tjera të JOLZT.",
    introductionText3: "JOLZT ofron një platformë në internet që lidh përdoruesit e platformës ('Anëtarët') dhe u mundëson atyre të postojnë, ofrojnë, kërkojnë dhe rezervojnë shërbime të qirasë dhe përdorimit të automjeteve të pasagjerëve (në këtë tekst: 'Automjetet') nën qira. Anëtarët që postojnë dhe ofrojnë shërbime janë 'Klientë' ose 'Pritës', dhe anëtarët që kërkojnë, rezervojnë ose përdorin shërbime janë 'Të ftuar' ose 'Përdorues'.",
    introductionText4: "JOLZT nuk posedon, kontrollon, ofron ose menaxhon asnjë listim, shërbime klienti ose shërbime transporti. JOLZT nuk është pjesë në marrëveshjet e lidhura direkt midis Klientëve dhe Përdoruesve, as nuk vepron si agjensi udhëtimi, kompani taksi, kompani transporti, kompani me qira makinesh, kompani sigurimesh, ose organizator ose shitës i shërbimeve dhe paketave të transportit.",

    // Age Restriction
    ageRestrictionTitle: "Kufizimi i Moshës",
    ageRestrictionText: "Platforma jonë nuk synon të tërheqë përdorues nën 18 vjeç. Këta individë nuk lejohen të përdorin platformën në asnjë rrethanë.",

    // Member Responsibilities
    memberResponsibilitiesTitle: "Përgjegjësitë e Anëtarëve",
    memberResponsibilitiesText: "JOLZT nuk rekomandon ose miraton asnjë anëtar ose ndonjë automjet. Anëtarët janë të detyruar nga këto Kushte dhe Kushte të sigurojnë informacion të saktë. Edhe pse JOLZT mund të ofrojë procese të caktuara verifikimi ose të kryejë kontrollime të historikut, ne nuk ofrojmë asnjë garanci në lidhje me të dhënat e postuara të anëtarëve, sjelljen, identitetin ose përshtatshmërinë e ndonjë anëtari, ose cilësinë, gjendjen, ligjshmërinë ose korrektësinë e ndonjë automjeti.",

    // Related Policies
    relatedPoliciesTitle: "Politikat e Lidhura",
    relatedPoliciesText1: "JOLZT ofron, respekton dhe përdor terma, kushte dhe politika të tjera si",
    privacyPolicy: "Politika e Privatësisë",
    relatedPoliciesText2: "e cila përshkruan mbledhjen dhe përdorimin tonë të të dhënave personale,",
    paymentTerms: "Kushtet e Pagesës",
    relatedPoliciesText3: "të cilat rregullojnë të gjitha shërbimet e pagesës të ofruara për anëtarët, dhe",
    cookiePolicy: "Politika e Cookies",
    relatedPoliciesText4: "e cila rregullon përdorimin e 'cookies' që ne përdorim dhe që mundësojnë funksionimin e platformës sonë dhe na ndihmojnë të kuptojmë se cilat informacione dhe reklama janë më të dobishme për anëtarët, si dhe të gjitha politikat, rregullat dhe termat e tjera të JOLZT që na ndihmojnë ne dhe ju të arrijmë kënaqësi, siguri dhe mbrojtje më të madhe kur përdorni platformën.",

    // Right to Use
    rightToUseTitle: "E drejta për të Përdorur Platformën",
    rightToUseText1: "E drejta për të përdorur JOLZT i jepet individëve që janë të paktën 18 vjeç. Çdo hyrje ose përdorim i JOLZT nga çdo person nën 18 vjeç është i ndaluar qartë.",
    rightToUseText2: "Duke hyrë ose përdorur JOLZT, ju garantoni dhe deklaroni nën përgjegjësi të plotë morale, materiale dhe penale se jeni 18 vjeç ose më i madh, se keni kapacitetin ligjor për të hyrë në një kontratë dhe të jeni të lidhur nga këto Kushte dhe Kushte, dhe se jeni të njohur me të drejtat, detyrat dhe kushtet specifike të parashikuara nga Ligji për Sigurinë e Rrugëve dhe Ligji për Automjetet, si dhe të gjitha rregulloret e tjera të zbatueshme ligjore.",
    rightToUseText3: "Vërejmë se rregulloret e bashkëngjitura janë vetëm për qëllime informative dhe ne nuk marrim asnjë përgjegjësi nëse ato modifikohen, plotësohen, anulohen ose zëvendësohen nga një rregullore tjetër në kohën e pranimit të këtyre Kushteve dhe Kushteve.",

    // User Profile
    userProfileTitle: "Profili i Përdoruesit",
    registrationTitle: "Regjistrimi",
    registrationText1: "Për të hyrë në platformën JOLZT dhe të gjitha funksionet dhe përfitimet e saj, ju duhet të regjistroheni dhe të krijoni një profil përdoruesi dhe të bëheni anëtar i JOLZT. Regjistrimi i një profili përdoruesi bëhet direkt në Platformën JOLZT në përputhje me Kushtet dhe Kushtet e regjistrimit.",
    registrationText2: "Për të regjistruar profilin tuaj të përdoruesit, ju duhet të siguroni informacion të saktë, të përditësuar dhe të plotë gjatë procesit të regjistrimit dhe të përditësoni informacionin e tillë sipas nevojës.",
    registrationText3: "Gjatë procesit të regjistrimit si Klient / Pritës, ju na siguroni të dhëna dhe dokumente si: emri dhe mbiemri, adresa e banimit, data e lindjes, email, numri i telefonit celular, informacione për automjetin tuaj dhe krijimi i një fjalëkalimi ose lidhja përmes një profili shërbimi të palës së tretë (përfshirë, por jo i kufizuar në: Apple, Facebook dhe Google).",
    registrationText4: "Gjatë procesit të regjistrimit si Përdorues, ju na siguroni të dhëna dhe dokumente si: emri dhe mbiemri, adresa e banimit, data e lindjes, email, numri i telefonit celular, leja e drejtimit e vlefshme dhe krijimi i një fjalëkalimi ose lidhja përmes një profili shërbimi të palës së tretë (përfshirë, por jo i kufizuar në: Apple, Facebook dhe Google).",
    registrationText5: "Për sigurinë tuaj dhe përputhjen me të gjitha rregullat, kushtet dhe politikat e JOLZT, si dhe rregulloret e zbatueshme ligjore, ne rezervojmë të drejtën të kërkojmë të dhëna dhe dokumente shtesë gjatë procesit të regjistrimit dhe verifikimit, si dhe gjatë përdorimit të platformës.",

    // Verification
    verificationTitle: "Verifikimi",
    verificationText1: "Pas marrjes së një kërkese regjistrimi në Platformë, ekipi i JOLZT verifikon profilin tuaj të përdoruesit, d.m.th., përcakton nëse ju plotësoni rregullat dhe kushtet e regjistrimit.",
    verificationText2: "JOLZT rezervon të drejtën të refuzojë regjistrimin e profilit tuaj nëse përcakton se:",
    verificationListItem1: "Ju përdorni më shumë se 1 (një) profil përdoruesi;",
    verificationListItem2: "Çdo informacion i siguruar gjatë procesit të regjistrimit ose më pas gjendet të jetë i pasaktë, i rremë, i paplotë, i vjetëruar ose në ndonjë mënyrë tjetër në shkelje të këtyre Kushteve dhe Kushteve, të gjitha politikat, rregullat dhe kushtet e tjera të JOLZT, si dhe rregulloret e zbatueshme ligjore.",

    // Cancellation/Suspension
    cancellationTitle: "Anulimi/Pezullimi",
    cancellationText1: "JOLZT rezervon të drejtën të pezullojë ose të anulojë profilin tuaj të përdoruesit nëse:",
    cancellationListItem1: "Ju krijoni më shumë se 1 (një) profil përdoruesi;",
    cancellationListItem2: "Përcaktohet se çdo informacion i siguruar gjatë procesit të regjistrimit ose më pas gjendet të jetë i pasaktë, i rremë, i paplotë, i vjetëruar ose në ndonjë mënyrë tjetër në shkelje të këtyre Kushteve dhe Kushteve, të gjitha politikat, rregullat dhe kushtet e tjera të JOLZT, si dhe rregulloret e zbatueshme ligjore.",

    // Personal Data
    personalDataTitle: "Të Dhënat Personale",
    personalDataText1: "Privatësia juaj është e rëndësishme për ne. Ne, së bashku me ekipin tonë, ju sigurojmë se ne plotësojmë plotësisht rregulloret e zbatueshme ligjore për mbrojtjen e të dhënave personale dhe përpiqemi të sigurojmë nivelin më të lartë të mbrojtjes së privatësisë tuaj dhe të dhënave tuaja personale.",
    personalDataText2: "Ju lutemi shqyrtoni Politikën tonë të Privatësisë për të kuptuar se si mbledhim, përdorim dhe mbrojmë të dhënat tuaja personale. Duke përdorur platformën JOLZT, ju pranoni mbledhjen dhe përdorimin e të dhënave tuaja siç përshkruhet në Politikën e Privatësisë.",

    // Rules for Clients
    clientRulesTitle: "Rregullat për Klientët",
    clientRulesText1: "Si Klient, ju jeni plotësisht përgjegjës për përdorimin dhe hyrjen e duhur në profilin tuaj dhe përmbajtjen tjetër në Platformë në përputhje me ligjet e zbatueshme, si dhe parimet e mirëbesimit, moralitetit, zakoneve të pranuara përgjithësisht dhe rendit dhe paqes publike. Duke përdorur Platformën, ju angazhoheni t'i përmbaheni rreptësisht këtyre Kushteve dhe Kushteve.",
    clientRulesText2: "Si Klient, ju jeni plotësisht përgjegjës për futjen e saktë të emrave të përdoruesit dhe fjalëkalimeve tuaja individuale, të cilat duhet të jenë të patransferueshme dhe mjaft komplekse për të shmangur përdorimin e të njëjtave emra përdoruesi dhe fjalëkalime si në platforma të tjera, në mënyrë që të mbrohet profili juaj nga përdorimi mashtrues nga palët e treta ose çdo formë tjetër e dëmtimit. Përveç kësaj, është e ndaluar të ndërhyni në përdorimin ose shfrytëzimin normal të Platformës në emër të Klientëve dhe/ose Përdoruesve të tjerë.",
    clientRulesText3: "Si Klient në JOLZT, ju mund të krijoni postime, d.m.th., reklama për qiranë e automjetit(ve) tuaj. Për të krijuar një reklamë, do t'ju kërkohen pyetje të ndryshme në lidhje me Automjetin, përfshirë, por jo të kufizuara në, vendndodhjen, kapacitetin, madhësinë, karakteristikat, disponueshmërinë, çmimet dhe rregullat dhe kushtet financiare përkatëse.",
    clientRulesText4: "Me çdo botim të reklamave tuaja, ju garantoni dhe deklaroni se çdo reklamë që krijoni dhe rezervimi ose përdorimi i automjetit në reklamën që krijoni (a) nuk do të shkelë asnjë marrëveshje që keni lidhur me ndonjë palë të tretë, dhe (b) do të përputhet me të gjitha ligjet e zbatueshme, rregulloret tatimore dhe rregullat dhe rregulloret që mund të zbatohen për çdo automjet të përfshirë në reklamën që krijoni.",
    clientRulesText5: "Kur konfirmoni një kërkesë rezervimi ose merrni një konfirmim rezervimi nga JOLZT, ju si Klient hyrni në një marrëdhënie kontraktuale (qira) direkt me Përdoruesin si qiramarrës dhe angazhoheni të ofroni shërbimin në përputhje me këto Kushte dhe Kushte, rregullat, kushtet dhe politikat e tjera të JOLZT, si dhe të gjitha rregulloret e zbatueshme ligjore.",
    clientRulesText6: "Të gjitha kushtet që përfshini në çdo marrëveshje shtesë me Përdoruesit duhet: (a) të përputhen me këto Kushte dhe Kushte, të gjitha politikat, rregullat dhe kushtet e tjera të JOLZT, si dhe rregulloret e zbatueshme ligjore, dhe (b) të bëhen të disponueshme në përshkrimin e reklamës.",
    clientRulesText7: "Marrëdhënia juaj me JOLZT është ajo e një individi ose entiteti të pavarur, jo një punonjës, bashkëpunëtor, agjent ose partner i JOLZT, përveç se JOLZT vepron si ndërmjetës mbledhës siç përshkruhet në kushtet e pagesës. JOLZT nuk drejton ose kontrollon ofertën tuaj, dhe ju e kuptoni se keni diskrecion të plotë nëse dhe kur të ofroni ofertën tuaj, me çfarë çmimi dhe nën çfarë kushtesh.",
    clientRulesText8: "Përgjegjësia për (mos) njohjen dhe (mos) ndjekjen e të gjitha ligjeve, rregulloreve dhe rregullave që lidhen me listimin tuaj qëndron tek ju. Të gjitha informacionet ligjore që ne ofrojmë janë vetëm për qëllime informative, dhe ju duhet të konfirmoni në mënyrë të pavarur të drejtat dhe detyrat tuaja ligjore.",
    clientRulesText9: "Theksojmë se nëse jeni Klient dhe veproni në emër të një personi juridik ose çdo entiteti tjetër që mund të konsiderohet person juridik, ju jeni akoma përgjegjës si Klient në përputhje me këto Kushte dhe Kushte, rregullat, kushtet dhe politikat e tjera të JOLZT, si dhe rregulloret e zbatueshme ligjore.",
    clientRulesText10: "Nëse jeni Klient dhe një rezervim për automjetin tuaj kërkohet përmes JOLZT, ju do të jeni të detyruar ose të konfirmoni ose të refuzoni rezervimin brenda periudhës së rezervimit, e cila është ---- orë. Përndryshe, rezervimi i kërkuar do të skadojë automatikisht dhe automjeti nuk do të rezervohet.",
    clientRulesText11: "Si Klient, nuk keni të drejtë të anuloni një rezervim të Përdoruesit pa një arsye të vërtetë dhe të justifikuar në përputhje me rregullat, kushtet, politikat dhe rregulloret e zbatueshme. JOLZT rezervon të drejtën të vendosë tarifa dhe pagesa shtesë, si dhe të anulojë/pezullojë profilin tuaj të përdoruesit nëse vëren një anulim të një rezervimi pa një arsye të vërtetë dhe të justifikuar.",
    clientRulesText12: "Çdo ndryshim dhe modifikim i listimeve dhe rezervimeve tuaja lejohet, me pasojën e mundshme që JOLZT të ketë të drejtën të vendosë tarifa shtesë që lidhen me modifikimin e rezervimit.",
    clientRulesText13: "Si Klient në platformë, ju konfirmoni se jeni të vetëdijshëm për detyrimet tatimore të vendosura nga rregulloret tatimore të Republikës së Maqedonisë së Veriut dhe se JOLZT nuk ka asnjë detyrim për të llogaritur dhe paguar ndonjë taksë dhe tarifë për të ardhurat që fitoni si Klient për qiranë e automjetit tuaj.",

    // Client Recommendations
    clientRecommendationsTitle: "Rekomandimet tona të përgjithshme për ju si Klient janë si më poshtë:",
    clientRecommendationsList: [
      "Saktësia e informacionit: Siguroni informacion të saktë, të përditësuar dhe të plotë për automjetin tuaj.",
      "Siguria dhe mirëmbajtja: Sigurohuni që automjeti juaj të jetë në gjendje të mirë, i mirëmbajtur rregullisht dhe i sigurt për përdorim.",
      "Higjiena: Siguroni një automjet të pastër dhe higjienik për Përdoruesit tuaj si Qiramarrës.",
      "Dokumentet e duhura: Sigurohuni që të gjitha dokumentet e nevojshme të jenë të përditësuara dhe të disponueshme.",
      "Rregullat e përdorimit: Përcaktoni qartë të gjitha rregullat dhe kufizimet për përdorimin e automjetit tuaj.",
      "Respektimi i rezervimeve: Respektoni të gjitha rezervimet e konfirmuara.",
      "Përgjigjja ndaj raporteve: Përgjigjuni raporteve të dëmeve ose çështjeve nga Përdoruesit në kohën e duhur."
    ],

    // Client Commitments
    clientCommitmentsTitle: "Duke reklamuar dhe dhënë me qira automjetin tuaj, në përputhje me rregulloret e zbatueshme ligjore, ju konfirmoni dhe angazhoheni për sa vijon:",
    clientCommitmentsList: [
      "Automjeti që reklamoni dhe dhini me qira është i regjistruar siç duhet, në kohën e duhur dhe në mënyrë legjale.",
      "Automjeti që reklamoni dhe dhini me qira ka një leje trafiku të vlefshme.",
      "Automjeti që reklamoni është ekskluzivisht pronësia juaj dhe/ose keni të drejtën ta dhëni me qira.",
      "Ju nuk do të shkelni të drejtat e ndonjë pale të tretë duke reklamuar dhe dhënë me qira automjetin në fjalë.",
      "Ju keni sigurimin e detyrueshëm të përgjegjësisë civile të vlefshme për periudhën e qirasë së automjetit tuaj.",
      "Ju nuk do ta reklamoni dhe dhëni me qira automjetin për qëllimin e marrjes së tij jashtë kufijve pa autorizimin e duhur.",
      "Ju nuk do ta reklamoni dhe dhëni me qira një automjet fuqia e motorit të të cilit tejkalon 77 kilovat për një drejtues fillestar.",
      "Ju nuk do t'i dhëni me qira një personi që nuk ka të drejtën të operojë një automjet.",
      "Ju do të përmbaheni plotësisht nga Ligji për Sigurinë e Rrugëve dhe Ligji për Automjetet."
    ],

    // Rules for Users
    userRulesTitle: "Rregullat për Përdoruesit",
    userRulesText1: "Si Përdorues, ju jeni plotësisht përgjegjës për përdorimin dhe hyrjen e duhur në profilin tuaj dhe përmbajtjen tjetër në Platformë në përputhje me ligjin e zbatueshëm, si dhe parimet e mirëbesimit, moralitetit, zakoneve të pranuara përgjithësisht dhe rendit publik.",
    userRulesText2: "Si Përdorues, ju jeni plotësisht përgjegjës për futjen e saktë të emrave të përdoruesit dhe fjalëkalimeve tuaja individuale, të cilat duhet të jenë të patransferueshme dhe mjaft komplekse në mënyrë që të mos përdoren të njëjtat emra përdoruesi dhe fjalëkalime në platforma të tjera.",
    userRulesText3: "Në platformë, ju mund të kërkoni listime të Klientëve sipas llojit të Automjetit, performancës së automjetit, periudhës dhe datave të qirasë, dhe të ngjashme. Për kërkim më të saktë, platforma ofron filtrimin e preferencave tuaja ('Filtrat').",
    userRulesText4: "Duke zgjedhur opsionin e dëshiruar (listimin), ju dërgoni një kërkesë rezervimi te Klienti, duke pranuar të paguani të gjitha kostot dhe tarifat, përfshirë, por jo të kufizuara në, tarifat e qirasë së automjetit dhe kostot e tjera përkatëse.",
    userRulesText5: "Kur merrni një konfirmim rezervimi nga JOLZT, ju si Përdorues hyrni në një Marrëveshje Qiraje (Leje) direkt me Klientin si Qiramarrës dhe angazhoheni të respektoni këto Rregulla dhe kushte, rregullat, kushtet dhe politikat e tjera të JOLZT, si dhe të gjitha rregulloret e zbatueshme ligjore.",
    userRulesText6: "Marrëdhënia juaj me JOLZT është ajo e një individi ose entiteti të pavarur, jo ajo e një punonjësi, bashkëpunëtori, agjenti ose partneri i JOLZT, përveç se JOLZT vepron si agjent mbledhës siç përshkruhet në Kushtet e Pagesës.",
    userRulesText7: "Si Përdorues, ju jeni vetëm dhe ekskluzivisht përgjegjës për kthimin e Automjetit në gjendjen në të cilën ai ju është dorëzuar në kohën e dorëzimit. Si Përdorues, ju konfirmoni dhe pranoni në mënyrë të qartë se jeni vetëm përgjegjës për veprimet tuaja dhe çdo mosveprim, si dhe veprimet dhe mosveprimet e çdo pale të tretë të cilës i keni lejuar qasjen në automjet.",
    userRulesText8: "Nëse, si Përdorues, ju anuloni rezervimin tuaj përpara se rezervimi i kërkuar të konfirmohet nga Klienti, JOLZT do të anulojë çdo autorizim paraprak nga metoda juaj e pagesës dhe/ose do të rimbursojë çdo shumë nominale të ngarkuar në metodën tuaj të pagesës në lidhje me rezervimin e kërkuar brenda një kohe të arsyeshme.",
 userCommitmentsTitle: "Duke bërë rezervime dhe duke përdorur një automjet me qira, në përputhje me rregulloret ligjore në fuqi, ju konfirmoni dhe angazhoheni për sa vijon:",
  userCommitmentsList: [
    "Keni një patentë shoferi të vlefshme të lëshuar në Republikën e Maqedonisë së Veriut, një patentë shoferi të huaj ose një patentë ndërkombëtare.",
    "Patenta juaj e shoferit nuk ka kufizim për drejtimin e një automjeti me transmetim automatik (nëse aplikohet).",
    "Nuk ju është shqiptuar një dënim për pezullimin e vlefshmërisë së patentës ose ndalim për drejtimin e një automjeti.",
    "Afati i vlefshmërisë së patentës suaj të shoferit nuk ka skaduar.",
    "Nuk do të përdorni automjetin nëse jeni shumë të lodhur, të sëmurë ose në një gjendje mendore që ju bën të paaftë për drejtim të sigurt të automjetit.",
    "Nuk do të përdorni automjetin nën ndikimin e ilaçeve që janë të shënuara si të ndaluara për përdorim para ose gjatë drejtimit.",
    "Nuk do të drejtoni automjetin nën ndikimin e drogave narkotike ose substancave psikotrope.",
    "Nuk do të drejtoni automjetin nën ndikimin e alkoolit.",
    "Nuk do të drejtoni automjetin nëse jeni shofer fillestar gjatë orëve të kufizuara pa shoqërues të duhur.",
    "Nuk do të përdorni automjetin jashtë kufijve shtetërorë pa autorizim të duhur.",
    "Do të respektoni plotësisht rregullat e trafikut të përcaktuara me Ligjin për Sigurinë në Trafikun Rrugor."
  ],

  rentalAgreementTitle: "Marrëveshje Qiraje",
  rentalAgreementText1: "Duke inicuar dhe konfirmuar një rezervim përmes JOLZT, Klienti dhe Përdoruesi pranojnë dhe konfirmojnë se hyjnë në një marrëdhënie juridikisht të detyrueshme, përkatësisht një Marrëveshje Qiraje. Kushtet dhe rregullat e deklaruara në shpallje, përfshirë të gjitha detajet mbi automjetin, çmimet dhe rregullat, janë pjesë integrale e kësaj marrëveshjeje qiraje.",
  rentalAgreementText2: "Të dyja palët kanë të drejtë të lidhin një marrëveshje qiraje formalisht, si dhe të lidhin marrëveshje ose anekse shtesë për të rregulluar ose zgjidhur nevoja ose rrethana të veçanta, përderisa ato nuk bien ndesh me kushtet bazë të shpalljes, këto rregulla dhe kushte, rregullat e tjera dhe politikat e JOLZT, si dhe rregulloret pozitive në fuqi.",
  rentalAgreementText3: "JOLZT nuk mban përgjegjësi për detyrimet që rrjedhin nga Marrëveshja e Qirasë e lidhur ndërmjet Përdoruesit dhe Klientit. Në asnjë rast JOLZT nuk mund të mbahet përgjegjës për detyrimet që lidhen me pagesën e tarifave/qirasë, dorëzimin e automjetit në posedim, përgjegjësinë për dëmtimet e shkaktuara automjetit dhe/ose palëve të treta, si dhe për nënqiradhënien e automjetit.",

  taxesTitle: "Taksat",
  taxesText1: "Duke rënë dakord me këto rregulla dhe kushte dhe më pas duke listuar automjete dhe duke bërë rezervime, anëtarët kuptojnë dhe pranojnë se janë vetë përgjegjës për detyrimet e tyre tatimore. JOLZT nuk mund dhe nuk jep këshilla tatimore për asnjë anëtar.",

  prohibitedActivitiesTitle: "Aktivitete të Ndaluara",
  prohibitedActivitiesText1: "Duke u bashkuar me JOLZT dhe duke përdorur platformën, konfirmoni që jeni vetë përgjegjës për përputhshmërinë me ligjet në fuqi, rregullat, rregulloret dhe detyrimet tatimore që mund të aplikohen për përdorimin tuaj të JOLZT. Në lidhje me përdorimin e JOLZT, ju pranoni që nuk do të: ",
  prohibitedActivitiesList: [
    "Shkelni ose anashkaloni këto Rregulla dhe Kushte ose ligjet në fuqi.",
    "Përdorni JOLZT për qëllime komerciale ose të tjera që nuk janë lejuar shprehimisht.",
    "Kopjoni, ruani ose përdorni në mënyrë të papërshtatshme çdo informacion për anëtarët e tjerë.",
    "Përdorni JOLZT në lidhje me shpërndarjen e mesazheve komerciale të paautorizuara ('spam').",
    "Reklamoni një automjet që nuk e zotëroni ose nuk keni autorizim ta jepni me qira.",
    "Përdorni JOLZT për të kërkuar, bërë ose pranuar rezervime jashtë platformës JOLZT.",
    "Kërkoni, pranoni ose bëni pagesa për listim dhe rezervim jashtë platformës JOLZT.",
    "Diskriminoni ose ngacmoni bazuar në racë, origjinë kombëtare, religjion, gjini, etj.",
    "Përdorni, shfaqni, kopjoni platformën JOLZT ose ndonjë element të saj pa miratim të shkruar.",
    "Dëmtoni markën dhe reputacionin e JOLZT.",
    "Përdorni mjete automatike për të hyrë ose mbledhur të dhëna nga platforma.",
    "Anashkaloni masat teknologjike të implementuara për të mbrojtur platformën.",
    "Përpiqeni të zbërtheni softuerin e përdorur për ofrimin e platformës.",
    "Merrni veprime që dëmtojnë ose ndikojnë negativisht në platformë."
  ],

  cancellationSuspensionTitle: "Anulimi dhe Pezullimi i Llogarisë së Përdoruesit",
  cancellationSuspensionText1: "JOLZT mund, sipas diskrecionit të tij dhe pa përgjegjësi ndaj jush, kur është e zbatueshme sipas këtyre Rregullave dhe Kushteve, si dhe ligjeve në fuqi, me ose pa njoftim paraprak dhe në çdo kohë, të vendosë të kufizojë, pezullojë, çaktivizojë ose anulojë llogarinë tuaj të përdoruesit.",
  cancellationSuspensionText2: "Në një rast të tillë, mund të përballeni me disa ose të gjitha pasojat e mëposhtme:",
  cancellationSuspensionList: [
    "Llogaria juaj do të çaktivizohet ose pezullohet.",
    "Çdo rezervim i ardhshëm do të ndërpritet menjëherë.",
    "Njoftim për Përdoruesit ose Klientët tuaj për anulimin e rezervimeve.",
    "Rimbursime për Përdoruesit tuaj për të gjitha rezervimet e konfirmuara.",
    "Si Klient, nuk do të keni të drejtë për kompensim për rezervimet e anuluara."
  ],

  liabilityTitle: "Kufizimi i Përgjegjësisë",
  liabilityText1: "Duke përdorur platformën JOLZT ose përmbajtjen kolektive, pranoni që po veproni tërësisht të informuar dhe në përgjegjësinë dhe rrezikun tuaj. Ju gjithashtu pranoni që JOLZT nuk ka detyrimin të kryejë kontrolle mbi statusin dhe sfondin e ndonjë anëtari.",
  liabilityText2: "JOLZT nuk garanton që Platforma JOLZT, duke përfshirë, por pa u kufizuar në, listimet ose automjetet, do të plotësojë kërkesat tuaja. JOLZT nuk garanton cilësinë e ndonjë listimi, automjeti, klienti, përdoruesi, dhe as saktësinë, vërtetësinë, plotësinë ose besueshmërinë e përmbajtjes kolektive në Platformën JOLZT.",
  liabilityText3: "As JOLZT dhe as ndonjë palë tjetër e përfshirë në krijimin ose mirëmbajtjen e JOLZT nuk do të jenë përgjegjës për ndonjë dëm të rastësishëm, special ose pasues (material ose jo-material).",

  disputeResolutionTitle: "Zgjidhja e Mosmarrëveshjeve",
  disputeResolutionText1: "Në lidhje me interpretimin dhe zbatimin e këtyre Rregullave dhe Kushteve, aplikohet ligji i Republikës së Maqedonisë së Veriut. Në rast mosmarrëveshjeje lidhur me përdorimin e JOLZT dhe zbatimin e këtyre Rregullave dhe Kushteve, si dhe rregullave dhe politikave të tjera të JOLZT, gjykata kompetente në Shkup, Maqedonia e Veriut, do të ketë juridiksion për zgjidhjen e saj.",

  contactTitle: "Na Kontaktoni",
  contactText: "Nëse keni ndonjë pyetje në lidhje me këto Rregulla dhe Kushte, ju lutemi na kontaktoni në:",
  contactEmail: "Email: support@jolzt.com",
  contactPhone: "Telefon: +389 78 700 202"
}
}

export default function TermsOfServicePage({ params }: { params: { lang: string } }) {
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
            <h1 className="text-3xl font-bold mb-6">{t.termsOfService}</h1>
            <div className="prose max-w-none">
              <p className="text-muted-foreground mb-6">{t.lastUpdated}</p>

              {/* Welcome Section */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.welcomeTitle}</h2>
              <p>{t.welcomeText1}</p>
              <p>{t.welcomeText2}</p>
              <p>{t.welcomeText3}</p>

              {/* Changes and Amendments */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.changesTitle}</h2>
              <p>{t.changesText1}</p>
              <p>{t.changesText2}</p>

              {/* Introduction */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.introductionTitle}</h2>
              <p>{t.introductionText1}</p>
              <p>{t.introductionText2}</p>
              <p>{t.introductionText3}</p>
              <p>{t.introductionText4}</p>

              {/* Age Restriction */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.ageRestrictionTitle}</h2>
              <p>{t.ageRestrictionText}</p>

              {/* Member Responsibilities */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.memberResponsibilitiesTitle}</h2>
              <p>{t.memberResponsibilitiesText}</p>

              {/* Related Policies */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.relatedPoliciesTitle}</h2>
              <p>
                {t.relatedPoliciesText1}{" "}
                <Link href={`/${lang}/privacy-policy`} className="text-[#f26522] hover:underline">
                  {t.privacyPolicy}
                </Link>{" "}
                {t.relatedPoliciesText2}{" "}
                <Link href={`/${lang}/payment-terms`} className="text-[#f26522] hover:underline">
                  {t.paymentTerms}
                </Link>{" "}
                {t.relatedPoliciesText3}{" "}
                <Link href={`/${lang}/cookie-policy`} className="text-[#f26522] hover:underline">
                  {t.cookiePolicy}
                </Link>{" "}
                {t.relatedPoliciesText4}
              </p>

              {/* Right to Use */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.rightToUseTitle}</h2>
              <p>{t.rightToUseText1}</p>
              <p>{t.rightToUseText2}</p>
              <p>{t.rightToUseText3}</p>

              {/* User Profile */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.userProfileTitle}</h2>
              <h3 className="text-lg font-semibold mt-6 mb-3">{t.registrationTitle}</h3>
              <p>{t.registrationText1}</p>
              <p>{t.registrationText2}</p>
              <p>{t.registrationText3}</p>
              <p>{t.registrationText4}</p>
              <p>{t.registrationText5}</p>

              {/* Verification */}
              <h3 className="text-lg font-semibold mt-6 mb-3">{t.verificationTitle}</h3>
              <p>{t.verificationText1}</p>
              <p>{t.verificationText2}</p>
              <ul className="list-disc pl-6 mb-4">
                <li>{t.verificationListItem1}</li>
                <li>{t.verificationListItem2}</li>
              </ul>

              {/* Cancellation/Suspension */}
              <h3 className="text-lg font-semibold mt-6 mb-3">{t.cancellationTitle}</h3>
              <p>{t.cancellationText1}</p>
              <ul className="list-disc pl-6 mb-4">
                <li>{t.cancellationListItem1}</li>
                <li>{t.cancellationListItem2}</li>
              </ul>

              {/* Personal Data */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.personalDataTitle}</h2>
              <p>{t.personalDataText1}</p>
              <p>{t.personalDataText2}</p>

              {/* Rules for Clients */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.clientRulesTitle}</h2>
              <p>{t.clientRulesText1}</p>
              <p>{t.clientRulesText2}</p>
              <p>{t.clientRulesText3}</p>
              <p>{t.clientRulesText4}</p>
              <p>{t.clientRulesText5}</p>
              <p>{t.clientRulesText6}</p>
              <p>{t.clientRulesText7}</p>
              <p>{t.clientRulesText8}</p>
              <p>{t.clientRulesText9}</p>
              <p>{t.clientRulesText10}</p>
              <p>{t.clientRulesText11}</p>
              <p>{t.clientRulesText12}</p>
              <p>{t.clientRulesText13}</p>

              {/* Client Recommendations */}
              <h3 className="text-lg font-semibold mt-6 mb-3">{t.clientRecommendationsTitle}</h3>
              <ul className="list-disc pl-6 mb-4">
                {t.clientRecommendationsList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {/* Client Commitments */}
              <h3 className="text-lg font-semibold mt-6 mb-3">{t.clientCommitmentsTitle}</h3>
              <ul className="list-disc pl-6 mb-4">
                {t.clientCommitmentsList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {/* Rules for Users */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.userRulesTitle}</h2>
              <p>{t.userRulesText1}</p>
              <p>{t.userRulesText2}</p>
              <p>{t.userRulesText3}</p>
              <p>{t.userRulesText4}</p>
              <p>{t.userRulesText5}</p>
              <p>{t.userRulesText6}</p>
              <p>{t.userRulesText7}</p>
              <p>{t.userRulesText8}</p>

              {/* User Commitments */}
              <h3 className="text-lg font-semibold mt-6 mb-3">{t.userCommitmentsTitle}</h3>
              <ul className="list-disc pl-6 mb-4">
                {t.userCommitmentsList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {/* Rental Agreement */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.rentalAgreementTitle}</h2>
              <p>{t.rentalAgreementText1}</p>
              <p>{t.rentalAgreementText2}</p>
              <p>{t.rentalAgreementText3}</p>

              {/* Taxes */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.taxesTitle}</h2>
              <p>{t.taxesText1}</p>

              {/* Prohibited Activities */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.prohibitedActivitiesTitle}</h2>
              <p>{t.prohibitedActivitiesText1}</p>
              <ul className="list-disc pl-6 mb-4">
                {t.prohibitedActivitiesList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {/* Cancellation and Suspension */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.cancellationSuspensionTitle}</h2>
              <p>{t.cancellationSuspensionText1}</p>
              <p>{t.cancellationSuspensionText2}</p>
              <ul className="list-disc pl-6 mb-4">
                {t.cancellationSuspensionList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {/* Limitation of Liability */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.liabilityTitle}</h2>
              <p>{t.liabilityText1}</p>
              <p>{t.liabilityText2}</p>
              <p>{t.liabilityText3}</p>

              {/* Dispute Resolution */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.disputeResolutionTitle}</h2>
              <p>{t.disputeResolutionText1}</p>

              {/* Contact Us */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.contactTitle}</h2>
              <p>{t.contactText}</p>
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
  );
}