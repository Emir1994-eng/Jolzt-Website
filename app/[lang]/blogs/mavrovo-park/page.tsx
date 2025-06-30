// app/[lang]/blogs/mavrovo-park.tsx

import MavrovoPark from '@/components/blogs/MavrovoPark';
import { Metadata } from 'next';

interface PageProps {
  params: { lang: string };
}

// SEO metadata for the page
export const metadata: Metadata = {
  title: 'Mavrovo National Park - Jolzt Blog',
  description: 'Discover Mavrovo National Park with Jolzt: a guide to hiking, skiing, and exploring one of North Macedonia’s most beautiful natural areas.',
};

export default function MavrovoParkPage({ params }: PageProps) {
  console.log('Language parameter:', params.lang);

  return (
    <main className="max-w-3xl mx-auto p-4">
      <MavrovoPark />
    </main>
  );
}
