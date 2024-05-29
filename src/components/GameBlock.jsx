import React, { useContext } from "react"
import "./GameBlock.css"
import { AppContext } from "../App"

function GameBlock({ game }) {
  const { favorite, setFavorite, detail, setDetail } = useContext(AppContext)

  const handleAddFavorite = (game) => {
    setFavorite([...favorite, game])
  }

  const handleRemovefavorite = (game) => {
    setFavorite(favorite.filter((item) => item.id !== game.id))
  }

  const handleShowDetail = (game) => {
    setDetail(game.id)
    console.log(detail)
  }

  return (
    <>
      <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
        <div className="gameBlock">
          <div className="imgContainer">
            <img src={game.background_image} className="img-fluid" />
          </div>

          <a
            href="#"
            className="seeDetail"
            onClick={() => handleShowDetail(game)}
          >
            <i className="bi bi-sign-turn-slight-left"></i>
          </a>
          <a
            href="#"
            className={`addFavorite ${
              favorite.includes(game) ? "active" : undefined
            }`}
            onClick={
              favorite.includes(game)
                ? () => handleRemovefavorite(game)
                : () => handleAddFavorite(game)
            }
          >
            <i className="bi bi-heart-fill"></i>
          </a>
          <div className="gameInfo">
            <div className="gameTitle">{game.name}</div>
            <div className="gameRating">
              <i className="bi bi-star-fill"></i>
              {game.rating}/5
            </div>
            <div className="gameReleaseDate">
              <i className="bi bi-calendar-event"></i>
              {game.released}
            </div>
            <div className="gameGenres">
              <i className="bi bi-grid"></i>
              {game.genres
                ? game.genres.map((genre) => (
                    <div key={genre.id} className="gameGenre">
                      {genre.name}
                    </div>
                  ))
                : ""}
            </div>
            <div className="gamePlatforms">
              <i className="bi bi-display"></i>
              {game.parent_platforms
                ? game.parent_platforms.map((platform) => (
                    <div key={platform.platform.id} className="gamePlatform">
                      {platform.platform.name}
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GameBlock
