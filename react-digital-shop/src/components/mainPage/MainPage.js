import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainPage.css';
import HeaderLogo from '../header-logo/HeaderLogo';

export default function MainPage() { //компонент главной страницы
    return (
        <div className="title-wrapper">

            <HeaderLogo />

            <div className="main_page-content">

                <div className="main_page-titles-wrapper"> 
                    <h1 className="first-title">Pizza Pizza Delivery</h1>
                    <h2 className="second-title">Быстро. Вкусно. Незабываемо.</h2>
                    
                    <div className="main_page-button-wrapper">
                        <button className="main_page-btn">
                           <NavLink className="main_page-link" to="/goods" />
                            Заказать</button>
                            {/* ссылку на страницу с товарами */}
                    </div>
                </div>
            </div>
        </div>
    )
}