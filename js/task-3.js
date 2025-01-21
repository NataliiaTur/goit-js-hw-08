'use strict';

const inputTextArea = document.querySelector('#name-input');
const spanTextGreeting = document.querySelector('#name-output');

inputTextArea.addEventListener('input', inputHandle);

function inputHandle(event) {
    const trimmedValue = event.target.value.trim();

    if (trimmedValue === '') {
        spanTextGreeting.textContent = "Anonymous";
    } else {
        spanTextGreeting.textContent = trimmedValue;
    }
}


