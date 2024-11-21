// JavaScript for toggle functionality
document.querySelectorAll('.toggle-row').forEach(row => {
    row.addEventListener('click', () => {
        const content = row.nextElementSibling; // The hidden content
        const button = row.querySelector('.toggle-btn'); // The "+" or "-" button

        // Toggle visibility of the content
        content.classList.toggle('hidden');

        // Update button text
        button.textContent = button.textContent === '+' ? '-' : '+';
    });
});
