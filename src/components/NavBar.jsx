import React from "react"
import { useState } from "react"
import "./NavBar.css"
import NavItem from "./NavItem"
import navData from "../data/navData"

function NavBar({ fullNavbar, sectionActivity }) {
  const [navItem, setNavData] = useState(navData)

  const handleNavActivity = (id, des) => {
    setNavData(
      navItem.map((item) => {
        item.id === id ? (item.active = true) : (item.active = false)
        return item
      })
    )
    sectionActivity(des)
  }

  return (
    <div className={`navBar ${fullNavbar ? undefined : "small"}`}>
      <a herf="#" className="logo">
        <i className="bi bi-joystick"></i>
        <span className="brand">GAMEBOX</span>
      </a>
      <ul className="nav">
        {navItem.map((item) => (
          <NavItem key={item.id} item={item} navOnClick={handleNavActivity} />
        ))}
      </ul>
    </div>
  )
}

export default NavBar
