import EditorialLabel from './EditorialLabel'
import { tracks } from '../data/event'
import { AutomationDiagram, QuantitativeSurface } from './TechnicalGraphics'

function TrackPanel({ track, index }) {
  return (
    <article className={`track-panel ${track.tone}`} id={`track-${track.number}`}>
      <div className="track-heading"><span>TRACK {track.number}</span><small>{index === 0 ? 'ENTRY / BUILD' : 'SYSTEM / SCALE'}</small></div>
      <h3>{track.title.split('\n').map((line) => <span key={line}>{line}</span>)}</h3>
      <p>{track.description.map((line) => <span key={line}>{line}</span>)}</p>
      {index === 0 ? <AutomationDiagram /> : <QuantitativeSurface />}
      <ul aria-label={`${track.title.replace('\n', ' ')} keywords`}>{track.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
      <a href={`#track-${track.number}`} onClick={(e) => e.preventDefault()}>EXPLORE TRACK <span aria-hidden="true">→</span><small>Full brief pending</small></a>
    </article>
  )
}

export default function TracksSection() {
  return (
    <section className="tracks-section" id="tracks">
      <div className="content-section"><EditorialLabel number="002">Tracks / Two paths</EditorialLabel></div>
      <div className="track-split">{tracks.map((track, i) => <TrackPanel track={track} index={i} key={track.number} />)}</div>
      <div className="tracks-footer"><span>HACKFORGE 2026</span><b>THINK. BUILD. FORGE.</b><span>// FOSS CLUB</span></div>
    </section>
  )
}
