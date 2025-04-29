export interface Product {
  id: string
  name: string
  slug: string
  description: string
  longDescription: string
  price: number
  image: string
  featured: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Forest Retreat",
    slug: "forest-retreat",
    description: "A calming blend of pine, cedar, and eucalyptus that transports you to a peaceful forest retreat.",
    longDescription:
      "Escape to a tranquil forest with our Forest Retreat candle. This soothing blend combines the earthy scents of pine and cedar with refreshing eucalyptus, creating a calming atmosphere that helps you unwind after a long day. Each candle is hand-poured using sustainable soy wax and features a cotton wick for a clean, even burn. Perfect for creating a peaceful sanctuary in your home.",
    price: 32,
    image: "/candle-product-image.jpg",
    featured: true,
  },
  {
    id: "2",
    name: "Cozy Hearth",
    slug: "cozy-hearth",
    description: "The comforting scent of a crackling fire with notes of smoked wood, amber, and vanilla.",
    longDescription:
      "Bring the warmth of a crackling fireplace into your home with our Cozy Hearth candle. This rich, comforting scent combines notes of smoked wood and amber with a touch of sweet vanilla, creating the perfect ambiance for chilly evenings or quiet moments of reflection. Hand-poured in small batches using premium soy wax and a cotton wick for a clean, long-lasting burn that fills your space with cozy comfort.",
    price: 34,
    image: "/candle-product-image-2.jpg",
    featured: true,
  },
  {
    id: "3",
    name: "Linen & Lavender",
    slug: "linen-lavender",
    description: "A fresh, calming blend of clean linen and soothing lavender for peaceful relaxation.",
    longDescription:
      "Our Linen & Lavender candle combines the fresh scent of clean linen with the soothing properties of lavender to create a serene atmosphere perfect for relaxation and mindfulness. This calming blend helps reduce stress and anxiety while filling your space with a light, airy fragrance. Each candle is carefully crafted using sustainable soy wax and a cotton wick, ensuring a clean burn that transforms your home into a peaceful sanctuary.",
    price: 30,
    image: "/candle-product-image-3.jpg",
    featured: true,
  },
  {
    id: "4",
    name: "Autumn Orchard",
    slug: "autumn-orchard",
    description: "A warm, spicy blend of apple, cinnamon, and clove that evokes memories of fall harvests.",
    longDescription:
      "Capture the essence of autumn with our Autumn Orchard candle. This warm, inviting scent combines crisp apple with spicy notes of cinnamon and clove, evoking memories of fall harvests and cozy gatherings. Perfect for creating a welcoming atmosphere in your home during the cooler months or anytime you crave that comforting autumn feeling. Hand-poured using sustainable soy wax and a cotton wick for a clean, even burn that fills your space with seasonal warmth.",
    price: 32,
    image: "/cnadle-product-image-4.jpg",
    featured: true,
  },
]
