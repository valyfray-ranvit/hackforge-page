import EditorialLabel from './EditorialLabel'
import { event } from '../data/event'
import Reveal from './Reveal'

const items = [
  ['01', 'Online qualifier', event.roundOne.date],
  ['02', 'Overnight hackathon', `${event.roundTwo.date}\n${event.roundTwo.time}`],
  ['03', 'Judging', event.judging],
  ['04', 'Prize distribution', event.prizePool],
]

export default function Timeline() {
  return (
    <Reveal as="section" className="timeline content-section" id="timeline">
      <EditorialLabel number="003">Timeline / Run of show</EditorialLabel>
      <h2 className="section-title"><span>One qualifier.</span><span>One night to build.</span></h2>
      <div className="timeline-grid">{items.map(([number, title, detail]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{detail.split('\n').map((line) => <span key={line}>{line}</span>)}</p></article>)}</div>
    </Reveal>
  )
}
