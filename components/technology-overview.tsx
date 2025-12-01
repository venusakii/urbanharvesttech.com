"use client"

import { Cpu, Wifi, Cloud, Shield, Lightbulb, Activity } from "lucide-react"

const technologies = [
  {
    icon: Cpu,
    title: "AI-Powered Insights",
    description: "Machine learning algorithms analyze plant health patterns and predict optimal growing conditions.",
  },
  {
    icon: Wifi,
    title: "IoT Connectivity",
    description: "All devices communicate seamlessly via WiFi, Zigbee, or LoRaWAN for reliable data transmission.",
  },
  {
    icon: Cloud,
    title: "Cloud Analytics",
    description: "Your garden data is securely stored and processed in the cloud for anywhere access.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "End-to-end encryption ensures your farming data remains protected and confidential.",
  },
  {
    icon: Lightbulb,
    title: "Smart Automation",
    description: "Automated systems respond to real-time conditions without manual intervention.",
  },
  {
    icon: Activity,
    title: "Live Monitoring",
    description: "Track temperature, humidity, soil nutrients, and growth metrics in real-time.",
  },
]

export function TechnologyOverview() {
  return (
    <section className="py-24 relative bg-urban-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Powered by <span className="text-bio-green">Next-Gen</span> Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our platform combines IoT sensors, AI analytics, and cloud computing to revolutionize urban farming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-glass-panel border border-white/10 backdrop-blur-lg hover:border-sky-cyan/30 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-cyan/20 to-bio-green/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-sky-cyan" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-sky-cyan transition-colors">{tech.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tech.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
