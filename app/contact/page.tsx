"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 vertical-lines">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Get in Touch</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Let's <span className="text-primary neon-glow">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Have questions about our products or need help with your urban garden? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="glass-panel p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="mt-2 glass-panel"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="mt-2 glass-panel"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-foreground">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                    className="mt-2 glass-panel"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your question or project..."
                    className="mt-2 glass-panel min-h-32"
                    required
                  />
                </div>

                <Button type="submit" className="w-full neon-glow">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="glass-panel p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                    <p className="text-sm text-muted-foreground mb-2">For general inquiries and support</p>
                    <a href="mailto:hello@urbanharvesttech.com" className="text-sm text-primary hover:underline">
                      hello@urbanharvesttech.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="glass-panel p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                    <p className="text-sm text-muted-foreground mb-2">Monday to Friday, 9am - 6pm PST</p>
                    <a href="tel:+15551234567" className="text-sm text-primary hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="glass-panel p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                    <p className="text-sm text-muted-foreground mb-2">Our headquarters in San Francisco</p>
                    <p className="text-sm text-foreground">
                      123 Green Street
                      <br />
                      San Francisco, CA 94102
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass-panel p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Live Chat</h3>
                    <p className="text-sm text-muted-foreground mb-3">Get instant help from our support team</p>
                    <Button variant="outline" size="sm" className="glass-panel border-primary/30 bg-transparent">
                      Start Chat
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="glass-panel p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Quick Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Product Questions</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Learn about our devices, features, and compatibility
                </p>
                <Button variant="ghost" size="sm" className="text-primary">
                  View Product FAQ
                </Button>
              </div>

              <div className="glass-panel p-4 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Technical Support</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Installation, troubleshooting, and maintenance guides
                </p>
                <Button variant="ghost" size="sm" className="text-primary">
                  View Support Docs
                </Button>
              </div>

              <div className="glass-panel p-4 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Shipping & Returns</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Delivery times, return policy, and warranty information
                </p>
                <Button variant="ghost" size="sm" className="text-primary">
                  View Policies
                </Button>
              </div>

              <div className="glass-panel p-4 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Become a Partner</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Wholesale, distribution, and business opportunities
                </p>
                <Button variant="ghost" size="sm" className="text-primary">
                  Partner Info
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
