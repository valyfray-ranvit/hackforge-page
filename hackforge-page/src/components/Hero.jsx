import PosterFrame from './PosterFrame'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-kicker"><span>FOSS CLUB MPSTME PRESENTS</span><span>THINK. BUILD. FORGE. &nbsp;→→→</span></div>
      <div className="hero-grid">
        <div className="hero-title-wrap">
          <p className="issue-code">ISSUE 01 / BUILD://2026</p>
          <h1 id="hero-title" className="display-xl"><span>HACK</span><span>FORGE</span><span className="year">2026</span></h1>
          <p className="hero-declaration">24 HOURS. &nbsp; REAL PROBLEMS. &nbsp; NO SHORTCUTS.</p>
        </div>
        <PosterFrame src="/assets/hackforge-poster.jpeg" alt="Official Hackforge event poster supplied by FOSS Club MPSTME" />
        <aside className="hero-note" aria-label="Event statement">
          <span>REAL PEOPLE.<br />REAL ENGINEERING.</span>
          <svg viewBox="0 0 120 44" aria-hidden="true"><path d="M3 35c25 2 50-5 72-25M68 4l10 5-4 10" /></svg>
        </aside>
      </div>
      <div className="hero-index" aria-hidden="true"><span>01</span><span>02</span><span>03</span><span>04</span><span>HF/26</span></div>
    </section>
  )
}
