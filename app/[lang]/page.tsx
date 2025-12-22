import { redirect } from "next/navigation"
import HomePage from "@/components/home-page"
import { supportedLanguages } from "./layout"

type SupportedLanguage = typeof supportedLanguages[number];

export default async function LocalizedHomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const supportedLang = lang as SupportedLanguage;

  if (!supportedLanguages.includes(supportedLang)) {
    redirect("/en");
  }

  return <HomePage lang={supportedLang} />;
}