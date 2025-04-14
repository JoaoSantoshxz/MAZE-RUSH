const hamburgerIcon = document.querySelector('.hamburger-icon');
const mainNav = document.querySelector('.main-nav');

hamburgerIcon.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const screenshotFrames = document.querySelectorAll('.screenshot-frame');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = 'translateY(50px)';
            }
        });
    }, {
        threshold: 0.5
    });

    screenshotFrames.forEach(frame => {
        observer.observe(frame);
    });
});