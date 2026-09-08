import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, ChevronDown, XCircle } from 'lucide-react'
import { useState, type ComponentType } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import {
  antes,
  automatizacion,
  clientes,
  despues,
  EMAIL,
  faq,
  modules,
  mv,
  planes,
  problems,
  proceso,
  serviciosCatalogo,
  WHATSAPP,
} from '../lib/data'
import { Block, Btn, Head, Reveal, Stagger, StaggerItem } from '../lib/ui'

export function Problemas() {
  return (
    <Block id="problema">
      <Head
        eyebrow="Diagnóstico"
        title="Probablemente hoy tu negocio tiene estos problemas. Y no los estás resolviendo."
        lead="La mayoría de los negocios funcionan a fuerza de memoria, planillas y mensajes sueltos. Funciona… hasta que empezás a perder plata sin darte cuenta."
      />
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map(({ icon: Icon, title, text }) => (
          <StaggerItem key={title} className="h-full">
            <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1.5 hover:border-bad/50">
              <span className="absolute inset-y-0 left-0 w-[3px] bg-bad/70" />
              <h3 className="mb-2 flex items-center gap-2.5 text-[1.05rem]">
                <Icon size={20} className="text-bad" />
                {title}
              </h3>
              <p className="text-[0.92rem] text-muted">{text}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Block>
  )
}

function BAList({ items, ok }: { items: string[]; ok: boolean }) {
  const Icon = ok ? CheckCircle2 : XCircle
  return (
    <ul className="flex flex-col gap-3">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-[0.95rem] text-[#d5deea]">
          <Icon size={18} className={`mt-0.5 shrink-0 ${ok ? 'text-ok' : 'text-bad'}`} />
          {t}
        </li>
      ))}
    </ul>
  )
}

export function AntesDespues() {
  return (
    <Block tight>
      <Head eyebrow="El cambio" title="De un negocio disperso a un negocio que entendés." />
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal from="left">
          <div className="h-full rounded-2xl border border-line bg-gradient-to-br from-[#241016] to-[#1a0d12] p-7">
            <h3 className="mb-4.5 text-[1.15rem]">❌ Cómo trabajás hoy</h3>
            <BAList items={antes} ok={false} />
          </div>
        </Reveal>
        <Reveal from="right" delay={0.1}>
          <div className="h-full rounded-2xl border border-line bg-gradient-to-br from-[#0c2b24] to-[#0a1f2e] p-7">
            <h3 className="mb-4.5 text-[1.15rem]">🚀 Cómo trabajás con la plataforma</h3>
            <BAList items={despues} ok />
          </div>
        </Reveal>
      </div>
    </Block>
  )
}

