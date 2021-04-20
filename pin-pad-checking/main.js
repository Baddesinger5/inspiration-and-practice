//создать условие для харанее заданного кода авторизации (придумать код из 4 цифр)
//сделать возможность удаления символов из инпута
//сдеалть эффект неправильного ввода цифр
//при неправильном вводе удалить все из инпута, после эффекта
//при правильном пароле, либо сделать переход на страницу, либо скрыть пинпад и показать какоето сообщение
let input = document.querySelector('input');
let btns = document.querySelectorAll('.btn');
let times = 4;
const backspace = document.querySelector('.backspace');
const done = document.querySelector('.done');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        if (times > 0 && event.target.matches('.number')) {
            document.querySelector('input').value += btn.value;
            times--;
        } 
        console.log(event.target);
    });
});

