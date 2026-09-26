import Reveal from './Reveal'

export default function RegisterCTA() {
  return (
    <Reveal as="section" className="register-cta" id="register">
      <div className="register-eyebrow"><span>FOSS CLUB MPSTME</span><span>APPLICATION / 2026</span></div>
      <h2 className="display-xl"><span>READY</span><span>TO <em>FORGE?</em></span></h2>
      <div className="register-action">
        <button type="button" disabled title="The official registration URL is not yet present in the project">REGISTER ON UNSTOP <span aria-hidden="true">↗</span></button>
        <p>OFFICIAL LINK<br />PENDING CONFIRMATION</p>
      </div>
    </Reveal>
  )
}
