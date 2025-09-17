// Import For Component
import { CustomLinks } from "../components";
// Import For React Icons
import { FaGoogle, FaInstagram, FaTwitter, FaFacebook, FaTiktok } from "react-icons/fa6";

// Component Redes
export const Redes = () => {
  return (
    // Container
    <div className="mb-4">
      {/* Title */}
      <h2 className="font-bold text-[#0A2C22]">Contactanos en nuestras redes sociales</h2>
      {/* Links */}
      <ul className="flex justify-center gap-8 mt-4 text-[#0D3C2F]">
        <CustomLinks
          reference="mailto:avifyhackathon@gmail.com"
          target="_blank"
          icon={<FaGoogle />}
          className="hover:text-[#111111] hover:scale-110 transition-all duration-500 ease-in-out"
        />
        <CustomLinks
          reference=""
          target="_blank"
          icon={<FaFacebook />}
          className="hover:text-[#111111] hover:scale-110 transition-all duration-500 ease-in-out"
        />
        <CustomLinks
          reference=""
          target="_blank"
          icon={<FaTwitter />}
          className="hover:text-[#111111] hover:scale-110 transition-all duration-500 ease-in-out"
        />
        <CustomLinks
          reference=""
          target="_blank"
          icon={<FaTiktok />}
          className="hover:text-[#111111] hover:scale-110 transition-all duration-500 ease-in-out"
        />
        <CustomLinks
          reference=""
          target="_blank"
          icon={<FaInstagram />}
          className="hover:text-[#111111] hover:scale-110 transition-all duration-500 ease-in-out"
        />
      </ul>
    </div>
  );
}

