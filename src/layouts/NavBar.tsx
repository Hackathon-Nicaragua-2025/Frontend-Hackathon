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
    <div className="sticky top-0 z-10 flex items-center justify-around w-full py-4 bg-white">
      {/* Logo */}
      <div className="flex items-center text-xl font-bold text-primary">
        <img src={IconoNormal} alt="Icono Avify" className="w-12" />
        <h1 className="ml-2">Avify</h1>
      </div>
      {/* Nav */}
      {isTablet ? '' : <Nav />}
      {/* Login Button */}
      {!user && (
        <Button
          label="Iniciar Sesión"
          className="px-4 py-1 text-sm text-white transition-all duration-500 ease-in-out rounded-lg cursor-pointer bg-primary hover:bg-primary-high hover:scale-105"
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