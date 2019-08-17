import React, {FC} from 'react'
import {Link} from 'gatsby'

import './Sidebar.css'

export const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <header className="sidebar__logo">@influxdata/giraffe</header>
      <div className="sidebar__contents">
        <Link className="sidebar__link" to="/">
          Home
        </Link>
        <Link className="sidebar__link" to="/">
          Installation
        </Link>
        <h2 className="sidebar__header">Tour</h2>
        <Link className="sidebar__link" to="/">
          Your First Graph
        </Link>
        <h2 className="sidebar__header">Examples</h2>
        <Link className="sidebar__link" to="/basicLinePlot">
          Basic Line Plot
        </Link>
        <h2 className="sidebar__header">API Reference</h2>
        <h2 className="sidebar__header">FAQ</h2>
        <Link className="sidebar__link" to="/">
          Configuration and JSX
        </Link>
        <Link className="sidebar__link" to="/">
          Comparison to Other Libraries
        </Link>
      </div>
      <footer className="sidebar__footer">
        <Link className="sidebar__link" to="/">
          GitHub
        </Link>
      </footer>
    </div>
  )
}
