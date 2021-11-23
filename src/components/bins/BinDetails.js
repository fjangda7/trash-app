import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const BinDetails = (props) => {
    const {bin} = props;
    if (bin) {
      return(
        <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Bin - {bin.number}</span>
            <p>{bin.details}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Last collected by {bin.CollectorFirstName} {bin.CollectorLastName}</div>
            <div>2nd September, 2am</div>
            <div>Location coordinates - GPS</div>
          </div>
          <div className="card-action grey lighten-4 red-text">
            <div>Needs to be picked up - FULL</div>
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
    bin: bin
  }

}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'bins'}
  ])
)(BinDetails)