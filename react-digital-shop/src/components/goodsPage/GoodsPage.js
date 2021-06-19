import React, { useEffect, useState, useMemo } from 'react';
import './GoodsPage.css';
import HeaderLogo from '../header-logo/HeaderLogo';
import axios from 'axios';
import EachCard from '../eachCard/EachCard';
import CartBtn from '../cartBtn/CartBtn';

const SORT_OPTIONS = [
    { key:   'id', type: 'number', name: 'популярности' },
    { key: 'name', type: 'string', name: 'алфавиту' },
    { key:  'price', type: 'number', name: 'цене' },
  ];

const SORT_FUNCTIONS = {
    number: (a, b) => a - b,
    string: (a, b) => a.localeCompare(b),
  };


export default function GoodsPage({cartBtn, setCartBtn, cartItem, setCartItem, totalPrice, setTotalPrice} ) {
        
        
        const [goods, setGoods] = useState([]);

        useEffect( () => {
            axios.get('https://testing-for-backend-default-rtdb.europe-west1.firebasedatabase.app/pizza.json')
                .then(res => { setGoods(res.data)})
                .catch(err => console.log(err))
        }, []);


        const [filtered, setFiltered] = useState([]);
        const [selected, setSelected] = useState(0)
        
        useMemo( () => {
            const { key, type } = SORT_OPTIONS[selected];
            const f = SORT_FUNCTIONS[type];
            return filtered.sort( (a, b) => f(a[key], b[key]));
        }, [filtered, selected])
        
        const onSortChange = e => setSelected(+e.target.value)
        

        function btnHandlers(e) {
            let target = e.target.value;

            document.querySelectorAll('.filter-btn').forEach(function(item) {
                item.classList.remove('active');
            })

            if (target === 'Все') {
                setFiltered(goods);
                e.target.classList.add('active')
                
            } else if (target === 'Новинки') {
                setFiltered(goods.filter(item => {
                    return item.new
                })) 
                e.target.classList.add('active')
                
            } else if (target === 'Мясные') {
                setFiltered(goods.filter(item => {
                    return item.meat 
                })) 
                e.target.classList.add('active')

            } else if (target === 'Острые') {
                setFiltered(goods.filter(item => {
                    return item.spicy
                })) 
                e.target.classList.add('active')
            }
            // } else if (target === 'Напитки') {
            //     setFiltered(goods.filter(item => {
            //         return item.drink
            //     })) 
            //     e.target.classList.add('active')

            // } else if (target === 'Закуски') {
            //     setFiltered(goods.filter(item => {
            //         return item.snacks
            //     })) 
            //     e.target.classList.add('active')
            // }
        }

        useEffect( () => {
            setFiltered(goods)
        }, [goods])

        // console.log(aaa);
            return (
            <>
            <HeaderLogo />

                <div className="goods_page-wrapper">
                
                  <div className="goods-container">

                    <div className="cart-wrapper">
                        <CartBtn 
                            cartBtn={cartBtn} 
                            setCartBtn={setCartBtn} 
                            cartItem={cartItem} 
                            setCartItem={setCartItem} 
                            totalPrice={totalPrice} 
                            setTotalPrice={setTotalPrice}
                        />
                    </div>

                    <div className="goods-filters-wrapper">
                        <div className="goods_filter-types">
                            <button value="Все" className="filter-btn active" onClick={btnHandlers}>Все</button>
                            <button value="Новинки" className="filter-btn" onClick={btnHandlers}>Новинки</button>
                            <button value="Мясные" className="filter-btn" onClick={btnHandlers}>Мясные</button>
                            <button value="Острые" className="filter-btn" onClick={btnHandlers}>Острые</button>
                            {/* <button value="Напитки" className="filter-btn" onClick={btnHandlers}>Напитки</button>
                            <button value="Закуски" className="filter-btn" onClick={btnHandlers}>Закуски</button> */}
                        </div>

                        <div className="goods_filter-sort">                           
                            <p className="sort-title">Сортировать по: </p>
                            
                            <select className="sort-select" value={selected} onChange={onSortChange}> 
                                {SORT_OPTIONS.map( (n, i) => <option key={i} value={i}>{n.name}</option>)}

                            </select>
                        </div>
                    
                </div> 
                   
                    <div className="cards-wrapper">
                        {filtered.map((item, index) => {
                                return (
                                
                                <EachCard 
                                        cartItem={cartItem} 
                                        setCartItem={setCartItem} 
                                        cartBtn={cartBtn} 
                                        setCartBtn={setCartBtn} 
                                        key={index}
                                        totalPrice={totalPrice} 
                                        setTotalPrice={setTotalPrice}
                                        {...item}/>
                                
                            )
                        })} 

                </div>
            </div>
        </div>

    </>)}


