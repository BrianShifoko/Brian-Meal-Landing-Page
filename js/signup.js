document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = signupForm.email.value;
        const password = signupForm.password.value;
        const confirmPassword = signupForm['confirm-password'].value;

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!validatePassword(password)) {
            alert('Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        alert('Sign up successful!');
        // You can submit the form here
        // signupForm.submit();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
        return re.test(password);
    }
});
