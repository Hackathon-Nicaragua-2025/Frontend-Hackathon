// Import For Hooks
import { useMediaQuery } from "../hooks/mediaScreen";
// Import For Layouts
import { Footer } from "../layouts";
// Import For Components
import { CustomLinks, NavIcons } from "../components";

// Conditions and Services Page
export default function Conditions() {
  // Responsive Constants
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <div className="flex flex-col gap-2 m-4">
        <h2 className="font-bold">Condiciones y Servicios</h2>
        <p className="text-sm"><span>Ultima Actualización: {new Date().toLocaleDateString()}</span></p>
        <p className="mt-2">Bienvenido a la plataforma  de Aviturismo y Reservas Naturales de Nicaragua. Al utilizar nuestros servicios acepta la siguientes condiciones.</p>
        <div className="mt-4">
          <h3 className="font-bold">1. Uso de la Plataforma</h3>
          <ul className="list-disc ml-8">
            <li>El usuario se compromete a proporcionar informacion verídica al registrarse.</li>
            <li>Esta prohibido utilizar la plataforma con fines ilegales o fraudulentos.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">2. Reservas y Pagos</h3>
          <ul className="list-disc ml-8">
            <li>Todas las reservas están sujetas a disponibilidad de las reservas naturales.</li>
            <li>En caso de existir pago en linea. estos se procesaran mediante proveedores seguros.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">3. Propiedad Intelectual.</h3>
          <ul className="list-disc ml-8">
            <li>El contenido de la plataforma (texto, imágenes, videos, diseño, código, etc.) pertenece a la organización del proyecto Avify y no puede ser reproducido, distribuido, modificado o utilizado sin el consentimiento previo de la misma.</li>
            <li>El usuario conserva los derechos sobre el contenido que comparte (reseñas, comentarios, etc) pero otorga a la plataforma el derecho de uso para fines de operación.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">4. Responsabilidad.</h3>
          <ul className="list-disc ml-8">
            <li>La plataforma actúa como intermediaria entre los usuarios y los guías turísticos.</li>
            <li>No nos hacemos responsables por accidentes, daños o incumplimiento ocasionados directamente en las actividades de terceros.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">5. Modificaciones.</h3>
          <p>Nos reservamos el derecho a modificar estas condiciones en cualquier momento. Los cambios serán notificados atreves de la plataforma o al correo electrónico del usuario registrado.</p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">6. Contacto.</h3>
          <p>Si tienes alguna pregunta o duda sobre las condiciones de uso de la plataforma, no dudes en contactarnos.</p>
          <p>Correo Electrónico:
            <CustomLinks
              label=" avifyhackathon@gmail.com"
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