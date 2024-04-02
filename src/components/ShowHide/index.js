// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    secondName: false,
  }

  render() {
    const {firstName, secondName} = this.state
    return (
      <div className="main-container">
        <div className="show-hide-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="buttons-container">
            <button className="button" type="button">
              Show/Hide Firstname
            </button>
            <button className="button" type="button">
              Show/Hide Lastname
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
