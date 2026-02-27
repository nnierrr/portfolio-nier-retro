import './App.css'
import { Header } from './sections/Header/Header'
import { Hero } from './sections/Hero/Hero'
import { StatsBar } from './sections/StatsBar/StatsBar'
import { Experience } from './sections/Experience/Experience'
import { Skills } from './sections/Skills/Skills'
import { Projects } from './sections/Projects/Projects'
import { Testimonials } from './sections/Testimonials/Testimonials'
import { Cta } from './sections/Cta/Cta'
import { Footer } from './sections/Footer/Footer'

function App() {
  return (
    <div className="portfolio">
      <Header />
      <Hero />
      <StatsBar />
      <Experience />
      <Skills />
      <Projects />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  )
}

export default App