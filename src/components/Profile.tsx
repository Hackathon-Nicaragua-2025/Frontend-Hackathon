// Import For React
import { useState } from "react";
// Import For Auth Context
import { useAuth } from "../context/AuthContext";
// Import For Component
import { Button } from "./Button";
// Import For React Icons
import { CgProfile } from "react-icons/cg";
import { FaX } from "react-icons/fa6";

// Component Profile
export const Profile = () => {
  // UseAuth
  const { logout } = useAuth();

  // State Modal
  const [modal, setModal] = useState(false);

  // Function Toggle Modal
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {/* Button */}
      <Button
        icon={<CgProfile />}
        className="text-3xl"
        onClick={toggleModal}
      />
      {/* Modal */}
      <div
        className={modal ? 'block' : 'hidden'}
        style={{ position: 'fixed', right: '10px', top: '85px', width: '200px', height: '250px', backgroundColor: 'white', zIndex: 100 }}
      >
        {/* Close Button */}
        <button
          onClick={toggleModal}
          className="absolute cursor-pointer top-2 right-2 hover:scale-110 transition-all duration-500 ease-in-out"
        >
          <FaX />
        </button>
        {/* Title */}
        <h2 className="my-4 text-center text-xl font-bold text-[#0A2C22]">Perfil</h2>
        {/* Information */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#08241C] text-white">
            <p>BS</p>
          </div>
          <div className="flex flex-col items-center justify-center mb-4 text-[#0D3C2F]">
            <p className="font-bold">Bryan Saenz</p>
            <p className="font-light">bryan@gmail.com</p>
          </div>
        </div>
        {/* Logout Button */}
        <div className="flex items-center justify-center">
          <Button
            label="Cerrar Sesión"
            className="cursor-pointer px-4 py-1 rounded-2xl bg-[#3F6C5E] text-white hover:bg-[#111111] hover:scale-110 transition-all duration-500 ease-in-out"
            rol={false}
            onClick={() => logout()}
          />
        </div>
      </div>
    </>
  );
}