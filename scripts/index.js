/*----------------------------------
  JAVASCRIPT:
  Base Apparel Coming Soon Page
  ----------------------------------*/

// First we pick the need DOM nodes....

const form = document.querySelector('#form');
const email = document.querySelector('#email');
const errIcon = document.querySelector('#error-icon');
const errMsg = document.querySelector('#message');
const btn = document.querySelector('.btn');

// Add an event listener that will 
// run when the form is submited
form.addEventListener('submit', function (event) {
    //if the email entered is valid. Submit the form..

    // prevent the form from submitting if the input field is blank
    if (email.value === '') {
        errMsg.textContent = 'Email field can not be blank!';
        errIcon.style.display = "block";

        // if the email address is not formatted correctly.
        // display the erorr message and do not submitt.
    } else if (email.validity.typeMismatch) {
        errMsg.textContent = 'Please enter a valid email address!';
        errIcon.style.display = "block";
    } else {
        errMsg.textContent = '';
        errIcon.style.display = "none";
    }

    event.preventDefault();
});



