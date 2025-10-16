import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-soft pt-20">
      <div className="text-center space-y-6 px-4">
        <h1 className="font-serif text-8xl md:text-9xl font-bold text-primary">404</h1>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
          Oops! Page Not Found
        </h2>
        <p className="font-sans text-lg text-muted-foreground max-w-md mx-auto">
          Looks like this page got eaten! Let's get you back to something sweet.
        </p>
        <Link to="/">
          <Button variant="hero">
            <Home className="mr-2 h-5 w-5" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
