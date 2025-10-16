import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Velvet Crumb
            </h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              Handcrafted cakes made with love. Every slice tells a story of passion, quality, and happiness.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Menu
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  123 Sweet Street, Bakery Lane
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">hello@velvetcrumb.com</p>
              </div>
            </div>
          </div>

          {/* Social & Hours */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-foreground">Follow Us</h4>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="pt-2">
              <p className="text-sm font-medium text-foreground">Opening Hours</p>
              <p className="text-sm text-muted-foreground mt-1">Mon - Sat: 9AM - 7PM</p>
              <p className="text-sm text-muted-foreground">Sunday: 10AM - 5PM</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Velvet Crumb. All rights reserved. Made with love and butter.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
