import React from 'react'

export default function RegisterPage() {
    return (
        <div>
            <form style={{ marginTop: "6%"}}>
                <h3>Sign Up</h3>

                <div className="form-group" style={{ width: "400px", marginLeft: "38%"}}>
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group" style={{ width: "400px", marginLeft: "38%"}}>
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group" style={{ width: "400px", marginLeft: "38%"}}>
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group" style={{ width: "400px", marginLeft: "38%"}}>
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" style={{ width: "300px", marginLeft: "42%" }}>Sign Up</button>
                
            </form>
        </div>
    )
}
