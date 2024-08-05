import React, { Component } from 'react'
import Child1 from './Child1'

export class Parent1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Anshul'
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({name:"Anshul"})
        },2000)
    }
    
  render() {
    console.log('---Parent component---')
    return (
      <div>
        <h1>Parent1</h1>
        <Child1 />
      </div>
    )
  }
}

export default Parent1
