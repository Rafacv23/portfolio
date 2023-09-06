import React from "react"
import Btn from "../components/btn"
import Box from "../components/box"
import Title from "../components/title"
import SubTitle from "../components/sub-title"
import Text from "../components/text"

const HomeSection = (props) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
        <section className="section-home" id={props.id}>
            <div className='row full'>
                <Box className="home-box">
                    <SubTitle className="subtitle purple" text="Hi, my name is"></SubTitle>
                    <Title className="title white" text="Rafa Canosa"></Title>
                        <Box className="rrss-box">
                            <a href='https://github.com/Rafacv23?tab=repositories' target='_blank' rel="noreferrer">
                                <Btn className="github-btn-rrss"></Btn>
                            </a>
                            <a href='https://www.linkedin.com/in/rafa-canosa-vallejo-6328a5194' target='_blank' rel="noreferrer">
                                <Btn className="linkedin-btn"></Btn>
                            </a>
                        </Box>
                    <Btn className="hire-me-btn hvr-rectangle-out" text="Hire Me" onClick={() => scrollToSection("contact")}></Btn>
                </Box>
                <Box className="photo-box"></Box>
            </div>
            <Box className="about-box">
                <SubTitle className="about-me-title" text="About me"></SubTitle>
                <Text className="about-me-p" text="With over 2 years of hands-on experience in crafting web applications, I have honed my skills in programming languages essential for the web, along with a proficiency in designing high-performance applications. I bring a proactive approach to resolving challenges and a dedication to effective collaboration."></Text>
            </Box>
        </section>
  )
}

export default HomeSection
