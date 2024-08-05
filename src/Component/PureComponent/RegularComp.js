import React, { Component } from 'react'

export class RegularComp extends Component {
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
    console.log('Regular compoenent')
    return (
      <div>
        <h1>Regular compoenent</h1>
         </div>
    )
  }
}

export default RegularComp
