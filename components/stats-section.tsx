"use client"

import { TrendingUp, Droplet, Leaf, Users } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Active Urban Farmers",
    color: "bio-green",
  },
  {
    icon: Droplet,
    value: "40%",
    label: "Water Savings Average",
    color: "sky-cyan",
  },
  {
    icon: TrendingUp,
    value: "3x",
    label: "Faster Growth Rate",
    color: "bio-green",
  },
  {
    icon: Leaf,
    value: "2M+",
    label: "Plants Monitored Daily",
    color: "sky-cyan",
  },
]

export function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-urban-dark">
      {/* Glowing background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-bio-green/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-sky-cyan/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Growing <span className="text-bio-green">Impact</span> by the Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real results from real urban farmers using our smart farming technology.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-glass-panel border border-white/10 backdrop-blur-lg mb-4 group-hover:scale-110 transition-transform">
                  <Icon className={`w-8 h-8 text-${stat.color}`} />
                </div>
                <div className={`text-5xl font-bold mb-2 text-${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
