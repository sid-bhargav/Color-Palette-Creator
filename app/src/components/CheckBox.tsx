import React, { useState } from "react"

export default function CheckBox(props: any) {
  return(
    <div className={
      "w-5 h-5 border-blue-600 border-2 "
      + (props.value ? "bg-blue-400" : "")} onClick={props.onClick}>
      
    </div>
  )
}