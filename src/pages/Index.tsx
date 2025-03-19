
import Navbar from "@/components/layout/Navbar";
import TemplateGallery from "@/components/slides/TemplateGallery";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Presentation, Layout, Image, FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-32 border-b border-border">
          <div className="container max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 animate-slide-right">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                  Create stunning presentations
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  Present your ideas with elegance
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Create beautiful, professional presentations with our simple and intuitive slide editor. Choose from templates or start from scratch.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" asChild>
                    <Link to="/editor/new">
                      Create Presentation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/templates">Browse Templates</Link>
                  </Button>
                </div>
              </div>
              <div className="relative hidden md:block animate-slide-left">
                <div className="absolute inset-0 scale-[0.8] translate-x-[10%] translate-y-[-5%] bg-primary rounded-lg blur-3xl opacity-10"></div>
                <div className="relative aspect-[5/3] rounded-lg shadow-2xl overflow-hidden border border-border/80">
                  <img
                    src="https://images.unsplash.com/photo-1558403194-611308249627?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Presentation Editor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Everything you need for perfect presentations
              </h2>
              <p className="text-lg text-muted-foreground">
                Our platform provides all the tools you need to create professional presentations in minutes, not hours.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Presentation className="h-10 w-10 text-primary" />}
                title="Beautiful Templates"
                description="Start with professionally designed templates for any occasion or purpose."
                delay={0}
              />
              <FeatureCard
                icon={<Layout className="h-10 w-10 text-primary" />}
                title="Easy Editing"
                description="Simple and intuitive interface that makes creating slides enjoyable."
                delay={1}
              />
              <FeatureCard
                icon={<Image className="h-10 w-10 text-primary" />}
                title="Rich Media"
                description="Add images, videos, and interactive elements to enhance your presentations."
                delay={2}
              />
              <FeatureCard
                icon={<FileText className="h-10 w-10 text-primary" />}
                title="Sharing & Export"
                description="Share your presentations or export them as PDFs with a single click."
                delay={3}
              />
              <FeatureCard
                icon={<Layout className="h-10 w-10 text-primary" />}
                title="Smart Layouts"
                description="Auto-adjusting layouts ensure your content always looks great."
                delay={4}
              />
              <FeatureCard
                icon={<Presentation className="h-10 w-10 text-primary" />}
                title="Presentation Mode"
                description="Present directly from the browser with full-screen mode and presenter tools."
                delay={5}
              />
            </div>
          </div>
        </section>
        
        {/* Templates Section */}
        <section className="py-16 md:py-24 bg-secondary/30 border-y border-border">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Templates
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our curated collection of professional presentation templates.
              </p>
            </div>
            
            <TemplateGallery featuredOnly={true} maxDisplay={3} />
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-6xl">
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 animate-slide-right">
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    Ready to create your next presentation?
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Join thousands of users who create stunning presentations every day with our platform.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/editor/new">
                      Start Creating Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="hidden md:block animate-slide-left">
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHByZXNlbnRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" 
                      alt="Presentation in action" 
                      className="w-full h-full object-cover object-center" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xs">S</span>
                </div>
                <span className="font-medium">Slides</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Slides. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  return (
    <div 
      className="p-6 rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 animate-slide-up"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Index;
