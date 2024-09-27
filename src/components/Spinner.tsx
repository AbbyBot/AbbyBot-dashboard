import React from 'react'

export default function Spinner({minusHeight = 0}: {minusHeight?: number}) {
  return (
    <div style={{ height: `calc(100vh - ${minusHeight}px)` }} className="gap-3 d-flex flex-center flex-center-items">
      <div className="spinner"></div>
    </div>
  )
}
