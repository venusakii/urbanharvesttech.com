import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Ruler, Leaf } from "lucide-react"

const systems = [
  {
    name: "VertiFarm Tower",
    image: "/modern-vertical-garden-tower-with-led-grow-lights.jpg",
    price: "$899",
    capacity: "24 plants",
    height: "180cm",
    features: ["Modular design", "Integrated LED", "Hydroponic ready", "Auto-watering"],
    spaceSaving: "95%",
    description: "Stackable tower system perfect for apartments and small spaces.",
  },
  {
    name: "GreenWall Pro",
    image: "/vertical-living-wall-system-with-modular-panels.jpg",
    price: "$1,299",
    capacity: "48 plants",
    height: "200cm",
    features: ["Wall-mounted", "Drip irrigation", "Removable panels", "Smart monitoring"],
    spaceSaving: "97%",
    description: "Transform any wall into a productive vertical garden.",
  },
  {
    name: "MicroFarm Cube",
    image: "/compact-indoor-farming-cube-with-transparent-walls.jpg",
    price: "$599",
    capacity: "12 plants",
    height: "90cm",
    features: ["Countertop size", "Full spectrum LED", "Climate controlled", "App connected"],
    spaceSaving: "92%",
    description: "Compact solution for herbs, greens, and microgreens.",
  },
]

export default function VerticalSystemsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 vertical-lines">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">Space-Saving Solutions</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Vertical <span className="text-secondary neon-glow-secondary">Farming Systems</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Maximize your growing potential with stackable, modular systems designed for urban spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {systems.map((system, index) => (
              <Card key={index} className="glass-panel overflow-hidden flex flex-col">
                {/* Image */}
                <div className="relative h-64 bg-muted/20">
                  <img
                    src={system.image || "/placeholder.svg"}
                    alt={system.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">{system.spaceSaving} Space Saved</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-foreground mb-2">{system.name}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{system.description}</p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="glass-panel p-3 rounded-lg border border-secondary/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Leaf className="w-4 h-4 text-secondary" />
                        <span className="text-xs text-muted-foreground">Capacity</span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">{system.capacity}</span>
                    </div>
                    <div className="glass-panel p-3 rounded-lg border border-secondary/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Ruler className="w-4 h-4 text-secondary" />
                        <span className="text-xs text-muted-foreground">Height</span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">{system.height}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h3 className="text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
                      Features
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {system.features.map((feature, i) => (
                        <Badge key={i} variant="outline" className="text-xs glass-panel border-secondary/20">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="mt-auto pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-foreground">{system.price}</span>
                      <span className="text-sm text-muted-foreground">+ free shipping</span>
                    </div>
                    <Button className="w-full neon-glow">Configure Your System</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
