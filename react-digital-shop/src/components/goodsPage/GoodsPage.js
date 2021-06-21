import React, { useEffect, useState, useMemo } from 'react';
import './GoodsPage.css';
import HeaderLogo from '../header-logo/HeaderLogo';
import axios from 'axios';
import EachCard from '../eachCard/EachCard';
import CartBtn from '../cartBtn/CartBtn';

const SORT_OPTIONS = [ //массив для условий фильтрации
    { key:   'id', type: 'number', name: 'популярности' }, //фильтруем по айди, тип айди - число, имя в селекте - "популярности"
    { key: 'name', type: 'string', name: 'алфавиту' }, // тоже самое и далее
    { key:  'price', type: 'number', name: 'цене' },
  ];

const SORT_FUNCTIONS = { //прописываем условия сравнения для каждого типа данных
    number: (a, b) => a - b, //если это число, мы чекаем чтобы А было меньше числа b
    string: (a, b) => a.localeCompare(b), //если строка - сравниваем строку А со строкой B
  };


export default function GoodsPage({cartBtn, setCartBtn, cartItem, setCartItem, totalPrice, setTotalPrice} ) {
        
        
        const [goods, setGoods] = useState([]); //тут лежат у нас все товары, принимаемые с сервера

        useEffect( () => {
            axios.get('https://testing-for-backend-default-rtdb.europe-west1.firebasedatabase.app/pizza.json') //делаем запрос к серверу
                .then(res => { setGoods(res.data)}) //заносим ответ от сервера в наш стейт
                .catch(err => console.log(err)) //если ошибка то в консоль ее
        }, []);


        const [filtered, setFiltered] = useState([]); //сюда мы складываем отфильтрованные товары, чтобы можно было потом вернуться к значению по умолчанию
        const [selected, setSelected] = useState(0) //тут индексы для нашего селектед и оптионс внутри, по умолчанию первый оптионс
        
        useMemo( () => { //с оптимизацией пишем условие фильтрации
            const { key, type } = SORT_OPTIONS[selected]; //деструктурируем переменные из массива с условиями фильтрации(с указанием индекса из стейта)
            const f = SORT_FUNCTIONS[type]; //делаем переменную, в которую заносим тип фильтрации (где мы писали условия фильтрации дял типа данных)
            return filtered.sort( (a, b) => f(a[key], b[key])); //возвращаем сюда наш стейт с фильтрацией, проходимся методом сорт, где возвращаем тип сфильтрации по переменной и в качестве параметров срвниваем их между собой с ключами (вроде как так)
        }, [filtered, selected]) //в зависимости от этих двух стейтов мы запускаем наши сортировки
        
        const onSortChange = e => setSelected(+e.target.value) //вешаем прослушку изменения в селект и по ивенту (приведя его к числу) пихаем в стейт с индексами для селекта
        
        function btnHandlers(e) { //функиця для обработки фильтров по кнопкам
            let target = e.target.value; //получаем вэлью по событию клика

            document.querySelectorAll('.filter-btn').forEach(function(item) { //получаем все кнопки 
                item.classList.remove('active'); //убираем у них фон активной ссылки
            })

            if (target === 'Все') { //если вэлью "Все"
                setFiltered(goods); //закидываем все получаемые с серва товары в фильтруемый массив
                e.target.classList.add('active') // а так же ставим активную кнопку
                
            } else if (target === 'Новинки') { //если "новинки"
                setFiltered(goods.filter(item => { //то в фильтруемый массив, через фильтр
                    return item.new //закидываем все товары у коготрых поле new === true
                })) 
                e.target.classList.add('active') //так же делаем активную кнопку
                
            } else if (target === 'Мясные') { //по аналогии так далее
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

        useEffect( () => { //делаем так
            setFiltered(goods) //мы закидываем в фильтрацию исходный товар
        }, [goods]) // по умолчанию, когда меняется этот стейт (т.е. при получении товаров с серва)

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
                                // уже отфильтрованные товары, мы хотим вывести на страницу, а значит пробегаемсся по этому массиву и передаем компоненту все данные
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


