# Changelog

## [Unreleased]

### Changed
- Migración del sitio de un `index.html` estático a **React + Vite + TypeScript**.
- Estilos reescritos con **Tailwind CSS v4** (tokens de marca en `src/index.css` vía `@theme`). Se eliminó casi todo el CSS propio.
- Iconos: se reemplazaron los emojis decorativos por **lucide-react**.
- Animaciones de aparición al hacer scroll: se reemplazó el `IntersectionObserver` manual por **framer-motion** (`whileInView`, respeta `prefers-reduced-motion`).
- Gráfico del dashboard demo: se reemplazaron las barras en CSS por **recharts**.
- Logo optimizado: de ~1,1 MB a ~20 KB (256 px).

### Added
- Estructura de componentes en `src/components/` (`Nav`, `Hero`, `Dashboard`, `AsistenteIA`, `Sections`, `WhatsappFab`).
- Contenido centralizado en `src/lib/data.tsx`; primitivos de UI en `src/lib/ui.tsx`.
- Sistema de animación ampliado: primitivos `Stagger` / `StaggerItem` y `Reveal` con dirección (`up`/`left`/`right`/`scale`) y desenfoque de entrada en `src/lib/ui.tsx`.
- Pantalla de carga inicial (`src/components/Loader.tsx`): robot IA amigable animado (antena pulsante, ojos que parpadean, ondas de señal), barra de progreso y copy "Preparando tu tablero…". Bloquea el scroll mientras carga (~2s; ~0,5s con `prefers-reduced-motion`), `role="status"` para lectores de pantalla y fade-out al terminar.
- Animaciones de marca: entrada escalonada del hero, tablero flotante y blobs a la deriva en el fondo, nav que baja al montar, FAB de WhatsApp con pop + anillo pulsante, píldora animada (`layoutId`) en el toggle del dashboard, transición de KPIs/alertas al cambiar de período, mensajes del asistente IA con entrada animada, acordeón de FAQ con apertura animada y resplandor pulsante en el bloque CTA.
- `prefers-reduced-motion`: además de `useReducedMotion` en JS, override global en CSS que anula animaciones/transiciones.

### Sin cambios
- Diseño, textos, paleta, estructura de secciones y la Misión/Visión textual se conservan igual que la versión previa.

## [Previo]

### Added
- Rediseño de folleto institucional a landing de conversión (ver historial).
- Sección "Quiénes somos" con Misión y Visión.
