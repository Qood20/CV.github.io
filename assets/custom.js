document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800, // Animation duration in milliseconds
        once: true,    // Whether animation should happen only once - while scrolling down
        offset: 100,   // Offset (in px) from the original trigger point
    });

    // Check if the typed element exists on the page (it's only on index.html)
    const typedElement = document.getElementById('typed-output');
    if (typedElement) {
        const options = {
            strings: ['Selamat Datang di Website Saya', 'Ini Curriculum Vitae Saya'],
            typeSpeed: 70,
            backSpeed: 35,
            backDelay: 2500,
            startDelay: 500,
            loop: true,
            smartBackspace: true,
            showCursor: true,
            cursorChar: '_',
        };
        const typed = new Typed('#typed-output', options);
    }
});
