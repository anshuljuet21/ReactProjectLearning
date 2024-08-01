import React, { Component } from 'react'

export class EBinding4 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg:'Good Afternoon'
        }
        this.changeMsg=this.changeMsg.bind(this)
    }
    changeMsg(){
        this.setState({msg:'Good Day!'})
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

export default EBinding4
