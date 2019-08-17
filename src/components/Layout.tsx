import * as React from 'react'
import {FC} from 'react'

import {Sidebar} from './Sidebar'
import './Layout.css'

export const Layout: FC = ({children}) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout__content">{children}</div>
    </div>
  )
}

export default Layout
