import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

/**
 * Thin yellow scroll progress bar pinned to the top of the viewport.
 * Rendered as a purely decorative element (aria-hidden).
 */
export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-1 bg-[#FFDE59] z-50 origin-left pointer-events-none"
      style={{ scaleX }}
    />
  );
};
