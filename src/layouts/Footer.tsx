// Import For Components
import { CustomLinks, Redes } from "../components";
// Import For Assets
import LogoNormal from "../assets/image/LogoNormal.svg";

// Component Footer
export const Footer = () => {
  return (
    // Footer
    <footer className="flex flex-col justify-center items-center py-6 pb-16 bg-[#99B8B1] lg:pb-6">
      {/* Logo */}
      <div className="w-14 mb-4">
        <img
          src={LogoNormal}
          alt="Icono Avify"
        />
      </div>
      {/* Redes */}
      <Redes />
      {/* Links */}
      <div className="flex flex-col gap-2 my-6 text-center text-[#0D3C2F]">
        <CustomLinks
          reference="/privacy"
          label="Política y Privacidad"
          className="hover:text-[#111111] hover:underline transition-all duration-500 ease-in-out"
        />
        <CustomLinks
          reference="/conditions"
          label="Condiciones y Términos"
          className="hover:text-[#111111] hover:underline transition-all duration-500 ease-in-out"
        />
      </div>
      {/* Copyright */}
      <p className="text-sm font-light text-[#1C344B]">
        &copy; Avify {new Date().getFullYear()} - Todos los derechos reservados.
      </p>
    </footer>
  );
} 