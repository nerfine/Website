document.addEventListener('DOMContentLoaded', function() {
    // Set the countdown date to New Year 2024
    const countdownDate = new Date('January 1, 2024 00:00:00 UTC').getTime();

    // Update the countdown every 1 second
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById('countdown').innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(countdownInterval);
              // Reset PayPal prices
    document.getElementById('paypal-price-1').innerHTML = '<strong>$5</strong> - Simple video editing';
    document.getElementById('paypal-price-2').innerHTML = '<strong>$10</strong> - Montage/Edit';
    document.getElementById('paypal-price-3').innerHTML = '<strong>$20</strong> - Advanced Video editing';

    // Reset Robux prices
    document.getElementById('robux-price-1').innerHTML = '<strong>R$ 1.5k</strong> - Simple video editing';
    document.getElementById('robux-price-2').innerHTML = '<strong>R$ 2.5k</strong> - Montage/Edit';
    document.getElementById('robux-price-3').innerHTML = '<strong>R$ 3.5k</strong> - Advanced video editing (Before tax)';

     // Reset Nitro prices
    document.getElementById('nitro-price-1').innerHTML = '<strong>1 Nitro Classic</strong> - Simple video editing';
    document.getElementById('nitro-price-2').innerHTML = '<strong>2 Nitro Classic or 1 Nitro Boost</strong> - Montage/Edit';
    document.getElementById('nitro-price-3').innerHTML = '<strong>2 Nitro Boost</strong> - Advanced video editing';

            document.getElementById('countdown').innerHTML = 'Expired!';
        }
    }, 1000);
});
