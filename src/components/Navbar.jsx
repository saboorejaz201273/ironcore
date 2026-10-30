import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV, BRAND } from '../data'
import { scrollToId } from './Common'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 40)
      let cur = 'home'
      NAV.forEach(([id]) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= 120) cur = id })
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => { setOpen(false); scrollToId(id) }

  return (
    <header className={`nav ${solid || open ? 'solid' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); go('home') }}>IRON<span>CORE</span> FITNESS</a>
        <nav aria-label="Main" className={`nav-links ${open ? 'open' : ''}`}>
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={(e) => { e.preventDefault(); go(id) }}>{label}</a>
          ))}
          <button className="btn btn-primary" onClick={() => go('membership')}>Join Now</button>
        </nav>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
