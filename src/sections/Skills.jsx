import { categories, skillsData } from "@/constant/const";

const Skills = () => {
  return (
    <div
      className="container-custom animate-fade-in animation-delay-200 mt-24 px-6 py-30"
      id="skill"
    >
      <div className="rounded-3xl border border-white/10 px-10 py-5">
        <h2 className="text-primary mb-4 text-center text-xl font-bold">
          My Technical Skills
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category}>
              {/* Category Title */}
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary h-3 w-3 rounded-full" />
                <h3 className="text-primary rounded-xl px-4 py-1 text-[18px] font-semibold">
                  {category}
                </h3>
              </div>

              {/* Tree Branch */}
              <div className="ml-4 space-y-4 border-l border-white/20 pl-6">
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
                        <div className="absolute top-3 -left-6 w-6 border-t border-white/20" />
                        <span className="rounded-full bg-white p-[5px]">
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
  );
};

export default Skills;
