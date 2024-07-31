import React, { useState } from 'react'

function StateDemoFun() {
    const[count,setcount]=useState(0)
    function increment()
    {
        setcount(count+1)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>increment()}>Increment</button>
    </div>
  )
}

export default StateDemoFun
