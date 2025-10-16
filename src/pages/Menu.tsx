import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import cakeChocolate from "@/assets/cake-chocolate.jpg";
import cakeStrawberry from "@/assets/cake-strawberry.jpg";
import cakeVanilla from "@/assets/cake-vanilla.jpg";
import cakeRedVelvet from "@/assets/cake-redvelvet.jpg";

const imageMap: Record<string, string> = {
  "cake-chocolate.jpg": cakeChocolate,
  "cake-strawberry.jpg": cakeStrawberry,
  "cake-vanilla.jpg": cakeVanilla,
  "cake-redvelvet.jpg": cakeRedVelvet,
};

type Category = "All" | "Classic" | "Fruity" | "Premium" | "Modern";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const categories: Category[] = ["All", "Classic", "Fruity", "Premium", "Modern"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-soft">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our Cake Collection
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Handcrafted with love, made with the finest ingredients
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 bg-background border-b border-border sticky top-20 z-40 backdrop-blur-md bg-background/95">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/cake/${product.id}`}
                className="group animate-scale-in"
              >
                <Card className="overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-hover h-full">
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
                    <p className="font-sans text-sm text-muted-foreground mb-4">
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="font-sans text-lg text-muted-foreground">
                No cakes found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;
