const createBtn = document.querySelector('.btn');
const mainSection = document.querySelector('.main-section');


createBtn.addEventListener('click', function() {
    let createQuad = document.createElement('div');
    createQuad.className = 'quad';
    mainSection.append(createQuad);

    localStorage.setItem('something', createQuad);

    createQuad.addEventListener('click', function() {
        createQuad.remove();
    });

    if (localStorage.getItem('something' !== null)) {
        let items =  localStorage.getItem('something');
        createQuad.querySelectorAll('quad').style = items;
    };

});





