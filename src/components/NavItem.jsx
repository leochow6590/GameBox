import React from "react"
import NavBar from "./NavBar"

function NavItem({ item }) {
  return (
    <li>
      <a href="#" className="navlogo">
        <i className={item.icon} />
        <span className="navName">{item.name}</span>
      </a>
    </li>
  )
}

export default NavItem
