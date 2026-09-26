import { useEffect, useState } from 'react'
import BrandMark from './BrandMark'
import { event } from '../data/event'

const links = ['about', 'tracks', 'timeline', 'prizes', 'faq']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="FOSS Club MPSTME — back to top">
        <BrandMark /><span>FOSS CLUB<br />MPSTME</span>
      </a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav">
        <span>{open ? 'CLOSE' : 'MENU'}</span><b aria-hidden="true">{open ? '×' : '+'}</b>
      </button>
      <nav id="site-nav" className={open ? 'nav-open' : ''} aria-label="Main navigation">
        {links.map((link) => <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>{link}</a>)}
        <a className="nav-register" href={event.registrationUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Register <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  )
}
