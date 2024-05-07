import React from "react"
import "./Header.css"

function Header({ navbarToggle }) {
  return (
    <header>
      <a href="#" className="sidebarToggle" onClick={navbarToggle}>
        <i className="bi bi-list"></i>
      </a>
      <div className="userInfo">
        <a href="#" className="icon">
          <i className="bi bi-heart"></i>
          <span className="liked">0</span>
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
