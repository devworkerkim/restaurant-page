import home from './home';
import menu from './menu';
import contact from './contact';

function clearContent() {
    while (document.querySelector('#content').firstChild) {
        document.querySelector('#content').removeChild(document.querySelector('#content').firstChild);
    }
}

document.body.querySelector('#content').appendChild(home());

document.querySelector('#home').addEventListener('click', function() {
    clearContent();
    document.body.querySelector('#content').appendChild(home());
})
document.querySelector('#menu').addEventListener('click', function() {
    clearContent();
    document.body.querySelector('#content').appendChild(menu());
})
document.querySelector('#contact').addEventListener('click', function() {
    clearContent();
    document.body.querySelector('#content').appendChild(contact());
})