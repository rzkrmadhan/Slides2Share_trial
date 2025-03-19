
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { templates } from "@/utils/templates";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Search } from "@/components/ui/Search";

interface TemplateGalleryProps {
  featuredOnly?: boolean;
  maxDisplay?: number;
}

const TemplateGallery = ({ featuredOnly = false, maxDisplay }: TemplateGalleryProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const filteredTemplates = templates.filter(template => {
    if (featuredOnly && !template.featured) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        template.title.toLowerCase().includes(query) ||
        template.category.toLowerCase().includes(query) ||
        template.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    return true;
  });

  const displayTemplates = maxDisplay 
    ? filteredTemplates.slice(0, maxDisplay) 
    : filteredTemplates;

  const selectTemplate = (templateId: string) => {
    toast.success("Template selected. Loading editor...");
    navigate(`/editor/template/${templateId}`);
  };

  return (
    <div className="container py-8 animate-fade-in">
      {!featuredOnly && (
        <div className="mb-8 w-full max-w-lg mx-auto">
          <Search
            placeholder="Search templates by name, category or tags..."
            value={searchQuery}
            onChange={setSearchQuery}
          />
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayTemplates.map((template, index) => (
          <div 
            key={template.id} 
            className="template-card group animate-slide-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="aspect-slide w-full bg-secondary overflow-hidden">
              <img 
                src={template.thumbnail} 
                alt={template.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                loading="lazy"
              />
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-lg line-clamp-1">{template.title}</h3>
                {template.featured && (
                  <Badge variant="secondary" className="ml-2">Featured</Badge>
                )}
              </div>
              
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{template.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {template.tags.slice(0, 3).map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                ))}
              </div>
              
              <Button 
                onClick={() => selectTemplate(template.id)} 
                className="w-full transition-all duration-300"
              >
                Use Template
              </Button>
            </div>
            
            <div className="template-card-overlay">
              <Button 
                variant="secondary" 
                onClick={() => selectTemplate(template.id)}
                className="hover:scale-105 transition-transform duration-300"
              >
                Preview & Use
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      {featuredOnly && filteredTemplates.length > maxDisplay! && (
        <div className="flex justify-center mt-10">
          <Button variant="outline" asChild>
            <a href="/templates">View All Templates</a>
          </Button>
        </div>
      )}
    </div>
  );
};

export default TemplateGallery;
