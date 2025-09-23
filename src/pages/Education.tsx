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
import { InfoCard } from "../components/InfoCard"

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
					<InfoCard
						title="No dejes basura 🗑️"
						description="Lleva contigo todo lo que ingreses, incluyendo platos, botellas, envases, etc."
						image={NoBotarBasura}
						alt="No botar basura"
						emoji="🗑️"
					/>
					<InfoCard
						title="No hagas fogatas fuera de las zonas autorizadas 🌋:"
						description="El fuego puede causar incendios forestales y dañar la biodiversidad."
						image={NoHacerFogatas}
						alt="No hacer fogatas"
						reverse
						emoji="🌋"
					/>
					<InfoCard
						title="Respeta los senderos marcados 🏕️:"
						description="No salgas de los caminos para evitar daños a la flora y fauna natural."
						image={SenderosMarcados}
						alt="Senderos marcados"
						emoji="🏕️"
					/>
					<InfoCard
						title="Participa en actividades de reforestación 🌳:"
						description="Ayuda a restaurar áreas dañadas y promueve la biodiversidad."
						image={Reforestación}
						alt="Reforestación"
						reverse
						emoji="🌳"
					/>
					<InfoCard
						title="Apoyar al ecotourismo responsable 🌍:"
						description="Elige servicios locales que respalden la conservación de las reservas naturales."
						image={ApoyarAlEcotourismo}
						alt="Apoyar al ecotourismo"
						emoji="🌍"
					/>
				</div>
			</div>
			{/* Educación y Conciencia */}
			{/* Video */}
			<div className="mx-4 my-12 md:w-3/4 lg:w-1/2 md:mx-auto">
				<h3 className="mb-6 text-2xl font-bold text-center text-primary">Conoce del Aviturismo en este video</h3>
				<div className="relative overflow-hidden shadow-lg rounded-xl aspect-video">
					<iframe
						className="absolute top-0 left-0 w-full h-full"
						src="https://www.youtube.com/embed/lWz96Kn0-0s?si=XLCALQG1JE2tL4r4&amp;start=2&autoplay=1&controls=1&loop=1&modestbranding=1&rel=0"
						title="Video educativo sobre aviturismo"
						allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						loading="lazy"
					></iframe>
				</div>
			</div>
			<div className="mx-4">
				<h3 className="mt-12 mb-4 font-bold text-center">Educación y Conciencia</h3>
				<div className="flex flex-col gap-4">
					<InfoCard
						title="Comparte tus experiencias 📸:"
						description="Documenta tus visitas y comparte tus impresiones en redes sociales para educar a otros y generar conciencia."
						image={ComparteExperiencias}
						alt="Comparte tus experiencias"
						emoji="📸"
					/>
					<InfoCard
						title="Involúcrate en campañas de conciencia 🌍:"
						description="Apoya iniciativas locales que promuevan la protección de las reservas naturales."
						image={CampañasDeConciencia}
						alt="Campañas de Conciencia"
						reverse
						emoji="📝"
					/>
					<InfoCard
						title="Reporta actividades ilegales 📝:"
						description="Si notas actividades ilegales, como la caza de aves o la destrucción de reservas naturales, reporta a las autoridades locales."
						image={ActividadesIlegales}
						alt="Actividades Ilegales"
						reverse
						emoji="📝"
					/>
				</div>
			</div >
			{/* Quiz */}
			<div className="py-12 bg-gray-50">
				<div className="container px-4 mx-auto">
					<h3 className="mb-8 text-2xl font-bold text-center text-primary">Pon a prueba tus conocimientos</h3>
					<p className="max-w-2xl mx-auto mb-8 text-center text-gray-600">
						Selecciona un quiz para evaluar lo que has aprendido sobre la conservación de aves y reservas naturales.
					</p>
					<div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
						{[
							{
								title: "Quiz de Educación",
								to: "/quiz/education",
								color: "bg-primary",
								description: "Evalúa tus conocimientos sobre conservación"
							},
							{
								title: "Quiz de Eventos",
								to: "/quiz/events",
								color: "bg-secondary",
								description: "Descubre cuánto sabes sobre eventos de avistamiento"
							},
							{
								title: "Quiz de Inicio",
								to: "/quiz/home",
								color: "bg-tertiary",
								description: "Pon a prueba tus conocimientos generales"
							}
						].map((quiz, index) => (
							<Link
								key={index}
								to={quiz.to}
								className={`${quiz.color} hover:opacity-90 transition-opacity rounded-xl p-6 text-white shadow-md hover:shadow-lg transform hover:-translate-y-1`}
							>
								<h4 className="text-xl font-bold">{quiz.title}</h4>
								<p className="mt-2 text-sm opacity-90">{quiz.description}</p>
								<div className="flex items-center justify-end mt-4 text-sm font-medium">
									Comenzar quiz <span className="ml-2">→</span>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
			< Footer />
			{/* Footer */}
			{/* Nav Icons */}
			{isTablet ? <NavIcons /> : ''}
		</>
	)
}