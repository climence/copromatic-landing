import React from "react"

const stats = [
  { number: "150+", label: "Syndics partenaires" },
  { number: "85k+", label: "Copropriétaires gérés" },
  { number: "99.9%", label: "Disponibilité" },
  { number: "80+", label: "Formations e-learning" },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 