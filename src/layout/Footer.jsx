import Logo from "@/components/Logo";
import Social from "@/components/Social";
import { navLinks } from "@/constant/const";

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-white/10">
      <div className="container-custom py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <Logo />

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary rounded-full px-4 py-2 text-sm transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Social />
          </div>
        </div>

        {/* Bottom line */}
        <div className="text-muted-foreground mt-8 border-t border-primary/20 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Kamlesh Bisht. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
