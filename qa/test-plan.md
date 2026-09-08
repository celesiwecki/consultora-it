# Plan de pruebas — Landing Synapsis Digital Tech

## Alcance
Se prueba: landing estática de una página (`index.html`), navegación, responsive, tablero demo interactivo, chat IA demo, enlaces de contacto, accesibilidad básica.
No se prueba: backend, envío real de formularios (no hay), integración WhatsApp real (número placeholder), la plataforma/panel administrativo (fuera de este entregable).

## Pre-condiciones
- Servir el sitio: `python -m http.server 5500` en la raíz del proyecto y abrir `http://localhost:5500`.
- `logo.png` presente en la raíz.

## Casos

```
ID: TC-001
Caso: Carga inicial
Tipo: happy
Pasos: 1. Abrir http://localhost:5500
Esperado: Carga sin errores en consola. Hero visible con logo, título y CTA. Tablero demo a la derecha (desktop).
Resultado: no probado

ID: TC-002
Caso: Navegación por anclas
Tipo: happy
Pasos: 1. Click en cada item del nav (El problema, La plataforma, Asistente IA, Planes, Pedir demo)
Esperado: Scroll suave a la sección correspondiente. El nav queda fijo y con fondo al scrollear.
Resultado: no probado

ID: TC-003
Caso: Menú mobile
Tipo: happy / responsive
Pre-condición: viewport <= 900px
Pasos: 1. Click en botón ☰  2. Click en un link
Esperado: El menú despliega y colapsa. Al elegir un link, se cierra y navega. aria-expanded cambia true/false.
Resultado: no probado

ID: TC-004
Caso: Tablero demo - switch de período
Tipo: happy
Pasos: 1. En el tablero, click en "Este mes"  2. Click en "Hoy"  3. Alternar rápido varias veces
Esperado: Cambian los 3 KPIs (fade + slide), el título del gráfico, las barras se re-animan desde 0 y las alertas entran escalonadas. La píldora activa se desliza entre "Hoy" y "Este mes" (animación layout). Sin parpadeos ni cambios de layout. Con alternado rápido no se rompe ni se acumula animación.
Resultado: no probado

ID: TC-005
Caso: Chat IA demo
Tipo: happy
Pasos: 1. Click en un chip de pregunta  2. Esperar respuesta  3. Click en otro chip mientras "escribe"
Esperado: Cada burbuja entra con fade + slide + leve escala. Indicador de escritura ~0,9s con salida animada, luego respuesta del bot con datos en negrita. Mientras responde, ignora nuevos clicks (no encola/duplica). El scroll baja al último mensaje. Chips con leve elevación al hover y hundido al presionar.
Resultado: no probado

ID: TC-013
Caso: Loading inicial (robot IA)
Tipo: happy / ux
Pasos: 1. Abrir la página (recarga forzada, cache limpia)  2. Observar la pantalla de carga  3. Esperar a que termine
Esperado: Overlay a pantalla completa con robot amigable animado (parpadeo, leve flotación, antena/ondas) y un texto tipo "Preparando tu tablero...". Dura ~1,8-2,2s, luego hace fade-out y revela la landing con el hero ya animando su entrada. No hay salto de layout ni scroll durante la carga. El overlay no reaparece al navegar por anclas.
Resultado: no probado

ID: TC-014
Caso: Loading inicial - accesibilidad y reduced-motion
Tipo: a11y
Pasos: 1. Activar "reducir movimiento"  2. Recargar  3. Repetir con lector de pantalla
Esperado: Con reduced-motion el robot no flota/parpadea de forma llamativa (o queda estático) y el overlay desaparece rápido (<=600ms). El overlay tiene role="status"/aria-live con el texto de carga. El foco no queda atrapado; al terminar, el foco vuelve al inicio del documento. Scroll del body bloqueado sólo mientras carga.
Resultado: no probado

ID: TC-015
Caso: Animaciones de entrada al hacer scroll
Tipo: happy
Pasos: 1. Scrollear lentamente toda la página
Esperado: Cada bloque de tarjetas entra escalonado (fade + subida + leve desenfoque). Se dispara una sola vez por sección (no re-anima al volver a subir). Sin parpadeo de contenido ya visible. Sin scroll horizontal por los desplazamientos laterales de "Antes/Después".
Resultado: no probado

ID: TC-016
Caso: FAB de WhatsApp y CTA
Tipo: happy
Pasos: 1. Cargar y esperar ~1s  2. Observar FAB  3. Hover y click  4. Observar bloque CTA
Esperado: El FAB aparece con "pop" (spring) ~1s después de cargar y mantiene un anillo pulsante sutil. Hover lo agranda, click lo hunde levemente. El resplandor del bloque CTA late suavemente (~6s loop). Nada de esto bloquea la interacción.
Resultado: no probado

ID: TC-006
Caso: Enlaces de contacto
Tipo: happy / failure
Pasos: 1. Click en "Escribir por WhatsApp"  2. Click en botón flotante WhatsApp  3. Click en "Enviar un mail"
Esperado: WhatsApp abre wa.me en pestaña nueva con mensaje prellenado (número es placeholder 5490000000000 -> reemplazar antes de producción). Mail abre cliente con asunto prellenado.
Resultado: no probado

ID: TC-007
Caso: Responsive en breakpoints
Tipo: edge / responsive
Pasos: Probar a 320, 375, 768, 1024, 1440 px
Esperado: Sin scroll horizontal. Grids colapsan a 1-2 columnas. Texto legible. Tablero y chat no se desbordan.
Resultado: no probado

ID: TC-008
Caso: prefers-reduced-motion
Tipo: a11y
Pasos: 1. Activar "reducir movimiento" en el SO  2. Recargar  3. Scrollear toda la página  4. Cambiar período en el tablero
Esperado: Las secciones aparecen sin animación de entrada (visibles, nunca ocultas). Hero sin stagger, tablero sin flotar, sin blobs a la deriva, FAB sin anillo pulsante, CTA sin resplandor. El toggle del dashboard cambia sin deslizamiento. Sin scroll-behavior suave. Todo el contenido queda accesible.
Resultado: no probado

ID: TC-009
Caso: Navegación por teclado
Tipo: a11y
Pasos: 1. Tab por toda la página
Esperado: Foco visible en links, botones y chips. El acordeón de FAQ es un <button> con aria-expanded; se abre/cierra con Enter y Space. Orden lógico. Las animaciones de entrada no roban el foco ni lo dejan sobre elementos aún invisibles.
Resultado: no probado

ID: TC-010
Caso: FAQ (acordeón animado)
Tipo: happy
Pasos: 1. Abrir y cerrar cada item  2. Abrir varios  3. Abrir/cerrar rápido el mismo
Esperado: El chevron rota 180°. La respuesta se despliega/colapsa con animación de altura (~300ms), sin salto brusco ni corte de texto. Se pueden tener varios abiertos a la vez. Con toggles rápidos no queda en estado inconsistente.
Resultado: no probado

ID: TC-011
Caso: Sin JavaScript
Tipo: failure
Pasos: 1. Deshabilitar JS  2. Recargar
Esperado: Contenido visible (reveal no oculta permanentemente sería ideal). Nav funciona por anclas. Tablero muestra estado base; chat muestra mensaje inicial y chips (sin respuesta). Aceptable como degradación.
Resultado: no probado

ID: TC-012
Caso: Cross-browser
Tipo: edge
Pasos: Chrome, Firefox, Safari iOS, Chrome Android
Esperado: backdrop-filter del nav degrada sin romper. background-clip:text del título degrada a color visible. Fuentes cargan con fallback system-ui.
Resultado: no probado
```

## Matriz de cobertura
| Módulo | happy | edge | failure | a11y |
|---|---|---|---|---|
| Navegación | TC-002 | TC-007 | TC-011 | TC-009 |
| Tablero demo | TC-004 | TC-007 | TC-011 | TC-008 |
| Chat IA | TC-005 | - | TC-011 | TC-008 |
| Contacto | TC-006, TC-016 | - | TC-006 | - |
| FAQ | TC-010 | - | - | TC-009 |
| Loading inicial | TC-013 | - | TC-011 | TC-014 |
| Animaciones scroll | TC-015 | TC-007 | TC-011 | TC-008 |

## Pendiente antes de producción
- Reemplazar número de WhatsApp `5490000000000` y mail `hola@synapsisdigital.tech` por los reales.
- Optimizar `logo.png` (hoy ~1,1 MB, es un JPEG con extensión .png y 2816x1536). Redimensionar a ~200px y comprimir.
- Definir precios reales en la sección Planes.
