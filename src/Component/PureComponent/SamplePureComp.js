import React, { Component, PureComponent } from 'react'

export class SamplePureComp extends PureComponent{
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
    console.log('Pure compoenent')
    return (
      <div>
        <h1>Pure Component</h1>
        </div>
    )
  }
}

export default SamplePureComp
