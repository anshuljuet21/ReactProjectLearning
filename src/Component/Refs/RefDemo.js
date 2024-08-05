import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      this.nameref=React.createRef()
    }

    componentDidMount()
    {
        this.nameref.current.placeholder='Entr Name Here'
        this.nameref.current.style.color='red'
        this.nameref.current.focus()
        console.log(this.nameref)
    }

    clickHandler=()=>{
        alert(this.nameref.current.value)
    }
    
  render() {
    return (
      <div>
        Name:
        <input type="text" id="name" name="name" ref={this.nameref} />
        <br/>
         <button onClick={this.clickHandler}>Click Handler</button>
      </div>
    )
  }
}

export default RefDemo
