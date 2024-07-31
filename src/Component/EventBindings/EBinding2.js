import React, { Component } from 'react'

export class EBinding2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg:'Good Afternoon'
        }
        
    }
    changeMsg(){
        this.setState({msg:'Good Evening'})
    }
  render() {
    return (
      <div>
        <h1>Hi User,{this.state.msg}</h1>
        <button onClick={()=>this.changeMsg()}>changeMsg</button>
      </div>
    )
  }
}

export default EBinding2
