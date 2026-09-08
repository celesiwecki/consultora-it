import { motion, useReducedMotion } from 'framer-motion'
import { heroTrust } from '../lib/data'
import { Btn } from '../lib/ui'
import Dashboard from './Dashboard'

const EASE = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
}

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <header id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(900px 500px at 78% -5%, rgba(47,109,176,.35), transparent 60%), radial-gradient(700px 500px at 8% 15%, rgba(212,166,55,.14), transparent 55%), linear-gradient(180deg, #071a33, #060f1f 70%)',
        }}
      />
      {!reduce && (
        <>
          <div className="animate-drift pointer-events-none absolute -top-24 right-[6%] -z-10 h-72 w-72 rounded-full bg-azul-claro/20 blur-3xl" />
          <div
            className="animate-drift pointer-events-none absolute top-40 -left-16 -z-10 h-64 w-64 rounded-full bg-cobre/10 blur-3xl"
            style={{ animationDelay: '-6s' }}
          />
        </>
      )}

      <div className="mx-auto grid max-w-[1160px] items-center gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
        <motion.div variants={reduce ? undefined : container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-cobre-claro uppercase"
          >
            <span className="h-0.5 w-5 bg-cobre" />
            Synapsis Digital Tech
          </motion.span>
          <motion.h1 variants={item} className="mb-5 text-[clamp(2rem,8vw,3.7rem)]">
            Tu negocio, <span className="text-gradient">claro y bajo control</span>, desde un solo lugar.
          </motion.h1>
          <motion.p variants={item} className="mb-8 max-w-[52ch] text-lg text-[#c6d3e2] sm:text-xl">
            No te hacemos una página web. Te damos una plataforma inteligente que reúne tus ventas, gastos, ganancias
            y clientes, y usa IA para decirte qué está funcionando, qué no y qué hacer esta semana.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-3.5">
            <Btn href="#contacto">Quiero ver una demo con mis números</Btn>
            <Btn href="#problema" variant="ghost">
              Ver qué resuelve
            </Btn>
          </motion.div>
          <motion.div
            variants={item}
            className="mt-9 grid grid-cols-3 gap-4 max-[360px]:grid-cols-1 sm:flex sm:flex-wrap sm:gap-7"
          >
            {heroTrust.map((t) => (
              <div key={t.big} className="text-sm text-muted">
                <strong className="block text-xl font-extrabold text-text sm:text-2xl">{t.big}</strong>
                {t.small}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40, scale: 0.96 }}
          animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
        >
          <div className={reduce ? '' : 'animate-float'}>
            <Dashboard />
          </div>
        </motion.div>
      </div>
    </header>
  )
}
