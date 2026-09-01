"use client";

import { hero } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

function MapPinIcon() {
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon() {
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
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.59 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
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
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6"
      aria-label="Introduction"
    >
      <div className="max-w-5xl mx-auto w-full">
        <AnimatedSection>
          {/* Location badge */}
          <div className="flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
            <MapPinIcon />
            <span>{hero.location}</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.05] mb-6">
            {hero.name}
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed mb-10 font-light">
            {hero.tagline}
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap gap-3 mb-14">
            <a
              href={hero.resume}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-view-resume"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25 dark:hover:shadow-indigo-900/40 active:translate-y-0"
            >
              View Resume
              <ExternalLinkIcon />
            </a>
            <a
              href={`mailto:${hero.email}`}
              id="hero-contact-email"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-indigo-500 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/5 dark:hover:shadow-white/5 active:translate-y-0"
            >
              Get in Touch
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-neutral-200 dark:border-neutral-800 mb-8" />

          {/* Contact & Social Row */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${hero.email}`}
              className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              <MailIcon />
              {hero.email}
            </a>
            <a
              href={`tel:${hero.phone}`}
              className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              <PhoneIcon />
              {hero.phone}
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-4 ml-auto">
              <a
                href={hero.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kartik Agrawal on LinkedIn"
                id="hero-linkedin"
                className="text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 hover:-translate-y-0.5"
              >
                <LinkedInIcon />
              </a>
              <a
                href={hero.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kartik Agrawal on GitHub"
                id="hero-github"
                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-200 hover:-translate-y-0.5"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
