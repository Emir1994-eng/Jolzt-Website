"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon, PhoneIcon, MailIcon, SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { LanguageSelector } from "@/components/language-selector"
import { SiteFooter } from "@/components/site-footer"

export default function ContactPage() {
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
            <LanguageSelector />
            <Link href="/" className="text-sm font-medium hover:underline flex items-center gap-1">
              <ChevronLeftIcon className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f26522] to-[#f58220] -z-10 h-[50vh] md:h-[40vh]" />
          <div className="container px-4 md:px-6">
            <div className="text-center text-white mb-12 relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Help & Contact</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Find answers to your questions or get in touch with our team
              </p>
            </div>

            <Card className="relative z-10 mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search for help articles..." className="pl-10" />
                  </div>
                  <Button className="bg-[#f26522] hover:bg-[#e05a1c]">Search</Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 relative z-10 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#f26522]/10 flex items-center justify-center shrink-0">
                      <PhoneIcon className="h-5 w-5 text-[#f26522]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Phone</h3>
                      <p className="text-muted-foreground mb-1">Customer Support:</p>
                      <p className="font-medium">+389 XX XXX XXX</p>
                      <p className="text-muted-foreground mb-1 mt-3">Business Inquiries:</p>
                      <p className="font-medium">+389 XX XXX XXX</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#f26522]/10 flex items-center justify-center shrink-0">
                      <MailIcon className="h-5 w-5 text-[#f26522]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground mb-1">Customer Support:</p>
                      <p className="font-medium">support@jolzt.com</p>
                      <p className="text-muted-foreground mb-1 mt-3">Business Inquiries:</p>
                      <p className="font-medium">business@jolzt.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="faq" className="relative z-10">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
                <TabsTrigger value="faq">Frequently Asked Questions</TabsTrigger>
                <TabsTrigger value="contact">Contact Form</TabsTrigger>
              </TabsList>

              <TabsContent value="faq" className="space-y-8">
                <div className="max-w-4xl mx-auto">
                  <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-md shadow-sm">
                      <Button
                        id="renters-tab"
                        variant="outline"
                        className="rounded-l-md data-[state=active]:bg-[#f26522] data-[state=active]:text-white data-[state=active]:border-[#f26522]"
                        data-state="active"
                        onClick={() => {
                          document.getElementById("renters-tab")?.setAttribute("data-state", "active")
                          document.getElementById("companies-tab")?.setAttribute("data-state", "inactive")
                          document.getElementById("renters-content")?.classList.remove("hidden")
                          document.getElementById("companies-content")?.classList.add("hidden")
                        }}
                      >
                        For Renters
                      </Button>
                      <Button
                        id="companies-tab"
                        variant="outline"
                        className="rounded-r-md data-[state=active]:bg-[#f26522] data-[state=active]:text-white data-[state=active]:border-[#f26522]"
                        data-state="inactive"
                        onClick={() => {
                          document.getElementById("renters-tab")?.setAttribute("data-state", "inactive")
                          document.getElementById("companies-tab")?.setAttribute("data-state", "active")
                          document.getElementById("renters-content")?.classList.add("hidden")
                          document.getElementById("companies-content")?.classList.remove("hidden")
                        }}
                      >
                        For Rental Companies
                      </Button>
                    </div>
                  </div>

                  <div id="renters-content">
                    <Card>
                      <CardContent className="p-6">
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>What do I need to rent a car?</AccordionTrigger>
                            <AccordionContent>
                              You need to be at least 21 years old, have a valid driver's license held for at least 2
                              years, and a credit card in your name. Some car categories may have higher age
                              requirements.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger>Is insurance included in the rental price?</AccordionTrigger>
                            <AccordionContent>
                              Yes, all rentals include basic insurance coverage. Additional coverage options are
                              available during the booking process if you want extra protection.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger>Can I modify or cancel my booking?</AccordionTrigger>
                            <AccordionContent>
                              Yes, you can modify or cancel your booking through the app or website. Free cancellation
                              is available up to 48 hours before your scheduled pickup time.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-4">
                            <AccordionTrigger>Can I take the car across borders?</AccordionTrigger>
                            <AccordionContent>
                              Yes, you can take your Jolzt rental into most other European countries with written
                              permission. A foreign use charge may apply. Please specify your travel plans during
                              booking.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-5">
                            <AccordionTrigger>How does the digital check-in work?</AccordionTrigger>
                            <AccordionContent>
                              On the day of your rental, you'll receive a notification to complete the check-in process
                              through the Jolzt app. This includes taking photos of the car and confirming its condition
                              before your trip.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-6">
                            <AccordionTrigger>What if I have an issue during my rental?</AccordionTrigger>
                            <AccordionContent>
                              Our customer support team is available 24/7 through the app or by phone. We also provide
                              roadside assistance for any mechanical issues or emergencies.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-7">
                            <AccordionTrigger>What payment methods are accepted?</AccordionTrigger>
                            <AccordionContent>
                              We accept all major credit cards in the renter's name. Prepaid or debit cards are not
                              accepted. Some premium car categories may require 2 credit cards.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-8">
                            <AccordionTrigger>Is there a mileage limit?</AccordionTrigger>
                            <AccordionContent>
                              Most of our rentals come with unlimited mileage. If there is a mileage restriction on your
                              specific rental, it will be clearly indicated during the booking process.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </div>

                  <div id="companies-content" className="hidden">
                    <Card>
                      <CardContent className="p-6">
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>How do I become a host on Jolzt?</AccordionTrigger>
                            <AccordionContent>
                              To become a host, you need to register on our platform, complete your business profile,
                              and verify your identity. You'll also need to provide necessary business documentation and
                              information about your vehicles.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger>What are the requirements for listing vehicles?</AccordionTrigger>
                            <AccordionContent>
                              Vehicles must be in good condition, properly maintained, and have valid insurance and
                              registration. They should be no more than 7 years old and have less than 150,000
                              kilometers on the odometer.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger>How do I set my rental rates?</AccordionTrigger>
                            <AccordionContent>
                              You have full control over your rental rates. Our platform provides pricing
                              recommendations based on market data, but you can set your own rates based on your
                              business strategy.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-4">
                            <AccordionTrigger>How and when do I get paid?</AccordionTrigger>
                            <AccordionContent>
                              Payments are processed within 24-48 hours after each completed rental. Funds are
                              transferred directly to your registered bank account.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-5">
                            <AccordionTrigger>What happens if a renter damages my vehicle?</AccordionTrigger>
                            <AccordionContent>
                              All rentals include insurance coverage. If a renter damages your vehicle, you should
                              document the damage and report it through the host dashboard. Our claims team will guide
                              you through the process.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-6">
                            <AccordionTrigger>Are there any fees for listing my vehicles?</AccordionTrigger>
                            <AccordionContent>
                              There are no upfront costs or monthly fees for listing your vehicles on Jolzt. We operate
                              on a commission-based model, taking a percentage of each completed rental.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-7">
                            <AccordionTrigger>Can I integrate my existing fleet management system?</AccordionTrigger>
                            <AccordionContent>
                              Yes, we offer API integration options for larger rental companies with existing fleet
                              management systems. Our technical team can work with you to set up a seamless integration.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-8">
                            <AccordionTrigger>What support does Jolzt provide to hosts?</AccordionTrigger>
                            <AccordionContent>
                              We provide dedicated account managers for our hosts, 24/7 technical support, marketing
                              assistance, and regular performance analytics to help you optimize your listings and
                              maximize revenue.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="contact" className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                    <form className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Full Name
                          </label>
                          <Input id="name" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email Address
                          </label>
                          <Input id="email" type="email" placeholder="Your email" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone Number
                          </label>
                          <Input id="phone" placeholder="Your phone number" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="inquiry-type" className="text-sm font-medium">
                            Inquiry Type
                          </label>
                          <Select>
                            <SelectTrigger id="inquiry-type">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="booking">Booking Question</SelectItem>
                              <SelectItem value="support">Technical Support</SelectItem>
                              <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input id="subject" placeholder="What is your message about?" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Please type your message here..."
                        ></textarea>
                      </div>
                      <Button type="submit" className="w-full bg-[#f26522] hover:bg-[#e05a1c]">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
