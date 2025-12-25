import { Code, MessageCircle } from "lucide-react";

interface PagePlaceholderProps {
  pageName: string;
  description?: string;
}

export default function PagePlaceholder({ pageName, description }: PagePlaceholderProps) {
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

      {/* Placeholder Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-primary" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {pageName}
          </h1>
          
          <p className="text-foreground/60 mb-8 text-lg leading-relaxed">
            {description || `This page is coming soon! Help shape CodeNet by letting us know what features you'd like to see here.`}
          </p>
          
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <p className="text-sm text-foreground/70 mb-4">
              Want to see this feature built? Tell us more about what you need!
            </p>
            <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition">
              Request Feature
            </button>
          </div>
          
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition"
          >
            ← Back to Home
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-foreground/60">
          <p>&copy; 2024 CodeNet. Building the future of developer networking.</p>
        </div>
      </footer>
    </div>
  );
}
