import React, { useState } from "react"
import "../styles/mobile.css"

const NavBar = () => {
  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setActive(!active)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    toggleActive()
  }
  return (
        <nav className={active ? "nav-active" : "nav"}>
            <button onClick={() => toggleActive()} className="display-btn"></button>
            <button onClick={() => scrollToSection("contact")} className={active ? "bar-btn-active" : "bar-btn"}>Hire Me 🤝</button>
            <button onClick={() => scrollToSection("home")} className={active ? "bar-btn-active" : "bar-btn"}>Home</button>
            <button onClick={() => scrollToSection("skills")} className={active ? "bar-btn-active" : "bar-btn"}>Skills</button>
            <button onClick={() => scrollToSection("portfolio")} className={active ? "bar-btn-active" : "bar-btn"}>Projects</button>
            <button onClick={() => scrollToSection("studies")} className={active ? "bar-btn-active" : "bar-btn"}>Studies</button>
        </nav>
  )
}

export default NavBar
