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
      <h2 className="font-bold text-primary">Contactanos en nuestras redes sociales</h2>
      {/* Links */}
      <ul className="flex justify-center gap-8 mt-4 text-lg">
        <CustomLinks
          reference="mailto:avifyhackathon@gmail.com"
          target="_blank"
          icon={<FaGoogle />}
          className="transition-all duration-500 ease-in-out hover:text-primary-high hover:scale-110"
        />
        <CustomLinks
          reference=""
          target="_blank"
          icon={<FaFacebook />}
          className="transition-all duration-500 ease-in-out hover:text-primary-high hover:scale-110"
        />
        <CustomLinks
          reference=""
          target="_blank"
          icon={<FaTwitter />}
          className="transition-all duration-500 ease-in-out hover:text-primary-high hover:scale-110"
        />
        <CustomLinks
          reference=""
          target="_blank"
          icon={<FaTiktok />}
          className="transition-all duration-500 ease-in-out hover:text-primary-high hover:scale-110"
        />
        <CustomLinks
          reference=""
          target="_blank"
          icon={<FaInstagram />}
          className="transition-all duration-500 ease-in-out hover:text-primary-high hover:scale-110"
        />
      </ul>
    </div>
  );
}

