import Button from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#", lebel: "Home" },
  { href: "#about", lebel: "About" },
  { href: "#skill", lebel: "Skill" },
  { href: "#project", lebel: "Projects" },
  { href: "#contact", lebel: "Contact" },
];

const Navbar = () => {
  const [isMoblieMenuOpen, setIsMoblieMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-transparent py-5">
      <nav className="container-custom mx-auto flex items-center justify-between">
        <a
          href="#"
          className="hover:text-primary text-xl font-bold tracking-tight"
        >
          &lt;<span className="text-primary"> KB</span> /&gt;
        </a>
        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          <div className="glass flex items-center gap-1 rounded-full px-2 py-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-muted-foreground hover:text-foreground hover:bg-surface rounded-full px-4 py-2 text-sm"
              >
                {link.lebel}
              </a>
            ))}
          </div>
        </div>
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm">Contact</Button>
        </div>
        {/* mobile menu button */}
        <button
          onClick={() => setIsMoblieMenuOpen((prev) => !prev)}
          className="text-foreground hover:bg-primary/5 mr-3 h-10 w-10 items-center justify-center rounded-full px-2 transition-all duration-200 active:scale-90 md:hidden"
        >
          {!isMoblieMenuOpen ? <Menu size={22} /> : <X size={22} />}
        </button>
      </nav>

      {/* mobile menu  */}
      {isMoblieMenuOpen && (
        <div className="glass-strong animate-fade-in md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-8 py-6">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-muted-foreground hover:text-foreground py-2 text-lg"
              >
                {link.lebel}
              </a>
            ))}
            <Button>Contact</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
