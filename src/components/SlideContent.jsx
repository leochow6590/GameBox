import React from "react"
import SwipeWindow from "./SwipeWindow"

function SlideContent({ game }) {
  return (
    <div className="slider">
      {game.name ? (
        <img src={game.background_image} />
      ) : (
        <img src={game.image} />
      )}
      {game.name && (
        <div className="content">
          <h2>{game.name}</h2>
          <div className="actions">
            <button type="button" className="btn btn-dark">
              Learn More
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SlideContent
