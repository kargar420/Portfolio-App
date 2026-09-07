import { education, cpRatings, achievements } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

function TrophyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="18" width="12" height="4" />
    </svg>
  );
}

function GraduationCapIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 px-6 bg-neutral-50 dark:bg-neutral-900/40"
      aria-labelledby="achievements-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <AnimatedSection>
          <div className="mb-12">
            <h2
              id="achievements-heading"
              className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3"
            >
              Achievements &amp; Education
            </h2>
            <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </AnimatedSection>

        <div className="space-y-12">
          {/* Education */}
          <AnimatedSection delay={60}>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-500 mb-4">
                <GraduationCapIcon />
                Education
              </div>
              <div className="pl-4 border-l-2 border-indigo-200 dark:border-indigo-900">
                <p className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                  {education.degree}
                </p>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                  {education.institute}
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <time className="text-sm text-neutral-500 dark:text-neutral-400 font-mono">
                    {education.period}
                  </time>
                  <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                    CGPA:{" "}
                    <span className="text-indigo-600 dark:text-indigo-400">
                      {education.cgpa}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Competitive Programming */}
          <AnimatedSection delay={120}>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-500 mb-4">
                <TrophyIcon />
                Competitive Programming
              </div>

              {/* Problem count */}
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-5">
                Solved{" "}
                <span className="font-semibold text-neutral-900 dark:text-neutral-50">
                  1.2K+
                </span>{" "}
                algorithmic problems across platforms.
              </p>

              {/* Rating row — tactile: lift + border glow + subtle shadow */}
              <div className="flex flex-wrap gap-4">
                {cpRatings.map((cp) => (
                  <a
                    key={cp.platform}
                    href={cp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-start px-4 py-3
                      border border-neutral-200 dark:border-neutral-800
                      rounded-md
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-indigo-400 dark:hover:border-indigo-600
                      hover:shadow-lg
                      hover:shadow-indigo-100/60 dark:hover:shadow-black/40"
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                      {cp.platform}
                    </span>
                    <span className="text-xl font-bold text-neutral-900 dark:text-neutral-50 mt-1">
                      {cp.rating}
                    </span>
                    {cp.extra && (
                      <span className="text-xs text-indigo-600 dark:text-indigo-400 mt-0.5">
                        {cp.extra}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Other Achievements */}
          <AnimatedSection delay={180}>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-500 mb-4">
                Fellowships &amp; Recognition
              </div>
              <ul className="space-y-3" role="list">
                {achievements.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                  >
                    <span
                      className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
