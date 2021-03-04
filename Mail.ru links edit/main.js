let inboxLink = document.querySelectorAll('.i-link-deco');
let writeMessage = document.querySelectorAll('.svelte-1bgvwpe');


inboxLink.forEach(function(item) {
    if (item.hasAttribute('target')) {
        item.removeAttribute('target');
    }
});

writeMessage.forEach(function(i) {
    if (i.hasAttribute('target')) {
        i.removeAttribute('target');
    }
});





