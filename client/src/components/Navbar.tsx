import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn, scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const isMobile = useMobile();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id") || "";
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavItems = (mobile = false) => {
    return navItems.map((item) => (
      <a
        key={item.href}
        href={item.href}
        className={cn(
          "transition duration-300 hover:text-primary",
          activeSection === item.href.slice(1) ? "text-primary font-medium" : "text-foreground",
          mobile ? "py-2" : ""
        )}
        onClick={(e) => {
          e.preventDefault();
          const sectionId = item.href.slice(1);
          scrollToSection(sectionId);
          
          if (mobile) {
            const sheetClose = document.getElementById("sheet-close");
            if (sheetClose) {
              (sheetClose as HTMLButtonElement).click();
            }
          }
        }}
      >
        {item.label}
      </a>
    ));
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 shadow-sm z-50 dark:bg-background/95">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#hero" 
            className="text-2xl font-bold flex items-center"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
          >
            <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">&lt;JD/&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {renderNavItems()}
          </div>

          {/* Mobile Navigation */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <button id="sheet-close" className="hidden" />
                <div className="flex flex-col space-y-4 mt-10">
                  {renderNavItems(true)}
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
