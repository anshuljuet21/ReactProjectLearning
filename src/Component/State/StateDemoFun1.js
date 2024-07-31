import React, { useState } from 'react'

function StateDemoFun1() {
    const[username,setusername]=useState('Guest');
    function login()
    {
        if(username=='Guest')
        {
            setusername('Admin')
        }
        else
        {
            setusername('Guest')
        }
    }
  return (
    <div>
      <h1>Welcome,{username}</h1>
      <button onClick={()=>login()}>Login</button>

    </div>
  )
}

export default StateDemoFun1
