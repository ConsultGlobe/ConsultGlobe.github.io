// Email contact form functionality

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    if (!contactForm) {
        return;
    }

    const formAction = contactForm.getAttribute('action') || '';
    const ajaxEndpoint = formAction.replace('https://formsubmit.co/', 'https://formsubmit.co/ajax/');

    const showStatus = (message, color = '#166534') => {
        if (!successMessage) {
            return;
        }

        successMessage.textContent = message;
        successMessage.style.color = color;
        successMessage.style.marginTop = '0.75rem';
        successMessage.style.textAlign = 'center';
    };

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const subject = String(formData.get('subject') || '').trim() || 'Website enquiry';

        formData.set('_subject', `ConsultGlobe contact: ${subject}`);
        formData.set('_captcha', 'false');
        formData.set('_template', 'table');

        showStatus('Sending your message...');

        try {
            const response = await fetch(ajaxEndpoint, {
                method: 'POST',
                headers: {
                    Accept: 'application/json'
                },
                body: formData
            });

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            showStatus('Thanks! Your message has been sent successfully.');
            contactForm.reset();
        } catch (error) {
            showStatus('We could not send your message automatically. Please try again shortly.', '#92400e');
        }
    });
});
