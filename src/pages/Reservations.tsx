// Import For React
import { useMemo, useState } from "react";
// Import For Hook
import { useMediaQuery } from "../hooks/mediaScreen";
// Import For Layouts
import { Footer, NavBar } from "../layouts";
// Import For Components
import { Cards, NavIcons } from "../components";
// Import For Json
import ReservasReservación from "../json/reservasReservación.json";
// Import For Icons
import { IoMdTime } from "react-icons/io";
import { HiOutlineBellAlert } from "react-icons/hi2";

// Type Raw Card
type RawCard = {
  id: number;
  title: string;
  department?: string;
  activities?: string[];
  stars?: number;
  img?: string;
  // Spanish
  departamento?: string;
  actividades?: string[];
  calificacion?: number;
  fotografia?: string;
};

// Component Reservations
export default function Reservations() {
  // Responsive
  const isTablet = useMediaQuery("(max-width: 768px)");

  // Normalization
  const reservasNormalized = (ReservasReservación as RawCard[]).map((item) => ({
    id: item.id,
    title: item.title,
    department: item.department ?? item.departamento ?? "",
    activities: item.activities ?? item.actividades ?? [],
    stars: item.stars ?? item.calificacion ?? 0,
    img: item.img ?? item.fotografia ?? "",
  }));

  // Departments
  const departments = useMemo(
    () => Array.from(new Set(reservasNormalized.map((r) => r.department))).filter(Boolean).sort(),
    [reservasNormalized]
  );

  // Selected department
  const [selectedDept, setSelectedDept] = useState<string>("Todos");

  // Filtered list
  const filteredReservas = useMemo(
    () =>
      selectedDept === "Todos"
        ? reservasNormalized
        : reservasNormalized.filter((r) => r.department === selectedDept),
    [selectedDept, reservasNormalized]
  );

  return (
    // Navbar
    <>
      {/* Navbar */}
      <NavBar />
      {/* Container */}
      <div className="flex items-center justify-between p-4">
        {/* Select */}
        <select
          className="px-4 py-2 text-sm transition-colors bg-white border border-gray-200 rounded-full shadow-sm outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
        >
          <option value="Todos">Todos</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
        {/* Title */}
        <h2 className="font-bold text-primary">Reservaciones</h2>
        {/* Icons */}
        <div className="flex gap-2">
          <button className="p-2 text-xl">
            <IoMdTime />
          </button>
          <button className="p-2 text-xl">
            <HiOutlineBellAlert />
          </button>
        </div>
      </div>
      {/* Cards */}
      <Cards cardProp={{ reservas: filteredReservas }} />
      {/* Footer */}
      <Footer />
      {/* Media Query */}
      {isTablet ? <NavIcons /> : ""}
    </>
  )
}