
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface SlideContent {
  id: string;
  type: "title" | "content" | "image" | "split";
  title?: string;
  subtitle?: string;
  content?: string;
  imageUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  layout?: "center" | "left" | "right";
}

interface SlideProps {
  content: SlideContent;
  isActive?: boolean;
  isPreview?: boolean;
  onClick?: () => void;
  className?: string;
}

const Slide = ({ content, isActive, isPreview, onClick, className }: SlideProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderSlideContent = () => {
    switch (content.type) {
      case "title":
        return (
          <div className="flex flex-col items-center justify-center h-full px-12 text-center">
            {content.title && (
              <h1 
                className={cn(
                  "text-4xl md:text-5xl font-bold mb-4 slide-up-fade",
                  isPreview && "text-xl"
                )}
                style={{ color: content.textColor }}
              >
                {content.title}
              </h1>
            )}
            {content.subtitle && (
              <p 
                className={cn(
                  "text-xl md:text-2xl text-muted-foreground slide-up-fade delay-100",
                  isPreview && "text-sm"
                )}
                style={{ color: content.textColor ? `${content.textColor}99` : undefined }}
              >
                {content.subtitle}
              </p>
            )}
          </div>
        );
        
      case "content":
        return (
          <div className="flex flex-col h-full p-12">
            {content.title && (
              <h2 
                className={cn(
                  "text-3xl font-bold mb-6 slide-up-fade",
                  isPreview && "text-lg mb-2"
                )}
                style={{ color: content.textColor }}
              >
                {content.title}
              </h2>
            )}
            {content.content && (
              <p 
                className={cn(
                  "text-lg slide-up-fade delay-100",
                  isPreview && "text-xs line-clamp-2"
                )}
                style={{ color: content.textColor }}
              >
                {content.content}
              </p>
            )}
          </div>
        );
        
      case "image":
        return (
          <div className="relative h-full overflow-hidden">
            {content.imageUrl && (
              <img
                src={content.imageUrl}
                alt={content.title || "Slide image"}
                className="w-full h-full object-cover"
              />
            )}
            {content.title && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <h2 
                  className={cn(
                    "text-3xl md:text-4xl font-bold text-white text-center px-12 slide-up-fade",
                    isPreview && "text-lg"
                  )}
                >
                  {content.title}
                </h2>
              </div>
            )}
          </div>
        );
        
      case "split":
        return (
          <div className="grid grid-cols-2 h-full">
            <div className="flex flex-col justify-center p-8 slide-right">
              {content.title && (
                <h2 
                  className={cn(
                    "text-2xl md:text-3xl font-bold mb-4",
                    isPreview && "text-base mb-1"
                  )}
                  style={{ color: content.textColor }}
                >
                  {content.title}
                </h2>
              )}
              {content.content && (
                <p 
                  className={cn(
                    "text-lg",
                    isPreview && "text-xs line-clamp-2"
                  )}
                  style={{ color: content.textColor }}
                >
                  {content.content}
                </p>
              )}
            </div>
            <div className="relative h-full slide-left">
              {content.imageUrl && (
                <img
                  src={content.imageUrl}
                  alt="Slide visual"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        );
      
      default:
        return <div className="p-8 text-center">Empty slide</div>;
    }
  };

  return (
    <div
      className={cn(
        "bg-white overflow-hidden", 
        isActive && !isPreview && "ring-2 ring-primary",
        isLoaded && "slide-transition",
        onClick && "cursor-pointer",
        className
      )}
      style={{ backgroundColor: content.backgroundColor || "white" }}
      onClick={onClick}
    >
      {renderSlideContent()}
    </div>
  );
};

export default Slide;
