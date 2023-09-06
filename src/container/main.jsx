import React from "react"
import HomeSection from "./home-section"
import PortfolioSection from "./portfolio-section"
import StudiesSection from "./studies-section"
import SkillsSection from "./skills-section"
import ContactForm from "./contact-form"
import Footer from "./footer"

const Main = () => {
  return (
        <main className="main">
            <HomeSection id="home"></HomeSection>
            <SkillsSection id="skills"></SkillsSection>
            <PortfolioSection id="portfolio"></PortfolioSection>
            {/* <JobsSection id="jobs"></JobsSection> */}
            <StudiesSection id="studies"></StudiesSection>
            <ContactForm id="contact"></ContactForm>
            <Footer></Footer>
        </main>
  )
}

export default Main
