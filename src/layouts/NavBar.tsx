// Import For Auth Context
import { useAuth } from "../context/AuthContext";
// Import For Hooks
import { useMediaQuery } from "../hooks/mediaScreen";
// Import For Components
import { Button, Nav, Profile } from "../components";
// Import For Assets
import IconoNormal from "../assets/image/IconoNormal.svg";

// Component NavBar
export const NavBar = () => {
  // UseAuth
  const { user, login } = useAuth();

  // Responsive Constants
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    // Container
    <div className="sticky top-0 z-100 flex justify-around items-center w-full py-4 bg-white">
      {/* Logo */}
      <div className="flex items-center font-bold text-xl text-primary">
        <img src={IconoNormal} alt="Icono Avify" className="w-12" />
        <h1 className="ml-2">Avify</h1>
      </div>
      {/* Nav */}
      {isTablet ? '' : <Nav />}
      {/* Login Button */}
      {!user && (
        <Button
          label="Iniciar Sesión"
          className="px-4 py-1 rounded-lg text-sm text-white bg-primary cursor-pointer hover:bg-primary-high hover:scale-105 transition-all duration-500 ease-in-out"
          onClick={() => login("tourist")}
        />
      )}
      {/* Profile */}
      {user && (
        <Profile />
      )}
    </div>
  )
}