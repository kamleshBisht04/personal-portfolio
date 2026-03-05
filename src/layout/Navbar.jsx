import Button from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skill", label: "Skill" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 py-4 ${
        isScrolled ? "glass-strong" : "bg-transparent"
      }`}
    >
      <nav className="container-custom mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="hover:text-primary text-xl font-bold tracking-tight"
        >
          &lt;<span className="text-primary"> KB</span> /&gt;
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          <div className="glass flex items-center gap-1 rounded-full px-2 py-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-foreground rounded-full px-4 py-2 text-sm transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm">Hire Me</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="text-foreground hover:bg-primary/5 mr-3 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 active:scale-90 md:hidden"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="glass-strong animate-fade-in md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-8 py-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground py-2 text-lg transition"
              >
                {link.label}
              </a>
            ))}

            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full">Hire Me</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
