import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom'
import moment from 'moment'

const BinDetails = (props) => {
    const {bin, auth} = props;
    if (!auth.uid) return <Redirect to='/signin'/>
    const pickedUp = <div className="red-text">BIN FULL - Needs to be picked up</div>

    if (bin) {
      return(
        <div className="container section bin-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Bin - {bin.number}</span>
            <p>{bin.details}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text center">
            <div>Set up on {moment(bin.setUpAt.toDate().toString()).format('MMMM Do YYYY, h:mm:ss a')}</div>
            <div>Location coordinates - {bin.location}</div>
            <br></br>
            {(bin.needsToBePickedUp === 'true') ? pickedUp : null}
          </div>
        </div>
      </div>
      )
    } else {
      return (
        <div className="container section center project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Loading bin...</span>
          </div>
        </div>
      </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const bins = state.firestore.data.bins;
  const bin = bins ? bins[id] : null;
  return{
    bin: bin,
    auth: state.firebase.auth
  }

}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'bins'}
  ])
)(BinDetails)