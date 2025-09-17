// Import For React
import { useState } from "react";
// Import For Hooks
import { useMediaQuery } from "../hooks/mediaScreen";

// Interface Marker Props
interface MarkerProps {
  description: string;
  y: number;
  x: number;
  icon: React.ReactNode;
}

// Component Marker
export const Marcadores = ({ description, y, x, icon }: MarkerProps) => {
  // Responsive Constants
  const isMobile = useMediaQuery("(max-width: 480px)");
  const isTablet = useMediaQuery("(max-width: 768px)");

  // State Open
  const [open, setOpen] = useState(false)

  // Function Toggle Open
  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <div className={"absolute cursor-pointer flex items-center justify-center p-2 rounded-full text-2xl  text-black bg-amber-300 hover:bg-amber-800 transition duration-500 ease-in-out"}
        style={isMobile ? { top: y, left: x } : isTablet ? { top: y + 100, left: x + 200 } : { top: y + 80, left: x + 150 }}>
        {/* Button */}
        <button onClick={toggleOpen}>
          {icon}
        </button>
        {/* Description */}
        <div
          className={`absolute w-32 z-50 bg-white rounded-2xl p-4 ${open ? 'block' : 'hidden'}`}
          style={{ top: 50, left: -20 }}
        >
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </>
  )
}