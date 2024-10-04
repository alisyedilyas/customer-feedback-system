document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Shows the alert
    alert('Thank you for your feedback!');
    
    // Clears the form
    this.reset();
});
