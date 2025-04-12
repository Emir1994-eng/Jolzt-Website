import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CarIcon, DollarSignIcon, CalendarIcon, PercentIcon } from "lucide-react"
import Link from "next/link"

export function HostCTA() {
  return (
    <Card className="border-[#f26522]/20">
      <CardHeader className="bg-[#f26522]/10 rounded-t-lg">
        <CardTitle className="text-[#f26522]">Become a Host</CardTitle>
        <CardDescription>Turn your car into income</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <DollarSignIcon className="h-5 w-5 text-[#f26522] mt-0.5" />
            <div>
              <h4 className="font-medium">Earn Extra Income</h4>
              <p className="text-sm text-muted-foreground">Make money when you're not using your car</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CalendarIcon className="h-5 w-5 text-[#f26522] mt-0.5" />
            <div>
              <h4 className="font-medium">Flexible Schedule</h4>
              <p className="text-sm text-muted-foreground">You control when your car is available</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <PercentIcon className="h-5 w-5 text-[#f26522] mt-0.5" />
            <div>
              <h4 className="font-medium">Set Your Rates</h4>
              <p className="text-sm text-muted-foreground">You decide how much to charge</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-[#f26522] hover:bg-[#e05a1c]">
          <Link href="/host/register">
            <CarIcon className="mr-2 h-4 w-4" />
            Register as a Host
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
