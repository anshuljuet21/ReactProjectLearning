import React from 'react';

function Array3() {
    const user = [
        {Name: 'Anshul1', id: '21', Age: '32'},
        {Name: 'Anshul2', id: '21', Age: '33'},
        {Name: 'Anshul3', id: '21', Age: '34'}
    ]

    return (
        <table border={1} className='table table-responsive table-bordered'>
      <thead>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {
        user.map((user, i) => 
            <tr key={i}>
            <td>{user.id}</td>
            <td>{user.Name}</td>
            <td>{user.Age}</td>
          </tr>
        )
    }
      </tbody>
    </table>
    );
}

export default Array3;
