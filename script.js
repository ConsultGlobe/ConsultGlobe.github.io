// Email contact form functionality

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    if (!contactForm) {
        return;
    }

    const recipient = 'consultglobe@proton.me';

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
        const name = String(formData.get('name') || '').trim();
        const email = String(formData.get('email') || '').trim();
        const subject = String(formData.get('subject') || '').trim() || 'Website enquiry';
        const message = String(formData.get('message') || '').trim();

        formData.set('_subject', `ConsultGlobe contact: ${subject}`);
        formData.set('_captcha', 'false');
        formData.set('_template', 'table');

        showStatus('Sending your message...');

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
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
            const bodyLines = [
                `Name: ${name}`,
                `Email: ${email}`,
                '',
                message || 'No additional message provided.'
            ];

            const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
            showStatus('We could not send automatically. Opening your email app instead...', '#92400e');
            window.location.href = mailtoLink;
        }
    });
});
