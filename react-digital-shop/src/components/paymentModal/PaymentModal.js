import React from 'react';
import './PaymentModal.css';

export default function PaymentModal({setPaymentModal, setOverlay, setCartBtn, setCartItem, setTotalPrice}) { //модалка оплаты

    function closePaymentModal() { //функция для сброса содержимого корзины
        setPaymentModal(false) // зкрываем окно с перенаправлением
        setOverlay(false) //убираем оверлей
        setCartBtn(0) //сбрасываем содержимое кнопки
        setCartItem([]) //сбрасываем содержимое корзины
        setTotalPrice(0) //обнуляем цену на странице
    }
    return (
        <div className="paymentModal">
            <h1>Вы будете перенаправлены на страницу оплаты заказа</h1>
            <h6>На самом деле нет, это просто имитация. Чтобы продолжить нажмите кнопку</h6>

            <div className="paymentModal_btn-wrapper">
                <button className="paymentModal_btn" onClick={closePaymentModal}>Продолжить</button>
                {/* тут мы получаем уведомление и если нажимаем продолжить, сбрасывается все */}
            </div>
        </div>
    )
}