"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Alexandra Rivera",
    role: "Urban Gardener, San Francisco",
    content:
      "Urban Harvest Tech transformed my tiny apartment balcony into a thriving vertical garden. The sensors tell me exactly when to water, and I've never seen my herbs grow so well!",
    rating: 5,
    image: "/asian-woman-urban-gardener.jpg",
  },
  {
    name: "David Kim",
    role: "Restaurant Owner, NYC",
    content:
      "We installed their vertical farming system in our kitchen. Fresh herbs year-round, zero waste, and customers love seeing where their garnishes come from. Game-changer for our farm-to-table concept.",
    rating: 5,
    image: "/hispanic-chef-restaurant-owner.jpg",
  },
  {
    name: "Jessica Patel",
    role: "Tech Professional, Seattle",
    content:
      "As someone who travels frequently, the automated watering system is a lifesaver. I can monitor my plants from anywhere and they're healthier than ever. The dashboard is beautifully designed too.",
    rating: 5,
    image: "/professional-woman-tech-industry.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-urban-dark to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Trusted by <span className="text-bio-green">Urban Growers</span> Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join thousands of city farmers growing smarter with our technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-8 bg-glass-panel border border-white/10 backdrop-blur-lg hover:border-bio-green/30 transition-all duration-500"
            >
              <Quote className="w-10 h-10 text-bio-green/20 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-bio-green text-bio-green" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-bio-green/20 overflow-hidden">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
