// Import For Hooks
import { useMediaQuery } from "../hooks/mediaScreen";

// Interface Marker Props
interface MarkerProps {
  id: string | number;
  description: string;
  y: number;
  x: number;
  icon: React.ReactNode;
  isOpen: boolean;
  onSelect: (id: string | number) => void;
}

// Component Marker
export const Marcadores = ({ id, description, y, x, icon, isOpen, onSelect }: MarkerProps) => {
  // Responsive Constants
  const isMobile = useMediaQuery("(max-width: 480px)");
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <div className={"absolute cursor-pointer flex items-center justify-center p-2 rounded-full text2xl bg-amber-300"}
        style={isMobile ? { top: y, left: x } : isTablet ? { top: y + 100, left: x + 200 } : { top: y + 80, left: x + 150 }}>
        {/* Button */}
        <button onClick={() => onSelect(id)} aria-expanded={isOpen} aria-controls={`marker-desc-${id}`}>
          {icon}
        </button>
        {/* Description */}
        <div
          id={`marker-desc-${id}`}
          className={`absolute w-32 z-50 bg-white rounded-2xl p-4 ${isOpen ? 'block' : 'hidden'}`}
          style={{ top: 50, left: -20 }}
        >
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </>
  )
}