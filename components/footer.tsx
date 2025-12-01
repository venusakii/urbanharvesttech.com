import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 relative">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 4 L16 28 M12 8 L12 24 M20 8 L20 24 M8 12 L8 20 M24 12 L24 20"
                    stroke="#52E07C"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">
                Urban<span className="text-primary">Harvest</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Advanced tech for sustainable urban gardens and vertical farming systems.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/devices/smart-sensors"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Smart Sensors
                </Link>
              </li>
              <li>
                <Link
                  href="/devices/vertical-systems"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Vertical Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/devices/automation"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guides" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/dashboards" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Dashboards
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@urbanharvesttech.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@urbanharvesttech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Urban Harvest Tech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
