import { motion, useReducedMotion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa6'
import { WHATSAPP } from '../lib/data'

export default function WhatsappFab() {
  const reduce = useReducedMotion()

  return (
    <motion.a
      href={`${WHATSAPP}?text=${encodeURIComponent('Hola Synapsis, quiero una demo')}`}
      target="_blank"
      rel="noopener"
      aria-label="Escribir por WhatsApp"
      initial={reduce ? false : { scale: 0, opacity: 0 }}
      animate={reduce ? undefined : { scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.94 }}
      className={`fixed right-5 bottom-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-[#04310f] shadow-[0_14px_30px_-8px_rgba(37,211,102,0.6)] ${
        reduce ? '' : 'animate-pulse-ring'
      }`}
    >
      <FaWhatsapp size={28} />
    </motion.a>
  )
}
