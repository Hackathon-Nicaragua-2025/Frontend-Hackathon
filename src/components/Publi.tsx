// En components/Publi.tsx
import { useState } from "react";
import { Profile } from ".";
import {
  BsEmojiSmile, BsImage, BsCameraVideo
} from "react-icons/bs";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface PubliProps {
  textNote: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
  onPost: () => void;
}

export const Publi = ({ textNote, onChange, onDelete, onPost }: PubliProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-2xl p-4 mx-auto my-4 bg-white shadow-sm rounded-xl">
      <div className="flex items-start gap-3">
        <Profile />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Bryan Sáenz</h3>
            <span className="text-sm text-gray-500">
              {format(new Date(), "d 'de' MMMM yyyy", { locale: es })}
            </span>
          </div>

          <div className="mt-2">
            <input
              type="text"
              value={textNote}
              onChange={onChange}
              placeholder="¿Qué estás pensando?"
              className="w-full p-2 text-gray-800 bg-transparent border-b border-gray-200 focus:outline-none focus:border-primary"
              onFocus={() => setIsExpanded(true)}
            />
          </div>

          {isExpanded && (
            <div className="mt-3">
              <div className="flex items-center gap-2 mb-3">
                <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100">
                  <BsImage className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100">
                  <BsCameraVideo className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100">
                  <BsEmojiSmile className="w-5 h-5" />
                </button>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t">
                <button
                  onClick={() => {
                    onDelete();
                    setIsExpanded(false);
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    onPost();
                    setIsExpanded(false);
                  }}
                  disabled={!textNote.trim()}
                  className="px-4 py-2 text-sm font-medium text-white rounded-full bg-primary hover:bg-primary-dark disabled:opacity-50"
                >
                  Publicar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};