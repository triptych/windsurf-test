// Theme toggling functionality
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
let isDark = false;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = `Toggle ${isDark ? 'Light' : 'Dark'} Theme`;
});

// Typing effect for the name
const typingText = document.querySelector('.typing-effect');
const text = typingText.textContent;
typingText.textContent = '';

let charIndex = 0;
function typeText() {
    if (charIndex < text.length) {
        typingText.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    }
}

// Start typing animation when the page loads
window.addEventListener('load', typeText);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const animateSkills = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
};

// Initial animation and scroll listener
window.addEventListener('load', animateSkills);
window.addEventListener('scroll', animateSkills);

// Add scroll-based reveal animations for sections
const sections = document.querySelectorAll('.section');
const revealSection = () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

// Add initial styles for sections
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
});

// Initial reveal and scroll listener
window.addEventListener('load', revealSection);
window.addEventListener('scroll', revealSection);
