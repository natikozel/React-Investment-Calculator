import logo from '../assets/investment-calculator-logo.png';
import React from "react";


export const Header = (): React.JSX.Element => {
    return (
        <header id="header">
            <img src={logo} alt="logo"></img>
            <h1>Investment Calculator</h1>
        </header>
    );
};