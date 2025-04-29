"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ShoppingBag, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"

export default function Header() {
  const pathname = usePathname()
  const { cart } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const routes = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
  ]

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
  
  // Add scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 shadow-sm border-b py-2" 
          : "bg-background/80 py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-transparent">
                <Menu className="h-6 w-6 transition-all hover:text-forest-dark" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] border-r-clay-light">
              <div className="flex flex-col h-full">
                <Link href="/" className="font-serif text-2xl font-medium mt-8 mb-8" onClick={() => setIsMenuOpen(false)}>
                  Wick & Root
                </Link>
                <nav className="flex flex-col gap-8">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`text-xl font-serif transition-all duration-200 ${
                        pathname === route.href 
                          ? "text-forest-dark font-medium" 
                          : "text-muted-foreground hover:text-forest-dark"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto mb-8 pt-8 border-t">
                  <p className="text-sm text-muted-foreground mb-4">Connect with us</p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                      <span className="sr-only">Instagram</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <Link href="/" className="font-serif text-2xl font-medium relative group">
          Wick & Root
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-clay-dark transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-all duration-200 relative 
                ${pathname === route.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
              `}
            >
              {route.label}
              {pathname === route.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-clay-dark"></span>
              )}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-clay-dark transition-all duration-300 ${pathname === route.href ? 'opacity-0' : 'group-hover:w-full'}`}></span>
            </Link>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:bg-transparent transition-transform duration-200 hover:scale-110"
            >
              <ShoppingBag className="h-5 w-5 transition-all hover:text-forest-dark" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-forest-dark text-[10px] font-medium text-white">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Open cart</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="border-l-clay-light">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b pb-4">
                <h2 className="font-serif text-lg font-medium">Your Cart</h2>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-clay-light/20">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close cart</span>
                  </Button>
                </SheetTrigger>
              </div>

              <div className="flex-1 overflow-y-auto py-6">
                {cart.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center">
                    <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                    <p className="mt-4 text-center text-muted-foreground">Your cart is empty</p>
                    <Button variant="outline" asChild className="mt-6 rounded-full border-clay-dark text-clay-dark hover:bg-clay-dark/5">
                      <Link href="/shop">Browse Products</Link>
                    </Button>
                  </div>
                ) : (
                  <ul className="divide-y">
                    {cart.map((item) => (
                      <li key={item.id} className="py-4 flex gap-4 group">
                        <div className="h-20 w-20 rounded-lg bg-muted overflow-hidden">
                          <img
                            src={item.image || "/placeholder-user.jpg"}
                            alt={item.name}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                          <p className="mt-1">${item.price.toFixed(2)}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between py-2">
                  <p className="text-muted-foreground">Subtotal</p>
                  <p className="font-medium">
                    ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                  </p>
                </div>
                <Button className="w-full mt-4 bg-forest-dark hover:bg-forest-dark/90 rounded-full transition-all duration-300 hover:shadow-md">Checkout</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
