import React from "react"
import { useState, useEffect } from "react"
import NavBar from "../components/NavBar.jsx"
import HomePage from "./HomePage.jsx"
import { data } from "../data/gameData.js"
import "./MainPage.css"
import Header from "../components/Header.jsx"

function MainPage() {
  const [fullNavbar, SetFullNavbar] = useState("true")
  const [gameData, setGameData] = useState(data.results)
  // useEffect(() => {
  //   fetch(
  //     "https://api.rawg.io/api/games?key=a4d3a18a2a4f4409b68fdbede271138d&page_size=20"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setGameData(data.results))
  //     .catch((err) => console.error(err))
  //   setGameData(data.results)
  //   console.log(gameData.map((m) => m.id))
  // }, [])

  function navbarToggle() {
    SetFullNavbar(!fullNavbar)
  }

  return (
    <main>
      <NavBar fullNavbar={fullNavbar} />
      <div className={`mainContent ${fullNavbar ? undefined : "full"}`}>
        <Header navbarToggle={navbarToggle} />
        <div className="container-fluid">
          <HomePage gameData={gameData} />
        </div>
      </div>
    </main>
  )
}

export default MainPage
