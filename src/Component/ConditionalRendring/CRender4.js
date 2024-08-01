import React, { Component } from 'react'

export class CRender4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         issloggedin:true
      }
    }
    
  render() {
    return (
        this.state.issloggedin &&
      <div>
        <h1>Welcome Admin from Short circuit operator</h1>
      </div>
    )
  }
}

export default CRender4
