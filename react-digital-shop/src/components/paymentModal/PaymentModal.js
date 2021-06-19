import React from 'react';
import './PaymentModal.css';

export default function PaymentModal({setPaymentModal, setOverlay, setCartBtn, setCartItem, setTotalPrice}) {

    function closePaymentModal() {
        setPaymentModal(false)
        setOverlay(false)
        setCartBtn(0)
        setCartItem([])
        setTotalPrice(0)
    }
    return (
        <div className="paymentModal">
            <h1>Вы будете перенаправлены на страницу оплаты заказа</h1>
            <h6>На самом деле нет, это просто имитация. Чтобы продолжить нажмите кнопку</h6>

            <div className="paymentModal_btn-wrapper">
                <button className="paymentModal_btn" onClick={closePaymentModal}>Продолжить</button>
            </div>
        </div>
    )
}