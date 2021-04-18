window.addEventListener('load', function() {

    let long;
    let lat;
    let myLocation = document.querySelector('.location');
    let temperature = document.querySelector('.temperature');
    let weaterType = document.querySelector('.weater-type');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=ec68830ca733482dbd35ba2273d69c4f&include=minutely`;
            
            fetch(api)
                .then(respons => {
                    return respons.json();
                })
                .then(data => {
                    console.log(data);
                    const {temp, timezone } = data.data[0];
                    const { description } = data.data[0].weather;
                    //set dom elements from API
                    temperature.textContent = temp;
                    myLocation.textContent = timezone;
                    weaterType.textContent = description;
                })
        });
    } else {
        //добавить надпись а-ля "включи геолокацию чтобы показать температуру"
    }

    

});

