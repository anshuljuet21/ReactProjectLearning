import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter:0
        }
        this.inc=this.increment.bind(this)
    }
    increment(){
        this.setState({counter:this.state.counter+1})
    }
  render() {
    return (
      <div>
        <h1>Counter value is displaying from Parent Component</h1>
        <h1>Counter:{this.state.counter}</h1>
        <ChildComponent handle={this.inc}/>
      </div>
    )
  }
}

export default ParentComp
