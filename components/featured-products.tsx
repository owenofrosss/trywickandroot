"use client"

import { products } from "@/lib/products"
import ProductCard from "@/components/product-card"

export default function FeaturedProducts() {
  // Display only featured products (or all if we have 4 or fewer)
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
