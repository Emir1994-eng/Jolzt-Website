import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon, CheckIcon, StarIcon, ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { SiteFooter } from "@/components/site-footer"

export default function PartnerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4 md:gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Jolzt Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-xl font-bold text-[#f26522]">JOLZT</span>
            </Link>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/" className="flex items-center gap-1">
                <ChevronLeftIcon className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f26522] to-[#f58220] -z-10 h-[50vh] md:h-[40vh]" />
          <div className="container px-4 md:px-6">
            <div className="text-center text-white mb-12 relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Partner With Jolzt</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Join North Macedonia's fastest growing car rental platform and take your business to the next level
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              <Card className="bg-white shadow-xl lg:col-span-2">
                <CardContent className="p-6 md:p-8">
                  <Tabs defaultValue="info" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                      <TabsTrigger value="info">Company Information</TabsTrigger>
                      <TabsTrigger value="contact">Contact Details</TabsTrigger>
                    </TabsList>
                    <TabsContent value="info" className="space-y-6">
                      <div>
                        <h2 className="text-xl font-bold mb-4">Tell us about your business</h2>
                        <p className="text-muted-foreground mb-6">
                          Please provide information about your rental company so we can better understand your needs.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="company-name">Company Name</Label>
                          <Input id="company-name" placeholder="Your rental company name" />
                        </div>

                        <div>
                          <Label htmlFor="company-website">Company Website (optional)</Label>
                          <Input id="company-website" placeholder="https://www.example.com" />
                        </div>

                        <div>
                          <Label>Company Size</Label>
                          <RadioGroup defaultValue="small" className="flex flex-col space-y-1 mt-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="small" id="small" />
                              <Label htmlFor="small" className="font-normal">
                                Small (1-10 vehicles)
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="medium" id="medium" />
                              <Label htmlFor="medium" className="font-normal">
                                Medium (11-50 vehicles)
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="large" id="large" />
                              <Label htmlFor="large" className="font-normal">
                                Large (50+ vehicles)
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div>
                          <Label htmlFor="locations">Locations</Label>
                          <Input id="locations" placeholder="e.g., Skopje, Ohrid, Skopje Airport" />
                        </div>

                        <div>
                          <Label htmlFor="about">Tell us about your business</Label>
                          <Textarea
                            id="about"
                            placeholder="Share details about your rental company, types of vehicles, current operations, etc."
                            rows={4}
                          />
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button className="bg-[#f26522] hover:bg-[#e05a1c]">
                          Next
                          <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="contact" className="space-y-6">
                      <div>
                        <h2 className="text-xl font-bold mb-4">Your Contact Information</h2>
                        <p className="text-muted-foreground mb-6">
                          Please provide your contact details so our partnership team can reach out to you.
                        </p>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" placeholder="Your first name" />
                        </div>
                        <div>
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" placeholder="Your last name" />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="you@example.com" />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="+389 XX XXX XXX" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="position">Your Position</Label>
                        <Input id="position" placeholder="e.g., Owner, Manager, Director" />
                      </div>

                      <div>
                        <Label htmlFor="message">Additional Information (optional)</Label>
                        <Textarea
                          id="message"
                          placeholder="Any specific questions or information you'd like to share with our team"
                          rows={4}
                        />
                      </div>

                      <div className="flex justify-end">
                        <Button className="bg-[#f26522] hover:bg-[#e05a1c]">Submit Application</Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Why Partner With Us</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 shrink-0" />
                        <p className="text-sm">Increase your bookings by an average of 35%</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 shrink-0" />
                        <p className="text-sm">Access our network of 50,000+ monthly active users</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 shrink-0" />
                        <p className="text-sm">Streamline operations with our easy-to-use management platform</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 shrink-0" />
                        <p className="text-sm">Dedicated account manager and 24/7 support</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckIcon className="h-5 w-5 text-[#f26522] mt-0.5 shrink-0" />
                        <p className="text-sm">No upfront costs or monthly fees</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Partner Success Stories</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-[#f26522]/20 text-[#f26522]">MK</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center mb-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mb-1">
                            "Since joining Jolzt, our occupancy rate has increased from 60% to 85%. The platform is
                            intuitive and the support team is always available."
                          </p>
                          <p className="text-xs font-medium">Marko K., Skopje Car Rentals</p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-[#f26522]/20 text-[#f26522]">EL</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center mb-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mb-1">
                            "Partnering with Jolzt allowed us to expand our fleet by 40% in just one year. Their
                            platform has transformed our business."
                          </p>
                          <p className="text-xs font-medium">Elena L., Ohrid Auto Rental</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-[#f26522]/5 rounded-lg p-4">
                  <h3 className="font-medium text-sm mb-2">Need help?</h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    Our partnership team is available to answer any questions you might have about joining Jolzt.
                  </p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="text-xs border-[#f26522] text-[#f26522]">
                      Email Us
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs border-[#f26522] text-[#f26522]">
                      Call +389 XX XXX XXX
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Becoming a Jolzt partner is simple. Here's how the process works from application to your first booking.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border relative">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-[#f26522] text-white flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <h3 className="font-bold mt-2 mb-2">Apply</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out the application form with details about your rental company and fleet.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border relative">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-[#f26522] text-white flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <h3 className="font-bold mt-2 mb-2">Onboarding</h3>
                <p className="text-sm text-muted-foreground">
                  Our team will contact you to set up your account and provide training on our platform.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border relative">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-[#f26522] text-white flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <h3 className="font-bold mt-2 mb-2">List Your Fleet</h3>
                <p className="text-sm text-muted-foreground">
                  Add your vehicles, set your rates, and define your rental policies and availability.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border relative">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-[#f26522] text-white flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <h3 className="font-bold mt-2 mb-2">Start Earning</h3>
                <p className="text-sm text-muted-foreground">
                  Begin receiving bookings through the Jolzt platform and grow your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="bg-[#f26522]/5 rounded-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to grow your rental business?</h2>
                  <p className="text-muted-foreground mb-6">
                    Join our network of successful rental companies across North Macedonia and take advantage of our
                    growing customer base.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-[#f26522] hover:bg-[#e05a1c]">
                      Apply Now
                    </Button>
                    <Button size="lg" variant="outline" className="border-[#f26522] text-[#f26522]">
                      Schedule a Demo
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#f26522] mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Active Partners</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#f26522] mb-2">15K+</div>
                    <div className="text-sm text-muted-foreground">Monthly Bookings</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#f26522] mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Partner Satisfaction</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#f26522] mb-2">35%</div>
                    <div className="text-sm text-muted-foreground">Avg. Revenue Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
