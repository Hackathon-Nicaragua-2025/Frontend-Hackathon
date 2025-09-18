import { FaX } from "react-icons/fa6";

// Interface
interface ModalProps {
  openModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  style: React.CSSProperties;
}

export const Modal = ({ openModal, closeModal, children, style }: ModalProps) => {
  return (
    // Container
    <div className={openModal ? 'fixed' : 'hidden'}>
      {/* BackDrop */}
      <div className="fixed inset-0 z-10 bg-black/60" onClick={closeModal}></div>
      {/* Modal Container */}
      <div style={style}>
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out"
          onClick={closeModal}
        >
          <FaX />
        </button>
        {/* Content */}
        <div>
          {children}
        </div>
      </div>
    </div >
  );
}