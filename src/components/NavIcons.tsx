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
    <div className="fixed flex justify-center w-full bottom-0 z-50 gap-8 py-4 bg-white">
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
        reference="/reservation"
        disabled={user?.role !== "tourist"}
        icon={<FaTicket />} />
      <CustomLinks
        reference="/community"
        disabled={user?.role !== "tourist"}
        icon={<FaUsers />} />
    </div>
  );
}