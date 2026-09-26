import { event } from '../data/event'

function Barcode() {
  return <div className="barcode" aria-hidden="true">{Array.from({ length: 42 }, (_, i) => <i key={i} style={{ width: `${(i % 4) + 1}px` }} />)}</div>
}

export default function EventPass() {
  return (
    <section className="pass-wrap" aria-labelledby="pass-title">
      <article className="event-pass">
        <div className="pass-main">
          <div className="pass-meta"><span>FOSS_MPSTME</span><span>ADMIT / 03</span></div>
          <h2 id="pass-title">EVENT<br />PASS</h2>
          <Barcode />
          <p>24 HOURS // REAL PROBLEMS // NO SHORTCUTS</p>
        </div>
        <div className="pass-schedule">
          <dl>
            <div><dt>ROUND 1</dt><dd>{event.roundOne.date}<br />ONLINE</dd></div>
            <div><dt>ROUND 2</dt><dd>{event.roundTwo.date}<br />{event.roundTwo.time}<br />{event.roundTwo.place}</dd></div>
            <div><dt>JUDGING</dt><dd>{event.judging}</dd></div>
          </dl>
          <a className="register-stamp" href="#register">REGISTER <span>↘</span></a>
        </div>
      </article>
      <div className="stats-strip" aria-label="Event statistics">
        <div><small>TEAM SIZE</small><strong>{event.teamSize}</strong><span>MEMBERS</span></div>
        <div><small>REGISTRATION FEE</small><strong>{event.fee}</strong><span>PER TEAM</span></div>
        <div className="highlight"><small>PRIZE POOL</small><strong>{event.prizePool}</strong><span>TOTAL</span></div>
      </div>
    </section>
  )
}
