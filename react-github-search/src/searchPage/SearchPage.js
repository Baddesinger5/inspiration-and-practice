import axios from 'axios';
import React, { useState } from 'react';
import './SearchPage.css';
import { NavLink } from 'react-router-dom';
import SearchItem from '../searchItem/SearchItem';
import SearchImage from '../searchImage/SearchImage';

export default function SearchPage() {

    const [inputValue, setInputValue] = useState('')
    const [repos, setRepos] = useState([])

    function inputHandler(e) {
        setInputValue(e.target.value);
    }

    
    function submitHandler(e) {
        e.preventDefault();
        axios.get(`https://api.github.com/search/repositories?q=${inputValue}`)
            .then(res => { setRepos(res.data.items); })
            .catch(err => console.log(err))
    }   

    // console.log(license);

    return (
        <div className="searchPage-wrapper">

            <div className="searchPage-backBtn">
                <NavLink className="backBtn" to="/" exact>&lt; Back</NavLink>
            </div>

            <form onSubmit={submitHandler}>
                <input className="input" value={inputValue} onChange={inputHandler} placeholder="Write something here..." />
            </form>

            <h6>Found {repos.length} repositories.</h6>

            <section className="searchHape-repos">
                {
                repos.length > 0 
                ? repos.map( (item, index) => (
                    <SearchItem item={item} key={index} {...item} />
                ))
                : <SearchImage /> 
                }
            </section>
        </div>
    )
}