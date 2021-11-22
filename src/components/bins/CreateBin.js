import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createBin } from '../../store/actions/binActions'

class CreateBin extends Component {
  state = {
    number: '',
    details: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createBin(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Set Up a New Bin</h5>
          <div className="input-field">
            <input type="text" id='number' onChange={this.handleChange} />
            <label htmlFor="number">Bin Number</label>
          </div>
          <div className="input-field">
            <textarea id="details" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="details">Bin Details</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBin: (bin) => dispatch(createBin(bin))
    }
}

export default connect(null, mapDispatchToProps)(CreateBin)