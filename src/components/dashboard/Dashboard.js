import React, { Component } from 'react'
import BinList from '../bins/BinList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const {bins, auth} = this.props;
    if (!auth.uid) return <Redirect to='/signin'/>
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="s12 m6">
            <BinList bins={bins} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
    return {
        bins: state.firestore.ordered.bins || state.bin.bins,
        auth: state.firebase.auth
    }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'bins'}
  ])
)(Dashboard)