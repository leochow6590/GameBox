import React from "react"
import { useState, useEffect, useRef, useContext } from "react"
import NavBar from "../components/NavBar.jsx"
import HomePage from "./HomePage.jsx"
import "./MainPage.css"
import Header from "../components/Header.jsx"
import CatPage from "./CatPage.jsx"
import MyFavPage from "./MyFavPage.jsx"
import { AppContext } from "../App.jsx"
import navData from "../data/navData"
import DetailPage from "./DetailPage.jsx"

function MainPage() {
  const { favorite, detail, setDetail } = useContext(AppContext)

  const [fullNavbar, SetFullNavbar] = useState("true")
  const [games, setGames] = useState([])
  const [navItem, setNavData] = useState(navData)
  const [prevPage, setPrevPage] = useState("homePage")

  const fetchGameData = async () => {
    const res = await fetch(
      "https://api.rawg.io/api/games?key=e04c7205173549438db3ea11f6455655&page_size=20"
    )
    const rawData = await res.json()
    const dataList = await rawData.results.map((game) => ({
      id: game.id,
      name: game.name,
      genres: game.genres,
      parent_platforms: game.parent_platforms,
      rating: game.rating,
      released: game.released,
      background_image: game.background_image,
    }))
    setGames(dataList)
  }

  useEffect(() => {
    fetchGameData()
  }, [])

  const homeRef = useRef()
  const catRef = useRef()
  const myFavRef = useRef()
  const detailRef = useRef()

  const sections = [
    { name: "homePage", ref: homeRef, active: true },
    { name: "catPage", ref: catRef, active: false },
    { name: "myFavPage", ref: myFavRef, active: false },
    { name: "detailPage", ref: detailRef, active: false },
  ]

  function navbarToggle() {
    SetFullNavbar(!fullNavbar)
  }

  const handleSectionActivity = (des) => {
    setDetail(0)
    sections.map((section) => {
      section.ref.current.id === des
        ? section.ref.current.classList.add("active")
        : section.ref.current.classList.remove("active")
      return section
    })
  }

  const handleNavActivity = (id, des) => {
    setNavData(
      navItem.map((item) => {
        item.id === id
          ? (setPrevPage(item.des), (item.active = true))
          : (item.active = false)
        return item
      })
    )
    handleSectionActivity(des)
  }

  const handleCloseDetail = () => {
    handleSectionActivity(prevPage)
  }

  useEffect(() => {
    detail !== 0 ? handleSectionActivity("detailPage") : undefined
  }, [detail])

  return (
    <main>
      <NavBar
        navItem={navItem}
        fullNavbar={fullNavbar}
        navActivity={handleNavActivity}
      />
      <div className={`mainContent ${fullNavbar ? undefined : "full"}`}>
        <Header navbarToggle={navbarToggle} navActivity={handleNavActivity} />
        <div className="container-fluid">
          {games.length > 0 ? (
            <>
              <HomePage
                gameData={games}
                reference={homeRef}
                navActivity={handleNavActivity}
              />
              <CatPage gameData={games} reference={catRef} />
              <MyFavPage gameData={favorite} reference={myFavRef} />
              <DetailPage
                sectionActivity={handleCloseDetail}
                reference={detailRef}
              />
            </>
          ) : (
            <h3 className="loading">
              Loading, please try to refresh if it takes more than 10 seconds.
            </h3>
          )}
        </div>
      </div>
    </main>
  )
}

export default MainPage
