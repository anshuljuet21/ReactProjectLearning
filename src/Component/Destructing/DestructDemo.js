import React, { Component } from 'react'

export class DestructDemo extends Component {
  render() {
    const{id,Fname,city}=this.props
    return (
      <div>
       Details:
       <br/>
       ID:{id}
       <br/>
       Name:{Fname}
       <br/>
       City:{city} 
      </div>
    )
  }
}

export default DestructDemo
