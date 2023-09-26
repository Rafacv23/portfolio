import React from "react"
import "./styles/App.css"
import Header from "./container/header"
import Main from "./container/main"
import NavBar from "./container/nav-bar"

function App () {
  return (
    <>
    <Header></Header>
    <NavBar></NavBar>
      <Main></Main>
    </>
  )
}

export default App
