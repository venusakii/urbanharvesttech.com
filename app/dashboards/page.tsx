"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Thermometer, Droplets, Sun, Wind, Activity, Leaf, TrendingUp } from "lucide-react"
import { useState } from "react"

export default function DashboardsPage() {
  const [temperature, setTemperature] = useState([22])
  const [moisture, setMoisture] = useState([68])
  const [light, setLight] = useState([850])
  const [airflow, setAirflow] = useState([12])
  const [nutrients, setNutrients] = useState([92])

  const getStatus = (value: number, optimal: [number, number]) => {
    if (value >= optimal[0] && value <= optimal[1]) return "optimal"
    if (value >= optimal[0] - 10 && value <= optimal[1] + 10) return "warning"
    return "critical"
  }

  const tempStatus = getStatus(temperature[0], [18, 25])
  const moistureStatus = getStatus(moisture[0], [60, 80])
  const lightStatus = getStatus(light[0], [800, 1000])

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 vertical-lines">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Live Monitoring</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Plant Health <span className="text-primary neon-glow">Dashboard</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Interactive simulation of real-time environmental monitoring and control.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Status Overview */}
            <Card className="glass-panel p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">System Status</h2>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">Live Data</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {/* Temperature */}
                <div className="glass-panel p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Thermometer className="w-5 h-5 text-primary" />
                    <span className="text-xs text-muted-foreground">Temperature</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-foreground">{temperature[0]}</span>
                    <span className="text-sm text-muted-foreground">°C</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-2 h-2 rounded-full ${tempStatus === "optimal" ? "bg-primary" : tempStatus === "warning" ? "bg-yellow-500" : "bg-red-500"}`}
                    />
                    <span
                      className={`text-xs capitalize ${tempStatus === "optimal" ? "text-primary" : tempStatus === "warning" ? "text-yellow-500" : "text-red-500"}`}
                    >
                      {tempStatus}
                    </span>
                  </div>
                </div>

                {/* Moisture */}
                <div className="glass-panel p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Droplets className="w-5 h-5 text-primary" />
                    <span className="text-xs text-muted-foreground">Moisture</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-foreground">{moisture[0]}</span>
                    <span className="text-sm text-muted-foreground">%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-2 h-2 rounded-full ${moistureStatus === "optimal" ? "bg-primary" : moistureStatus === "warning" ? "bg-yellow-500" : "bg-red-500"}`}
                    />
                    <span
                      className={`text-xs capitalize ${moistureStatus === "optimal" ? "text-primary" : moistureStatus === "warning" ? "text-yellow-500" : "text-red-500"}`}
                    >
                      {moistureStatus}
                    </span>
                  </div>
                </div>

                {/* Light */}
                <div className="glass-panel p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="w-5 h-5 text-primary" />
                    <span className="text-xs text-muted-foreground">Light Level</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-foreground">{light[0]}</span>
                    <span className="text-sm text-muted-foreground">lux</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-2 h-2 rounded-full ${lightStatus === "optimal" ? "bg-primary" : lightStatus === "warning" ? "bg-yellow-500" : "bg-red-500"}`}
                    />
                    <span
                      className={`text-xs capitalize ${lightStatus === "optimal" ? "text-primary" : lightStatus === "warning" ? "text-yellow-500" : "text-red-500"}`}
                    >
                      {lightStatus}
                    </span>
                  </div>
                </div>

                {/* Airflow */}
                <div className="glass-panel p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Wind className="w-5 h-5 text-primary" />
                    <span className="text-xs text-muted-foreground">Airflow</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-foreground">{airflow[0]}</span>
                    <span className="text-sm text-muted-foreground">m/s</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-xs text-primary capitalize">optimal</span>
                  </div>
                </div>

                {/* Nutrients */}
                <div className="glass-panel p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity className="w-5 h-5 text-primary" />
                    <span className="text-xs text-muted-foreground">Nutrients</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-foreground">{nutrients[0]}</span>
                    <span className="text-sm text-muted-foreground">%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-xs text-primary capitalize">optimal</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Controls */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Environmental Controls */}
              <Card className="glass-panel p-6">
                <h3 className="text-xl font-bold mb-6 text-foreground">Environmental Controls</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-muted-foreground">Temperature</label>
                      <span className="text-sm font-semibold text-foreground">{temperature[0]}°C</span>
                    </div>
                    <Slider
                      value={temperature}
                      onValueChange={setTemperature}
                      min={15}
                      max={30}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-muted-foreground">Soil Moisture</label>
                      <span className="text-sm font-semibold text-foreground">{moisture[0]}%</span>
                    </div>
                    <Slider
                      value={moisture}
                      onValueChange={setMoisture}
                      min={0}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-muted-foreground">Light Intensity</label>
                      <span className="text-sm font-semibold text-foreground">{light[0]} lux</span>
                    </div>
                    <Slider value={light} onValueChange={setLight} min={0} max={2000} step={50} className="w-full" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-muted-foreground">Airflow</label>
                      <span className="text-sm font-semibold text-foreground">{airflow[0]} m/s</span>
                    </div>
                    <Slider value={airflow} onValueChange={setAirflow} min={0} max={20} step={1} className="w-full" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm text-muted-foreground">Nutrient Level</label>
                      <span className="text-sm font-semibold text-foreground">{nutrients[0]}%</span>
                    </div>
                    <Slider
                      value={nutrients}
                      onValueChange={setNutrients}
                      min={0}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>
              </Card>

              {/* Automation Status */}
              <Card className="glass-panel p-6">
                <h3 className="text-xl font-bold mb-6 text-foreground">Automation Status</h3>
                <div className="space-y-4">
                  <div className="glass-panel p-4 rounded-lg border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Droplets className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">Auto Watering</span>
                      </div>
                      <Badge className="bg-primary/20 text-primary border-primary/30">Enabled</Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">Next cycle in 4 hours</div>
                  </div>

                  <div className="glass-panel p-4 rounded-lg border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Sun className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">Light Control</span>
                      </div>
                      <Badge className="bg-primary/20 text-primary border-primary/30">Active</Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">Following sunrise schedule</div>
                  </div>

                  <div className="glass-panel p-4 rounded-lg border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Wind className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">Climate Control</span>
                      </div>
                      <Badge className="bg-primary/20 text-primary border-primary/30">Enabled</Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">Maintaining optimal conditions</div>
                  </div>

                  <div className="glass-panel p-4 rounded-lg border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">Nutrient Dosing</span>
                      </div>
                      <Badge className="bg-primary/20 text-primary border-primary/30">Scheduled</Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">Next feeding in 2 days</div>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full neon-glow">Configure Automation</Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Insights */}
            <Card className="glass-panel p-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Growth Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">Growth Rate</div>
                    <div className="text-xs text-muted-foreground">15% faster than average with current settings</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">Water Efficiency</div>
                    <div className="text-xs text-muted-foreground">
                      Saving 68% water compared to traditional methods
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">Plant Health</div>
                    <div className="text-xs text-muted-foreground">Excellent condition across all metrics</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
