//3 варианта - 2 минты медитации, 5, и 10.
//ебанистический плеер посредине и кнопками вкл и выкл и прогрессив бар анимированный

//changed bg

const sunBtn = document.querySelector('.sun-btn');
const rainBtn = document.querySelector('.rain-btn');

let sunVideo = document.querySelector('.sun-video');
let rainVideo = document.querySelector('.rain-video');

sunBtn.addEventListener('click', function() {
    sunVideo.style.display = 'block';
    sunVideo.classList.add('active');

    rainVideo.style.display = 'none';
    rainVideo.classList.remove('active');
});

rainBtn.addEventListener('click', function() {
    sunVideo.style.display = 'none';
    sunVideo.classList.remove('active');

    rainVideo.style.display = 'block';
    rainVideo.classList.add('active');
});

//play button 
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');

playBtn.addEventListener('click', function() {
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
    if (sunVideo.classList.contains('active')) {
        sunVideo.play();
    }

    if (rainVideo.classList.contains('active')) {
        rainVideo.play();
    }
    
    
});

pauseBtn.addEventListener('click', function() {
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
    if (sunVideo.classList.contains('active')) {
        sunVideo.pause();
    }

    if (rainVideo.classList.contains('active')) {
        rainVideo.pause();
    }
})

//при включенном видео - переключатели типов видео сделать в проигрывании