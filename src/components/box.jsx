import React from "react"
import "../styles/box.css"

const Box = (props) => {
  return (
        <div className={props.className}>
            {props.text}{props.children}
        </div>
  )
}

export default Box
