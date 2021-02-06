// parallax scene

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('scene4');
var parallaxInstance = new Parallax(scene4);

var scene = document.getElementById('scene5');
var parallaxInstance = new Parallax(scene5);

var scene = document.getElementById('scene1');
var parallaxInstance = new Parallax(scene1);

var scene = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene2);

var scene = document.getElementById('scene3');
var parallaxInstance = new Parallax(scene3);


// change color ===================================================================================

let colorBlue = document.querySelector('.first');
let colorViolet = document.querySelector('.second');
let colorGray = document.querySelector('.third');

let colorBlueID = document.querySelector('#colorBlue');
let colorVioletID = document.querySelector('#colorViolet');
let colorGrayID = document.querySelector('#colorGray');

let cardBg = document.querySelector('.card-bg');

colorVioletID.style.display = 'none';
colorGrayID.style.display = 'none';

// blue btn
let blueBtn = colorBlue.addEventListener('click', function(){
    colorBlueID.style.display = 'block';
    colorVioletID.style.display = 'none';
    colorGrayID.style.display = 'none';

    document.querySelector('.card-title').innerHTML = '0' + 1;

    cardBg.setAttribute('style', 'background: linear-gradient(10deg, #005397, #152645)');
    
    function fadeIn() {
        let opacity = 0.01;
      
        colorBlueID.style.display = "block";
        var timer = setInterval(function() {
            if(opacity >= 1) {
                clearInterval(timer);
            }
            colorBlueID.style.opacity = opacity;
            opacity += opacity * 0.1;
        }, 10);
        
    } fadeIn("#colorBlueID");
})

// violet btn
let violetBtn = colorViolet.addEventListener('click', function(){
    colorBlueID.style.display = 'none';
    colorVioletID.style.display = 'block';
    colorGrayID.style.display = 'none';

    document.querySelector('.card-title').innerHTML = '0' + 2;

    cardBg.setAttribute('style', 'background: linear-gradient(10deg, #C02A45, #750B69);');

    function fadeIn() {
        let opacity = 0.01;
      
        colorVioletID.style.display = "block";
        var timer = setInterval(function() {
            if(opacity >= 1) {
                clearInterval(timer);
            }
            colorVioletID.style.opacity = opacity;
            opacity += opacity * 0.1;
        }, 10);
        
    } fadeIn("#colorVioletID");

})


// gray btn 
let grayBtn = colorGray.addEventListener('click', function() {
    colorBlueID.style.display = 'none';
    colorVioletID.style.display = 'none';
    colorGrayID.style.display = 'block';

    document.querySelector('.card-title').innerHTML = '0' + 3;

    cardBg.setAttribute('style', 'background: linear-gradient(10deg, #C2CBD0, #A5ACB3);');

    function fadeIn() {
        let opacity = 0.01;
      
        colorGrayID.style.display = "block";
        var timer = setInterval(function() {
            if(opacity >= 1) {
                clearInterval(timer);
            }
            colorGrayID.style.opacity = opacity;
            opacity += opacity * 0.1;
        }, 10);
        
    } fadeIn("#colorGrayID");


})
//========================================================================================
