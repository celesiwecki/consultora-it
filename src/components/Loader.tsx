import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

function Robot({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      className="relative"
      animate={reduce ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
    >
      {!reduce && (
        <motion.span
          aria-hidden
          className="absolute -inset-6 -z-10 rounded-full bg-cobre/25 blur-2xl"
          animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.95, 1.08, 0.95] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      <svg width="112" height="120" viewBox="0 0 112 120" fill="none" role="img" aria-label="Asistente robot">
        {/* antena */}
        <line x1="56" y1="14" x2="56" y2="30" stroke="var(--color-cobre-claro)" strokeWidth="3" strokeLinecap="round" />
        <motion.circle
          cx="56"
          cy="10"
          r="6"
          fill="var(--color-cobre-claro)"
          animate={reduce ? undefined : { scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* cabeza */}
        <rect x="16" y="30" width="80" height="62" rx="20" fill="var(--color-surface-2)" stroke="var(--color-line)" strokeWidth="2" />
        {/* orejas */}
        <rect x="6" y="50" width="10" height="22" rx="5" fill="var(--color-azul-claro)" />
        <rect x="96" y="50" width="10" height="22" rx="5" fill="var(--color-azul-claro)" />
        {/* visor */}
        <rect x="28" y="42" width="56" height="34" rx="14" fill="#0a1a30" />
        {/* ojos que parpadean */}
        <motion.g
          animate={reduce ? undefined : { scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{ duration: 3.4, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1], ease: 'easeInOut' }}
          style={{ transformOrigin: '56px 59px' }}
        >
          <circle cx="44" cy="59" r="6" fill="var(--color-cobre-claro)" />
          <circle cx="68" cy="59" r="6" fill="var(--color-cobre-claro)" />
        </motion.g>
        {/* sonrisa */}
        <path d="M46 82 q10 8 20 0" stroke="var(--color-muted)" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* ondas de señal */}
        {!reduce &&
          [0, 1, 2].map((i) => (
            <motion.path
              key={i}
              d={`M${84 + i * 7} ${34 - i * 6} a${14 + i * 9} ${14 + i * 9} 0 0 1 ${10 + i * 6} ${20 + i * 9}`}
              stroke="var(--color-ok)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.25, ease: 'easeInOut' }}
            />
          ))}
      </svg>
    </motion.div>
  )
}

export default function Loader() {
  const reduce = useReducedMotion()
  const [done, setDone] = useState(false)

  useEffect(() => {
    const hold = reduce ? 500 : 2000
    document.body.style.overflow = 'hidden'
    const t = window.setTimeout(() => setDone(true), hold)
    return () => window.clearTimeout(t)
  }, [reduce])

  return (
    <AnimatePresence onExitComplete={() => (document.body.style.overflow = '')}>
      {!done && (
        <motion.div
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-[100] grid place-items-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(700px 400px at 50% 35%, rgba(47,109,176,.28), transparent 60%), linear-gradient(180deg,#071a33,#060f1f 75%)',
            }}
          />
          <motion.div
            className="relative flex flex-col items-center gap-6 px-6 text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Robot reduce={!!reduce} />
            <div>
              <p className="text-lg font-bold text-text">Preparando tu tablero…</p>
              <p className="mt-1 text-sm text-muted">Ordenando ventas, gastos y datos del negocio</p>
            </div>
            <div className="h-1 w-44 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cobre to-cobre-claro"
                initial={{ x: '-100%' }}
                animate={reduce ? { x: 0 } : { x: ['-100%', '0%', '100%'] }}
                transition={
                  reduce
                    ? { duration: 0.3 }
                    : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }
                }
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
