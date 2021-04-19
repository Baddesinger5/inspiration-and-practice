    let long;
    let lat;
    let myLocation = document.querySelector('.location');
    let cityName = document.querySelector('.city-name');
    let iconSet = document.querySelector('.icon');
    let temperature = document.querySelector('.temperature');
    let weaterType = document.querySelector('.weater-type');
    
    navigator.geolocation.getCurrentPosition(function(position) {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        const api = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=ec68830ca733482dbd35ba2273d69c4f&include=minutely`;
        
        fetch(api)
            .then(respons => {
                return respons.json();
            })
            .then(data => {
                const {temp, timezone, city_name } = data.data[0];
                const { description, icon } = data.data[0].weather;
                //set dom elements from API
                cityName.textContent = city_name;
                iconSet.innerHTML = `<img class="weater-icon" style="width: 50px; height: 50px;" src="https://www.weatherbit.io/static/img/icons/${icon}.png" alt="">`;
                temperature.textContent = temp;
                myLocation.textContent = timezone;
                weaterType.textContent = description;
            })
    }); 
