import { useEffect, useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { CONTACT, INTERESTS } from '../data'
import { Reveal, SectionHead } from './Common'

const empty = { name: '', email: '', phone: '', interest: 'General Inquiry', message: '' }
const validate = (v) => {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your full name.'
  if (!v.email.trim()) e.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = 'Enter a valid email, for example name@example.com.'
  if (!v.phone.trim()) e.phone = 'Please enter your phone number.'
  else if (!/^[+\d][\d\s-]{6,}$/.test(v.phone.trim())) e.phone = 'Enter a valid phone number.'
  if (!v.message.trim()) e.message = 'Please write a short message.'
  return e
}

export default function Contact({ selectedPlan }) {
  const [v, setV] = useState(empty)
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)

  useEffect(() => { if (selectedPlan) { setV((p) => ({ ...p, interest: selectedPlan.name })); setDone(false) } }, [selectedPlan])

  const change = (e) => { setV({ ...v, [e.target.name]: e.target.value }); setErrors({ ...errors, [e.target.name]: undefined }) }
  const submit = (e) => {
    e.preventDefault()
    const err = validate(v)
    setErrors(err)
    if (Object.keys(err).length) return
    setDone(true); setV(empty) // Demo only: connect a backend/email service here.
  }

  const field = (name, label, type = 'text', extra = {}) => (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} value={v[name]} onChange={change} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-err` : undefined} {...extra} />
      {errors[name] && <span id={`${name}-err`} className="err" role="alert">{errors[name]}</span>}
    </div>
  )

  return (
    <section id="contact" className="section alt">
      <div className="container">
        <SectionHead title="READY TO START YOUR JOURNEY?" text="Have questions about memberships or training? Get in touch with our team." />
        <div className="two-col contact-grid">
          <Reveal>
            <ul className="info">
              <li><Phone /><div><h3>Phone</h3><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a></div></li>
              <li><Mail /><div><h3>Email</h3><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div></li>
              <li><MapPin /><div><h3>Address</h3><p>{CONTACT.address}</p></div></li>
              <li><Clock /><div><h3>Opening Hours</h3>{CONTACT.hours.map(([d, t]) => <p key={d}>{d}: {t}</p>)}</div></li>
            </ul>
          </Reveal>
          <Reveal>
            <form className="card form" onSubmit={submit} noValidate>
              {done && <p className="success" role="status">Thanks! This is a frontend demo, so your message was not actually sent. Connect a backend to receive inquiries.</p>}
              {field('name', 'Full Name', 'text', { autoComplete: 'name', required: true })}
              {field('email', 'Email Address', 'email', { autoComplete: 'email', required: true })}
              {field('phone', 'Phone Number', 'tel', { autoComplete: 'tel', required: true })}
              <div className="field">
                <label htmlFor="interest">Interested In</label>
                <select id="interest" name="interest" value={v.interest} onChange={change}>{INTERESTS.map((i) => <option key={i}>{i}</option>)}</select>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" value={v.message} onChange={change} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} required />
                {errors.message && <span id="message-err" className="err" role="alert">{errors.message}</span>}
              </div>
              <button className="btn btn-primary" type="submit">Send Message</button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
