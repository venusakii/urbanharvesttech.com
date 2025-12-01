"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 4 L16 28 M12 8 L12 24 M20 8 L20 24 M8 12 L8 20 M24 12 L24 20"
                  stroke="#52E07C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="group-hover:drop-shadow-[0_0_8px_rgba(82,224,124,0.8)] transition-all"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-foreground">
              Urban<span className="text-primary">Harvest</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/devices" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Devices
            </Link>
            <Link href="/guides" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Guides
            </Link>
            <Link href="/dashboards" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Dashboards
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Button size="sm" className="neon-glow">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/devices"
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Devices
            </Link>
            <Link
              href="/guides"
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Guides
            </Link>
            <Link
              href="/dashboards"
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboards
            </Link>
            <Link
              href="/about"
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Button size="sm" className="w-full neon-glow">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
