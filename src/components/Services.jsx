import { SERVICES } from '../data'
import { Img, Reveal, SectionHead, scrollToId } from './Common'

function ServiceCard({ title, img, text }) {
  return (
    <article className="card service">
      <div className="thumb"><Img src={img} alt={`${title} at IronCore Fitness`} /></div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{text}</p>
        <button className="link" onClick={() => scrollToId('contact')}>Learn More</button>
      </div>
    </article>
  )
}

export default function Services() {
  return (
    <section id="services" className="section alt">
      <div className="container">
        <SectionHead title="TRAIN YOUR WAY" text="Everything you need to move better, get stronger, and reach your fitness goals." />
        <div className="grid g3">{SERVICES.map((s) => <Reveal key={s.title}><ServiceCard {...s} /></Reveal>)}</div>
      </div>
    </section>
  )
}
