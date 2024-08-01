import React, { Component } from 'react'

export class CRender3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedin:false
      }
    }
    
  render() {
    return (
        this.state.isloggedin?
      <div>
        <h1>Welcome AdminTrue</h1>
      </div>:
      <div>
        <h1>Welcome AdminFalse</h1>
      </div>
    )
  }
}

export default CRender3
