import React, { Component } from 'react'

export default class Result extends Component {
    styleColorFont = () => {
        return {

            color: this.props.color,
            fontSize: this.props.fontSize
        }
    }
    selectColor = () => {
        return {
            color: this.props.color,
            backgroundColor: this.props.color,
            width: 600,
            height: 200
        }
    }

    select = () => {
        return {
            color: this.props.color
        }
    }


    render() {
        return (
            <div >
                
                    <div className="container row  ">
                        <div className="row col-4 ml-3">
                            <button className="col-12 row text-light btn btn-dark py-4"> Color : <span className="ml-3" style={this.select()} > {this.props.color}</span> </button>
                        </div>
                        <div className="">
                            <button className="text-light btn btn-success py-4"> Fontsize  :  {this.props.fontSize} px</button>

                        </div>


                    </div>




               
                <div className="text-center container" >
                    <div > <button className="btn mt-5" style={this.selectColor()} /></div>
                    <div className="text-center btn btn-secondary mt-4 mb-5" style={this.styleColorFont()}>CHANGE COLOR</div>
                </div>
            </div>
        )
    }
}
