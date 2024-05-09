import React from "react"
import "./MyFavPage.css"

function MyFavPage({ gameData, reference }) {
  return (
    <section id="myFavPage" className="myFavorite" ref={reference}>
      <h1>My Favorite</h1>
    </section>
  )
}

export default MyFavPage
