import React from 'react';
import './Delete.css';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.todoText};

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  addTodo(todo) {
    // Ensure a todo was actually entered before submitting
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div>
  
  <div className="add-wrap">
					<div className="col-lg-10">
						<div className="input-group">
            <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} placeholder="Search for..." />
						<span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={() => this.addTodo(this.state.value)}>+ Add task</button>
						</span>
						</div>
					</div>
				</div>

      </div>
    );
  }
}
