import React from 'react';
import './CartItem.css';

export default function CartItem({size, img, dough, price, name, cartBtn, setCartBtn, cartItem, setCartItem, totalPrice, setTotalPrice, id}) {
    
    function deleteItem() {  //функция для удаления одной позиции в корзине
        setCartItem(cartItem.filter(function(item) { // классическая фильтрация по всему содержимому корзины
            return item.id !== id // если айдишник перебираемого и существующего в корзине не равны - уибираем, иначе оставляем
        }))
        setCartBtn(cartBtn - 1) //не забываем в кнопке отминусовать позицию
        setTotalPrice(totalPrice - price) // отнять от итоговой суммы цену удаляемой позиции

        
    }   
    
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

//создаем компонент, куда принимаем содержимое из нашей базы данных и распихиваем по нужным местам: картинки в картинку, имя, цену и тд.
//вещаем обработчик на кнопку удаления