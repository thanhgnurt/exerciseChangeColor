import React, { Component } from 'react'

export default class Week extends Component {
    showWeek =(numberWeek, rowCalender)=>{
        let result =[]
        for (let i = numberWeek * 7; i < 7 + 7 * i; i++) {
            result.push(<th>{i + 1}</th>)
            
        }
    }
    render() {
        let {i}=this.props
        
        return (
            <span>
                {this.showWeek(i)}
            </span>
        )
    }
}
