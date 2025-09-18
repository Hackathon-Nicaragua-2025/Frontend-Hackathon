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
import Guardabaranco from "../assets/image/Guardabaranco.png";
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
          className="absolute w-1/4 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />
      </div>
      {/* Container Info */}
      <div>
        {/* Title */}
        <h2 className="mt-8 font-light text-center md:text-lg lg:text-xl">
          Protegiendo las aves, cuidando la naturaleza. <br />
          Descubre, Aprende y Visita con responsabilidad. <br />
          <span className="font-bold text-primary">Naturaleza en Acción, ¡Se Parte Del Cambio!</span>
        </h2>
        {/* Text 2 Img*/}
        <div className="flex items-center gap-4 mx-2 mt-4 text-xs text-justify md:mx-4 md:mt-6 md:text-sm lg:mx-8 lg:mt-8 lg:text-base ">
          <div className="w-1/2 mx-auto">
            <p>
              Somos una comunidad dedicada a la conservation de aves y reservas naturales. Aquí encontraras información para aprender, cuidar y disfrutar de la naturaleza de forma segura.
            </p>
            <p className="mt-4">
              Trabajamos para resguardar la riqueza avifaunistica de Nicaragua mediante programas de conservacion y monitoreo. Nuestro compromiso es preservar las especies en peligro, proteger sus habitas naturales y promover la reproduccion segura de las aves nativas y migratorias.
            </p>
          </div>
          <div className="w-1/3 mx-auto md:w-1/4 lg:w-1/5">
            <img src={Guardabaranco} alt="Guardabaranco" className="rounded-2xl" />
          </div>
        </div>
        {/* Text 1 Img */}
        <div className="flex items-center gap-4 mx-2 mt-4 text-xs text-justify md:mx-4 md:text-sm lg:mx-8 lg:text-base">
          <div className="w-1/3 mx-auto md:w-1/4 lg:w-1/5">
            <img src={Senderismo} alt="Senderismo" className="rounded-2xl" />
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
      <p className="mx-4 font-serif italic text-center my-14 text-primary-high md:w-3/4 md:mx-auto lg:w-2/3 ">
        Con Avify, aprenderás que pequeños cambios generan un gran impacto. Desde respetar las reservas hasta apoyar iniciativas de conservación. Queremos inspirar a niños, jóvenes y adultos a convertirse en defensores de la biodiversidad y defensores activos de nuestro planeta.
      </p>
      {/* Footer */}
      <Footer />
      {/* Nav Icons */}
      {isTablet ? <NavIcons /> : ''}
    </>
  );
}