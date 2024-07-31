import React from 'react'

function DestructDemoFun(props) {
    const{id,name,price}=props
  return (
    <div>
     <h1>Product Details</h1> 
     <h2>ID:{id}</h2> 
     <h2>Name:{name}</h2>
     <h2>Price:{price}</h2>
    </div>
  )
}

export default DestructDemoFun
