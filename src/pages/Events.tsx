// Import For React
import { useMemo } from 'react';
// Import For Hooks
import { useMediaQuery } from '../hooks/mediaScreen';
// Import For Layouts
import { Footer, NavBar } from "../layouts";
// Import For Components
import { NavIcons, CalendarComponent } from "../components";
// Import For Types
import type { CalendarEvent, RawEvent } from "../types/calendars";
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
			<h2 className='mt-8 mx-8 text-center font-bold text-[#30D3C2F] md:w-3/4 md:mx-auto lg:w-2/3 lg:mx-auto'>
				En esta sección encontraras eventos que ocurren en el territorio nicaragüense. tales como avistamientos de aves, migraciones, festividades locales y otros eventos relevantes.
			</h2>
			<div className='flex flex-col items-center justify-center gap-4 mt-8'>
				<p className='mx-8 text-center text-[#3F6C5E] md:w-3/4 md:mx-auto'>
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
