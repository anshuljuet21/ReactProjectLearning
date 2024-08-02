import React, { Component } from 'react'

export class Form1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',mobile:'',city:''
      }
    }

    changeNameHandler=(event)=>{
        console.log(event.target.value)
        this.setState({name:event.target.value})
    }

    changeMobileHandler=(event)=>{
        console.log(event.target.value)
        this.setState({mobile:event.target.value})
    }

    changeCityHandler=(event)=>{
        console.log(event.target.value)
        this.setState({city:event.target.value})
    }

    printStateValue=(event)=>{
        event.preventDefault()
        console.log(this.state)
        
    }

    resetState=(event)=>{
        this.setState({name:'',mobile:'',city:''})
    }
    
  render() {
    return (
      <div>
        <div className='alert alert-success'>User Signup</div>
        <form onSubmit={this.printStateValue}>
            Name:
            <input type="text" defaultValue={this.state.name}
            onChange={this.changeNameHandler}/> {/*this will set the value of state using changeNameHandler*/}
            <br/>
            Mobile:
            <input type="text" defaultValue={this.state.mobile}
            onChange={this.changeMobileHandler}/>
            <br/>
            City:
            <select defaultValue={this.state.city} onChange={this.changeCityHandler}>
                <option value="">Select</option>
                <option value="PNQ">Pune</option>
                <option value="MUM">Mumbai</option>
                <option value="DEL">Delhi</option>
            </select>
            <br/>
            <input type="reset" onClick={this.resetState}/>
            <input type="submit"/>
        </form>
        
      </div>
    )
  }
}

export default Form1
