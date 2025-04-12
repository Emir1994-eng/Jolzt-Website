import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-bold mb-4">JOLZT</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm hover:underline">
                  How Jolzt Works
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/travel-guides" className="text-sm hover:underline">
                  Travel Guides & Destinations
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-sm hover:underline">
                  Partner with Jolzt
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  Help & Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-of-service" className="text-sm hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-payment" className="text-sm hover:underline">
                  Terms of Payment
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Download App</h3>
            <p className="text-sm text-slate-400 mb-4">Get the Jolzt app for the best experience</p>
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-white text-white hover:bg-white/10 justify-start"
              >
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="App Store"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Download on App Store
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-white text-white hover:bg-white/10 justify-start"
              >
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Google Play"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Get it on Google Play
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Button variant="outline" size="sm" className="bg-transparent border-white text-white hover:bg-white/10">
                EN
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent border-white text-white hover:bg-white/10">
                MK
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent border-white text-white hover:bg-white/10">
                SQ
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-8 border-t border-slate-700">
          <div className="text-sm text-slate-400">© Jolzt {new Date().getFullYear()}</div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/terms-of-service" className="text-sm text-slate-400 hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="text-sm text-slate-400 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-payment" className="text-sm text-slate-400 hover:underline">
              Terms of Payment
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
