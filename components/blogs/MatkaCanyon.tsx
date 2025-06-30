// components/MatkaCanyon.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import matkaData from "@/blogs/canyonMatka.json"; // Adjust the import path as necessary

interface Attraction {
  title: string;
  description: string;
}

interface MatkaCanyonData {
  title: string;
  introduction: string;
  mainContent: {
    section: string;
    description: string;
  };
  whyJolzt: {
    header: string;
    description: string;
    benefits: string[];
  };
  matkaCanyon: {
    header: string;
    description: string;
    attractions: Attraction[];
  };
  tripBenefits: {
    header: string;
    benefits: string[];
    summary: string;
  };
  vision: {
    header: string;
    description: string;
    destinations: string[];
  };
  conclusion: {
    header: string;
    description: string;
    callToAction: string;
  };
}

const MatkaCanyon: React.FC = () => {
  const data: MatkaCanyonData = matkaData;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Full-width Image */}
      <div className="relative h-screen max-h-[800px] overflow-hidden">
        {/* Hero Image - Replace with your actual image */}
        <div className="absolute inset-0 bg-black/40">
          <Image 
            src="/matka-canyon-hero.jpg" 
            alt="Matka Canyon"
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
            Visit today with a rental car from Jolzt
          </p>
          <Link 
            href="/book" 
            className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Your Adventure
          </Link>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {data.mainContent.section}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {data.introduction}
          </p>
        </div>
      </section>

      {/* Main Image Section */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-xl">
          <Image 
            src="/matka-canyon-main.jpg" 
            alt="Matka Canyon Landscape"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Why Jolzt Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {data.whyJolzt.header}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {data.whyJolzt.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {data.whyJolzt.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <div className="text-orange-600 text-3xl font-bold mb-4">0{index + 1}</div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Matka Canyon Attractions */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {data.matkaCanyon.header}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {data.matkaCanyon.description}
            </p>
          </div>
          
          <div className="space-y-12">
            {data.matkaCanyon.attractions.map((attraction, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">
                  {attraction.title}
                </h3>
                <p className="text-gray-600 mb-4">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trip Benefits */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            {data.tripBenefits.header}
          </h2>
          
          <ul className="space-y-6">
            {data.tripBenefits.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4">
                  <div className="bg-orange-500 rounded-full p-2">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-xl text-center mt-12 italic">
            {data.tripBenefits.summary}
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {data.vision.header}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {data.vision.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {data.vision.destinations.map((destination, index) => (
              <span 
                key={index} 
                className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {destination}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Second Image Section */}
      <div className="max-w-5xl mx-auto px-6 my-16">
        <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-xl">
          <Image 
            src="/matka-canyon-secondary.jpg" 
            alt="Matka Canyon Details"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Conclusion */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            {data.conclusion.header}
          </h2>
          <p className="text-lg mb-12">
            {data.conclusion.description}
          </p>
          <Link 
            href="/book" 
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {data.conclusion.callToAction}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MatkaCanyon;