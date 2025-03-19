
import Slide, { SlideContent } from "./Slide";
import { cn } from "@/lib/utils";

interface SlidePreviewProps {
  content: SlideContent;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}

const SlidePreview = ({ content, className, onClick, isActive }: SlidePreviewProps) => {
  return (
    <div 
      className={cn(
        "aspect-slide w-24 md:w-28 lg:w-32 border border-border rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-200",
        isActive && "ring-2 ring-primary",
        className
      )}
      onClick={onClick}
    >
      <Slide content={content} isPreview={true} />
    </div>
  );
};

export default SlidePreview;
