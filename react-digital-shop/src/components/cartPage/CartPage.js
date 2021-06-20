import React, { useState } from 'react';
import './CartPage.css';
import { NavLink } from 'react-router-dom';
import HeaderLogo from '../header-logo/HeaderLogo';
import CartItem from '../cartItem/CartItem';
import Overlay from '../overlay/Overlay';
import PaymentModal from '../paymentModal/PaymentModal';
import NeedAddGoods from '../neddAddGoods/NeedAddGoods';

function CartPage({cartBtn, setCartBtn, cartItem, setCartItem, totalPrice, setTotalPrice}) { //функция для отображения страницы корзины

    const [overlay, setOverlay] = useState(false); // оверлей
    const [paymentModal, setPaymentModal] = useState(false) // модалка для оплаты
    const [needAddGoods, setNeedAddGoods] = useState(false) // алерт, для того чтобы добавить что то в корзину

    function showPaymentModal() { // функция для появления модалки с оплатой
        if (cartItem.length === 0) { //если товаров нет в корзине
            setNeedAddGoods(true) // показываем алерт "добавьте в корзину"
        } else { //иначе
            setOverlay(true); //показываем оверлей
            setPaymentModal(true) //и поверх модалку для оплаты
        }
    }

    if (needAddGoods === true) { //если алерт "добавьте в корзину" показан
        setTimeout(() => { //устанавливаем таймер,
            setNeedAddGoods(false) // чтобы убрать его
        }, 3000);   // через 3 секунды
    }

    return (
        <> 
        <HeaderLogo/>
            <div className="cartPage-wrapper">
                <div className="cartPage-container">

                    <div className="backBtn-wrapper">
                        <button className="backBtn">
                            
                            <NavLink to="/goods" className="backBtn-link" />
                            {/* кнопка для возврата на страницу с товарами */}
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
                        {/* перебираем содержимое в корзине и делаем для каждого товара компонент, в который запихиваем всю инфу о позиции */}
                    </div>
                                    
                    <div className="total-price">
                        Сумма заказа: {totalPrice} руб.
                        {/* тут итоговая сумма заказа */}
                    </div>

                    <div className="paymentBtn-wrapper">
                        <button className="paymentBtn" onClick={showPaymentModal}>Оплатить заказ</button>
                        {/* кнопка для показа модалки с оплатой */}
                    </div>
                </div>

               
            </div>
            {paymentModal ? <PaymentModal setCartBtn={setCartBtn} setCartItem={setCartItem} setTotalPrice={setTotalPrice} setPaymentModal={setPaymentModal} setOverlay={setOverlay}/> : null} 
            {overlay ?  <Overlay /> : null}
            {/* если модалка для оплаты в положении true - показываем ее, иначе нет.
                плюс и для оверлея так же */}

            {needAddGoods ? <NeedAddGoods /> : null}
            {/* если алерт с "добавить в корзину" true - показываем, иначе нет */}
        </>
        
    )
}

CartPage.defaultProps ={ //по умолчанию соержимое корзины массив
    cartItem: [],
}

export default CartPage;