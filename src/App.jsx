import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Membership from './components/Membership'
import Trainers from './components/Trainers'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { scrollToId } from './components/Common'

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const choosePlan = (name) => { setSelectedPlan({ name, t: Date.now() }); scrollToId('contact') }
  return (
    <>
      <Navbar />
      <main>
        <Hero /><About /><Services />
        <Membership onChoose={choosePlan} />
        <Trainers /><Testimonials />
        <Contact selectedPlan={selectedPlan} />
      </main>
      <Footer />
    </>
  )
}
