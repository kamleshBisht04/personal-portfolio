import { categories, skillsData } from "@/constant/const";

const Skills = () => {
  return (
    <section
      className="container-custom animate-fade-in animation-delay-200 relative mt-16 scroll-mt-24 mb-12 overflow-hidden"
      id="skill"
    >
      <div className="rounded-3xl border border-white/10 px-10 py-10">
        <h2 className="text-primary mb-4 text-center text-xl font-bold">
          My Technical Skills
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category}>
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary h-3 w-3 rounded-full" />
                <h3 className="text-primary rounded-xl px-4 py-1 text-[18px] font-semibold">
                  {category}
                </h3>
              </div>

              <div className="ml-4 space-y-4 overflow-hidden border-l border-white/20 pl-6">
                {skillsData
                  .filter((skill) => skill.category === category)
                  .map((skill, idx) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={idx}
                        className="group relative flex items-center gap-3"
                      >
                        <div className="from-primary/60 absolute top-3 -left-6 h-px w-6 bg-gradient-to-r to-transparent" />
                        <span className="rounded-full bg-white p-[5px]">
                          <Icon
                            size={22}
                            style={{ color: skill.color }}
                            className="transition group-hover:scale-110"
                          />
                        </span>
                        <span className="group-hover:text-primary text-md font-medium transition">
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
    </section>
  );
};

export default Skills;
