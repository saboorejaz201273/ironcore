import { Check } from 'lucide-react'
import { PLANS } from '../data'
import { Reveal, SectionHead } from './Common'

function PricingCard({ plan, onChoose }) {
  return (
    <article className={`card pricing ${plan.popular ? 'popular' : ''}`}>
      {plan.popular && <span className="badge">MOST POPULAR</span>}
      <h3>{plan.name} Plan</h3>
      <p className="price"><span>PKR {plan.price.toLocaleString('en-PK')}</span>/month</p>
      <ul>{plan.features.map((f) => <li key={f}><Check size={18} aria-hidden="true" />{f}</li>)}</ul>
      <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`} onClick={() => onChoose(plan.name)}>Choose {plan.name}</button>
    </article>
  )
}

export default function Membership({ onChoose }) {
  return (
    <section id="membership" className="section">
      <div className="container">
        <SectionHead title="CHOOSE YOUR MEMBERSHIP" text="Find the right plan for your goals, schedule, and lifestyle." />
        <div className="grid g3 pricing-grid">{PLANS.map((p) => <Reveal key={p.name}><PricingCard plan={p} onChoose={onChoose} /></Reveal>)}</div>
        <p className="note">Membership prices are illustrative and can be customized for your gym.</p>
      </div>
    </section>
  )
}
