import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import GoodsPage from './components/goodsPage/GoodsPage';
import MainPage from './components/mainPage/MainPage';
import CartPage from './components/cartPage/CartPage';

function App() {
  const [cartBtn, setCartBtn] = useState(0); //стейт для отображения количества товаров в корзине (в кнопке)
  const [cartItem, setCartItem] = useState([]) //стейт с содержимым корзины
  const [totalPrice, setTotalPrice] = useState(0) // сумма заказа

  return (
    <div>
          <Route path="/" exact component={MainPage}/>
          <Route path="/goods" exact>
            <GoodsPage cartBtn={cartBtn} setCartBtn={setCartBtn} cartItem={cartItem} setCartItem={setCartItem} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
          </Route>
          <Route path="/cart" exact>
            <CartPage cartBtn={cartBtn} setCartBtn={setCartBtn} cartItem={cartItem} setCartItem={setCartItem} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
          </Route>
    </div>
  );
}

export default App;
