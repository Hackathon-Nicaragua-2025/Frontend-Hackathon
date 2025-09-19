import { FaX } from "react-icons/fa6";
import { createPortal } from "react-dom";

// Interface
interface ModalProps {
  openModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  style: React.CSSProperties;
}

export const Modal = ({ openModal, closeModal, children, style }: ModalProps) => {
  if (!openModal) return null;

  return createPortal(
    // Container
    <div className="fixed inset-0 z-20">
      {/* BackDrop */}
      <div className="absolute inset-0 z-0 bg-black/60" onClick={closeModal}></div>
      {/* Modal Container */}
      <div className="relative z-10" style={style}>
        {/* Close Button */}
        <button
          className="absolute transition-all duration-500 ease-in-out cursor-pointer top-4 right-4 hover:scale-110"
          onClick={closeModal}
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