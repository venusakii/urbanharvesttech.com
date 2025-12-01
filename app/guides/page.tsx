import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sprout, Gauge, Droplets, Sun, BarChart, Home, ArrowRight } from "lucide-react"

const guides = [
  {
    title: "How to Start Vertical Gardening in Small Apartments",
    description: "Complete beginner's guide to transforming limited space into a productive garden.",
    icon: Sprout,
    category: "Getting Started",
    readTime: "8 min read",
    difficulty: "Beginner",
    image: "/vertical-garden-in-modern-apartment.jpg",
    topics: ["Space planning", "Plant selection", "Basic setup", "Maintenance tips"],
  },
  {
    title: "Best Smart Sensors for Indoor Farming",
    description: "Comprehensive review of sensor technology and how to choose the right devices.",
    icon: Gauge,
    category: "Technology",
    readTime: "12 min read",
    difficulty: "Intermediate",
    image: "/smart-farming-sensors-and-devices.jpg",
    topics: ["Sensor types", "Data interpretation", "Installation", "Integration"],
  },
  {
    title: "Automated Watering Systems: Complete Guide",
    description: "Everything you need to know about smart irrigation and water management.",
    icon: Droplets,
    category: "Automation",
    readTime: "10 min read",
    difficulty: "Intermediate",
    image: "/automated-watering-system-for-plants.jpg",
    topics: ["System types", "Water scheduling", "Sensor integration", "Troubleshooting"],
  },
  {
    title: "Space-Saving Hydroponic Tech for Micro-Living",
    description: "Discover compact hydroponic solutions perfect for small urban spaces.",
    icon: Home,
    category: "Solutions",
    readTime: "9 min read",
    difficulty: "Beginner",
    image: "/compact-hydroponic-system-in-small-space.jpg",
    topics: ["System comparison", "Setup guide", "Nutrient management", "Plant selection"],
  },
  {
    title: "Using Data to Optimize Plant Growth Indoors",
    description: "Learn how to analyze sensor data and make informed growing decisions.",
    icon: BarChart,
    category: "Advanced",
    readTime: "15 min read",
    difficulty: "Advanced",
    image: "/plant-growth-data-analytics-dashboard.jpg",
    topics: ["Data collection", "Pattern analysis", "Optimization strategies", "AI insights"],
  },
  {
    title: "Lighting Optimization for Maximum Yield",
    description: "Master LED grow lights and spectrum control for different plant stages.",
    icon: Sun,
    category: "Technology",
    readTime: "11 min read",
    difficulty: "Intermediate",
    image: "/led-grow-lights-for-indoor-plants.jpg",
    topics: ["Light spectrum", "Intensity levels", "Timing schedules", "Energy efficiency"],
  },
]

export default function GuidesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 vertical-lines">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Urban Harvest Lab</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Learn <span className="text-primary neon-glow">Smart Farming</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Expert guides and tutorials to help you master urban agriculture and vertical gardening.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <Card
                key={index}
                className="glass-panel overflow-hidden hover:scale-105 transition-all cursor-pointer group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 bg-muted/20 overflow-hidden">
                  <img
                    src={guide.image || "/placeholder.svg"}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-background/80 backdrop-blur text-foreground border-primary/30">
                      {guide.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <guide.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{guide.readTime}</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-xs">
                        {guide.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-foreground text-balance group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">{guide.description}</p>

                  {/* Topics */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {guide.topics.slice(0, 3).map((topic, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-md bg-primary/5 text-foreground border border-primary/10"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="ghost" className="w-full justify-between group/btn">
                    <span>Read Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="glass-panel p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need personalized guidance?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our urban farming experts can help you design the perfect system for your space.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="neon-glow">
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="glass-panel border-secondary/30 bg-transparent">
                  Join Community
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
