import React, { Component } from 'react'
import BinList from '../bins/BinList'
import Updates from './Updates'
import {connect} from 'react-redux'

class Dashboard extends Component {
  render() {
    const {bins} = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <BinList bins={bins} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Updates />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        bins: state.bin.bins
    }
}

export default connect(mapStateToProps)(Dashboard)