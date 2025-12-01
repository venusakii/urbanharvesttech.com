import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Droplets, Sun } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden vertical-lines">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/80" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Grow smarter. Grow greener. Grow vertically.</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            Smarter Farming for <span className="text-primary neon-glow inline-block">Modern Cities</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Advanced tech gadgets for sustainable urban gardens and vertical farming systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="neon-glow group">
              Explore Smart Farming Devices
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="glass-panel border-primary/30 bg-transparent">
              Build Your Vertical Garden
            </Button>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {[
              { icon: Droplets, label: "Smart Watering", value: "70% Water Savings" },
              { icon: Sun, label: "Light Optimization", value: "24/7 Monitoring" },
              { icon: Leaf, label: "Growth Rate", value: "3x Faster" },
            ].map((stat, index) => (
              <div key={index} className="glass-panel p-6 rounded-xl text-center hover:scale-105 transition-transform">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
