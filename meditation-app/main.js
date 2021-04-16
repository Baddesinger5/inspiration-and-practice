//ебанистический плеер посредине и кнопками вкл и выкл и прогрессив бар анимированный

//changed bg

const sunBtn = document.querySelector('.sun-btn');
const rainBtn = document.querySelector('.rain-btn');

let sunVideo = document.querySelector('.sun-video');
let rainVideo = document.querySelector('.rain-video');

const restartBtn = document.querySelector('.restart');


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

function setTwoMin() {
    let minutes = twoMinutesBtn.value / 60 % 60;
        let seconds = twoMinutesBtn.value % 60;
    
        if (twoMinutesBtn.value < 0) {
            clearInterval(clearTwo);
            restartBtn.style.display = 'block';
            restartBtn.classList.add('active');
            timer.style.display = 'none';

            twoMinutesBtn.addEventListener('click', addFuncForTwo);
            fiveMinutesBtn.addEventListener('click', addFuncForFive);
            tenMinutesBtn.addEventListener('click', addFuncForTen);
            if (sunVideo || rainVideo) {
                sunVideo.pause();
                rainVideo.pause();
            }
        } else {
            timer.style.display = 'block'
            let count = `${Math.trunc(minutes)}:${seconds}`;
            timer.textContent = count;
        }
        --twoMinutesBtn.value;
}

function setFiveMin() {
    let minutes = fiveMinutesBtn.value / 60 % 60;
        let seconds = fiveMinutesBtn.value % 60;
    
        if (fiveMinutesBtn.value < 0) {
            clearInterval(clearFive);
            restartBtn.style.display = 'block';
            restartBtn.classList.add('active');
            timer.style.display = 'none';

            twoMinutesBtn.addEventListener('click', addFuncForTwo);
            fiveMinutesBtn.addEventListener('click', addFuncForFive);
            tenMinutesBtn.addEventListener('click', addFuncForTen);
            if (sunVideo || rainVideo) {
                sunVideo.pause();
                rainVideo.pause();
            }
            
        } else {
            timer.style.display = 'block'
            let count = `${Math.floor(minutes)}:${seconds}`;
            timer.textContent = count;
        }
        --fiveMinutesBtn.value;
}

function setTenMin() {
    let minutes = tenMinutesBtn.value / 60 % 60;
        let seconds = tenMinutesBtn.value % 60;
    
        if (tenMinutesBtn.value < 0) {
            clearInterval(clearTen);
            restartBtn.style.display = 'block';
            timer.style.display = 'none';
            restartBtn.classList.add('active');

            twoMinutesBtn.addEventListener('click', addFuncForTwo);
            fiveMinutesBtn.addEventListener('click', addFuncForFive);
            tenMinutesBtn.addEventListener('click', addFuncForTen);
            if (sunVideo || rainVideo) {
                sunVideo.pause();
                rainVideo.pause();
            }
        } else {
            timer.style.display = 'block'
            let count = `${Math.trunc(minutes)}:${seconds}`;
            timer.textContent = count;
        }
        --tenMinutesBtn.value;
}


let clearTwo;
let clearFive;
let clearTen;

function funcs() {
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

        if (playVideo) {
            twoMinutesBtn.removeEventListener('click', addFuncForTwo);
            fiveMinutesBtn.removeEventListener('click', addFuncForFive);
            tenMinutesBtn.removeEventListener('click', addFuncForTen);
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

        if (pauseVideo) {
            twoMinutesBtn.addEventListener('click', addFuncForTwo);
            fiveMinutesBtn.addEventListener('click', addFuncForFive);
            tenMinutesBtn.addEventListener('click', addFuncForTen);
        }
    
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

function addFuncForTwo() {
    twoMinutesBtn.classList.add('active');
    fiveMinutesBtn.classList.remove('active');
    tenMinutesBtn.classList.remove('active');

    if (restartBtn.classList.contains('active')) {
        timer.style.display = 'block';
        restartBtn.style.display = 'none';
        restartBtn.classList.remove('active');
    }
    

    timer.textContent = 2 + ':' + 0 + 0;  
    twoMinutesBtn.value = 5; //выставить исходные значения
}

function addFuncForFive() {
    twoMinutesBtn.classList.remove('active');
    fiveMinutesBtn.classList.add('active');
    tenMinutesBtn.classList.remove('active');

    if (restartBtn.classList.contains('active')) {
        timer.style.display = 'block';
        restartBtn.style.display = 'none';
        restartBtn.classList.remove('active');
    }
    timer.textContent = 5 + ':' + 0 + 0;
    fiveMinutesBtn.value = 5; //выставить исходные значения
}

function addFuncForTen() {
    twoMinutesBtn.classList.remove('active');
    fiveMinutesBtn.classList.remove('active');
    tenMinutesBtn.classList.add('active');

    if (restartBtn.classList.contains('active')) {
        timer.style.display = 'block';
        restartBtn.style.display = 'none';
        restartBtn.classList.remove('active');
    }
    timer.textContent = 10 + ':' + 0 + 0;
    tenMinutesBtn.value = 5;  //выставить исходные значения
}
twoMinutesBtn.addEventListener('click', addFuncForTwo);
fiveMinutesBtn.addEventListener('click', addFuncForFive);
tenMinutesBtn.addEventListener('click', addFuncForTen);


//что будет когда таймер закончился
//пробовать анимировать прогресс бар