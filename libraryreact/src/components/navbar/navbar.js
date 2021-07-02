import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap";

import "./navbar.css";

const Navbar = () => {
    return (
        <>
        {/* <link rel="stylesheet" type="text/css" href="{% static 'css/navbar.css' %}" > */}

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="{% url 'home' %}">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="{% url 'products' %}">Products</a>
                        </li> */}
                    </ul>
                </div>

                {/* <span className="hello-msg">Hello, {{request.user}}</span>
                <span ><a  className="hello-msg" href="{% url 'logout' %}">Logout</a></span> */}

        </nav>
        </>
    );
};

export default Navbar;