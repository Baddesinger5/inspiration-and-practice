import React from 'react';
import './CartItem.css';

export default function CartItem({size, img, dough, price, name, cartBtn, setCartBtn, cartItem, setCartItem, totalPrice, setTotalPrice, id}) {
    
    function deleteItem() {
        setCartItem(cartItem.filter(function(item) {
            return item.id !== id
        }))
        setCartBtn(cartBtn - 1)
        setTotalPrice(totalPrice - price)

        
    }
    
    
    // console.log(size);
    return (
        <div className="cartItem-wrapper">

            <div className="pizza-info-wrapper">

                <div className="pizza-img-wrapper">
                    <img className="pizza-img" src={img} alt="pizza"/>
                </div>

                <div className="pizza-info">
                    <h5 className="pizza-name">{name}</h5>
                    <p className="pizza-desc">{`${dough} тесто, размер ${size}`} <b>{`Цена: ${price} руб.`}</b></p>
                </div>

                <div className="deleteBtn-wrapper">
                    <button className="deleteBtn" onClick={deleteItem}>Убрать позицию</button>
                </div>

                
            </div>

        </div>
        
    )
}