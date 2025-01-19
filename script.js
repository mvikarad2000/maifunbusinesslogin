// JavaScript for displaying error on any login attempt
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'Invalid email or password. Please try again.';
    errorMessage.style.display = 'block';
});
