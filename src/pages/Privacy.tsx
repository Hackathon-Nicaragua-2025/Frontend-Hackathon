// Import For Hooks
import { useMediaQuery } from "../hooks/mediaScreen";
// Import For Layouts
import { Footer } from "../layouts";
// Import For Components
import { CustomLinks, NavIcons } from "../components";

// Policy and Privacy Page
export default function Privacy() {
  // Responsive Constants
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <div className="flex flex-col gap-2 m-4">
        <h2 className="font-bold">Política de Privacidad</h2>
        <p className="text-sm"><span>Ultima Actualización: {new Date().toLocaleDateString()}</span></p>
        <p className="mt-2">En la plataforma de Aviturismo y Reservas naturales de Nicaragua. Nos comprometemos a proteger la privacidad de nuestros usuarios y garantizar que sus datos personales sean tratados de manera segura y responsable.</p>
        <div className="mt-4">
          <h3 className="font-bold">1. Información Recopilada</h3>
          <ul className="list-disc ml-8">
            <li><span className="font-semibold">Datos de registro:</span> nombre, correo electrónico, contraseña y numero de teléfono.</li>
            <li><span className="font-semibold">Datos de uso:</span> reservas realizados, eventos asistidos, modulo educativo completado.</li>
            <li><span className="font-semibold">Datos de localización:</span> en caso de usar la app móvil, podemos recopilar datos de ubicación para recomendar reservas y actividades cercanas.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">2. Uso de la información</h3>
          <p className="font-semibold">La información recopilada se utiliza para:</p>
          <ul className="list-disc ml-8">
            <li>Gestionar cuentas de usuario y reservas.</li>
            <li>Ofrecer información sobre aves, reservas naturales y eventos.</li>
            <li>Mejorar la experiencia en la plataforma y personalizar recomendaciones.</li>
            <li>Cumplir con obligaciones legales y regulators.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">3. Comparticion de información</h3>
          <p className="font-semibold">No vendemos ni compartimos la información personal de los usuarios con terceros, salvo en los siguientes caso:</p>
          <ul className="list-disc ml-8">
            <li>Proveedores de servicios necesarios para la operación de la plataforma.</li>
            <li>Autoridades legales cuando sea requerido por ley.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">4. Seguridad de la información</h3>
          <p>Aplicamos medidas técnicas y organizativas (encriptación, control de acceso, seguridad en la nube) para proteger los datos personales.</p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">5. Derechos de Usuarios</h3>
          <p className="font-semibold">Los usuarios tienen derecho a:</p>
          <ul className="list-disc ml-8">
            <li>Acceder, rectificar y suprimir su información personal.</li>
            <li>Oponerse al uso de sus datos con fines publicitarios.</li>
            <li>Solicitar la portabilidad de sus datos.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">6. Contacto</h3>
          <p>Si tienes alguna pregunta o duda sobre la privacidad de tus datos, no dudes en contactarnos.</p>
          <p>Correo Electrónico:
            <CustomLinks
              label="avifyhackathon@gmail.com"
              reference="mailto:avifyhackathon@gmail.com"
              target="_blank"
              className="hover:text-[#111111] hover:underline transition-all duration-500 ease-in-out"
            />
          </p>
        </div>
      </div>
      {/* Footer */}
      <Footer />
      {/* Nav Icons */}
      {isTablet ? <NavIcons /> : ''}
    </>
  )
}