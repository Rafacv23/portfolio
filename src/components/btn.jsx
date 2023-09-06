import React from "react"
import "../styles/btns.css"

const Btn = (props) => {
  return (
        <button className={props.className} onClick={props.onClick} type={props.type}>
            {props.text} {props.children}
        </button>
  )
}

export default Btn
