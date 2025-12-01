"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Ruler, Leaf, Sun, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function VerticalBuilderPage() {
  const [spaceWidth, setSpaceWidth] = useState([100])
  const [spaceHeight, setSpaceHeight] = useState([200])
  const [sunlight, setSunlight] = useState("partial")
  const [plantType, setPlantType] = useState("herbs")

  const calculateCapacity = () => {
    const area = (spaceWidth[0] * spaceHeight[0]) / 10000
    const baseCapacity = Math.floor(area * 8)
    return baseCapacity
  }

  const getRecommendedSystems = () => {
    if (spaceHeight[0] >= 180) {
      return [
        { name: "VertiFarm Tower", capacity: "24 plants", price: "$899" },
        { name: "GreenWall Pro", capacity: "48 plants", price: "$1,299" },
      ]
    } else if (spaceHeight[0] >= 100) {
      return [
        { name: "MicroFarm Cube", capacity: "12 plants", price: "$599" },
        { name: "Compact Stack", capacity: "18 plants", price: "$749" },
      ]
    } else {
      return [
        { name: "Countertop Garden", capacity: "6 plants", price: "$299" },
        { name: "Window Box Pro", capacity: "8 plants", price: "$349" },
      ]
    }
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 vertical-lines">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">Interactive Tool</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Vertical Garden <span className="text-secondary neon-glow-secondary">Builder</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Configure your space and get personalized device recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Builder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Configuration Panel */}
            <Card className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Configure Your Space</h2>

              <div className="space-y-6">
                {/* Space Dimensions */}
                <div>
                  <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wide">
                    Space Dimensions
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm text-foreground">Width</label>
                        <span className="text-sm font-semibold text-primary">{spaceWidth[0]} cm</span>
                      </div>
                      <Slider
                        value={spaceWidth}
                        onValueChange={setSpaceWidth}
                        min={30}
                        max={300}
                        step={10}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm text-foreground">Height</label>
                        <span className="text-sm font-semibold text-primary">{spaceHeight[0]} cm</span>
                      </div>
                      <Slider
                        value={spaceHeight}
                        onValueChange={setSpaceHeight}
                        min={50}
                        max={250}
                        step={10}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Sunlight Availability */}
                <div>
                  <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wide">
                    Sunlight Availability
                  </h3>
                  <RadioGroup value={sunlight} onValueChange={setSunlight}>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 glass-panel p-3 rounded-lg border border-border">
                        <RadioGroupItem value="full" id="full" />
                        <Label htmlFor="full" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Sun className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">Full Sun (6+ hours)</span>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 glass-panel p-3 rounded-lg border border-border">
                        <RadioGroupItem value="partial" id="partial" />
                        <Label htmlFor="partial" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Sun className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">Partial Sun (3-6 hours)</span>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 glass-panel p-3 rounded-lg border border-border">
                        <RadioGroupItem value="shade" id="shade" />
                        <Label htmlFor="shade" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Sun className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">Shade (0-3 hours)</span>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Plant Type */}
                <div>
                  <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wide">
                    What do you want to grow?
                  </h3>
                  <RadioGroup value={plantType} onValueChange={setPlantType}>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 glass-panel p-3 rounded-lg border border-border">
                        <RadioGroupItem value="herbs" id="herbs" />
                        <Label htmlFor="herbs" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Leaf className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">Herbs & Greens</span>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 glass-panel p-3 rounded-lg border border-border">
                        <RadioGroupItem value="vegetables" id="vegetables" />
                        <Label htmlFor="vegetables" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Leaf className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">Vegetables</span>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 glass-panel p-3 rounded-lg border border-border">
                        <RadioGroupItem value="flowers" id="flowers" />
                        <Label htmlFor="flowers" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Leaf className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">Flowers & Decorative</span>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </Card>

            {/* Results Panel */}
            <div className="space-y-6">
              {/* Capacity Estimate */}
              <Card className="glass-panel p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Your Garden Potential</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-panel p-4 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Ruler className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Available Space</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      {spaceWidth[0]}×{spaceHeight[0]}cm
                    </div>
                  </div>

                  <div className="glass-panel p-4 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Est. Capacity</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">{calculateCapacity()} plants</div>
                  </div>
                </div>

                <div className="mt-4 glass-panel p-3 rounded-lg border border-secondary/20">
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-foreground">
                      {sunlight === "full" && "Full sun - Perfect for most plants"}
                      {sunlight === "partial" && "Partial sun - Great for herbs and leafy greens"}
                      {sunlight === "shade" && "Shade - LED grow lights recommended"}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Recommended Systems */}
              <Card className="glass-panel p-6">
                <h2 className="text-xl font-bold mb-4 text-foreground">Recommended Systems</h2>
                <div className="space-y-3">
                  {getRecommendedSystems().map((system, index) => (
                    <div key={index} className="glass-panel p-4 rounded-lg border border-primary/20">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{system.name}</h3>
                        <span className="text-lg font-bold text-primary">{system.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Capacity: {system.capacity}</span>
                        <Button size="sm" variant="ghost" className="text-primary">
                          View Details
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Additional Recommendations */}
              <Card className="glass-panel p-6">
                <h3 className="font-semibold mb-3 text-foreground">Recommended Add-ons</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {sunlight === "shade" && "LED grow light system ($349) for optimal growth"}
                      {sunlight !== "shade" && "Optional LED supplement for faster growth ($199)"}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Smart watering system ($279) to automate irrigation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Sensor kit ($149) for real-time monitoring</span>
                  </div>
                </div>

                <Button className="w-full mt-6 neon-glow">Get Complete Setup</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
