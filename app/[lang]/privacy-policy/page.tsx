import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { LanguageSelector } from "@/components/language-selector"

// Translations for Privacy Policy
const privacyPolicyTranslations = {
  en: {
    // Header
    privacyPolicyTitle: "Privacy Policy",
    lastUpdated: "Last updated: April 10, 2025",
    backToHome: "Back to Home",

    // Introduction
    introductionTitle: "INTRODUCTION",
    introductionText1: "JOLZT DOO Skopje, with EMBS 7760957 (in this text: 'JOLZT', 'we', 'us' or 'our'), in cooperation with our team, by publishing this Privacy Policy, assures and commits to fully respecting the applicable legal regulations for personal data protection and ensures the highest level of protection of your privacy and your personal data when using our website and/or application and/or other JOLZT media (collectively, 'JOLZT Platform', 'Platform JOLZT' or simply 'Platform').",
    introductionText2: "This Privacy Policy regulates and defines how we collect, use, disclose, and protect your personal data. By using the JOLZT platform, you agree to the collection and use of data and information in accordance with this policy and the applicable legal regulations for personal data protection.",
    introductionText3: "Our Privacy Policy is fully compliant with the applicable legal regulations for personal data protection in the Republic of North Macedonia. Our commitment to its implementation is inspired by the trust you place in us - our clients, users, business partners, and all other persons who decide to share their personal data when using our platform.",
    introductionText4: "We created this policy with a single purpose: so that together, you and we can achieve the highest level of personal data protection, keeping in mind one of the fundamental human rights - respect for the right to privacy and protection of personal data.",
    introductionText5: "Please read this Privacy Policy carefully before starting to use the JOLZT platform. By using the platform, you agree to this policy, confirming that you have read, understood, and accepted it, and that you agree with the way we collect, use, process, disclose, and protect personal data. With each subsequent access to the platform, we will consider that you agree with this policy. If you do not agree, you do not have the right to receive additional information or continue using JOLZT.",

    // Personal Data Definition
    personalDataTitle: "What is personal data?",
    personalDataText: "According to the Law on Personal Data Protection, 'personal data' is any information relating to an identified or identifiable natural person (data subject). An identifiable natural person is one whose identity can be determined directly or indirectly, especially based on an identifier such as a name and surname, citizen identification number, location data, internet identifier, or based on one or more characteristics specific to their physical, physiological, genetic, mental, economic, cultural, or social identity.",

    // Purposes and Principles
    purposesTitle: "Purposes for Collecting and Processing Personal Data",
    purposesText1: "When accessing and using the JOLZT platform, we collect and process personal data based on the following principles and guarantee that they:",
    purposesListItem1: "Are processed lawfully, fairly, and transparently in relation to the data subject ('lawfulness, fairness, and transparency').",
    purposesListItem2: "Are collected for specified, explicit, and legitimate purposes and not further processed in a manner that is incompatible with those purposes ('purpose limitation').",
    purposesListItem3: "Are adequate, relevant, and limited to what is necessary in relation to the purposes for which they are processed ('data minimization').",
    purposesListItem4: "Are accurate and, where necessary, kept up to date, with every reasonable step being taken to ensure that personal data that are inaccurate or incomplete are erased or rectified promptly, considering the purposes for which they are processed ('accuracy').",
    purposesListItem5: "Are kept in a form that permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed ('storage limitation').",
    purposesListItem6: "Are processed in a manner that ensures appropriate security of the personal data, including protection against unauthorized or unlawful processing and against accidental loss, destruction, or damage, using appropriate technical or organizational measures ('integrity and confidentiality').",
    purposesText2: "When accessing and using the JOLZT platform, we collect and process personal data only when necessary, to the extent needed to provide high-quality services. We do this to achieve one or more of the following purposes:",
    purposesList: [
      "Simple, efficient, and quality forwarding of all notifications and information to you.",
      "Easy and efficient finding of the services we offer you.",
      "Mutual communication and receipt of your remarks, comments, praises, and criticisms.",
      "Registration of your account on our platform.",
      "Posting and confirming ads and enabling communication with interested users of your vehicles.",
      "Making reservations for ads and enabling communication with advertisers - vehicle owners.",
      "Sending system messages on the platform and/or to your email address for timely notifications.",
      "Communication with our customer support team.",
      "Responding to your questions or various requests.",
      "Digital marketing purposes, only upon receiving your explicit consent.",
      "Timely notification of all new benefits, offers, and services from JOLZT.",
      "Using the benefits we offer as a reward for your loyalty.",
      "Becoming part of our team by applying for a job."
    ],
    purposesText3: "We assure you that your personal data will not be processed for any other purpose, except for the purpose for which they were collected. The collection and processing of your personal data for a different purpose, other than those mentioned above, can only be carried out based on your prior given consent or to fulfill legal obligations.",

    // Legal Basis
    legalBasisTitle: "Legal Basis and Manner of Processing Personal Data",
    legalBasisText1: "We collect, process, and store your personal data lawfully, transparently, and fairly, in accordance with the above-mentioned purposes and principles. Their collection, processing, and delivery are carried out exclusively by our specially authorized team. Without your knowledge and consent, your personal data can only be provided to competent authorities in accordance with legally established procedures.",
    legalBasisText2: "The processing of personal data can be based on:",
    legalBasisList: [
      "Your prior consent for the processing of your personal data for one or more specific purposes.",
      "The necessity to fulfill our legal obligations.",
      "The necessity to fulfill a contract or take steps at your request prior to entering into a contract.",
      "The necessity to protect your or third parties' interests in emergency situations.",
      "The necessity to perform tasks in the public interest or in the exercise of official authority.",
      "The necessity to pursue our legitimate interests, the interests of a third party, or the interests of the person to whom the data are disclosed, except where your rights and freedoms as a data subject override such interests."
    ],

    // Data Categories
    dataCategoriesTitle: "Categories of Personal Data We Collect",
    dataCategoriesText1: "The categories of personal data we collect to achieve the above-mentioned purposes are as follows:",
    dataCategoriesList: [
      "Name and surname",
      "Address (residence address; city; postal code)",
      "Citizen identification number",
      "Gender",
      "Date of birth",
      "Email address",
      "Contact phone number"
    ],
    dataCategoriesText2: "When visiting our Platform, logs with the following data are created for each visitor:",
    dataCategoriesList2: [
      "Your Internet Protocol (IP) address",
      "The device from which you access, type, and model",
      "Your operating system",
      "Type of browser, plugins, and version",
      "Pages you visit on our website and the time you spend on each page",
      "The URL of the page that referred you to our platform",
      "The language of the browser you use",
      "The country (determined by IP address)"
    ],
    dataCategoriesText3: "Server logs are automatically deleted within 15 days unless circumstances require longer retention, for example, to investigate a virus or malicious attack.",

    // Data Retention
    retentionTitle: "Retention Period of Your Personal Data",
    retentionText: "We will retain your personal data for as long as necessary to achieve the purposes according to this Privacy Policy. We will retain personal data only as necessary to comply with legal obligations, pursue legitimate interests, and enforce our rules and policies. Some personal data may be retained longer due to proceedings before competent state authorities and institutions.",

    // Data Sharing
    sharingTitle: "Categories of Users to Whom Your Personal Data May Be Disclosed",
    sharingText1: "Your personal data is processed only within our company. Exceptionally, in cases and under conditions provided by law, we may disclose your personal data to the following categories of users:",
    sharingList: [
      "Lawyers",
      "Notaries",
      "Executors",
      "Courts",
      "Accountants",
      "Other legal entities that use the data to pursue your rights and interests (banks, insurance companies, etc.)",
      "Other legal entities and authorized state bodies, establishments, and institutions."
    ],

    // Data Processors
    processorsTitle: "Processors Who May Have Access to Your Personal Data",
    processorsText1: "The following categories of processors may have access to your personal data:",
    processorsList: [
      "External persons providing IT services to maintain the Platform and the entire established electronic system we use",
      "Entities offering service services consisting of technical support"
    ],
    processorsText2: "We assure you that we only cooperate with processors who provide sufficient guarantees for the implementation of appropriate technical and organizational measures for processing in accordance with legal requirements and conditions, ensuring the rights of data subjects. The processing of your personal data by third-party processors is regulated through a contract or other legal act, in accordance with the law. The processor cannot engage another processor without our prior written authorization.",

    // Data Transfer
    transferTitle: "Transfer and Disclosure of Personal Data",
    transferText1: "Only our authorized employees have the right to access your personal data for their collection and processing. We do not allow unauthorized and unlawful access to your personal data, nor their transfer or disclosure to third parties, except in cases provided by law.",
    transferText2: "Some of the personal data we collect may be transferred outside the territory of the Republic of North Macedonia, where we will continue to protect your personal data that we transfer in accordance with this privacy policy and data protection regulations. Whenever we transfer your personal data, we ensure their protection by consistently adhering to and applying appropriate protective measures in accordance with data protection regulations governing the transfer of personal data.",
    transferText3: "We assure you that the transfer of personal data is protected by appropriate and quality methods, ensuring that they will not be readable and will be protected according to the risk and nature of the data being transferred. To prevent unauthorized access to personal data, we will take all necessary technical and organizational measures to protect personal data.",

    // Consent Management
    consentTitle: "Consent Management",
    consentText: "You can change the status of your consent (give or withdraw consent) at any time by sending an email (through our website and/or application). The consent for the processing of personal data for direct marketing purposes that you as a user or Client have given or its withdrawal is always valid for the purposes for which you have decided it should be valid.",

    // Third Parties
    thirdPartiesTitle: "Collaboration with Third Parties",
    thirdPartiesText1: "During each visit and/or use of our website and/or application, you may encounter third-party websites with which we cooperate. Therefore, we inform you that if you come across links that direct you to other websites belonging to third parties, we are not authorized to control their content, nor can we have insight into how they provide personal data protection. Moreover, we are not responsible for the actions of employees or other persons authorized to work on websites linked to and from our website and/or application. Each of these websites may have its own Privacy Policy, which we also recommend you familiarize yourself with.",
    thirdPartiesText2: "You may disclose your personal data to Facebook or Google, in accordance with the terms of use and privacy policies of third parties, and those parties may transfer personal data in a structured, commonly used, and electronically readable format to a new operator, i.e., JOLZT. Since this transfer is made by third parties, in accordance with their terms of use and privacy policies, we will consider that you have given your consent to those parties to transfer personal data to us. In such a case, we will not be responsible for processing the personal data transferred to us by third parties (Facebook or Google). Furthermore, from the moment we receive data from these parties, we will be considered the controller and solely responsible for the further processing of personal data.",

    // Minors Protection
    minorsTitle: "Personal Data Protection Policy for Persons Under 18 Years of Age",
    minorsText: "According to legal provisions, minors (children) are not allowed to provide personal data without permission from their parents/guardians. Therefore, we strongly recommend that all parents/guardians teach their children to handle personal data safely and responsibly. Under no circumstances will we intentionally collect (gather and process) personal data of persons under 18 years of age, nor will we forward their personal data to a third party without prior permission from their parents/guardians.",

    // Cookies
    cookiesTitle: "Cookies",
    cookiesText1: "Our Platform uses cookies to enhance the website/application's functionality and provide a better experience for you while using it.",
    cookiesText2: "Cookies are small text files (pieces of code) that can be used to improve the user experience when visiting a website. Cookies work by placing them on your device during your visit to the website or application to store information about your visit.",
    cookiesText3: "Cookies are used to better understand the usage of the website or application by visitors and to optimize the user experience. Cookies can contain various types of information about your visit to a particular website, but they are most often used to store selected preferences, such as language, font size, shopping cart content, privacy settings, and login status. Cookies do not contain personal or private data about you but can collect information about your browsing habits.",
    cookiesText4: "Cookies are not harmful and are time-limited.",
    cookiesText5: "Cookies allow the site that sets them to recognize user devices compared to previous logins and visits to personalize ads for greater relevance to users. This information can be collected across all web browsers and devices (computers, laptops, smartphones, tablets, etc.). In most cases, cookies enhance your browsing experience by preventing you from repeatedly selecting the same option whenever you visit a page.",
    cookiesText6: "During your visit to our platform, we collect and process your personal data through cookies in certain cases. On the other hand, some cookies do not collect your personal data. Cookie settings can be configured through the 'Cookie Settings' option, where non-essential cookies can be adjusted.",
    cookiesText7: "By clicking the 'Do not accept cookies' button, Analytical and Marketing cookies are disabled, while Required cookies remain active because they are necessary for the website to function as expected. Required cookies can be disabled through your web browser.",
    cookiesText8: "Additionally, the 'Help' menu in the toolbar of your computer's web browser provides the following information for users:",
    cookiesList: [
      "How to accept all cookies",
      "How to disable third-party cookies",
      "How to set the browser to notify you when you receive a new cookie",
      "How to disable cookies completely"
    ],
    cookiesText9: "Disabling cookies in this way will prevent new cookies from being set but will not stop previously set cookies on your device from functioning unless you delete all cookies in the browser settings. If you completely disable cookies, the platform may not function as expected. To prevent this, we recommend accepting cookies.",
    cookiesText10: "JOLZT uses the following types of cookies:",
    cookiesTypes: [
      "Required cookies. Required cookies make the website usable by enabling basic functions, such as page navigation and access to secure areas. Without these cookies, the website cannot function properly.",
      "Necessary cookies. Necessary cookies help make a website usable by enabling basic functions such as page navigation, shopping cart use, checkout, email, etc. Without these cookies, the website cannot function properly and optimally.",
      "Statistical cookies. Statistical cookies help us understand how visitors interact with the platform by anonymously collecting information.",
      "Tracking and analytics cookies. These cookies collect information about visitors and their movements and/or behavior through the website/application.",
      "Performance cookies. Performance cookies are used to collect information about how you use our platform, including data on how often you visit our platform, how much time you spend on our platform, etc.",
      "HTTP cookies. In the context of mobile applications, similar mechanisms for data storage are used, called 'HTTP cookies' or simply 'application cookies.'"
    ],
    cookiesText11: "For more information about the use of cookies on our platform, you can find our published Cookie Policy.",

    // Direct Marketing
    marketingTitle: "Direct Marketing",
    marketingText1: "The personal data processed through the Platform may be used for direct marketing only based on the consent provided by the individuals whose data is being processed.",
    marketingText2: "Direct marketing is any type of communication conducted in any manner aimed at sending advertising, marketing, or promotional material directed directly at an identified user.",
    marketingText3: "JOLZT uses direct marketing via email. JOLZT does not conduct direct marketing verbally over the phone or by mail. JOLZT follows a policy of user choice, allowing anyone who wishes to be part of direct marketing to give their consent during profile registration on our Platform.",
    marketingText4: "The purpose of processing personal data for direct marketing is to send notifications about offers, news, additional information, current affairs, events, and promotions we organize, loyalty programs, participation in prize games, as well as sending gifts (vouchers).",
    marketingText5: "JOLZT does not perform 'Profiling' when processing and collecting personal data for direct marketing purposes, meaning we do not use the collected personal data to evaluate certain personal aspects related to you, especially for analyzing or predicting aspects regarding your professional performance, economic situation, health, personal preferences, interests, reliability, behavior, location, or movements.",
    marketingText6: "Consent for the use of personal data for direct marketing purposes is given during registration on the Platform by selecting the option: 'I agree to receive special offers and discounts to my email address,' whereby the given consent applies exclusively to direct marketing purposes without tying such consent to the loss of any other right related to the services provided through the website.",
    marketingText7: "If you give us consent for direct marketing, we will add you to the JOLZT register and regularly send you news, promotions, and updates containing information about JOLZT's services and events, including direct offers for you. For the electronic newsletter, your email address, IP address, and registration date are recorded in our database.",
    marketingText8: "You can withdraw your consent at any time by revoking the consent in the email you received from us (uncheck the selection box).",
    marketingText9: "Following the provisions of the Law on Personal Data Protection, JOLZT can demonstrate at any time that it has obtained valid consent and maintains records of who has agreed to the use of their personal data for direct marketing purposes, at what moment, and in what manner.",
    marketingText10: "Any individual who has given consent for the use of their personal data for direct marketing purposes has the right at any time to modify/restrict or withdraw the given consent for processing their personal data for direct marketing purposes by submitting an appropriate request to JOLZT, which grants the user the right to request access to the processing of their personal data, request correction of their personal data, restrict processing, as well as complete deletion of their personal data from JOLZT's records.",
    marketingText11: "Such withdrawal of consent for processing personal data for direct marketing purposes is not associated with the loss of any other right of the consent giver regarding the services provided through the JOLZT Platform.",
    marketingText12: "Your profile details will be completely deleted from our database as soon as possible, but no later than 30 working days after we receive your request.",
    marketingText13: "JOLZT does not sell, exchange, or share personal data and information about its clients with third parties for direct marketing purposes, except with processors when necessary to provide JOLZT services for direct marketing purposes. JOLZT has agreements with all processors in accordance with the provisions of the Law on Personal Data Protection and in compliance with this direct marketing policy.",
    marketingText14: "For more information on processing personal data for direct marketing purposes, visit our Direct Marketing Policy.",

    // Google Analytics
    analyticsTitle: "Google Analytics",
    analyticsText1: "For the purpose of analyzing and researching how our Platform is used, we inform you that we use the most commonly utilized web analytics service, known as the Google Analytics tool.",
    analyticsText2: "The use and implementation of this tool is due to the need to analyze and evaluate the use of our Platform by users. By implementing this tool, statistical data, information, and reports on the frequency of 'traffic,' i.e., the activity on the website, are provided. This means that Google tracks visits to a website through the IP address of users to determine the approximate location of the user.",
    analyticsText3: "Google Analytics uses cookies, so all information generated by the cookies regarding your use of the website is transmitted to Google.",
    analyticsText4: "At the same time, we assure you that we will not use this tool to track and/or collect personal data of visitors, customers, and users of our Platform.",

    // Payment Security
    paymentTitle: "Data Security for Electronic Payment",
    paymentText1: "When you place an order and make an online payment, your payment card data is processed to confirm the payment. In this way, we can see if the transaction has been completed.",
    paymentText2: "Data related to your payment card or your bank account is sent directly to the bank through an encrypted connection. We do not collect, nor do we have the right to access information related to your card or bank account. Only the bank that owns the payment card has the right to access and control this data.",

    // Social Networks
    socialTitle: "Connecting Through Social Networks (Facebook, Twitter, Instagram, YouTube)",
    socialText1: "By using our website, as users/visitors, you have the opportunity to connect and interact using your profiles on social networks: Facebook, Twitter, Instagram, YouTube.",
    socialText2: "If you are a registered user of our Platform and simultaneously logged in to your profile on one of the above-mentioned social networks, by clicking on the social media buttons, your profile on the JOLZT Platform and the profile on the respective social network will be linked, but only if you use the same email addresses. In case the email addresses do not match, you can link them through the 'My Connections' (Settings) option on your profile.",
    socialText3: "If you are registered and logged in as a user on the JOLZT Platform but are not logged in to the profile you use on a social network, when you click on any of the social media buttons, you will need to enter your login data for the specific social network.",
    socialText4: "If you want to log in through a social network but are not registered as a user on the JOLZT Platform, you will be asked to enter your login data from the social network, and then a profile on the JOLZT Platform will be created from your social network profile. In such a case, you need to set which data you want to share from your profile in the settings of the social network where your profile is registered.",
    socialText5: "By connecting through a social network, you agree to give us permission to access the information from your profile on the respective social network.",

    // User Rights
    rightsTitle: "Your Rights as Data Subjects",
    rightsText1: "The principle of accountability and transparency is a fundamental principle of any personal data protection system.",
    rightsText2: "As a controller, JOLZT has established principles and mechanisms for transparent information and the exercise of the rights of data subjects in accordance with legal regulations.",
    rightsText3: "Therefore, as a data subject, you have rights regarding the protection of your personal data, as detailed in the Law on Personal Data Protection. In this regard, we inform you that you have the right at any time to be informed/request/submit a request for:",
    rightsList: [
      "Whether your personal data is being processed",
      "The purposes and legal basis for processing your personal data",
      "The categories of personal data being processed, as well as the recipients and categories of recipients to whom they are disclosed",
      "The retention period of your personal data and/or the criteria for determining it",
      "The source of personal data that was not provided by you",
      "The logic of automated processing, including the possible consequences of such processing",
      "The possibility to supplement, amend, or correct your personal data if they are incomplete, inaccurate, or outdated",
      "The possibility to restrict the processing of your personal data",
      "The right to have your personal data deleted",
      "The right to withdraw previously given consent for the processing of personal data",
      "The right to object to the manner of processing your personal data",
      "The right to obtain a copy of your personal data"
    ],
    rightsText4: "We remind you that the email address through which you contact us, the content of the Request, and other personal data will not be used for any other purpose except to respond to your requests and needs.",
    rightsText5: "We will provide an appropriate response to the requested information as soon as possible, but no later than the legally stipulated period of one month from the receipt of your request.",

    // Data Protection Officer
    dpoTitle: "Data Protection Officer",
    dpoText1: "Information regarding the processing of your personal data and/or the exercise of your rights for the protection of personal data can be obtained from our Data Protection Officer:",
    dpoName: "Name and surname: ____________",
    dpoPhone: "Contact phone: _____________",
    dpoEmail: "Email address: _______________",
    dpoText2: "If you need further clarification or have questions directly related to the collection and processing of your personal data, you can contact our Data Protection Officer at any time, using the above contact details.",

    // Policy Changes
    changesTitle: "Changes to the Privacy Policy",
    changesText: "Upon changes to our internal acts and corresponding legal rules and regulations, we will regularly update and supplement the Privacy Policy. Your continued use of our Platform after any changes made to the Privacy Policy will constitute your acceptance of the changes made.",

    // Footer
    footerText: "Sincerely, JOLZT DOO Skopje",
  },
  mk: {
    // Header
    privacyPolicyTitle: "Политика за приватност",
    lastUpdated: "Последно ажурирање: 10 април 2025",
    backToHome: "Назад кон почетна",

    // Introduction
    introductionTitle: "ВОВЕД",
    introductionText1: "JOLZT ДОО Скопје, со ЕМБС 7760957 (во овој текст: 'JOLZT', 'ние', 'нас' или 'наш'), во соработка со нашиот тим, со објавувањето на оваа Политика за приватност, гарантира и се посветува на целосно почитување на важечките законски регулативи за заштита на личните податоци и обезбедува највисоко ниво на заштита на вашата приватност и вашите лични податоци при користењето на нашата веб-страница и/или апликација и/или други JOLZT медиуми (колективно наречени 'JOLZT Платформа', 'Платформа JOLZT' или едноставно 'Платформа').",
    introductionText2: "Оваа Политика за приватност ги уредува и дефинира начините на кои ги собираме, користиме, откриваме и заштитуваме вашите лични податоци. Со користењето на JOLZT платформата, вие се согласувате на собирањето и користењето на податоци и информации во согласност со оваа политика и важечките законски регулативи за заштита на личните податоци.",
    introductionText3: "Нашата Политика за приватност е целосно усогласена со важечките законски регулативи за заштита на личните податоци во Република Северна Македонија. Нашата посветеност за нејзино спроведување е инспирирана од довербата што ни ја давате - нашите клиенти, корисници, деловни партнери и сите други лица кои одлучуваат да ги споделат своите лични податоци при користењето на нашата платформа.",
    introductionText4: "Оваа политика ја создадовме со една единствена цел: заедно, вие и ние да постигнеме највисоко ниво на заштита на личните податоци, имајќи го предвид едно од основните човекови права - почитување на правото на приватност и заштита на личните податоци.",
    introductionText5: "Ве молиме внимателно да ја прочитате оваа Политика за приватност пред да започнете со користење на JOLZT платформата. Со користењето на платформата, вие се согласувате со оваа политика, потврдувајќи дека сте ја прочитале, разбрале и прифатиле, и дека се согласувате со начинот на кој ги собираме, користиме, обработуваме, откриваме и заштитуваме личните податоци. Со секој нареден пристап до платформата, ќе сметаме дека се согласувате со оваа политика. Ако не се согласувате, немате право да примате дополнителни информации или да продолжите со користење на JOLZT.",

    // Personal Data Definition
    personalDataTitle: "Што се лични податоци?",
    personalDataText: "Според Законот за заштита на личните податоци, 'лични податоци' се сите информации што се однесуваат на идентификувано или идентификувајќо физичко лице (носеч на податоци). Идентификувајќо физичко лице е лице чиј идентитет може да се утврди директно или индиректно, особено врз основа на идентификатор како што се име и презиме, матичен број, локациски податоци, интернет идентификатор или врз основа на една или повеќе карактеристики специфични за неговиот физички, физиолошки, генетски, ментален, економски, културен или социјален идентитет.",

    // Purposes and Principles
    purposesTitle: "Цели за собирање и обработка на лични податоци",
    purposesText1: "При пристап и користење на JOLZT платформата, ги собираме и обработуваме личните податоци врз основа на следните принципи и гарантираме дека тие:",
    purposesListItem1: "Се обработуваат законито, правично и транспарентно во однос на носечот на податоци ('законитост, правичност и транспарентност').",
    purposesListItem2: "Се собираат за одредени, експлицитни и легитимни цели и не се дополнително обработувани на начин што е некомпатибилен со тие цели ('ограничување на целта').",
    purposesListItem3: "Се соодветни, релевантни и ограничени на она што е неопходно во однос на целите за кои се обработуваат ('минимизирање на податоците').",
    purposesListItem4: "Се точни и, доколку е потребно, ажурирани, при што се преземаат сите разумни чекори за осигурање дека личните податоци кои се неточни или нецелосни ќе се избришат или исправат веднаш, имајќи ги предвид целите за кои се обработуваат ('точност').",
    purposesListItem5: "Се чуваат во форма што овозможува идентификација на носечите на податоци не подолго отколку што е неопходно за целите за кои се обработуваат личните податоци ('ограничување на чување').",
    purposesListItem6: "Се обработуваат на начин што обезбедува соодветна безбедност на личните податоци, вклучувајќи заштита од неовластена или незаконска обработка и од случаен губиток, уништување или оштетување, со користење на соодветни технички или организациски мерки ('интегритет и доверливост').",
    purposesText2: "При пристап и користење на JOLZT платформата, ги собираме и обработуваме личните податоци само кога е неопходно, во обемот потребен за обезбедување на висококвалитетни услуги. Ова го правиме за постигнување на една или повеќе од следните цели:",
    purposesList: [
      "Едноставно, ефикасно и квалитетно пренасочување на сите известувања и информации до вас.",
      "Лесно и ефикасно наоѓање на услугите што ви ги нудиме.",
      "Меѓусебна комуникација и примање на вашите забелешки, коментари, пофалби и критики.",
      "Регистрација на вашата сметка на нашата платформа.",
      "Објавување и потврдување на огласи и овозможување на комуникација со заинтересираните корисници на вашите возила.",
      "Правење резервации за огласи и овозможување на комуникација со огласувачи - сопственици на возила.",
      "Испраќање на системски пораки на платформата и/или на вашата е-пошта за навремени известувања.",
      "Комуникација со нашиот тим за поддршка на клиентите.",
      "Одговарање на вашите прашања или различни барања.",
      "Дигитални маркетинг цели, само по добивање на ваша експлицитна согласност.",
      "Навремено известување за сите нови придобивки, понуди и услуги од JOLZT.",
      "Користење на придобивките што ви ги нудиме како награда за вашата лојалност.",
      "Станување дел од нашиот тим со аплицирање за работа."
    ],
    purposesText3: "Ви гарантираме дека вашите лични податоци нема да се обработуваат за никаква друга цел, освен за целта за која се собрани. Собирањето и обработката на вашите лични податоци за различна цел, освен оние споменати погоре, може да се изврши само врз основа на ваша претходно дадена согласност или за исполнување на законски обврски.",

    // Legal Basis
    legalBasisTitle: "Правна основа и начин на обработка на лични податоци",
    legalBasisText1: "Ги собираме, обработуваме и чуваме вашите лични податоци законито, транспарентно и правично, во согласност со горенаведените цели и принципи. Нивното собирање, обработка и испорака се извршуваат исклучиво од страна на нашиот специјално овластен тим. Без вашето знаење и согласност, вашите лични податоци можат да бидат дадени само на надлежните органи во согласност со законски утврдените постапки.",
    legalBasisText2: "Обработката на лични податоци може да се базира на:",
    legalBasisList: [
      "Вашата претходна согласност за обработка на вашите лични податоци за една или повеќе специфични цели.",
      "Неопходноста за исполнување на нашите законски обврски.",
      "Неопходноста за исполнување на договор или преземање чекори по вашето барање пред склучување на договор.",
      "Неопходноста за заштита на вашите или интересите на трети лица во итни ситуации.",
      "Неопходноста за извршување на задачи во јавна функција или во вршење на овластување.",
      "Неопходноста за остварување на нашите легитимни интереси, интересите на трето лице или интересите на лицето на кое му се откриваат податоците, освен ако вашите права и слободи како носеч на податоци се надредени во однос на таквите интереси."
    ],

    // Data Categories
    dataCategoriesTitle: "Категории на лични податоци што ги собираме",
    dataCategoriesText1: "Категориите на лични податоци што ги собираме за постигнување на горенаведените цели се следниве:",
    dataCategoriesList: [
      "Име и презиме",
      "Адреса (адреса на живеење; град; поштенски број)",
      "Матичен број",
      "Пол",
      "Датум на раѓање",
      "Е-пошта",
      "Контакт телефонски број"
    ],
    dataCategoriesText2: "При посета на нашата Платформа, се создаваат логови со следниве податоци за секој посетител:",
    dataCategoriesList2: [
      "Вашата интернет протокол (IP) адреса",
      "Уредот од кој пристапувате, тип и модел",
      "Вашиот оперативен систем",
      "Тип на прелистувач, додатоци и верзија",
      "Страниците што ги посетувате на нашата веб-страница и времето што го поминувате на секоја страница",
      "URL-то на страницата што ве пренасочи до нашата платформа",
      "Јазикот на прелистувачот што го користите",
      "Државата (утврдена преку IP адреса)"
    ],
    dataCategoriesText3: "Серверските логови автоматски се бришат во рок од 15 дена, освен ако околностите не налагаат подолго чување, на пример, за истражување на вирус или злонамерен напад.",

    // Data Retention
    retentionTitle: "Период на чување на вашите лични податоци",
    retentionText: "Вашите лични податоци ќе ги чуваме онолку долго колку што е неопходно за постигнување на целите согласно оваа Политика за приватност. Ќе ги чуваме личните податоци само колку што е неопходно за исполнување на законски обврски, остварување на легитимни интереси и спроведување на нашите правила и политики. Некои лични податоци може да се чуваат подолго поради постапки пред надлежни државни органи и институции.",

    // Data Sharing
    sharingTitle: "Категории на корисници на кои може да им се откријат вашите лични податоци",
    sharingText1: "Вашите лични податоци се обработуваат само во рамките на нашата компанија. Исклучително, во случаи и под услови предвидени со закон, може да ги откриеме вашите лични податоци на следниве категории на корисници:",
    sharingList: [
      "Адвокати",
      "Нотари",
      "Извршители",
      "Судови",
      "Сметководители",
      "Други правни лица што ги користат податоците за остварување на вашите права и интереси (банки, осигурателни компании, итн.)",
      "Други правни лица и овластени државни органи, установи и институции."
    ],

    // Data Processors
    processorsTitle: "Обработувачи кои може да имаат пристап до вашите лични податоци",
    processorsText1: "Следниве категории на обработувачи може да имаат пристап до вашите лични податоци:",
    processorsList: [
      "Надворешни лица кои обезбедуваат ИТ услуги за одржување на Платформата и целиот воспоставен електронски систем што го користиме",
      "Субјекти кои нудат услужни услуги што се состојат од техничка поддршка"
    ],
    processorsText2: "Ви гарантираме дека соработуваме само со обработувачи кои обезбедуваат доволно гаранции за спроведување на соодветни технички и организациски мерки за обработка во согласност со законските барања и услови, обезбедувајќи ги правата на носечите на податоци. Обработката на вашите лични податоци од страна на трети лица обработувачи се регулира преку договор или друг правен акт, во согласност со законот. Обработувачот не може да ангажира друг обработувач без наша претходна писмена овластеност.",

    // Data Transfer
    transferTitle: "Пренос и откривање на лични податоци",
    transferText1: "Само нашите овластени вработени имаат право на пристап до вашите лични податоци за нивно собирање и обработка. Не дозволуваме неовластен и незаконски пристап до вашите лични податоци, ниту нивно пренесување или откривање на трети лица, освен во случаи предвидени со закон.",
    transferText2: "Некои од личните податоци што ги собираме може да се пренесат надвор од територијата на Република Северна Македонија, каде што ќе продолжиме да ги заштитуваме вашите лични податоци што ги пренесуваме во согласност со оваа политика за приватност и регулативите за заштита на податоците. Секогаш кога ги пренесуваме вашите лични податоци, ние обезбедуваме нивна заштита со доследно придржување и примена на соодветни заштитни мерки во согласност со регулативите за заштита на податоците што го регулираат преносот на лични податоци.",
    transferText3: "Ви гарантираме дека преносот на лични податоци е заштитен со соодветни и квалитетни методи, обезбедувајќи дека тие нема да бидат читливи и ќе бидат заштитени според ризикот и природата на податоците што се пренесуваат. За спречување на неовластен пристап до лични податоци, ќе преземаме сите потребни технички и организациски мерки за заштита на личните податоци.",

    // Consent Management
    consentTitle: "Управување со согласност",
    consentText: "Можете да го промените статусот на вашата согласност (дадете или повлечете согласност) во секое време со испраќање на е-пошта (преку нашата веб-страница и/или апликација). Согласноста за обработка на лични податоци за цели на директниот маркетинг што вие како корисник или Клиент сте ја дале или нејзиното повлекување е секогаш валидно за целите за кои сте одлучиле дека треба да биде валидно.",

    // Third Parties
    thirdPartiesTitle: "Соработка со трети лица",
    thirdPartiesText1: "За време на секоја посета и/или користење на нашата веб-страница и/или апликација, може да наидете на веб-страници на трети лица со кои соработуваме. Затоа, ве известуваме дека доколку наидете на линкови што ве насочуваат кон други веб-страници што припаѓаат на трети лица, ние не сме овластени да го контролираме нивниот содржин, ниту можеме да имаме увид во тоа како тие обезбедуваат заштита на личните податоци. Понатаму, не сме одговорни за дејствата на вработените или други овластени лица што работат на веб-страниците поврзани со и од нашата веб-страница и/или апликација. Секоја од овие веб-страници може да има своја Политика за приватност, што препорачуваме истата да ја запознаете.",
    thirdPartiesText2: "Може да ги откриете вашите лични податоци до Facebook или Google, во согласност со условите за користење и политиките за приватност на трети лица, а тие страни може да ги пренесат личните податоци во структуриран, вообичаен и електронски читлив формат до нов оператор, т.е. JOLZT. Бидејќи овој пренос го вршат трети лица, во согласност со нивните услови за користење и политики за приватност, ќе сметаме дека сте дале согласност на тие страни да ги пренесат личните податоци до нас. Во таков случај, нема да бидеме одговорни за обработката на личните податоци пренесени до нас од трети лица (Facebook или Google). Понатаму, од моментот кога ќе ги примиме податоците од овие страни, ќе се сметаме за администратор и единствено одговорни за понатамошната обработка на личните податоци.",

    // Minors Protection
    minorsTitle: "Политика за заштита на личните податоци за лица под 18 години",
    minorsText: "Според законските одредби, малолетните лица (деца) не смеат да ги даваат личните податоци без дозвола од нивните родители/старатели. Затоа, препорачуваме на сите родители/старатели да ги учат своите деца безбедно и одговорно да се однесуваат со личните податоци. Во никој случај нема намерно да ги собираме (собираме и обработуваме) личните податоци на лица под 18 години, ниту пак ќе ги пренесуваме нивните лични податоци до трето лице без претходна дозвола од нивните родители/старатели.",

    // Cookies
    cookiesTitle: "Колачиња (Cookies)",
    cookiesText1: "Нашата Платформа користи колачиња за подобрување на функционалноста на веб-страницата/апликацијата и обезбедување подобро искуство за вас додека ја користите.",
    cookiesText2: "Колачињата се мали текстови датотеки (парчиња код) што можат да се користат за подобрување на корисничкото искуство при посета на веб-страница. Колачињата работат со нивно поставување на вашиот уред за време на вашата посета на веб-страницата или апликацијата за складирање информации за вашата посета.",
    cookiesText3: "Колачињата се користат за подобро разбирање на користењето на веб-страницата или апликацијата од страна на посетителите и за оптимизирање на корисничкото искуство. Колачињата можат да содржат различни видови информации за вашата посета на одредена веб-страница, но најчесто се користат за складирање на избрани преференци, како што се јазик, големина на фонт, содржина на количка за купување, поставки за приватност и статус на најавување. Колачињата не содржат лични или приватни податоци за вас, но можат да собираат информации за вашите навики при прелистување.",
    cookiesText4: "Колачињата не се штетни и се временски ограничени.",
    cookiesText5: "Колачињата овозможуваат на страницата што ги поставува да ги препознава корисничките уреди во споредба со претходните најави и посети на веб-страницата за персонализирање на реклами за поголема релевантност за корисниците. Овие информации можат да се собираат низ сите веб-прелистувачи и уреди (компјутери, лаптопи, паметни телефони, таблети, итн.). Во повеќето случаи, колачињата го подобруваат вашето искуство при прелистување со спречување на повторно избирање на истата опција секогаш кога ја посетувате страницата.",
    cookiesText6: "За време на вашата посета на нашата платформа, во одредени случаи ги собираме и обработуваме вашите лични податоци преку колачиња. Од друга страна, некои колачиња не ги собираат вашите лични податоци. Поставките за колачиња може да се конфигурираат преку опцијата 'Поставки за колачиња', каде што може да се прилагодат колачињата што не се неопходни.",
    cookiesText7: "Со кликнување на копчето 'Не прифаќај колачиња', се оневозможуваат Аналитичките и Маркетинг колачиња, додека Потребните колачиња остануваат активни бидејќи се неопходни за веб-страницата да функционира како што се очекува. Потребните колачиња можат да се оневозможат преку вашиот веб-прелистувач.",
    cookiesText8: "Дополнително, менито 'Помош' во алатникот на веб-прелистувачот на вашиот компјутер ги обезбедува следниве информации за корисниците:",
    cookiesList: [
      "Како да ги прифатите сите колачиња",
      "Како да ги оневозможите колачињата од трети лица",
      "Како да го поставите прелистувачот да ве известува кога ќе примите ново колаче",
      "Како целосно да ги оневозможите колачињата"
    ],
    cookiesText9: "Оневозможувањето на колачињата на овој начин ќе спречи поставување на нови колачиња, но нема да ги спречи претходно поставените колачиња на вашиот уред да функционираат, освен ако не ги избришете сите колачиња во поставките на прелистувачот. Ако целосно ги оневозможите колачињата, платформата може да не функционира како што се очекува. За да го спречите ова, препорачуваме да ги прифатите колачињата.",
    cookiesText10: "JOLZT ги користи следниве типови на колачиња:",
    cookiesTypes: [
      "Потребни колачиња. Потребните колачиња ја прават веб-страницата употреблива со овозможување на основни функции, како што се навигација по страници и пристап до безбедни области. Без овие колачиња, веб-страницата не може да функционира правилно.",
      "Неопходни колачиња. Неопходните колачиња помагаат да се направи веб-страницата употреблива со овозможување на основни функции како што се навигација по страници, користење на количка за купување, наплата, е-пошта, итн. Без овие колачиња, веб-страницата не може да функционира правилно и оптимално.",
      "Статистички колачиња. Статистичките колачиња ни помагаат да разбереме како посетителите комуницираат со платформата со анонимно собирање на информации.",
      "Колачиња за следење и аналитика. Овие колачиња собираат информации за посетителите и нивните движења и/или однесување преку веб-страницата/апликацијата.",
      "Колачиња за перформанси. Колачињата за перформанси се користат за собирање информации за тоа како ја користите нашата платформа, вклучувајќи податоци за тоа колку често ја посетувате нашата платформа, колку време поминувате на нашата платформа, итн.",
      "HTTP колачиња. Во контекст на мобилните апликации, се користат слични механизми за складирање на податоци, наречени 'HTTP колачиња' или едноставно 'апликациски колачиња.'"
    ],
    cookiesText11: "За повеќе информации за употребата на колачињата на нашата платформа, можете да ја најдете нашата објавена Политика за колачиња.",

    // Direct Marketing
    marketingTitle: "Директен маркетинг",
    marketingText1: "Личните податоци обработувани преку Платформата може да се користат за директен маркетинг само врз основа на согласност дадена од лицата чии податоци се обработуваат.",
    marketingText2: "Директен маркетинг е секој вид на комуникација што се спроведува на кој било начин насочен кон испраќање на рекламен, маркетинг или промотивен материјал насочен директно до идентификуван корисник.",
    marketingText3: "JOLZT користи директен маркетинг преку е-пошта. JOLZT не спроведува директен маркетинг усно преку телефон или по пошта. JOLZT следи политика на избор на корисник, овозможувајќи му на секој кој сака да биде дел од директен маркетинг да даде согласност за време на регистрацијата на профилот на нашата Платформа.",
    marketingText4: "Целта на обработката на личните податоци за директен маркетинг е испраќање на известувања за понуди, новости, дополнителни информации, актуелни работи, настани и промоции што ги организираме, програми за лојалност, учество во натпревари со награди, како и испраќање на подароци (ваучери).",
    marketingText5: "JOLZT не изведува 'Профилирање' при обработката и собирањето на личните податоци за целите на директен маркетинг, што значи дека не ги користиме собраните лични податоци за евалуација на одредени лични аспекти поврзани со вас, особено за анализа или предвидување на аспекти во врска со вашата професионална работа, економска состојба, здравје, лични преференци, интереси, сигурност, однесување, локација или движења.",
    marketingText6: "Согласноста за користење на личните податоци за целите на директен маркетинг се дава за време на регистрацијата на Платформата со избор на опцијата: 'Се согласувам да добивам специјални понуди и попусти на мојата е-пошта', при што дадената согласност важи исклучиво за целите на директен маркетинг без врзување на таквата согласност со губење на кое било друго право поврзано со услугите обезбедени преку веб-страницата.",
    marketingText7: "Ако ни дадете согласност за директен маркетинг, ќе ве додадеме во регистарот на JOLZT и редовно ќе ви испраќаме новости, промоции и ажурирања што содржат информации за услугите и настаните на JOLZT, вклучувајќи директни понуди за вас. За електронскиот билтен, вашата е-пошта, IP адреса и датумот на регистрација се запишуваат во нашата база на податоци.",
    marketingText8: "Можете да ја повлечете вашата согласност во секое време со укинување на согласноста во е-поштата што сте ја примиле од нас (одшкртајте го полето за избор).",
    marketingText9: "Следејќи ги одредбите на Законот за заштита на личните податоци, JOLZT може во секое време да докаже дека добила валидна согласност и води евиденција за тоа кој се согласил за користење на неговите лични податоци за целите на директен маркетинг, во кој момент и на кој начин.",
    marketingText10: "Секое лице што дало согласност за користење на неговите лични податоци за целите на директен маркетинг има право во секое време да ги модифицира/ограничи или да ја повлече дадената согласност за обработка на неговите лични податоци за целите на директен маркетинг со поднесување на соодветно барање до JOLZT, што му дава право на корисникот да побара пристап до обработката на неговите лични податоци, да побара исправка на неговите лични податоци, да го ограничи обработката, како и целосно бришење на неговите лични податоци од евиденцијата на JOLZT.",
    marketingText11: "Таквото повлекување на согласноста за обработка на личните податоци за целите на директен маркетинг не е поврзано со губење на кое било друго право на давателот на согласност во врска со услугите обезбедени преку Платформата на JOLZT.",
    marketingText12: "Податоците за вашиот профил ќе бидат целосно избришани од нашата база на податоци што е можно побрзо, но најдоцна до 30 работни дена откако ќе го примиме вашето барање.",
    marketingText13: "JOLZT не ги продава, разменува или споделува личните податоци и информации за неговите клиенти со трети лица за целите на директен маркетинг, освен со обработувачи кога е неопходно за обезбедување на услугите на JOLZT за целите на директен маркетинг. JOLZT има договори со сите обработувачи во согласност со одредбите на Законот за заштита на личните податоци и во согласност со оваа политика за директен маркетинг.",
    marketingText14: "За повеќе информации за обработката на личните податоци за целите на директен маркетинг, посетете ја нашата Политика за директен маркетинг.",

    // Google Analytics
    analyticsTitle: "Google Analytics",
    analyticsText1: "Со цел анализа и истражување на начинот на кој се користи нашата Платформа, ве известуваме дека го користиме најчесто користениот алатка за веб аналитика, познат како алатката Google Analytics.",
    analyticsText2: "Користењето и имплементацијата на оваа алатка се должи на потребата да се анализира и оцени користењето на нашата Платформа од страна на корисниците. Со имплементација на оваа алатка, се обезбедуваат статистички податоци, информации и извештаи за фреквенцијата на 'сообраќајот', односно активност на веб-страницата. Ова значи дека Google ги следи посетите на веб-страница преку IP адресата на корисниците за да ја утврди приближната локација на корисникот.",
    analyticsText3: "Google Analytics користи колачиња, така што сите информации генерирани од колачињата во врска со вашето користење на веб-страницата се пренесуваат до Google.",
    analyticsText4: "Истовремено, ви гарантираме дека нема да ја користиме оваа алатка за следење и/или собирање на лични податоци на посетителите, клиентите и корисниците на нашата Платформа.",

    // Payment Security
    paymentTitle: "Безбедност на податоците за електронско плаќање",
    paymentText1: "Кога поставувате нарачка и вршите онлајн плаќање, податоците за вашата платна картичка се обработуваат за потврда на плаќањето. На овој начин, можеме да видиме дали трансакцијата е завршена.",
    paymentText2: "Податоците поврзани со вашата платна картичка или вашата банкарска сметка се испраќаат директно до банката преку шифрирана врска. Ние не ги собираме, ниту имаме право на пристап до информациите поврзани со вашата картичка или банкарска сметка. Само банката што е сопственик на платната картичка има право на пристап и контрола на овие податоци.",

    // Social Networks
    socialTitle: "Поврзување преку социјални мрежи (Facebook, Twitter, Instagram, YouTube)",
    socialText1: "Со користење на нашата веб-страница, како корисници/посетители, имате можност да се поврзете и комуницирате користејќи ги вашите профили на социјалните мрежи: Facebook, Twitter, Instagram, YouTube.",
    socialText2: "Ако сте регистриран корисник на нашата Платформа и истовремено сте најавени на вашиот профил на една од горенаведените социјални мрежи, со кликнување на копчињата за социјални медиуми, вашиот профил на Платформата JOLZT и профилот на соодветната социјална мрежа ќе бидат поврзани, но само ако користите исти е-поштенски адреси. Во случај е-поштенските адреси да не се совпаѓаат, можете да ги поврзете преку опцијата 'Мои врски' (Поставки) на вашиот профил.",
    socialText3: "Ако сте регистриран и најавен како корисник на Платформата JOLZT, но не сте најавени на профилот што го користите на социјална мрежа, кога ќе кликнете на кое било од копчињата за социјални медиуми, ќе треба да ги внесете вашите податоци за најава за специфичната социјална мрежа.",
    socialText4: "Ако сакате да се најавите преку социјална мрежа, но не сте регистриран како корисник на Платформата JOLZT, ќе бидете прашани да ги внесете вашите податоци за најава од социјалната мрежа, а потоа ќе се создаде профил на Платформата JOLZT од вашиот профил на социјалната мрежа. Во таков случај, треба да поставите кои податоци сакате да ги споделите од вашиот профил во поставките на социјалната мрежа каде што е регистриран вашиот профил.",
    socialText5: "Со поврзување преку социјална мрежа, вие се согласувате да ни дадете дозвола за пристап до информациите од вашиот профил на соодветната социјална мрежа.",

    // User Rights
    rightsTitle: "Вашите права како носечи на податоци",
    rightsText1: "Принципот на одговорност и транспарентност е основен принцип на секој систем за заштита на личните податоци.",
    rightsText2: "Како администратор, JOLZT воспостави принципи и механизми за транспарентно информирање и остварување на правата на носечите на податоци во согласност со законските регулативи.",
    rightsText3: "Затоа, како носеч на податоци, имате права во врска со заштитата на вашите лични податоци, како што е детално наведено во Законот за заштита на личните податоци. Во таа смисла, ве известуваме дека имате право во секое време да бидете информирани/да побарате/да поднесете барање за:",
    rightsList: [
      "Дали вашите лични податоци се обработуваат",
      "Целите и правната основа за обработка на вашите лични податоци",
      "Категориите на лични податоци што се обработуваат, како и примачите и категориите на примачи на кои им се откриваат",
      "Периодот на чување на вашите лични податоци и/или критериумите за негово утврдување",
      "Изворот на личните податоци што не сте ги дале вие",
      "Логиката на автоматизирана обработка, вклучувајќи ги и можните последици од таквата обработка",
      "Можноста за дополнување, измена или исправка на вашите лични податоци доколку се нецелосни, неточни или застарени",
      "Можноста за ограничување на обработката на вашите лични податоци",
      "Правото на бришење на вашите лични податоци",
      "Правото да ја повлечете претходно дадената согласност за обработка на лични податоци",
      "Правото да се побие начинот на обработка на вашите лични податоци",
      "Правото да добиете копија од вашите лични податоци"
    ],
    rightsText4: "Ве потсетуваме дека е-поштенската адреса преку која ќе не контактирате, содржината на Барањето и другите лични податоци нема да се користат за никаква друга цел освен за одговарање на вашите барања и потреби.",
    rightsText5: "Ќе дадеме соодветен одговор на бараните информации што е можно побрзо, но најдоцна во законски утврдениот рок од еден месец од приемот на вашето барање.",

    // Data Protection Officer
    dpoTitle: "Службеник за заштита на податоците",
    dpoText1: "Информации во врска со обработката на вашите лични податоци и/или остварување на вашите права за заштита на личните податоци може да ги добиете од нашиот Службеник за заштита на податоците:",
    dpoName: "Име и презиме: __________",
    dpoPhone: "Контакт телефон: ___________",
    dpoEmail: "Е-пошта: _____________",
    dpoText2: "Ако ви се потребни дополнителни појаснувања или имате прашања директно поврзани со собирањето и обработката на вашите лични податоци, можете во секое време да го контактирате нашиот Службеник за заштита на податоците, користејќи ги горенаведените контактни податоци.",

    // Policy Changes
    changesTitle: "Промени во Политиката за приватност",
    changesText: "По промените во нашите внатрешни акти и соодветните правни правила и прописи, редовно ќе ја ажурираме и дополниваме Политиката за приватност. Вашето продолжување на користењето на нашата Платформа по било какви промени направени во Политиката за приватност ќе се смета за прифаќање на направените промени.",
    footerText: "Со почит, JOLZT ДОО Скопје"
  },
sq: {
    // Header
    privacyPolicyTitle: "Politika e Privatësisë",
    lastUpdated: "Përditësuar për herë të fundit: 10 Prill 2025",
    backToHome: "Kthehu në Faqen Kryesore",

    // Introduction
    introductionTitle: "HYRJE",
    introductionText1: "JOLZT DOO Shkup, me EMBS 7760957 (në këtë tekst: 'JOLZT', 'ne', 'ju' ose 'jonë'), në bashkëpunim me ekipin tonë, duke publikuar këtë Politikë të Privatësisë, siguron dhe përkushtohet të respektojë plotësisht rregulloret ligjore të zbatueshme për mbrojtjen e të dhënave personale dhe të sigurojë nivelin më të lartë të mbrojtjes së privatësisë tuaj dhe të dhënave tuaja personale kur përdorni faqen tonë të internetit dhe/ose aplikacionin dhe/ose media të tjera JOLZT (në tekstin vijues: 'Platforma JOLZT', 'Platforma JOLZT' ose thjesht 'Platforma').",
    introductionText2: "Kjo Politikë e Privatësisë rregullon dhe përcakton mënyrën se si ne mbledhim, përdorim, zbulojmë dhe mbrojmë të dhënat tuaja personale. Duke përdorur platformën JOLZT, ju pranoni mbledhjen dhe përdorimin e të dhënave dhe informacionit në përputhje me këtë politikë dhe rregulloret ligjore të zbatueshme për mbrojtjen e të dhënave personale.",
    introductionText3: "Politika jonë e Privatësisë është plotësisht në përputhje me rregulloret ligjore të zbatueshme për mbrojtjen e të dhënave personale në Republikën e Maqedonisë së Veriut. Përkushtimi ynë për zbatimin e saj është i frymëzuar nga besimi që ju na jepni - klientët tanë, përdoruesit, partnerët e biznesit dhe të gjithë personat e tjerë që vendosin të ndajnë të dhënat e tyre personale kur përdorin platformën tonë.",
    introductionText4: "Ne krijuam këtë politikë me një qëllim të vetëm: që së bashku, ju dhe ne të arrijmë nivelin më të lartë të mbrojtjes së të dhënave personale, duke pasur parasysh një nga të drejtat themelore të njeriut - respektimi i të drejtës për privatësi dhe mbrojtjen e të dhënave personale.",
    introductionText5: "Ju lutemi lexoni me kujdes këtë Politikë të Privatësisë përpara se të filloni të përdorni platformën JOLZT. Duke përdorur platformën, ju pranoni këtë politikë, duke konfirmuar se e keni lexuar, kuptuar dhe pranuar atë, dhe që jeni dakord me mënyrën se si ne mbledhim, përdorim, përpunojmë, zbulojmë dhe mbrojmë të dhënat personale. Me çdo akses të mëpasshëm në platformë, ne do të konsiderojmë se ju jeni dakord me këtë politikë. Nëse nuk jeni dakord, ju nuk keni të drejtë të merrni informacion shtesë ose të vazhdoni të përdorni JOLZT.",

    // Personal Data Definition
    personalDataTitle: "Çfarë janë të dhënat personale?",
    personalDataText: "Sipas Ligjit për Mbrojtjen e të Dhënave Personale, 'të dhëna personale' janë çdo informacion që i përket një personi natyror të identifikuar ose të identifikueshëm (subjekt i të dhënave). Një person natyror i identifikueshëm është ai identiteti i të cilit mund të përcaktohet drejtpërdrejt ose indirekt, veçanërisht në bazë të një identifikuesi si emri dhe mbiemri, numri i identifikimit të qytetarit, të dhënat e vendndodhjes, identifikuesi i internetit ose në bazë të një ose më shumë karakteristikave specifike për identitetin e tij fizik, fiziologjik, gjenetik, mendor, ekonomik, kulturor ose social.",

    // Purposes and Principles
    purposesTitle: "Qëllimet për Mbledhjen dhe Përpunimin e të Dhënave Personale",
    purposesText1: "Kur hyni dhe përdorni platformën JOLZT, ne mbledhim dhe përpunojmë të dhëna personale bazuar në parimet e mëposhtme dhe garantojmë që ato:",
    purposesListItem1: "Përpunohen në mënyrë të ligjshme, të drejtë dhe transparente në lidhje me subjektin e të dhënave ('ligjshmëria, drejtësia dhe transparenca').",
    purposesListItem2: "Mblidhen për qëllime të caktuara, të qarta dhe legjitime dhe nuk përpunohen më tej në një mënyrë që është e papajtueshme me ato qëllime ('kufizimi i qëllimit').",
    purposesListItem3: "Janë të përshtatshme, të rëndësishme dhe të kufizuara në atë që është e nevojshme në lidhje me qëllimet për të cilat ato përpunohen ('minimizimi i të dhënave').",
    purposesListItem4: "Janë të sakta dhe, kur është e nevojshme, të përditësuara, duke marrë çdo hap të arsyeshëm për të siguruar që të dhënat personale që janë të pasakta ose jo të plota të fshihen ose të korrigjohen menjëherë, duke marrë parasysh qëllimet për të cilat ato përpunohen ('saktësia').",
    purposesListItem5: "Ruhen në një formë që lejon identifikimin e subjekteve të të dhënave për jo më shumë kohë sesa është e nevojshme për qëllimet për të cilat të dhënat personale përpunohen ('kufizimi i ruajtjes').",
    purposesListItem6: "Përpunohen në një mënyrë që siguron sigurinë e përshtatshme të të dhënave personale, duke përfshirë mbrojtjen kundër përpunimit të paautorizuar ose të paligjshëm dhe kundër humbjes, shkatërrimit ose dëmtimit të rastësishëm, duke përdorur masa të përshtatshme teknike ose organizative ('integriteti dhe konfidencialiteti').",
    purposesText2: "Kur hyni dhe përdorni platformën JOLZT, ne mbledhim dhe përpunojmë të dhëna personale vetëm kur është e nevojshme, në masën e nevojshme për të ofruar shërbime me cilësi të lartë. Ne e bëjmë këtë për të arritur një ose më shumë nga qëllimet e mëposhtme:",
    purposesList: [
      "Përcjellja e thjeshtë, efikase dhe me cilësi e të gjitha njoftimeve dhe informacioneve për ju.",
      "Gjetja e lehtë dhe efikase e shërbimeve që ju ofrojmë.",
      "Komunikimi i ndërsjellë dhe marrja e vërejtjeve, komenteve, lavdërimeve dhe kritikave tuaja.",
      "Regjistrimi i llogarisë tuaj në platformën tonë.",
      "Postimi dhe konfirmimi i shpalljeve dhe mundësimi i komunikimit me përdoruesit e interesuar të automjeteve tuaja.",
      "Bërja e rezervimeve për shpallje dhe mundësimi i komunikimit me shpallësit - pronarët e automjeteve.",
      "Dërgimi i mesazheve të sistemit në platformë dhe/ose në adresën tuaj të email-it për njoftime të përkohshme.",
      "Komunikimi me ekipin tonë të mbështetjes për klientët.",
      "Përgjigjja e pyetjeve ose kërkesave të ndryshme tuaja.",
      "Qëllime të marketingut dixhital, vetëm pas marrjes së pëlqimit tuaj të qartë.",
      "Njoftimi i përkohshëm i të gjitha përfitimeve, ofertave dhe shërbimeve të reja nga JOLZT.",
      "Përdorimi i përfitimeve që ne ofrojmë si shpërblim për besnikërinë tuaj.",
      "Bërja pjesë e ekipit tonë duke aplikuar për një punë."
    ],
    purposesText3: "Ju sigurojmë se të dhënat tuaja personale nuk do të përpunohen për ndonjë qëllim tjetër, përveç qëllimit për të cilin ato janë mbledhur. Mbledhja dhe përpunimi i të dhënave tuaja personale për një qëllim tjetër, përveç atyre të përmendura më sipër, mund të kryhet vetëm bazuar në pëlqimin tuaj të dhënë më parë ose për të përmbushur detyrimet ligjore.",

    // Legal Basis
    legalBasisTitle: "Baza Ligjore dhe Mënyra e Përpunimit të të Dhënave Personale",
    legalBasisText1: "Ne mbledhim, përpunojmë dhe ruajmë të dhënat tuaja personale në mënyrë të ligjshme, transparente dhe të drejtë, në përputhje me qëllimet dhe parimet e përmendura më sipër. Mbledhja, përpunimi dhe dorëzimi i tyre kryhen ekskluzivisht nga ekipi ynë i autorizuar posaçërisht. Pa dijeninë dhe pëlqimin tuaj, të dhënat tuaja personale mund të sigurohen vetëm për autoritetet kompetente në përputhje me procedurat e vendosura ligjërisht.",
    legalBasisText2: "Përpunimi i të dhënave personale mund të bazohet në:",
    legalBasisList: [
      "Pëlqimin tuaj të mëparshëm për përpunimin e të dhënave tuaja personale për një ose më shumë qëllime specifike.",
      "Nevojën për të përmbushur detyrimet tona ligjore.",
      "Nevojën për të përmbushur një kontratë ose për të marrë masa në kërkesën tuaj përpara hyrjes në një kontratë.",
      "Nevojën për të mbrojtur interesat tuaja ose të palëve të treta në situata emergjente.",
      "Nevojën për të kryer detyra në interes të përbashkët ose në ushtrimin e autoritetit zyrtar.",
      "Nevojën për të ndjekur interesat tona legjitime, interesat e një pale të tretë ose interesat e personit të cilit i janë zbuluar të dhënat, përveç rasteve kur të drejtat dhe liritë tuaja si subjekt të të dhënave i tejkalojnë ato interesa."
    ],

    // Data Categories
    dataCategoriesTitle: "Kategoritë e të Dhënave Personale që Mbledhim",
    dataCategoriesText1: "Kategoritë e të dhënave personale që ne mbledhim për të arritur qëllimet e përmendura më sipër janë si më poshtë:",
    dataCategoriesList: [
      "Emri dhe mbiemri",
      "Adresa (adresa e banimit; qyteti; kodi postar)",
      "Numri i identifikimit të qytetarit",
      "Gjinia",
      "Data e lindjes",
      "Adresa e email-it",
      "Numri i telefonit për kontakt"
    ],
    dataCategoriesText2: "Kur vizitoni Platformën tonë, krijohen regjistra me të dhënat e mëposhtme për çdo vizitor:",
    dataCategoriesList2: [
      "Adresa juaj e Protokollit të Internetit (IP)",
      "Pajisja nga e cila hyni, lloji dhe modeli",
      "Sistemi juaj operativ",
      "Lloji i shfletuesit, shtesat dhe versioni",
      "Faqet që vizitoni në faqen tonë të internetit dhe kohën që kaloni në secilën faqe",
      "URL-ja e faqes që ju dërgoi te platforma jonë",
      "Gjuha e shfletuesit që përdorni",
      "Vendi (i përcaktuar nga adresa IP)"
    ],
    dataCategoriesText3: "Regjistrat e serverit fshihen automatikisht brenda 15 ditësh, përveç rasteve kur rrethanat kërkojnë ruajtje më të gjatë, për shembull, për të hetuar një virus ose sulm të dëmshëm.",

    // Data Retention
    retentionTitle: "Periudha e Ruajtjes së të Dhënave tuaja Personale",
    retentionText: "Ne do t'i ruajmë të dhënat tuaja personale për aq kohë sa është e nevojshme për të arritur qëllimet sipas kësaj Politike të Privatësisë. Ne do të ruajmë të dhënat personale vetëm aq sa është e nevojshme për të përmbushur detyrimet ligjore, për të ndjekur interesat legjitime dhe për të zbatuar rregullat dhe politikat tona. Disa të dhëna personale mund të ruhen më gjatë për shkak të procedurave para autoriteteve dhe institucioneve kompetente të shtetit.",

    // Data Sharing
    sharingTitle: "Kategoritë e Përdoruesve të cilëve mund t'u zbulohen të Dhënat tuaja Personale",
    sharingText1: "Të dhënat tuaja personale përpunohen vetëm brenda kompanisë sonë. Përjashtimisht, në raste dhe në kushte të parashikuara me ligj, ne mund t'u zbulojmë të dhënat tuaja personale kategorive të mëposhtme të përdoruesve:",
    sharingList: [
      "Avokatët",
      "Noterët",
      "Ekzekutorët",
      "Gjykatat",
      "Kontabilistët",
      "Persona të tjerë juridikë që përdorin të dhënat për të ndjekur të drejtat dhe interesat tuaja (banka, shoqëri sigurimesh, etj.)",
      "Persona të tjerë juridikë dhe organe, zyra dhe institucione të autorizuara të shtetit."
    ],

    // Data Processors
    processorsTitle: "Përpunuesit të cilët mund të kenë qasje në të Dhënat tuaja Personale",
    processorsText1: "Kategoritë e mëposhtme të përpunuesve mund të kenë qasje në të dhënat tuaja personale:",
    processorsList: [
      "Persona të jashtëm që ofrojnë shërbime IT për mirëmbajtjen e Platformës dhe të gjithë sistemit të vendosur elektronik që ne përdorim",
      "Ente që ofrojnë shërbime shërbimi që përbëhen nga mbështetje teknike"
    ],
    processorsText2: "Ju sigurojmë se ne bashkëpunojmë vetëm me përpunues që ofrojnë garanci të mjaftueshme për zbatimin e masave të përshtatshme teknike dhe organizative për përpunimin në përputhje me kërkesat dhe kushtet ligjore, duke siguruar të drejtat e subjekteve të të dhënave. Përpunimi i të dhënave tuaja personale nga përpunuesit e palëve të treta rregullohet përmes një kontrate ose akti tjetër ligjor, në përputhje me ligjin. Përpunuesi nuk mund të angazhojë një përpunues tjetër pa autorizimin tonë paraprak me shkrim.",

    // Data Transfer
    transferTitle: "Transferimi dhe Zbulimi i të Dhënave Personale",
    transferText1: "Vetëm punonjësit tanë të autorizuar kanë të drejtë të kenë qasje në të dhënat tuaja personale për mbledhjen dhe përpunimin e tyre. Ne nuk lejojmë qasje të paautorizuar dhe të paligjshme në të dhënat tuaja personale, as transferimin ose zbulimin e tyre te palë të treta, përveç në rastet e parashikuara me ligj.",
    transferText2: "Disa nga të dhënat personale që ne mbledhim mund të transferohen jashtë territorit të Republikës së Maqedonisë së Veriut, ku ne do të vazhdojmë të mbrojmë të dhënat tuaja personale që transferojmë në përputhje me këtë politikë të privatësisë dhe rregulloret e mbrojtjes së të dhënave. Kurdoherë që transferojmë të dhënat tuaja personale, ne sigurojmë mbrojtjen e tyre duke iu përmbaqur vazhdimisht dhe duke zbatuar masat e përshtatshme mbrojtëse në përputhje me rregulloret e mbrojtjes së të dhënave që rregullojnë transferimin e të dhënave personale.",
    transferText3: "Ju sigurojmë se transferimi i të dhënave personale është i mbrojtur me metoda të përshtatshme dhe me cilësi, duke siguruar që ato nuk do të jenë të lexueshme dhe do të mbrohen sipas rrezikut dhe natyrës së të dhënave që transferohen. Për të parandaluar qasjen e paautorizuar në të dhëna personale, ne do të marrim të gjitha masat e nevojshme teknike dhe organizative për të mbrojtur të dhënat personale.",

    // Consent Management
    consentTitle: "Menaxhimi i Pëlqimit",
    consentText: "Ju mund të ndryshoni statusin e pëlqimit tuaj (të jepni ose të tërhiqni pëlqimin) në çdo kohë duke dërguar një email (përmes faqes sonë të internetit dhe/ose aplikacionit). Pëlqimi për përpunimin e të dhënave personale për qëllime të marketingut të drejtpërdrejtë që ju si përdorues ose Klient keni dhënë ose tërheqja e tij është gjithmonë e vlefshme për qëllimet për të cilat ju keni vendosur që të jetë e vlefshme.",

    // Third Parties
    thirdPartiesTitle: "Bashkëpunimi me Palë të Treta",
    thirdPartiesText1: "Gjatë çdo vizite dhe/ose përdorimi të faqes sonë të internetit dhe/ose aplikacionit, ju mund të hasni në faqe të internetit të palëve të treta me të cilat ne bashkëpunojmë. Prandaj, ju informojmë se nëse hasni në lidhje që ju drejtojnë në faqe të tjera të internetit që u përkasin palëve të treta, ne nuk jemi të autorizuar të kontrollojmë përmbajtjen e tyre, as nuk mund të kemi njohuri se si ato ofrojnë mbrojtjen e të dhënave personale. Për më tepër, ne nuk jemi përgjegjës për veprimet e punonjësve ose personave të tjerë të autorizuar që punojnë në faqet e internetit të lidhura me dhe nga faqja jonë e internetit dhe/ose aplikacioni. Secila prej këtyre faqeve të internetit mund të ketë Politikën e saj të Privatësisë, të cilën ne gjithashtu ju rekomandojmë ta njiheni.",
    thirdPartiesText2: "Ju mund t'i zbuloni të dhënat tuaja personale Facebook ose Google, në përputhje me kushtet e përdorimit dhe politikën e privatësisë së palëve të treta, dhe ato palë mund të transferojnë të dhëna personale në një format të strukturuar, të përdorur zakonisht dhe të lexueshëm elektronikisht tek një operator i ri, d.m.th. JOLZT. Meqenëse ky transferim bëhet nga palët e treta, në përputhje me kushtet e tyre të përdorimit dhe politikën e privatësisë, ne do të konsiderojmë se ju keni dhënë pëlqimin tuaj atyre palë për të transferuar të dhëna personale tek ne. Në një rast të tillë, ne nuk do të jemi përgjegjës për përpunimin e të dhënave personale të transferuara tek ne nga palët e treta (Facebook ose Google). Për më tepër, nga momenti kur ne marrim të dhëna nga këto palë, ne do të konsiderohemi si përgjegjës dhe vetëm përgjegjës për përpunimin e mëtejshëm të të dhënave personale.",

    // Minors Protection
    minorsTitle: "Politika e Mbrojtjes së të Dhënave Personale për Personat nën 18 Vjeç",
    minorsText: "Sipas dispozitave ligjore, të miturit (fëmijët) nuk lejohen të japin të dhëna personale pa leje nga prindërit/kuautorët e tyre. Prandaj, ne rekomandojmë fuqimisht që të gjithë prindërit/kuautorët t'u mësojnë fëmijëve të tyre të trajtojnë të dhënat personale në mënyrë të sigurt dhe të përgjegjshme. Në asnjë rrethanë, ne nuk do të mbledhim me qëllim (do të mbledhim dhe përpunojmë) të dhëna personale të personave nën 18 vjeç, as nuk do t'ua dërgojmë të dhënat e tyre personale një pale të tretë pa lejen paraprake të prindërve/kuautorëve të tyre.",

    // Cookies
    cookiesTitle: "Cookies",
    cookiesText1: "Platforma jonë përdor cookies për të përmirësuar funksionalitetin e faqes së internetit/aplikacionit dhe për të ofruar një përvojë më të mirë për ju ndërsa e përdorni atë.",
    cookiesText2: "Cookies janë fajlla të vegjël teksti (pjesë kodi) që mund të përdoren për të përmirësuar përvojën e përdoruesit kur viziton një faqe interneti. Cookies punojnë duke i vendosur në pajisjen tuaj gjatë vizitës suaj në faqen e internetit ose aplikacionin për të ruajtur informacione rreth vizitës suaj.",
    cookiesText3: "Cookies përdoren për të kuptuar më mirë përdorimin e faqes së internetit ose aplikacionit nga vizitorët dhe për të optimizuar përvojën e përdoruesit. Cookies mund të përmbajnë lloje të ndryshme informacioni rreth vizitës suaj në një faqe të caktuar interneti, por ato përdoren më së shpeshti për të ruajtur preferencat e zgjedhura, si gjuha, madhësia e shkronjave, përmbajtja e karrocës së blerjeve, cilësimet e privatësisë dhe statusi i hyrjes. Cookies nuk përmbajnë të dhëna personale ose private rreth jush, por mund të mbledhin informacione rreth zakoneve tuaja të shfletimit.",
    cookiesText4: "Cookies nuk janë të dëmshme dhe janë të kufizuara në kohë.",
    cookiesText5: "Cookies lejojnë faqen që i vendos ato të njohë pajisjet e përdoruesit në krahasim me hyrjet dhe vizitat e mëparshme në faqen e internetit për të personalizuar reklamat për relevancë më të madhe për përdoruesit. Ky informacion mund të mblidhet në të gjithë shfletuesit dhe pajisjet (kompjutera, laptopë, smartphone, tableta, etj.). Në shumicën e rasteve, cookies përmirësojnë përvojën tuaj të shfletimit duke ju shpëtuar nga përzgjedhja e përsëritur e së njëjtës opsion sa herë që vizitoni një faqe.",
    cookiesText6: "Gjatë vizitës suaj në platformën tonë, ne mbledhim dhe përpunojmë të dhënat tuaja personale përmes cookies në raste të caktuara. Nga ana tjetër, disa cookies nuk mbledhin të dhënat tuaja personale. Cilësimet e cookies mund të konfigurohen përmes opsionit 'Cilësimet e Cookies', ku cookies jo thelbësore mund të rregullohen.",
    cookiesText7: "Duke klikuar butonin 'Mos prano cookies', Cookies Analitike dhe Marketinguese çaktivizohen, ndërsa Cookies të Kërkuara mbeten aktive sepse ato janë të nevojshme që faqja e internetit të funksionojë siç pritet. Cookies të Kërkuara mund të çaktivizohen përmes shfletuesit tuaj të internetit.",
    cookiesText8: "Për më tepër, menyja 'Ndihmë' në shiritin e veglave të shfletuesit tuaj të internetit të kompjuterit ofron informacionin e mëposhtëm për përdoruesit:",
    cookiesList: [
      "Si të pranoni të gjitha cookies",
      "Si të çaktivizoni cookies të palëve të treta",
      "Si të vendosni shfletuesin të njoftojë kur merrni një cookie të re",
      "Si të çaktivizoni plotësisht cookies"
    ],
    cookiesText9: "Çaktivizimi i cookies në këtë mënyrë do të parandalojë vendosjen e cookies të reja, por nuk do të ndalojë funksionimin e cookies të vendosura më parë në pajisjen tuaj, përveç nëse fshini të gjitha cookies në cilësimet e shfletuesit. Nëse çaktivizoni plotësisht cookies, platforma mund të mos funksionojë siç pritet. Për të parandaluar këtë, ne rekomandojmë pranimin e cookies.",
    cookiesText10: "JOLZT përdor llojet e mëposhtme të cookies:",
    cookiesTypes: [
      "Cookies të kërkuara. Cookies të kërkuara e bëjnë faqen e internetit të përdorshme duke aktivizuar funksionet bazë, si lëvizja nëpër faqe dhe qasja në zona të sigurta. Pa këto cookies, faqja e internetit nuk mund të funksionojë si duhet.",
      "Cookies të nevojshme. Cookies të nevojshme ndihmojnë në bërjen e një faqeje interneti të përdorshme duke aktivizuar funksione bazë si lëvizja nëpër faqe, përdorimi i karrocës së blerjeve, arkëtimi, email, etj. Pa këto cookies, faqja e internetit nuk mund të funksionojë si duhet dhe në mënyrë optimale.",
      "Cookies statistikore. Cookies statistikore na ndihmojnë të kuptojmë se si vizitorët ndërveprojnë me platformën duke mbledhur informacion në mënyrë anonime.",
      "Cookies gjurmimi dhe analizimi. Këto cookies mbledhin informacione rreth vizitorëve dhe lëvizjeve dhe/ose sjelljes së tyre përmes faqes së internetit/aplikacionit.",
      "Cookies të performancës. Cookies të performancës përdoren për të mbledhur informacione se si ju përdorni platformën tonë, duke përfshirë të dhëna se sa shpesh vizitoni platformën tonë, sa kohë kaloni në platformën tonë, etj.",
      "HTTP cookies. Në kontekstin e aplikacioneve mobile, përdoren mekanizma të ngjashëm për ruajtjen e të dhënave, të quajtur 'HTTP cookies' ose thjesht 'cookies të aplikacionit'."
    ],
    cookiesText11: "Për më shumë informacione rreth përdorimit të cookies në platformën tonë, mund të gjeni Politikën tonë të Cookies të publikuar.",

    // Direct Marketing
    marketingTitle: "Marketing i Drejtpërdrejtë",
    marketingText1: "Të dhënat personale të përpunuara përmes Platformës mund të përdoren për marketing të drejtpërdrejtë vetëm në bazë të pëlqimit të dhënë nga personat, të dhënat e të cilëve po përpunohen.",
    marketingText2: "Marketing i drejtpërdrejtë është çdo lloj komunikimi i kryer në çdo mënyrë që synon dërgimin e materialit reklamues, të marketingut ose promocional të drejtuar drejtpërdrejt tek një përdorues i identifikuar.",
    marketingText3: "JOLZT përdor marketing të drejtpërdrejtë përmes email-it. JOLZT nuk kryen marketing të drejtpërdrejtë verbalisht me anë të telefonit ose me postë. JOLZT ndjek një politikë të zgjedhjes së përdoruesit, duke lejuar çdokënd që dëshiron të jetë pjesë e marketingut të drejtpërdrejtë të japë pëlqimin e tij gjatë regjistrimit të profilit në Platformën tonë.",
    marketingText4: "Qëllimi i përpunimit të të dhënave personale për marketing të drejtpërdrejtë është dërgimi i njoftimeve për oferta, lajme, informacione shtesë, aktualitete, ngjarje dhe promovime që organizojmë, programe besnikërie, pjesëmarrje në lojëra çmimesh, si dhe dërgimi i dhuratash (vouchera).",
    marketingText5: "JOLZT nuk kryen 'Profiling' kur përpunon dhe mbledh të dhëna personale për qëllime të marketingut të drejtpërdrejtë, që do të thotë se ne nuk përdorim të dhënat personale të mbledhura për të vlerësuar aspekte të caktuara personale që lidhen me ju, veçanërisht për analizimin ose parashikimin e aspekteve në lidhje me performancën tuaj profesionale, situatën ekonomike, shëndetin, preferencat personale, interesat, besueshmërinë, sjelljen, vendndodhjen ose lëvizjet.",
    marketingText6: "Pëlqimi për përdorimin e të dhënave personale për qëllime të marketingut të drejtpërdrejtë jepet gjatë regjistrimit në Platformë duke zgjedhur opsionin: 'Unë pranoj të marr oferta speciale dhe zbritje në adresën time të email-it', ku pëlqimi i dhënë zbatohet ekskluzivisht për qëllime të marketingut të drejtpërdrejtë pa e lidhur atë pëlqim me humbjen e ndonjë të drejte tjetër që lidhet me shërbimet e ofruara përmes faqes së internetit.",
    marketingText7: "Nëse na jepni pëlqimin për marketing të drejtpërdrejtë, ne do t'ju shtojmë në regjistrin e JOLZT dhe do t'ju dërgojmë rregullisht lajme, promovime dhe përditësime që përmbajnë informacione rreth shërbimeve dhe ngjarjeve të JOLZT, duke përfshirë oferta të drejtpërdrejta për ju. Për buletinin elektronik, adresa juaj e email-it, adresa IP dhe data e regjistrimit regjistrohen në bazën tonë të të dhënave.",
    marketingText8: "Ju mund të tërhiqni pëlqimin tuaj në çdo kohë duke e anuluar pëlqimin në email-in që keni marrë nga ne (hiqni zgjedhjen e kutisë së përzgjedhjes).",
    marketingText9: "Në përputhje me dispozitat e Ligjit për Mbrojtjen e të Dhënave Personale, JOLZT mund të dëshmojë në çdo kohë se ka marrë pëlqim të vlefshëm dhe mban regjistra se kush ka pranuar përdorimin e të dhënave të tyre personale për qëllime të marketingut të drejtpërdrejtë, në çfarë momenti dhe në çfarë mënyre.",
    marketingText10: "Çdo person që ka dhënë pëlqimin për përdorimin e të dhënave të tij personale për qëllime të marketingut të drejtpërdrejtë ka të drejtë në çdo kohë të modifikojë/kufizojë ose të tërheqë pëlqimin e dhënë për përpunimin e të dhënave të tij personale për qëllime të marketingut të drejtpërdrejtë duke paraqitur një kërkesë të përshtatshme tek JOLZT, e cila i jep përdoruesit të drejtë të kërkojë qasje në përpunimin e të dhënave të tij personale, të kërkojë korrigjimin e të dhënave të tij personale, të kufizojë përpunimin, si dhe fshirjen e plotë të të dhënave të tij personale nga regjistrat e JOLZT.",
    marketingText11: "Një tërheqje e tillë e pëlqimit për përpunimin e të dhënave personale për qëllime të marketingut të drejtpërdrejtë nuk shoqërohet me humbjen e ndonjë të drejte tjetër të dhënësit të pëlqimit në lidhje me shërbimet e ofruara përmes Platformës JOLZT.",
    marketingText12: "Detajet e profilit tuaj do të fshihen plotësisht nga baza jonë e të dhënave sa më shpejt të jetë e mundur, por jo më vonë se 30 ditë pune pasi të kemi marrë kërkesën tuaj.",
    marketingText13: "JOLZT nuk shet, nuk shkëmben dhe nuk ndan të dhëna dhe informacione personale rreth klientëve të saj me palë të treta për qëllime të marketingut të drejtpërdrejtë, përveçse me përpunuesit kur është e nevojshme për të ofruar shërbimet e JOLZT për qëllime të marketingut të drejtpërdrejtë. JOLZT ka marrëveshje me të gjithë përpunuesit në përputhje me dispozitat e Ligjit për Mbrojtjen e të Dhënave Personale dhe në përputhje me këtë politikë të marketingut të drejtpërdrejtë.",
    marketingText14: "Për më shumë informacione rreth përpunimit të të dhënave personale për qëllime të marketingut të drejtpërdrejtë, vizitoni Politikën tonë të Marketingut të Drejtpërdrejtë.",

    // Google Analytics
    analyticsTitle: "Google Analytics",
    analyticsText1: "Për qëllimin e analizimit dhe hulumtimit se si përdoret Platforma jonë, ju informojmë se ne përdorim shërbimin më të përdorur të analizës së uebit, i njohur si mjeti Google Analytics.",
    analyticsText2: "Përdorimi dhe implementimi i këtij mjeti është për shkak të nevojës për të analizuar dhe vlerësuar përdorimin e Platformës sonë nga përdoruesit. Duke implementuar këtë mjet, ofrohen të dhëna statistikore, informacione dhe raporte për shpeshtësinë e 'trafikut', d.m.th. aktivitetit në faqen e internetit. Kjo do të thotë se Google gjurmon vizitat në një faqe interneti përmes adresës IP të përdoruesve për të përcaktuar vendndodhjen e përafërt të përdoruesit.",
    analyticsText3: "Google Analytics përdor cookies, kështu që të gjitha informacionet e krijuara nga cookies në lidhje me përdorimin tuaj të faqes së internetit transmetohen në Google.",
    analyticsText4: "Në të njëjtën kohë, ju sigurojmë se ne nuk do ta përdorim këtë mjet për të gjurmuar dhe/ose mbledhur të dhëna personale të vizitorëve, klientëve dhe përdoruesve të Platformës sonë.",

    // Payment Security
    paymentTitle: "Siguria e të Dhënave për Pagesën Elektronike",
    paymentText1: "Kur vendosni një porosi dhe bëni një pagesë në internet, të dhënat e kartës suaj të pagesës përpunohen për të konfirmuar pagesën. Në këtë mënyrë, ne mund të shohim nëse transaksioni është përfunduar.",
    paymentText2: "Të dhënat që lidhen me kartën tuaj të pagesës ose llogarinë tuaj bankare dërgohen direkt në bankë përmes një lidhjeje të koduar. Ne nuk mbledhim, as nuk kemi të drejtë të hyjmë në informacione që lidhen me kartën ose llogarinë tuaj bankare. Vetëm banka e cila zotëron kartën e pagesës ka të drejtë të hyjë dhe të kontrollojë këto të dhëna.",

    // Social Networks
    socialTitle: "Lidhja përmes Rrjetave Sociale (Facebook, Twitter, Instagram, YouTube)",
    socialText1: "Duke përdorur faqen tonë të internetit, si përdorues/vizitor, ju keni mundësinë të lidheni dhe të ndërveproni duke përdorur profilet tuaja në rrjetet sociale: Facebook, Twitter, Instagram, YouTube.",
    socialText2: "Nëse jeni një përdorues i regjistruar i Platformës sonë dhe njëkohësisht jeni regjistruar në profilin tuaj në një nga rrjetet sociale të përmendura më sipër, duke klikuar në butonat e mediave sociale, profili juaj në Platformën JOLZT dhe profili në rrjetin social përkatës do të lidhen, por vetëm nëse përdorni të njëjtat adresa email. Në rast se adresat e email-it nuk përputhen, ju mund t'i lidhni ato përmes opsionit 'Lidhjet e Mia' (Cilësimet) në profilin tuaj.",
    socialText3: "Nëse jeni të regjistruar dhe të regjistruar si përdorues në Platformën JOLZT por nuk jeni të regjistruar në profilin që përdorni në një rrjet social, kur klikoni në ndonjë nga butonat e mediave sociale, do t'ju kërkohet të vendosni të dhënat e hyrjes për rrjetin social të caktuar.",
    socialText4: "Nëse dëshironi të regjistroheni përmes një rrjeti social por nuk jeni të regjistruar si përdorues në Platformën JOLZT, do t'ju kërkohet të vendosni të dhënat e hyrjes nga rrjeti social, dhe pastaj një profil në Platformën JOLZT do të krijohet nga profili juaj në rrjetin social. Në një rast të tillë, ju duhet të vendosni se cilat të dhëna dëshironi të ndani nga profili juaj në cilësimet e rrjetit social ku profili juaj është i regjistruar.",
    socialText5: "Duke u lidhur përmes një rrjeti social, ju pranoni të na jepni leje për të hyrë në informacionin nga profili juaj në rrjetin social përkatës.",

    // User Rights
    rightsTitle: "Të Drejtat tuaja si Subjekte të të Dhënave",
    rightsText1: "Parimi i përgjegjësisë dhe transparencës është një parim themelor i çdo sistemi të mbrojtjes së të dhënave personale.",
    rightsText2: "Si përgjegjës, JOLZT ka vendosur parime dhe mekanizma për informim transparent dhe ushtrimin e të drejtave të subjekteve të të dhënave në përputhje me rregulloret ligjore.",
    rightsText3: "Prandaj, si subjekt i të dhënave, ju keni të drejta në lidhje me mbrojtjen e të dhënave tuaja personale, siç specifikohet në Ligjin për Mbrojtjen e të Dhënave Personale. Në këtë drejtim, ju informojmë se ju keni të drejtë në çdo kohë të informoheni/ të kërkoni/të paraqisni një kërkesë për:",
    rightsList: [
      "Nëse të dhënat tuaja personale po përpunohen",
      "Qëllimet dhe bazën ligjore për përpunimin e të dhënave tuaja personale",
      "Kategoritë e të dhënave personale që po përpunohen, si dhe marrësit dhe kategoritë e marrësve të cilëve u janë zbuluar ato",
      "Periudhën e ruajtjes së të dhënave tuaja personale dhe/ose kriteret për përcaktimin e saj",
      "Burimin e të dhënave personale që nuk janë dhënë nga ju",
      "Logjikën e përpunimit të automatizuar, duke përfshirë pasojat e mundshme të një përpunimi të tillë",
      "Mundësinë për të plotësuar, ndryshuar ose korrigjuar të dhënat tuaja personale nëse ato janë të paplota, të pasakta ose të vjetruara",
      "Mundësinë për të kufizuar përpunimin e të dhënave tuaja personale",
      "Të drejtën për të fshirë të dhënat tuaja personale",
      "Të drejtën për të tërhequr pëlqimin e dhënë më parë për përpunimin e të dhënave personale",
      "Të drejtën për të kundërshtuar mënyrën e përpunimit të të dhënave tuaja personale",
      "Të drejtën për të marrë një kopje të të dhënave tuaja personale"
    ],
    rightsText4: "Ju kujtojmë se adresa e email-it përmes së cilës na kontaktoni, përmbajtja e Kërkesës dhe të dhëna të tjera personale nuk do të përdoren për ndonjë qëllim tjetër përveç përgjigjes ndaj kërkesave dhe nevojave tuaja.",
    rightsText5: "Ne do të japim një përgjigje të përshtatshme ndaj informacionit të kërkuar sa më shpejt të jetë e mundur, por jo më vonë se periudha e parashikuar ligjërisht prej një muaji nga pranimi i kërkesës suaj.",

    // Data Protection Officer
    dpoTitle: "Zyrtari për Mbrojtjen e të Dhënave",
    dpoText1: "Informacione në lidhje me përpunimin e të dhënave tuaja personale dhe/ose ushtrimin e të drejtave tuaja për mbrojtjen e të dhënave personale mund të merren nga Zyrtari ynë për Mbrojtjen e të Dhënave:",
    dpoName: "Emri dhe mbiemri: ____________",
    dpoPhone: "Telefoni për kontakt: _____________",
    dpoEmail: "Adresa e email-it: _______________",
    dpoText2: "Nëse keni nevojë për sqarime të mëtejshme ose keni pyetje që lidhen drejtpërdrejt me mbledhjen dhe përpunimin e të dhënave tuaja personale, mund të kontaktoni Zyrtarin tonë për Mbrojtjen e të Dhënave në çdo kohë, duke përdorur të dhënat e kontaktit të mësipërm.",

    // Policy Changes
    changesTitle: "Ndryshime në Politikën e Privatësisë",
    changesText: "Pas ndryshimeve në aktet tona të brendshme dhe rregulloret përkatëse ligjore, ne do ta përditësojmë dhe plotësojmë rregullisht Politikën e Privatësisë. Vazhdimi i përdorimit të Platformës sonë pas çdo ndryshimi të bërë në Politikën e Privatësisë do të përbëjë pranimin tuaj të ndryshimeve të bëra.",

    // Footer
    footerText: "Sinqerisht, JOLZT DOO Shkup"
  }
}

