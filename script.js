// Initialize page content from config
function initializeContent() {
    // Set profile information
    document.getElementById('profile-pic').src = config.profileImage;
    document.getElementById('name').textContent = `Hello, I'm ${config.name}`;
    document.getElementById('title').textContent = config.title;
    document.getElementById('about-text').textContent = config.aboutMe;

    // Set social media links
    document.getElementById('github-link').href = config.socialMedia.github;
    document.getElementById('linkedin-link').href = config.socialMedia.linkedin;
    document.getElementById('twitter-link').href = config.socialMedia.twitter;

    // Generate skill cards
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = config.skills.map(skill => `
        <div class="skill-card">
            <i class="fas ${skill.icon}"></i>
            <h3>${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.progress}%"></div>
            </div>
        </div>
    `).join('');

    // Generate project cards
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = config.projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveUrl}" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="${project.githubUrl}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i> Source Code
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize theme colors from config
function initializeTheme(isDark) {
    const theme = isDark ? config.theme.dark : config.theme.light;
    const root = document.documentElement;
    
    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--bg-color', theme.background);
    root.style.setProperty('--text-color', theme.text);
    root.style.setProperty('--card-bg', theme.cardBg);
    root.style.setProperty('--nav-bg', theme.navBg);
}

// Theme toggling functionality
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
let isDark = false;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = `Toggle ${isDark ? 'Light' : 'Dark'} Theme`;
    initializeTheme(isDark);
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
const animateSkills = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
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

// Initialize everything when the page loads
window.addEventListener('load', () => {
    initializeContent();
    initializeTheme(isDark);
    typeText();
    revealSection();
    animateSkills();
});

// Scroll event listeners
window.addEventListener('scroll', animateSkills);
window.addEventListener('scroll', revealSection);
