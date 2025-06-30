// app/[lang]/blogs/historic-sites.tsx

import HistoricSites from "@/components/blogs/HistoricSites";
import { Metadata } from 'next';

interface PageProps {
  params: { lang: string };
}

// SEO metadata for the page
export const metadata: Metadata = {
  title: 'Top Historic Sites - Jolzt Blog',
  description: 'Explore the top historic sites in North Macedonia with Jolzt and discover the rich cultural heritage of the region during your travels.',
};

export default function HistoricSitesPage({ params }: PageProps) {
  console.log('Language parameter:', params.lang);

  return (
    <main className="max-w-3xl mx-auto p-4">
      <HistoricSites />
    </main>
  );
}
