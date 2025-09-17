// Import For React
import { useState } from "react";
// Import For React Slick
import Slider from "react-slick";
// Import For React Slick Styles 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import For Hooks
import { useMediaQuery } from "../hooks/mediaScreen";
// Import For Types
import type { CarouselProps, Reservas, Aves } from "../types/carrusel";
// Import For React Icons
import { FaX } from "react-icons/fa6";

// Component Carrusel
export const Carrusel = ({ avesProps, className }: CarouselProps) => {
  // Responsive Constants
  const isMobile = useMediaQuery("(max-width: 480px)");
  const isTablet = useMediaQuery("(max-width: 768px)");

  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [openAveModal, setOpenAveModal] = useState(false);
  const [selectedAve, setSelectedAve] = useState<Aves | null>(null);

  // Filtered Aves
  const filteredAves = avesProps?.filter((a) =>
    a.nombre_común.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function Open Modal
  const openAveModalWith = (ave: Aves) => {
    setSelectedAve(ave);
    setOpenAveModal(true);
  };

  // Function Close Modal
  const closeAveModal = () => {
    setOpenAveModal(false);
    setSelectedAve(null);
  };

  // Setting 
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    hoverPause: true,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    slidesToScroll: isMobile ? 1 : isTablet ? 2 : 3,
    initialSlide: 0,
  };

  return (
    <div className={className}>
      {/* Container */}
      <div className="-mx-4">
        {/* Search Bar */}
        <div className="px-4 pb-4">
          <input
            type="text"
            placeholder="Buscar ave por nombre..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-md border outline-none border-gray-300 lg:w-1/2 lg:mx-auto"
          />
        </div>
        {/* Slider */}
        <Slider key={`${settings.slidesToShow}-${settings.slidesToScroll}`} {...settings}>
          {filteredAves?.map((avesProp) => (
            <button
              key={avesProp.id}
              onClick={() => openAveModalWith(avesProp)}
              className="cursor-pointer px-4 rounded-lg hover:scale-110 transition-all duration-500 ease-in-out"
            >
              <img
                src={avesProp.fotografía} alt={avesProp.nombre_común}
                className="w-full h-60 object-cover object-top rounded-lg"
              />
            </button>
          ))}
        </Slider>
        {/* Modal Aves */}
        <div className={openAveModal ? 'block' : 'hidden'}>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/60"
            onClick={closeAveModal}
          />
          {/* Modal Container */}
          <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-[50%] h-fit text-[#0A2C22] bg-[#9F9F9F] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeAveModal}
              className="absolute top-8 right-8 cursor-pointer text-white hover:scale-110 transition-all duration-500 ease-in-out"
            >
              <FaX />
            </button>
            {/* Card */}
            <div className="p-4">
              <div className="mb-2">
                <img
                  src={selectedAve?.fotografía}
                  alt={selectedAve?.nombre_común}
                  className="w-full h-60 object-cover object-center rounded-lg lg:h-80"
                />
              </div>
              <h2 className="text-center text-lg font-bold mb-2">{selectedAve?.nombre_común}</h2>
              <div className="flex flex-col justify-center gap-1">
                <p className="text-sm">Nombre Científico: {selectedAve?.nombre_científico}</p>
                <p className="text-sm">Categoría: {selectedAve?.categoría}</p>
              </div>
              <p className="w-2/3 mx-auto my-6 text-xs mb-2 text-center">{selectedAve?.descripción}</p>
              <p className="text-sm mb-2">
                Distribución: {selectedAve?.distribución}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const CarruselReservas = ({ reservasProps, className }: CarouselProps) => {
  // Responsive Constants
  const isMobile = useMediaQuery("(max-width: 480px)");
  const isTablet = useMediaQuery("(max-width: 768px)");

  // State
  const [openModal, setOpenModal] = useState(false);
  const [selectedReserva, setSelectedReserva] = useState<Reservas | null>(null);
  const [searchReserva, setSearchReserva] = useState("");

  // Handle Modal
  const openModalWith = (reserva: Reservas) => {
    setSelectedReserva(reserva);
    setOpenModal(true);
  };

  // Handle Close Modal
  const closeModal = () => {
    setOpenModal(false);
    setSelectedReserva(null);
  };

  // Filtered Reservas
  const filteredReservas = reservasProps?.filter((r) =>
    r.nombre.toLowerCase().includes(searchReserva.toLowerCase())
  );

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    hoverPause: true,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    slidesToScroll: isMobile ? 1 : isTablet ? 2 : 3,
    initialSlide: 0,
    rtl: true
  };

  return (
    <div className={className}>
      <div className="-mx-2 rounded-lg">
        {/* Search Bar */}
        <div className="px-2 pb-3">
          <input
            type="text"
            placeholder="Buscar reserva por nombre..."
            value={searchReserva}
            onChange={(e) => setSearchReserva(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-md border outline-none border-gray-300 lg:w-1/2 lg:mx-auto"
          />
        </div>
        <Slider key={`${settings.slidesToShow}-${settings.slidesToScroll}`} {...settings}>
          {filteredReservas?.map((reservasProp) => (
            <div key={reservasProp.id} className="px-2">
              <button
                onClick={() => openModalWith(reservasProp)}
                className="cursor-pointer px-2 rounded-lg hover:scale-110 transition-all duration-500 ease-in-out"
              >
                <img
                  src={reservasProp.fotografía} alt={reservasProp.nombre}
                  className="w-full h-60 object-cover object-center rounded-lg"
                />
              </button>
            </div>
          ))}
        </Slider>
        {/* Modal */}
        <div className={openModal ? 'block' : 'hidden'}>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/60"
            onClick={closeModal}
          />
          {/* Modal Container */}
          <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-[50%] h-fit text-[#0A2C22] bg-[#9F9F9F] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-8 right-8 cursor-pointer text-white hover:scale-110 transition-all duration-500 ease-in-out"
            >
              <FaX />
            </button>
            {/* Content */}
            <div className="p-4">
              <div className="mb-2">
                <img
                  src={selectedReserva?.fotografía}
                  alt={selectedReserva?.nombre}
                  className="w-full h-60 object-cover object-center rounded-lg"
                />
              </div>
              <h2 className="text-center text-lg font-bold mb-2">{selectedReserva?.nombre}</h2>
              <div className="flex flex-col items-center justify-center gap-1 mb-2">
                <p>Categoría: {selectedReserva?.categoría}</p>
                <p>Ubicación: Zona {selectedReserva?.ubicación}</p>
              </div>
              <p className="mx-4 my-2 text-sm text-center">{selectedReserva?.descripción}</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}