import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StarIcon, FilterIcon, ChevronDownIcon } from "lucide-react"
import Image from "next/image"

const cars = [
  {
    id: 1,
    name: "Skoda Kamiq",
    category: "SUV",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 50,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Toyota Corolla",
    category: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    price: 55,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Volkswagen Golf",
    category: "Hatchback",
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    price: 45,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Tesla Model 3",
    category: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Electric",
    price: 80,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function CarsPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Available Cars</h1>
        <Button variant="outline" className="gap-2">
          <FilterIcon className="h-4 w-4" />
          Filter
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-6">
        {cars.map((car) => (
          <Card key={car.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Image
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:col-span-2">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h2 className="text-xl font-bold mb-2">{car.name}</h2>
                      <div className="flex items-center gap-1 mb-4">
                        <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-muted-foreground ml-1">(32 reviews)</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Category:</span> {car.category}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Seats:</span> {car.seats}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Transmission:</span> {car.transmission}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Fuel:</span> {car.fuel}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">from</div>
                        <div className="text-2xl font-bold">
                          €{car.price} <span className="text-sm font-normal text-muted-foreground">/ day</span>
                        </div>
                      </div>
                      <Button className="w-full md:w-auto bg-orange-600 hover:bg-orange-700">Select</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
