"use client"

import { Leaf, Zap, BarChart3, Settings } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Settings,
    title: "Install Smart Sensors",
    description:
      "Place IoT sensors in your garden to monitor soil moisture, temperature, light levels, and air quality in real-time.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Connect Automation",
    description: "Link automated watering systems and LED grow lights to respond intelligently to your plant's needs.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Monitor & Optimize",
    description: "Track growth data through our dashboard and receive AI-powered recommendations for better yields.",
  },
  {
    number: "04",
    icon: Leaf,
    title: "Harvest Success",
    description: "Enjoy healthier plants, reduced water waste, and maximum space efficiency in your urban garden.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Vertical lines background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-bio-green to-transparent"
            style={{ left: `${(i + 1) * 8.33}%` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            How <span className="text-sky-cyan">Smart Farming</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            From installation to harvest, our technology simplifies urban gardening in four easy steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative group">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-bio-green to-transparent" />
                )}

                <div className="relative rounded-2xl p-6 bg-glass-panel border border-white/10 backdrop-blur-lg hover:border-bio-green/30 transition-all duration-500 h-full">
                  <div className="text-6xl font-bold text-bio-green/20 mb-4">{step.number}</div>

                  <div className="w-12 h-12 rounded-xl bg-bio-green/10 flex items-center justify-center mb-4 group-hover:bg-bio-green/20 transition-colors">
                    <Icon className="w-6 h-6 text-bio-green" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-bio-green transition-colors">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
