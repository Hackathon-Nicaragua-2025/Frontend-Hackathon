// Import For Hooks
import { useMediaQuery } from "../hooks/mediaScreen";
// Import For Layouts
import { NavBar, Footer } from "../layouts";
// Import For Components
import { Carrusel, CarruselReservas, NavIcons } from "../components";
import SEO from "../components/SEO";
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
      <SEO
        title="Avify | Descubre aves y reservas naturales en Nicaragua"
        description="Explora aves de Nicaragua, aprende sobre conservación y encuentra reservas naturales para visitar de forma responsable. Únete a Avify y sé parte del cambio."
        icon="../assets/image/LogoNegativo.svg"
      />
      {/* Nav Bar */}
      <NavBar />
      {/* Grid Birds */}
      <div className="relative" role="banner">
        <img
          src={GridAves}
          alt="Grid Aves"
          className="w-full brightness-50"
        />
        <img
          src={LogoNegativo}
          alt="Logo Avify"
          className="absolute w-40 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:w-56 lg:w-72"
        />
      </div>
      {/* Main Content */}
      <main className="relative max-w-6xl px-4 mx-auto" role="main">
        {/* Title */}
        <h1 className="mt-8 font-light text-center md:text-lg lg:text-xl">
          Protegiendo las aves, cuidando la naturaleza. <br />
          Descubre, aprende y visita con responsabilidad. <br />
          <span className="font-bold text-primary">Naturaleza en acción, ¡sé parte del cambio!</span>
        </h1>
        {/* Intro Section */}
        <section className="flex items-center gap-4 mx-2 mt-4 text-xs text-justify md:mx-4 md:mt-6 md:text-sm lg:mx-8 lg:mt-8 lg:text-base " aria-labelledby="intro-title">
          <h2 id="intro-title" className="sr-only">Sobre Avify</h2>
          <div className="w-1/2 mx-auto">
            <p>
              Somos una comunidad dedicada a la conservación de aves y reservas naturales. Aquí encontrarás información para aprender, cuidar y disfrutar de la naturaleza de forma segura.
            </p>
            <p className="mt-4">
              Trabajamos para resguardar la riqueza avifaunística de Nicaragua mediante programas de conservación y monitoreo. Nuestro compromiso es preservar las especies en peligro, proteger sus hábitats naturales y promover la reproducción segura de las aves nativas y migratorias.
            </p>
          </div>
          <div className="w-1/3 mx-auto md:w-1/4 lg:w-1/5">
            <img src={Guardabaranco} alt="Guardabaranco" className="rounded-2xl" />
          </div>
        </section>
        {/* Responsible Tourism Section */}
        <section className="flex items-center gap-4 mx-2 mt-4 text-xs text-justify md:mx-4 md:text-sm lg:mx-8 lg:text-base" aria-labelledby="responsible-title">
          <h2 id="responsible-title" className="sr-only">Turismo responsable</h2>
          <div className="w-1/3 mx-auto md:w-1/4 lg:w-1/5">
            <img src={Senderismo} alt="Senderismo" className="rounded-2xl" />
          </div>
          <div className="w-1/2 mx-auto">
            <p>
              Invitamos a los visitantes a disfrutar de la naturaleza de forma responsable. Fomentamos el turismo ecológico con prácticas seguras y respetuosas: mantener el silencio, no dejar basura, seguir senderos establecidos y valorar cada espacio como patrimonio nacional.
            </p>
          </div>
        </section>
      </main>
      {/* Carousel Sections */}
      <section className="relative font-bold text-center my-14 text-primary-high" aria-labelledby="aves-title">
        <div>
          <h2 id="aves-title" className="mb-2">Aves de Nicaragua</h2>
          <Carrusel
            avesProps={Aves}
            className="m-auto w-[80%]"
          />
        </div>
        <div className="mt-8" aria-labelledby="reservas-title">
          <h2 id="reservas-title" className="mb-2">Reservas Naturales</h2>
          <CarruselReservas
            reservasProps={Reservas}
            className="m-auto w-[80%]"
          />
        </div>
      </section>
      {/* End Text */}
      <p className="mx-4 font-serif italic text-center my-14 text-primary-high md:w-3/4 md:mx-auto lg:w-2/3 ">
        Con Avify, aprenderás que pequeños cambios generan un gran impacto. Desde respetar las reservas hasta apoyar iniciativas de conservación. Queremos inspirar a niños, jóvenes y adultos a convertirse en defensores de la biodiversidad y defensores activos de nuestro planeta.
      </p>
      {/* Footer */}
      <Footer />
      {/* Nav Icons */}
      {isTablet ? <NavIcons /> : null}
    </>
  );
}