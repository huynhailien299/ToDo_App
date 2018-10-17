import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      id :"",
      task : "",
      items: []
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange = event => {
    this.setState({task: event.target.value});
  }
  onSubmit = event => {
    event.preventDefault();
    this.setState ({
      task: "",
      items: [...this.state.items, this.state.task]

    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="text-center">ToDo App</h1>
          </div>
      
        </div>
        <div>
          <form onSubmit={this.onSubmit}>
          <div className="form-group">
      
            <input 
              type = "text"
              className = "form-control"
              id = "taskName"
              value ={this.state.task}
              onChange={this.onChange}
            />
          </div>
          <button type="submit" className="btn btn-sucess btn-block">+Add Task</button>
          </form>
          <table className="table nt-3">
            {this.state.items.map ((item, index) => (
              <tr>
                <td key={index}className = "text-left">
                  {item}
                </td>
              </tr>
              
            ))}
            
          </table>
        </div>

      </div>
    );
  }
}

export default App;
