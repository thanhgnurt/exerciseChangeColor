import React, { Component } from 'react'
import AddJob from './AddJob'
import Control from './Control'
import TaskList from './TaskList'
export default class TodoIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false,
            taskEdit: null,
            filter: {
                name: '',
                status: -1
            },
            keyword: '',
            keyWordSort: 0
        }
    }
    addJob = (data) => {
        let tasks = this.state.tasks
        if (data.id) {
            let index = this.findIndex(data.id)
            tasks.splice(index, 1, data)
            this.setState({
                tasks
            })
        } else {
            data.id = this.makeid(10)
            tasks.push(data)
            this.setState({
                tasks
            })
        }
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'))
            this.setState({
                tasks: tasks
            })
        }
    }
    makeid = (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    showAddJob = () => {
        this.editActive(-1)
        this.setState({
            isDisplayForm: true,
            taskEdit: null
        })
    }
    closeAddJob = () => {
        this.setState({
            isDisplayForm: false
        })
    }
    changeStatus = (id) => {
        let tasks = this.state.tasks
        let index = this.findIndex(id);
        tasks[index].status = !tasks[index].status
        this.setState({
            tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    findIndex = (id) => {
        let { tasks } = this.state
        let result = -1
        tasks.forEach((task, index) => {
            if (task.id === id) {
                result = index
            }
        })
        return result
    }
    deleteActive = (id) => {
        let { tasks } = this.state;
        let index = this.findIndex(id);
        tasks.splice(index, 1);
        this.setState({
            tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    // showEdit = () => {
    //     this.setState({
            
            
    //     })
    // }
    editActive = (id) => {
        let { tasks } = this.state;
        let index = this.findIndex(id)
        var taskEdit = tasks[index];
        this.setState({
            isDisplayForm: true,
            taskEdit: taskEdit
        })
       
    }
    onFilter = (filterName, filterStatus) => {
        this.setState({
            filter: {
                name: filterName.toLowerCase(),
                status: filterStatus,
            }
        })
    }
    onSearch = (keyword) => {
        this.setState({
            keyword: keyword.toLowerCase()
        })
    }
    onSort = (keyWordSort) => {
        this.setState({
            keyWordSort: keyWordSort
        })

    }
    render() {
        console.log(this.state.keyWordSort);
        
        let { tasks, isDisplayForm, taskEdit, filter, keyword, keyWordSort } = this.state;
        if (filter) {
            if (filter.name) {
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filter.name) !== -1
                })
            }
            tasks = tasks.filter((task) => {
                if (parseInt(filter.status) === -1) {
                    return task;
                } else {
                    return task.status === (filter.status === 'true' ? true : false)
                }
            })
        }
        if (keyword) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            })
        }
        if (keyWordSort === 3) {


            tasks = tasks.filter((task) => {
                return task.status === true

            })
            tasks.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                else return 0

            })
        }
        if (keyWordSort === 4) {
            tasks = tasks.filter((task) => {
                return task.status === false

            })
            tasks.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                else return 0

            })


        }
        if (keyWordSort === 1 || keyWordSort === -1) {
            tasks.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return keyWordSort;
                else if (a.name.toLowerCase() < b.name.toLowerCase()) return -keyWordSort;
                else return 0

            })
        }

        if (keyWordSort === 2) {
            tasks.sort((a,b)=>{
                return 0.5 - Math.random()
            })
        }


        var elemTaskForm = isDisplayForm ? <AddJob
            taskEdit={taskEdit}
            addJob={this.addJob}
            closeAddJob={this.closeAddJob}
        />
            : ''
        return (
            <div className="container">
                <div className="text-center mb-5 ">
                    <h2 className="alert alert-primary ">Management Job</h2>
                </div>
                <div className="row">
                    <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4 borderAddJob' : ''}>
                        {elemTaskForm}
                    </div>
                    <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <Control
                            isDisplayForm={this.state.isDisplayForm}
                            showAddJob={this.showAddJob}
                            onSearch={this.onSearch}
                            onSort={this.onSort}
                        />
                        <TaskList
                            tasks={tasks}
                            changeStatus={this.changeStatus}
                            deleteActive={this.deleteActive}
                            editActive={this.editActive}
                            onFilter={this.onFilter}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
