import { AnimatePresence, motion } from 'framer-motion'
import { Bot, Lightbulb } from 'lucide-react'
import { useRef, useState } from 'react'
import { chatQA, iaEjemplos } from '../lib/data'
import { Block, Head, Reveal, RichText } from '../lib/ui'

type Msg = { from: 'bot' | 'user'; text: string }

const INTRO: Msg = {
  from: 'bot',
  text: 'Hola 👋 Soy tu asistente. Preguntame lo que quieras sobre el negocio. Probá con una de las opciones de abajo.',
}

export default function AsistenteIA() {
  const [messages, setMessages] = useState<Msg[]>([INTRO])
  const [typing, setTyping] = useState(false)
  const busy = useRef(false)
  const bodyRef = useRef<HTMLDivElement>(null)

  const scroll = () =>
    requestAnimationFrame(() => {
      bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight })
    })

  const ask = (item: (typeof chatQA)[number]) => {
    if (busy.current) return
    busy.current = true
    setMessages((m) => [...m, { from: 'user', text: item.q }])
    setTyping(true)
    scroll()
    window.setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { from: 'bot', text: item.a }])
      busy.current = false
      scroll()
    }, 900)
  }

  return (
    <Block id="ia">
      <div className="grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <Head
            eyebrow="Inteligencia Artificial aplicada"
            title="Preguntale a tu negocio. Te responde con datos."
          />
          <Reveal className="-mt-6">
            <p className="mb-6 max-w-[60ch] text-lg text-muted">
              La IA no es un adorno: lee tus ventas, gastos y clientes, detecta patrones y te lo explica en lenguaje
              simple. Probá el asistente 👉
            </p>
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="mb-3 flex items-center gap-2.5 text-[1.05rem]">
                <Lightbulb size={20} className="text-cobre-claro" />
                Ejemplos reales de lo que responde
              </h3>
              <ul className="flex flex-col gap-2.5">
                {iaEjemplos.map((e) => (
                  <li key={e} className="flex gap-2.5 text-sm text-[#cdd8e6]">
                    <span className="text-cobre">→</span>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex max-h-[520px] flex-col overflow-hidden rounded-[20px] border border-line bg-gradient-to-b from-surface to-petroleo-900 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-3 border-b border-line bg-white/[0.03] px-4.5 py-4">
              <div className="grid h-9 w-9 place-items-center rounded-[10px] bg-gradient-to-br from-cobre to-cobre-claro text-[#241a02]">
                <Bot size={18} />
              </div>
              <div>
                <b className="text-sm">Asistente Synapsis</b>
                <br />
                <span className="flex items-center gap-1.5 text-[0.78rem] text-ok">
                  <span className="h-1.5 w-1.5 rounded-full bg-ok" />
                  en línea · analiza tus datos
                </span>
              </div>
            </div>

            <div ref={bodyRef} className="flex flex-1 flex-col gap-3 overflow-y-auto p-4.5">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.from === 'bot'
                      ? 'self-start rounded-bl-[4px] border border-line bg-surface-2'
                      : 'self-end rounded-br-[4px] bg-gradient-to-br from-azul to-azul-claro text-white'
                  }`}
                >
                  {m.from === 'bot' ? <RichText text={m.text} /> : m.text}
                </motion.div>
              ))}
              <AnimatePresence>
              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-1 self-start rounded-2xl rounded-bl-[4px] border border-line bg-surface-2 px-3.5 py-3"
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </motion.div>
              )}
              </AnimatePresence>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-line bg-white/[0.02] px-4.5 py-3.5">
              {chatQA.map((item) => (
                <motion.button
                  key={item.q}
                  type="button"
                  onClick={() => ask(item)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full border border-line bg-white/5 px-3 py-2 text-[0.8rem] font-semibold text-text transition-colors hover:border-cobre hover:bg-cobre hover:text-[#241a02]"
                >
                  {item.q}
                </motion.button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Block>
  )
}
