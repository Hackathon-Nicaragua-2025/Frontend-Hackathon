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
			<main role="main" className="mx-auto mt-8 md:w-2/3">
				<h1 id="events-title" className='mx-4 font-bold text-center text-primary'>
					En esta sección encontrarás eventos que ocurren en el territorio nicaragüense: avistamientos de aves, migraciones, festividades locales y otros eventos relevantes.
				</h1>
				<div className='flex flex-col justify-center gap-4 mt-6'>
					<p className='mx-8 text-center text-primary-low'>
						¡Explora el calendario! Selecciona una fecha con un evento para conocer los detalles.
					</p>
					{/* Legend */}
					<div aria-label="Leyenda de categorías" className='flex flex-wrap items-center justify-center gap-4 mx-4 mt-2 text-sm'>
						<div className='flex items-center gap-2'><span aria-hidden className='inline-block w-3 h-3 rounded' style={{ backgroundColor: '#0D3C2F' }}></span><span>Avistamiento</span></div>
						<div className='flex items-center gap-2'><span aria-hidden className='inline-block w-3 h-3 rounded' style={{ backgroundColor: '#2B589D' }}></span><span>Evento Especial</span></div>
						<div className='flex items-center gap-2'><span aria-hidden className='inline-block w-3 h-3 rounded' style={{ backgroundColor: '#0A6646' }}></span><span>Ciencia Ciudadana</span></div>
						<div className='flex items-center gap-2'><span aria-hidden className='inline-block w-3 h-3 rounded' style={{ backgroundColor: '#007ACC' }}></span><span>Evento Cultural</span></div>
					</div>
					<CalendarComponent events={typedEvents} />
				</div>
			</main>
			{/* Footer */}
			<Footer />
			{/* Nav Icons */}
			{isTablet ? <NavIcons /> : null}
		</>
	)
}
