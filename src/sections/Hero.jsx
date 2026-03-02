import Button from "@/components/Button";
import { MoveRight, Download } from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

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
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
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
                Hi, I'm Kamalesh — a passionate React Developer and Frontend
                Enthusiast. As a fresher, I focus on building responsive and
                user-friendly web applications using React and modern web
                technologies. I'm constantly learning and improving my skills to
                create impactful digital experiences.
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
          </div>
          {/* right column - profile section */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
