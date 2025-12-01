"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Droplets, Sun, Wind, Activity, TrendingDown, Zap, Clock } from "lucide-react"
import { useState } from "react"

export default function AutomationPlannerPage() {
  const [autoWatering, setAutoWatering] = useState(true)
  const [autoLighting, setAutoLighting] = useState(true)
  const [autoClimate, setAutoClimate] = useState(false)
  const [autoNutrients, setAutoNutrients] = useState(true)

  const calculateSavings = () => {
    const waterSaving = autoWatering ? 70 : 0
    const energySaving = autoLighting ? 45 : 0
    const climateSaving = autoClimate ? 30 : 0
    let timeSaved = 0

    if (autoWatering) timeSaved += 15
    if (autoLighting) timeSaved += 5
    if (autoClimate) timeSaved += 10
    if (autoNutrients) timeSaved += 8

    return { waterSaving, energySaving, climateSaving, timeSaved }
  }

  const calculateRisk = () => {
    let risk = 100
    if (autoWatering) risk -= 30
    if (autoLighting) risk -= 20
    if (autoClimate) risk -= 25
    if (autoNutrients) risk -= 15
    return Math.max(risk, 10)
  }

  const savings = calculateSavings()
  const riskLevel = calculateRisk()

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 vertical-lines">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Planning Tool</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Automation <span className="text-primary neon-glow">Planner</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              See how automation reduces waste, saves energy, and minimizes plant health risks.
            </p>
          </div>
        </div>
      </section>

      {/* Planner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Automation Toggles */}
            <Card className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Select Automation Features</h2>

              <div className="space-y-4">
                <div className="glass-panel p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Droplets className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <Label htmlFor="watering" className="text-sm font-semibold text-foreground cursor-pointer">
                          Automated Watering
                        </Label>
                        <p className="text-xs text-muted-foreground">Smart irrigation based on soil moisture</p>
                      </div>
                    </div>
                    <Switch id="watering" checked={autoWatering} onCheckedChange={setAutoWatering} />
                  </div>
                  {autoWatering && (
                    <div className="pt-3 border-t border-border/50">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Water Savings:</span>
                        <span className="font-semibold text-primary">70%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs mt-1">
                        <span className="text-muted-foreground">Time Saved:</span>
                        <span className="font-semibold text-foreground">15 min/day</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="glass-panel p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Sun className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <Label htmlFor="lighting" className="text-sm font-semibold text-foreground cursor-pointer">
                          Automated Lighting
                        </Label>
                        <p className="text-xs text-muted-foreground">Sunrise/sunset simulation & scheduling</p>
                      </div>
                    </div>
                    <Switch id="lighting" checked={autoLighting} onCheckedChange={setAutoLighting} />
                  </div>
                  {autoLighting && (
                    <div className="pt-3 border-t border-border/50">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Energy Savings:</span>
                        <span className="font-semibold text-primary">45%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs mt-1">
                        <span className="text-muted-foreground">Time Saved:</span>
                        <span className="font-semibold text-foreground">5 min/day</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="glass-panel p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Wind className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <Label htmlFor="climate" className="text-sm font-semibold text-foreground cursor-pointer">
                          Climate Control
                        </Label>
                        <p className="text-xs text-muted-foreground">Temperature & humidity management</p>
                      </div>
                    </div>
                    <Switch id="climate" checked={autoClimate} onCheckedChange={setAutoClimate} />
                  </div>
                  {autoClimate && (
                    <div className="pt-3 border-t border-border/50">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Energy Savings:</span>
                        <span className="font-semibold text-primary">30%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs mt-1">
                        <span className="text-muted-foreground">Time Saved:</span>
                        <span className="font-semibold text-foreground">10 min/day</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="glass-panel p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Activity className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <Label htmlFor="nutrients" className="text-sm font-semibold text-foreground cursor-pointer">
                          Nutrient Dosing
                        </Label>
                        <p className="text-xs text-muted-foreground">Automated feeding schedule</p>
                      </div>
                    </div>
                    <Switch id="nutrients" checked={autoNutrients} onCheckedChange={setAutoNutrients} />
                  </div>
                  {autoNutrients && (
                    <div className="pt-3 border-t border-border/50">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Waste Reduction:</span>
                        <span className="font-semibold text-primary">60%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs mt-1">
                        <span className="text-muted-foreground">Time Saved:</span>
                        <span className="font-semibold text-foreground">8 min/day</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {/* Savings Summary */}
              <Card className="glass-panel p-6">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Your Savings</h2>
                <div className="space-y-4">
                  <div className="glass-panel p-4 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Droplets className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-foreground">Water Usage</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">-{savings.waterSaving}%</span>
                      <span className="text-sm text-muted-foreground">reduction</span>
                    </div>
                  </div>

                  <div className="glass-panel p-4 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-foreground">Energy Consumption</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">-{savings.energySaving}%</span>
                      <span className="text-sm text-muted-foreground">reduction</span>
                    </div>
                  </div>

                  <div className="glass-panel p-4 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-foreground">Daily Time Saved</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">{savings.timeSaved}</span>
                      <span className="text-sm text-muted-foreground">minutes per day</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Risk Assessment */}
              <Card className="glass-panel p-6">
                <h2 className="text-xl font-bold mb-4 text-foreground">Plant Health Risk</h2>
                <div className="glass-panel p-4 rounded-lg border border-primary/20 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">Current Risk Level</span>
                    <Badge
                      className={`${riskLevel < 30 ? "bg-primary/20 text-primary border-primary/30" : riskLevel < 60 ? "bg-yellow-500/20 text-yellow-500 border-yellow-500/30" : "bg-red-500/20 text-red-500 border-red-500/30"}`}
                    >
                      {riskLevel < 30 ? "Low" : riskLevel < 60 ? "Medium" : "High"}
                    </Badge>
                  </div>
                  <div className="w-full h-3 bg-background/50 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${riskLevel < 30 ? "bg-primary" : riskLevel < 60 ? "bg-yellow-500" : "bg-red-500"}`}
                      style={{ width: `${100 - riskLevel}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                    <span>Protected</span>
                    <span>At Risk</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <TrendingDown className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Automation reduces the risk of overwatering, underwatering, and light stress
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingDown className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Consistent conditions lead to healthier plants and better yields
                    </span>
                  </div>
                </div>
              </Card>

              {/* CTA */}
              <Card className="glass-panel p-6">
                <h3 className="font-semibold mb-2 text-foreground">Ready to automate?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get a complete automation package tailored to your setup.
                </p>
                <Button className="w-full neon-glow">Build My Automation System</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
