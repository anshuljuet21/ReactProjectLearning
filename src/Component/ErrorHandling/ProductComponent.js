import React from 'react'

function ProductComponent(props) {
    if(props.Category!='Electronic'){
        throw new Error('Invalid Category');
    }
  return (
    <div>
      <h1>{props.ProductName}</h1>
    </div>
  )
}

export default ProductComponent
