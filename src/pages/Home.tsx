// Import For Hooks
import { useMediaQuery } from "../hooks/mediaScreen";
// Import For Layouts
import { NavBar, Footer } from "../layouts";
// Import For Components
import { Carrusel, CarruselReservas, NavIcons } from "../components";
// Import For Json
import { Aves, Reservas } from "../json";
// Import For Assets
import GridAves from "../assets/image/GridAves.png";
import LogoNegativo from "../assets/image/LogoNegativo.svg";
import MiniMagic from "../assets/image/MiniMagic.png";
import Senderismo from "../assets/image/Senderismo.png";

// Component Home
export default function Home() {
  // Responsive Constants
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {/* Nav Bar */}
      <NavBar />
      {/* Grid Birds */}
      <div className="relative">
        <img
          src={GridAves}
          alt="Grid Aves"
          className="w-full brightness-25"
        />
        <img
          src={LogoNegativo}
          alt="Logo Avify"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4"
        />
      </div>
      {/* Container Info */}
      <div>
        {/* Title */}
        <h2 className="mx-2 mt-4 text-sm md:text-base text-center text-[#0A2C22] lg:text-lg">
          Protegiendo las aves, cuidando la naturaleza. <br />
          Descubre, Aprende y Visita con responsabilidad. <br />
          <span className="font-bold text-[#0D3C2F]">Naturaleza en Acción, ¡Se Parte Del Cambio!</span>
        </h2>
        {/* Text 2 Img*/}
        <div className="flex items-center gap-8 mt-8 mx-2 text-xs text-justify text-[#0D3C2F] md:text-base lg:w-3/4 lg:mx-auto lg:text-base">
          <div className="w-1/2 mx-auto ">
            <p>
              Somos una comunidad dedicada a la conservation de aves y reservas naturales. Aquí encontraras información para aprender, cuidar y disfrutar de la naturaleza de forma segura.
            </p>
            <p className="mt-2">
              Trabajamos para resguardar la riqueza avifaunistica de Nicaragua mediante programas de conservacion y monitoreo. Nuestro compromiso es preservar las especies en peligro, proteger sus habitas naturales y promover la reproduccion segura de las aves nativas y migratorias.
            </p>
          </div>
          <div className="w-1/3 mx-auto">
            <img src={MiniMagic} alt="Mini Magic" />
          </div>
        </div>
        {/* Text 1 Img */}
        <div className="flex items-center gap-8 mx-2 mt-8 text-xs text-justify text-[#0D3C2F] md:text-base lg:w-3/4 lg:mx-auto lg:text-base">
          <div className="w-1/3 mx-auto">
            <img src={Senderismo} alt="Senderismo" />
          </div>
          <div className="w-1/2 mx-auto">
            <p>
              Invitamos a los visitantes a disfrutar de la naturaleza de forma responsable. Fomentamos el turismo ecológico con practicas seguras y respetuosas: Mantener el silencio, no dejar basura, seguir senderos establecidos y valorar cada espacio como patrimonio nacional.
            </p>
          </div>
        </div>
      </div>
      {/* Carousel */}
      <div className="my-14 text-center font-bold text-[#0D3C2F]">
        <div>
          <h2 className="mb-4">Aves de Nicaragua</h2>
          <Carrusel
            avesProps={Aves}
            className="w-4/5 mx-auto"
          />
        </div>
        <div className="mt-8">
          <h2 className="mb-4">Reservas Naturales</h2>
          <CarruselReservas
            reservasProps={Reservas}
            className="w-4/5 mx-auto"
          />
        </div>
      </div>
      {/* End Text */}
      <p className="mx-4 my-14 text-center font-serif italic text-[#3F6C5E] md:mx-16 lg:mx-32">
        Con Avify, aprenderás que pequeños cambios generan un gran impacto. Desde respetar las reservas hasta apoyar iniciativas de conservación. Queremos inspirar a niños, jóvenes y adultos a convertirse en defensores de la biodiversidad y defensores activos de nuestro planeta.
      </p>
      {/* Footer */}
      <Footer />
      {/* Nav Icons */}
      {isTablet ? <NavIcons /> : ''}
    </>
  );
}