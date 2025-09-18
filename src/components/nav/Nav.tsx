// Import For Auth Context
import { useAuth } from "../../context/AuthContext";
// Import For Components
import { CustomLinks } from "../../components";
// Import For Style
import "./nav.sass";

// Component Nav
export const Nav = () => {
  // UseAuth
  const { user } = useAuth();

  return (
    // Container
    <div className="flex justify-center gap-4 font-bold">
      {/* Links */}
      <CustomLinks
        reference="/"
        label="Inicio"
        className="cursor-pointer hover:text-primary-high hover:underline transition-all duration-500 ease-in-out" />
      <CustomLinks
        reference="/events"
        label="Eventos"
        className="cursor-pointer hover:text-primary-high hover:underline transition-all duration-500 ease-in-out" />
      <CustomLinks
        reference="/education"
        label="Educación"
        className="cursor-pointer hover:text-primary-high hover:underline transition-all duration-500 ease-in-out" />
      <CustomLinks
        reference={user?.role === "tourist" ? "/tourist/reservation" : ""}
        disabled={user?.role !== "tourist"}
        label="Reservas"
        className="cursor-pointer hover:text-primary-high hover:underline transition-all duration-500 ease-in-out" />
      <CustomLinks
        reference={user?.role === "tourist" ? "/tourist/community" : ""}
        disabled={user?.role !== "tourist"}
        label="Comunidad"
        className="cursor-pointer hover:text-primary-high hover:underline transition-all duration-500 ease-in-out" />
    </div>
  );
}