// Get all chapter links
const chapterLinks = document.querySelectorAll('nav ul li a');

// Save the current chapter to localStorage when a link is clicked
chapterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const chapter = e.target.getAttribute('data-chapter');
        localStorage.setItem('currentChapter', chapter);
    });
});

// On page load, scroll to the saved chapter
document.addEventListener('DOMContentLoaded', () => {
    const savedChapter = localStorage.getItem('currentChapter');
    if (savedChapter) {
        const targetSection = document.getElementById(savedChapter);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
