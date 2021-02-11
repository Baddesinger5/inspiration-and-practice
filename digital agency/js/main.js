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
