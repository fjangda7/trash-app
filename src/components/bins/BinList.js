import React from 'react'
import BinSummary from './BinSummary'

const BinList = ({bins}) => {
  return (
    <div className="project-list section">
        {bins && bins.map(bin => {
            return (
                <BinSummary bin={bin} key={bin.id}/>
            )
        })}
      
    </div>
  )
}

export default BinList