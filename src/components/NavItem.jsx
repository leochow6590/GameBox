import React from "react"
import NavBar from "./NavBar"

function NavItem({ item, navOnClick }) {
  return (
    <li>
      <a
        href="#"
        className={`navlogo ${item.active === true ? "active" : "non-active"}`}
        onClick={() => {
          navOnClick(item.id, item.des)
        }}
      >
        <i className={item.icon} />
        <span className="navName">{item.name}</span>
      </a>
    </li>
  )
}

export default NavItem
