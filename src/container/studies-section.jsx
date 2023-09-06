import React from "react"
import Title from "../components/title"
import Text from "../components/text"
import SubTitle from "../components/sub-title"
import courses from "../js/courses"
import certificates from "../js/certificates"

const StudiesSection = (props) => {
  return (
        <section className="section" id={props.id}>
            <Title className="title" text="Studies"></Title>
            <Text className="parrafo" text="A little resume of my studies and certificates."></Text>
            <SubTitle className="subtitle" text="Courses"></SubTitle>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}> <img src={course.img} alt='School logo' width="64px" height="64px"></img> {course.name} - {course.school} </li>
                ))}
            </ul>
            <SubTitle className="subtitle" text="Certificates"></SubTitle>
            <ul>
                {certificates.map((certificate) => (
                    <li key={certificate.id}> <img src={certificate.img} alt='School logo' width="64px" height="64px"></img> {certificate.name} - {certificate.school} </li>
                ))}
            </ul>
        </section>
  )
}

export default StudiesSection
