// app/[lang]/blogs/hiking-destinations.tsx

import HikingDestinations from '@/components/blogs/HikingDestinations';
import { Metadata } from 'next';

interface PageProps {
  params: { lang: string };
}

// Optional SEO metadata for the page
export const metadata: Metadata = {
  title: 'Top Hiking Destinations - Jolzt Blog',
  description: 'Explore the best hiking destinations in North Macedonia and discover new trails with Jolzt for your next outdoor adventure.',
};

export default function HikingDestinationsPage({ params }: PageProps) {
  console.log('Language parameter:', params.lang);

  return (
    <main className="max-w-3xl mx-auto p-4">
      <HikingDestinations />
    </main>
  );
}
