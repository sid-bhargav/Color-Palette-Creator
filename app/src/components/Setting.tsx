import React, { useState } from "react"

import CheckBox from "./CheckBox"

export default function Setting(props: any) {
  if (props.value) {
    return(
      <div className="flex gap-3 text-xl items-center">
        <CheckBox value={props.value} onClick={props.onClick}/>
        <h1>{props.title}</h1>
      </div>
    )
  } else {
  return(
    <div className="flex gap-3 text-xl text-slate-400 items-center">
      <CheckBox value={props.value} onClick={props.onClick}/>
      <h1>{props.title}</h1>
    </div>
  )
  }
}