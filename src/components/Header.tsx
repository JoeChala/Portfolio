
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            Joseph<span className="text-primary">J</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/experience"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Experience
            </Link>
            <Link
              to="/contact"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pt-4 pb-6 space-y-4">
            <Link
              to="/"
              className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="/experience"
              className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Experience
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
