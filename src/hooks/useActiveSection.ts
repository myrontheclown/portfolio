import { useEffect, useState } from 'react';

/**
 * Tracks which section of the page is currently in view.
 *
 * Uses an IntersectionObserver with a "band" in the middle of the viewport:
 * whichever section crosses that band is considered active. This gives
 * snappy, predictable active-state updates while scrolling.
 *
 * @param sectionIds Ids of the sections to observe (without the `#`).
 * @param initialSection Section treated as active before any observer fires.
 */
export function useActiveSection(sectionIds: string[], initialSection = '') {
  const [activeSection, setActiveSection] = useState(initialSection);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-45% 0px -50% 0px',
        threshold: 0,
      }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
