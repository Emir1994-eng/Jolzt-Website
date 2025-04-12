"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useTranslations } from "@/utils/i18n"

export function ContactForm({ lang = "en" }: { lang?: string }) {
  const { t } = useTranslations(lang)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate form submission
    try {
      // In a real implementation, you would send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-base font-medium text-gray-700">
            {t("contact.name")}
          </Label>
          <Input
            id="name"
            name="name"
            placeholder={t("contact.namePlaceholder")}
            required
            disabled={isSubmitting}
            className="mt-2 h-12 border-gray-300 focus:border-[#f26522] focus:ring-[#f26522]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base font-medium text-gray-700">
            {t("contact.email")}
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t("contact.emailPlaceholder")}
            required
            disabled={isSubmitting}
            className="mt-2 h-12 border-gray-300 focus:border-[#f26522] focus:ring-[#f26522]"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-base font-medium text-gray-700">
          {t("contact.subject")}
        </Label>
        <Input
          id="subject"
          name="subject"
          placeholder={t("contact.subjectPlaceholder")}
          required
          disabled={isSubmitting}
          className="mt-2 h-12 border-gray-300 focus:border-[#f26522] focus:ring-[#f26522]"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-base font-medium text-gray-700">
          {t("contact.message")}
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder={t("contact.messagePlaceholder")}
          rows={5}
          required
          disabled={isSubmitting}
          className="mt-2 min-h-[150px] border-gray-300 focus:border-[#f26522] focus:ring-[#f26522]"
        />
      </div>
      <div>
        <Button
          type="submit"
          className="w-full bg-[#f26522] hover:bg-[#e05a1c] transition-all duration-300 shadow-md hover:shadow-lg text-base px-8 py-6 h-auto rounded-full font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? t("contact.sending") : t("contact.submit")}
        </Button>
      </div>
      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 text-green-700 rounded-md">{t("contact.success")}</div>
      )}
      {submitStatus === "error" && <div className="p-4 bg-red-50 text-red-700 rounded-md">{t("contact.error")}</div>}
    </form>
  )
}
