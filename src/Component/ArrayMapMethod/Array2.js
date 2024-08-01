import React from 'react';

function Array2() {
  const courseList = ['C', 'C++', 'JAVA', 'Python'];

  return (
    <table border={1} className='table table-responsive table-bordered'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Course Title</th>
        </tr>
      </thead>
      <tbody>
        {
        courseList.map((course, i) => 
            <tr key={i}>
            <td>{i + 1}</td>
            <td>{course}</td>
          </tr>
        )
    }
      </tbody>
    </table>
  );
}

export default Array2;
