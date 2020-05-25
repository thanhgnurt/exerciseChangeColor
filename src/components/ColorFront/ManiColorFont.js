import React, { Component } from 'react'

import Reset from './Reset'
import SizeSetting from './SizeSetting'
import ColorPicker from './ColorPicker'
import Result from './Result'

export default class ManiColorFont extends Component {
    colorList = ["red", "blue", "yellow", "magenta","black","orange", "aqua","crimson", "violet", "pink", "tomato", "teal", "wheat"]
    constructor(props) {
        super(props);
        this.state = {
            colorList: this.colorList,
            color: "tomato",
            fontSize: 25,


        }
    }
    changeColor = (color) => {
        console.log(color);

        this.setState({
            color

        })
    }

    reset = () => {
        this.setState({
            color: "yellow",
            fontSize: 20
        })
    }


    changeSize = (fontSize, status) => {
        console.log(status);

        if (status && fontSize < 60) {
            fontSize += 2

        } else {
            if (!status && fontSize > 12) {
                fontSize -= 2
            }
        }

        this.setState({
            fontSize
        })

        return


    }



    render() {
        return (
            <div className="color_picker ">
                <div className="container ">
                    <div className="row">
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 mt-5">
                            <ColorPicker colorList={this.colorList} changeColor={this.changeColor} />
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 mt-5">
                            <SizeSetting fontSize={this.state.fontSize} changeSize={this.changeSize} />
                            <hr className="bg-warning" style={{height:2}}/>
                            <Reset reset={this.reset} />
                        </div>


                    </div>
                    <div className="">
                        <Result color={this.state.color} fontSize={this.state.fontSize} />
                    </div>

                </div>
            </div>
        )
    }
}
