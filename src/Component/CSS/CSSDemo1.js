import React, { Component } from 'react'
import './MyCSS.css'

export class CSSDemo1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        status:true
         
      }
    }
    
  render() {
    const cssclass=this.state.status?'online':'offline'
    return (
      <div>
        <p className={cssclass}>Hi from CSS Component</p>
      </div>
    )
  }
}

export default CSSDemo1
