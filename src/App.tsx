import AsistenteIA from './components/AsistenteIA'
import Hero from './components/Hero'
import Loader from './components/Loader'
import Nav from './components/Nav'
import {
  AntesDespues,
  Automatizacion,
  Clientes,
  CTA,
  FAQ,
  Footer,
  MisionVision,
  Modulos,
  Planes,
  Problemas,
  Proceso,
} from './components/Sections'
import WhatsappFab from './components/WhatsappFab'

export default function App() {
  return (
    <>
      <Loader />
      <Nav />
      <main>
        <Hero />
        <Problemas />
        <AntesDespues />
        <MisionVision />
        <Modulos />
        <AsistenteIA />
        <Automatizacion />
        <Clientes />
        <Proceso />
        <Planes />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  )
}
