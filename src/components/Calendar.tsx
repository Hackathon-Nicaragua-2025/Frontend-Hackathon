// Import For React
import { useState } from 'react';
// Import For Big Calendar
import { Calendar, momentLocalizer, type View } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// Import For Moment
import moment from 'moment';
// Import For Types
import type { CalendarEvent } from '../types/calendars';
// Import For Icons
import { FaX } from 'react-icons/fa6';

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
    <div className='w-full h-[80dvh] overflow-y-auto mb-4 md:w-3/4 lg:w-2/3'>
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
      <div className={openEventModal ? 'block' : 'hidden'}>
        {/* Backdrop */}
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={closeEventModal}
        />
        {/* Modal Container */}
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-[90%] w-[680px] h-fit text-[#0A2C22] bg-[#9F9F9F] rounded-lg"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-modal-title"
        >
          {/* Close button */}
          <button
            onClick={closeEventModal}
            className="absolute top-4 right-4 cursor-pointer text-white hover:scale-110 transition-all duration-300 ease-in-out"
            aria-label="Cerrar"
          >
            <FaX />
          </button>
          {/* Content */}
          <div className="p-5">
            <h2 id="event-modal-title" className="text-center text-xl font-bold mb-3 text-[#0A2C22]">
              {selectedEvent?.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 text-sm">
              <p><span className="font-semibold">Categoría:</span> {selectedEvent?.categoría}</p>
              <p><span className="font-semibold">Ave relacionada:</span> {selectedEvent?.ave_relacionada}</p>
              <p><span className="font-semibold">Ubicación:</span> {selectedEvent?.ubicación}</p>
              <p>
                <span className="font-semibold">Fecha:</span> {selectedEvent ? `${selectedEvent.start.toLocaleDateString()} - ${selectedEvent.end.toLocaleDateString()}` : ''}
              </p>
            </div>
            <p className="text-sm leading-relaxed">
              {selectedEvent?.descripción}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}