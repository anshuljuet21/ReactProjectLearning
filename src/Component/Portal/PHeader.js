import React from 'react'
import ReactDOM from 'react-dom'

function PHeader() {
    const myStyles={
        color:'red',fontSize:'40px',border:'5px'
    }
  return ReactDOM.createPortal(
    <div>
      <h1 style={myStyles}>Hello from Header Portal</h1>
    </div>,
    document.getElementById('header')
  )
}

export default PHeader
