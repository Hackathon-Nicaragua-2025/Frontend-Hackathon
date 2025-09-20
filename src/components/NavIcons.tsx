// Import For Auth Context
import { useAuth } from "../context/AuthContext";
// Import For Components
import { CustomLinks } from "../components";
// Import For React Icons
import { FaHome } from "react-icons/fa";
import { FaCalendar, FaGraduationCap, FaTicket, FaUsers } from "react-icons/fa6";
// Import For Style
import "./nav/nav.sass";

// Component Nav
export const NavIcons = () => {
  // UseAuth
  const { user } = useAuth();

  return (
    <div className="fixed bottom-0 flex justify-center w-full gap-8 py-4 text-lg bg-white z-5">
      <CustomLinks
        reference="/"
        icon={<FaHome />} />
      <CustomLinks
        reference="/events"
        icon={<FaCalendar />} />
      <CustomLinks
        reference="/education"
        icon={<FaGraduationCap />} />
      <CustomLinks
        reference="/tourist/reservation"
        disabled={user?.role !== "tourist"}
        icon={<FaTicket />} />
      <CustomLinks
        reference="/tourist/community"
        disabled={user?.role !== "tourist"}
        icon={<FaUsers />} />
    </div>
  );
}