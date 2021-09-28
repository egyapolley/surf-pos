import React, {Component} from 'react';
import "./Login.css"
import httpService from "../../services/httpService";


class Login extends Component {

    state = {
        data: {
            username: "",
            password: ""
        },

        error: {},

    }

    handleOnChange = (event) => {
        const data = {...this.state.data}
        const {name, value} = event.currentTarget;
        data[name] = value;
        this.setState({data})

    }

    handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log("Form submission")
        await this.doSubmit();

    }

    doSubmit = async () => {
        try {
           const body = {...this.state.data}
            //const {data: jwt} = await httpService.post("/login", body);
            const {username, password} = this.state.data
            if (username !== "admin") throw new Error("Invalid Username entered")
            if (password !== "admin") throw new Error("Invalid Password entered")
            localStorage.setItem("token", "test");
            window.location = "/"

        } catch (ex) {
            const error = {};
            if (ex.response && ex.response.data) {
                error.message = ex.response.data
            } else {
                error.message = ex.message;
            }


            this.setState({error})

        }

    }


    render() {

        const {username, password} = this.state.data
        const {message} = this.state.error;
        return (

            <div className="login-body-container">
                <div className="header">
                    <h1>PACE POS</h1>
                </div>
                <div className="login-main-container">
                    <div className="login-container">
                        <div className="form">
                            {message && <small className="login-error"><i className="fas fa-exclamation-triangle"/> {message}</small>}
                            <form onSubmit={this.handleFormSubmit}>
                                <div className="login-form-control textbox">
                                    <i className="fas fa-user"/>
                                    <input type="text" name="username" placeholder="Username" value={username}
                                           onChange={this.handleOnChange} required/>
                                </div>
                                <div className="login-form-control textbox">
                                    <i className="fas fa-lock"/>
                                    <input type="password" name="password" placeholder="Password" value={password}
                                           onChange={this.handleOnChange} required/>
                                </div>

                                <div className="login-form-control">
                                    <input type="submit" className="login-btn" value="Login"/>
                                </div>
                                <div className="login-form-control">
                                    <button type="button">Forgot Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}


export default Login;
