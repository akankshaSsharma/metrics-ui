import React from 'react';
import 'bulma';
import logo from "./homepage/img/healthedge_logo.png";
import {Link} from "react-router-dom";
function navclick(){
    document.getElementById("nav-menu").classList.toggle('is-active')
    document.getElementById("navbar-burger").classList.toggle('is-active')
}

function scrollthing(e){
    e.preventDefault()
}

const Navbar = () =>  {
    return(
        <div>   
            <nav className="navbar is-transparent is-fixed-top content is-medium">
                <div className="navbar-brand">
                    <a className="navbar-item" href="http://localhost:3000">
                        <img src={logo} alt="HealthEdge"/>
                    </a>
                <div className="navbar-burger" id="navbar-burger" data-target="nav-menu" onClick={navclick}> 
                    {/* function calling to changing menu into cross when open in phone */}
                    <span></span>
                    <span></span>   
                    <span></span>
                    </div>
                </div>
                <div id="nav-menu" className="navbar-menu navbar-menu-own">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/">Home</Link>
                        <Link className="navbar-item" to="/overallmetrics">Overall Metrics</Link>
                        <div className="navbar-item has-dropdown is-hoverable"> 
                            <Link className="navbar-link" to="/metrics" onClick={scrollthing}>Quality Metrics</Link>
                                <div className="navbar-dropdown is-boxed">
                                    <Link className="navbar-item is-hoverable" to="/claims">Claims Metrics</Link>
                                    <hr className="navbar-divider"/>
                                    <Link className="navbar-item is-hoverable" to="/platform">Platform Metrics</Link>
                                    <hr className="navbar-divider"/>
                                    <Link className="navbar-item is-hoverable" to="/billing">Billing Metrics</Link>
                                    <hr className="navbar-divider"/>
                                    <Link className="navbar-item is-hoverable" to="/enrollment">Enrollment Metrics</Link>
                                    <hr className="navbar-divider"/>
                                    <Link className="navbar-item is-hoverable" to="/provider">Provider Metrics</Link>
                                    <hr className="navbar-divider"/>
                                    <Link className="navbar-item is-hoverable" to="/common">Common Metrics</Link>
                                    <hr className="navbar-divider"/>
                                    <Link className="navbar-item is-hoverable" to="/caremanager">Care Manager Metrics</Link>
                                    <hr className="navbar-divider"/>
                                    <Link className="navbar-item is-hoverable" to="/unknown">Unknown Metrics</Link>

                                </div>
                            </div>
                            
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="button is-link" href="feedback">
                                    {/* <span className="icon">
                                        <i className="fas fa-download"></i>         adding any icon in the connect button
                                    </span> */} 
                                    <span>Feedback</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar