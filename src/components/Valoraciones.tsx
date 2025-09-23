import { useState } from "react";
import { Profile } from ".";
import { BsThreeDotsVertical, BsStarFill, BsStar } from "react-icons/bs";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface ValoracionesProps {
  name: string;
  department: string;
  onRate?: (rating: number) => void;
}

export const Valoraciones = ({ name, department, onRate }: ValoracionesProps) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="w-full max-w-2xl p-4 mx-auto my-4 bg-white shadow-sm rounded-xl">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <Profile />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">Guía {name}</h3>
              <span className="text-sm text-gray-500">{department}</span>
            </div>
            <p className="text-sm text-gray-500">
              {format(new Date(), "d 'de' MMMM yyyy", { locale: es })}
            </p>
          </div>
        </div>
        <button className="p-1 text-gray-400 rounded-full hover:bg-gray-100">
          <BsThreeDotsVertical className="w-5 h-5" />
        </button>
      </div>

      <p className="mt-3 text-gray-700">
        ¡Si has participado en algún tour o evento con este guía, puedes valorarlo aquí!
        Tu opinión nos ayuda a mejorar y brindar una mejor experiencia.
      </p>

      <div className="flex flex-col items-center mt-4">
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(star)}
              className="text-2xl text-yellow-400 focus:outline-none"
            >
              {star <= (hover || rating) ? <BsStarFill /> : <BsStar />}
            </button>
          ))}
        </div>

        <button
          onClick={() => onRate?.(rating)}
          disabled={!rating}
          className={`px-4 py-2 text-sm font-medium text-white rounded-full ${rating ? 'bg-primary hover:bg-primary-dark' : 'bg-gray-300'
            }`}
        >
          Enviar valoración
        </button>
      </div>
    </div>
  );
};