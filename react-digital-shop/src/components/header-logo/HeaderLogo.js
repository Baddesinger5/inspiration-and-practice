import React from 'react';
import './HeaderLogo.css';
import Logo from '../../images/logo.png';

export default function HeaderLogo() { //обычный компонент навбара
    return (
        <div className="logo-wraper">
                <img className="logo" src={Logo} alt="logo"/>
                <p className="logo-name">Pizza Pizza</p>
        </div> 
    )
}