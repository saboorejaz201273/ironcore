import { Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react'
import { CONTACT, SOCIALS, NAV } from '../data'
import { scrollToId } from './Common'

const ICONS = { Instagram, Facebook, YouTube: Youtube }

export default function Footer() {
  const links = NAV.filter(([id]) => id !== 'testimonials')
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToId('home') }}>IRON<span>CORE</span> FITNESS</a>
          <p className="muted">Stronger bodies. Stronger minds. A stronger community.</p>
        </div>
        <div><h3>Quick Links</h3><ul>{links.map(([id, l]) => <li key={id}><a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollToId(id) }}>{l}</a></li>)}</ul></div>
        <div><h3>Contact</h3><ul><li>{CONTACT.phone}</li><li>{CONTACT.email}</li><li>{CONTACT.address}</li></ul></div>
        <div><h3>Follow Us</h3><div className="socials">{SOCIALS.map(({ name, href }) => { const I = ICONS[name]; return <a key={name} href={href} aria-label={name} target="_blank" rel="noreferrer"><I size={20} /></a> })}</div></div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} IronCore Fitness. All rights reserved.</p>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToId('home') }}><ArrowUp size={16} /> Back to Top</a>
      </div>
    </footer>
  )
}
