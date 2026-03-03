import Button from "@/components/Button";
import AnimatedBorderButton from "@/components/AnimatedBorderButton";
import { MoveRight, Download } from "lucide-react";
import { socialLinks } from "@/constant/const";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="./hero-bg.jpg"
          alt="Hero image"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="from background/20 via-background/80 to-background absolute inset-0 bg-gradient-to-b" />
      </div>

      {/* Green dots */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="container-custom relative z-10 mx-auto px-6 pt-32 pb-20">
        <div className="gap:12 grid items-center lg:grid-cols-2">
          {/* left column -Text section */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="glass text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
                <span className="bg-primary h-2 w-2 animate-pulse rounded-full" />
                Software Engineer • React Devloper
              </span>
            </div>
            {/* headline  */}
            <div className="space-y-4">
              <h1 className="animate-fade-in animation-delay-100 text-4xl leading-tight font-semibold md:text-5xl lg:text-6xl">
                Fuelled by Curiosity Powered by
                <span className="text-primary glow-text"> React</span>
              </h1>
              <p className="text-muted-foreground animate-fade-in animation-delay-200 max-w-lg text-lg">
                Hi, I'm Kamlesh — a passionate Software Engineer specializing in
                React and JavaScript. I focus on building responsive, scalable,
                and modern web applications with clean and efficient code.
              </p>
            </div>
            {/* CTAs */}
            <div className="animate-fade-in animation-delay-300 flex flex-wrap gap-4">
              <Button size="lg">
                Contact Me
                <MoveRight className="h-5 w-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="h-5 w-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
            {/* social links */}
            <div className="animate-fade-in animation-delay-400 flex items-center gap-4">
              <span className="text-muted-foreground text-sm">Follow me: </span>
              {socialLinks.map((social, index) => (
                <a
                  className="glass hover:bg-primary/10 hover:text-primary rounded-full p-2 transition-all duration-300"
                  key={index}
                  href={social.href}
                >
                  {<social.icon className="h-4.5 w-4.5" />}
                </a>
              ))}
            </div>
          </div>
          {/* right column - profile section */}
          <div className="animation-fade-in relative">
            {/* profile image*/}
            <div className="animate-fade-in mx-w-xs animation-delay-200 relative mx-auto max-w-[18rem]">
              <div className="glass glass-border glow-border relative rounded-2xl p-2">
                <div className="from-primary/20 to-primary/10 absolute inset-0 animate-pulse rounded-3xl bg-gradient-to-br via-transparent" />

                <img
                  src="/Profile-photo.jpg"
                  alt="kamlesh bisht"
                  className="aspect-4/5 w-full rounded-2xl object-cover"
                />
                {/* Floating Badge */}
                <div className="glass animate-float absolute -right-4 -bottom-4 rounded-xl px-4 py-1">
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
                    <span className="text-foreground text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* status Badge */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
