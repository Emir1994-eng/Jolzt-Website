"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Car, CheckCircle, Check, ArrowRight } from "lucide-react"

interface PartnershipFormProps {
  dictionary: {
    title: string
    subtitle: string
    benefits: string[]
    contact: {
      title: string
      subtitle: string
      firstName: string
      lastName: string
      email: string
      phone: string
      position: string
      companyName: string
      companySize: string
      locations: string
      additionalInfo: string
      submitButton: string
      placeholders: {
        firstName: string
        lastName: string
        email: string
        phone: string
        position: string
        companyName: string
        locations: string
        additionalInfo: string
      }
      sizeOptions: {
        small: string
        medium: string
        large: string
      }
    }
    success: {
      title: string
      message: string
    }
  }
}

export function PartnershipForm({ dictionary }: PartnershipFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }


  useEffect(() => {
    const showSuccessMessage = () => {
      setSubmitStatus("idle")
      try {
        setSubmitStatus("success")
      } catch (error) {
        setSubmitStatus("error")
      }
    }

    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get("messageSent") === "true") {
      showSuccessMessage()
      urlParams.delete("messageSent")
    }
  })

  return (
    <section id="partnership-form" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dictionary.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{dictionary.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
          <div className="md:col-span-3 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center p-10 md:p-16 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold mb-4">{dictionary.success.title}</h4>
                <p className="text-gray-600 text-lg max-w-md">{dictionary.success.message}</p>
              </div>
            ) : (
              <div className="p-8 md:p-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{dictionary.contact.title}</h3>
                  <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full mb-6 font-medium">
                    <span className="font-bold">Limited Offer:</span> Only 3 spots remaining out of 5 total!
                  </div>
                  <p className="text-gray-600 mb-6">{dictionary.contact.subtitle}</p>

                  <form action="https://formsubmit.co/jolztapp@gmail.com" method="POST" className="space-y-6">
                    <input type="hidden" name="_next" value="https://jolzt.com/en/contact?messageSent=true" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="firstName" className="text-sm font-medium">
                          {dictionary.contact.firstName}
                        </Label>
                        <Input
                          id="firstName"
                          name="name"
                          placeholder={dictionary.contact.placeholders.firstName}
                          required
                          disabled={isSubmitting}
                          className="h-12 rounded-md"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="lastName" className="text-sm font-medium">
                          {dictionary.contact.lastName}
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder={dictionary.contact.placeholders.lastName}
                          required
                          disabled={isSubmitting}
                          className="h-12 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-sm font-medium">
                          {dictionary.contact.email}
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={dictionary.contact.placeholders.email}
                          required
                          disabled={isSubmitting}
                          className="h-12 rounded-md"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-sm font-medium">
                          {dictionary.contact.phone}
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder={dictionary.contact.placeholders.phone}
                          required
                          disabled={isSubmitting}
                          className="h-12 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="companyName" className="text-sm font-medium">
                        {dictionary.contact.companyName}
                      </Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        placeholder={dictionary.contact.placeholders.companyName}
                        required
                        disabled={isSubmitting}
                        className="h-12 rounded-md"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="position" className="text-sm font-medium">
                        {dictionary.contact.position}
                      </Label>
                      <Input
                        id="position"
                        name="companyPosition"
                        placeholder={dictionary.contact.placeholders.position}
                        disabled={isSubmitting}
                        className="h-12 rounded-md"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-sm font-medium">{dictionary.contact.companySize}</Label>
                      <RadioGroup defaultValue="small" className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="small" id="small" />
                          <Label htmlFor="small">{dictionary.contact.sizeOptions.small}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="medium" id="medium" />
                          <Label htmlFor="medium">{dictionary.contact.sizeOptions.medium}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="large" id="large" />
                          <Label htmlFor="large">{dictionary.contact.sizeOptions.large}</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="locations" className="text-sm font-medium">
                        {dictionary.contact.locations}
                      </Label>
                      <Input
                        id="locations"
                        name="locations"
                        placeholder={dictionary.contact.placeholders.locations}
                        required
                        disabled={isSubmitting}
                        className="h-12 rounded-md"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="additionalInfo" className="text-sm font-medium">
                        {dictionary.contact.additionalInfo}
                      </Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        placeholder={dictionary.contact.placeholders.additionalInfo}
                        rows={4}
                        disabled={isSubmitting}
                        className="rounded-md resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 h-auto rounded-md font-bold shadow-lg hover:shadow-xl transition-all duration-300 group"
                      disabled={isSubmitting}
                    >
                      <span className="flex items-center justify-center gap-2">
                        {dictionary.contact.submitButton}
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                    {submitStatus === "success" && (
                      <div className="p-4 bg-green-50 text-green-700 rounded-md">Message was sent</div>
                    )}
                     {submitStatus === "error" && <div className="p-4 bg-red-50 text-red-700 rounded-md">Error while sending message</div>}
                  </form>
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

            <h3 className="text-2xl font-bold mb-8 relative z-10">Key Benefits</h3>
            <ul className="space-y-5 relative z-10">
              {dictionary.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-white rounded-full p-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <Car className="h-6 w-6 text-white" />
                <span className="font-bold text-xl">Jolzt</span>
              </div>
              <p className="text-white/90 leading-relaxed">
                Join 5+ car rental companies already using Jolzt to increase their bookings and streamline operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
