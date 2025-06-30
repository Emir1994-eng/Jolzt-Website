// app/[lang]/blogs/matka-canyon.tsx

import MatkaCanyon from '@/components/blogs/MatkaCanyon';
import { Metadata } from 'next';

interface PageProps {
  params: { lang: string };
}

// Optional SEO metadata for the page
export const metadata: Metadata = {
  title: 'Matka Canyon - Jolzt Blog',
  description: 'Discover Matka Canyon: a guide to hiking, kayaking, and exploring this stunning Macedonian landmark with Jolzt.',
};

export default function MatkaCanyonPage({ params }: PageProps) {
  console.log('Language parameter:', params.lang);

  return (
    <main className="max-w-3xl mx-auto p-4">
      <MatkaCanyon />
    </main>
  );
}
