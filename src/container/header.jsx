import React from "react"
import Btn from "../components/btn"

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
        <header className='header'>
                <Btn text="Hire Me 🤝" className="hire-me-btn hvr-rectangle-out" onClick={() => scrollToSection("contact")}></Btn>
                <Btn text="Home" className="header-btn hvr-underline-from-center" onClick={() => scrollToSection("home")}></Btn>
                <Btn text="Skills" className="header-btn hvr-underline-from-center" onClick={() => scrollToSection("skills")}></Btn>
                <Btn text="Projects" className="header-btn hvr-underline-from-center" onClick={() => scrollToSection("portfolio")}></Btn>
                {/* <Btn text="Jobs" className="header-btn" onClick={() => scrollToSection("jobs")}></Btn> */}
                <Btn text="Studies" className="header-btn hvr-underline-from-center" onClick={() => scrollToSection("studies")}></Btn>
        </header>
  )
}

export default Header
