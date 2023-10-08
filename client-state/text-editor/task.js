const textarea = document.querySelector('textarea');

const storedText = localStorage.getItem('text');
if (storedText) {   
    textarea.value = storedText;
} else {
    localStorage.setItem('text', textarea.value);
}

textarea.onchange =  () => {
        localStorage.text = textarea.value;
}



