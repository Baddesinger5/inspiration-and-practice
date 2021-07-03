import React, {useState} from 'react';
import './SearchScreen.css';
import axios from 'axios';
import SearchItem from '../searchItem/SearchItem';

export default function SearchScreen() {

    
  const KEY = 'AIzaSyDQTEa3GqKX0y58H-8RlmT1onzRjboyW4s';

  const [videos, setVideos] = useState([]);
  const [inputValue, setInputValue] = useState('')

  function inputHandler(e) {
      setInputValue(e.target.value);
  }
  
  
  function handleSubmit(e) {
    e.preventDefault();
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${inputValue}&key=${KEY}`)
      .then(response => setVideos(response.data.items))
      .catch(error => console.log(error))
  }

  // console.log(videos)
    return (
        <div className="searchScreen-wrapper">

            <div className="searchScreen-container">

                <div className="input-wrapper">
                    <form onSubmit={handleSubmit}>
                        <input value={inputValue} className="input" placeholder="write something here..." onChange={inputHandler}/>
                    </form>
                </div>

              <section className="searchScreen-result">
                {videos.map( (item, index) => (
                  <SearchItem item={item} key={index} {...item} handleSubmit={handleSubmit}/>
                ))}
              </section>

            </div>
            

            {/* условие, если ничего нет на странице - вывести иконку лупы и подпись
            если что-то в поиске есть, то вывести результаты поиска */}
        </div>
    )
}