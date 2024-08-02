import React, { Component } from 'react'

export class Form1 extends Component {
  render() {
    return (
      <div>
        <form>
            Name:
            <input type="text"/>
            <br/>
            Mobile:
            <input type="text"/>
            <br/>
            City:
            <select>
                <option value="">Select</option>
                <option value="PNQ">Pune</option>
                <option value="MUM">Mumbai</option>
                <option value="DEL">Delhi</option>
            </select>
            <br/>
            <input type="reset"/>
            <input type="submit"/>
        </form>
        
      </div>
    )
  }
}

export default Form1
