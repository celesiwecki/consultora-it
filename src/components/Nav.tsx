import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import logo from '../assets/logo-mark.png'
import { navLinks } from '../lib/data'
import { Btn } from '../lib/ui'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={reduce ? false : { y: -80, opacity: 0 }}
      animate={reduce ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition ${
        scrolled ? 'border-line bg-bg/85 backdrop-blur-lg' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-6 py-4">
        <a
          href="#top"
          aria-label="Synapsis Digital Tech — inicio"
          className="flex items-center transition hover:opacity-90"
        >
          <img
            src={logo}
            alt="Synapsis Digital Tech"
            className="h-12 w-auto rounded-lg bg-white p-1.5 shadow-md ring-1 ring-cobre/30 sm:h-14"
          />
        </a>

        <button
          className="text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-muted transition hover:text-text">
              {l.label}
            </a>
          ))}
          <Btn href="#contacto" className="px-5 py-2.5 text-sm">
            Pedir demo
          </Btn>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="overflow-hidden border-b border-line bg-petroleo-900 md:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-t border-line px-6 py-4 font-semibold text-muted transition hover:text-text"
                >
                  {l.label}
                </a>
              ))}
              <Btn href="#contacto" onClick={() => setOpen(false)} className="m-6">
                Pedir demo
              </Btn>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
