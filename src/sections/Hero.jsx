import Button from "@/components/Button";
import AnimatedBorderButton from "@/components/AnimatedBorderButton";
import { MoveRight, Download, ChevronDown } from "lucide-react";
import { skillsData } from "@/constant/const";
import ParticlesBackground from "@/components/ParticlesBackground";
import Social from "../components/Social";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="./hero-bg.jpg"
          alt="Hero image"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="from background/20 via-background/80 to-background absolute inset-0 bg-gradient-to-b" />
      </div>

      {/* Green dots */}
      <ParticlesBackground />
      {/* Content */}
      <div className="container-custom relative z-10 mx-auto px-16  pt-32 pb-20">
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
            <div className="animate-fade-in animation-delay-300 flex flex-wrap gap-6">
              <a href="#contact">
                <Button>
                  Contact Me
                  <MoveRight className="h-5 w-5" />
                </Button>
              </a>
              <a href="/kamleshResume.pdf" download>
                <AnimatedBorderButton>
                  <Download className="h-5 w-5" href="./kamleshResume.pdf" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>
            {/* social links */}
            <div className="animate-fade-in animation-delay-400 flex items-center gap-6">
              <span className="text-muted-foreground text-sm">Follow me: </span>
              <Social />
            </div>
          </div>
          {/* right column - profile section */}
          <div className="animation-fade-in relative py-8">
            {/* profile image*/}
            <div className="animate-fade-in mx-w-xs animation-delay-200 relative mx-auto max-w-[18rem] py-10">
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
                <div className="glass animate-float animation-delay-00 absolute -top-5 -left-5 rounded-xl px-6 py-1 transition-all ease-in-out">
                  <div>
                    <div />
                    <div className="mr-2 inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />

                    <span className="text-primary text-sm font-bold">
                      React Devloper
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* skill Marquee section  */}

        <div className="animate-fade-in animation-delay-600">
          <p className="text-muted-foreground mb-6 text-center text-sm">
            {" "}
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="from-background absolute top-0 bottom-0 left-0 z-10 w-32 bg-gradient-to-r to-transparent" />
            <div className="from-background absolute top-0 right-0 bottom-0 z-10 w-32 bg-gradient-to-l to-transparent" />
            <div className="animate-marquee flex">
              {[...skillsData, ...skillsData].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-muted-foreground/50 hover:text-muted-foreground animate-marquee flex flex-wrap items-center gap-2 text-xl font-semibold transition-colors">
                    <span>{<skill.icon />}</span>
                    <p>{skill.name}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* chervronDown section */}
        <div className="animate-fade-in animation-delay-800 absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary group flex flex-col items-center gap-2 transition-colors"
          >
            <span className="text-xs tracking-wider uppercase">Scroll</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
