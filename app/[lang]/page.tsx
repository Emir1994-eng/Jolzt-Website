import { redirect } from "next/navigation"
import HomePage from "@/components/home-page"
import { supportedLanguages } from "./layout"

type SupportedLanguage = typeof supportedLanguages[number];

export default function LocalizedHomePage({ params }: { params: { lang: string } }) {
  const lang = params.lang as SupportedLanguage;

  if (!supportedLanguages.includes(lang)) {
    redirect("/en");
  }

  return <HomePage lang={lang} />;
}