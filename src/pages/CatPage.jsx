import React, { useEffect, useState } from "react"
import { genreData } from "../data/genreData"
import GameBlock from "../components/GameBlock"
import Select from "react-select"
import debounce from "lodash.debounce"

import "./CatPage.css"
import { colors } from "@mui/material"
import { SearchTwoTone } from "@mui/icons-material"

function CatPage({ gameData, reference }) {
  const genres = genreData.results.map((genre) => ({
    id: genre.id,
    value: genre.id,
    label: genre.name,
  }))
  genres.unshift({ id: "0", value: 0, label: "All" })

  const orderings = [
    { id: 0, value: "", label: "Popularity" },
    { id: 1, value: "released", label: "Released" },
    { id: 2, value: "rating", label: "Rating" },
  ]

  const [games, setGames] = useState([])

  const [genreSelect, setGenreSelect] = useState(0)
  const [orderingSeclect, setorderingSelect] = useState("")
  const [searchString, setSearchString] = useState("")

  const fetchGameData = async (genre, ordering, searchString) => {
    const res = await fetch(
      `https://api.rawg.io/api/games?${
        genre != 0 ? "genres=" + genre : ""
      }&ordering=-${ordering}&search=${searchString}
      &search_exact=false&key=e04c7205173549438db3ea11f6455655`
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

  const handleSelectGenre = (e) => {
    setGenreSelect(e.value)
    fetchGameData(e.value, orderingSeclect, searchString)
  }
  const handleSelectOrdering = (e) => {
    setorderingSelect(e.value)
    fetchGameData(genreSelect, e.value, searchString)
  }

  const handleSearchString = debounce((e) => {
    setSearchString(e.target.value)
    fetchGameData(genreSelect, orderingSeclect, e.target.value)
  }, 1000)

  const selectSytle = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? "#ff9505" : "none",
      backgroundColor: "#353531",
      borderRadius: "10px",
      width: "150px",
      border: "none",
      boxShadow:
        "-5px -5px 15px rgba(255, 255, 255, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.5)",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      background: "white",
      background: isSelected ? "#ff9505" : isFocused ? "#ffe7c7" : undefined,
      color: "#353531",
    }),
  }

  return (
    <section id="catPage" className="catPage" ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row mb-3">
          <div className="col-lg-8">
            <div className="genres">
              <span className="catSubTitle">Genres:</span>
              <Select
                options={genres}
                defaultValue={genres[0]}
                onChange={handleSelectGenre}
                className="select"
                styles={selectSytle}
              />
            </div>
            <div className="orderings">
              <span className="catSubTitle">Sort By:</span>
              <Select
                options={orderings}
                defaultValue={orderings[0]}
                onChange={handleSelectOrdering}
                className="select"
                styles={selectSytle}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row mb-2">
              <div className="search">
                <input
                  type="text"
                  name="search"
                  placeholder="Search..."
                  onChange={handleSearchString}
                />
                <i className="bi bi-search"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row gamesDisplay">
          {games.length === 0
            ? gameData.map((game) => (
                <GameBlock key={game.id} game={game}></GameBlock>
              ))
            : games.map((game) => (
                <GameBlock key={game.id} game={game}></GameBlock>
              ))}
        </div>
      </div>
    </section>
  )
}

export default CatPage
