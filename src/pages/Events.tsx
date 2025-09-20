// Import For React
import { useMemo } from 'react';
// Import For Hooks
import { useMediaQuery } from '../hooks/mediaScreen';
// Import For Layouts
import { Footer, NavBar } from "../layouts";
// Import For Components
import { NavIcons, CalendarComponent } from "../components";
// Import For Types
import type { CalendarEvent, RawEvent, } from "../types/calendars";

// Import For Json
import { Eventos } from "../json";

// Events Page
export default function Events() {
	// Responsive Constants
	const isTablet = useMediaQuery("(max-width: 768px)");

	// Convert Raw Events to Calendar Events
	const typedEvents = useMemo<CalendarEvent[]>(() => {
		return (Eventos as unknown as RawEvent[]).map((e) => ({
			id: e.id,
			title: e.title,
			start: new Date(e.start),
			end: new Date(e.end),
			categoría: e.categoría,
			ave_relacionada: e.ave_relacionada,
			ubicación: e.ubicación,
			descripción: e.descripción,
		}));
	}, []);

	return (
		<>
			{/* NavBar */}
			<NavBar />
			<h2 className='mx-4 mt-8 font-bold text-center text-primary md:w-2/3 md:mx-auto'>
				En esta sección encontraras eventos que ocurren en el territorio nicaragüense. tales como avistamientos de aves, migraciones, festividades locales y otros eventos relevantes.
			</h2>
			<div className='flex flex-col justify-center gap-4 mt-8'>
				<p className='mx-8 text-center text-primary-low md:w-2/3 md:mx-auto'>
					¡Explora el calendario! Solo selecciona una fecha con un evento y conoce los detalles.
				</p>
				<CalendarComponent events={typedEvents} />
			</div>
			{/* Footer */}
			<Footer />
			{/* Nav Icons */}
			{isTablet ? <NavIcons /> : ''}
		</>
	)
}
