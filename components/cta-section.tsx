import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass-panel p-12 rounded-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Ready to transform your urban space?</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
            From window ledge to vertical oasis. Start growing smarter today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="neon-glow group">
              Start Your Garden
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="glass-panel border-secondary/30 bg-transparent">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
