//вывод по нажатию клавиш в текстареа
//нужно добавить переключение по трем нажатиям (первая буква большая, все время болшие буквы и переход к маленьким)
//добавить изменение регистра на саму клавиатуру
// добавить функционал: удаление символа, новая строка, пробел
//добавить набор по клавиатуре

//enter the values of buttons in textarea
const textArea = document.querySelector('#textarea');
let btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        btn.classList.add('active');
        setTimeout(function() {
            btn.classList.remove('active');
        }, 100);

        if (capslockBtn.classList.contains('active-caps')) {
            textArea.append(btn.value.toUpperCase());
        }

        if (!capslockBtn.classList.contains('active-caps')) {
            textArea.append(btn.value.toLowerCase());
        }

    });

    //keyboards press

});

//add backspace


//add space
const spaceBtn = document.querySelector('.space');
spaceBtn.addEventListener('click', function() {
    textArea.append(' ');
});

//add new row
const enterBtn = document.querySelector('.enter');
enterBtn.addEventListener('click', function() {
    textArea.append('\n');
}); 

//uppercase in keyboard
const capslockBtn = document.querySelector('.capslock');
const greenMark = document.querySelector('#caps-btn');

capslockBtn.addEventListener('click', function(event) {
    let target = event.target;
    if (!target.classList.contains('active-caps')) {
        capslockBtn.classList.add('active-caps');
        greenMark.style.display = 'block';

        btns.forEach(function(btn) {
            if(!btn.classList.contains('backspace') && !btn.classList.contains('enter') && !btn.classList.contains('space')) {
                btn.textContent = btn.textContent.toUpperCase();
            }
        })
    } else {
        capslockBtn.classList.remove('active-caps');
        greenMark.style.display = 'none';

        btns.forEach(function(btn) {
            if(!btn.classList.contains('backspace') && !btn.classList.contains('enter') && !btn.classList.contains('space')) {
                btn.textContent = btn.textContent.toLowerCase();
            }
        })
    }
});


