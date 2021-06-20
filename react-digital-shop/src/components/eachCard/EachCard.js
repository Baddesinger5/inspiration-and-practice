import React, { useState } from 'react';
import './EachCard.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ChooseAlert from '../chooseAlert/ChooseAlert';

function EachCard({img, name, price, types, sizes, cartBtn, setCartBtn, cartItem, setCartItem, totalPrice,  setTotalPrice}) {
    const pizzaTypes = ['тонкое', 'традиционное'];
    const pizzaSizes = [26, 30, 40];
  

    const [activeDough, setActiveDough] = useState(types[0]);
    const [activeSize, setActiveSize] = useState();
    const [sizePrice, setSizePrice] = useState('Выберите размер');
    

    const [showChooseAlert, setShowChooseAlert] = useState(false)
    

    function onSelectType(index) {
        setActiveDough(index)
    }

    function onSelectSize(index) {
        setActiveSize(index);

        if (index === 0) {
            setSizePrice(price);
        } else if (index === 1) {
            setSizePrice(price + 5)
        } else if (index === 2) {
            setSizePrice(price + 7 )
        }      
    }

    function addToCart() {
        if (activeSize === undefined) {
            setShowChooseAlert(true)
        } else {
            
            setCartBtn(cartBtn + 1);
            setCartItem([
                ...cartItem,
                {
                    name: name, price: sizePrice, dough: pizzaTypes[activeDough], size: pizzaSizes[activeSize] + ' см.' , img: img, id: Math.random() * 10000
                }
            ]);
            setTotalPrice(totalPrice + sizePrice)
        }
    }


    if (showChooseAlert === true) {
        setTimeout(() => {
            setShowChooseAlert(false)
        }, 3000);
    }

    // console.log(totalPrice);
    return (
        <div className="card">
            <img className="card-image" src={img} alt="Pizza"/>
            <h3 className="pizza-title">{name}</h3>

            <div className="setting">
                {pizzaTypes.map( (type, index) => (
                    <button key={type}  onClick={() => onSelectType(index)} className={classNames("setting-item-type", {
                        'setting-type-active': activeDough === index,
                        'setting-type-disabled': !types.includes(index)
                    })}>{type}</button>
                ))}

                {pizzaSizes.map( (size, index) => (
                    <button key={size} onClick={ () => onSelectSize(index)} className={classNames("setting-item", {
                        "setting-item-active":  activeSize === index,
                        "setting-item-disabled": !sizes.includes(size)
                    })} >{size} см.</button>
                ))}
 
            </div>

            <div className="info-part">
                <p className="cost">{sizePrice && activeSize === 0 || activeSize === 1 || activeSize === 2 ? sizePrice + ' руб.' : sizePrice }  </p>

                <button className="add-to-cart" onClick={addToCart}>
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"/></g></g></svg>
                    Добавить
                </button>
            </div>

            {showChooseAlert ? <ChooseAlert /> : null}
            
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
export default EachCard;