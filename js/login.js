document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const loginForm = document.getElementById('loginForm');

    emailInput.addEventListener('input', function() {
        if (emailInput.validity.typeMismatch) {
            emailInput.setCustomValidity('Please enter a valid email address.');
            emailInput.classList.add('is-invalid');
        } else {
            emailInput.setCustomValidity('');
            emailInput.classList.remove('is-invalid');
        }
    });

    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    loginForm.addEventListener('submit', function(event) {
        if (!emailInput.checkValidity()) {
            emailInput.classList.add('is-invalid');
            event.preventDefault();
        }
    });
});
