let input = document.querySelector('input');
let btns = document.querySelectorAll('.btn');
let times = 4;
const backspace = document.querySelector('.backspace');
const done = document.querySelector('.done');
let container = document.querySelector('.container');
let body = document.querySelector('body')

btns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        if (times > 0 && event.target.matches('.number')) {
            input.value += btn.value;
            times--;
        } 
    });
});

done.addEventListener('click', function() {
    if (input.value === '1234') {
        window.location.href = 'second-page.html';
    } else {
        input.classList.add('bad-gateway');
        if (input.classList.contains('bad-gateway')) {
            setTime = setTimeout(function() {
                input.classList.remove('bad-gateway');
                input.value = '';
                times = 4;
            }, 300)
        }
    }
});

backspace.addEventListener('click', function() {
    input.value = input.value.substring(0, input.value.length - 1)
    times++;
})
