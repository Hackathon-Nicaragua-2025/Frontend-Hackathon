// Import For React
import { useState } from 'react';
// Import For Big Calendar
import { Calendar, momentLocalizer, type View } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// Import For Moment
import moment from 'moment';
// Import For Types
import type { CalendarEvent } from '../types/calendars';
// Import For Components
import { Modal } from './Modal';

// Interface Calendar Props
interface CalendarProps {
  events: CalendarEvent[];
}

// Const Localizer
const localizer = momentLocalizer(moment)

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
    <div className='w-full h-[80dvh] overflow-y-auto mx-auto mb-4 md:w-3/4 lg:w-2/3'>
      <Calendar
        localizer={localizer}
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
      <Modal openModal={openEventModal} closeModal={closeEventModal} style={{ position: 'fixed', left: 'calc(50%)', top: 'calc(50%)', transform: 'translateY(-50%) translateX(-50%)', width: '300px', height: 'fit-content', padding: '2rem 1.5rem', borderRadius: '10px', backgroundColor: 'white', zIndex: 15 }}>
        <h2 className="mb-2 font-bold text-center text-primary">{selectedEvent?.title}</h2>
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