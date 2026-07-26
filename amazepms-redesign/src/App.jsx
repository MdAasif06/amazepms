import { useSmoothScroll } from "./hooks/useSmoothScroll.js"
import AuroraBackground from "./components/ui/AuroraBackground.jsx"
import ScrollProgress from "./components/ui/ScrollProgress.jsx"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/sections/Hero.jsx"
import LogoCloud from "./components/sections/LogoCloud.jsx"
import About from "./components/sections/About.jsx"
import Features from "./components/sections/Features.jsx"
import Modules from "./components/sections/Modules.jsx"
import Benefits from "./components/sections/Benefits.jsx"
import Workflow from "./components/sections/Workflow.jsx"
import Stats from "./components/sections/Stats.jsx"
import Testimonials from "./components/sections/Testimonials.jsx"
import FAQ from "./components/sections/FAQ.jsx"
import ContactCTA from "./components/sections/ContactCTA.jsx"
import Footer from "./components/sections/Footer.jsx"

export default function App() {
  useSmoothScroll()

  return (
    <>
      <AuroraBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <About />
        <Features />
        <Modules />
        <Benefits />
        <Workflow />
        <Stats />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
