import React, { useEffect } from "react"
import { useState } from "react"
import "./NavBar.css"
import NavItem from "./NavItem"

function NavBar({ navItem, fullNavbar, navActivity }) {
  return (
    <div className={`navBar ${fullNavbar ? undefined : "small"}`}>
      <a herf="#" className="logo">
        <i className="bi bi-joystick"></i>
        <span className="brand">GAMEBOX</span>
      </a>
      <ul className="nav">
        {navItem.map((item) => (
          <NavItem key={item.id} item={item} navOnClick={navActivity} />
        ))}
      </ul>
    </div>
  )
}

export default NavBar
