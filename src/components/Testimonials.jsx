import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../data'
import { Reveal, SectionHead } from './Common'

function TestimonialCard({ name, text }) {
  return (
    <figure className="card testimonial">
      <div className="stars" role="img" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={18} fill="currentColor" />)}</div>
      <blockquote>“{text}”</blockquote>
      <figcaption><span className="avatar" aria-hidden="true">{name[0]}</span>{name}</figcaption>
    </figure>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <SectionHead title="REAL PEOPLE. REAL PROGRESS." text="See what our members say about their fitness journey." />
        <div className="grid g3">{TESTIMONIALS.map((t) => <Reveal key={t.name}><TestimonialCard {...t} /></Reveal>)}</div>
        <p className="note">Sample reviews shown as placeholder content, not verified customer testimonials.</p>
      </div>
    </section>
  )
}
