import { FaX } from "react-icons/fa6";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

// Interface
interface ModalProps {
  openModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  style: React.CSSProperties;
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

export const Modal = ({ openModal, closeModal, children, style, ariaLabel, ariaLabelledBy }: ModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<Element | null>(null);

  useEffect(() => {
    if (!openModal) return;
    // Save focus and prevent body scroll
    previouslyFocused.current = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus management
    const container = containerRef.current;
    const focusableSelectors = [
      'a[href]', 'area[href]', 'button:not([disabled])', 'input:not([disabled])',
      'select:not([disabled])', 'textarea:not([disabled])', 'iframe', 'object', 'embed',
      '[tabindex]:not([tabindex="-1"])', '[contenteditable="true"]'
    ];
    const setInitialFocus = () => {
      if (!container) return;
      const focusables = container.querySelectorAll<HTMLElement>(focusableSelectors.join(','));
      if (focusables.length > 0) {
        focusables[0].focus();
      } else {
        container.focus();
      }
    };
    setInitialFocus();

    // Key handlers (Esc to close, Tab trap)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        closeModal();
      } else if (e.key === 'Tab') {
        if (!container) return;
        const focusables = Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors.join(',')));
        if (focusables.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey) {
          if (active === first || !container.contains(active)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (active === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    // Use boolean capture flag to avoid typing issues and keep symmetry on remove
    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      // Restore scroll and focus
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown, true);
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus();
      }
    };
  }, [openModal, closeModal]);

  if (!openModal) return null;

  return createPortal(
    // Container
    <div className="fixed inset-0 z-20">
      {/* BackDrop */}
      <div className="absolute inset-0 z-0 bg-black/60" aria-hidden="true" onClick={closeModal}></div>
      {/* Modal Container */}
      <div
        ref={containerRef}
        className="relative z-10 outline-none"
        style={style}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        tabIndex={-1}
      >
        {/* Close Button */}
        <button
          className="absolute transition-all duration-500 ease-in-out cursor-pointer top-4 right-4 hover:scale-110"
          onClick={closeModal}
          aria-label="Cerrar"
        >
          <FaX />
        </button>
        {/* Content */}
        <div>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}