//3 варианта - 2 минты медитации, 5, и 10.
//ебанистический плеер посредине и кнопками вкл и выкл и прогрессив бар анимированный

//changed bg

const sunBtn = document.querySelector('.sun-btn');
const rainBtn = document.querySelector('.rain-btn');

let sunVideo = document.querySelector('.sun-video');
let rainVideo = document.querySelector('.rain-video');


function showSun() {
    sunVideo.style.display = 'block';
    sunVideo.classList.add('active');

    rainVideo.style.display = 'none';
    rainVideo.classList.remove('active');
};

function showRain() {
    sunVideo.style.display = 'none';
    sunVideo.classList.remove('active');

    rainVideo.style.display = 'block';
    rainVideo.classList.add('active');
};

sunBtn.addEventListener('click', showSun);
rainBtn.addEventListener('click', showRain);


//play button 
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
let allBtns = document.querySelectorAll('.btn');

// setInterval(function() {
//         let minutes = twoMinutesBtn.value / 60 % 60;
//         let seconds = twoMinutesBtn.value % 60;
    
//         if (twoMinutesBtn.value <= 0) {
//             clearInterval(setTime);
//         } else {
//             let count = `${Math.trunc(minutes)}:${seconds}`;
//             timer.textContent = count;
//         }
//         --twoMinutesBtn.value;
//     }, 1000)

function setTwoMin() {
    let minutes = twoMinutesBtn.value / 60 % 60;
        let seconds = twoMinutesBtn.value % 60;
    
        if (twoMinutesBtn.value <= 0) {
            clearInterval(clearTwo);
        } else {
            let count = `${Math.trunc(minutes)}:${seconds}`;
            timer.textContent = count;
        }
        --twoMinutesBtn.value;
}

function setFiveMin() {
    let minutes = fiveMinutesBtn.value / 60 % 60;
        let seconds = fiveMinutesBtn.value % 60;
    
        if (fiveMinutesBtn.value <= 0) {
            clearInterval(clearFive);
        } else {
            let count = `${Math.trunc(minutes)}:${seconds}`;
            timer.textContent = count;
        }
        --fiveMinutesBtn.value;
}

function setTenMin() {
    let minutes = tenMinutesBtn.value / 60 % 60;
        let seconds = tenMinutesBtn.value % 60;
    
        if (tenMinutesBtn.value <= 0) {
            clearInterval(clearTen);
        } else {
            let count = `${Math.trunc(minutes)}:${seconds}`;
            timer.textContent = count;
        }
        --tenMinutesBtn.value;
}

function funcs() {
    let clearTwo;
    let clearFive;
    let clearTen;

    function playVideo() {
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
        if(twoMinutesBtn.classList.contains('active')) {
            clearTwo = setInterval(setTwoMin, 1000);
        } else if (fiveMinutesBtn.classList.contains('active')) {
            clearFive = setInterval(setFiveMin, 1000);
        } else if(tenMinutesBtn.classList.contains('active')){
            clearTen = setInterval(setTenMin, 1000);
        }
    
    
        if (sunVideo.classList.contains('active')) {
            sunVideo.play();
        }   
    
        if (rainVideo.classList.contains('active')) {
            rainVideo.play();
        }

    }
    
    function pauseVideo() {
        playBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
        if (sunVideo.classList.contains('active')) {
            sunVideo.pause();
        }
    
        if (rainVideo.classList.contains('active')) {
            rainVideo.pause();
        }
        clearInterval(clearTwo);
        clearInterval(clearFive);
        clearInterval(clearTen);
    
    }

    playBtn.addEventListener('click', playVideo);   
    pauseBtn.addEventListener('click', pauseVideo);

}
funcs();



//add timer and countdown
const twoMinutesBtn = document.querySelector('.two-minutes');
const fiveMinutesBtn = document.querySelector('.five-minutes');
const tenMinutesBtn = document.querySelector('.ten-minutes');
let timer = document.querySelector('.timer');

twoMinutesBtn.addEventListener('click', function() {
    twoMinutesBtn.classList.add('active');
    fiveMinutesBtn.classList.remove('active');
    tenMinutesBtn.classList.remove('active');

    timer.textContent = 2 + ':' + 0 + 0;  
    twoMinutesBtn.value = 120;
});

fiveMinutesBtn.addEventListener('click', function() {
    twoMinutesBtn.classList.remove('active');
    fiveMinutesBtn.classList.add('active');
    tenMinutesBtn.classList.remove('active');
    timer.textContent = 5 + ':' + 0 + 0;
    fiveMinutesBtn.value = 300;
});

tenMinutesBtn.addEventListener('click', function() {
    twoMinutesBtn.classList.remove('active');
    fiveMinutesBtn.classList.remove('active');
    tenMinutesBtn.classList.add('active');

    timer.textContent = 10 + ':' + 0 + 0;
    tenMinutesBtn.value = 600;
});




//при выборе тайминга, передать его значения в таймер, и привязать кнопку старта и паузы к самому таймеру
