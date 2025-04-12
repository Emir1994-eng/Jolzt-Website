import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StarIcon, CheckIcon } from "lucide-react"
import Image from "next/image"

export default function CarDetailPage({ params }: { params: { id: string } }) {
  // This would normally come from a database or API
  const car = {
    id: params.id,
    name: "Tesla Model 3",
    category: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Electric",
    price: 80,
    description:
      "The Tesla Model 3 is a battery electric mid-size sedan with a fastback body style built by Tesla, Inc., introduced in 2017. The vehicle is marketed as being more affordable to more people than previous Tesla models.",
    features: [
      "Air conditioning",
      "Bluetooth",
      "Navigation system",
      "Backup camera",
      "Keyless entry",
      "USB ports",
      "Heated seats",
      "Autopilot",
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  }

  return (
    <div className="container py-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold mb-4">{car.name}</h1>
          <div className="flex items-center gap-1 mb-6">
            <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-muted-foreground ml-1">(32 reviews)</span>
          </div>

          <div className="grid gap-6">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <Image
                src={car.images[0] || "/placeholder.svg"}
                alt={car.name}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {car.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${car.name} view ${index + 2}`}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <Tabs defaultValue="details">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="p-4">
                <h3 className="font-medium mb-2">Car Details</h3>
                <p className="text-muted-foreground mb-4">{car.description}</p>

                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Category</span>
                    <span>{car.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Seats</span>
                    <span>{car.seats}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Transmission</span>
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Fuel</span>
                    <span>{car.fuel}</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="features" className="p-4">
                <h3 className="font-medium mb-4">Car Features</h3>
                <div className="grid grid-cols-2 gap-y-2">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="p-4">
                <h3 className="font-medium mb-4">Customer Reviews</h3>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="font-medium">John D.</div>
                      <div className="flex">
                        <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Great car, very clean and drives smoothly. The electric range was more than enough for my trip
                      around North Macedonia.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="font-medium">Maria S.</div>
                      <div className="flex">
                        <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Amazing experience with this Tesla! The autopilot feature made the long drives much more
                      comfortable.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-muted-foreground">Price</div>
                  <div className="text-3xl font-bold">
                    €{car.price} <span className="text-sm font-normal text-muted-foreground">/ day</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="font-medium">Rental Summary</div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Base rate (3 days)</span>
                    <span>€{car.price * 3}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Insurance</span>
                    <span>€30</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Taxes & fees</span>
                    <span>€25</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between font-medium">
                    <span>Total</span>
                    <span>€{car.price * 3 + 30 + 25}</span>
                  </div>
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700">Book Now</Button>

                <div className="text-xs text-center text-muted-foreground">
                  Free cancellation up to 48 hours before pickup
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
