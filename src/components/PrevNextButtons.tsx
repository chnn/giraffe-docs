import React, {FC} from 'react'
import {Link} from 'gatsby'
import {ChevronRight} from 'react-feather'
import {ChevronLeft} from 'react-feather'

import {DOCS_TOC} from '../constants'
import './PrevNextButtons.css'

const pathsAreEqual = (a, b) => a.replace(/\//g, '') === b.replace(/\//g, '')

const findPrevNext = (path: string) => {
  for (const {links} of DOCS_TOC) {
    const index = links.findIndex(({url}) => pathsAreEqual(url, path))

    if (index === -1) {
      continue
    }

    return [links[index - 1], links[index + 1]]
  }

  return [null, null]
}

interface Props {
  path: string
}

export const PrevNextButtons: FC<Props> = ({path}) => {
  const [prev, next] = findPrevNext(path)

  if (!next && !prev) {
    return null
  }

  return (
    <div className="prev-next">
      <div className="prev-next__prev">
        {prev && (
          <Link to={prev.url} className="prev-next__link">
            <ChevronLeft size={16} /> {prev.name}
          </Link>
        )}
      </div>
      <div className="prev-next__next">
        {next && (
          <Link to={next.url} className="prev-next__link">
            {next.name} <ChevronRight size={16} />
          </Link>
        )}
      </div>
    </div>
  )
}
