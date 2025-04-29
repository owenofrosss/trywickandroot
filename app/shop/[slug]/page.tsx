import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import AddToCartButton from "@/components/add-to-cart-button"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return (
      <div className="container py-12 md:py-16 text-center">
        <h1 className="font-serif text-3xl">Product Not Found</h1>
        <p className="mt-4 text-muted-foreground">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild variant="outline" className="mt-6">
          <Link href="/shop">Back to Shop</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container py-12 md:py-16">
      <Link href="/shop" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="aspect-square relative rounded-xl overflow-hidden bg-muted">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        </div>

        <div>
          <h1 className="font-serif text-3xl md:text-4xl">{product.name}</h1>
          <p className="mt-4 text-2xl font-medium">${product.price.toFixed(2)}</p>

          <div className="mt-6 prose prose-stone">
            <p className="text-muted-foreground">{product.description}</p>
            <div className="my-6 border-t pt-6">
              <p>{product.longDescription}</p>
            </div>
          </div>

          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>

          <div className="mt-8 space-y-4 border-t pt-8">
            <div>
              <h3 className="font-medium">Details</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>8 oz sustainable soy wax</li>
                <li>Cotton wick for a clean burn</li>
                <li>30-40 hour burn time</li>
                <li>Hand-poured in small batches</li>
                <li>Reusable glass container</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">Shipping</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Free shipping on orders over $75. Orders ship within 1-3 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
