import React from "react";


export default class Form extends React.Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="InputEmail">Email Address</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label for="InputPassword">Password</label>
                    <input type="password" className="form-control" id="InputPassword" placeholder="Password" />

                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck"/>
                    <label className="form-check-label" for="exampleCheck">Check me out!</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}