"use client"

interface SocialProofProps {
  dictionary: {
    title: string
    subtitle: string
    stats: {
      value: string
      label: string
    }[]
  }
}

export function SocialProof({ dictionary }: SocialProofProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">{dictionary.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{dictionary.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {dictionary.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-orange-200 group"
            >
              <div className="text-4xl font-bold text-orange-500 mb-3">{stat.value.replace("100+", "5+")}</div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
