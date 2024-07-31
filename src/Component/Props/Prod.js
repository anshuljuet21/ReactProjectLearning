import React from 'react'

function Prod(props) {
  return (
    <div>
     <h1>Product Details</h1> 
     <h2>ID:{props.id}</h2> 
     <h2>Name:{props.name}</h2>
     <h2>Price:{props.price}</h2>
     <h3>{props.children}</h3>
    </div>
  )
}

export default Prod
