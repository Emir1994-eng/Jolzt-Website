// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-selector"
import FacebookPixelInitializer from './FacebookPixelInitializer'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jolzt - Car Rental",
  description: "Rent a car in North Macedonia",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> {/* Default language, will be updated by provider */}
      <body className={inter.className}>
        <FacebookPixelInitializer />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}