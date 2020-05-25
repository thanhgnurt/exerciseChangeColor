import React, { Component } from 'react'


export default class IndexForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUserName: '',
            txtPassword: '',
            txtDecs: '',
            sltGender: 1,
            radioLanguage : 'vi',
            checkAgree : false

        }
    }
    // ---------------------------
    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        })


    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);


    }



    render() {
        return (
            <div className="container form mt-5 ">
                <form onSubmit={this.onHandleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            name="txtUserName"
                            onChange={this.onHandleChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            name="txtPassword"
                            onChange={this.onHandleChange}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            defaultValue={""}
                            name="txtDecs"
                            onChange={this.onHandleChange}

                        />
                    </div>

                    <label>Gender</label>


                    <div className="input-group mb-3">
                        <select
                            className="custom-select"
                            name='sltGender'
                            value={this.state.sltGender}
                            onChange={this.onHandleChange}
                        >

                            <option value={0} >Female</option>
                            <option value={1} >Male</option>

                        </select>
                        <div className="input-group-append">
                            <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
                        </div>
                    </div>


                    <label>Language</label>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input 
                                type="radio" 
                                className="form-check-input" 
                                name="radioLanguage" 
                                value="vi"
                                onChange = {this.onHandleChange}
                                checked = {this.state.radioLanguage === "vi"}  
                            />
                            Vietnamese
                        </label> <br />
                        <label className="form-check-label">
                            <input 
                                type="radio" 
                                className="form-check-input" 
                                name="radioLanguage" 
                                value="en"
                                onChange = {this.onHandleChange}
                                checked = {this.state.radioLanguage === "en"} 
                            />
                            English
                        </label>
                    </div>
                    <hr />







                    <div className="form-check">
                        <input type="checkbox" 
                            className="form-check-input"
                            value = {true}
                            name = "checkAgree"
                            onChange = {this.onHandleChange}
                            checked = {this.state.checkAgree === true}

                        />
                        <label className="form-check-label" >

                            I agree to all of the content below.....
                        </label>
                    </div>

                    <hr />
                    <button type="submit" className="btn btn-primary mr-3">
                        Submit
                    </button>
                    <button type="reset" className="btn btn-danger">
                        Delete Space
                    </button>
                </form>





            </div>
            
        )
    }
}
