//modal window
document.addEventListener('DOMContentLoaded', function() {
    // Вешаем событие при нажатии на show-modal
    var Show = document.getElementsByClassName('show-modal');
    [].forEach.call(Show, function(element, i) {       
      element.addEventListener('click', function(){
        showMessageDialog(i);
      });
    });
  
    // Вешаем событие при нажатии на кнопку закрытия close-modal
    var Close = document.getElementsByClassName('close-modal');
    [].forEach.call(Close, function(element, i) {       
      element.addEventListener('click', function(){
        closeMessageDialog(i);
      });
    });
  
  });
  
  function showMessageDialog(i){
    var modal = document.getElementsByClassName('modal')[i];
    var opacity = 0.01;
    modal.style.display = "block";
    modal.style.opacity = opacity;
    
    var timer = setInterval(function() {
        if(opacity >= 1) {  
            clearInterval(timer);
        }
        modal.style.opacity = opacity;
        opacity += opacity * 0.1;
        
    }, 10);     
  }
  
  function closeMessageDialog(i){
    var modal = document.getElementsByClassName('modal')[i];   
    var opacity = 1;
        var timer = setInterval(function() {
            if(opacity <= 0.1) {
                clearInterval(timer);
                modal.style.display = "none";
            }
            modal.style.opacity = opacity;
            opacity -= opacity * 0.1;
        }, 10);  
  }


  //sticky menu change bg color

  let ID_MENU = "header";//ИД меню
  let lightLogo = document.querySelector('#logo-light');
  let darkLogo = document.querySelector('#logo-dark');

  window.onload = function(){
      document.getElementById(ID_MENU).classList.add("bgColorTransparent");
  window.addEventListener("scroll",function(){
    // let element = document.getElementById(ID_MENU);
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;//текущая позиция скролла
    if(scrollTop == 0){
      
      document.getElementById(ID_MENU).classList.remove("bgColorWhite");
      document.getElementById(ID_MENU).classList.add("bgColorTransparent");     
      lightLogo.style.display = 'block';
      darkLogo.style.display = 'none';

    }
    else{
      document.getElementById(ID_MENU).classList.remove("bgColorTransparent");
      document.getElementById(ID_MENU).classList.add("bgColorWhite");
      lightLogo.style.display = 'none';
      darkLogo.style.display = 'block';
    }
  });
  };




// smooth scroll to blocks 


// var linkNav = document.querySelectorAll('[href^="#"]');
// var V = 0.5;  

// for (var i = 0; i < linkNav.length; i++) {
  
//   linkNav[i].addEventListener('click', function(e) { 
//         e.preventDefault(); 
//         var w = window.pageYOffset;
//         var hash = this.href.replace(/[^#]*(.*)/, '$1');  
//         var t = document.querySelector(hash).getBoundingClientRect().top;  // отступ от окна браузера до id
//         var start = null;
//         requestAnimationFrame(step); 

//         function step(time) {
//             if (start === null){
//               start = time;
//             } 
//             var progress = time - start;
//             var  r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));

//             window.scrollTo(0, r);

//             if (r != w + t) {
//                 requestAnimationFrame(step);
                
//             } else {
//                 location.hash = hash; 
//             }
//         }
//     }, true);
// }


var linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.5;  // скорость, может иметь дробное значение через точку
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].onclick = function(){
    var w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top - 100,
        start = null;
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
          r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
      window.scrollTo(0,r);
      if (r != w + t) {requestAnimationFrame(step)} else {location.hash = hash}
    }
    return false;
  }
}
