// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Projects section loaded');
});


    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way
    
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
    
        // Simple validation
        if (name && email && subject && message) {
            // Here you would typically send the data to the server or an email service
            document.getElementById('formMessage').textContent = 'Thank you for your message! I will get back to you soon.';
            document.getElementById('formMessage').style.color = 'green';
    
            // Clear form fields
            document.getElementById('contactForm').reset();
        } else {
            document.getElementById('formMessage').textContent = 'Please fill in all fields.';
            document.getElementById('formMessage').style.color = 'red';
        }
    });
    // Get references to the color picker and body element
const colorPicker = document.getElementById('colorPicker');
const body = document.body;

// Add an event listener to the color picker
colorPicker.addEventListener('input', (event) => {
    // Change the background color of the body to the selected color
    body.style.backgroundColor = event.target.value;
});
