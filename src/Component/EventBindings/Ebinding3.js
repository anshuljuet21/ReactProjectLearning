import React, { Component } from 'react'

export class Ebinding3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg:'Good Afternoon'
        }
        
    }
    changeMsg(){
        this.setState({msg:'Good Day!'})
    }
  render() {
    return (
      <div>
        <h1>Hi User,{this.state.msg}</h1>
        <button onClick={this.changeMsg.bind(this)}>changeMsg</button>
      </div>
    )
  }
}

export default Ebinding3
