// Import For React
import { useState } from 'react';
// Import For Big Calendar
import { Calendar, momentLocalizer, type View, type Messages } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// Import For Moment
import moment from 'moment';
import 'moment/locale/es';
// Import For Types
import type { CalendarEvent } from '../types/calendars';
// Import For Components
import { Modal } from './Modal';

// Interface Calendar Props
interface CalendarProps {
  events: CalendarEvent[];
}

// Set locale to Spanish for Moment and create localizer
moment.locale('es');
const localizer = momentLocalizer(moment)

// Messages in Spanish for react-big-calendar
const messages: Messages = {
  allDay: 'Todo el día',
  previous: 'Anterior',
  next: 'Siguiente',
  today: 'Hoy',
  month: 'Mes',
  week: 'Semana',
  day: 'Día',
  agenda: 'Agenda',
  date: 'Fecha',
  time: 'Hora',
  event: 'Evento',
  noEventsInRange: 'No hay eventos en este rango.',
  showMore: (total: number) => `+ Ver más (${total})`,
} as const;

// Component Calendar
export const CalendarComponent = ({ events }: CalendarProps) => {
  // State
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>("month");
  const [openEventModal, setOpenEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  // Handle Modal
  const openEventModalWith = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setOpenEventModal(true);
  };

  // Handle Close Modal
  const closeEventModal = () => {
    setOpenEventModal(false);
    setSelectedEvent(null);
  };

  return (
    <div className='w-full h-[80dvh] overflow-y-auto mx-auto mb-4'>
      <Calendar
        localizer={localizer}
        messages={messages}
        events={events}
        date={date}
        view={view}
        views={["month", "week", "day", "agenda"]}
        onView={(newView) => setView(newView)}
        onNavigate={(newDate) => setDate(newDate)}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectEvent={(event) => openEventModalWith(event as CalendarEvent)}
        eventPropGetter={(event) => {
          const style = {
            height: "fit-content",
            fontSize: "12px",
            padding: "4px 8px",
            borderRadius: "8px",
            color: "white",
            backgroundColor: event.categoría.includes("Avistamiento") ? "#0D3C2F" : event.categoría.includes("Evento Especial") ? "#1159CE" : event.categoría.includes("Ciencia Ciudadana") ? "#0A6646" : event.categoría.includes("Evento Cultural") ? "#1159CE" : "#1159CE",
          };
          return { style };
        }}
      />
      {/* Modal */}
      <Modal openModal={openEventModal} closeModal={closeEventModal} style={{ position: 'fixed', left: 'calc(50%)', top: 'calc(50%)', transform: 'translateY(-50%) translateX(-50%)', width: '300px', height: 'fit-content', padding: '2rem 1.5rem', borderRadius: '10px', backgroundColor: 'white', zIndex: 15 }} ariaLabelledBy="event-title">
        <h2 id="event-title" className="mb-2 font-bold text-center text-primary">{selectedEvent?.title}</h2>
        <h3 className="my-2 text-sm">
          <span className='font-bold'>
            Ave Relacionada:
          </span>
          <br />
          {selectedEvent?.ave_relacionada}</h3>
        <p className='text-sm text-justify'>{selectedEvent?.descripción}</p>
        <div className='flex flex-col gap-2 my-2'>
          <p> <span className='font-bold'>Categoría:</span> {selectedEvent?.categoría}</p>
          <p> <span className='font-bold'>Ubicación:</span> {selectedEvent?.ubicación}</p>
        </div>
      </Modal>
    </div >
  )
}