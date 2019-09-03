import React, {FC} from 'react'
import {Link} from 'gatsby'
import {ExternalLink} from 'react-feather'

import './Header.css'

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="header__link header__logo">
          🦒
        </Link>
        <Link
          to="/docs"
          getProps={({isPartiallyCurrent}) =>
            isPartiallyCurrent
              ? {className: 'header__link header__link--active'}
              : {className: 'header__link'}
          }
        >
          Documentation
        </Link>
      </div>
      <div className="header__right">
        <div className="header__version">v0.16.2</div>
        <a
          href="https://github.com/influxdata/giraffe"
          target="_blank"
          className="header__link"
        >
          GitHub <ExternalLink size={16} className="header__link-icon" />
        </a>
      </div>
    </header>
  )
}
