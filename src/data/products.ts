export interface Product {
  id: string;
  name: string;
  category: "Classic" | "Fruity" | "Premium" | "Modern";
  price: number;
  description: string;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "chocolate-dream",
    name: "Chocolate Dream",
    category: "Classic",
    price: 45,
    description: "Rich chocolate layers with smooth ganache frosting. A chocolate lover's paradise.",
    image: "cake-chocolate.jpg",
    featured: true,
  },
  {
    id: "strawberry-delight",
    name: "Strawberry Delight",
    category: "Fruity",
    price: 42,
    description: "Fresh strawberries with light whipped cream between fluffy vanilla layers.",
    image: "cake-strawberry.jpg",
    featured: true,
  },
  {
    id: "vanilla-elegance",
    name: "Vanilla Elegance",
    category: "Premium",
    price: 55,
    description: "Classic vanilla cake with delicate floral decoration. Perfect for weddings and celebrations.",
    image: "cake-vanilla.jpg",
    featured: true,
  },
  {
    id: "red-velvet-classic",
    name: "Red Velvet Classic",
    category: "Classic",
    price: 48,
    description: "Traditional red velvet with cream cheese frosting. A timeless favorite.",
    image: "cake-redvelvet.jpg",
    featured: true,
  },
  {
    id: "lemon-bliss",
    name: "Lemon Bliss",
    category: "Fruity",
    price: 40,
    description: "Tangy lemon cake with zesty cream cheese frosting. Light and refreshing.",
    image: "cake-strawberry.jpg",
  },
  {
    id: "caramel-heaven",
    name: "Caramel Heaven",
    category: "Premium",
    price: 50,
    description: "Decadent caramel layers with salted caramel drizzle. Pure indulgence.",
    image: "cake-chocolate.jpg",
  },
  {
    id: "matcha-fusion",
    name: "Matcha Fusion",
    category: "Modern",
    price: 52,
    description: "Premium matcha cake with white chocolate ganache. A modern twist on tradition.",
    image: "cake-vanilla.jpg",
  },
  {
    id: "berry-burst",
    name: "Berry Burst",
    category: "Fruity",
    price: 46,
    description: "Mixed berries with vanilla cream. Fresh, fruity, and fabulous.",
    image: "cake-strawberry.jpg",
  },
];
