import { MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const locations = [
  {
    id: 1,
    name: "Skopje",
    address: "City Center",
    hours: "Mon-Sun: 08:00-20:00",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Skopje Airport",
    address: "Main Building",
    hours: "24h Pick Up / 24h Return",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Ohrid",
    address: "St. Paul the Apostle Airport",
    hours: "Mon-Sun: 09:00-19:00",
    rating: 4.5,
  },
]

export function TopLocations() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {locations.map((location) => (
        <Card key={location.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-video bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="h-12 w-12 text-orange-600" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">{location.name}</h3>
                <div className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm font-medium">
                  {location.rating}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{location.address}</p>
              <p className="text-sm text-muted-foreground mb-4">{location.hours}</p>
              <Button asChild variant="outline" className="w-full">
                <Link href="#">Read more about {location.name}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
