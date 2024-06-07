document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || message === '') {
                alert('Please fill out all fields.');
                return;
            }

            alert('Thank you for your message, ' + name + '!');
            this.reset();
        });
    }
});
