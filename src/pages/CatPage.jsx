import React, { useState } from "react"
import "./CatPage.css"
import { genreData } from "../data/genreData"

function CatPage({ gameData, reference }) {
  const initGenres = genreData.results.map((genre) => ({
    id: genre.id,
    name: genre.name,
    active: false,
  }))
  initGenres.unshift({ id: "0", name: "All", active: true })

  const [genres, setGenres] = useState(initGenres)

  return (
    <section id="catPage" className="catPage" ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-8">
            <ul className="genres">
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </section>
  )
}

export default CatPage
