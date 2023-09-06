import React, { useState, useEffect } from "react"
import "./styles/App.css"
import Header from "./container/header"
import Main from "./container/main"

function App () {
  const [english, setEnglish] = useState(true)
  const [darkMode, setDarkMode] = useState(true)

  const changeLanguage = () => {
    setEnglish(!english)
  }

  const changeDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const body = document.body
    if (darkMode) {
      body.classList.add("dark-body")
      body.classList.remove("light-body")
    } else {
      body.classList.add("light-body")
      body.classList.remove("dark-body")
    }
  }, [darkMode])

  return (
    <>
    <Header changeLanguage={changeLanguage} changeDarkMode={changeDarkMode} darkMode={darkMode} english={english}></Header>
      <Main></Main>
    </>
  )
}

export default App
