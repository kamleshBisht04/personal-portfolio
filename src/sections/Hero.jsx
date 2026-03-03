import Button from "@/components/Button";
import AnimatedBorderButton from "@/components/AnimatedBorderButton";
import { MoveRight, Download } from "lucide-react";
import { socialLinks } from "@/constant/const";
import { categories, skillsData } from "../constant/const";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="./hero-bg.jpg"
          alt="Hero image"
          className="h-full w-full object-cover opacity-40 "
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
            <div className="animate-fade-in animation-delay-300 flex flex-wrap gap-6">
              <Button>
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
        {/* skill  */}
        <div className="mt-24 py-30 px-6 animate-fade-in animation-delay-200 " id="skill">
          <div className=" rounded-3xl border border-white/10 px-10 py-5">
            <h2 className="mb-4 text-center text-xl font-bold text-primary">
              My Technical Skills
            </h2>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <div key={category}>
                  {/* Category Title */}
                  <div className="mb-6 flex items-center gap-3">
                    <div className="bg-primary h-3 w-3 rounded-full" />
                    <h3 className="text-[18px] font-semibold text-primary glass px-4 py-1 rounded-xl ">{category}</h3>
                  </div>

                  {/* Tree Branch */}
                  <div className="ml-4 space-y-4 border-l border-white/10 pl-6">
                    {skillsData
                      .filter((skill) => skill.category === category)
                      .map((skill, idx) => {
                        const Icon = skill.icon;

                        return (
                          <div
                            key={idx}
                            className="group relative flex items-center gap-3"
                          >
                            {/* Connector */}
                            <div className="absolute top-3 -left-6 w-6 border-t border-white/10" />
                            <span className="bg-white p-[5px] rounded-full">
                              <Icon
                                size={22}
                                style={{ color: skill.color }}
                                className="transition group-hover:scale-110"
                              />
                            </span>
                            <span className="group-hover:text-primary text-md transition">
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
