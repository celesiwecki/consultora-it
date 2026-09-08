import { motion, useReducedMotion } from 'framer-motion'
import type { ComponentProps, ReactNode } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

type RevealDir = 'up' | 'left' | 'right' | 'scale'

const offset: Record<RevealDir, Record<string, number>> = {
  up: { y: 28 },
  left: { x: -32 },
  right: { x: 32 },
  scale: { scale: 0.94 },
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  from = 'up',
}: {
  children: ReactNode
  className?: string
  delay?: number
  from?: RevealDir
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, filter: 'blur(6px)', ...offset[from] }}
      whileInView={reduce ? undefined : { opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({
  children,
  className = '',
  gap = 0.08,
}: {
  children: ReactNode
  className?: string
  gap?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={{ show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={
        reduce
          ? { hidden: {}, show: {} }
          : {
              hidden: { opacity: 0, y: 26, filter: 'blur(6px)' },
              show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: EASE } },
            }
      }
    >
      {children}
    </motion.div>
  )
}

export function Block({
  id,
  tight,
  children,
}: {
  id?: string
  tight?: boolean
  children: ReactNode
}) {
  return (
    <section id={id} className={tight ? 'py-14 sm:py-16' : 'py-16 sm:py-24'}>
      <div className="mx-auto max-w-[1160px] px-5 sm:px-6">{children}</div>
    </section>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-cobre-claro uppercase">
      <span className="h-0.5 w-5 bg-cobre" />
      {children}
    </span>
  )
}

export function Head({
  eyebrow,
  title,
  lead,
  center,
}: {
  eyebrow: string
  title: string
  lead?: string
  center?: boolean
}) {
  return (
    <div className={center ? 'flex flex-col items-center text-center' : ''}>
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal>
        <h2 className="mb-4 max-w-[20ch] text-[clamp(1.6rem,6vw,2.7rem)]">{title}</h2>
      </Reveal>
      {lead && (
        <Reveal>
          <p className="mb-10 max-w-[60ch] text-base text-muted sm:mb-12 sm:text-lg">{lead}</p>
        </Reveal>
      )}
    </div>
  )
}

type BtnProps = ComponentProps<'a'> & { variant?: 'primary' | 'ghost' }

export function Btn({ variant = 'primary', className = '', children, ...rest }: BtnProps) {
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-br from-cobre-claro to-[#ffe08a] text-[#20160a] shadow-[0_14px_34px_-14px_rgba(240,199,94,0.65)] hover:shadow-[0_20px_44px_-14px_rgba(240,199,94,0.8)]'
      : 'border border-line bg-white/5 text-text hover:bg-white/10'
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center font-bold transition hover:-translate-y-0.5 max-sm:w-full sm:px-7 ${styles} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}

const boldRe = /\*\*(.+?)\*\*/g

export function RichText({ text }: { text: string }) {
  const parts = text.split(boldRe)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-bold text-cobre-claro">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}
