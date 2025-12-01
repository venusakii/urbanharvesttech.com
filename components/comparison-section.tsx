"use client"

import { Check, X } from "lucide-react"

const comparisons = [
  {
    feature: "Real-time Monitoring",
    traditional: false,
    smart: true,
  },
  {
    feature: "Automated Watering",
    traditional: false,
    smart: true,
  },
  {
    feature: "Space Efficiency",
    traditional: false,
    smart: true,
  },
  {
    feature: "Data-Driven Insights",
    traditional: false,
    smart: true,
  },
  {
    feature: "Remote Control",
    traditional: false,
    smart: true,
  },
  {
    feature: "Water Conservation",
    traditional: false,
    smart: true,
  },
  {
    feature: "24/7 Plant Care",
    traditional: false,
    smart: true,
  },
  {
    feature: "Growth Optimization",
    traditional: false,
    smart: true,
  },
]

export function ComparisonSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Why Choose <span className="text-bio-green">Smart Farming</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            See how technology transforms traditional gardening into an optimized growing experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-glass-panel backdrop-blur-lg">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/10">
              <div className="text-sm font-medium text-muted-foreground">Feature</div>
              <div className="text-center">
                <div className="text-sm font-bold text-steel-grey">Traditional</div>
                <div className="text-xs text-muted-foreground mt-1">Gardening</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-bio-green">Smart</div>
                <div className="text-xs text-muted-foreground mt-1">Urban Harvest</div>
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 p-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors"
              >
                <div className="text-sm font-medium">{item.feature}</div>
                <div className="flex justify-center">
                  {item.traditional ? (
                    <Check className="w-5 h-5 text-bio-green" />
                  ) : (
                    <X className="w-5 h-5 text-steel-grey/50" />
                  )}
                </div>
                <div className="flex justify-center">
                  {item.smart ? (
                    <Check className="w-5 h-5 text-bio-green" />
                  ) : (
                    <X className="w-5 h-5 text-steel-grey/50" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
