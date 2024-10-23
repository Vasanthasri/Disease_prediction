document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    const registerButton = document.getElementById("registerButton");

    registerButton.addEventListener("click", function(event) {
        event.preventDefault();

        // Retrieve form data
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Perform validation
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Prepare form data to be sent to backend
        const formData = {
            username: username,
            email: email,
            password: password
        };

        // Send AJAX request to backend (change the URL to your server's API endpoint)
        fetch('/register', {  // Replace '/register' with your actual backend URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Assuming registration is successful, redirect to the next page
                window.location.href = "/next_page.html"; // Change "next_page.html" to your desired next page
            } else {
                // Show error message if registration fails
                alert(data.message || "Registration failed. Please try again.");
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("An error occurred during registration. Please try again.");
        });
    });
});
