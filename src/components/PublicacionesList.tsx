// En components/PublicacionesList.tsx
import { Profile } from ".";
import { BsThreeDotsVertical, BsHeart, BsChat, BsShare } from "react-icons/bs";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface Publicacion {
  id: string;
  content: string;
  author: string;
  date: Date;
  likes: number;
  comments: number;
}

interface PublicacionesListProps {
  publicaciones: Publicacion[];
  onLike: (id: string) => void;
  onComment: (id: string) => void;
  onShare: (id: string) => void;
}

export const PublicacionesList = ({ 
  publicaciones, 
  onLike, 
  onComment, 
  onShare 
}: PublicacionesListProps) => {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {publicaciones.map((publicacion) => (
        <div 
          key={publicacion.id} 
          className="p-4 bg-white shadow-sm rounded-xl"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <Profile />
              <div>
                <h3 className="font-semibold">{publicacion.author}</h3>
                <p className="text-sm text-gray-500">
                  {format(publicacion.date, "d 'de' MMMM yyyy", { locale: es })}
                </p>
              </div>
            </div>
            <button className="p-1 text-gray-400 rounded-full hover:bg-gray-100">
              <BsThreeDotsVertical className="w-5 h-5" />
            </button>
          </div>

          <p className="mb-4 text-gray-800">{publicacion.content}</p>

          <div className="flex items-center justify-between pt-3 border-t">
            <button 
              onClick={() => onLike(publicacion.id)}
              className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 rounded-full hover:bg-gray-100"
            >
              <BsHeart className="text-red-500" />
              <span>{publicacion.likes}</span>
            </button>
            
            <button 
              onClick={() => onComment(publicacion.id)}
              className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 rounded-full hover:bg-gray-100"
            >
              <BsChat />
              <span>{publicacion.comments} Comentarios</span>
            </button>
            
            <button 
              onClick={() => onShare(publicacion.id)}
              className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 rounded-full hover:bg-gray-100"
            >
              <BsShare />
              <span>Compartir</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};