import { redirect } from "next/navigation";
import { supportedLanguages } from "./layout";
import HomepageSelector from "@/components/homepage-selector";

type SupportedLanguage = (typeof supportedLanguages)[number];

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const supportedLang = lang as SupportedLanguage;

  if (!supportedLanguages.includes(supportedLang)) {
    redirect("/en");
  }

  return (
    <HomepageSelector lang={supportedLang} />
  );
}
