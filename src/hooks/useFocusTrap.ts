import { useEffect, useRef } from 'react';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

/**
 * Traps keyboard focus inside a dialog/modal.
 *
 * - Moves focus into the dialog when it opens.
 * - Loops Tab / Shift+Tab within the dialog.
 * - Closes the dialog with Escape.
 * - Restores focus to the previously focused element when the dialog closes.
 *
 * @param onClose Callback invoked when Escape is pressed.
 * @returns A ref to attach to the dialog container element.
 */
export function useFocusTrap(onClose?: () => void) {
  const containerRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const getFocusable = (): HTMLElement[] => {
      const nodes = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      return Array.from(nodes).filter(
        (el) => el.getAttribute('aria-hidden') !== 'true'
      );
    };

    const focusFirst = () => {
      const focusable = getFocusable();
      (focusable[0] || container).focus({ preventScroll: true });
    };

    focusFirst();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        onCloseRef.current?.();
        return;
      }

      if (e.key !== 'Tab') return;

      const focusable = getFocusable();
      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && (active === first || active === container)) {
        e.preventDefault();
        last.focus({ preventScroll: true });
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus({ preventScroll: true });
      }
    };

    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, []);

  return containerRef;
}
