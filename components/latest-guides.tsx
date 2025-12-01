"use client"

import { ArrowRight, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const guides = [
  {
    title: "Vertical Gardening for Beginners",
    excerpt: "Learn how to start your first vertical garden in a small apartment with limited space and sunlight.",
    readTime: "8 min",
    category: "Getting Started",
    image: "/vertical-garden-in-modern-apartment.jpg",
  },
  {
    title: "Smart Sensor Setup Guide",
    excerpt: "Complete walkthrough of installing and configuring IoT sensors for optimal plant monitoring.",
    readTime: "12 min",
    category: "Technology",
    image: "/smart-farming-sensors-and-devices.jpg",
  },
  {
    title: "Maximizing Hydroponic Yields",
    excerpt: "Advanced techniques for increasing plant productivity in compact hydroponic systems.",
    readTime: "15 min",
    category: "Advanced",
    image: "/compact-hydroponic-system-in-small-space.jpg",
  },
]

export function LatestGuides() {
  return (
    <section className="py-24 relative bg-urban-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bio-green/10 border border-bio-green/20 mb-4">
              <TrendingUp className="w-4 h-4 text-bio-green" />
              <span className="text-sm text-bio-green font-medium">Urban Harvest Lab</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Latest <span className="text-bio-green">Growing</span> Guides
            </h2>
          </div>
          <Link href="/guides" className="hidden md:block">
            <Button variant="outline" className="border-bio-green/20 hover:bg-bio-green/10 bg-transparent">
              View All Guides
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <Link
              key={index}
              href="/guides"
              className="group block rounded-2xl overflow-hidden bg-glass-panel border border-white/10 backdrop-blur-lg hover:border-bio-green/30 transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={guide.image || "/placeholder.svg"}
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-urban-dark via-urban-dark/50 to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-bio-green/20 backdrop-blur-md border border-bio-green/30">
                  <span className="text-xs font-medium text-bio-green">{guide.category}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{guide.readTime} read</span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-bio-green transition-colors">{guide.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{guide.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/guides">
            <Button variant="outline" className="border-bio-green/20 hover:bg-bio-green/10 bg-transparent">
              View All Guides
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
