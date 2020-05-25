import React, { Component } from 'react'
import TaskItem from './TaskItem'
export default class TaskList extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterName : '',
            filterStatus : -1 //all = -1 active :1 deactive:0
        }
    }
    onChange = (event) => {

        let target = event.target
        let name = target.name
        let value = target.value
        
        
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        )
        console.log(value);
        
        this.setState ({
            [name] : value
        })
    }
    render() {
        
        
        let {filterName, filterStatus} = this.state
        let { tasks } = this.props;
        let elemTasks = tasks.map((task, index) => {
            return <TaskItem
                key={task.id}
                index={index}
                task={task}
                changeStatus={this.props.changeStatus}
                deleteActive={this.props.deleteActive}
                editActive={this.props.editActive}
            />
        })
        return (
            <div className="container-fluid">
                <table className="tastList container table table-bordered table-light table-hover text-center table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr>
                            <th scope="row" />
                            <td>
                                <input
                                    className="form-control mr-sm-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    name = 'filterName'
                                    value = {filterName}
                                    onChange = {this.onChange}
                                />
                            </td>
                            <td>
                                <div className="input-group mb-3">
                                    <select
                                    className="custom-select"
                                    name = 'filterStatus' 
                                    value = {filterStatus}
                                    onChange = {this.onChange} 
                                    >
                                        <option value ={-1}  >All...</option>
                                        <option value={true}> Active </option>
                                        <option value={false}> Deactive </option>
                                    </select>
                                    <div className="input-group-append">
                                    </div>
                                </div>
                            </td>
                            <td>
                            </td>
                        </tr>
                        {elemTasks}
                    </tbody>
                </table>
            </div>
        )
    }
}
