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