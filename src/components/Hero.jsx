import { IMAGES, STATS } from '../data'
import { scrollToId } from './Common'

export default function Hero() {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `linear-gradient(rgba(10,10,10,.72),rgba(10,10,10,.88)), url(${IMAGES.hero})` }}>
      <div className="container hero-inner">
        <p className="eyebrow">WELCOME TO IRONCORE FITNESS</p>
        <h1>BUILD STRENGTH. PUSH LIMITS. BECOME UNSTOPPABLE.</h1>
        <p className="lead">Transform your body, strengthen your mind, and achieve your fitness goals with expert trainers, modern equipment, and a community that pushes you forward.</p>
        <div className="btn-row">
          <button className="btn btn-primary" onClick={() => scrollToId('membership')}>Join Now</button>
          <button className="btn btn-outline" onClick={() => scrollToId('services')}>Explore Our Programs</button>
        </div>
        <dl className="stats">
          {STATS.map(([n, l]) => <div key={l}><dt>{n}</dt><dd>{l}</dd></div>)}
        </dl>
      </div>
    </section>
  )
}
