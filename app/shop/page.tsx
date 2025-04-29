import { products } from "@/lib/products"
import ProductCard from "@/components/product-card"

export default function ShopPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl">Shop Our Collection</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Each candle is carefully crafted using sustainable soy wax, premium fragrance oils, and cotton wicks for a
          clean, long-lasting burn.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
