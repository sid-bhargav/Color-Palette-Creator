import React, { useState } from "react"

export default function ColorBox(props: any) {
  
  const [color, setColor] = useState(props.color)

  const css = `
  .color-box {
    width: 4rem;
    height: 4rem;
    background-color: ${color};
  }
  `
  
  return(
    <div>
      <style>
        {css}
      </style>
      <div className="color-box" onClick={props.onClick}>
      </div>
    </div>
  )
}