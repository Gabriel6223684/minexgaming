import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Code, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">CodeNet</span>
          </a>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition">
            Join Now
          </button>
        </nav>
      </header>
      {/* Error Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8 text-destructive" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2">
            404
          </h1>

          <p className="text-xl text-foreground/60 mb-8">
            Page not found
          </p>

          <p className="text-foreground/50 mb-8 text-sm">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition"
          >
            ← Return to Home
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-foreground/60">
          <p>&copy; 2025 CodeNet. Building the future of developer networking.</p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
