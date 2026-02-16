// Email contact form functionality

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    if (!contactForm) {
        return;
    }

    const showStatus = (html, color = '#166534') => {
        if (!successMessage) {
            return;
        }

        successMessage.innerHTML = html;
        successMessage.style.color = color;
        successMessage.style.marginTop = '0.75rem';
        successMessage.style.textAlign = 'center';
    };

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name')?.value?.trim() || '';
        const email = document.getElementById('email')?.value?.trim() || '';
        const subject = document.getElementById('subject')?.value?.trim() || 'Website enquiry';
        const message = document.getElementById('message')?.value?.trim() || '';

        const recipient = 'consultglobe@proton.me';
        const bodyLines = [
            `Name: ${name}`,
            `Email: ${email}`,
            '',
            message || 'No additional message provided.'
        ];

        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

        if (successMessage) {
            successMessage.textContent = 'Opening your email app...';
            successMessage.style.color = '#166534';
            successMessage.style.marginTop = '0.75rem';
            successMessage.style.textAlign = 'center';
        }

        window.location.href = mailtoLink;
    });
});
