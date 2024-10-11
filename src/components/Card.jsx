import React from 'react'

export default function Card({children, className, style}) {
  return  <div style={style} className={`bg-navbar rounded no-select p-4 text-light ${className}`}> {children} </div>
}
