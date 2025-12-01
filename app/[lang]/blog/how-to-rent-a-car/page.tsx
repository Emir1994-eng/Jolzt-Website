// app/[lang]/blogs/matka-canyon.tsx

import RentCarGuide from '@/components/blogs/RentCarGuide';
import { Metadata } from 'next';

interface PageProps {
  params: { lang: string };
}

// Optional SEO metadata for the page
export const metadata: Metadata = {
  title: 'How to Rent a Car in Macedonia Without Surprises - Jolzt Blog',
  description: 'Clear prices. Smooth pickup. No drama. Your guide to renting a car in Macedonia with confidence.',
};

export default function MatkaCanyonPage({ params }: PageProps) {
  console.log('Language parameter:', params.lang);

  return (
    <main className="max-w-3xl mx-auto p-4">
      <RentCarGuide />
    </main>
  );
}
