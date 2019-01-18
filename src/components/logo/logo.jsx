import React from "react";
import logo from "./logo.svg";

export default () => {
    return (
        <div>
            <a href="/" title="TekTask" rel="home" id="logo">
                <img className="hidden-sm-down" src={logo} alt="TekTask"/>
            </a>
        </div>
    );
};
