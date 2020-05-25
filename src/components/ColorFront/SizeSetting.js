import React, { Component } from 'react'

export default class SizeSetting extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <div className="panel-heading btn btn-warning container">
                        <h3 className="panel-title  px-5"> Size : {this.props.fontSize} px</h3>
                    </div>
                    <div className="panel-body mt-2 ">
                        <button type="button" className="btn btn-danger  px-4 py-4" onClick={()=>this.props.changeSize(this.props.fontSize,false)}>DECREASE</button>&nbsp;
                        <button type="button" className="btn btn-success ml-5  px-4 py-4" onClick={()=>{this.props.changeSize(this.props.fontSize,true)}} >INCREACE</button>
                    </div>
                </div>
            </div>
        )
    }
}
