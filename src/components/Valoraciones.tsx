import { HiOutlineDotsVertical } from "react-icons/hi";
import { Profile } from "../components";

// interface Props
interface ValoracionesProps {
  name: string;
  department: string;
}

export const Valoraciones = ({ name, department }: ValoracionesProps) => {
  return (
    <div className="flex flex-col md:max-w-[600px] md:mx-auto">
      <div className="mx-4 mb-2 border border-gray-300 rounded-2xl md:mb-4">
        <div className="flex items-center justify-between mx-4 my-2 md:my-4">
          <div className="flex items-center gap-2 md:gap-4">
            <Profile />
            <div className="flex flex-col">
              <h3 className="font-bold">
                Guía {name},
                <span className="text-[#99B8B1]">
                  {department}
                </span>
              </h3>
              <p className="text-xs text-[#99B8B1]">Publicado el {new Date().toLocaleDateString()}</p>
            </div>
          </div>
          <button className="cursor-pointer text-xl md:text-2xl">
            <HiOutlineDotsVertical />
          </button>
        </div>
        <p className="mx-4 my-2 md:my-4">
          ¡Si has participado en algún tour o evento con este guía, puedes valorarlo aquí, nos ayudará a mejorar y brindarte una mejor experiencia!
        </p>
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <input
            type="range"
            name="value"
            id="value"
            min={1}
            max={5}
            className="w-[80%] my-2 md:w-[60%] "
          />
          <button className="cursor-pointer text-sm hover:text-[#3F6C5E] hover:scale-125 transition duration-500 ease-in-out md:text-base">
            <span className="font-light text-xs md:text-base">Enviar</span>
          </button>
        </div>
      </div>
    </div>
  )
}