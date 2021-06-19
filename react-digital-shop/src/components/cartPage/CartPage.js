import React, { useState } from 'react';
import './CartPage.css';
import { NavLink } from 'react-router-dom';
import HeaderLogo from '../header-logo/HeaderLogo';
import CartItem from '../cartItem/CartItem';
import Overlay from '../overlay/Overlay';
import PaymentModal from '../paymentModal/PaymentModal';
import NeedAddGoods from '../neddAddGoods/NeedAddGoods';

function CartPage({cartBtn, setCartBtn, cartItem, setCartItem, totalPrice, setTotalPrice}) {

    const [overlay, setOverlay] = useState(false); // оверлей
    const [paymentModal, setPaymentModal] = useState(false) // модалка для оплаты
    const [needAddGoods, setNeedAddGoods] = useState(false)

    function showPaymentModal() {
        if (cartItem.length === 0) {
            setNeedAddGoods(true)
        } else {
            setOverlay(true);
            setPaymentModal(true)
        }
    }

    if (needAddGoods === true) {
        setTimeout(() => {
            setNeedAddGoods(false)
        }, 3000);
    }

    console.log(cartItem);
    return (
        <> 
        <HeaderLogo/>
            <div className="cartPage-wrapper">
                <div className="cartPage-container">

                    <div className="backBtn-wrapper">
                        <button className="backBtn">
                            
                            <NavLink to="/goods" className="backBtn-link" />
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#eb5a1e"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/></svg>
                            </span>    
                            Вернуться назад
                        </button>
                    </div>

                    <h1 className="cartPage-title">Ваш заказ:</h1>
                    
                    <div className="ul-wrapper"> 
                        <ul className="cart-list">
                                {cartItem.map( (item, index) => (
                                    <CartItem item={item} key={index} {...item} 
                                                setCartItem={setCartItem} 
                                                cartItem={cartItem} 
                                                cartBtn={cartBtn} 
                                                setCartBtn={setCartBtn}
                                                totalPrice={totalPrice}
                                                setTotalPrice={setTotalPrice}
                                                />
                                ))}              
                        </ul>
                    </div>
                                    
                    <div className="total-price">
                        Сумма заказа: {totalPrice} руб.
                    </div>

                    <div className="paymentBtn-wrapper">
                        <button className="paymentBtn" onClick={showPaymentModal}>Оплатить заказ</button>
                    </div>
                </div>

               
            </div>
            {paymentModal ? <PaymentModal setCartBtn={setCartBtn} setCartItem={setCartItem} setTotalPrice={setTotalPrice} setPaymentModal={setPaymentModal} setOverlay={setOverlay}/> : null} 
            {overlay ?  <Overlay /> : null}

            {needAddGoods ? <NeedAddGoods /> : null}
            
        </>
        
    )
}

CartPage.defaultProps ={
    cartItem: [],
}

export default CartPage;