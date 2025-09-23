# Avify - Aplicación Web de Gestión

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Avify es una aplicación web moderna desarrollada para la gestión de eventos y tareas, construida con las últimas tecnologías del ecosistema React.

## 🏠 Páginas Principales

### 1. Inicio (Home)
- Punto de entrada principal de la aplicación
- Muestra información destacada y accesos rápidos
- Incluye un cuestionario interactivo (QuizHome)

### 2. Eventos
- Muestra el calendario de eventos disponibles
- Permite la visualización de detalles de cada evento
- Incluye un cuestionario específico sobre eventos (QuizEvents)

### 3. Educación
- Proporciona recursos educativos
- Incluye información sobre actividades al aire libre
- Cuenta con un cuestionario educativo (QuizEducation)

### 4. Reservaciones
- Formulario para realizar reservaciones
- Visualización de reservaciones existentes
- Gestión completa del proceso de reserva

### 5. Comunidad
- Espacio para interacción entre usuarios
- Sistema de valoraciones y publicaciones
- Interfaz adaptada para compartir experiencias

### 6. Términos y Condiciones
- Información legal sobre el uso de la plataforma
- Detalles sobre políticas de privacidad
- Condiciones del servicio

Cada página está diseñada con un enfoque en la experiencia de usuario, siendo completamente responsive para adaptarse a diferentes dispositivos.

## 🚀 Características

- **Interfaz de usuario moderna y responsiva**
- **Calendario interactivo** con React Big Calendar
- **Carruseles** con React Slick
- **Enrutamiento** con React Router DOM
- **Diseño** con Tailwind CSS
- **Tipado estático** con TypeScript
- **Desarrollo rápido** con Vite

## 🛠️ Tecnologías utilizadas

- **Frontend:**
  - React 19
  - TypeScript
  - Vite
  - Tailwind CSS
  - React Router DOM
  - React Big Calendar
  - React Icons
  - Moment.js

## 📦 Requisitos previos

- Node.js (versión 18 o superior)
- npm o pnpm (recomendado)

## 🚀 Instalación

1. Clona el repositorio:

   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd Frontend-Hackathon
   ```

2. Instala las dependencias:

   ```bash
   pnpm install
   # o
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   pnpm dev
   # o
   npm run dev
   ```

4. Abre tu navegador en:

   ```
   http://localhost:5173
   ```

## 🏗️ Estructura del proyecto

```text
src/
├── assets/          # Recursos estáticos (imágenes, fuentes, etc.)
├── components/      # Componentes reutilizables
├── context/         # Contextos de React
├── data/            # Datos estáticos
├── hooks/           # Custom Hooks
├── json/            # Archivos JSON
├── layouts/         # Componentes de diseño
├── pages/           # Componentes de página
├── routes/          # Configuración de rutas
├── types/           # Tipos de TypeScript
├── App.tsx          # Componente principal
├── ErrorBoundary.tsx # Manejador de errores
└── main.tsx         # Punto de entrada de la aplicación
```

## 🛠️ Comandos disponibles

```bash
# Inicia el servidor de desarrollo
pnpm dev

# Construye la aplicación para producción
pnpm build

# Previsualiza la compilación de producción
pnpm preview

# Ejecuta el linter
pnpm lint
```

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, lee las [pautas de contribución](CONTRIBUTING.md) antes de enviar un pull request.

## 📧 Contacto

Para consultas o soporte, por favor contacta a [tu correo electrónico o equipo].

---

Desarrollado con ❤️ por [Tu Nombre o Equipo] para [Nombre del Proyecto/Hackathon]
