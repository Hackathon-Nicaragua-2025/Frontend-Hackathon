// Interface for calendar Events
export interface CalendarEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  categoría: string;
  ave_relacionada: string;
  ubicación: string;
  descripción: string;
}

// Interface Raw Event
export interface RawEvent {
  id: number;
  title: string;
  start: string;
  end: string;
  categoría: string;
  ave_relacionada: string;
  ubicación: string;
  descripción: string;
}