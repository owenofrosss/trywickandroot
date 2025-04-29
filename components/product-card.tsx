"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import type { Product } from "@/lib/products"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const [isHovered, setIsHovered] = useState(false)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  
  const handleAddToCart = () => {
    setIsAddingToCart(true)
    
    // Add the product to cart
    addToCart(product)
    
    // Reset animation after a short delay
    setTimeout(() => {
      setIsAddingToCart(false)
    }, 600)
  }

  return (
    <div
      className="group relative h-full flex flex-col rounded-xl overflow-hidden bg-white transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/shop/${product.slug}`} className="block aspect-square relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={cn(
            "object-cover transition-all duration-700", 
            isHovered ? "scale-105 filter brightness-[1.02]" : "scale-100"
          )}
        />
      </Link>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-serif text-lg group-hover:text-forest-dark transition-colors duration-300">
          <Link href={`/shop/${product.slug}`} className="hover:underline underline-offset-4">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-grow">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-medium">${product.price.toFixed(2)}</span>
          <Button 
            size="sm" 
            onClick={handleAddToCart} 
            disabled={isAddingToCart}
            className={cn(
              "bg-forest-dark hover:bg-forest-dark/90 rounded-full transition-all duration-300",
              isAddingToCart ? "animate-pulse" : "hover:shadow-md hover:-translate-y-0.5"
            )}
          >
            <ShoppingBag className={cn(
              "h-4 w-4 mr-2 transition-transform duration-300",
              isAddingToCart ? "animate-bounce" : ""
            )} />
            {isAddingToCart ? "Added" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </div>
  )
}
