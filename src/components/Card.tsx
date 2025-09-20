// Import For React Icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

// Interface Card Props
interface CardProps {
  reservas: Card[];
}

// Interface Card
interface Card {
  id: number;
  title: string;
  department: string;
  activities: string[];
  stars: number;
  img: string;
}

// Component Cards
export const Cards = ({ cardProp }: { cardProp: CardProps }) => {
  // Star Function
  const clampStars = (n: number) => Math.max(0, Math.min(5, Math.round(n)));

  return (
    // Section Cards
    <section className="px-4 py-6">
      {/* Grid Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Map Cards */}
        {cardProp.reservas.map((card) => {
          const stars = clampStars(card.stars);

          return (
            <article
              key={card.id}
              className="overflow-hidden transition-shadow bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="object-cover w-full transition-transform duration-300 hover:scale-105 h-[200px]"
                  loading="lazy"
                />
                <span className="absolute inline-flex items-center px-3 py-1 text-xs font-medium rounded-full shadow top-3 left-3 bg-white/90 text-primary">
                  {card.department}
                </span>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
                  {card.title}
                </h3>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) =>
                    i < stars ? (
                      <AiFillStar key={i} className="text-yellow-400" />
                    ) : (
                      <AiOutlineStar key={i} className="text-yellow-400" />
                    )
                  )}
                  <span className="ml-1 text-xs text-gray-600">{stars}.0</span>
                </div>
                {card.activities?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {card.activities.slice(0, 4).map((act, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded-full"
                      >
                        {act}
                      </span>
                    ))}
                  </div>
                )}
                <div className="pt-2">
                  <button className="w-full px-4 py-2 text-sm font-medium text-white rounded-xl bg-primary hover:opacity-90">
                    Reservar
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}