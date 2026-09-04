import { hero } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 px-6 border-t border-neutral-200 dark:border-neutral-800"
      aria-label="Footer"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          © {year} {hero.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${hero.email}`}
            className="text-sm text-neutral-500 dark:text-neutral-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            {hero.email}
          </a>
          <a
            href={hero.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 dark:text-neutral-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={hero.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
