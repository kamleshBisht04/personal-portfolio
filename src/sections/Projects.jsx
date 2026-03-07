import { useState } from "react";
import { projects } from "@/constant/const";
import { ArrowUpRight, Github, Eye } from "lucide-react";
import AnimatedBorderButton from "@/components/AnimatedBorderButton";
import { useRef } from "react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const handleToggle = () => {
    setShowAll(!showAll);

    if (showAll) {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
       <hr className="my-10 text-gray-700/50" />
      <section
        id="projects"
        className="relative overflow-hidden py-24"
        ref={sectionRef}
      >
        <div className="container-custom relative z-10">
          {/* Background glow */}
          <div className="bg-primary/5 absolute top-1/4 right-0 h-96 w-96 rounded-full blur-3xl" />
          <div className="bg-highlight/5 absolute bottom-1/4 left-0 h-64 w-64 rounded-full blur-3xl" />

          {/* Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-primary text-xl font-semibold tracking-wider uppercase">
              Featured Work
            </span>

            <h2 className="text-secondary-foreground mt-4 mb-6 text-4xl font-bold md:text-5xl">
              Projects that{" "}
              <span className="font-serif font-normal text-white italic">
                make an impact.
              </span>
            </h2>

            <p className="text-muted-foreground text-[17px]">
              A selection of my recent work, from complex web applications to
              innovative tools that solve real-world problems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
            {visibleProjects.map((project) => (
              <div
                key={project.title}
                className="group glass relative animate-fade-in animation-delay-200 overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                {/* Hover Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition duration-300 group-hover:opacity-100">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass hover:bg-primary hover:text-primary-foreground rounded-full p-3"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass hover:bg-primary hover:text-primary-foreground rounded-full p-3"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>

                {/* Content */}
                <div className="space-y-2 p-4">
                  <div className="flex items-start justify-between">
                    <h3 className="group-hover:text-primary text-lg font-semibold transition-colors">
                      {project.title}
                    </h3>

                    <ArrowUpRight className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border-border/50 bg-surface text-muted-foreground hover:border-primary/50 hover:text-primary rounded-full border px-3 py-1 text-xs font-medium transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          {projects.length > 3 && (
            <div className="mt-3 text-center">
              <AnimatedBorderButton onClick={handleToggle}>
                {showAll ? "Show Less" : "View All Projects"}
                <Eye className="text-muted-foreground h-5 w-5" />
              </AnimatedBorderButton>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
