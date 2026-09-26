export default function EditorialLabel({ number, children, inverse = false }) {
  return <div className={`editorial-label${inverse ? ' inverse' : ''}`}><span>{number}</span><p>{children}</p><i aria-hidden="true" /></div>
}
