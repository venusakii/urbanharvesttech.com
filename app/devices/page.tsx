import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Gauge, Sprout, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const deviceCategories = [
  {
    title: "Smart Sensors",
    description: "Advanced monitoring for soil, air, and environmental conditions",
    icon: Gauge,
    href: "/devices/smart-sensors",
    color: "primary",
  },
  {
    title: "Vertical Systems",
    description: "Space-saving modular solutions for urban environments",
    icon: Sprout,
    href: "/devices/vertical-systems",
    color: "secondary",
  },
  {
    title: "Automation",
    description: "Intelligent watering, lighting, and climate control",
    icon: Zap,
    href: "/devices/automation",
    color: "primary",
  },
]

export default function DevicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 vertical-lines">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Smart Farming <span className="text-primary">Devices</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Explore our collection of IoT-enabled devices designed for modern urban agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deviceCategories.map((category, index) => (
              <Link key={index} href={category.href}>
                <Card className="glass-panel p-8 hover:scale-105 transition-all cursor-pointer group h-full">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-foreground">{category.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{category.description}</p>
                  <div className="flex items-center text-primary group-hover:gap-2 transition-all">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
