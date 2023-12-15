document.addEventListener('DOMContentLoaded', function() {
    // List of GIFs
    const gifs = ['gif1.gif', 'gif2.gif', 'gif3.gif', 'gif4.gif', 'gif5.gif'];
    let currentIndex = 0;

    // Function to change the background GIF
    function changeBackground() {
        const heroBackground = document.getElementById('heroBackground');
        heroBackground.style.backgroundImage = `url('${gifs[currentIndex]}')`;

        // Move to the next GIF
        currentIndex = (currentIndex + 1) % gifs.length;

        // Change the background every 5000 milliseconds (5 seconds)
        setTimeout(changeBackground, 5000);
    }

    // Initial call to start the sequence
    changeBackground();
});
