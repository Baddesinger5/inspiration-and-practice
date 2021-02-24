let toTop = document.querySelector('.button');

toTop.style.display = 'none';

window.addEventListener('scroll', scrolling);
toTop.addEventListener('click', backToTop);

function scrolling() {
    let windowScroll = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (windowScroll > coords) {
        toTop.style.display = 'block';
    } 

    if (windowScroll < coords) {
        toTop.style.display = 'none';
    }
}

function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -10);
      setTimeout(backToTop, 0);
    }
  }