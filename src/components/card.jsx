import React from "react"

const Card = (props) => {
  return (
        <div key={props.key} className={props.className}>
            {props.children}
        </div>
  )
}

export default Card
