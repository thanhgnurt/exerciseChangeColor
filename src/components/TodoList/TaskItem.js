import React, { Component } from 'react'

export default class TaskItem extends Component {
   
    changeStatus = () => {
        this.props.changeStatus(this.props.task.id)
    }

    deleteActive = () => {
        this.props.deleteActive(this.props.task.id)
    }

    editActive = () => {
        this.props.editActive(this.props.task.id);
        


    }

    render() {
        return (
            
            <tr key ={this.props.task.id} >
                <th scope="row">{this.props.index + 1}</th>
                <td>{this.props.task.name}</td>
                <td>
                    <span className={this.props.task.status === true
                        ? 'badge badge-primary'
                        : 'badge badge-dark'}
                        onClick={this.changeStatus}
                    >
                        {this.props.task.status === true ? 'Active' : 'Disable'}

                    </span>
                </td>
                <td>

                    <button className="btn btn-secondary mr-2"
                        onClick = {this.editActive}
                    >
                        Edit
                    </button>
                    <button className="btn btn-danger"
                        onClick={this.deleteActive}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}
