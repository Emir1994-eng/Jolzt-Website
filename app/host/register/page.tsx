import Link from "next/link"
import { ChevronLeftIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export default function HostRegisterPage() {
  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <Card className="mx-auto max-w-md w-full">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              <ChevronLeftIcon className="h-4 w-4" />
            </Link>
            <CardTitle className="text-2xl">Register as a Host</CardTitle>
          </div>
          <CardDescription>Create an account to start renting your vehicles on Jolzt</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <RadioGroup defaultValue="individual" className="grid grid-cols-2 gap-4">
            <div>
              <RadioGroupItem value="individual" id="individual" className="peer sr-only" />
              <Label
                htmlFor="individual"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#f26522] [&:has([data-state=checked])]:border-[#f26522]"
              >
                <span className="mb-2 font-medium">Individual Host</span>
                <span className="text-xs text-center text-muted-foreground">Rent your personal vehicle</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="company" id="company" className="peer sr-only" />
              <Label
                htmlFor="company"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#f26522] [&:has([data-state=checked])]:border-[#f26522]"
              >
                <span className="mb-2 font-medium">Rental Company</span>
                <span className="text-xs text-center text-muted-foreground">List your fleet of vehicles</span>
              </Label>
            </div>
          </RadioGroup>

          <Separator />

          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+389 XX XXX XXX" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full bg-[#f26522] hover:bg-[#e05a1c]">Create Host Account</Button>
          <div className="mt-4 text-center text-sm">
            Already have a host account?{" "}
            <Link href="/host/login" className="text-[#f26522] hover:underline">
              Log in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
