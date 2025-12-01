"use client"

import { ArrowRight, Thermometer, Droplets, Sun, Sprout } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const products = [
  {
    category: "Smart Sensors",
    title: "IoT Soil & Air Monitors",
    description: "Real-time tracking of moisture, temperature, nutrients, and air quality.",
    image: "/smart-soil-sensor-with-digital-display-and-probes.jpg",
    icon: Thermometer,
    link: "/devices/smart-sensors",
    specs: ["WiFi Connected", "24/7 Monitoring", "App Alerts"],
  },
  {
    category: "Vertical Systems",
    title: "Modular Growing Towers",
    description: "Space-efficient vertical gardens with LED grow lights and hydroponic support.",
    image: "/modern-vertical-garden-tower-with-led-grow-lights.jpg",
    icon: Sprout,
    link: "/devices/vertical-systems",
    specs: ["20+ Plant Capacity", "Built-in Lighting", "Compact Design"],
  },
  {
    category: "Automation",
    title: "Smart Watering Systems",
    description: "Automated irrigation based on real-time sensor data and plant needs.",
    image: "/automated-watering-system-for-plants.jpg",
    icon: Droplets,
    link: "/devices/automation",
    specs: ["Auto Scheduling", "Water Saving", "Remote Control"],
  },
]

export function ProductShowcase() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-urban-dark" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bio-green/10 border border-bio-green/20 mb-4">
            <Sun className="w-4 h-4 text-bio-green" />
            <span className="text-sm text-bio-green font-medium">Smart Farming Devices</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Technology That <span className="text-bio-green">Thinks</span> for Your Garden
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our curated collection of IoT-enabled devices designed for modern urban farmers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-glass-panel border border-white/10 backdrop-blur-lg hover:border-bio-green/30 transition-all duration-500"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-urban-dark via-urban-dark/50 to-transparent" />
                </div>

                <div className="p-6 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-bio-green/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-bio-green" />
                    </div>
                    <span className="text-xs font-medium text-sky-cyan uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-bio-green transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-urban-dark border border-white/10 text-glass-white"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <Link href={product.link}>
                    <Button
                      variant="ghost"
                      className="w-full group/btn border border-bio-green/20 hover:bg-bio-green/10 hover:border-bio-green/50"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
