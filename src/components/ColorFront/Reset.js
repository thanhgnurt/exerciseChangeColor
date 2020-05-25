import React, { Component } from 'react'

export default class Reset extends Component {
    render() {
        return (
            <div>
                 <button type="button" onClick={()=>{this.props.reset()}} className="btn btn-primary py-4 px-4">RESET</button>
            </div>
        )
    }
}
