import EditorialLabel from './EditorialLabel'

export default function AboutSection() {
  return (
    <section className="about content-section" id="about">
      <EditorialLabel number="001">About / Manifesto</EditorialLabel>
      <div className="about-grid">
        <h2>Built, not<br />prompted.</h2>
        <div className="about-copy">
          <p>Hackforge 2026 is the college’s first overnight hackathon: a 24-hour sprint for students who want to solve hard problems with real engineering.</p>
          <p>The brief is simple. Take on a complex problem and forge a dependable, working solution overnight—not just a pitch or prototype.</p>
        </div>
        <blockquote><span>“</span>THINK.<br />BUILD.<br />FORGE.</blockquote>
      </div>
      <div className="manifesto-line"><span>24 HOURS.</span><span>REAL PROBLEMS.</span><span>NO SHORTCUTS.</span></div>
    </section>
  )
}
