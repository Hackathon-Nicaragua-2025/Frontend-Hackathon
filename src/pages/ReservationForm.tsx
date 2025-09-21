// Import For React
import { useMemo, useState } from "react";
// Import For Router
import { useNavigate, useParams } from "react-router-dom";
// Import For Layouts
import { Footer, NavBar } from "../layouts";
// Import For Data
import ReservasReservación from "../json/reservasReservación.json";

// Type for normalized card
type RawCard = {
  id: number;
  title: string;
  department?: string;
  activities?: string[];
  stars?: number;
  img?: string;
  departamento?: string;
  actividades?: string[];
  calificacion?: number;
  fotografia?: string;
};

export default function ReservationForm() {
  // Navigation
  const navigate = useNavigate();

  // Params
  const { id } = useParams<{ id: string }>();
  const numId = Number(id);

  // Normalization
  const reservas = useMemo(
    () =>
      (ReservasReservación as RawCard[]).map((item) => ({
        id: item.id,
        title: item.title,
        department: item.department ?? item.departamento ?? "",
        activities: item.activities ?? item.actividades ?? [],
        stars: item.stars ?? item.calificacion ?? 0,
        img: item.img ?? item.fotografia ?? "",
      })),
    []
  );

  // Selected
  const selected = reservas.find((r) => r.id === numId);

  // Form state
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    groupSize: 1,
    guide: "",
    duration: "full", // full | half | hourly
    hourlyHours: 1,
    notes: "",
  });

  // Guides
  const guides = ["Pablo", "Lucas", "Octavio"];

  // Handle Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: name === "groupSize" || name === "hourlyHours" ? Number(value) : value }));
  };

  // Handle Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const payload = { reservationId: selected?.id, ...form };
    
    console.log("Reservation submit:", payload);
    
    alert("¡Reservación enviada! Pronto nos pondremos en contacto.");
    navigate(-1);
  };

  return (
    <>
      {/* Navbar */}
      <NavBar />
      {/* Container */}
      <div className="max-w-6xl px-4 py-6 mx-auto">
        {/* Button Back */}
        <button
          onClick={() => navigate(-1)}
          className="px-3 py-1 mb-4 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          ← Volver
        </button>

        {selected && (
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden bg-white border border-gray-100 shadow-sm rounded-2xl">
              <img
                src={selected.img}
                alt={selected.title}
                className="object-cover w-full h-56"
              />
              <div className="p-4 space-y-2">
                <h1 className="text-xl font-semibold text-gray-900">{selected.title}</h1>
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gray-100 rounded-full text-primary">
                  {selected.department}
                </span>
                {selected.activities.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {selected.activities.slice(0, 6).map((a, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-gray-100 rounded-full">
                        {a}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-4 bg-white border border-gray-100 shadow-sm rounded-2xl">
              <h2 className="mb-4 text-lg font-semibold">Formulario de reservación</h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-sm text-gray-700">Nombre completo</label>
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Bryan Sanchez"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-gray-700">Correo electrónico</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="bryan@correo.com"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-gray-700">Teléfono</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="+505 8888 8888"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-gray-700">Número de personas</label>
                  <input
                    type="number"
                    min={1}
                    name="groupSize"
                    value={form.groupSize}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-gray-700">Fecha</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-gray-700">Hora</label>
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-gray-700">Guía</label>
                  <select
                    name="guide"
                    value={form.guide}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="" disabled>
                      Selecciona un guía
                    </option>
                    {guides.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-gray-700">Duración</label>
                  <select
                    name="duration"
                    value={form.duration}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="full">Día completo</option>
                    <option value="half">Medio día</option>
                    <option value="hourly">Por horas</option>
                  </select>
                </div>
                {form.duration === "hourly" && (
                  <div className="space-y-1">
                    <label className="text-sm text-gray-700">Horas</label>
                    <input
                      type="number"
                      min={1}
                      max={12}
                      name="hourlyHours"
                      value={form.hourlyHours}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                )}
                <div className="space-y-1 md:col-span-2">
                  <label className="text-sm text-gray-700">Notas</label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Detalles adicionales, restricciones, etc."
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm font-medium text-white rounded-xl bg-primary hover:opacity-90"
                >
                  Confirmar reservación
                </button>
              </div>
            </form>
          </div>
        )}

        {!selected && (
          <div className="p-6 text-center bg-white border border-gray-100 shadow-sm rounded-2xl">
            <p className="mb-3 text-gray-700">No se encontró la reserva seleccionada.</p>
            <button
              onClick={() => navigate("/tourist/reservation")}
              className="px-4 py-2 text-sm text-white rounded-xl bg-primary hover:opacity-90"
            >
              Volver a Reservaciones
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
