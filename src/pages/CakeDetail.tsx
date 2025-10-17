import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Heart } from "lucide-react";
import cakeChocolate from "@/assets/cake-chocolate.jpg";
import cakeStrawberry from "@/assets/cake-strawberry.jpg";
import cakeVanilla from "@/assets/cake-vanilla.jpg";
import cakeRedVelvet from "@/assets/cake-redvelvet.jpg";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import supabase from "@/lib/db";

const imageMap: Record<string, string> = {
  "cake-chocolate.jpg": cakeChocolate,
  "cake-strawberry.jpg": cakeStrawberry,
  "cake-vanilla.jpg": cakeVanilla,
  "cake-redvelvet.jpg": cakeRedVelvet,
};

const CakeDetail = () => {
  const { id } = useParams();
  const [cakes, setCakes] = useState(null);

  useEffect(() => {
    const fetchCakes = async () => {
      const { data, error } = await supabase
        .from("cakes")
        .select("*")
        .eq("id", id);

      if (error) {
        console.error("Error fetching cakes:", error);
        return;
      } else {
        setCakes(data);
      }
    };

    fetchCakes();
  }, [id]);

  console.log(cakes);

  if (!cakes) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
            Cake Not Found
          </h1>
          <Link to="/menu">
            <Button variant="default">Back to Menu</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success(`${cakes.map((c: ICake) => c.name)[0]} added to cart!`, {
      description: "Continue shopping or proceed to checkout",
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Breadcrumb */}
      <div className="bg-gradient-soft py-6 border-b border-border">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-sans text-sm">Back to Menu</span>
          </Link>
        </div>
      </div>

      {/* cakes Detail */}
      <section className="py-12 md:py-16 bg-background">
        {cakes.map((cake: ICake) => {
          return (
            <>
              <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Image */}
                  <div className="animate-scale-in">
                    <Card className="overflow-hidden border-2 border-border">
                      <img
                        src={cake.image}
                        alt={cake.name}
                        className="w-full aspect-square object-cover"
                      />
                    </Card>
                  </div>

                  {/* Details */}
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <span className="inline-block px-4 py-2 text-sm font-medium bg-secondary/50 text-secondary-foreground rounded-full mb-4">
                        {cake.category}
                      </span>
                      <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                        {cake.name}
                      </h1>
                      <p className="font-serif text-3xl font-bold text-primary">
                        ${cake.price}
                      </p>
                    </div>

                    <div className="py-6 border-y border-border">
                      <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                        {cake.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-sans font-semibold text-foreground">
                        Cake Details
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Serves 8-10 people</li>
                        <li>• Made with premium, fresh ingredients</li>
                        <li>• Available for same-day delivery</li>
                        <li>• Custom messages available upon request</li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-6">
                      <Button
                        variant="hero"
                        onClick={handleAddToCart}
                        className="flex-1 min-w-[200px]"
                      >
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Add to Cart
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="rounded-2xl"
                      >
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>

                    <Card className="p-6 bg-secondary/20 border-secondary">
                      <h4 className="font-sans font-semibold text-foreground mb-2">
                        Need a custom design?
                      </h4>
                      <p className="font-sans text-sm text-muted-foreground mb-4">
                        We can customize this cake for your special occasion.
                      </p>
                      <Link to="/contact">
                        <Button variant="secondary">Contact Us</Button>
                      </Link>
                    </Card>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>

      {/* Related cakes */}
      <section className="py-12 md:py-16 bg-gradient-soft">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cakes
              .filter(
                (p: ICake) => p.id !== cakes.id && p.category === cakes.category
              )
              .slice(0, 3)
              .map((relatedcakes: ICake) => (
                <Link
                  key={relatedcakes.id}
                  to={`/cake/${relatedcakes.id}`}
                  className="group"
                >
                  <Card className="overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-hover">
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={relatedcakes.image}
                        alt={relatedcakes.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                        {relatedcakes.name}
                      </h3>
                      <p className="font-serif text-xl font-bold text-primary">
                        ${relatedcakes.price}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CakeDetail;
