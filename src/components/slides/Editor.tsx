
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, ChevronRight, Plus, LayoutGrid, Image, Type, Trash,
  Save, Share, PlayCircle, ChevronDown, Download
} from "lucide-react";
import Slide, { SlideContent } from "./Slide";
import SlidePreview from "./SlidePreview";
import { templates } from "@/utils/templates";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const defaultSlide: SlideContent = {
  id: "slide-1",
  type: "title",
  title: "Your Presentation Title",
  subtitle: "Add a subtitle or tagline here",
  backgroundColor: "white",
  textColor: "#000000",
  layout: "center"
};

const Editor = () => {
  const { id, templateId } = useParams();
  const navigate = useNavigate();
  
  const [slides, setSlides] = useState<SlideContent[]>([defaultSlide]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [presentationTitle, setPresentationTitle] = useState("Untitled Presentation");
  const [isSaving, setIsSaving] = useState(false);
  
  useEffect(() => {
    if (templateId) {
      const template = templates.find(t => t.id === templateId);
      if (template) {
        setSlides(template.slides);
        setPresentationTitle(template.title);
        toast.success(`Template "${template.title}" loaded successfully!`);
      }
    }
  }, [templateId]);

  const activeSlide = slides[activeSlideIndex];

  const addNewSlide = (type: SlideContent["type"]) => {
    const newSlide: SlideContent = {
      id: `slide-${slides.length + 1}`,
      type,
      title: type === "title" ? "Add Title" : type === "content" ? "Content Slide" : "",
      subtitle: type === "title" ? "Add Subtitle" : "",
      content: type === "content" || type === "split" ? "Add your content here" : "",
      backgroundColor: "white",
      textColor: "#000000",
      imageUrl: type === "image" || type === "split" ? "https://images.unsplash.com/photo-1672576045883-e5b9c593ce3f?q=80&w=1974&auto=format&fit=crop" : undefined,
    };
    
    const newSlides = [...slides];
    newSlides.splice(activeSlideIndex + 1, 0, newSlide);
    setSlides(newSlides);
    setActiveSlideIndex(activeSlideIndex + 1);
    toast.success("New slide added");
  };

  const deleteSlide = () => {
    if (slides.length <= 1) {
      toast.error("Cannot delete the only slide");
      return;
    }
    
    const newSlides = slides.filter((_, index) => index !== activeSlideIndex);
    setSlides(newSlides);
    setActiveSlideIndex(Math.min(activeSlideIndex, newSlides.length - 1));
    toast.success("Slide deleted");
  };

  const savePresentation = () => {
    setIsSaving(true);
    
    // Simulate saving
    setTimeout(() => {
      setIsSaving(false);
      toast.success("Presentation saved successfully!");
    }, 1000);
  };

  const startPresentation = () => {
    toast.success("Starting presentation...");
    // In a full implementation, this would navigate to a fullscreen presentation view
  };

  return (
    <div className="editor-container">
      <div className="editor-sidebar">
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <input
              type="text"
              value={presentationTitle}
              onChange={(e) => setPresentationTitle(e.target.value)}
              className="w-full font-semibold text-lg bg-transparent border-b border-border pb-2 focus:outline-none focus:border-primary transition-colors"
              placeholder="Presentation Title"
            />
          </div>
          
          <div className="space-y-6 flex-1 overflow-y-auto">
            <div className="space-y-3">
              <h3 className="font-medium text-sm text-muted-foreground">ADD SLIDE</h3>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  className="flex flex-col h-auto py-4 gap-1"
                  onClick={() => addNewSlide("title")}
                >
                  <LayoutGrid className="h-4 w-4" />
                  <span className="text-xs">Title</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="flex flex-col h-auto py-4 gap-1"
                  onClick={() => addNewSlide("content")}
                >
                  <Type className="h-4 w-4" />
                  <span className="text-xs">Content</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="flex flex-col h-auto py-4 gap-1"
                  onClick={() => addNewSlide("image")}
                >
                  <Image className="h-4 w-4" />
                  <span className="text-xs">Image</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="flex flex-col h-auto py-4 gap-1"
                  onClick={() => addNewSlide("split")}
                >
                  <LayoutGrid className="h-4 w-4" />
                  <span className="text-xs">Split</span>
                </Button>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-medium text-sm text-muted-foreground">ACTIONS</h3>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-destructive hover:text-destructive"
                  onClick={deleteSlide}
                >
                  <Trash className="h-4 w-4 mr-2" />
                  Delete Current Slide
                </Button>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-medium text-sm text-muted-foreground">EDIT CURRENT SLIDE</h3>
              <div className="space-y-4 bg-background/80 p-4 rounded-lg border border-border">
                {/* In a full implementation, this would include controls for editing the active slide */}
                <p className="text-sm text-muted-foreground">
                  Slide editing controls would go here in a complete implementation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-auto pt-6 space-y-2">
            <Button 
              className="w-full"
              onClick={savePresentation}
              disabled={isSaving}
            >
              {isSaving ? (
                <span className="flex items-center">Saving...</span>
              ) : (
                <span className="flex items-center">
                  <Save className="h-4 w-4 mr-2" />
                  Save Presentation
                </span>
              )}
            </Button>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={startPresentation}
              >
                <PlayCircle className="h-4 w-4 mr-2" />
                Present
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex-1">
                    <Share className="h-4 w-4 mr-2" />
                    Share
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Share className="h-4 w-4 mr-2" />
                    Share Link
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Download className="h-4 w-4 mr-2" />
                    Export as PDF
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
      
      <div className="editor-content">
        <div className="slide-workspace">
          <div className="workspace-slide animate-fade-in">
            {activeSlide && <Slide content={activeSlide} isActive={true} />}
          </div>
        </div>
        
        <div className="slides-strip">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-24 self-center"
            onClick={() => setActiveSlideIndex(Math.max(0, activeSlideIndex - 1))}
            disabled={activeSlideIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex space-x-2 py-2">
            {slides.map((slide, index) => (
              <SlidePreview
                key={slide.id}
                content={slide}
                isActive={index === activeSlideIndex}
                onClick={() => setActiveSlideIndex(index)}
                className="slide-transition"
              />
            ))}
            
            <Button
              variant="outline"
              className="aspect-slide w-24 md:w-28 lg:w-32 h-auto flex items-center justify-center border-dashed"
              onClick={() => addNewSlide("content")}
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-24 self-center"
            onClick={() => setActiveSlideIndex(Math.min(slides.length - 1, activeSlideIndex + 1))}
            disabled={activeSlideIndex === slides.length - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
