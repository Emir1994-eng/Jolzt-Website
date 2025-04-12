import { Card, CardContent } from "@/components/ui/card"
import { UserIcon, GlobeIcon, CreditCardIcon } from "lucide-react"

// Translations for the Good to Know section
const translations = {
  en: {
    items: [
      {
        id: 1,
        title: "Car rental under 25 in North Macedonia",
        description:
          "The minimum rental age with Jolzt in North Macedonia is 21 with a license held for at least 2 years. Some car categories have a minimum age of 25, and a young driver surcharge applies to those under 23.",
        icon: <UserIcon className="h-8 w-8 text-orange-600" />,
      },
      {
        id: 2,
        title: "Cross-border travel",
        description:
          "You can take your Jolzt rental from North Macedonia into most other European countries. Written permission from the Jolzt branch is required and a foreign use charge may apply.",
        icon: <GlobeIcon className="h-8 w-8 text-orange-600" />,
      },
      {
        id: 3,
        title: "Accepted payment options",
        description:
          "We accept all major credit cards in the renter's name, but not prepaid or debit cards. Some premium car categories require 2 credit cards.",
        icon: <CreditCardIcon className="h-8 w-8 text-orange-600" />,
      },
    ],
  },
  mk: {
    items: [
      {
        id: 1,
        title: "Изнајмување автомобил под 25 години во Северна Македонија",
        description:
          "Минималната возраст за изнајмување со Jolzt во Северна Македонија е 21 година со возачка дозвола која се поседува најмалку 2 години. Некои категории на автомобили имаат минимална возраст од 25 години, а за возачи под 23 години се наплаќа дополнителен надоместок.",
        icon: <UserIcon className="h-8 w-8 text-orange-600" />,
      },
      {
        id: 2,
        title: "Патување преку граница",
        description:
          "Можете да го земете вашиот изнајмен автомобил од Jolzt од Северна Македонија во повеќето други европски земји. Потребна е писмена дозвола од филијалата на Jolzt и може да се наплати надоместок за користење во странство.",
        icon: <GlobeIcon className="h-8 w-8 text-orange-600" />,
      },
      {
        id: 3,
        title: "Прифатени начини на плаќање",
        description:
          "Прифаќаме сите главни кредитни картички на име на изнајмувачот, но не и припејд или дебитни картички. Некои премиум категории на автомобили бараат 2 кредитни картички.",
        icon: <CreditCardIcon className="h-8 w-8 text-orange-600" />,
      },
    ],
  },
  sq: {
    items: [
      {
        id: 1,
        title: "Marrja me qira e makinave nën 25 vjeç në Maqedoninë e Veriut",
        description:
          "Mosha minimale e marrjes me qira me Jolzt në Maqedoninë e Veriut është 21 vjeç me patentë shoferi të mbajtur për të paktën 2 vjet. Disa kategori makinash kanë një moshë minimale prej 25 vjeç, dhe një tarifë shtesë për shoferët e rinj zbatohet për ata nën 23 vjeç.",
        icon: <UserIcon className="h-8 w-8 text-orange-600" />,
      },
      {
        id: 2,
        title: "Udhëtimi ndërkufitar",
        description:
          "Ju mund të merrni makinën tuaj me qira nga Jolzt nga Maqedonia e Veriut në shumicën e vendeve të tjera evropiane. Kërkohet leje me shkrim nga dega e Jolzt dhe mund të zbatohet një tarifë për përdorim të huaj.",
        icon: <GlobeIcon className="h-8 w-8 text-orange-600" />,
      },
      {
        id: 3,
        title: "Opsionet e pranuara të pagesës",
        description:
          "Ne pranojmë të gjitha kartat kryesore të kreditit në emër të qiramarrësit, por jo karta të parapaguara ose debiti. Disa kategori premium të makinave kërkojnë 2 karta krediti.",
        icon: <CreditCardIcon className="h-8 w-8 text-orange-600" />,
      },
    ],
  },
}

export function GoodToKnow({ lang = "en" }: { lang?: string }) {
  const t = translations[lang as keyof typeof translations] || translations.en

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {t.items.map((item) => (
        <Card key={item.id}>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
