import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

export default function TermsOfServicePage() {
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
            <Link href="/" className="text-sm font-medium hover:underline flex items-center gap-1">
              <ChevronLeftIcon className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <div className="prose max-w-none">
              <p className="text-muted-foreground mb-6">Last updated: April 10, 2025</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to Jolzt. These Terms of Service govern your use of our website located at jolzt.com and our
                mobile application (together or individually "Service") operated by Jolzt.
              </p>
              <p>
                Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and
                disclose information that results from your use of our web pages. Please read it here:{" "}
                <Link href="/privacy-policy" className="text-[#f26522] hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
              <p>
                By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of
                the terms then you may not access the Service.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">2. Car Rental Terms</h2>
              <p>
                2.1 <strong>Booking and Reservation:</strong> All bookings made through our Service are subject to
                vehicle availability and confirmation. A reservation is only confirmed after payment is processed and
                you receive a confirmation email or notification.
              </p>
              <p>
                2.2 <strong>Rental Period:</strong> The rental period begins at the time of vehicle pickup and ends at
                the time of vehicle return. Late returns may incur additional charges as specified in your rental
                agreement.
              </p>
              <p>
                2.3 <strong>Driver Requirements:</strong> All drivers must be at least 21 years old and hold a valid
                driver's license for at least 2 years. Some vehicle categories may have higher age requirements. Young
                driver surcharges may apply for drivers under 23 years old.
              </p>
              <p>
                2.4 <strong>Payment:</strong> Full payment is required at the time of booking. We accept major credit
                cards in the renter's name. Prepaid or debit cards are not accepted. Some premium car categories may
                require 2 credit cards.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">3. Vehicle Use</h2>
              <p>
                3.1 <strong>Authorized Use:</strong> The vehicle may only be driven by the authorized driver(s) named in
                the rental agreement. Unauthorized drivers are not covered by insurance.
              </p>
              <p>
                3.2 <strong>Cross-Border Travel:</strong> Vehicles may be taken into most other European countries with
                written permission from Jolzt. A foreign use charge may apply. Unauthorized cross-border travel will
                void insurance coverage.
              </p>
              <p>
                3.3 <strong>Prohibited Use:</strong> Vehicles may not be used for:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Illegal activities</li>
                <li>Racing or speed testing</li>
                <li>Transporting more passengers than the vehicle is designed for</li>
                <li>Towing or pushing other vehicles</li>
                <li>Off-road driving</li>
                <li>Driving under the influence of alcohol or drugs</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">4. Insurance and Liability</h2>
              <p>
                4.1 <strong>Basic Insurance:</strong> All rentals include basic insurance coverage with a deductible
                amount specified in your rental agreement.
              </p>
              <p>
                4.2 <strong>Additional Coverage:</strong> Optional additional insurance coverage may be purchased at the
                time of booking or at vehicle pickup.
              </p>
              <p>
                4.3 <strong>Liability:</strong> The renter is responsible for any damage to the vehicle during the
                rental period up to the deductible amount, unless the damage is covered by the insurance policy.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">5. Cancellations and Modifications</h2>
              <p>
                5.1 <strong>Cancellation Policy:</strong> Free cancellation is available up to 48 hours before the
                scheduled pickup time. Cancellations made less than 48 hours before pickup may incur a cancellation fee.
              </p>
              <p>
                5.2 <strong>Modifications:</strong> Reservations may be modified subject to vehicle availability.
                Changes to the rental period, vehicle category, or pickup/return location may result in price
                adjustments.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">6. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive
                property of Jolzt and its licensors. The Service is protected by copyright, trademark, and other laws of
                both North Macedonia and foreign countries. Our trademarks and trade dress may not be used in connection
                with any product or service without the prior written consent of Jolzt.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">7. Termination</h2>
              <p>
                We may terminate or suspend your access to the Service immediately, without prior notice or liability,
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
              <p>
                In no event shall Jolzt, nor its directors, employees, partners, agents, suppliers, or affiliates, be
                liable for any indirect, incidental, special, consequential or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access
                to or use of or inability to access or use the Service.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">9. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of North Macedonia, without
                regard to its conflict of law provisions.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material we will try to provide at least 30 days' notice prior to any new terms taking
                effect. What constitutes a material change will be determined at our sole discretion.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">11. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p>
                Email: support@jolzt.com
                <br />
                Phone: +389 XX XXX XXX
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
