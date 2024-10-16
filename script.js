document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here, you can implement your form submission logic, e.g., send data to a server.

    document.getElementById('form-response').innerText = `Thank you, ${name}! Your message has been sent.`;
    
    // Reset the form
    this.reset();
});
