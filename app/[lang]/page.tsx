import { redirect } from "next/navigation"
import HomePage from "@/components/home-page"
import { supportedLanguages } from "./layout"

export default function LocalizedHomePage({ params }: { params: { lang: string } }) {
  // Validate the language parameter
  if (!supportedLanguages.includes(params.lang)) {
    redirect("/en") // Redirect to English if language is not supported
  }

  return <HomePage lang={params.lang} />
}
