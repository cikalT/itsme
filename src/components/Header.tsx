
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { resumeFilePath } from "@/data";
import { ResumeButton } from "./ResumeButton";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  // { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Cikal T
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-foreground/80 hover:text-primary transition-colors",
                location.pathname === item.path && "text-primary font-medium"
              )}
            >
              {item.name}
            </Link>
          ))}
          <ResumeButton />
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 p-1 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t pt-2 pb-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "py-2 px-3 text-foreground/80 hover:text-primary transition-colors",
                  location.pathname === item.path &&
                    "text-primary font-medium bg-accent/50 rounded-md"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="py-2 px-3">
              <ResumeButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
