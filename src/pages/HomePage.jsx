import { useState } from "react"
import { useEffect } from "react"
import "./HomePage.css"
import SwipeWindow from "../components/SwipeWindow"
import GameBlock from "../components/GameBlock"

function HomePage({ gameData, reference }) {
  return (
    <section id="homePage" className="homePage active" ref={reference}>
      <div className="container-fluid">
        <div className="row">
          <SwipeWindow gameData={gameData} />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h2 className="sectionTitle">Top Rated Games</h2>
          </div>
          <div className="col-lg-6 d-flex justify-content-end align-items-center">
            <a href="#" className="showMore">
              Show More ...
            </a>
          </div>
        </div>
        <div className="row">
          {gameData.slice(0, 4).map((game) => (
            <GameBlock key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomePage
