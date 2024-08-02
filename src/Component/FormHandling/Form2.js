import React, { Component } from "react";

export class Form2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "", age: "", gender: "Male",
    };
  }

  changeHandler=(e)=>{
    const{name,value}=e.target
    this.setState({[name]:value})
    console.log(this.state)
  }

  submitHandler=(e)=>{
    e.preventDefault();
    console.log(this.state);

  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitHandler}>
        <div className="alert alert-success">User Signup</div>
        <div className="row">
          <div className="col">
            <label className="form-label">name</label>
            <input className="form-control" name="name" type="text" defaultValue={this.state.name} onChange={this.changeHandler} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label className="form-label">age</label>
            <input className="form-control" name="age" type="text" defaultValue={this.state.age} onChange={this.changeHandler} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label className="form-label">Gender</label>
            <input type="radio" name="gender" value="Male" className="form-check-input" defaultChecked={this.state.value == "Male"} onChange={this.changeHandler} />Male
            <input type="radio" name="gender" value="Female" className="form-check-input" defaultChecked={this.state.value == "Female"} onChange={this.changeHandler}/>Female
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input type="reset" className="btn btn-primary" />
            <input className="btn btn-secondary" type="submit" />
          </div>
        </div>
        </form>
      </div>
    );
  }
}

export default Form2;
