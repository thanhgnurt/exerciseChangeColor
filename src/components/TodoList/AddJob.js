import React, { Component } from 'react'
export default class AddJob extends Component {
    constructor (props){
        super (props);
        this.state = {
            id : '',
            name : '',
            status : false
        }
    }
    componentWillMount () {
        if (this.props.taskEdit) {
            this.setState ({
                id : this.props.taskEdit.id,
                name : this.props.taskEdit.name,
                status : this.props.taskEdit.status
            })
        }
    }
    componentWillReceiveProps(nextProps){
        if (nextProps && nextProps.taskEdit) {
            this.setState ({
                id : nextProps.taskEdit.id,
                name : nextProps.taskEdit.name,
                status : nextProps.taskEdit.status
            })
        } else {
            if (nextProps.taskEdit === null) {
                this.setState ({
                    id : '',
                    name : '',
                    status : ''
                })  
            }
        }
    }
    
    onHandChange = (event) => {
        console.log(event.target);
        
        let target = event.target;
        let name = target.name;
        let value = target.value;
        if (name === "status") {
            value = target.value === "true" ? true : false
        }
        this.setState ({
            [name] : value
        })
    }
    onHandleSubmit = (event) => {
        event.preventDefault();
        this.props.addJob(this.state)
        this.onClear ()
        this.props.closeAddJob()
    }
    onClear = () => {
        this.setState({
            name : "",
            status : false
        })
    }
   
    render() {
        let { id } = this.state
        return (
            
                <div className="  ">
                    <div className=" text-right row alert alert-success hover-darger" >
                        
                        <div className='col-8 text-left'>
                            {id !== '' ? "Update Job" : "Add Job"}
                        </div>
                        <span className="col-4 fa fa-times-circle-o mt-1"  onClick={()=>{this.props.closeAddJob()}} aria-hidden="true"></span>
                    </div>
                    <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group">
                            <label className="text-dark mt-3">Activity :</label>
                            <input
                                type="text"
                                className="form-control"                                
                                placeholder="Enter name Active"
                                name = "name"
                                value ={this.state.name}
                                onChange = {this.onHandChange} 
                            />
                        </div>
                        <label className="text-dark">Status :</label>
                        <div className="input-group mb-3">
                            <select 
                                className="custom-select"
                                name = "status"
                                value = {this.state.status}
                                
                                onChange = {this.onHandChange}  
                                >
                                <option value={false}>Hide</option>
                                <option value={true}>Show up</option>
                            </select>
                        </div>
                        <div className="text-left">
                            <button type="submit" className="opancityAppJob btn btn-primary mb-3 mr-2 text-center px-4">
                                {" "}
          Save{" "}
                            </button>
                            <button type="button" className="opancityAppJob btn btn-warning mb-3 text-center px-4" onClick={this.onClear}>
                                {" "}
          Cancel{" "}
                            </button>
                        </div>
                    </form>
                </div>
        )
    }
}
