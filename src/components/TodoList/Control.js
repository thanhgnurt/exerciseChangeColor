import React, { Component } from 'react'
import Search from './Search'
import Sort from './Sort'

export default class Control extends Component {
    render() {
        
        return (
            <div className="container-fluid ">
                <div className="mb-3 ">
                    <button type="button" className="btn btn-info px-4 py-2 btn-outline-dark" onClick={()=>{this.props.showAddJob()}}>
                        <i className="fa fa-plus mr-2" />    Add Job  
    </button>
                </div>
          
                <div className="row mb-3">
                    <Search onSearch = {this.props.onSearch} />
                    <Sort onSort = {this.props.onSort} />
                </div>
            </div>
        )
    }
}
