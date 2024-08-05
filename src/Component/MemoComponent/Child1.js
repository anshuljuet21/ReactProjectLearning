import React from 'react'

function Child1() {
    console.log('--Child component----')
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  )
}

export default React.memo(Child1)
