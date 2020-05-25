import React, { Component } from 'react'


export default class ColorPicker extends Component {
    optionColor = () => {


        return this.props.colorList.map((colo, index) => {
            return <button  className="btn mx-2" key={index} onClick={() => { this.props.changeColor(colo) }} style={{ width: 40, height: 40, backgroundColor: colo }} />
        })
    }



    render() {

        return (
            <div>
                <div className=" ">
                    <div className="panel-heading bg-primary btn btn-success col-12 mb-2 ">
                        <h3 className="panel-title text-light">Color Picker</h3>
                    </div>


                </div>
                <div className="text-center">
                    {this.optionColor()}<br /><br />

                    <div className="text-success h2">Seclect Color</div>
                    <hr className="bg-danger" style={{height:2}}/>
                </div>
            </div>
        )
    }
}
