// Import For React
import { useState } from "react";
// Import For Context
import { useAuth } from "../context/AuthContext";
// Import For Component
import { Button, Modal } from "../components";
// Import For React Icons
import { CgProfile } from "react-icons/cg";
import { BsPersonCircle } from "react-icons/bs";

// Component Profile
export const Profile = () => {
  // UseAuth
  const { user, logout } = useAuth();

  // State Modal
  const [modal, setModal] = useState(false);

  // Handle Modal
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
      <Modal openModal={modal} closeModal={toggleModal} style={{ position: 'fixed', right: '30px', top: 'calc(60px + 1rem)', width: 'fit-content', height: 'fit-content', padding: '2rem 1.5rem', borderRadius: '10px', backgroundColor: 'white', zIndex: 15 }}>
        <h2 className="font-bold text-center">Perfil</h2>
        <div className="flex items-center justify-center">
          <BsPersonCircle className="text-2xl" />
        </div>
        <p className="my-1 text-sm text-center">{user?.name}</p>
        <p className="my-1 text-sm text-center">{user?.email}</p>
        <div>
          <Button
            label="Cerrar Sesión"
            className="px-4 py-1 mt-2 text-sm text-white transition-all duration-500 ease-in-out rounded-lg cursor-pointer bg-primary hover:bg-primary-high hover:scale-105"
            onClick={() => logout()}
          />
        </div>
      </Modal>
    </>
  );
}