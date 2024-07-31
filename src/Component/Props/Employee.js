import React, {Component} from 'react'

class Employee extends Component {
    render() {
        return(
            <div>
                <h1>Employee Detail</h1>
                <h2>ID:{this.props.id}</h2>
                <h2>Name:{this.props.name}</h2>
            </div>
        )
    }
}

export default Employee
