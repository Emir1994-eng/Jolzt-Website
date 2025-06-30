// components/MavrovoPark.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mavrovoData from '@/blogs/mavrovoPark.json';

const MavrovoPark: React.FC = () => {
    const data = mavrovoData;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-96 bg-gray-800">
                <Image
                    src="/mavrovo-hero.jpg"
                    alt="Mavrovo National Park"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {data.title}
                        </h1>
                        <p className="text-xl text-white max-w-2xl mx-auto">
                            {data.meta.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <section className="py-12 px-6 max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-8">
                    {data.introduction}
                </p>

                {/* Main Image */}
                <div className="relative h-64 md:h-96 w-full mb-12 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src="/mavrovo-main.jpg"
                        alt="Mavrovo National Park Landscape"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>

            {/* Content Sections */}
            <div className="max-w-4xl mx-auto px-6 pb-16 space-y-16">
                {data.sections.map((section, index) => (
                    <section key={index} className="scroll-mt-20" id={`section-${index}`}>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-orange-500 inline-block">
                            {section.heading}
                        </h2>

                        {section.description && (
                            <p className="text-gray-700 mb-6">{section.description}</p>
                        )}

                        {/* Render different section types */}
                        {section.peaks && (
                            <div className="space-y-4">
                                {section.peaks.map((peak, i) => (
                                    <div key={i} className="bg-orange-50 p-4 rounded-lg">
                                        <p className="font-medium text-orange-700">{peak}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.spots && (
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                {section.spots.map((spot, i) => (
                                    <li key={i}>{spot}</li>
                                ))}
                            </ul>
                        )}

                        {section.wildlife && (
                            <div className="space-y-4">
                                <h3 className="font-medium text-gray-900">Wildlife:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {section.wildlife.map((animal, i) => (
                                        <span key={i} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                                            {animal}
                                        </span>
                                    ))}
                                </div>
                                {section.birds && (
                                    <>
                                        <h3 className="font-medium text-gray-900">Birds:</h3>
                                        <p className="text-gray-700">{section.birds}</p>
                                    </>
                                )}
                            </div>
                        )}

                        {section.gems && (
                            <div className="space-y-6">
                                {section.gems.map((gem, i) => (
                                    <div key={i} className="border-l-4 border-orange-500 pl-4">
                                        <h3 className="font-bold text-gray-900">{gem.name}</h3>
                                        <p className="text-gray-700">{gem.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.adventures && (
                            <div className="space-y-6">
                                {section.adventures.map((adventure, i) => (
                                    <div key={i}>
                                        <h3 className="font-bold text-gray-900">{adventure.type}</h3>
                                        {adventure.description && (
                                            <p className="text-gray-700 mb-2">{adventure.description}</p>
                                        )}
                                        {adventure.trails && (
                                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                                {adventure.trails.map((trail, j) => (
                                                    <li key={j}>{trail}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.facts && (
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                {section.facts.map((fact, i) => (
                                    <li key={i}>{fact}</li>
                                ))}
                            </ul>
                        )}

                        {section.tips && (
                            <div className="space-y-4">
                                {Object.entries(section.tips).map(([key, value], i) => (
                                    <div key={i}>
                                        <h3 className="font-medium text-gray-900">{key}:</h3>
                                        {Array.isArray(value) && (
                                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                                {value.map((item, j) => (
                                                    <li key={j}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.benefits && (
                            <div className="bg-orange-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-4">Why Choose Jolzt:</h3>
                                <ul className="space-y-3">
                                    {section.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-orange-600 mr-2">•</span>
                                            <span className="text-gray-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </section>
                ))}
            </div>

            {/* Footer CTA */}
            <section className="bg-orange-600 text-white py-12">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-bold mb-6">Ready to Explore Mavrovo?</h2>
                    <Link
                        href="/book"
                        className="inline-block bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium shadow-lg"
                    >
                        Book Your Adventure
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default MavrovoPark;