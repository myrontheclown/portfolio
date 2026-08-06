import { useLayoutEffect } from 'react';

/**
 * Locks the page scroll while a modal is open and restores it exactly
 * when the modal closes.
 *
 * It uses `overflow: hidden` on <body> (propagated to the viewport) and
 * compensates the removed native scrollbar with `padding-right`. Unlike the
 * `position: fixed` approach, it never removes <body> from the document
 * flow, so the document height is unchanged, `window.scrollY` is never
 * reset, and no `window.scrollTo` is required. The exact previous scroll
 * position is therefore preserved automatically — the page can never jump.
 *
 * The technique is idempotent, so React StrictMode's double effect
 * invocation is harmless.
 */
export function useLockBodyScroll() {
  useLayoutEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      // Keep content horizontally stable when the scrollbar disappears.
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, []);
}
