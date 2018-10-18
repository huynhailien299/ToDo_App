import React, { Component } from 'react';

import './App.css'
import ListTask from './component/ListTask.js'

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>ToDo App</h1>
            	<ListTask />
            </div>
        );
    }
}

export default App;