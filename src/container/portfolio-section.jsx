import React from "react"
import Title from "../components/title"
import Card from "../components/card"
import Box from "../components/box"
import Btn from "../components/btn"
import Text from "../components/text"
import projects from "../js/projects"
import "../styles/projects.css"

const PortfolioSection = (props) => {
  return (
    <section className="section-projects" id={props.id}>
            <Title className="title" text="My Projects"></Title>
            <Text className="parrafo" text="Some things I've build with love, expertise and a pinch of magical ingredients."></Text>
            <Box className="projects">
                {projects.map((project) => (
                    <Card key={project.id} className={`project-card ${project.type === "idle" ? "project-card-idle" : project.type === "pomodoro" ? "project-card-pomodoro" : project.type === "timer" ? "project-card-timer" : project.type === "f1" ? "project-card-f1" : project.type === "quiz" ? "project-card-quiz" : project.type === "currency-converter" ? "project-card-converter" : ""}`}>
                        <div className={`${project.type === "idle" ? "project-card-content-idle" : project.type === "pomodoro" ? "project-card-content" : project.type === "timer" ? "project-card-content-timer" : project.type === "f1" ? "project-card-content-f1" : project.type === "quiz" ? "project-card-content-quiz" : project.type === "currency-converter" ? "project-card-content-converter" : ""}`}>
                            <Title className="subtitle white" text={project.name}></Title>
                            <div className='row'>
                                {project.languages.map((language) => (
                                    <Text key={language.id} className={`language ${language.toLowerCase() === "react" ? "react" : "css"}`} text={language}></Text>
                                ))}
                            </div>
                            <div className='row'>
                                <a href={project.live} target='_blank' rel='noreferrer'>
                                    <Btn className="live-btn hvr-grow-shadow"></Btn>
                                </a>
                                <a href={project.github} target='_blank' rel='noreferrer'>
                                    <Btn className="github-btn hvr-grow-shadow"></Btn>
                                </a>
                            </div>
                        </div>
                    </Card>
                ))}
            </Box>
    </section>
  )
}

export default PortfolioSection
