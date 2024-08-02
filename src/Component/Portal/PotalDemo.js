import React from 'react'
import ReactDOM from 'react-dom'

function PotalDemo() {
  return ReactDOM.createPortal(
    <div>
      <h1>Hello from Demo Portal</h1>
    </div>,
    document.getElementById('demo')
  )
}

export default PotalDemo
