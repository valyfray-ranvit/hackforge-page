export function AutomationDiagram() {
  return (
    <svg className="technical-graphic" viewBox="0 0 520 230" role="img" aria-label="Connected systems engineering diagram">
      <g className="grid-lines"><path d="M10 210h500M10 180h500M10 150h500M10 120h500M10 90h500M10 60h500M10 30h500M60 10v210M120 10v210M180 10v210M240 10v210M300 10v210M360 10v210M420 10v210M480 10v210" /></g>
      <g className="diagram-main"><path d="m56 177 74-56 60 23 79-92 88 64 76-41 40 29v73z" /><path d="M56 177h417M130 121v56M190 144v33M269 52v125M357 116v61M433 75v102" /><path d="m130 121 139 56 88-61 116 61M190 144l79-92 164 23" /></g>
      <g className="nodes"><circle cx="130" cy="121" r="6"/><circle cx="190" cy="144" r="6"/><circle cx="269" cy="52" r="6"/><circle cx="357" cy="116" r="6"/><circle cx="433" cy="75" r="6"/></g>
      <g className="diagram-labels"><text x="42" y="202">INPUT_01</text><text x="251" y="38">CORE</text><text x="424" y="62">NODE_05</text></g>
    </svg>
  )
}

export function QuantitativeSurface() {
  const lines = Array.from({ length: 13 }, (_, i) => {
    const y = 190 - i * 11
    return <path key={i} d={`M18 ${y} C110 ${y - 5 - i * 2}, 145 ${y - i * 7}, 236 ${y - 8} S360 ${y - 70 + i * 3}, 500 ${y - 5}`} />
  })
  const verticals = Array.from({ length: 15 }, (_, i) => <path key={i} d={`M${24 + i * 34} 190 C${35 + i * 31} 140, ${20 + i * 35} 85, ${37 + i * 33} 38`} />)
  return <svg className="technical-graphic surface" viewBox="0 0 520 230" role="img" aria-label="Optimisation surface mesh diagram"><g>{lines}{verticals}</g><path className="axis" d="M18 190h490M18 190 8 180M18 190 31 202"/><text x="380" y="218">f(x,y) / CONSTRAINT</text></svg>
}
