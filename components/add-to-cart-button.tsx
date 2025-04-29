"use client"

import { useState } from "react"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import type { Product } from "@/lib/products"
import { toast } from "@/components/ui/use-toast"

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simulate a delay for better UX
    setTimeout(() => {
      addToCart(product)
      setIsAdding(false)

      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      })
    }, 500)
  }

  return (
    <Button
      onClick={handleAddToCart}
      disabled={isAdding}
      size="lg"
      className="w-full bg-forest-dark hover:bg-forest-dark/90"
    >
      <ShoppingBag className="mr-2 h-5 w-5" />
      {isAdding ? "Adding to Cart..." : "Add to Cart"}
    </Button>
  )
}
