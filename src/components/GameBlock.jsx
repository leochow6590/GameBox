import { useState } from "react"
import { useEffect } from "react"
import "./GameBlock.css"

function GameBlock({ game }) {
  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="gameBlock">
          <img src={game.background_image} className="img-fluid" />
          <a href="#" className="seeDetail">
            <i className="bi bi-sign-turn-slight-left"></i>
          </a>
          <a href="#" className="addFavorite">
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
              {game.genres.map((genre) => (
                <div key={genre.id} className="gameGenre">
                  {genre.name}
                </div>
              ))}
            </div>
            <div className="gamePlatforms">
              <i className="bi bi-display"></i>
              {game.parent_platforms.map((platform) => (
                <div key={platform.platform.id} className="gamePlatform">
                  {platform.platform.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GameBlock
