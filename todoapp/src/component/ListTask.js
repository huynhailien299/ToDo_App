import React, { Component } from 'react';

import './ListTask.css'

class ListTask extends Component {
   
    constructor(props) {
        super(props);
        this.state = {mang: ['A', 'B']};
    }
    
       
    
      
      
    render() {
        return (
            <div>
                <div className="add-wrap">
					<div className="col-lg-12">
						<div className="input-group">
						<input type="text" className="form-control" placeholder="Search for..." value={this.state.value} onChange={this.handleChange} />
						<span className="input-group-btn">
							<button className="btn btn-default"onClick={() => this.addTodo(this.state.value)} type="button">+ Add task</button>
						</span>
						</div>
					</div>
				</div>
                <div className="clear" />
                <div className="task-wrap">
                    <div className="task-name">Work</div>
                    <div className="task-btn">
                        <button type="button" class="btn">
                            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                        </button>
                        <button type="button" class="btn btn-primary">
                            <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                        </button>
                        <button type="button" class="btn btn-danger">
                            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                        </button>
                    </div>
                    
                </div>
                <div className="task-wrap">
                    <div className="task-name">Eat</div>
                    <div className="task-btn">
                        <button type="button" class="btn">
                            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                        </button>
                        <button type="button" class="btn btn-primary">
                            <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                        </button>
                        <button type="button" class="btn btn-danger">
                            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                        </button>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default ListTask;