export function MisionVision() {
  return (
    <Block id="nosotros" tight>
      <Head eyebrow="Quiénes somos" title="Synapsis Digital Tech" />
      <Stagger className="grid gap-5 md:grid-cols-2" gap={0.12}>
        {mv.map((item) => (
          <StaggerItem key={item.title} className="h-full">
            <article className="relative h-full overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface to-petroleo-900 p-8 transition duration-300 hover:-translate-y-1.5 hover:border-cobre/40">
              <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-cobre-claro to-cobre" />
              <h3 className="mb-3 text-[1.15rem] text-cobre-claro">{item.title}</h3>
              <p className="text-base text-[#d5deea]">{item.text}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal>
        <h3 className="mt-14 mb-6 text-[1.4rem]">Catálogo de Servicios</h3>
      </Reveal>
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" gap={0.06}>
        {serviciosCatalogo.map(({ icon: Icon, title, text }) => (
          <StaggerItem key={title} className="h-full">
            <div className="group h-full rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1.5 hover:border-cobre/40">
              <Icon size={22} className="mb-3.5 text-cobre-claro transition-transform duration-300 group-hover:scale-110" />
              <h4 className="mb-2 text-[1.02rem] font-bold">{title}</h4>
              <p className="text-[0.9rem] text-muted">{text}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Block>
  )
}

export function Modulos() {
  return (
    <Block id="plataforma">
      <Head
        eyebrow="La plataforma"
        title="Todo lo que tu negocio necesita, integrado."
        lead='Cada módulo existe para resolver un problema concreto y devolverte tiempo o plata. Nada de funciones "de adorno".'
      />
      <Stagger className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3" gap={0.06}>
        {modules.map(({ icon: Icon, title, text, gain }) => (
          <StaggerItem key={title} className="h-full">
            <div className="group h-full rounded-2xl border border-line bg-gradient-to-b from-surface to-petroleo-900 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-cobre/50">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-cobre/30 bg-cobre/15 text-cobre-claro transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <Icon size={22} />
              </div>
              <h3 className="mb-2 text-[1.15rem]">{title}</h3>
              <p className="mb-3.5 text-[0.92rem] text-muted">{text}</p>
              <div className="flex items-center gap-2 text-[0.82rem] font-bold text-cobre-claro">
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                {gain}
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Block>
  )
}

function FeatureRows({
  eyebrow,
  title,
  rows,
  quote,
}: {
  eyebrow: string
  title: string
  rows: { icon: ComponentType<{ size?: number; className?: string }>; title: string; items: string[] }[]
  quote?: string
}) {
  return (
    <Block tight>
      <Head eyebrow={eyebrow} title={title} />
      <Stagger className="grid gap-6 md:grid-cols-2" gap={0.12}>
        {rows.map(({ icon: Icon, title: t, items }) => (
          <StaggerItem key={t} className="h-full">
            <div className="h-full rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1.5 hover:border-cobre/40">
              <h3 className="mb-2.5 flex items-center gap-2.5 text-[1.05rem]">
                <Icon size={20} className="text-cobre-claro" />
                {t}
              </h3>
              <ul className="mt-1.5 flex flex-col gap-2.5">
                {items.map((it) => (
                  <li key={it} className="flex gap-2.5 text-[0.9rem] text-[#cdd8e6]">
                    <span className="text-cobre">→</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      {quote && (
        <Reveal>
          <p className="mt-6 rounded-2xl border border-cobre/30 bg-gradient-to-br from-cobre/10 to-azul-claro/10 p-6 text-[1.02rem] font-medium text-text italic">
            {quote}
          </p>
        </Reveal>
      )}
    </Block>
  )
}

export function Automatizacion() {
  return (
    <FeatureRows
      eyebrow="Automatización"
      title="El trabajo administrativo se hace solo."
      rows={automatizacion}
      quote='"Esta semana tus ventas aumentaron un 18%, pero tu margen de ganancia bajó porque los gastos de proveedores subieron $92.000. Revisá el proveedor de insumos."'
    />
  )
}

export function Clientes() {
  return (
    <FeatureRows
      eyebrow="Clientes"
      title="Dejá de perder ventas por no responder a tiempo."
      rows={clientes}
    />
  )
}

export function Proceso() {
  return (
    <Block>
      <Head eyebrow="Cómo lo implementamos" title="En marcha en semanas, no en meses." />
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.1}>
        {proceso.map(({ icon: Icon, title, text }, i) => (
          <StaggerItem key={title} className="h-full">
            <div className="group h-full rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1.5 hover:border-cobre/40">
              <div className="mb-3.5 flex items-center gap-3">
                <span className="grid h-8.5 w-8.5 place-items-center rounded-[10px] bg-gradient-to-br from-cobre to-cobre-claro font-extrabold text-[#241a02] transition-transform duration-300 group-hover:scale-110">
                  {i + 1}
                </span>
                <Icon size={18} className="text-cobre-claro" />
              </div>
              <h3 className="mb-1.5 text-base">{title}</h3>
              <p className="text-[0.88rem] text-muted">{text}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Block>
  )
}

export function Planes() {
  return (
    <Block id="planes">
      <Head
        center
        eyebrow="Planes"
        title="Empezá simple. Escalá cuando lo necesites."
        lead="Precio final según tamaño del negocio e integraciones. Estos son los puntos de partida."
      />
      <Stagger className="grid items-start gap-5 lg:grid-cols-3" gap={0.1}>
        {planes.map((p) => (
          <StaggerItem key={p.name} className="h-full">
            <div
              className={`flex h-full flex-col rounded-[20px] border bg-surface p-8 transition duration-300 hover:-translate-y-2 ${
                p.popular
                  ? 'relative border-cobre shadow-[0_0_0_1px_var(--color-cobre),0_30px_60px_-25px_rgba(212,166,55,0.4)] lg:-translate-y-3 lg:hover:-translate-y-5'
                  : 'border-line hover:border-cobre/40'
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-br from-cobre to-cobre-claro px-3.5 py-1 text-[0.72rem] font-extrabold tracking-wide text-[#241a02]">
                  Más elegido
                </span>
              )}
              <h3 className="mb-1.5 text-[1.15rem]">{p.name}</h3>
              <div className="my-2 text-3xl font-extrabold">
                {p.price}{' '}
                {p.priceNote && <small className="text-sm font-semibold text-muted">{p.priceNote}</small>}
              </div>
              <p className="mb-4.5 text-[0.86rem] text-muted">{p.desc}</p>
              <ul className="mb-5.5 flex flex-1 flex-col gap-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-[0.88rem] text-[#cdd8e6]">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-ok" />
                    {f}
                  </li>
                ))}
              </ul>
              <Btn href="#contacto" variant={p.popular ? 'primary' : 'ghost'} className="w-full">
                {p.cta}
              </Btn>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Block>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-line bg-surface px-5 transition-colors duration-300 hover:border-cobre/30">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-[0.98rem] font-bold"
      >
        {q}
        <ChevronDown
          size={20}
          className={`shrink-0 text-cobre transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="pb-4.5 text-[0.92rem] text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <Block tight>
      <Head center eyebrow="Dudas frecuentes" title="Lo que todo dueño pregunta antes de empezar." />
      <Stagger className="mx-auto flex max-w-[820px] flex-col gap-2.5" gap={0.06}>
        {faq.map((f) => (
          <StaggerItem key={f.q}>
            <FaqItem q={f.q} a={f.a} />
          </StaggerItem>
        ))}
      </Stagger>
    </Block>
  )
}

export function CTA() {
  return (
    <Block id="contacto">
      <Reveal>
        <div className="relative overflow-hidden rounded-[24px] border border-line bg-gradient-to-br from-azul to-petroleo-900 px-6 py-12 text-center sm:px-10 sm:py-14">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: 'radial-gradient(600px 300px at 50% 0%, rgba(212,166,55,.22), transparent 60%)',
            }}
            animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative">
            <h2 className="mb-3.5 text-[clamp(1.8rem,3.6vw,2.6rem)]">
              Pedí una demo con los números de tu negocio.
            </h2>
            <p className="mx-auto mb-7 max-w-[52ch] text-lg text-[#d3deeb]">
              En 30 minutos te mostramos tu propio tablero, dónde estás perdiendo tiempo o plata, y qué
              automatizaríamos primero. Sin compromiso.
            </p>
            <div className="flex flex-wrap justify-center gap-3.5">
              <Btn
                href={`${WHATSAPP}?text=${encodeURIComponent('Hola Synapsis, quiero una demo de la plataforma')}`}
                target="_blank"
                rel="noopener"
              >
                <FaWhatsapp size={18} />
                Escribir por WhatsApp
              </Btn>
              <Btn href={`mailto:${EMAIL}?subject=Quiero%20una%20demo%20de%20la%20plataforma`} variant="ghost">
                Enviar un mail
              </Btn>
            </div>
          </div>
        </div>
      </Reveal>
    </Block>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line py-11">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-6 px-6">
        <p className="text-[0.86rem] text-muted">
          © 2026 Synapsis Digital Tech — Plataforma inteligente para negocios.
        </p>
        <div className="flex gap-5.5">
          {[
            ['#plataforma', 'Plataforma'],
            ['#ia', 'IA'],
            ['#planes', 'Planes'],
            ['#contacto', 'Contacto'],
          ].map(([href, label]) => (
            <a key={href} href={href} className="text-[0.86rem] text-muted transition hover:text-text">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
