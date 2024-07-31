import React, { Component } from 'react'

export class StateDemo extends Component {
    constructor() {
        super()
        this.state={
            UserName:'Guest',
            Code:'A7809'
        }
    }
    login(){
        this.setState({UserName:'Admin'})
    }
    render() {
        return (
            <div>
                <h1>Welcome,{this.state.UserName}-{this.state.Code}</h1>
                <button onClick={()=>this.login()}>Login</button>
            </div>
        )
    }
}