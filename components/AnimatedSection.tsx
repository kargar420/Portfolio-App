"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number; // stagger delay in ms (optional)
}

/**
 * Lightweight IntersectionObserver wrapper that triggers a fast fade-in + slide-up
 * when the element enters the viewport. Duration: 0.4s. No external library.
 */
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply delay via inline style so it doesn't block initial CSS
          el.style.transitionDelay = delay > 0 ? `${delay}ms` : "";
          el.classList.remove("anim-hidden");
          el.classList.add("anim-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`anim-hidden ${className}`}>
      {children}
    </div>
  );
}