export default function PrivacyPolicyPage({ params }: { params: { lang: string } }) {
  const lang = params.lang || "en";
  const t = privacyPolicyTranslations[lang as keyof typeof privacyPolicyTranslations] || privacyPolicyTranslations.en;

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
            <h1 className="text-3xl font-bold mb-6">{t.privacyPolicyTitle}</h1>
            <div className="prose max-w-none">
              <p className="text-muted-foreground mb-6">{t.lastUpdated}</p>

              {/* Introduction */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.introductionTitle}</h2>
              <p>{t.introductionText1}</p>
              <p>{t.introductionText2}</p>
              <p>{t.introductionText3}</p>
              <p>{t.introductionText4}</p>
              <p>{t.introductionText5}</p>

              {/* Personal Data Definition */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.personalDataTitle}</h2>
              <p>{t.personalDataText}</p>

              {/* Purposes and Principles */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.purposesTitle}</h2>
              <p>{t.purposesText1}</p>
              <ul className="list-disc pl-6 mb-4">
                <li>{t.purposesListItem1}</li>
                <li>{t.purposesListItem2}</li>
                <li>{t.purposesListItem3}</li>
                <li>{t.purposesListItem4}</li>
                <li>{t.purposesListItem5}</li>
                <li>{t.purposesListItem6}</li>
              </ul>
              <p>{t.purposesText2}</p>
              <ul className="list-disc pl-6 mb-4">
                {t.purposesList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>{t.purposesText3}</p>

              {/* Legal Basis */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.legalBasisTitle}</h2>
              <p>{t.legalBasisText1}</p>
              <p>{t.legalBasisText2}</p>
              <ul className="list-disc pl-6 mb-4">
                {t.legalBasisList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {/* Data Categories */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.dataCategoriesTitle}</h2>
              <p>{t.dataCategoriesText1}</p>
              <ul className="list-disc pl-6 mb-4">
                {t.dataCategoriesList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>{t.dataCategoriesText2}</p>
              <ul className="list-disc pl-6 mb-4">
                {t.dataCategoriesList2.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>{t.dataCategoriesText3}</p>

              {/* Data Retention */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.retentionTitle}</h2>
              <p>{t.retentionText}</p>

              {/* Data Sharing */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.sharingTitle}</h2>
              <p>{t.sharingText1}</p>
              <ul className="list-disc pl-6 mb-4">
                {t.sharingList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {/* Data Processors */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.processorsTitle}</h2>
              <p>{t.processorsText1}</p>
              <ul className="list-disc pl-6 mb-4">
                {t.processorsList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>{t.processorsText2}</p>

              {/* Data Transfer */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.transferTitle}</h2>
              <p>{t.transferText1}</p>
              <p>{t.transferText2}</p>
              <p>{t.transferText3}</p>

              {/* Consent Management */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.consentTitle}</h2>
              <p>{t.consentText}</p>

              {/* Third Parties */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.thirdPartiesTitle}</h2>
              <p>{t.thirdPartiesText1}</p>
              <p>{t.thirdPartiesText2}</p>

              {/* Minors Protection */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.minorsTitle}</h2>
              <p>{t.minorsText}</p>

              {/* Cookies */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.cookiesTitle}</h2>
              <p>{t.cookiesText1}</p>
              <p>{t.cookiesText2}</p>
              <p>{t.cookiesText3}</p>
              <p>{t.cookiesText4}</p>
              <p>{t.cookiesText5}</p>
              <p>{t.cookiesText6}</p>
              <p>{t.cookiesText7}</p>
              <p>{t.cookiesText8}</p>
              <ul className="list-disc pl-6 mb-4">
                {t.cookiesList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>{t.cookiesText9}</p>
              <p>{t.cookiesText10}</p>
              <ul className="list-disc pl-6 mb-4">
                {t.cookiesTypes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>{t.cookiesText11}</p>

              {/* Direct Marketing */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.marketingTitle}</h2>
              <p>{t.marketingText1}</p>
              <p>{t.marketingText2}</p>
              <p>{t.marketingText3}</p>
              <p>{t.marketingText4}</p>
              <p>{t.marketingText5}</p>
              <p>{t.marketingText6}</p>
              <p>{t.marketingText7}</p>
              <p>{t.marketingText8}</p>
              <p>{t.marketingText9}</p>
              <p>{t.marketingText10}</p>
              <p>{t.marketingText11}</p>
              <p>{t.marketingText12}</p>
              <p>{t.marketingText13}</p>
              <p>{t.marketingText14}</p>

              {/* Google Analytics */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.analyticsTitle}</h2>
              <p>{t.analyticsText1}</p>
              <p>{t.analyticsText2}</p>
              <p>{t.analyticsText3}</p>
              <p>{t.analyticsText4}</p>

              {/* Payment Security */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.paymentTitle}</h2>
              <p>{t.paymentText1}</p>
              <p>{t.paymentText2}</p>

              {/* Social Networks */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.socialTitle}</h2>
              <p>{t.socialText1}</p>
              <p>{t.socialText2}</p>
              <p>{t.socialText3}</p>
              <p>{t.socialText4}</p>
              <p>{t.socialText5}</p>

              {/* User Rights */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.rightsTitle}</h2>
              <p>{t.rightsText1}</p>
              <p>{t.rightsText2}</p>
              <p>{t.rightsText3}</p>
              <ul className="list-disc pl-6 mb-4">
                {t.rightsList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>{t.rightsText4}</p>
              <p>{t.rightsText5}</p>

              {/* Data Protection Officer */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.dpoTitle}</h2>
              <p>{t.dpoText1}</p>
              <p>{t.dpoName}</p>
              <p>{t.dpoPhone}</p>
              <p>{t.dpoEmail}</p>
              <p>{t.dpoText2}</p>

              {/* Policy Changes */}
              <h2 className="text-xl font-semibold mt-8 mb-4">{t.changesTitle}</h2>
              <p>{t.changesText}</p>

              {/* Footer */}
              <p className="mt-8 font-medium">{t.footerText}</p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}