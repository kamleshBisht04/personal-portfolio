import Button from "@/components/Button";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#", lebel: "Home" },
  { href: "#about", lebel: "About" },
  { href: "#skill", lebel: "Skill" },
  { href: "#project", lebel: "Projects" },
  { href: "#contact", lebel: "Contact" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 right-0 left-0 bg-transparent py-5">
      <nav className="container mx-auto flex items-center justify-between">
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
        <button className="text-foreground px-4 py-2 md:hidden">
          <Menu size={24} />
        </button>
      </nav>

      {/* mobile menu  */}
      <div className="glass-strong md:hidden">
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
    </header>
  );
};

export default Navbar;
