import { skillGroups } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <AnimatedSection>
          <div className="mb-12">
            <h2
              id="skills-heading"
              className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3"
            >
              Technical Skills
            </h2>
            <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </AnimatedSection>

        {/* Skill groups */}
        <div className="space-y-8">
          {skillGroups.map((group, idx) => (
            <AnimatedSection key={group.category} delay={idx * 60}>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-500 mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1.5 text-sm font-medium
                        bg-neutral-100 dark:bg-neutral-800
                        text-neutral-800 dark:text-neutral-200
                        rounded-md border border-neutral-200 dark:border-neutral-700
                        cursor-default select-none
                        transition-all duration-200
                        hover:-translate-y-1
                        hover:bg-indigo-50 dark:hover:bg-indigo-950
                        hover:border-indigo-400 dark:hover:border-indigo-600
                        hover:text-indigo-700 dark:hover:text-indigo-300
                        hover:shadow-md
                        hover:shadow-indigo-100 dark:hover:shadow-black/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
