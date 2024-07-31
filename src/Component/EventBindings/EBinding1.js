import React, { Component } from 'react'

export class EBinding1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg:'Good Morning'
        }
        
    }
    changeMsg=()=>{
        this.setState({msg:'Good Afternoon'})
    }
  render() {
    return (
      <div>
        <h1>Hi User,{this.state.msg}</h1>
        <button onClick={this.changeMsg}>changeMsg</button>
      </div>
    )
  }
}

export default EBinding1
