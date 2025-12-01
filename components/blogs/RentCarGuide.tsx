import React from "react";
import Image from "next/image";
import Link from "next/link";

const RentCarGuide: React.FC = () => {
    return (
        <div className="bg-white text-gray-900">

            {/* HERO SECTION */}
            <section className="relative h-[80vh] w-full bg-gray-900 flex items-center justify-center text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        How to Rent a Car in Macedonia Without Surprises
                    </h1>
                    <p className="text-xl text-white opacity-90 mb-8">
                        Clear prices. Smooth pickup. No drama.
                    </p>
                    <Link
                        href="/"
                        className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-full text-white text-lg font-medium shadow-lg transition-all hover:scale-105"
                    >
                        Book Your Car Today
                    </Link>
                </div>
            </section>

            {/* INTRO */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <p className="text-lg leading-relaxed">
                    Renting a car in Macedonia shouldn’t feel like a gamble. Yet many
                    travelers — both diaspora coming home and tourists visiting for the
                    first time — experience unclear prices, surprise counter fees, vague
                    insurance terms, or chaotic airport pickup. This guide explains the
                    traps to avoid, what a transparent rental looks like, and how to book
                    with confidence.
                </p>
            </section>

            {/* WHY IT FEELS RISKY */}
            <section className="max-w-4xl mx-auto px-6 py-10">
                <h2 className="text-3xl font-bold mb-4">
                    Why Renting a Car in Macedonia Feels Risky
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                    Most travelers share the same frustrations: the price online wasn’t
                    the price at pickup, “full insurance included” turned out to be
                    unclear, and airport pickup sometimes feels like a scavenger hunt.
                    Many agencies operate informally — not necessarily dishonest, but
                    often confusing.
                </p>

                {/* VISUAL SUGGESTION */}
                <div className="relative w-full min-h-[500px] rounded-xl overflow-hidden shadow-xl mt-12">
                    <Image
                        src="/visual-1.png"
                        alt="Clear pricing visual suggestion"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>

            {/* 4 COMMON SURPRISES */}
            <section className="bg-orange-50 py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        The 4 Most Common “Surprises” With Local Car Rentals
                    </h2>

                    {/* Surprise 1 */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-orange-600 mb-4">
                            1. Price Differences at Pickup
                        </h3>
                        <p className="text-lg mb-4">
                            You book one price online… then at the counter they add airport
                            fees, mandatory insurance upgrades, or hidden mileage rules. A
                            transparent company shows the final price upfront — before you pay.
                        </p>

                        <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/visual-2.png"
                                alt="Price difference visual suggestion"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Surprise 2 */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-orange-600 mb-4">
                            2. Vague Insurance Coverage
                        </h3>
                        <p className="text-lg mb-4">
                            “Full insurance included” could mean anything from real coverage
                            to “you’ll find out at the counter.” A trustworthy rental explains
                            exactly what’s covered and what the excess is.
                        </p>

                        <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/visual-3.png"
                                alt="Insurance visual suggestion"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Surprise 3 */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-orange-600 mb-4">
                            3. Random Deposits & Extra Fees
                        </h3>
                        <p className="text-lg mb-4">
                            Many travelers discover unexpected deposits or extra charges only
                            at the airport. A transparent rental clearly states deposit
                            amount, extra fees, and when they apply — before booking.
                        </p>

                        <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/visual-4.png"
                                alt="Deposit visual suggestion"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Surprise 4 */}
                    <div>
                        <h3 className="text-2xl font-bold text-orange-600 mb-4">
                            4. Confusing Pickup & Drop-Off
                        </h3>
                        <p className="text-lg mb-4">
                            “Call us when you land” often means long waits or unclear meeting
                            points. A smooth pickup includes exact instructions, timing, and
                            an easy-to-find meeting location.
                        </p>

                        <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/visual-5.png"
                                alt="Pickup instructions visual suggestion"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CHECKLIST */}
            <section className="max-w-4xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold mb-8">
                    Checklist: How to Know If a Rental Is Transparent
                </h2>

                <ul className="space-y-4 text-lg">
                    <li>✔ Total price shown before payment</li>
                    <li>✔ Insurance explained clearly</li>
                    <li>✔ Deposit amount visible upfront</li>
                    <li>✔ Clear airport pickup instructions</li>
                    <li>✔ Easy-to-understand cancellation rules</li>
                </ul>

                <div className="relative w-full min-h-[700px] rounded-xl overflow-hidden shadow-lg mt-8">
                    <Image
                        src="/visual-5.png"
                        alt="Checklist visual suggestion"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>

            {/* SMOOTH PICKUP */}
            <section className="bg-orange-600 text-white py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">What a Smooth Pickup Looks Like</h2>

                    <p className="text-lg mb-10 leading-relaxed">
                        The ideal rental experience is straightforward: total price locked
                        in, clear instructions before your flight, and a quick meeting point
                        experience. No confusion, no searching the parking lot.
                    </p>

                    <div className="relative w-full min-h-[900px] rounded-xl overflow-hidden shadow-xl mt-12">
                        <Image
                            src="/visual-7.png"
                            alt="Diaspora vs tourist visual"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* DIASPORA VS TOURISTS */}
            <section className="max-w-5xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold mb-10 text-center">
                    Diaspora vs. Tourists: Different Concerns, Same Solution
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-orange-600">Diaspora Travelers</h3>
                        <p className="text-lg">
                            They want a stress-free start to their visit — no counter arguments, no
                            hidden fees. Spending time with family matters more than saving €20.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-orange-600">Foreign Tourists</h3>
                        <p className="text-lg">
                            They want legitimacy, clarity, and peace of mind. Clear pricing and
                            transparent insurance reassure them they’re in good hands.
                        </p>
                    </div>
                </div>

                <div className="relative w-full min-h-[500px] rounded-xl overflow-hidden shadow-xl mt-12">
                    <Image
                        src="/visual-8.png"
                        alt="Diaspora vs tourist visual"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>

            {/* CONCLUSION */}
            <section className="bg-gray-900 text-white py-20 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">A Calmer Way to Book</h2>
                    <p className="text-lg leading-relaxed mb-12">
                        A great rental experience is built on transparency: clear pricing,
                        clear insurance, clear pickup steps. When everything is shown upfront,
                        you avoid surprises and enjoy a smoother trip.
                    </p>

                    <Link
                        href="/"
                        className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-full text-white text-lg font-medium shadow-lg transition-all hover:scale-105"
                    >
                        Book Your Car Today
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default RentCarGuide;
