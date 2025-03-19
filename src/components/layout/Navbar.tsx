
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <header className="h-16 border-b border-border backdrop-blur-lg bg-background/80 sticky top-0 z-50 flex items-center px-6 transition-all duration-300">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">S</span>
          </div>
          <span className="font-medium text-xl">Slides2Share</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
          <NavLink to="/templates" active={location.pathname === "/templates"}>Templates</NavLink>
          <NavLink to="/editor" active={location.pathname.startsWith("/editor")}>Editor</NavLink>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="outline" asChild>
            <Link to="/templates">Browse Templates</Link>
          </Button>
          
          <Button asChild>
            <Link to="/editor/new">Create Presentation</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, active, children }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-md text-sm transition-colors ${
        active
          ? "bg-secondary text-foreground font-medium"
          : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;

