// Interface Aves
export type Aves = {
  id: number;
  nombre_común: string;
  nombre_científico: string;
  fotografía: string;
  categoría: string;
  descripción: string;
  distribución: string;
}

// Interface Reservas
export interface Reservas {
  id: number;
  nombre: string;
  categoría: string;
  fotografía: string;
  descripción: string;
  ubicación: string;
}

// Interface Carousel Props
export interface CarouselProps {
  avesProps?: Aves[];
  reservasProps?: Reservas[];
  className?: string;
};