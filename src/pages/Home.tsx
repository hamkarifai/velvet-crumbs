import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, Clock } from "lucide-react";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-cake.jpg";
import cakeChocolate from "@/assets/cake-chocolate.jpg";
import cakeStrawberry from "@/assets/cake-strawberry.jpg";
import cakeVanilla from "@/assets/cake-vanilla.jpg";
import cakeRedVelvet from "@/assets/cake-redvelvet.jpg";
import { useEffect, useState } from "react";
import supabase from "@/lib/db";

const imageMap: Record<string, string> = {
  "cake-chocolate.jpg": cakeChocolate,
  "cake-strawberry.jpg": cakeStrawberry,
  "cake-vanilla.jpg": cakeVanilla,
  "cake-redvelvet.jpg": cakeRedVelvet,
};

const Home = () => {
  const featuredProducts = products.filter((p) => p.featured);
  const [cakes, setCakes] = useState<ICake[]>([]);

  useEffect(() => {
    const fetchCakes = async () => {
      const { data, error } = await supabase.from("cakes").select("*");

      if (error) {
        console.error("Error fetching cakes:", error);
        return;
      } else {
        setCakes(data);
      }
    };

    fetchCakes();
  }, [supabase]);

  console.log(cakes);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-hero overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Freshly Baked Happiness
              </h1>
              <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed">
                Every slice tells a story of passion, quality ingredients, and
                love baked into every layer.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/menu">
                  <Button variant="hero">Explore Our Menu</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="rounded-2xl">
                    Custom Orders
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-accent fill-accent" />
                  <span className="font-sans text-sm font-medium">
                    4.9/5 Rating
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary fill-primary" />
                  <span className="font-sans text-sm font-medium">
                    2000+ Happy Customers
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-soft opacity-50 blur-3xl rounded-full" />
              <img
                src={heroImage}
                alt="Beautiful pink frosted layered cake with fresh berries"
                className="relative rounded-3xl shadow-hover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cakes */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Best Seller Cakes
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most loved creations, handcrafted with premium ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <Link
                key={product.id}
                to={`/cake/${product.id}`}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-hover">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={imageMap[product.image]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full mb-3">
                      {product.category}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl font-bold text-primary">
                        ${product.price}
                      </span>
                      <Button variant="soft" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu">
              <Button variant="outline" size="lg">
                View All Cakes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-16 md:py-20 bg-gradient-soft">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <Card className="border-2 border-primary/20 shadow-hover overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-accent/20 rounded-full mb-6">
                <Clock className="h-8 w-8 text-accent-foreground" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Special Offer This Month
              </h2>
              <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Order 2 cakes and get 1 free! Perfect for celebrations, parties,
                or just treating yourself.
              </p>
              <Link to="/menu">
                <Button variant="hero">Order Now</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                review:
                  "The best cake I've ever tasted! The chocolate dream is absolutely divine.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                review:
                  "Perfect for our wedding! Beautiful presentation and incredible taste.",
                rating: 5,
              },
              {
                name: "Emily Davis",
                review:
                  "I order from Velvet Crumb every month. Consistent quality and always fresh!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 border-border hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-accent fill-accent"
                      />
                    ))}
                  </div>
                  <p className="font-sans text-muted-foreground mb-4 italic">
                    "{testimonial.review}"
                  </p>
                  <p className="font-sans font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
