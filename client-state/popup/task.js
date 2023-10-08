const modal = document.getElementById('subscribe-modal');
const closebtn = document.querySelector('.modal__close');

modal.classList.add('modal_active');

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
};

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    if (cookie) {
        return cookie.substr(name.length + 1);
    } else {
        return null;
    }
};

if (getCookie('modal') === 'close') {
    modal.classList.remove('modal_active');
}

closebtn.onclick = () => {
    modal.classList.remove('modal_active');
    setCookie('modal', 'close');
}


