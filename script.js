document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('interactive-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const ageInput = document.getElementById('age');
    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const ageError = document.getElementById('age-error');
    const submissionStatus = document.getElementById('submission-status');
    const counterButton = document.getElementById('counter-button');
    const counterValue = document.getElementById('counter-value');
  
    let interactiveCount = 0;
  // Function to Validate username input
    function validateUsername() {
      const username = usernameInput.value.trim();
      if (!username) {
        usernameError.textContent = 'Username is required';
        return false;
      }
      if (username.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters';
        return false;
      }
      usernameError.textContent = '';
      return true;
    }
  // Function to Validate email input
    function validateEmail() {
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        emailError.textContent = 'Email is required';
        return false;
      }
      if (!emailRegex.test(email)) {
        emailError.textContent = 'Invalid email format';
        return false;
      }
      emailError.textContent = '';
      return true;
    }
  // Validate age input
    function validateAge() {
      const age = ageInput.value.trim();
      if (!age) {
        ageError.textContent = 'Age is required';
        return false;
      }
      const ageNum = parseInt(age, 10);
      if (isNaN(ageNum) || ageNum < 13 || ageNum > 120) {
        ageError.textContent = 'Please enter a valid age (13-120)';
        return false;
      }
      ageError.textContent = '';
      return true;
    }
  // Validate all fields before submission
    function validateForm() {
      const isUsernameValid = validateUsername();
      const isEmailValid = validateEmail();
      const isAgeValid = validateAge();
  
      return isUsernameValid && isEmailValid && isAgeValid;
    }
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        submissionStatus.textContent = 'Form submitted successfully!';
        submissionStatus.style.color = 'green';
  
        // Reset form
        form.reset();
        usernameError.textContent = '';
        emailError.textContent = '';
        ageError.textContent = '';
      } else {
        submissionStatus.textContent = 'Please correct the errors';
        submissionStatus.style.color = 'red';
      }
    });
  
    // Input validation on blur
    usernameInput.addEventListener('blur', validateUsername);
    emailInput.addEventListener('blur', validateEmail);
    ageInput.addEventListener('blur', validateAge);
  
    // Interactive counter
    counterButton.addEventListener('click', () => {
      interactiveCount++;
      counterValue.textContent = interactiveCount;
    });
  
    // Reset counter on page load
    counterValue.textContent = interactiveCount;
  });