import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Section wrapper that reveals its content once, with a subtle
 * fade + translateY + scale animation when it first enters the viewport.
 *
 * Respects the user's reduced-motion preference by skipping the animation.
 */
export const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className={className}>
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: [0.2, 0, 0, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
};
