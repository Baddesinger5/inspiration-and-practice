const createBtn = document.querySelector('.btn');
const mainSection = document.querySelector('.main-section');

createBtn.addEventListener('click', function() {
    let createQuad = document.createElement('div');
    createQuad.className = 'quad';

    mainSection.append(createQuad);
    
    
})