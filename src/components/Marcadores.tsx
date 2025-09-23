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
      <div
        className={`absolute cursor-pointer flex items-center justify-center p-2 rounded-full text-2xl transition-all duration-300 ${isOpen ? 'bg-amber-400 scale-110' : 'bg-amber-300 hover:bg-amber-400'
          }`}
        style={isMobile ? { top: y, left: x } : isTablet ? { top: y + 100, left: x + 200 } : { top: y + 100, left: x + 250 }}>
        <button
          onClick={() => onSelect(id)}
          aria-expanded={isOpen}
          aria-controls={`marker-desc-${id}`}
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
        >
          {icon}
        </button>
        <div
          id={`marker-desc-${id}`}
          className={`absolute z-50 bg-white rounded-xl p-4 shadow-lg transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          style={{
            top: 'calc(100% + 10px)',
            left: '50%',
            transform: isOpen ? 'translateX(-50%)' : 'translateX(-50%) scale(0.95)',
            minWidth: '200px',
            maxWidth: '250px'
          }}
        >
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>

    </>
  )
}