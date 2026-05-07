import { highlights } from "@/constant/const";

const About = () => {
  return (
    <section
      id="about"
      className="relative mt-16 scroll-mt-28 overflow-hidden pb-16"
    >
      <div className="container-custom relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="animate-fade-in text-primary animation-delay-100 text-4xl leading-tight font-bold md:text-5xl">
              Building the future,
              <span className="font-serif font-normal text-white italic">
                one component at a time.
              </span>
            </h2>

            <div className="animate-fade-in animation-delay-200 text-muted-foreground space-y-4">
              <p>
                I'm a passionate MERN Stack Developer focused on building
                modern, responsive, and user-friendly web applications. I enjoy
                turning ideas into full-stack digital experiences using MongoDB,
                Express, React, and Node.js.
              </p>

              <p>
                As a fresher, I am constantly learning and improving my skills
                in React, Node.js, Express, MongoDB, and Tailwind CSS. I also
                work with tools like Git, GitHub, REST APIs, and Postman to
                build and test scalable applications. I believe in writing
                clean, maintainable code and creating projects that are both
                visually appealing and technically strong.
              </p>

              <p>
                My goal is to grow as a full-stack developer by contributing to
                impactful projects, solving real-world problems, and
                continuously exploring modern web technologies.
              </p>
            </div>

            <div className="glass glow-border animate-fade-in animation-delay-300 rounded-2xl p-6">
              <p className="text-foreground text-lg font-medium italic">
                "I’m committed to continuous learning and building meaningful
                digital experiences that create real value."
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass animate-fade-in rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <item.icon className="text-primary h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
