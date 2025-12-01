import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Droplets, Sun, Wind, Wifi } from "lucide-react"

const automationDevices = [
  {
    name: "SmartWater Hub",
    image: "/smart-watering-system-controller-with-digital-disp.jpg",
    price: "$279",
    type: "Watering System",
    icon: Droplets,
    features: ["Scheduled watering", "Soil moisture detection", "Weather integration", "8 zone control"],
    savings: "70% water reduction",
    automation: {
      schedule: "Customizable",
      sensors: "4 included",
      zones: "8 zones",
      mobile: "iOS & Android",
    },
  },
  {
    name: "LightSync Pro",
    image: "/led-grow-light-system-with-smart-controls.jpg",
    price: "$349",
    type: "Lighting System",
    icon: Sun,
    features: ["Full spectrum LED", "Sunrise/sunset simulation", "Growth stage profiles", "Energy efficient"],
    savings: "60% energy savings",
    automation: {
      schedule: "Automated",
      sensors: "Light sensor",
      zones: "Multi-zone",
      mobile: "iOS & Android",
    },
  },
  {
    name: "ClimateControl X",
    image: "/climate-control-system-with-ventilation-fans.jpg",
    price: "$449",
    type: "Climate System",
    icon: Wind,
    features: ["Temperature control", "Humidity management", "Air circulation", "CO2 monitoring"],
    savings: "Optimal conditions 24/7",
    automation: {
      schedule: "AI-powered",
      sensors: "Multi-sensor",
      zones: "4 zones",
      mobile: "iOS & Android",
    },
  },
]

export default function AutomationPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 vertical-lines">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Set It & Forget It</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Automation <span className="text-primary neon-glow">Systems</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Intelligent control systems that manage watering, lighting, and climate automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {automationDevices.map((device, index) => (
              <Card key={index} className="glass-panel overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  {/* Product Image */}
                  <div className="relative rounded-xl overflow-hidden bg-muted/20">
                    <img
                      src={device.image || "/placeholder.svg"}
                      alt={device.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground flex items-center gap-2">
                        <Zap className="w-3 h-3" />
                        Automated
                      </Badge>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <device.icon className="w-5 h-5 text-primary" />
                        </div>
                        <Badge variant="outline" className="glass-panel border-primary/20">
                          {device.type}
                        </Badge>
                      </div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">{device.name}</h2>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-primary">{device.price}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm font-medium text-secondary">{device.savings}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                        Key Features
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {device.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Automation Details */}
                    <div className="glass-panel p-4 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-2 mb-4">
                        <Wifi className="w-4 h-4 text-primary" />
                        <h3 className="text-sm font-semibold text-foreground">Automation Capabilities</h3>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Schedule:</span>
                          <span className="text-foreground font-medium">{device.automation.schedule}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Sensors:</span>
                          <span className="text-foreground font-medium">{device.automation.sensors}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Control Zones:</span>
                          <span className="text-foreground font-medium">{device.automation.zones}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Mobile App:</span>
                          <span className="text-foreground font-medium">{device.automation.mobile}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3 pt-4">
                      <Button className="flex-1 neon-glow">Start Automating</Button>
                      <Button variant="outline" className="glass-panel border-secondary/30 bg-transparent">
                        View Demo
                      </Button>
                    </div>
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
