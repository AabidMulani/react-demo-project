import React from 'react'
import {NavLink} from "react-router-dom";

class AppBar extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar ">
                    <div className="navbar-brand">
                        <NavLink className="navbar-item" to='/home'>
                            <p>Home</p>
                        </NavLink>
                        <NavLink className="navbar-item" to="/ageTimer">
                            <p>Age Timer</p>
                        </NavLink>
                        <NavLink className="navbar-item" to="/apiDemo">
                            <p>API Demo</p>
                        </NavLink>
                        <div className="navbar-burger burger" data-target="navMenuExample1">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </nav>
            </div>
        );
    };

}

export default AppBar;