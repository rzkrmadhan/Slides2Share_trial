
import Navbar from "@/components/layout/Navbar";
import TemplateGallery from "@/components/slides/TemplateGallery";

const Templates = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-12 md:py-16 border-b border-border bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto animate-slide-down">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Presentation Templates
              </h1>
              <p className="text-lg text-muted-foreground">
                Browse our collection of professionally designed templates for any occasion or purpose.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <TemplateGallery />
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

export default Templates;
