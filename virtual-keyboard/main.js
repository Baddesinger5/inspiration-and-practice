// добавить функционал: удаление символа, 
//добавить набор по клавиатуре
//добавить появление клавиатуры при нажатии на текстареа 
//добавить исчезновение клавиатуры при нажатии на чек

//enter the values of buttons in textarea
const textArea = document.querySelector('#textarea');
let btns = document.querySelectorAll('.btn');
let virtualKeyboard = document.querySelector('.virtual-keyboard');

btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        btn.classList.add('active');
        setTimeout(function() {
            btn.classList.remove('active');
        }, 100);

        if (capslockBtn.classList.contains('active-caps')) {
            textArea.append(btn.value.toUpperCase());
        } else {
            textArea.append(btn.value.toLowerCase());
        }


    });

    //keyboards press

});

//add backspace
const backspaceBtn = document.querySelector('.backspace');
backspaceBtn.addEventListener('click', function() {
    textArea.textContent = textArea.textContent.slice(0, -1);
});

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
            if(!btn.classList.contains('backspace') && !btn.classList.contains('enter') && !btn.classList.contains('space') && !btn.classList.contains('check')) {
                btn.textContent = btn.textContent.toUpperCase();
            }
        })
    } else {
        capslockBtn.classList.remove('active-caps');
        greenMark.style.display = 'none';

        btns.forEach(function(btn) {
            if(!btn.classList.contains('backspace') && !btn.classList.contains('enter') && !btn.classList.contains('space') && !btn.classList.contains('check')) {
                btn.textContent = btn.textContent.toLowerCase();
            }
        })
    }
});

//hide keyboard
const checkBtn = document.querySelector('.check');

checkBtn.addEventListener('click', function() {



    // function fadeOut() {
    //     var opacity = 1;
    //     var timer = setInterval(function() {
    //         if(opacity <= 0.1) {
    //             clearInterval(timer);
    //             virtualKeyboard.style.display = "none";
    //         }
    //         virtualKeyboard.style.opacity = opacity;
    //         opacity -= opacity * 0.1;
    //     }, 100);
    
    // }
    // fadeOut();
    virtualKeyboard.style.display = 'none';
});

//show keyboard

textArea.addEventListener('click', function() {
        virtualKeyboard.style.display = 'block';
})
