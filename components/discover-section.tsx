import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const discoverItems = [
  {
    id: 1,
    title: "Car Rental in North Macedonia",
    description:
      "North Macedonia is known for its beautiful lakes, mountains, large green spaces and old towns. Rent a car in North Macedonia to travel from Skopje, its largest city, to the town of Prilep to visit historical treasures like the Treskavec Monastery.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Jolzt service in North Macedonia",
    description:
      "With your Jolzt car rental in North Macedonia, you'll have access to many services and amenities. If you ever have a question or need help with anything, Jolzt's English-speaking customer service team is available 24/7.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Best places to visit in North Macedonia",
    description:
      "Mavrovo: This area is home to the largest national park in the country. Here you can enjoy a wide array of outdoor activities year-round. This is the place to go hiking, horseback riding, paddleboarding and skiing in the winter.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Summer in North Macedonia",
    description:
      "On a summer visit to North Macedonia, it will be beneficial to rent a car. You can drive it to the beach for some water fun or to wine country (in the Povardarie region) for a little wine tasting.",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export function DiscoverSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {discoverItems.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={200}
                className="w-full aspect-[2/1] object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-4">{item.description}</p>
              <Button asChild variant="link" className="px-0 text-orange-600">
                <Link href="#">Read more</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
