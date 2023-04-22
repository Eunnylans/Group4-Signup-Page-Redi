//Form Elements
const formEl = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
// Error Images
const errorImageFirstName = document.getElementById('error-image-first-name');
const errorImageLastName = document.getElementById('error-image-last-name');
const errorImageEmail = document.getElementById('error-image-email');
const errorImagePassword = document.getElementById('error-image-password');
// Error Texts
const errorTextFirstName = document.getElementById('error-text-first-name');
const errorTextLastName = document.getElementById('error-text-last-name');
const errorTextEmail = document.getElementById('error-text-email');
const errorTextPassword = document.getElementById('error-text-password');
const emailExample = document.getElementById('email-example');

// Event Listener
formEl.addEventListener('submit', e => {
  checkInputs();
});

// Check inputs function
function checkInputs() {
  // get the values from the inputs
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = emailEl.value.trim();
  const passwordValue = passwordEl.value.trim();

  // Check first name
  if (firstNameValue === '') {
    errorImageFirstName.style.display = 'block';
    errorTextFirstName.style.display = 'block';
  } else {
    errorImageFirstName.style.display = 'none';
    errorTextFirstName.style.display = 'none';
  }
  // Check last name
  if (lastNameValue === '') {
    errorImageLastName.style.display = 'block';
    errorTextLastName.style.display = 'block';
  } else {
    errorImageLastName.style.display = 'none';
    errorTextLastName.style.display = 'none';
  }
  // Check email
  if (emailValue === '') {
    errorImageEmail.style.display = 'block';
    errorTextEmail.innerHTML = 'Email cannot be empty';
    errorTextEmail.style.display = 'block';
  } else if (!isEmail(emailValue)) {
    emailEl.value = '';
    emailEl.placeholder = '';
    errorTextEmail.innerHTML = 'Looks like this is not an email';
    emailExample.style.display = 'block';
    errorImageEmail.style.display = 'block';
    errorTextEmail.style.display = 'block';
    errorTextEmail.addEventListener('mouseover', () => {
      emailExample.style.display = 'none';
      emailEl.placeholder = 'Email Address';
    });
  } else {
    errorImageEmail.style.display = 'none';
    errorTextEmail.style.display = 'none';
  }
  // Check password
  if (passwordValue === '') {
    errorImagePassword.style.display = 'block';
    errorTextPassword.style.display = 'block';
  } else {
    errorImagePassword.style.display = 'none';
    errorTextPassword.style.display = 'none';
  }
}

// Email validation
function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
