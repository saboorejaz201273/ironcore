import { useEffect, useRef, useState } from 'react'

export function Img({ src, alt, className = '' }) {
  const [bad, setBad] = useState(false)
  return bad
    ? <div className={`img-fallback ${className}`} role="img" aria-label={alt} />
    : <img src={src} alt={alt} className={className} loading="lazy" onError={() => setBad(true)} />
}

export function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return setOn(true)
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${on ? 'in' : ''} ${className}`}>{children}</div>
}

export function SectionHead({ title, text }) {
  return <Reveal className="section-head"><h2>{title}</h2><p>{text}</p></Reveal>
}

export const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
