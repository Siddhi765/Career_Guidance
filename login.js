document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const socialButtons = document.querySelectorAll('.social-btn');
    const registerBtn = document.querySelector('.register-btn');

    // Handle form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
        const rememberMe = this.querySelector('input[type="checkbox"]').checked;

        // Here you would typically send this data to your server
        console.log('Login attempt:', { email, password, rememberMe });

        // Simulate successful login
        showLoadingState();
        setTimeout(() => {
            hideLoadingState();
            // Redirect to main page after successful login
            window.location.href = 'index.html';
        }, 1500);
    });

    // Handle social login buttons
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.classList.contains('google') ? 'Google' : 'Facebook';
            console.log(`${platform} login clicked`);
            // Here you would implement the actual social login
        });
    });

    // Handle register button
    registerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Here you would typically redirect to a registration page
        alert('Registration feature coming soon!');
    });

    // Add loading state to login button
    function showLoadingState() {
        const loginButton = loginForm.querySelector('.login-button');
        loginButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
        loginButton.disabled = true;
    }

    function hideLoadingState() {
        const loginButton = loginForm.querySelector('.login-button');
        loginButton.innerHTML = 'Login';
        loginButton.disabled = false;
    }

    // Add input focus effects
    const inputs = loginForm.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
}); 