import React from 'react';
import Link from 'next/link';
import historicData from '@/blogs/historicSites.json';

interface Highlight {
  name: string;
  details: string;
}

interface Site {
  name: string;
  description: string;
  highlights: Highlight[];
  tip: string;
}

interface HistoricData {
  title: string;
  description: string;
  introduction: string;
  sites: Site[];
  travel_partner: {
    name: string;
    description: string;
    benefits: string[];
    conclusion: string;
  };
}

const HistoricSites: React.FC = () => {
  const data: HistoricData = historicData;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-orange-600 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h1>
          <p className="text-xl">{data.description}</p>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <p className="text-lg text-gray-700">{data.introduction}</p>
      </section>

      {/* Sites List */}
      <section className="pb-12 max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {data.sites.map((site, index) => (
            <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{site.name}</h2>
              <p className="text-gray-600 mb-4">{site.description}</p>
              
              <div className="space-y-2 mb-4">
                {site.highlights.map((highlight, i) => (
                  <div key={i}>
                    <span className="font-medium text-orange-600">{highlight.name}: </span>
                    <span className="text-gray-600">{highlight.details}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-orange-50 px-4 py-2 rounded">
                <p className="text-orange-700">
                  <span className="font-medium">Tip: </span>
                  {site.tip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Partner */}
      <section className="bg-orange-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Explore with {data.travel_partner.name}
          </h2>
          <p className="text-gray-700 mb-6">{data.travel_partner.description}</p>
          
          <ul className="space-y-3">
            {data.travel_partner.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-6">{data.travel_partner.conclusion}</p>
          <Link 
            href="/book" 
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded font-medium"
          >
            Book Your Trip
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default HistoricSites;