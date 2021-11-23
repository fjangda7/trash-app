import React from 'react'
import BinSummary from './BinSummary'
import { Link } from 'react-router-dom'

const BinList = ({bins}) => {
  return (
    <div className="project-list section">
        {bins && bins.map(bin => {
            return (
              <Link to={'/bin/' + bin.id} key={bin.id}>
                <BinSummary bin={bin}/>
              </Link>
            )
        })}
      
    </div>
  )
}

export default BinList