import Link from "next/link"
import { ChevronLeftIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function HostLoginPage() {
  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <Card className="mx-auto max-w-md w-full">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              <ChevronLeftIcon className="h-4 w-4" />
            </Link>
            <CardTitle className="text-2xl">Host Login</CardTitle>
          </div>
          <CardDescription>Enter your email and password to access your host dashboard</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="text-sm text-[#f26522] hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full bg-[#f26522] hover:bg-[#e05a1c]">Login to Host Dashboard</Button>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have a host account?{" "}
            <Link href="/host/register" className="text-[#f26522] hover:underline">
              Register as a host
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
