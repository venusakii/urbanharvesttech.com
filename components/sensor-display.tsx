"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Thermometer, Droplets, Sun, Wind, Activity } from "lucide-react"

interface SensorData {
  icon: React.ElementType
  label: string
  value: string
  unit: string
  status: "optimal" | "warning" | "critical"
}

const sensorData: SensorData[] = [
  { icon: Thermometer, label: "Temperature", value: "22", unit: "°C", status: "optimal" },
  { icon: Droplets, label: "Moisture", value: "68", unit: "%", status: "optimal" },
  { icon: Sun, label: "Light Level", value: "850", unit: "lux", status: "optimal" },
  { icon: Wind, label: "Airflow", value: "12", unit: "m/s", status: "optimal" },
  { icon: Activity, label: "Nutrients", value: "92", unit: "%", status: "optimal" },
]

export function SensorDisplay() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Real-time <span className="text-secondary neon-glow-secondary">monitoring</span> at your fingertips
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Every device provides live data to help you make informed decisions about your urban garden.
          </p>
        </div>

        {/* Sensor Dashboard Preview */}
        <div className="max-w-5xl mx-auto">
          <Card className="glass-panel p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">Plant Health Dashboard</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Live</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {sensorData.map((sensor, index) => (
                <div
                  key={index}
                  className="glass-panel p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <sensor.icon className="w-5 h-5 text-primary" />
                    <span className="text-xs text-muted-foreground">{sensor.label}</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">{sensor.value}</span>
                    <span className="text-sm text-muted-foreground">{sensor.unit}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-xs text-primary capitalize">{sensor.status}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Automation Status */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Auto Watering</span>
                <span className="text-sm text-primary font-medium">Enabled</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-muted-foreground">Next Water Cycle</span>
                <span className="text-sm text-foreground">In 4 hours</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
