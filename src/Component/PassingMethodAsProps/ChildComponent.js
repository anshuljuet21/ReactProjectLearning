import React, { Component } from 'react'

export class ChildComponent extends Component {
  render() {
    return (
      <div>
        <h1>Button is from child Component</h1>
        <button onClick={this.props.handle}>Increment</button>
      </div>
    )
  }
}

export default ChildComponent
