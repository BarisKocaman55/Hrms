import React from 'react'
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function LoginPage() {

    let history = useHistory();
    return (
        <form style={{ marginTop: "6%"}}>
            <h3>Sign In</h3>

            <div className="form-group" style={{ width: "400px", marginLeft: "38%"}}>
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group" style={{ width: "400px", marginLeft: "38%" }}>
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block" style={{ width: "300px", marginLeft: "42%" }} onClick={() => {
                            history.push('/employerPage');
                        }}>Submit</button>
            <button type="submit" className="btn btn-primary btn-block" style={{ width: "110px", marginLeft: "48%" }} onClick={() => {
                            history.push('/employerRegister');
                        }}>Register Page</button>
            
        </form>
    );


}
