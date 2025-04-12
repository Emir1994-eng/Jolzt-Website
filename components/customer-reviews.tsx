"use client"
import { StarIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const reviews = [
  {
    id: 1,
    name: "Marko S.",
    location: "Skopje",
    rating: 5,
    comment:
      "I have been a customer with Jolzt in Macedonia for more than 3 years, never disappointed, excellent service from the team in Skopje, highly recommended!",
    initials: "MS",
  },
  {
    id: 2,
    name: "Elena T.",
    location: "Ohrid",
    rating: 5,
    comment:
      "Excellent service, brand new cars, and very helpful staff. Will definitely use Jolzt again on my next trip to Macedonia.",
    initials: "ET",
  },
  {
    id: 3,
    name: "Stefan K.",
    location: "Skopje Airport",
    rating: 4,
    comment:
      "Good people and helpful. The car was clean and in perfect condition. Pickup and return process was quick and easy.",
    initials: "SK",
  },
  {
    id: 4,
    name: "Ana M.",
    location: "Ohrid",
    rating: 5,
    comment:
      "Great experience with Jolzt! The staff was friendly and professional. The car was exactly what we needed for our trip around Macedonia.",
    initials: "AM",
  },
]

export function CustomerReviews() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {reviews.map((review) => (
          <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback>{review.initials}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <div className="font-medium">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.location}</div>
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted-foreground"}`}
                          />
                        ))}
                    </div>
                    <p className="text-sm">{review.comment}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
