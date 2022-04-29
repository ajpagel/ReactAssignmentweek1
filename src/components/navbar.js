import React from "react";

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#">Home</a>
                        <a className="nav-item nav-link" href="#">About</a>
                        <a className="nav-item nav-link" href="#">Portfolio</a>
                        <a className="nav-item nav-link active" href="#">Login</a>
                    </div>
                </div>
            </nav>
        );
    }
}