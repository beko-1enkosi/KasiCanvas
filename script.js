// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- GALLERY FILTERING FUNCTION ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.creative-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 2. Add 'active' class to the clicked button
            button.classList.add('active');

            // 3. Get the category to filter by
            const filterValue = button.getAttribute('data-filter');

            // 4. Loop through cards and hide/show
            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.style.display = 'block';
                    // Add animation class for smooth entry
                    card.classList.add('fade-in');
                    setTimeout(() => {
                        card.classList.remove('fade-in');
                    }, 500); 
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- OPTIONAL: SMOOTH SCROLL FOR HERO BUTTONS ---
    const heroBtn = document.querySelector('.hero-btn-solid');
    if(heroBtn) {
        heroBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.gallery-section').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
});