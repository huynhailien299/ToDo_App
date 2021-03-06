import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TodoInput from './components/Delete';
import TodoItem from './components/AddTask';

class App extends Component {
  constructor(props) {
      
    super(props);
    this.state = {
      todos: [
        {id: 0, text: "Work"},
        {id: 1, text: "Eat"},
        {id: 2, text: "Sleep"},
        {id: 3, text: "Play"},
      ],
      nextId: 4
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  deleteTask(id) {
    this.setState({
        todos: this.state.todos.filter((todo, index) => todo.id !== id)
      });
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} deleteTask={this.deleteTask}/>
                
              })
              
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
