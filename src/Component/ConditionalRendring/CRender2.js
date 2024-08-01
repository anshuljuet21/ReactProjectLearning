import React, { Component } from 'react'

export class CRender2 extends Component {
    constructor(props){
        super(props)

        this.state ={
            isloggedin:true
    }
    }
  render() {
    let userid
    if(this.state.isloggedin)
        {
            userid="AdminTrue"
        }
        else{
            userid="AdminFalse"
        }
    return (
        <h1>{userid}</h1>
    )
  }
}

export default CRender2
