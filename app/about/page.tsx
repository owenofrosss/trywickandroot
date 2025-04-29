import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/luma-candles-jQKeCGR7PL4-unsplash-min.jpg"
            alt="Candle lifestyle hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container relative h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">Our Story</h1>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image
                  src="/christina.jpg"
                  alt="Founder portrait Christina"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl">Meet the Founder</h2>
              <p className="mt-6 text-muted-foreground">
                Wick & Root began in my small apartment kitchen in 2018. What started as a creative outlet during a
                particularly stressful time in my life quickly became a passion for crafting moments of tranquility
                through scent.
              </p>
              <p className="mt-4 text-muted-foreground">
                I've always been drawn to the way scent can transport us to different places and evoke powerful
                memories. After years of experimenting with different waxes, fragrances, and techniques, I developed a
                collection of candles that embody the warmth and comfort I wanted to bring into homes.
              </p>
              <blockquote className="mt-6 border-l-4 border-forest-dark pl-4 italic">
                "My mission is simple: to create beautiful, sustainable candles that help people slow down and create
                moments of peace in their everyday lives."
              </blockquote>
              <p className="mt-6 font-serif text-lg">— Emma Woodhouse, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-linen-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl">Our Values</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              At Wick & Root, everything we do is guided by our commitment to these core principles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="font-serif text-xl">Sustainability</h3>
              <p className="mt-4 text-muted-foreground">
                We're committed to using sustainable materials and practices in every aspect of our business, from our
                soy wax and cotton wicks to our recyclable packaging.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="font-serif text-xl">Craftsmanship</h3>
              <p className="mt-4 text-muted-foreground">
                Each candle is hand-poured in small batches to ensure quality and attention to detail. We take pride in
                creating products that are both beautiful and functional.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="font-serif text-xl">Community</h3>
              <p className="mt-4 text-muted-foreground">
                We believe in supporting our local community and giving back. A portion of every sale goes to
                organizations working to protect our environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl">Our Process</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              From sourcing to pouring, every step of our candle-making process is done with care and intention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="aspect-video relative rounded-xl overflow-hidden">
              <Image
                src="/stacysuxx-6eCNHPn7frE-unsplash-min.jpg"
                alt="Candle in home setting"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl">1. Sourcing</h3>
                  <p className="mt-2 text-muted-foreground">
                    We carefully select sustainable, high-quality ingredients from trusted suppliers who share our
                    values.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl">2. Formulating</h3>
                  <p className="mt-2 text-muted-foreground">
                    Each scent is thoughtfully developed to create a unique and balanced fragrance experience that
                    evolves as it burns.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl">3. Crafting</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our candles are hand-poured in small batches to ensure quality and consistency, with each step done
                    with care and attention.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl">4. Testing</h3>
                  <p className="mt-2 text-muted-foreground">
                    Every candle is tested for burn quality, scent throw, and overall performance before it leaves our
                    studio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-clay-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl">Experience Wick & Root</h2>
            <p className="mt-4 text-muted-foreground">
              Discover our collection of handcrafted candles and bring the warmth and comfort of Wick & Root into your
              home.
            </p>
            <Button asChild size="lg" className="mt-8 bg-forest-dark hover:bg-forest-dark/90">
              <Link href="/shop">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
