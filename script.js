document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-details');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the project card this button belongs to
            const card = button.closest('.project-card');
            const details = card.querySelector('.project-details');
            
            // Toggle the 'active' class to slide open/shut
            details.classList.toggle('active');

            // Change button text based on state
            if (details.classList.contains('active')) {
                button.textContent = 'Close Details';
            } else {
                button.textContent = 'View Project Details';
            }
        });
    });
});
