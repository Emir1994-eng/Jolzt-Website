// components/HikingDestinations.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import hikingData from '@/blogs/hikingDestinations.json';

interface Destination {
  name: string;
  description: string;
  trail_highlights?: string[];
  top_trails?: string[];
  top_hike?: string;
  other_highlights?: string[];
  trail_details?: string[];
  tip: string;
}

interface HikingData {
  title: string;
  introduction: string;
  destinations: Destination[];
  explore_with_jolzt: {
    heading: string;
    description: string;
    reasons: string[];
  };
  conclusion: {
    text: string;
    cta: string;
  };
}

const HikingDestinations: React.FC = () => {
  const data: HikingData = hikingData;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen max-h-[800px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40">
          <Image 
            src="/hiking-hero.jpg" 
            alt="Hiking in North Macedonia"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {data.title}
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Discover breathtaking trails with Jolzt
          </p>
          <Link 
            href="/book" 
            className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Your Adventure
          </Link>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 leading-relaxed text-center">
          {data.introduction}
        </p>
      </section>

      {/* Main Image Section */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-xl">
          <Image 
            src="/hiking-main.jpg" 
            alt="Hiking trail in North Macedonia"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Destinations */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {data.destinations.map((destination, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-orange-500">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {destination.name}
                </h2>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                
                {destination.trail_highlights && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-orange-600 mb-2">Trail Highlights:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {destination.trail_highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {destination.top_trails && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-orange-600 mb-2">Top Trails:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {destination.top_trails.map((trail, i) => (
                        <li key={i}>{trail}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {destination.top_hike && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-orange-600 mb-2">Top Hike:</h3>
                    <p className="text-gray-600">{destination.top_hike}</p>
                  </div>
                )}

                {destination.trail_details && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-orange-600 mb-2">Trail Details:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {destination.trail_details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-orange-700 font-medium">Pro Tip: {destination.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore with Jolzt */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            {data.explore_with_jolzt.heading}
          </h2>
          <p className="text-xl text-center mb-12">
            {data.explore_with_jolzt.description}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {data.explore_with_jolzt.reasons.map((reason, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-orange-200 mb-4">0{index + 1}</div>
                <p className="text-orange-50">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xl mb-8">
            {data.conclusion.text}
          </p>
          <Link 
            href="/book" 
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {data.conclusion.cta}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HikingDestinations;