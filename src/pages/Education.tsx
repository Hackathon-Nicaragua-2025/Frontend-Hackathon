// Import For React
import { useState } from "react"
// Import For Hooks
import { useMediaQuery } from "../hooks/mediaScreen"
// Import For Components
import { NavBar, Footer } from "../layouts"
// Import For Components
import { NavIcons, Marcadores } from "../components"
// Import For React Icons
import { HiOutlineLocationMarker } from "react-icons/hi"
// Import For Router
import { Link } from "react-router-dom"
// Import For Assets
import ApoyarAlEcotourismo from '../assets/image/ApoyarAlEcotourismo.png'
import NoBotarBasura from '../assets/image/NoBotarBasura.png'
import NoHacerFogatas from '../assets/image/NoHacerFogatas.png'
import Reforestación from '../assets/image/Reforestación.png'
import SenderosMarcados from '../assets/image/SenderosMarcados.png'
import ÁrbolMadroño from '../assets/image/ÁrbolMadroño.png'
import ComparteExperiencias from '../assets/image/ComparteExperiencias.png'
import CampañasDeConciencia from '../assets/image/CampañasDeConciencia.png'
import ActividadesIlegales from '../assets/image/ActividadesIlegales.png'

// Component Education
export default function Education() {
	// Responsive Constants
	const isTablet = useMediaQuery("(max-width: 768px)");

	// State: control single open marker
	const [selectedMarkerId, setSelectedMarkerId] = useState<string | number | null>(null);

	const handleSelectMarker = (id: string | number) => {
		setSelectedMarkerId(prev => (prev === id ? null : id));
	};

	return (
		<>
			{/* NavBar */}
			<NavBar />
			{/* Title */}
			<p className="w-2/3 mx-4 mt-8 text-center md:mx-auto text-primary">
				Tomar en cuenta esta indicaciones es fundamentar para proteger la riqueza natural de Nicaragua, especialmente sus a ves y reservas ecológicas, que son el hogar de especies únicas y ecosistemas frágiles.
			</p>
			{/* Cuido de las Aves */}
			<div>
				<h3 className="mt-8 font-bold text-center">Cuido de las Aves</h3>
				<div className="relative lg:w-[80%] lg:mx-auto">
					<img src={ÁrbolMadroño} alt="Árbol Madroño" className="lg:shadow-lg lg:rounded-2xl lg:shadow-amber-950" />
					<Marcadores
						id={1}
						description="Apoya reservas y proyectos de conservacion locales"
						y={90}
						x={30}
						icon={<HiOutlineLocationMarker />}
						isOpen={selectedMarkerId === 1}
						onSelect={handleSelectMarker}
					/>
					<Marcadores
						id={2}
						description="Respeta sus habitas, no cortes ni destruyas zonas de anidación"
						y={40}
						x={250}
						icon={<HiOutlineLocationMarker />}
						isOpen={selectedMarkerId === 2}
						onSelect={handleSelectMarker}
					/>
					<Marcadores
						id={3}
						description="No uses pesticidas toxicas, Estas contaminan el ambiente y afectan la salud de las aves"
						y={50}
						x={150}
						icon={<HiOutlineLocationMarker />}
						isOpen={selectedMarkerId === 3}
						onSelect={handleSelectMarker}
					/>
					<Marcadores
						id={4}
						description="No compres aves silvestres como mascotas, Esto fomenta el trafico ilegal"
						y={80}
						x={300}
						icon={<HiOutlineLocationMarker />}
						isOpen={selectedMarkerId === 4}
						onSelect={handleSelectMarker}
					/>
					<Marcadores
						id={5}
						description="Coloca comederos y bebederos seguros. Especialmente en zonas urbanas"
						y={90}
						x={200}
						icon={<HiOutlineLocationMarker />}
						isOpen={selectedMarkerId === 5}
						onSelect={handleSelectMarker}
					/>
					<Marcadores
						id={6}
						description="No molestes sus nidos, Evita acercarte demasiado o tocar huevos y crías"
						y={100}
						x={100}
						icon={<HiOutlineLocationMarker />}
						isOpen={selectedMarkerId === 6}
						onSelect={handleSelectMarker}
					/>
				</div>
			</div>
			{/* Cuido de las Reservas Naturales */}
			<div>
				<h3 className="mb-4 font-bold text-center mt-14">Cuido de las Reservas Naturales</h3>
				<div className="mx-4 lg:w-[80%] lg:mx-auto">
					<div className="flex items-center justify-center gap-4">
						<div className="hidden w-1/4 md:block">
							<img
								src={NoBotarBasura}
								alt="No botar basura"
							/>
						</div>
						<p className="flex flex-col gap-2 mt-4 text-sm md:w-1/2">
							<span className="font-bold">
								No dejes basura 🗑️:
							</span>
							Lleva contigo todo lo que ingreses, incluyendo platos, botellas, envases, etc.
						</p>
					</div>
					<div className="flex items-center justify-center gap-4">
						<p className="flex flex-col gap-2 mt-4 text-sm md:w-1/2">
							<span className="font-bold">
								No hagas fogatas fuera de las zonas autorizadas 🌋:
							</span>
							El fuego puede causar incendios forestales y dañar la biodiversidad.
						</p>
						<div className="hidden w-1/4 md:block">
							<img
								src={NoHacerFogatas}
								alt="No hacer fogatas"
							/>
						</div>
					</div>
					<div className="flex items-center justify-center gap-4">
						<div className="hidden w-1/4 md:block">
							<img
								src={SenderosMarcados}
								alt="Senderos marcados"
							/>
						</div>
						<p className="flex flex-col gap-2 mt-4 text-sm md:w-1/2">
							<span className="font-bold">
								Respeta los senderos marcados 🏕️:
							</span>
							No salgas de los caminos para evitar daños a la flora y fauna natural.
						</p>
					</div>
					<div className="flex items-center justify-center gap-4">
						<p className="flex flex-col gap-2 mt-4 text-sm md:w-1/2">
							<span className="font-bold">
								Participa en actividades de reforestación 🌳:
							</span>
							Ayuda a restaurar áreas dañadas y promueve la biodiversidad.
						</p>
						<div className="hidden w-1/4 md:block">
							<img
								src={Reforestación}
								alt="Reforestación"
							/>
						</div>
					</div>
					<div className="flex items-center justify-center gap-4">
						<div className="hidden w-1/4 md:block">
							<img
								src={ApoyarAlEcotourismo}
								alt="Apoyar al ecotourismo"
							/>
						</div>
						<p className="flex flex-col gap-2 mt-4 text-sm md:w-1/2">
							<span className="font-bold">
								Apoyar el ecotourismo responsable 🌍:
							</span>
							Elige servicios locales que respalden la conservación de las reservas naturales.
						</p>
					</div>
				</div>
			</div>
			{/* Educación y Conciencia */}
			{/* Video */}
			<h3 className="mt-8 mb-4 font-bold text-center">Conoce del Aviturismo en este video</h3>
			<div className="mx-4 aspect-[16/9] md:w-1/2 md:mx-auto lg:w-1/2 lg:mx-auto">
				<iframe
					className="w-full h-full"
					src="https://www.youtube.com/embed/lWz96Kn0-0s?si=XLCALQG1JE2tL4r4&amp;start=2&autoplay=1&controls=1&loop=1&modestbranding=1&rel=0"
					allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</div>
			<div className="mx-4">
				<h3 className="mt-12 mb-4 font-bold text-center">Educación y Conciencia</h3>
				<div className="flex flex-col gap-4">
					<div className="flex items-center justify-center gap-4">
						<p className="flex flex-col gap-2 mt-4 text-sm md:w-1/2">
							<span className="font-bold">
								Comparte tus experiencias 📸:
							</span>
							Documenta tus visitas y comparte tus impresiones en redes sociales para educar a otros y generar conciencia.
						</p>
						<div className="hidden w-1/4 md:block">
							<img
								src={ComparteExperiencias}
								alt="Comparte tus experiencias"
								className="rounded-2xl"
							/>
						</div>
					</div>
					<div className="flex items-center justify-center gap-4">
						<p className="flex flex-col gap-2 mt-4 text-sm md:w-1/2">
							<span className="font-bold">
								Involucrate en campañas de conciencia 🌍:
							</span>
							Apoya iniciativas locales que promuevan la protección de las reservas naturales.
						</p>
						<div className="hidden w-1/4 md:block">
							<img
								src={CampañasDeConciencia}
								alt="Campañas de Conciencia"
								className="rounded-2xl"
							/>
						</div>
					</div>
					<div className="flex items-center justify-center gap-4">
						<p className="flex flex-col gap-2 mt-4 text-sm md:w-1/2">
							<span className="font-bold">
								Reporta actividades ilegales 📝:
							</span>
							Si notas actividades ilegales, como la caza de aves o la destrucción de reservas naturales, reporta a las autoridades locales.
						</p>
						<div className="hidden w-1/4 md:block">
							<img
								src={ActividadesIlegales}
								alt="Actividades Ilegales"
								className="rounded-2xl"
							/>
						</div>
					</div>
				</div>
			</div >
			{/* Quiz */}
			<h3 className="mt-12 mb-4 font-bold text-center">Selecciona un Quiz de alguna de nuestras secciones.</h3>
			<div className="flex flex-col items-center gap-4 my-8 lg:flex-row lg:justify-center">
				<div>
					<Link
						to="/quiz/education"
						className="inline-block px-5 py-2 text-white rounded bg-primary hover:opacity-90"
					>
						Hacer el Quiz de Educación
					</Link>
				</div>
				<div>
					<Link
						to="/quiz/events"
						className="inline-block px-5 py-2 text-white rounded bg-secondary hover:opacity-90"
					>
						Hacer el Quiz de Eventos
					</Link>
				</div>
				<div>
					<Link
						to="/quiz/home"
						className="inline-block px-5 py-2 text-white rounded bg-tertiary hover:opacity-90"
					>
						Hacer el Quiz de Inicio
					</Link>
				</div>
			</div>
			< Footer />
			{/* Footer */}
			{/* Nav Icons */}
			{isTablet ? <NavIcons /> : ''}
		</>
	)
}