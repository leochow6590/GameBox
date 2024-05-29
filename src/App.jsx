import React, { useState } from "react"
import MainPage from "./pages/MainPage"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./App.css"

export const AppContext = React.createContext()

function App() {
  const [favorite, setFavorite] = useState([])
  const [detail, setDetail] = useState(0)

  return (
    <AppContext.Provider value={{ favorite, setFavorite, detail, setDetail }}>
      <MainPage />
    </AppContext.Provider>
  )
}

export default App
