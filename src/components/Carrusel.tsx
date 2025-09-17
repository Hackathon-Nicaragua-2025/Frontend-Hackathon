// Import For React Slick
import Slider from "react-slick";
// Import For React Slick Styles 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import For Hooks
import { useMediaQuery } from "../hooks/mediaScreen";
// Import For Types
import type { CarouselProps } from "../types/carrusel";

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
    hoverPause: true,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    slidesToScroll: isMobile ? 1 : isTablet ? 2 : 3,
    initialSlide: 0,
  };

  return (
    <div className={className}>
      <div className="-mx-4 rounded-lg">
        <Slider key={`${settings.slidesToShow}-${settings.slidesToScroll}`} {...settings}>
          {avesProps?.map((avesProp) => (
            <button
              key={avesProp.id}
              className="cursor-pointer px-4 rounded-lg hover:scale-110 transition-all duration-500 ease-in-out"
            >
              <img
                src={avesProp.fotografía} alt={avesProp.nombre_común}
                className="w-full h-60 object-cover object-top rounded-lg"
              />
            </button>
          ))}
        </Slider>
      </div>
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
    hoverPause: true,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    slidesToScroll: isMobile ? 1 : isTablet ? 2 : 3,
    initialSlide: 0,
    rtl: true
  };

  return (
    <div className={className}>
      <div className="-mx-2 rounded-lg">
        <Slider key={`${settings.slidesToShow}-${settings.slidesToScroll}`} {...settings}>
          {reservasProps?.map((reservasProp) => (
            <div key={reservasProp.id} className="px-2">
              <button
                onClick={() => console.log(reservasProp)}
                className="cursor-pointer px-2 rounded-lg hover:scale-110 transition-all duration-500 ease-in-out"
              >
                <img
                  src={reservasProp.fotografía} alt={reservasProp.nombre}
                  className="w-full h-60 object-cover object-top rounded-lg"
                />
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}