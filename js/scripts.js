document.addEventListener('DOMContentLoaded', () => {
    console.log("Web page loaded successfully.");
    
});

// Login Form Validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission for now
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Login successful!');
        // Proceed to login logic
    }
});

// Signup Form Validation
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission for now
    const username = document.getElementById('usernameSignup').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('passwordSignup').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    } else if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Signup successful!');
        // Proceed to signup logic
    }
});

// for counselling
const options = document.querySelectorAll('.option');

options.forEach(option => {
    option.addEventListener('click', () => {
        alert(`You have selected: ${option.textContent}`);
    });
});