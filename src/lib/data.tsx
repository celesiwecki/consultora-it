import {
  BarChart3,
  BellRing,
  Bot,
  CalendarClock,
  CloudCog,
  Code2,
  Compass,
  DatabaseZap,
  Dice5,
  Globe,
  LayoutGrid,
  Hourglass,
  LifeBuoy,
  LineChart,
  MessageCircle,
  MessageSquare,
  PackageSearch,
  PhoneOff,
  Puzzle,
  RefreshCw,
  Search,
  Settings2,
  Smartphone,
  TrendingUp,
  Trophy,
  Wallet,
  Workflow,
} from 'lucide-react'
import type { ComponentType } from 'react'

type Icon = ComponentType<{ className?: string; size?: number | string }>

export const WHATSAPP = 'https://wa.me/5490000000000'
export const EMAIL = 'hola@synapsisdigital.tech'

export const navLinks = [
  { href: '#problema', label: 'El problema' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#plataforma', label: 'La plataforma' },
  { href: '#ia', label: 'Asistente IA' },
  { href: '#planes', label: 'Planes' },
]

export const heroTrust = [
  { big: '-12 h', small: 'por semana en tareas manuales' },
  { big: '1 tablero', small: 'en vez de WhatsApp + Excel' },
  { big: '24/7', small: 'seguimiento automático de clientes' },
]

export const problems: { icon: Icon; title: string; text: string }[] = [
  { icon: Wallet, title: 'No sabés cuánto ganás', text: 'Sabés cuánto entra, pero no cuánto queda después de gastos, proveedores e impuestos. La ganancia es una sensación, no un número.' },
  { icon: PackageSearch, title: 'No sabés qué te deja plata', text: 'Vendés mucho de algunos productos o servicios que casi no dejan margen, y poco de los que sí. Nadie lo mide.' },
  { icon: Hourglass, title: 'Perdés horas en tareas manuales', text: 'Cargar ventas, armar resúmenes, pasar datos de un lado a otro, responder lo mismo mil veces. Tiempo que no vuelve.' },
  { icon: PhoneOff, title: 'Perdés clientes por no responder a tiempo', text: 'Una consulta que llega a las 22 h y se contesta al otro día es una venta que se fue a la competencia.' },
  { icon: RefreshCw, title: 'No hacés seguimiento de clientes', text: 'Los que compraron una vez y no volvieron son tu dinero más fácil de recuperar. Y nadie los está llamando.' },
  { icon: Dice5, title: 'Decidís por intuición', text: 'Sin métricas claras, cada decisión de precio, stock o promoción es una apuesta. A veces sale bien.' },
]

export const antes = [
  'Información en WhatsApp, Excel, cuadernos y la cabeza.',
  'Cierre de caja "a ojo" y a fin de mes.',
  'Respondés consultas cuando podés.',
  'No sabés qué cliente está por irse.',
  'Los reportes los armás vos, si te da el tiempo.',
  'Te enterás de los problemas cuando ya pasaron.',
]

export const despues = [
  'Todo centralizado en un tablero, en tiempo real.',
  'Ventas, gastos y ganancia neta actualizadas al instante.',
  'Respuestas y seguimiento automáticos, 24/7.',
  'La IA te avisa qué cliente está en riesgo y por qué.',
  'Reportes diarios, semanales y mensuales solos.',
  'Alertas que anticipan el problema antes de que cueste.',
]

export const mv = [
  {
    title: 'Nuestra Misión',
    text: 'Conectar la estrategia corporativa con la tecnología de punta mediante el desarrollo de software a medida y servicios de consultoría integral, generando ventajas competitivas sostenibles para nuestros clientes.',
  },
  {
    title: 'Nuestra Visión',
    text: 'Ser reconocidos internacionalmente como una consultora IT de excelencia, líder en la integración de ecosistemas digitales complejos y en la creación de experiencias tecnológicas transformadoras.',
  },
]

export const serviciosCatalogo: { icon: Icon; title: string; text: string }[] = [
  { icon: Code2, title: 'Desarrollo de Soluciones Digitales a Medida', text: 'Construcción de software corporativo de misión crítica bajo estándares internacionales de calidad.' },
  { icon: CloudCog, title: 'Modernización de Infraestructura y Cloud Computing', text: 'Migración y optimización de entornos locales hacia arquitecturas en la nube altamente seguras.' },
  { icon: Compass, title: 'Consultoría Estratégica en Transformación Digital', text: 'Asesoramiento de nivel ejecutivo para alinear la hoja de ruta tecnológica con los objetivos de crecimiento de la empresa.' },
  { icon: LayoutGrid, title: 'Desarrollo de Aplicaciones Móviles y Web Multiplataforma', text: 'Creación de productos digitales interactivos con experiencias de usuario optimizadas.' },
  { icon: Workflow, title: 'Gestión del Ciclo de Vida del Software (ALM)', text: 'Supervisión experta de todas las fases del desarrollo para garantizar eficiencia, cumplimiento de plazos y retorno de inversión.' },
]

export const modules: { icon: Icon; title: string; text: string; gain: string }[] = [
  { icon: BarChart3, title: 'Control de ventas, gastos y ganancia', text: 'Cargás (o integramos) tus operaciones y ves ingreso, costo, margen y ganancia neta real por día, producto y canal.', gain: 'Sabés cuánto ganás, no cuánto facturás' },
  { icon: Trophy, title: 'Rentabilidad por producto y servicio', text: 'Ranking automático de qué te deja plata y qué te la saca. Decisiones de precio y catálogo con datos.', gain: 'Enfocás el esfuerzo donde hay margen' },
  { icon: Bot, title: 'Asistente inteligente del negocio', text: 'Un chat interno al que le preguntás en español y te responde con tus números: "¿Cuánto vendimos hoy?", "¿Qué mejoro esta semana?".', gain: 'Respuestas en segundos, sin armar reportes' },
  { icon: TrendingUp, title: 'Reportes automáticos', text: 'Resumen diario, semanal y mensual con ventas, gastos, ganancia, top productos y alertas. Llega solo a tu WhatsApp o mail.', gain: 'Ahorra 3–5 h por semana de administración' },
  { icon: BellRing, title: 'Alertas inteligentes', text: 'Caída de ventas, stock por agotarse, gastos fuera de lo normal, clientes inactivos, días flojos. Te avisamos a tiempo.', gain: 'Reaccionás antes de que cueste dinero' },
  { icon: MessageSquare, title: 'Automatización de atención al cliente', text: 'Respuesta inmediata a consultas, captura de datos del interesado, recordatorios de turnos y pagos, y campañas para recuperar clientes.', gain: 'Menos clientes perdidos por demora' },
  { icon: Globe, title: 'Sitio web orientado a vender', text: 'Tu web profesional y responsive, conectada a la plataforma: cada consulta entra como contacto y dispara el seguimiento automático.', gain: 'La web deja de ser un folleto y trae clientes' },
  { icon: Smartphone, title: 'Panel simple, desde el celular', text: 'Diseñado para el dueño, no para un contador. Abrís la app y en 10 segundos sabés cómo viene el día.', gain: 'Control real sin curva de aprendizaje' },
  { icon: Puzzle, title: 'Integraciones', text: 'WhatsApp, medios de pago, facturación, planillas y tu punto de venta actual. No tirás a la basura lo que ya usás.', gain: 'Migración sin frenar la operación' },
]

export const iaEjemplos = [
  '"Tus ventas subieron 18% esta semana, pero el margen bajó por el aumento de proveedores."',
  '"Hay 7 clientes que compraban todos los meses y hace 60 días no aparecen. Te dejo la lista."',
  '"Los martes son tu peor día: 40% menos de ventas. Probá una promo dirigida."',
]

export const chatQA = [
  { q: '¿Cuánto vendimos hoy?', a: 'Hoy llevás **$184.500** en 27 ventas. Es un **+8%** respecto al mismo horario de ayer. Tu mejor franja fue 18–19 h.' },
  { q: '¿Cuánto ganamos este mes?', a: 'Ventas del mes: **$4,12M**. Gastos: **$1,74M**. **Ganancia neta: $2,38M** (margen 58%). El margen bajó 4 puntos por aumento de proveedores.' },
  { q: '¿Cuál fue el producto más vendido?', a: 'El más vendido fue **"Plan Mensual"** (312 unidades). Pero el que más **ganancia** deja es **"Servicio Premium"**: menos volumen, margen del 74%.' },
  { q: '¿Dónde estamos gastando más?', a: 'Top 3 de gastos del mes: **Proveedores $920k**, **Sueldos $540k**, **Publicidad $180k**. Proveedores subió $92k vs. el mes pasado, ahí está la fuga.' },
  { q: '¿Qué productos están bajando?', a: 'Tres con caída sostenida: **Servicio Premium -22%**, **Combo Familiar -14%**, **Adicional B -9%** en las últimas 2 semanas.' },
  { q: '¿Qué clientes hace tiempo no compran?', a: 'Detecté **7 clientes** que compraban todos los meses y hace más de 60 días no aparecen. Representan ~**$310k/mes**. Te armo la campaña de recupero.' },
  { q: '¿Qué debería mejorar esta semana?', a: '1) Revisá el proveedor de insumos (subió 12%). 2) Reactivá los 7 clientes inactivos. 3) Los martes vendés 40% menos: probá una promo dirigida ese día.' },
]

export const dashboardData = {
  hoy: {
    title: 'Ventas por hora (hoy)',
    bars: [30, 45, 38, 60, 72, 55, 90, 84].map((v, x) => ({ x, v })),
    kpis: [
      { l: 'Ventas hoy', v: '$184.500', d: '+8% vs ayer', up: true },
      { l: 'Gastos hoy', v: '$61.200', d: '+3% vs ayer', up: false },
      { l: 'Ganancia neta', v: '$123.300', d: 'margen 67%', up: true },
    ],
    alerts: [
      { tone: 'ok', text: '✅ Cobranzas al día. Ingresaron $184.500 hoy.' },
      { tone: 'warn', text: '⚠️ 3 clientes no compran hace más de 45 días.' },
      { tone: 'bad', text: '🔻 "Servicio Premium" bajó 22% sus ventas vs. semana pasada.' },
    ],
  },
  mes: {
    title: 'Ventas por semana (este mes)',
    bars: [62, 70, 58, 88].map((v, x) => ({ x, v })),
    kpis: [
      { l: 'Ventas del mes', v: '$4.12M', d: '+18% vs mes previo', up: true },
      { l: 'Gastos del mes', v: '$1.74M', d: '+9% vs mes previo', up: false },
      { l: 'Ganancia neta', v: '$2.38M', d: 'margen 58%', up: true },
    ],
    alerts: [
      { tone: 'ok', text: '✅ Ganancia neta del mes: $2,38M (+14%).' },
      { tone: 'warn', text: '⚠️ Gastos de proveedores subieron $92.000 vs. mes previo.' },
      { tone: 'bad', text: '🔻 3 productos con caída sostenida hace 2 semanas.' },
    ],
  },
} as const

export const automatizacion = [
  {
    icon: LineChart,
    title: 'Reportes automáticos',
    items: [
      'Resumen diario al cierre: cuánto se vendió, se gastó y se ganó.',
      'Resumen semanal con comparativa vs. semana anterior.',
      'Resumen mensual con productos más rentables y clientes top.',
      'Se envían solos a WhatsApp o mail. Cero planillas.',
    ],
  },
  {
    icon: BellRing,
    title: 'Alertas inteligentes',
    items: [
      'Bajada de ventas respecto a tu promedio.',
      'Productos sin stock o por agotarse.',
      'Gastos inusualmente altos en una categoría.',
      'Clientes inactivos y productos poco rentables.',
    ],
  },
]

export const clientes = [
  {
    icon: MessageCircle,
    title: 'Atención y captación',
    items: [
      'Respuesta inmediata a consultas frecuentes, 24/7.',
      'Cada interesado queda registrado como contacto, sin que se te escape.',
      'Derivación a una persona cuando la consulta lo amerita.',
    ],
  },
  {
    icon: CalendarClock,
    title: 'Seguimiento y recuperación',
    items: [
      'Recordatorios automáticos de turnos y pagos.',
      'Mensajes a clientes que hace tiempo no compran.',
      'Promociones personalizadas según lo que cada cliente suele comprar.',
    ],
  },
]

export const proceso: { icon: Icon; title: string; text: string }[] = [
  { icon: Search, title: 'Diagnóstico', text: 'Analizamos tu negocio, tus procesos actuales y dónde estás perdiendo tiempo o plata.' },
  { icon: Settings2, title: 'Configuración', text: 'Armamos tu plataforma a medida, conectamos WhatsApp, pagos y lo que ya uses.' },
  { icon: DatabaseZap, title: 'Carga y prueba', text: 'Migramos tus datos, calibramos alertas e IA con tus números reales y capacitamos a tu equipo.' },
  { icon: LifeBuoy, title: 'Acompañamiento', text: 'Soporte continuo y ajustes. Tu plataforma evoluciona con el negocio.' },
]

export const planes = [
  {
    name: 'Esencial',
    price: 'Setup +',
    priceNote: 'abono mensual',
    desc: 'Para ordenar el negocio y ver los números claros.',
    features: [
      'Sitio web profesional y responsive',
      'Panel de ventas, gastos y ganancia',
      'Rentabilidad por producto/servicio',
      'Reportes automáticos diario y semanal',
      '3 alertas inteligentes clave',
    ],
    cta: 'Consultar',
    popular: false,
  },
  {
    name: 'Crecimiento',
    price: 'Setup +',
    priceNote: 'abono mensual',
    desc: 'Ordenar + automatizar + vender más.',
    features: [
      'Todo lo de Esencial',
      'Asistente IA del negocio',
      'Automatización de atención al cliente (WhatsApp)',
      'Seguimiento y recuperación de clientes',
      'Alertas inteligentes ilimitadas',
      'Reporte mensual con recomendaciones IA',
    ],
    cta: 'Pedir demo',
    popular: true,
  },
  {
    name: 'Escala',
    price: 'A medida',
    priceNote: '',
    desc: 'Multi-sucursal, equipos y necesidades específicas.',
    features: [
      'Todo lo de Crecimiento',
      'Múltiples sucursales y usuarios con roles',
      'Integraciones a medida (ERP, facturación, POS)',
      'Modelos de predicción de demanda',
      'Soporte prioritario y consultor asignado',
    ],
    cta: 'Hablar con un consultor',
    popular: false,
  },
]

export const faq = [
  { q: '¿Tengo que cambiar cómo trabajo hoy?', a: 'No de golpe. Nos integramos a lo que ya usás (WhatsApp, planillas, punto de venta) y vamos migrando por etapas para no frenar la operación.' },
  { q: '¿Necesito conocimientos técnicos?', a: 'No. El panel está pensado para el dueño del negocio. Si sabés usar WhatsApp, sabés usar la plataforma. Además te capacitamos.' },
  { q: '¿De dónde saca los datos la IA?', a: 'De tus propias operaciones: ventas, gastos, stock y clientes que se cargan o se integran. La IA analiza esos datos, no inventa nada.' },
  { q: '¿Mis datos están seguros?', a: 'Sí. Cada negocio tiene su entorno aislado, accesos por usuario y rol, conexiones cifradas y backups. Tus datos son tuyos.' },
  { q: '¿Cuánto tarda en estar funcionando?', a: 'El plan Esencial suele estar operativo en 2–3 semanas. Crecimiento, entre 3 y 5 semanas según integraciones.' },
  { q: '¿Y si mi negocio es chico?', a: 'Mejor todavía. Cuanto antes ordenás los números y automatizás, antes dejás de perder plata y tiempo mientras crecés.' },
]
