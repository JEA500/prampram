// Basic form validation and event listener for the signup form

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Retrieve input values
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Basic password match check
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    // Display success message
    alert('Signup successful for ' + fullname + '!');
    // Redirect to next page, for example: courses.html
    // window.location.href = 'courses.html';
  });
  