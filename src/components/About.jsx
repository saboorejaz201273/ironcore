import * as Icons from 'lucide-react'
import { BENEFITS, IMAGES } from '../data'
import { Img, Reveal, scrollToId } from './Common'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container two-col">
        <Reveal className="about-img"><Img src={IMAGES.about} alt="Athlete training with weights at IronCore Fitness" /></Reveal>
        <Reveal>
          <h2>MORE THAN A GYM. A MOVEMENT.</h2>
          <p className="muted">At IronCore Fitness, we believe fitness is about more than lifting weights. It's about building confidence, developing discipline, and becoming the strongest version of yourself. Our mission is to create an environment where everyone feels motivated to improve, regardless of their fitness level.</p>
          <ul className="benefits">
            {BENEFITS.map(([t, d, icon]) => {
              const Icon = Icons[icon]
              return <li key={t}><span className="icon-box"><Icon size={22} /></span><div><h3>{t}</h3><p>{d}</p></div></li>
            })}
          </ul>
          <button className="btn btn-primary" onClick={() => scrollToId('trainers')}>Discover Our Story</button>
        </Reveal>
      </div>
    </section>
  )
}
