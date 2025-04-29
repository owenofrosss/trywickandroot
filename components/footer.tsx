import Link from "next/link"
import { Instagram, Facebook, Mail, MapPin, Heart } from "lucide-react"
import NewsletterForm from "@/components/newsletter-form"

export default function Footer() {
  return (
    <footer className="border-t bg-linen-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-clay-light/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/3 right-0 w-24 h-24 bg-forest-light/20 rounded-full translate-x-1/3"></div>
      
      <div className="container py-16 md:py-20 relative z-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <h3 className="font-serif text-2xl font-medium">Wick & Root</h3>
            </Link>
            <p className="text-muted-foreground max-w-xs leading-relaxed">
              Handcrafted candles that transform ordinary moments into extraordinary experiences—made with intention for your wellbeing.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://instagram.com"
                className="text-muted-foreground hover:text-forest-dark transition-colors duration-300 hover:scale-110 transform"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link 
                href="https://facebook.com" 
                className="text-muted-foreground hover:text-forest-dark transition-colors duration-300 hover:scale-110 transform"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="mailto:hello@wickandroot.com"
                className="text-muted-foreground hover:text-forest-dark transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-lg font-medium border-b border-clay-light/50 pb-2">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-forest-dark transition-colors duration-200 flex items-center">
                  <span className="h-1 w-1 bg-clay-dark rounded-full mr-2"></span>
                  All Candles
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-forest-dark transition-colors duration-200 flex items-center">
                  <span className="h-1 w-1 bg-clay-dark rounded-full mr-2"></span>
                  Subscription Box
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-forest-dark transition-colors duration-200 flex items-center">
                  <span className="h-1 w-1 bg-clay-dark rounded-full mr-2"></span>
                  Gift Sets
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-forest-dark transition-colors duration-200 flex items-center">
                  <span className="h-1 w-1 bg-clay-dark rounded-full mr-2"></span>
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-lg font-medium border-b border-clay-light/50 pb-2">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-forest-dark transition-colors duration-200 flex items-center">
                  <span className="h-1 w-1 bg-clay-dark rounded-full mr-2"></span>
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-forest-dark transition-colors duration-200 flex items-center">
                  <span className="h-1 w-1 bg-clay-dark rounded-full mr-2"></span>
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-forest-dark transition-colors duration-200 flex items-center">
                  <span className="h-1 w-1 bg-clay-dark rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-forest-dark transition-colors duration-200 flex items-center">
                  <span className="h-1 w-1 bg-clay-dark rounded-full mr-2"></span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-lg font-medium border-b border-clay-light/50 pb-2">Join Our Community</h3>
            <p className="text-sm text-muted-foreground">
              Sign up to receive updates, exclusive offers, and candle care tips.
            </p>
            <NewsletterForm />
            <div className="text-sm text-muted-foreground flex items-start gap-2 mt-6">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <p>123 Cozy Lane, Portland, OR 97201</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-clay-light/30 pt-8">
          <p className="text-sm text-muted-foreground order-2 md:order-1">
            © {new Date().getFullYear()} Wick & Root. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground order-1 md:order-2">
            <Link href="/privacy" className="hover:text-forest-dark transition-colors duration-200">Privacy</Link>
            <Link href="/terms" className="hover:text-forest-dark transition-colors duration-200">Terms</Link>
            <Link href="/shipping" className="hover:text-forest-dark transition-colors duration-200">Shipping</Link>
            <span className="flex items-center">
              <span className="mr-1">Made with</span>
              <Heart className="h-3 w-3 text-clay-dark mx-0.5" />
              <span>in Portland</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
