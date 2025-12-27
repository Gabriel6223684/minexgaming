import "./global.css";
import "./style.css";
import "./tailwind.config";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
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
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2">
            404
          </h1>

          <p className="text-xl text-foreground/60 mb-8">Page not found</p>

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
          <p>
            &copy; 2025 CodeNet. Building the future of developer networking.
          </p>
        </div>
      </footer>
    </div>
  );
}
