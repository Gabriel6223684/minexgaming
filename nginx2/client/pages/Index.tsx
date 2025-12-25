import { Link } from "react-router-dom";
import { Users, Code, Briefcase, MessageSquare, GitBranch, Zap } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">CodeNet</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/70 hover:text-foreground transition">Features</a>
            <a href="#how-it-works" className="text-foreground/70 hover:text-foreground transition">How It Works</a>
            <a href="#community" className="text-foreground/70 hover:text-foreground transition">Community</a>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition">
            Join Now
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
            <span className="text-accent font-medium text-sm">🚀 The Developer Network</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Connect, Collaborate, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Code Together</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed">
            CodeNet is the ultimate networking platform designed specifically for programmers. Find collaborators, share projects, learn from peers, and grow your professional network in a community built by developers, for developers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">
              Get Started Free
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-lg font-semibold transition">
              Explore Community
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-foreground/60">Developers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">1.2K+</div>
              <div className="text-sm text-foreground/60">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-foreground/60">Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-card/50 border-y border-border py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need
            </h2>
            <p className="text-foreground/60 text-lg">
              Build meaningful connections and accelerate your development journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-background rounded-xl border border-border p-6 hover:border-primary/50 transition group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Smart Matching</h3>
              <p className="text-foreground/60">
                Find developers with matching skills, interests, and project goals. Our algorithm connects you with the right people.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background rounded-xl border border-border p-6 hover:border-accent/50 transition group">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                <MessageSquare className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Real-time Chat</h3>
              <p className="text-foreground/60">
                Communicate instantly with potential collaborators. Share ideas, discuss projects, and build relationships in real-time.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background rounded-xl border border-border p-6 hover:border-primary/50 transition group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Project Showcase</h3>
              <p className="text-foreground/60">
                Display your portfolio and projects. Get discovered by potential clients, collaborators, and employers.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-background rounded-xl border border-border p-6 hover:border-accent/50 transition group">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                <GitBranch className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">GitHub Integration</h3>
              <p className="text-foreground/60">
                Seamlessly connect your GitHub profile. Let others see your contributions and open source work.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-background rounded-xl border border-border p-6 hover:border-primary/50 transition group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Skill Tags</h3>
              <p className="text-foreground/60">
                Tag your expertise in technologies, frameworks, and methodologies. Get recommended based on your skills.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-background rounded-xl border border-border p-6 hover:border-accent/50 transition group">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition">
                <Code className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Code Reviews</h3>
              <p className="text-foreground/60">
                Request code reviews from experienced developers. Share knowledge and improve code quality together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-foreground/60 text-lg">
            Get started in three simple steps
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Create Your Profile</h3>
                <p className="text-foreground/60">
                  Sign up and set up your developer profile. Add your skills, interests, and connect your GitHub account.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-white font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Discover Developers</h3>
                <p className="text-foreground/60">
                  Browse the community, search by skills and interests, and find developers to collaborate with.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Start Collaborating</h3>
                <p className="text-foreground/60">
                  Connect with other developers, join projects, share ideas, and grow your network together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="bg-card/50 border-y border-border py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-lg text-foreground/60 mb-8">
              Be part of a vibrant community where developers collaborate, learn, and build amazing things together. Whether you're looking for your next project, learning opportunity, or just want to expand your network, CodeNet is the place to be.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-foreground">CodeNet</span>
              </div>
              <p className="text-sm text-foreground/60">
                The networking platform built for developers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-foreground transition">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition">Discussions</a></li>
                <li><a href="#" className="hover:text-foreground transition">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-foreground transition">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2024 CodeNet. All rights reserved. Built by developers, for developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
