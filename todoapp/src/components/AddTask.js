import React from 'react';
import './AddTask.css';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      
      <div className="todoWrapper">
        <div className="task-btn">
                        <button type="button" class="btn">
                            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                        </button>
                        <button type="button" class="btn btn-primary">
                            <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                        </button>
                        <button type="button" class="btn btn-danger"onClick={(e)=> this.removeTodo(this.props.id) }>
                            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                        </button>{this.props.todo.text}
                    </div>
     
      </div>
    );
  }
}
