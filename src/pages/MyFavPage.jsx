import React from "react"
import "./MyFavPage.css"
import GameBlock from "../components/GameBlock"

function MyFavPage({ gameData, reference }) {
  return (
    <section id="myFavPage" className="myFavorite" ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>My Favorite</h1>
        </div>
        <div className="row gamesDisplay">
          {gameData.length === 0 ? (
            <h3>No favorite games</h3>
          ) : (
            gameData.map((game) => (
              <GameBlock key={game.id} game={game}></GameBlock>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default MyFavPage
