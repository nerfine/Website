// Get all chapter links and sections
const chapterLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('main section');

// Function to highlight the active chapter based on scroll
const highlightChapter = () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Check if the section is in the viewport
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove 'active' class from all links
    chapterLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-chapter') === currentSection) {
            link.classList.add('active');
        }
    });

    // Save current chapter in localStorage
    if (currentSection) {
        localStorage.setItem('currentChapter', currentSection);
    }
};

// On page load, scroll to the saved chapter
document.addEventListener('DOMContentLoaded', () => {
    const savedChapter = localStorage.getItem('currentChapter');
    if (savedChapter) {
        const targetSection = document.getElementById(savedChapter);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Highlight chapter based on initial scroll position
    highlightChapter();
});

// Add event listener for scrolling
window.addEventListener('scroll', highlightChapter);
