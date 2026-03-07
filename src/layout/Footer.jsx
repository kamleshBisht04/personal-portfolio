import Logo from "@/components/Logo";
import Social from "@/components/Social";
import { navLinks } from "@/constant/const";

const Footer = () => {
  return (
    <footer className="bg-card/40 relative mt-24 border-t border-white/10 backdrop-blur-xl">
      {/* Gradient line */}
      <div className="via-primary/60 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent" />

      <div className="container-custom py-14">
        <div className="grid gap-10 md:grid-cols-3 md:items-center">
          {/* Logo + Text */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Logo />
            <p className="text-muted-foreground max-w-xs text-sm">
              Crafting modern, fast and scalable web applications using React,
              JavaScript and modern web technologies.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group text-muted-foreground relative transition"
              >
                {link.label}

                {/* hover underline */}
                <span className="bg-primary absolute -bottom-1 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-4">
            <Social />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-muted-foreground mt-12 border-t border-white/10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Kamlesh Bisht • Built with React &
          Tailwind
        </div>
      </div>
    </footer>
  );
};

export default Footer;
