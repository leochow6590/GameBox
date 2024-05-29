import React, { useContext, useEffect, useState } from "react"
import "./DetailPage.css"
import { AppContext } from "../App"
import SwipeWindow from "../components/SwipeWindow"

function DetailPage({ sectionActivity, reference }) {
  const { detail } = useContext(AppContext)
  const [gameData, setGameData] = useState()
  const [screenshots, setScreenshots] = useState()

  const fetchGameData = async () => {
    if (detail !== 0) {
      console.log("detailfetchtest")
      const res1 = await fetch(
        `https://api.rawg.io/api/games/${detail}?key=a4d3a18a2a4f4409b68fdbede271138d`
      )
      const data1 = await res1.json()
      setGameData(data1)
      const res2 = await fetch(
        `https://api.rawg.io/api/games/${detail}/screenshots?key=a4d3a18a2a4f4409b68fdbede271138d`
      )
      const data2 = await res2.json()
      setScreenshots(data2.results)
      console.log(data2.results)
    }
  }

  useEffect(() => {
    fetchGameData()
    console.log("effect")
  }, [detail])

  const handleBackPage = () => {}

  return (
    <section id="detailPage" className="detailPage" ref={reference}>
      {gameData && screenshots && (
        <>
          <div className="container-fluid">
            <img src={gameData.background_image} alt="" className="bgImg" />
            <div className="row mt-3 mb-3 subHeader">
              <h1 className="gameName col-lg-11">{gameData.name}</h1>
              <a
                href="#"
                className="prevPage col-lg-1"
                onClick={() => sectionActivity()}
              >
                <i className="bi bi-x-lg"></i>
              </a>
            </div>
            <div className="row">
              <div className="col-lg-5 swiperContainer">
                <SwipeWindow gameData={screenshots} />
              </div>

              <div className="col-lg-7 detailsContainer">
                <div className="gameRating">
                  <i className="bi bi-star-fill">Rating:</i>
                  {gameData.rating}/5
                </div>
                <div className="gameReleaseDate">
                  <i className="bi bi-calendar-event">Released On:</i>
                  {gameData.released}
                </div>
                <div className="gameDevelopers">
                  <i className="bi bi-gear">Developers:</i>
                  {gameData.developers.map((developer) => (
                    <div key={developer.id}>{developer.name}</div>
                  ))}
                </div>
                <div className="gamePublishers">
                  <i className="bi bi-send">Publishers:</i>
                  {gameData.publishers.map((publisher) => (
                    <div key={publisher.id}>{publisher.name}</div>
                  ))}
                </div>
                <div className="gameGenres">
                  <i className="bi bi-grid">Genres:</i>
                  {gameData.genres
                    ? gameData.genres.map((genre) => (
                        <div key={genre.id} className="gameGenre">
                          {genre.name}
                        </div>
                      ))
                    : ""}
                </div>
                <div className="gamePlatforms">
                  <i className="bi bi-display">Platforms:</i>
                  {gameData.parent_platforms
                    ? gameData.parent_platforms.map((platform) => (
                        <div
                          key={platform.platform.id}
                          className="gamePlatform"
                        >
                          {platform.platform.name}
                        </div>
                      ))
                    : ""}
                </div>
                <div className="gameDescription">
                  <i className="bi bi-text-paragraph">Description:</i>
                  <p>{gameData.description_raw}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default DetailPage
