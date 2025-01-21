'use strict';

const form = document.querySelector('.login-form');
 
form.addEventListener('submit', formHandler);

function formHandler(evt) {
    evt.preventDefault();

    const { email, password } = evt.target.elements; 
   
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    
    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
        return;
    } 
    const formData = {
        email: emailValue,
        password: passwordValue,
    };

    console.log(formData);

    form.reset();
}

