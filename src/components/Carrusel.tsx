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
import { Modal } from "./Modal";

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
      <div className="relative z-0">
        {/* Search Bar */}
        <div className="px-4 pb-4 md:w-1/2 md:m-auto">
          <input
            type="text"
            placeholder="Buscar ave por nombre..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-1 text-sm border rounded-lg outline-none border-primary-low"
          />
        </div>
        {/* Slider */}
        <Slider key={`${settings.slidesToShow}-${settings.slidesToScroll}`} {...settings}>
          {filteredAves?.map((avesProp) => (
            <button
              key={avesProp.id}
              onClick={() => openAveModalWith(avesProp)}
              className="px-2 cursor-pointer"
            >
              <img
                src={avesProp.fotografía} alt={avesProp.nombre_común}
                className="object-cover object-top w-full rounded-lg h-60"
              />
            </button>
          ))}
        </Slider>
        {/* Modal Aves */}
        <Modal openModal={openAveModal} closeModal={closeAveModal} style={{ position: 'fixed', left: 'calc(50%)', top: 'calc(50%)', transform: 'translateY(-50%) translateX(-50%)', width: '300px', height: 'fit-content', padding: '2rem 1.5rem', borderRadius: '10px', backgroundColor: 'white', zIndex: 15 }}>
          <h2 className="mb-2 font-bold text-center text-primary">Aves de Nicaragua</h2>
          <div className="w-full h-60">
            <img src={selectedAve?.fotografía} alt={selectedAve?.nombre_común} className="object-cover object-top w-full rounded-lg h-60" />
          </div>
          <p className="mt-2 text-center">{selectedAve?.nombre_común}</p>
          <p className="text-xs text-center">{selectedAve?.nombre_científico}</p>
          <p className="my-4 text-sm text-center">{selectedAve?.descripción}</p>
          <p className="text-xs text-center">Categoría: {selectedAve?.categoría}</p>
          <p className="text-xs text-center">Distribución: {selectedAve?.distribución}</p>
        </Modal>
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
      <div className="relative z-0">
        {/* Search Bar */}
        <div className="px-4 pb-4 md:w-1/2 md:m-auto">
          <input
            type="text"
            placeholder="Buscar reserva por nombre..."
            value={searchReserva}
            onChange={(e) => setSearchReserva(e.target.value)}
            className="w-full px-3 py-1 text-sm border rounded-lg outline-none border-primary-low"
          />
        </div>
        <Slider key={`${settings.slidesToShow}-${settings.slidesToScroll}`} {...settings}>
          {filteredReservas?.map((reservasProp) => (
            <button
              key={reservasProp.id}
              onClick={() => openModalWith(reservasProp)}
              className="px-2 cursor-pointer"
            >
              <img
                src={reservasProp.fotografía} alt={reservasProp.nombre}
                className="object-cover object-center w-full rounded-lg h-60"
              />
            </button>
          ))}
        </Slider>
        {/* Modal Reservas */}
        <Modal openModal={openModal} closeModal={closeModal} style={{ position: 'fixed', left: 'calc(50%)', top: 'calc(50%)', transform: 'translateY(-50%) translateX(-50%)', width: '300px', height: 'fit-content', padding: '2rem 1.5rem', borderRadius: '10px', backgroundColor: 'white', zIndex: 15 }}>
          <h2 className="mb-2 font-bold text-center text-primary">Reservas de Nicaragua</h2>
          <div className="w-full h-60">
            <img src={selectedReserva?.fotografía} alt={selectedReserva?.nombre} className="object-cover object-center w-full rounded-lg h-60" />
          </div>
          <p className="mt-2 text-center">{selectedReserva?.nombre}</p>
          <p className="my-4 text-center">{selectedReserva?.descripción}</p>
          <p className="text-center">Categoría: {selectedReserva?.categoría}</p>
          <p className="text-center">Ubicación: {selectedReserva?.ubicación}</p>
        </Modal>
      </div>
    </div >
  );
}