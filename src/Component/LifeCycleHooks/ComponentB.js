
import React, { Component } from 'react'

export class ComponentB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Guest'
      }
      console.log('------- Child Constructor-------------')
    }
    static getDerivedStateFromProps(props,state){
        console.log('--------Child getDerivedStateFromProps-------')
        return null;
    }

    componentDidMount()
    {
        console.log('-------Child ComponentDidMount--------')
    }

    shouldComponentUpdate(){
        console.log('-----Child shouldcompoentupdate--------')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('-------Child getSnapshotbeforeupdate-------------')
        return null
    }

    componentDidUpdate(){
        console.log('------Child componenetDidupdate--------')
    
    }

    setUserNameB(){
        this.setState({name:'Admin'})
    }


    
  render() {
    console.log('----Child Render------')
    return (
      <div>
        <h1>ComponentB</h1>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.setUserNameB()}>Change NameB</button> 
      </div>
    )
  }
}

export default ComponentB
