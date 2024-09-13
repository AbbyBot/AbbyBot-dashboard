

function App() {

  return <>
    <div style={{display:"flex", alignItems:"center", gap:"12px"}}>
      <div className="bg" style={{width: 30, height:30}}></div>
      <i>background</i>
    </div>
    <div style={{display:"flex", alignItems:"center", gap:"12px"}}>
      <div className="bg-primary" style={{width: 30, height:30}}></div>
      <i>primary</i>
    </div>
    <div style={{display:"flex", alignItems:"center", gap:"12px"}}>
      <div className="bg-secondary" style={{width: 30, height:30}}></div>
      <i>secondary</i>
    </div>
    <div style={{display:"flex", alignItems:"center", gap:"12px"}}>
      <div className="bg-tertiary" style={{width: 30, height:30}}></div>
      <i>tertiary</i>
    </div>
    <div style={{display:"flex", alignItems:"center", gap:"12px"}}>
      <div className="bg-warning" style={{width: 30, height:30}}></div>
      <i>warning</i>
    </div>
    <button className="btn">I'm a button</button>
    <button className="btn-primary">I'm a primary button</button>
    <button className="btn-secondary">I'm a secondary button</button>
    <button className="btn-tertiary">I'm a tertiary button</button>
    <button className="btn-warning">I'm a warning button</button>
    <p className="text-italic">Im a italic text</p>
    <p className="text-mono">Im a mono text</p>
    <p className="text-condensed">Im a condensed text</p>
  </>
}

export default App
