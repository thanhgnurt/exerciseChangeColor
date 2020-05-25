import React, { Component } from 'react'



export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword : ""
        }
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState ({
            [name] : value
        })
        
       
        
    }

    onSearch = (event) =>{
        event.preventDefault();
        this.props.onSearch(this.state.keyword);
        
    }
    render() {
        let {keyword} = this.state
        return (
            <div className="col-7">
                <nav className="navbar navbar-light bg-light container">
                    <form className="form-inline" onSubmit = {this.onSearch}>
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            aria-label="Search"
                            name = 'keyword'
                            value = {keyword}
                            onChange = {this.onChange}

                        />
                        <button className="btn btn-outline-dark btn-info my-2 my-sm-0"
                         type="submit"
                         
                         >
                            <i className="fa fa-search"> Search</i>
                        </button>
                    </form>
                </nav>

            </div>
        )
    }
}
