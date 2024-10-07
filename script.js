document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const slidingWindow = document.querySelector('.sliding-window');
    const closeBtn = document.querySelector('.close-btn');
    const profileLink = document.getElementById('profile-link');
    const languageSelect = document.getElementById('language-select');

    // Toggle mobile menu
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    // Open sliding window
    profileLink.addEventListener('click', (e) => {
        e.preventDefault();
        slidingWindow.classList.add('open');
    });

    // Close sliding window
    closeBtn.addEventListener('click', () => {
        slidingWindow.classList.remove('open');
    });

    // Close sliding window when clicking outside
    document.addEventListener('click', (e) => {
        if (!slidingWindow.contains(e.target) && !profileLink.contains(e.target)) {
            slidingWindow.classList.remove('open');
        }
    });

    // Language change
    languageSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        if (lang === 'hi') {
            translateToHindi();
        } else {
            translateToEnglish();
        }
    });

    function translateToHindi() {
        // This is a placeholder function. In a real application, you would
        // implement actual translation logic here, possibly using a
        // translation API or a predefined dictionary.
        console.log('Translating to Hindi...');
        // Example translation:
        document.querySelector('h1').textContent = 'AFCL लॉजिस्टिक्स में आपका स्वागत है';
    }

    function translateToEnglish() {
        // This is a placeholder function to revert back to English.
        console.log('Translating to English...');
        // Example translation:
        document.querySelector('h1').textContent = 'Welcome to AFCL Logistics';
    }
});