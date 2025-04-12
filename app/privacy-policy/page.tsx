import Link from "next/link"
import Image from "next/image"
import { ChevronLeftIcon } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPolicyPage() {
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
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <div className="prose max-w-none">
              <p className="text-muted-foreground mb-6">Last updated: April 10, 2025</p>

              <p>
                Jolzt ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when you visit our website jolzt.com or use
                our mobile application (collectively, the "Service").
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our Service, you acknowledge that you
                have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, information we collect automatically when you
                use our Service, and information from third-party sources.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3">1.1 Information You Provide to Us</h3>
              <p>We may collect the following types of information when you use our Service:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, postal address, date of
                  birth, driver's license information, and payment information.
                </li>
                <li>
                  <strong>Account Information:</strong> Username, password, and profile information.
                </li>
                <li>
                  <strong>Rental Information:</strong> Rental dates, vehicle preferences, pickup and return locations,
                  and other booking details.
                </li>
                <li>
                  <strong>Communications:</strong> Information you provide when you contact our customer service or
                  communicate with us through the Service.
                </li>
                <li>
                  <strong>Survey Responses:</strong> Information you provide when you participate in surveys or
                  promotions.
                </li>
              </ul>

              <h3 className="text-lg font-medium mt-6 mb-3">1.2 Information We Collect Automatically</h3>
              <p>When you use our Service, we may automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Device Information:</strong> Information about your device, including IP address, device type,
                  operating system, browser type, and device identifiers.
                </li>
                <li>
                  <strong>Usage Information:</strong> Information about how you use our Service, including the pages you
                  visit, the time and duration of your visits, and the actions you take.
                </li>
                <li>
                  <strong>Location Information:</strong> With your consent, we may collect precise location information
                  from your device to provide location-based services.
                </li>
                <li>
                  <strong>Cookies and Similar Technologies:</strong> We use cookies and similar technologies to collect
                  information about your browsing behavior and preferences.
                </li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Providing, maintaining, and improving our Service</li>
                <li>Processing and managing your car rental bookings</li>
                <li>Verifying your identity and eligibility to rent vehicles</li>
                <li>Communicating with you about your bookings, account, and our Service</li>
                <li>Sending you marketing communications, promotions, and offers</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Analyzing usage patterns and trends to improve our Service</li>
                <li>Detecting, preventing, and addressing fraud, security issues, and technical problems</li>
                <li>Complying with legal obligations and enforcing our terms and policies</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Share Your Information</h2>
              <p>We may share your information with the following categories of recipients:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Service Providers:</strong> We may share your information with third-party service providers
                  who perform services on our behalf, such as payment processing, data analysis, email delivery,
                  hosting, and customer service.
                </li>
                <li>
                  <strong>Business Partners:</strong> We may share your information with our business partners, such as
                  car rental agencies, to fulfill your bookings and provide the services you request.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or
                  in response to valid requests by public authorities.
                </li>
                <li>
                  <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a
                  portion of our assets, your information may be transferred as part of that transaction.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share your information with third parties when you have
                  given us your consent to do so.
                </li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">4. Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Accessing, correcting, or deleting your personal information</li>
                <li>Objecting to or restricting the processing of your personal information</li>
                <li>
                  Requesting a copy of your personal information in a structured, commonly used, and machine-readable
                  format
                </li>
                <li>Withdrawing your consent at any time (where processing is based on consent)</li>
                <li>Opting out of marketing communications</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section
                below.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, disclosure, alteration, and destruction. However, no method of transmission
                over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">6. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">7. International Data Transfers</h2>
              <p>
                Your information may be transferred to, and processed in, countries other than the country in which you
                reside. These countries may have data protection laws that are different from the laws of your country.
                We take appropriate measures to ensure that your personal information remains protected in accordance
                with this Privacy Policy.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">8. Children's Privacy</h2>
              <p>
                Our Service is not directed to children under the age of 18, and we do not knowingly collect personal
                information from children under 18. If you are a parent or guardian and believe that your child has
                provided us with personal information, please contact us.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this
                Privacy Policy periodically for any changes.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p>
                Email: privacy@jolzt.com
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
