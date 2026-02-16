// email contact form functionality

function openEmailClient() {
    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent('Hello,\n\nI would like to contact you regarding...');
    const email = 'consultglobe@proton.me';
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
}

// call the function when the form is submitted
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (!contactForm) {
        return;
    }

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission
        openEmailClient();
    });
});
