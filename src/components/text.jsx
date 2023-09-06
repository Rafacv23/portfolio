import React from "react"

const Text = (props) => {
  return (
        <p key={props.key} className={props.className}>
            {props.text}
        </p>
  )
}

export default Text
