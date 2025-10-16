import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Sparkles } from "lucide-react";
import aboutImage from "@/assets/about-baker.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-hero">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our Story
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Baking happiness, one slice at a time
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Where It All Began
              </h2>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                Velvet Crumb started in 2018 with a simple mission: to bring joy through exceptional handcrafted cakes. What began as a small home kitchen operation has grown into a beloved bakery known for quality, creativity, and that special touch of love in every creation.
              </p>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                Every cake we make tells a story. From birthday celebrations to wedding milestones, we're honored to be part of your special moments. Our commitment to using only the finest ingredients and traditional baking methods ensures that every bite is a moment of pure happiness.
              </p>
            </div>

            <div className="animate-scale-in">
              <img
                src={aboutImage}
                alt="Baker working in a warm, inviting bakery kitchen"
                className="rounded-3xl shadow-hover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gradient-soft">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-primary transition-all hover:shadow-hover">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Made with Love
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Every cake is handcrafted with passion and care. We treat each order as if we're baking for our own family.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-all hover:shadow-hover">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-secondary/30 rounded-full mb-6">
                  <Award className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Premium Quality
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  We source only the finest ingredients—real butter, organic eggs, and premium chocolate for unforgettable taste.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary transition-all hover:shadow-hover">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-accent/30 rounded-full mb-6">
                  <Sparkles className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Creative Excellence
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  From classic favorites to custom designs, we blend tradition with innovation to create cake magic.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-12">
          <Card className="border-2 border-primary/20 shadow-soft">
            <CardContent className="p-8 md:p-12">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                To create exceptional cakes that bring people together and turn ordinary moments into extraordinary memories. We believe that the perfect cake isn't just about taste—it's about the joy, love, and celebration it represents.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20 shadow-soft">
            <CardContent className="p-8 md:p-12">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                To be the most trusted and beloved cake shop in our community, known not just for delicious cakes, but for creating sweet memories that last a lifetime. We're building a legacy of happiness, one cake at a time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
