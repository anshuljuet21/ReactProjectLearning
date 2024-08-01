import React from 'react'

function Array1() {
    const courseList=['C','C++','JAVA','Python']
  return (
    <div>
      <ol>
        {
            courseList.map((course,i)=>
            <li key={i}>{course}</li>)
        }
      </ol>
    </div>
  )
}

export default Array1
