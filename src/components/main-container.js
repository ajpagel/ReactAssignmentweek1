import React from "react";
import NavBar from "./navbar";
import Form from "./form";
import '../App.css'

export default class MainContainer extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <NavBar />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 mx-auto">
                        <h3>Log in</h3>
                        <Form />
                    </div>
                </div>
            </div>
        );
    }
}