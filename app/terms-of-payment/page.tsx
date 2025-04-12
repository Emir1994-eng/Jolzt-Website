import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

export default function TermsOfPaymentPage() {
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
            <h1 className="text-3xl font-bold mb-6">Terms of Payment</h1>
            <div className="prose max-w-none">
              <p className="text-muted-foreground mb-6">Last updated: April 10, 2025</p>

              <p>
                These Terms of Payment govern all payment transactions made through the Jolzt website (jolzt.com) and
                mobile application. By making a payment through our Service, you agree to be bound by these terms.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">1. Payment Methods</h2>
              <p>
                1.1 <strong>Accepted Payment Methods:</strong> We accept the following payment methods:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Major credit cards (Visa, Mastercard, American Express)</li>
                <li>PayPal</li>
                <li>Bank transfers (for certain bookings)</li>
              </ul>
              <p>
                1.2 <strong>Credit Card Requirements:</strong> All credit cards must be in the renter's name. We do not
                accept prepaid or debit cards. Some premium car categories may require 2 credit cards.
              </p>
              <p>
                1.3 <strong>Payment Verification:</strong> For security purposes, we may require additional verification
                for certain transactions, including but not limited to providing identification documents or
                verification codes.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">2. Payment Timing and Process</h2>
              <p>
                2.1 <strong>Booking Payment:</strong> Full payment is required at the time of booking to confirm your
                reservation.
              </p>
              <p>
                2.2 <strong>Security Deposit:</strong> A security deposit may be required at the time of vehicle pickup.
                The amount will be specified in your rental agreement and will be pre-authorized on your credit card.
              </p>
              <p>
                2.3 <strong>Additional Charges:</strong> Additional charges may be applied to your payment method after
                the rental period for:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Fuel if the vehicle is not returned with the same fuel level as at pickup</li>
                <li>Late returns</li>
                <li>Traffic or parking violations</li>
                <li>Damage to the vehicle not covered by insurance</li>
                <li>Cleaning fees for excessive dirt or odors</li>
                <li>Toll fees or other road charges</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">3. Currency and Exchange Rates</h2>
              <p>
                3.1 <strong>Pricing Currency:</strong> All prices on our Service are displayed in Euros (€) unless
                otherwise specified.
              </p>
              <p>
                3.2 <strong>Currency Conversion:</strong> If you make a payment in a currency other than Euros, the
                conversion will be processed by your payment provider at their current exchange rate. We are not
                responsible for any fees or exchange rate differences applied by your payment provider.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">4. Pricing and Taxes</h2>
              <p>
                4.1 <strong>Price Components:</strong> The total price displayed during the booking process includes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Base rental rate</li>
                <li>Mandatory insurance</li>
                <li>Applicable taxes and fees</li>
              </ul>
              <p>
                4.2 <strong>Optional Add-ons:</strong> Additional services such as GPS, child seats, additional
                insurance coverage, or other extras will be clearly displayed as optional add-ons with their respective
                prices.
              </p>
              <p>
                4.3 <strong>Price Guarantee:</strong> Once your booking is confirmed, the price will not change unless
                you modify your reservation or incur additional charges as outlined in section 2.3.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">5. Refunds and Cancellations</h2>
              <p>
                5.1 <strong>Cancellation Policy:</strong> Our standard cancellation policy allows for free cancellation
                up to 48 hours before the scheduled pickup time. Cancellations made less than 48 hours before pickup may
                incur a cancellation fee of up to 100% of the booking amount.
              </p>
              <p>
                5.2 <strong>Refund Process:</strong> Refunds will be processed to the original payment method used for
                the booking. Refunds typically take 5-10 business days to appear on your account, depending on your
                payment provider.
              </p>
              <p>
                5.3 <strong>No-Show Policy:</strong> If you fail to pick up the vehicle at the scheduled time without
                prior notification, this will be considered a no-show and no refund will be provided.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">6. Payment Security</h2>
              <p>
                6.1 <strong>Data Security:</strong> All payment transactions are processed through secure and
                PCI-compliant payment gateways. We do not store your complete credit card information on our servers.
              </p>
              <p>
                6.2 <strong>Fraud Prevention:</strong> We employ various fraud prevention measures to protect both our
                customers and our business. Suspicious transactions may be subject to additional verification or may be
                declined.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">7. Invoicing</h2>
              <p>
                7.1 <strong>Electronic Invoices:</strong> All invoices will be sent electronically to the email address
                provided during the booking process.
              </p>
              <p>
                7.2 <strong>Invoice Content:</strong> Invoices will include all relevant details of your rental,
                including the base rate, additional services, taxes, and any other charges.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">8. Disputes and Chargebacks</h2>
              <p>
                8.1 <strong>Dispute Resolution:</strong> If you have any concerns or disputes regarding charges on your
                account, please contact our customer service team before initiating a chargeback with your payment
                provider.
              </p>
              <p>
                8.2 <strong>Chargeback Consequences:</strong> Fraudulent or unwarranted chargebacks may result in the
                termination of your account and may affect your ability to use our Service in the future.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">9. Changes to Terms of Payment</h2>
              <p>
                We reserve the right to modify these Terms of Payment at any time. Any changes will be effective
                immediately upon posting on our Service. Your continued use of our Service after such changes
                constitutes your acceptance of the new Terms of Payment.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact Us</h2>
              <p>If you have any questions about these Terms of Payment, please contact us at:</p>
              <p>
                Email: payments@jolzt.com
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
