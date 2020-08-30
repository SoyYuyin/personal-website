import React from "react"
import { Link } from "gatsby"
import navStyles from './navbar.module.scss'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className={navStyles.navitem} activeClassName={navStyles.activeNavItem} to="/">Homepage</Link>
        </li>
        <li>
          <Link className={navStyles.navitem} activeClassName={navStyles.activeNavItem} to="/about">About</Link>
        </li>
        <li>
          <Link className={navStyles.navitem} activeClassName={navStyles.activeNavItem} to="/blog/">Blog</Link>
        </li>
        <li>
          <Link className={navStyles.navitem} activeClassName={navStyles.activeNavItem} to="/merch/">Merch</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
