import React, { Component } from 'react'

export class StateCounter1 extends Component {
    constructor() {
        super()
        this.state={
            Count:0
        }
    }
    setvalue()
    {
        var Counter=parseInt(document.getElementById('inp').value)
        this.setState({Count:Counter})
    }

  render() {
    return (
      <div>
        <input type='range' min={0} max={100} id='inp' value={this.state.Count} onChange={()=>this.setvalue()}/>
        <h1>{this.state.Count}</h1>
      </div>
    )
  }
}

export default StateCounter1
