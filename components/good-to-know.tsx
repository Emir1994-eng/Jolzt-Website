import { Card, CardContent } from "@/components/ui/card"
import { UserIcon, GlobeIcon, CreditCardIcon } from "lucide-react"

const infoItems = [
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
]

export function GoodToKnow() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {infoItems.map((item) => (
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
