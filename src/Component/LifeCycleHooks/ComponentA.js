
import React, { Component } from 'react'
import ComponentB from './ComponentB'

export class ComponentA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         nameA:'Guest'
      }
      console.log('------- Parent Constructor-------------')
    }
    static getDerivedStateFromProps(props,state){
        console.log('--------Parent getDerivedStateFromProps-------')
        return null;
    }

    componentDidMount()
    {
        console.log('-------Parent ComponentDidMount--------')
    }

    shouldComponentUpdate(){
        console.log('-----Parent shouldcompoentupdate--------')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('-------Parent getSnapshotbeforeupdate-------------')
        return null
    }

    componentDidUpdate(){
        console.log('------Parent componenetDidupdate--------')
    
    }

    setUserName(){
        this.setState({nameA:'Admin'})
    }


    
  render() {
    console.log('----Parent Render------')
    return (
      <div>
        <h1>ComponentA</h1>
        <h1>{this.state.nameA}</h1>
        <button onClick={()=>this.setUserName()}>Change NameA</button>
        <ComponentB />
      </div>
    )
  }
}

export default ComponentA
