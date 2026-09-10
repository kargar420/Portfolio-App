import Image from "next/image";
import { projects } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-neutral-50 dark:bg-neutral-900/40"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <AnimatedSection>
          <div className="mb-12">
            <h2
              id="projects-heading"
              className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3"
            >
              Projects
            </h2>
            <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </AnimatedSection>

        {/* Project entries */}
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <AnimatedSection key={idx} delay={idx * 100}>
              {/*
               * Outer article: keeps the left-border accent grounded.
               * `group` enables the image hover-scale micro-interaction.
               */}
              <article
                className="group pl-4 border-l-2 border-indigo-200 dark:border-indigo-900
                  transition-colors duration-300
                  hover:border-indigo-400 dark:hover:border-indigo-600"
              >
                {/*
                 * Responsive 12-column grid.
                 * Mobile: single column (text → image stacked).
                 * lg+: text takes 7 cols, image takes 5 cols.
                 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                  {/* ── Left column: text content (Title → Badges → Links → Bullets) ── */}
                  <div className="lg:col-span-7 flex flex-col">

                    {/* 1. Title */}
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
                      {project.name}
                    </h3>

                    {/* 2. Stack chips */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block px-2.5 py-1 text-xs font-mono font-medium
                            bg-indigo-50 dark:bg-indigo-950
                            text-indigo-700 dark:text-indigo-300
                            rounded border border-indigo-200 dark:border-indigo-800
                            cursor-default select-none
                            transition-all duration-200
                            hover:-translate-y-0.5
                            hover:bg-indigo-100 dark:hover:bg-indigo-900
                            hover:border-indigo-400 dark:hover:border-indigo-600
                            hover:shadow-sm hover:shadow-indigo-200/60 dark:hover:shadow-indigo-950/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* 3. Project links */}
                    {(project.links.live || project.links.github) && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium
                              border border-neutral-300 dark:border-neutral-700
                              text-neutral-600 dark:text-neutral-400
                              rounded-md
                              transition-all duration-200
                              hover:-translate-y-0.5
                              hover:border-indigo-400 dark:hover:border-indigo-500
                              hover:text-indigo-600 dark:hover:text-indigo-400
                              hover:shadow-sm hover:shadow-black/5 dark:hover:shadow-white/5"
                          >
                            <ExternalLinkIcon />
                            Live
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium
                              border border-neutral-300 dark:border-neutral-700
                              text-neutral-600 dark:text-neutral-400
                              rounded-md
                              transition-all duration-200
                              hover:-translate-y-0.5
                              hover:border-neutral-500 dark:hover:border-neutral-500
                              hover:text-neutral-900 dark:hover:text-neutral-100
                              hover:shadow-sm hover:shadow-black/5 dark:hover:shadow-white/5"
                          >
                            <GitHubIcon />
                            GitHub
                          </a>
                        )}
                      </div>
                    )}

                    {/* 4. Bullet points */}
                    <ul className="space-y-3" role="list">
                      {project.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex gap-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                        >
                          <span
                            className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 dark:bg-indigo-500"
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ── Right column: project screenshot ── */}
                  {project.image && (
                    <div className="lg:col-span-5">
                      {/*
                       * Grounded wrapper: rounded corners + subtle border.
                       * overflow-hidden clips the image during the scale transform.
                       * No drop-shadow — keeps the flat, Material aesthetic.
                       */}
                      <div
                        className="overflow-hidden rounded-xl
                          border border-neutral-200 dark:border-neutral-800"
                      >
                        <Image
                          src={project.image}
                          alt={project.imageAlt ?? project.name}
                          width={800}
                          height={450}
                          className="w-full h-auto object-cover object-top
                            transition-transform duration-500 ease-out
                            group-hover:scale-[1.02]"
                          sizes="(max-width: 1024px) 100vw, 42vw"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
