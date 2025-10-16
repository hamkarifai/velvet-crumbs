import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Trash2 } from "lucide-react";

const Cart = () => {
  // Mock empty cart for now
  const cartItems: any[] = [];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-background">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <Card className="p-12 text-center border-2 border-dashed border-border">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-6 bg-muted rounded-full">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Your cart is empty
              </h2>
              <p className="font-sans text-muted-foreground max-w-md">
                Start adding some delicious cakes to your cart and make your day sweeter!
              </p>
              <Link to="/menu" className="pt-4">
                <Button variant="hero">Browse Our Cakes</Button>
              </Link>
            </div>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {/* Cart items would be mapped here */}
            </div>

            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Order Summary
                  </h3>
                  <div className="space-y-2 py-4 border-y border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">$0.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Delivery</span>
                      <span className="font-medium">$0.00</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-serif text-lg font-semibold">Total</span>
                    <span className="font-serif text-2xl font-bold text-primary">
                      $0.00
                    </span>
                  </div>
                  <Button variant="hero" className="w-full">
                    Proceed to Checkout
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
