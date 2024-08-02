import React from 'react'
import ReactDOM from 'react-dom'

function Pfooter() {
  return ReactDOM.createPortal(
    <div>
      <h1>Hello from Footer Portal</h1>
    </div>,
    document.getElementById('footer')
  )
}

export default Pfooter
