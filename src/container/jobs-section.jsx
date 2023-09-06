import React from "react"
import Title from "../components/title"
import Text from "../components/text"

const JobsSection = (props) => {
  return (
        <section className="section" id={props.id}>
            <Title text="Experience"></Title>
            <Text text="A quick recap of where I've worked."></Text>
        </section>
  )
}

export default JobsSection
