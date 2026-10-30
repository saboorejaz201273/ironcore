import { Instagram, Facebook } from 'lucide-react'
import { TRAINERS } from '../data'
import { Img, Reveal, SectionHead } from './Common'

function TrainerCard({ name, specialty, years, img }) {
  return (
    <article className="card trainer">
      <div className="thumb tall"><Img src={img} alt={`${name}, ${specialty} coach`} /></div>
      <div className="card-body">
        <h3>{name}</h3>
        <p className="accent">{specialty}</p>
        <p className="muted small">{years} Years Experience</p>
        <div className="social-mini">
          <a href="https://instagram.com/" aria-label={`${name} on Instagram`}><Instagram size={18} /></a>
          <a href="https://facebook.com/" aria-label={`${name} on Facebook`}><Facebook size={18} /></a>
        </div>
      </div>
    </article>
  )
}

export default function Trainers() {
  return (
    <section id="trainers" className="section alt">
      <div className="container">
        <SectionHead title="MEET YOUR COACHES" text="Train with passionate professionals who are committed to helping you achieve your goals." />
        <div className="grid g4">{TRAINERS.map((t) => <Reveal key={t.name}><TrainerCard {...t} /></Reveal>)}</div>
      </div>
    </section>
  )
}
