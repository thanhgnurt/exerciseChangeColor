import React, { Component } from 'react'
import Product from './Product'

export default class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProducts: [
                {
                    id: 1,
                    name: "iphone 6x",
                    img: "https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-128gb-green-400x460.png",
                    price: 15000000,
                    status: true,

                },
                {
                    id: 2,
                    name: "Nokia l10",
                    img: "https://cdn.tgdd.vn/Products/Images/42/207650/nokia-72-black-600x600.jpg",
                    price: 14000000,
                    status: true,

                },
                {
                    id: 3,
                    name: "Galaxy note 10",
                    img: "https://cdn.tgdd.vn/Products/Images/42/211570/samsung-galaxy-a51-blue-600x600-600x600.jpg",
                    price: 17000000,
                    status: true,

                },
                {
                    id: 4,
                    name: "Sony z5",
                    img: "https://didongmango.com/images/products/2018/12/27/large/xperia-xzs-blue-product-shot-2000x2000-0a3611d9214fefb3a5549060d94ab0df_1545920806.png",
                    price: 1200000,
                    status: true,

                }

            ],
            isActive: true

        }
    }
    

    hidee = (unknown) => {
        if (unknown ==="isActive") {
            console.log(unknown);
            
            this.setState({
                isActive : !this.state.isActive
            })
            
        }
        
         else {
            let listProducts =[...this.state.listProducts]
            listProducts[unknown].status = !listProducts[unknown].status
            
            this.setState({
                
                listProducts
                
            })
        }
        
            
    }
    show = () => {
        return this.state.listProducts.map((product,index) => {
            var result = ""
            if (this.state.isActive) {
                if (product.status) {
                    result =<Product product={product} key={product.id} hidee = {this.hidee} index={index}/>
                    
                     
                    
    
    
                }
            }
            // if (product.status) {
            //     result = <Product product={product} key={product.id} hidee = {this.hidee} />


            // }
            return result

        })
    }
    render() {











        return (
            <div>

                <div className="row">

                    {this.show()}

                </div>
                <div>
                <button className="btn btn-danger" onClick={()=>{this.hidee("isActive")}}>Mua Ngay</button>
                </div>
                





            </div>
        )
    }
}
