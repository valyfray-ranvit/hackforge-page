const columns = 21
const rows = 15

function height(x, y) {
  const peakA = 1.18 * Math.exp(-((x + .42) ** 2 * 5.7 + (y + .12) ** 2 * 4.2))
  const peakB = .92 * Math.exp(-((x - .38) ** 2 * 8.5 + (y - .18) ** 2 * 7))
  const ridge = .3 * Math.sin(x * 5.2 + y * 1.4) * Math.cos(y * 3.4)
  return peakA + peakB + ridge
}

function project(x, y, z) {
  return [280 + (x - y) * 178, 202 + (x + y) * 48 - z * 78]
}

function makePath(points) {
  return points.map(([x, y], index) => `${index ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')
}

const rowPaths = Array.from({ length: rows }, (_, row) => {
  const y = -1 + row * 2 / (rows - 1)
  return makePath(Array.from({ length: columns }, (_, col) => {
    const x = -1 + col * 2 / (columns - 1)
    return project(x, y, height(x, y))
  }))
})

const columnPaths = Array.from({ length: columns }, (_, col) => {
  const x = -1 + col * 2 / (columns - 1)
  return makePath(Array.from({ length: rows }, (_, row) => {
    const y = -1 + row * 2 / (rows - 1)
    return project(x, y, height(x, y))
  }))
})

export default function OptimizationSurface() {
  return (
    <svg className="technical-graphic optimization-surface" viewBox="0 0 560 285" role="img" aria-labelledby="surface-title surface-desc">
      <title id="surface-title">Three-dimensional optimisation surface</title>
      <desc id="surface-desc">A dense mathematical wireframe mesh with two peaks, intersecting rows and columns, perspective depth and coordinate axes.</desc>
      <g className="surface-axis"><path d="M32 236h494M54 251 32 236l22-15M526 236l-15-8M526 236l-15 9" /><path d="M280 258V28m0 0-8 18m8-18 8 18" /></g>
      <g className="surface-contours">{rowPaths.map((d, index) => <path key={`r-${index}`} d={d} pathLength="1" style={{ '--mesh-index': index }} />)}</g>
      <g className="surface-columns">{columnPaths.map((d, index) => <path key={`c-${index}`} d={d} pathLength="1" style={{ '--mesh-index': index + rows }} />)}</g>
      <g className="surface-labels"><text x="34" y="275">−X / CONSTRAINT</text><text x="431" y="275">+Y / SCALE</text><text x="292" y="30">f(x,y)</text></g>
      <circle className="optimum-point" cx="252" cy="79" r="5" /><path className="optimum-guide" d="M252 79v157" />
    </svg>
  )
}
