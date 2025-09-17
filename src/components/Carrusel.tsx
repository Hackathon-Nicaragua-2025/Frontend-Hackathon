// Import For Hooks
import { useMediaQuery } from "../hooks/mediaScreen";
// Import For React Slick
import Slider from "react-slick";
// Import For React Slick Styles 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Interface Aves
type Aves = {
  id: number;
  nombre_común: string;
  nombre_científico: string;
  fotografía: string;
  categoría: string;
  descripción: string;
  distribución: string;
}

// Interface Reservas
interface Reservas {
  id: number;
  nombre: string;
  categoría: string;
  fotografía: string;
  descripción: string;
  ubicación: string;
}

// Interface Carousel Props
interface CarouselProps {
  avesProps?: Aves[];
  reservasProps?: Reservas[];
  className?: string;
};

// Component Carrusel
export const Carrusel = ({ avesProps, className }: CarouselProps) => {
  // Responsive Constants
  const isMobile = useMediaQuery("(max-width: 480px)");
  const isTablet = useMediaQuery("(max-width: 768px)");

  // Setting 
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    slidesToScroll: isMobile ? 1 : isTablet ? 2 : 3,
    initialSlide: 0,
  };

  return (
    <div className={className}>
      <Slider key={`${settings.slidesToShow}-${settings.slidesToScroll}`} {...settings}>
        {avesProps?.map((avesProp) => (
          <div
            key={avesProp.id}
          >
            <img
              src={avesProp.fotografía} alt={avesProp.nombre_común}
              className="w-60 h-60 object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export const CarruselReservas = ({ reservasProps, className }: CarouselProps) => {
  // Responsive Constants
  const isMobile = useMediaQuery("(max-width: 480px)");
  const isTablet = useMediaQuery("(max-width: 768px)");

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    slidesToScroll: isMobile ? 1 : isTablet ? 2 : 3,
    initialSlide: 0,
    rtl: true
  };

  return (
    <div className={className}>
      <Slider key={`${settings.slidesToShow}-${settings.slidesToScroll}`} {...settings}>
        {reservasProps?.map((reservasProp) => (
          <button
            key={reservasProp.id}
            onClick={() => console.log(reservasProp)}
          >
            <img
              src={reservasProp.fotografía} alt={reservasProp.nombre}
              className="w-60 h-60 object-cover rounded-lg"
            />
          </button>
        ))}
      </Slider>
    </div>
  );
}