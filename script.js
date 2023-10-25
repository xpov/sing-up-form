const form = document.getElementById('form'),
      passwordInput1 = document.getElementById('password1'),
      passwordInput2 = document.getElementById('password2'),
      messageContainer = document.querySelector('.message-container'),
      message = document.getElementById('message'),
      clearBtn = document.querySelector('button[type="reset"]');

function handleFormSubmit(e) {
  e.preventDefault(); 

  const isFormValid = validateForm(); // Check form validity
  if (isFormValid) {
    const userData = getFormData(); // Get form data
    showMessage('Successfully Registered!', 'green'); // Display a success message
    console.log(userData); // Log user data to the console
    showSuccess();
  }
}


function validateForm() {
  const isValid = form.checkValidity(); // Use Constraint API

  if (!isValid) {
    showMessage('Please fill out all fields.', 'red');
    setElementBorderColor([passwordInput1, passwordInput2], 'red'); 
  } else if (passwordInput1.value !== passwordInput2.value) {
    showMessage('Passwords do not match.', 'red'); 
    setElementBorderColor([passwordInput1, passwordInput2], 'red');
  }

  return isValid;
}

function getFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  return user;
}

// Set border color for form elements
function setElementBorderColor(elements, color) {
  elements.forEach((element) => {
    element.style.borderColor = color;
  });
}

// Display a message
function showMessage(text, textColor) {
  message.textContent = text;
  message.style.color = textColor;
  messageContainer.style.borderColor = textColor;
}

function clearForms() {
  clearBtn.addEventListener('click', (e) => {
    const formInputs = form.querySelectorAll('input');
    let isChecked = false;

    formInputs.forEach(input => {
      if (input.value.trim() !== '') {
        isChecked = true;
        input.value = '';
      }
    });

    if (isChecked) {
      e.preventDefault(); 
    }
  });
}

clearForms();

function showSuccess() {
  message.style.display = 'flex';
}

// Add a submit event handler to the form
form.addEventListener('submit', handleFormSubmit);