import React, { Component } from 'react'

export class StateCounter extends Component {
    constructor() {
        super()
        this.state={
            Counter:5
        }
    }
    Increment(){
        this.setState({Counter: this.state.Counter+1})
    }
    Decrement(){
        this.setState({Counter: this.state.Counter-1})
    }
    render() {
        return (
            <div>
                <h1>Current Counter is:{this.state.Counter}</h1>
                <button onClick={()=>this.Increment()}>+</button>
                <button onClick={()=>this.Decrement()}>-</button>
            </div>
        )
    }
}