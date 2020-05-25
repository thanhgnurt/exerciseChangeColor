import React, { Component } from 'react'

export default class Product extends Component {
   

    render() {
        return (
           
                <div className="card text-left col-3" key={this.props.product.id}>
                    <img className="card-img-top" src={this.props.product.img} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.product.name}</h4>
                        <p className="card-text">{this.props.product.price}</p>
                        <button className="btn btn-danger" onClick={()=>{this.props.hidee(this.props.index)}}>Mua Ngay</button>
                    </div>
                </div>
                

                
            

        )
    }
}
