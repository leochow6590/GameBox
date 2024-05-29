import React, { useContext } from "react"
import { AppContext } from "../App"
import "./Header.css"

function Header({ navbarToggle, navActivity }) {
  const { favorite } = useContext(AppContext)
  return (
    <header>
      <a href="#" className="sidebarToggle" onClick={navbarToggle}>
        <i className="bi bi-list"></i>
      </a>
      <div className="userInfo">
        <a
          href="#"
          className="icon"
          onClick={() => navActivity("3", "myFavPage")}
        >
          <i className="bi bi-heart"></i>
          <span className="liked">{favorite.length}</span>
        </a>
        <div className="userCard">
          <i className="bi bi-person userIcon"></i>
          <div className="userName">
            <span>User Name</span>
            <a href="#">View Profile</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
