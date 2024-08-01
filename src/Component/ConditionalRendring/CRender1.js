import React, { Component } from 'react'

export class CRender1 extends Component {
    constructor(props){
        super(props)

        this.state ={
            isloggedin:false
    }
    }
  render() {
    if(this.state.isloggedin){
    return (
      <div>
        <h1>Hello Anshul from CRender1</h1>
      </div>
    )
    }
    else{
        return(
            <div>
                <h1>Hello Anshul when condition is false from CRender1</h1>
            </div>
        )
    }
  }
}

export default CRender1
