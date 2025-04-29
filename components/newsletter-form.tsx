"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to our community!",
        description: "You've been added to our newsletter. Thank you for joining us.",
      })
      setIsSuccess(true)
      setIsLoading(false)
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setEmail("")
        setIsSuccess(false)
      }, 3000)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2 relative">
      <Input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={isLoading || isSuccess}
        className="rounded-full pl-4 pr-4 py-6 border-forest-light focus-visible:ring-forest-dark transition-all duration-300 backdrop-blur-sm"
      />
      <Button 
        type="submit" 
        disabled={isLoading || isSuccess}
        className={`rounded-full transition-all duration-300 px-6 ${
          isSuccess 
            ? "bg-forest-light text-forest-dark hover:bg-forest-light" 
            : "bg-forest-dark hover:bg-forest-dark/90 hover:shadow-md hover:-translate-y-0.5"
        }`}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Joining...
          </>
        ) : isSuccess ? (
          <>
            <CheckCircle className="h-4 w-4 mr-2" />
            Joined
          </>
        ) : (
          <>
            Join
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </Button>
    </form>
  )
}
