import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="page-header">
                    <h1>ToDo App</h1>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="input-group">
                            <input type="text" className="form-control"/>
                            <div className="col-xs-4 col-sm-4">
                                <button type="button" className="btn btn-block">Add Item</button>
                            </div>
                        </div>
                    </div>
                    
                   
                </div>
               
                <div className="panel panel-success">
                    
                    <table className="table table-hover">
                        
                        <tbody>
                            <tr>
                              
                                <td>Work</td>
                                
                                <td>
                                    <button type="button" className="btn btn-sm">Edit</button>
                                    <button type="button" className="btn btn-sm">&#xff38;</button>
                                </td>
                            </tr>
                            <tr>
                                
                                <td>Eat</td>
                                
                                <td>
                                    <button type="button" className="btn btn-sm">Edit</button>
                                    <button type="button" className="btn btn-sm">&#xff38;</button>
                                </td>
                            </tr>
                            
                           
                           
                           
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;