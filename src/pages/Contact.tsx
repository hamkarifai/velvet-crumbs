import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-hero">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Let's create something sweet together!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-2 border-border shadow-soft">
              <CardContent className="p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your cake needs..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-2 resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-2 border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-foreground mb-1">
                        Visit Us
                      </h3>
                      <p className="font-sans text-muted-foreground">
                        123 Sweet Street, Bakery Lane<br />
                        Dessert City, DC 12345
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-secondary/30 rounded-lg">
                      <Phone className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-foreground mb-1">
                        Call Us
                      </h3>
                      <p className="font-sans text-muted-foreground">
                        +1 (555) 123-4567<br />
                        Mon-Sat: 9AM - 7PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/30 rounded-lg">
                      <Mail className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-foreground mb-1">
                        Email Us
                      </h3>
                      <p className="font-sans text-muted-foreground">
                        hello@velvetcrumb.com<br />
                        We reply within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sans font-semibold text-foreground mb-3">
                        Opening Hours
                      </h3>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Monday - Saturday</span>
                          <span className="font-medium">9:00 AM - 7:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Sunday</span>
                          <span className="font-medium">10:00 AM - 5:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 bg-gradient-soft">
                <CardContent className="p-6">
                  <h3 className="font-sans font-semibold text-foreground mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
