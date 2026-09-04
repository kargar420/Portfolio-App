import { experience } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <AnimatedSection>
          <div className="mb-12">
            <h2
              id="experience-heading"
              className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3"
            >
              Experience
            </h2>
            <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </AnimatedSection>

        {/* Experience entries */}
        <div className="space-y-14">
          {experience.map((item, idx) => (
            <AnimatedSection key={idx} delay={idx * 80}>
              <article>
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                      {item.role}
                    </h3>
                    <p className="text-base text-indigo-600 dark:text-indigo-400 font-medium">
                      {item.company}
                      <span className="text-neutral-500 dark:text-neutral-500 font-normal">
                        {" "}
                        · {item.type}
                      </span>
                    </p>
                  </div>
                  <time className="text-sm text-neutral-500 dark:text-neutral-500 sm:text-right whitespace-nowrap mt-0.5 font-mono">
                    {item.period}
                  </time>
                </div>

                {/* Tech tags — above bullets, matching Projects hierarchy */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2.5 py-1 text-xs font-mono font-medium
                        bg-neutral-100 dark:bg-neutral-800
                        text-neutral-700 dark:text-neutral-300
                        rounded border border-neutral-200 dark:border-neutral-700
                        cursor-default select-none
                        transition-all duration-200
                        hover:-translate-y-0.5
                        hover:bg-indigo-50 dark:hover:bg-indigo-950
                        hover:border-indigo-300 dark:hover:border-indigo-700
                        hover:text-indigo-700 dark:hover:text-indigo-300
                        hover:shadow-sm hover:shadow-indigo-100 dark:hover:shadow-indigo-950"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bullet points */}
                <ul className="space-y-3" role="list">
                  {item.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex gap-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                    >
                      <span
                        className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400"
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
