import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Target, Lightbulb, Users } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description:
      "Every product we create is designed to reduce environmental impact and promote sustainable urban living.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description:
      "We leverage cutting-edge IoT, AI, and automation technology to make urban farming accessible to everyone.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description:
      "Building a global community of urban farmers who share knowledge, experiences, and sustainable practices.",
  },
  {
    icon: Target,
    title: "Results Oriented",
    description: "We measure success by real outcomes - water saved, energy reduced, and healthier plants grown.",
  },
]

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Founder & Chief Agronomist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "15 years in vertical farming research and sustainable agriculture technology.",
  },
  {
    name: "Marcus Williams",
    role: "CTO & IoT Architect",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Former Tesla engineer specializing in sensor networks and automation systems.",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Product Design",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Award-winning designer focused on making complex tech simple and beautiful.",
  },
  {
    name: "James Park",
    role: "AI Research Lead",
    image: "/placeholder.svg?height=300&width=300",
    bio: "PhD in Machine Learning, developing intelligent plant care algorithms.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 vertical-lines">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">About Us</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Revolutionizing <span className="text-primary neon-glow">Urban Agriculture</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              We believe everyone should have access to fresh, sustainable food - regardless of living space.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="glass-panel p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-balance">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-6">
              Urban Harvest Tech was founded in 2020 with a simple vision: make smart farming technology accessible to
              city dwellers everywhere. We combine advanced IoT sensors, AI-powered analytics, and sustainable
              automation to transform limited urban spaces into productive gardens.
            </p>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              From tiny apartments to rooftop installations, our systems help thousands of people grow fresh produce,
              reduce their carbon footprint, and reconnect with nature - all while saving water and energy.
            </p>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The principles that guide every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="glass-panel p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experts in agronomy, engineering, design, and AI working together to revolutionize urban farming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="glass-panel overflow-hidden">
                <div className="relative h-64 bg-muted/20">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="glass-panel p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Plants Growing</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">70%</div>
                <div className="text-sm text-muted-foreground">Water Saved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">45</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
