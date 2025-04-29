import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/featured-products"
import NewsletterForm from "@/components/newsletter-form"
import { useState, useRef } from "react"

export default function Home() {
  // Add state for mock form
  const [formState, setFormState] = useState({ name: "", email: "", password: "" })
  const [formLoading, setFormLoading] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  const nameRef = useRef<HTMLInputElement>(null)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/luma-candles-jQKeCGR7PL4-unsplash-min.jpg"
            alt="Cozy candle setting"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>
        <div className="container relative h-full flex flex-col items-center justify-center text-center text-white pt-16 md:pt-0">
          <span className="flex items-center gap-2 text-clay-light/90 font-medium text-sm md:text-base mb-4 animate-fade-in">
            <Flame className="h-4 w-4" /> Artisan-crafted in small batches
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl max-w-3xl tracking-tight leading-[1.15] animate-fade-up">
            Find Your Perfect <span className="text-clay-light">Moment</span> of Warmth
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl text-white/90 animate-fade-up-delay">
            Our candles transform ordinary spaces into extraordinary experiences—crafted intentionally for your wellbeing.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-5 animate-fade-up-delay-2">
            <Button asChild size="lg" className="bg-clay-dark hover:bg-clay-dark/90 text-foreground rounded-full px-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <Link href="/shop">Explore Collection</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-clay-dark text-clay-dark hover:bg-clay-dark/10 rounded-full px-8 transition-all duration-300">
              <Link href="/about" className="group">Our Story <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28 bg-linen-light">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-14">
            <span className="text-forest-dark font-medium text-sm uppercase tracking-wider mb-3">Handcrafted Excellence</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">Meet Our Signature Collection</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Thoughtfully formulated using sustainable soy wax, premium fragrance oils, and cotton wicks—each candle tells a story through scent.
            </p>
          </div>
          <FeaturedProducts />
          <div className="mt-16 text-center">
            <Button asChild variant="outline" size="lg" className="group border-forest-dark text-forest-dark hover:bg-forest-dark/5 rounded-full px-8 transition-all duration-300">
              <Link href="/shop">
                View Complete Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1 md:pr-8">
              <span className="text-clay-dark font-medium text-sm uppercase tracking-wider mb-3 block">Our Philosophy</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">Crafted with Intention</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                At Wick & Root, we believe in the power of slowing down. Our candles aren't just products—they're invitations to create moments of presence in your everyday life.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Each candle begins as a vision for how scent can transform mood and memory, handcrafted in our studio using sustainable practices that honor both your wellbeing and our planet.
              </p>
              <Button asChild variant="outline" className="group border-clay-dark text-clay-dark hover:bg-clay-dark/5 rounded-full px-8 transition-all duration-300">
                <Link href="/about">
                  Discover Our Journey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl transform md:translate-x-4 transition-all duration-500 hover:translate-y-[-8px]">
                <Image
                  src="/kate-kasiutich-A8ZNOy1HCPg-unsplash-min.jpg"
                  alt="Candle making process"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 hidden md:block w-40 h-40 bg-clay-light rounded-full opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Scheduling & Account Creation (Mock) */}
      <section className="py-20 md:py-28 bg-white border-t border-b border-linen-light">
        <div className="container max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center">
          {/* Mock Calendar */}
          <div className="flex-1 w-full">
            <div className="bg-linen-light rounded-2xl shadow p-8 flex flex-col items-center">
              <h3 className="font-serif text-2xl mb-4">Book a Candle-Making Experience</h3>
              <div className="w-full flex flex-col items-center">
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {/* Mock calendar days */}
                  {[...Array(28)].map((_, i) => (
                    <button
                      key={i}
                      className={`w-8 h-8 rounded-full text-sm font-medium transition-all duration-200 
                        ${i === 10 ? "bg-forest-dark text-white" : "bg-white text-foreground hover:bg-clay-light"}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <p className="text-muted-foreground text-xs mb-2">Select a date to reserve your spot</p>
                <button className="mt-2 px-6 py-2 rounded-full bg-forest-dark text-white font-medium hover:bg-forest-dark/90 transition-all duration-200">Book Now</button>
              </div>
            </div>
          </div>
          {/* Mock Account Creation */}
          <div className="flex-1 w-full">
            <div className="bg-linen-light rounded-2xl shadow p-8 flex flex-col items-center">
              <h3 className="font-serif text-2xl mb-4">Create Your Account</h3>
              <form
                className="w-full max-w-xs flex flex-col gap-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setFormLoading(true);
                  setTimeout(() => {
                    setFormLoading(false);
                    setFormSuccess(true);
                    setFormState({ name: "", email: "", password: "" });
                    // Focus name field for quick retry
                    if (nameRef.current) nameRef.current.focus();
                    setTimeout(() => setFormSuccess(false), 2000);
                  }, 1200);
                }}
              >
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Full Name"
                  className="rounded-md px-4 py-3 border border-clay-light focus:ring-forest-dark outline-none transition-all"
                  value={formState.name}
                  onChange={e => setFormState(f => ({ ...f, name: e.target.value }))}
                  disabled={formLoading}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-md px-4 py-3 border border-clay-light focus:ring-forest-dark outline-none transition-all"
                  value={formState.email}
                  onChange={e => setFormState(f => ({ ...f, email: e.target.value }))}
                  disabled={formLoading}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="rounded-md px-4 py-3 border border-clay-light focus:ring-forest-dark outline-none transition-all"
                  value={formState.password}
                  onChange={e => setFormState(f => ({ ...f, password: e.target.value }))}
                  disabled={formLoading}
                  required
                />
                <button
                  type="submit"
                  className="mt-2 px-6 py-2 rounded-full bg-clay-dark text-white font-medium hover:bg-clay-dark/90 transition-all duration-200 disabled:opacity-60"
                  disabled={formLoading}
                >
                  {formLoading ? "Creating..." : formSuccess ? "Account Created!" : "Sign Up"}
                </button>
                {formSuccess && (
                  <p className="text-green-600 text-xs mt-2">Account created! (Mock)</p>
                )}
              </form>
              <p className="text-xs text-muted-foreground mt-4">Mock form – no data is saved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Box CTA */}
      <section className="py-20 md:py-28 bg-clay-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-clay-dark/10 rounded-bl-full -z-0 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-forest-light/20 rounded-tr-full -z-0"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-white/80 rounded-full text-forest-dark font-medium text-sm mb-8">Join Our Community</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">Elevate Your Ritual</h2>
            <p className="mt-4 text-forest-dark/90 text-lg mb-10 max-w-xl mx-auto">
              Subscribe to our seasonal box and journey through curated scent experiences, with exclusive access to limited editions before they sell out.
            </p>
            <div className="mt-8 max-w-md mx-auto bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm">
              <NewsletterForm />
              <p className="text-xs text-muted-foreground mt-4">Join 2,000+ scent enthusiasts receiving our mindful updates. No spam, just good vibes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
