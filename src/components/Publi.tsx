// Import For React
import { useState } from "react";
// Import For Components
import { Profile } from "../components";
// Import For React Icons
import { AiOutlineLike, AiOutlinePicture } from "react-icons/ai";
import { GoVideo } from "react-icons/go";
import { FaCheck, FaRegSmile } from "react-icons/fa";
import { FaCloudArrowDown, FaRegCommentDots, FaX } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { HiArrowPath } from "react-icons/hi2";

// Interface Props
interface PubliProps {
  textNote: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
  onPost: () => void;
}

// Interface Props Insert
interface InsertPubliProps {
  notes: string[];
}

// Component Publi
export const Publi = ({ textNote, onChange, onDelete, onPost }: PubliProps) => {
  return (
    <div className="flex items-center justify-center gap-4 my-4 ">
      <Profile />
      <div className="flex items-center justify-center gap-4 md:gap-6">
        <input
          type="text"
          placeholder="Comparte tu experiencia"
          value={textNote}
          onChange={onChange}
          className="w-full p-2 rounded-2xl border border-gray-300 focus:outline-none"
        />
        {textNote.length === 0 && (
          <>
            <button className="cursor-pointer text-xl md:text-2xl">
              <AiOutlinePicture />
            </button>
            <button className="cursor-pointer text-xl md:text-2xl">
              <GoVideo />
            </button>
            <button className="cursor-pointer text-xl md:text-2xl">
              <FaRegSmile />
            </button>
          </>
        )}
        {
          textNote.length > 0 && (
            <>
              <button
                className="accept__button cursor-pointer text-xl md:text-2xl"
                onClick={onPost}
              >
                <FaCheck />
              </button>
              <button
                className="delete__button cursor-pointer text-xl md:text-2xl"
                onClick={onDelete}
              >
                <FaX />
              </button>
            </>
          )}
      </div>
    </div>
  )
}

export const InsertPubli = ({ notes }: InsertPubliProps) => {
  // State
  const [count, setCount] = useState(0)

  // Handle Like
  const handleLike = () => {
    setCount(count + 1)
  }

  return (
    <div className="flex flex-col md:max-w-[600px] md:mx-auto">
      {notes.map((note, index) => (
        <div key={index} className="mx-4 mb-2 border border-gray-300 rounded-2xl md:mb-4">
          <div className="flex items-center justify-between mx-4 my-2 md:my-4">
            <div className="flex items-center gap-2 md:gap-4">
              <Profile />
              <div className="flex flex-col">
                <h3 className="font-bold">Bryan Saenz</h3>
                <p className="text-xs text-[#99B8B1]">Publicado el {new Date().toLocaleDateString()}</p>
              </div>
            </div>
            <button className="cursor-pointer text-xl md:text-2xl">
              <HiOutlineDotsVertical />
            </button>
          </div>
          <p className="mx-8 my-4 font-bold md:my-6">¡{note}!</p>
          <div className="flex items-center justify-center gap-6 mx-4 my-2 md:my-4">
            <button
              className="cursor-pointer flex items-center gap-2 text-sm hover:text-[#3F6C5E] hover:scale-125 transition duration-500 ease-in-out md:text-base"
              onClick={handleLike}
            >
              <AiOutlineLike />
              <span className="font-light text-xs">{count ? count : 'Like'}</span>
            </button>
            <button className="cursor-pointer flex items-center gap-2 text-sm hover:text-[#3F6C5E] hover:scale-125 transition duration-500 ease-in-out md:text-base">
              <FaRegCommentDots />
              <span className="font-light text-xs">Comentar</span>
            </button>
            <button className="cursor-pointer flex items-center gap-2 text-sm hover:text-[#3F6C5E] hover:scale-125 transition duration-500 ease-in-out md:text-base">
              <HiArrowPath />
              <span className="font-light text-xs">Compartir</span>
            </button>
            <button className="cursor-pointer flex items-center gap-2 text-sm hover:text-[#3F6C5E] hover:scale-125 transition duration-500 ease-in-out md:text-base">
              <FaCloudArrowDown />
              <span className="font-light text-xs">Descargar</span>
            </button>
          </div>
        </div>
      ))}
      {
        notes.length === 0 && (
          <p className="mb-8 text-center text-sm text-[#99B8B1]">No hay publicaciones</p>
        )
      }
    </div>
  )
}