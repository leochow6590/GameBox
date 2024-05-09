import React from "react"
import { useState, useEffect, useRef } from "react"
import NavBar from "../components/NavBar.jsx"
import HomePage from "./HomePage.jsx"
import { gameData } from "../data/gameData.js"
import "./MainPage.css"
import Header from "../components/Header.jsx"
import CatPage from "./CatPage.jsx"
import MyFavPage from "./MyFavPage.jsx"

function MainPage() {
  const [fullNavbar, SetFullNavbar] = useState("true")
  const [games, setGames] = useState(gameData.results)

  const homeRef = useRef()
  const catRef = useRef()
  const myFavRef = useRef()

  const sections = [
    { name: "homePage", ref: homeRef, active: true },
    { name: "catPage", ref: catRef, active: false },
    { name: "myFavPage", ref: myFavRef, active: false },
  ]

  const handleSectionsActivity = (des) => {
    sections.map((section) => {
      section.ref.current.id === des
        ? section.ref.current.classList.add("active")
        : section.ref.current.classList.remove("active")
      return section
    })
  }

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
      <NavBar
        fullNavbar={fullNavbar}
        sectionActivity={handleSectionsActivity}
      />
      <div className={`mainContent ${fullNavbar ? undefined : "full"}`}>
        <Header navbarToggle={navbarToggle} />
        <div className="container-fluid">
          <HomePage gameData={games} reference={homeRef} />
          <CatPage gameData={games} reference={catRef} />
          <MyFavPage gameData={games} reference={myFavRef} />
        </div>
      </div>
    </main>
  )
}

export default MainPage
