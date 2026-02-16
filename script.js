// email contact form functionality

function openEmailClient() {
    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent('Hello,\n\nI would like to contact you regarding...');
    const email = 'contact@example.com'; // replace with actual email
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
}

// call the function when the form is submitted
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    openEmailClient();
});