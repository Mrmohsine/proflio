import Nav from './sections/Nav'
import About from './sections/About'
import Tech from './sections/Tech'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import { Toaster } from 'react-hot-toast'
import Experience from './sections/Experience'
import CursorTrail from './components/CursorTrail'

function App() {

  return (
    <>
    <Toaster position='top-right'/>
     <CursorTrail />
      <Nav />
      <About />
      <Experience />
      <Tech />
      <Projects />
      <Hero />
      <Contact />
    </>
  )
}

export default App
