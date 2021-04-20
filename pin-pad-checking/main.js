//создать условие для харанее заданного кода авторизации (придумать код из 4 цифр)
//сделать возможность удаления символов из инпута
//сдеалть эффект неправильного ввода цифр
//при неправильном вводе удалить все из инпута, после эффекта
//при правильном пароле, либо сделать переход на страницу, либо скрыть пинпад и показать какоето сообщение
let input = document.querySelector('input').value;
let btns = document.querySelectorAll('.btn');
let times = 4;

btns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        if (times > 0) {
            event.preventDefault();
            document.querySelector('input').value += btn.value;
            times--;
        }

        
    });
});
