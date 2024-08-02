import React from 'react'
import THead from './THead'
import TBody from './TBody'

function Table() {
  return (
    <div>
     <table className='table table-bordered'>
        <THead/>
        <TBody/>
     </table>
    </div>
  )
}

export default Table
