import { Card } from "@/components/ui/card"
import { Cpu, Gauge, Sprout, Wifi, Zap, Database } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "AI-Based Plant Care",
    description: "Machine learning algorithms analyze your plants and provide intelligent recommendations.",
  },
  {
    icon: Gauge,
    title: "Advanced Sensors",
    description: "Real-time monitoring of soil, air quality, humidity, and nutrient levels.",
  },
  {
    icon: Sprout,
    title: "Vertical Farming",
    description: "Maximize space with stackable modules designed for urban environments.",
  },
  {
    icon: Wifi,
    title: "IoT Connected",
    description: "Control and monitor your garden from anywhere with seamless connectivity.",
  },
  {
    icon: Zap,
    title: "Automated Systems",
    description: "Set it and forget it with smart watering, lighting, and climate control.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Track growth patterns and optimize yields with comprehensive insights.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Technology that helps your <span className="text-primary">garden think</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            From compact apartments to rooftop installations, our smart systems adapt to any urban space.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass-panel p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
