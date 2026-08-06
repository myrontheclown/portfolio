import React from 'react';
import { createPortal } from 'react-dom';
import { motion, useReducedMotion } from 'motion/react';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useFocusTrap } from '../../hooks/useFocusTrap';

interface ModalShellProps {
  onClose: () => void;
  labelledBy?: string;
  children: React.ReactNode;
}

/**
 * Shared modal shell used by the project modal.
 *
 * Handles the parts every modal needs: entrance/exit animation, blurred
 * backdrop, click-outside + Escape to close, body scroll lock with scroll
 * position restore, and keyboard focus trapping. Content is portaled to
 * <body> so fixed positioning is never affected by ancestor transforms.
 *
 * Wrap this component in <AnimatePresence> to enable exit animations.
 */
export const ModalShell: React.FC<ModalShellProps> = ({ onClose, labelledBy, children }) => {
  const reduceMotion = useReducedMotion();
  const containerRef = useFocusTrap(onClose);
  useLockBodyScroll();

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Blurred backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog panel */}
      <motion.div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className="relative w-full my-8"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 12 }}
        transition={{ type: 'spring', stiffness: 320, damping: 30, mass: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </div>,
    document.body
  );
};
