import React from 'react'
import BinSummary from './BinSummary'
import { Link } from 'react-router-dom'
import styles from '../../App.module.css'

const BinList = ({bins}) => {
  
  return (
    <div className="project-list section">
        {bins && bins.map(bin => {
            return (
              <Link to={'/bin/' + bin.id} key={bin.id}>
                <BinSummary className={styles.bin_container} style={{backgroundColor: 'red'}} bin={bin}/>
                <br></br>
              </Link>
            )
        })}
    </div>
  )
}

export default BinList