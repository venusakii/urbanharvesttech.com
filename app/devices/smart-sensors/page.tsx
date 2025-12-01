import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Thermometer, Droplets, Sun, Activity } from "lucide-react"

const sensors = [
  {
    name: "HarvestSense Pro",
    image: "/smart-soil-sensor-with-digital-display-and-probes.jpg",
    price: "$149",
    rating: 4.8,
    features: ["Soil moisture", "NPK nutrients", "pH levels", "Temperature"],
    specs: {
      connectivity: "WiFi + Bluetooth",
      battery: "6 months",
      range: "50 meters",
      waterproof: "IP67",
    },
    liveData: {
      temp: "22°C",
      moisture: "68%",
      light: "850 lux",
      nutrients: "92%",
    },
  },
  {
    name: "AirFlow Monitor X",
    image: "/modern-air-quality-sensor-with-led-indicators.jpg",
    price: "$199",
    rating: 4.9,
    features: ["CO2 levels", "Humidity", "Air quality", "Temperature"],
    specs: {
      connectivity: "WiFi",
      battery: "12 months",
      range: "100 meters",
      waterproof: "IP54",
    },
    liveData: {
      temp: "21°C",
      moisture: "55%",
      light: "N/A",
      nutrients: "N/A",
    },
  },
  {
    name: "LightLevel Analyzer",
    image: "/compact-light-sensor-device-with-solar-panel.jpg",
    price: "$89",
    rating: 4.7,
    features: ["Light intensity", "UV index", "Spectrum analysis", "Solar tracking"],
    specs: {
      connectivity: "Bluetooth",
      battery: "Solar powered",
      range: "30 meters",
      waterproof: "IP65",
    },
    liveData: {
      temp: "N/A",
      moisture: "N/A",
      light: "1200 lux",
      nutrients: "N/A",
    },
  },
]

export default function SmartSensorsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 vertical-lines">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Advanced Monitoring</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Smart <span className="text-primary neon-glow">Sensors</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Real-time data collection for soil health, air quality, and environmental conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {sensors.map((sensor, index) => (
              <Card key={index} className="glass-panel overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  {/* Product Image */}
                  <div className="relative rounded-xl overflow-hidden bg-muted/20">
                    <img
                      src={sensor.image || "/placeholder.svg"}
                      alt={sensor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-3xl font-bold text-foreground">{sensor.name}</h2>
                        <span className="text-2xl font-bold text-primary">{sensor.price}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-lg ${i < Math.floor(sensor.rating) ? "text-primary" : "text-muted"}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">{sensor.rating} / 5.0</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                        Key Features
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {sensor.features.map((feature, i) => (
                          <Badge key={i} variant="outline" className="glass-panel border-primary/20">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Live Data Simulation */}
                    <div className="glass-panel p-4 rounded-lg border border-primary/20">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-semibold text-foreground">Live Sensor Data</h3>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          <span className="text-xs text-muted-foreground">Active</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {sensor.liveData.temp !== "N/A" && (
                          <div className="flex items-center gap-2">
                            <Thermometer className="w-4 h-4 text-primary" />
                            <span className="text-sm text-muted-foreground">Temp:</span>
                            <span className="text-sm font-semibold text-foreground">{sensor.liveData.temp}</span>
                          </div>
                        )}
                        {sensor.liveData.moisture !== "N/A" && (
                          <div className="flex items-center gap-2">
                            <Droplets className="w-4 h-4 text-primary" />
                            <span className="text-sm text-muted-foreground">Moisture:</span>
                            <span className="text-sm font-semibold text-foreground">{sensor.liveData.moisture}</span>
                          </div>
                        )}
                        {sensor.liveData.light !== "N/A" && (
                          <div className="flex items-center gap-2">
                            <Sun className="w-4 h-4 text-primary" />
                            <span className="text-sm text-muted-foreground">Light:</span>
                            <span className="text-sm font-semibold text-foreground">{sensor.liveData.light}</span>
                          </div>
                        )}
                        {sensor.liveData.nutrients !== "N/A" && (
                          <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-primary" />
                            <span className="text-sm text-muted-foreground">Nutrients:</span>
                            <span className="text-sm font-semibold text-foreground">{sensor.liveData.nutrients}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div>
                      <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                        Specifications
                      </h3>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-muted-foreground">Connectivity:</span>
                          <span className="ml-2 text-foreground font-medium">{sensor.specs.connectivity}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Battery:</span>
                          <span className="ml-2 text-foreground font-medium">{sensor.specs.battery}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Range:</span>
                          <span className="ml-2 text-foreground font-medium">{sensor.specs.range}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Waterproof:</span>
                          <span className="ml-2 text-foreground font-medium">{sensor.specs.waterproof}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3 pt-4">
                      <Button className="flex-1 neon-glow">Add to Cart</Button>
                      <Button variant="outline" className="glass-panel border-secondary/30 bg-transparent">
                        Learn More
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
