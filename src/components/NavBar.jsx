import React from "react"
import { useState } from "react"
import "./NavBar.css"
import NavItem from "./NavItem"
import navData from "../data/navData"

function NavBar({ fullNavbar }) {
  const [navItem, setNavData] = useState(navData)
  return (
    <div className={`navBar ${fullNavbar ? undefined : "small"}`}>
      <a herf="#" className="logo">
        <i className="bi bi-joystick"></i>
        <span className="brand">GAMEBOX</span>
      </a>
      <ul className="nav">
        {navItem.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default NavBar
