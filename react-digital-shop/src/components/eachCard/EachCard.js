import React, { useState } from 'react';
import './EachCard.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ChooseAlert from '../chooseAlert/ChooseAlert';

function EachCard({img, name, price, types, sizes, cartBtn, setCartBtn, cartItem, setCartItem, totalPrice,  setTotalPrice}) { //функция для каждой карточки иее содержимого
    const pizzaTypes = ['тонкое', 'традиционное']; //вносим сюда содержимое, чтобы сопоставить его потом с базой данных о товаре
    const pizzaSizes = [26, 30, 40]; // тут так же мы вносим размеры пицц, которые у нас есть
  

    const [activeDough, setActiveDough] = useState(types[0]); //тут мы вносим тип теста, а так же что по умолчанию активный будет первый элемент из базы данных
    const [activeSize, setActiveSize] = useState(); //сюда вносится активный размер пиццы (который выбран)
    const [sizePrice, setSizePrice] = useState('Выберите размер'); //стейт в котором по умолчанию вместо суммы - надпись, стейт меняется при выборе размера пиццы
    

    const [showChooseAlert, setShowChooseAlert] = useState(false) //стейт для окна, если мы пытаемся добавить пиццу без выбранного размера
    

    function onSelectType(index) { //функция, принимающая парамерт индекса
        setActiveDough(index) //и стейт, в который мы вносим этот сам индекс (по индексу мы смотрим какое тесто из БД из types)
    }

    function onSelectSize(index) { //тут мы так же принимаем индекс
        setActiveSize(index); //вномис в стейт индекс для выбранного размера

        if (index === 0) { // в зависимости от выбранного по индексу элемента
            setSizePrice(price); // мы задаем цену
        } else if (index === 1) { // а так же меняем ее
            setSizePrice(price + 5)
        } else if (index === 2) {
            setSizePrice(price + 7 )
        }      
    }

    function addToCart() { //функция для добавления в корзину
        if (activeSize === undefined) { //если у нас не выбран размер пиццы
            setShowChooseAlert(true) //показываем предупреждение, что надо выбрать размер
        } else { //инчае
            
            setCartBtn(cartBtn + 1); //меняем число в кнопке корзины
            setCartItem([ //добавляем элемент в корзину
                ...cartItem, // где разворачиваем ее содержимое
                { //и вкидываем сюда нужные нам поля
                    name: name, price: sizePrice, dough: pizzaTypes[activeDough], size: pizzaSizes[activeSize] + ' см.' , img: img, id: Math.random() * 10000
                }
            ]);
            setTotalPrice(totalPrice + sizePrice) // а так же суммируем итоговую стоимость
        }
    }


    if (showChooseAlert === true) { //если окно с предупреждением показано
        setTimeout(() => { //устанавливаем таймер
            setShowChooseAlert(false) // что оно будет спрятано 
        }, 3000); // через три секунды
    }

    return (
        <div className="card">
            <img className="card-image" src={img} alt="Pizza"/>
            <h3 className="pizza-title">{name}</h3>

            <div className="setting">
                {/* выводим здесь все типы нашего теста, а так же устанавливаем для каждой кнопки функцию, которая будет задавть индекс, класс,
                а так же мы пишем условие, при котором будет работать подстветка активного типа теста */}
                {pizzaTypes.map( (type, index) => (
                    <button key={type}  onClick={() => onSelectType(index)} className={classNames("setting-item-type", {
                        'setting-type-active': activeDough === index,
                        'setting-type-disabled': !types.includes(index)
                        // если индекс из БД не содержит в себе такой же индекс из массива с именами тест, тогда мы отключаем этот тип теста
                    })}>{type}</button>
                ))}

                {pizzaSizes.map( (size, index) => (
                    // тут так же выводим все размеры,из массива в начале компонента
                    <button key={size} onClick={ () => onSelectSize(index)} className={classNames("setting-item", {
                        "setting-item-active":  activeSize === index,
                        "setting-item-disabled": !sizes.includes(size)
                        // так же по индексу чекаем активный размер, если индекс из массива не совпадаем с размером из БД то отключаем такой размер
                    })} >{size} см.</button>
                ))}
 
            </div>

            <div className="info-part">
                {/* тут выводим цену с учетом выбора размера питцы, по умолчанию у нас тот стейт где "выберите размер", 
                а затем мы уже показываем выбранный размер и его стоимость*/}
                <p className="cost">{(sizePrice && activeSize === 0) || activeSize === 1 || activeSize === 2 ? sizePrice + ' руб.' : sizePrice }  </p>

                <button className="add-to-cart" onClick={addToCart}>
                    {/* кнопка для добавления в корзину */}
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"/></g></g></svg>
                    Добавить
                </button>
            </div>

            {showChooseAlert ? <ChooseAlert /> : null}
            {/* условие для показа алерта */}
        </div>                         
    )
}

EachCard.propTypes = {
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    price: PropTypes.number,
}
EachCard.defaultProps ={
    types: [],
    sizes: [],
}
// тут мы задаем по умолчанию типы данных, а так же вверху обязательные параметры
export default EachCard;