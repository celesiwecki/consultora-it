import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Bar, BarChart, Cell, ResponsiveContainer } from 'recharts'
import { dashboardData } from '../lib/data'

const toneBorder: Record<string, string> = {
  ok: 'border-l-ok',
  warn: 'border-l-warn',
  bad: 'border-l-bad',
}

export default function Dashboard() {
  const [mode, setMode] = useState<'hoy' | 'mes'>('hoy')
  const d = dashboardData[mode]

  return (
    <div className="rounded-[20px] border border-line bg-gradient-to-br from-surface to-petroleo-900 p-4 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-2.5 w-2.5 rounded-full bg-white/20" />
          ))}
        </div>
        <div className="flex rounded-full bg-white/5 p-1 text-xs font-bold">
          {(['hoy', 'mes'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`relative rounded-full px-3 py-1.5 transition-colors ${
                mode === m ? 'text-[#241a02]' : 'text-muted hover:text-text'
              }`}
            >
              {mode === m && (
                <motion.span
                  layoutId="dash-toggle"
                  className="absolute inset-0 -z-0 rounded-full bg-cobre"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{m === 'hoy' ? 'Hoy' : 'Este mes'}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="mb-3.5 grid grid-cols-3 gap-2 sm:gap-2.5"
        >
          {d.kpis.map((k, i) => (
            <motion.div
              key={k.l}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.3, ease: 'easeOut' }}
              className="rounded-xl border border-line bg-surface-2 p-2.5 sm:p-3"
            >
              <span className="text-[0.66rem] font-semibold text-muted sm:text-[0.7rem]">{k.l}</span>
              <b className="mt-1 block text-[0.95rem] font-extrabold tabular-nums sm:text-xl">{k.v}</b>
              <small className={`text-[0.62rem] font-bold sm:text-[0.7rem] ${k.up ? 'text-ok' : 'text-bad'}`}>
                {k.up ? '▲ ' : '▼ '}
                {k.d}
              </small>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mb-3 rounded-xl border border-line bg-surface-2 p-3.5">
        <h4 className="mb-3 text-[0.8rem] font-semibold text-muted">{d.title}</h4>
        <div className="h-28" key={mode}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={d.bars} barCategoryGap={6}>
              <Bar dataKey="v" radius={[6, 6, 0, 0]} isAnimationActive>
                {d.bars.map((_, i) => (
                  <Cell
                    key={i}
                    fill={i === d.bars.length - 1 ? 'var(--color-cobre)' : 'var(--color-azul-claro)'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {d.alerts.map((a, i) => (
          <motion.div
            key={`${mode}-${i}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.3, ease: 'easeOut' }}
            className={`rounded-[10px] border border-l-[3px] border-line bg-surface-2 px-3 py-2.5 text-[0.82rem] text-muted ${toneBorder[a.tone]}`}
          >
            {a.text}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
