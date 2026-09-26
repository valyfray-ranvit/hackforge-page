import { event } from '../data/event'
import Reveal from './Reveal'

export default function PrizeSection() {
  return (
    <Reveal as="section" className="prize" id="prizes">
      <div className="prize-code"><span>HF/26</span><span>VOUCHER № 15000</span></div>
      <div><p>PRIZE POOL</p><h2 className="display-lg">{event.prizePool}</h2><span>TOTAL / TWO TRACKS</span></div>
      <aside><small>PRIZE DISTRIBUTION</small><p>The final track-wise split is not listed in the current project and will be published when confirmed.</p></aside>
      <div className="prize-stamp" aria-hidden="true">BUILD<br />TO WIN</div>
    </Reveal>
  )
}
