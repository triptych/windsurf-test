# Modern Personal Portfolio Page

A clean, responsive, and interactive personal portfolio webpage with modern design features and smooth animations.

## Features

- Dark/Light theme toggle
- Typing animation effect
- Fully responsive design
- Animated skill progress bars
- Smooth scroll navigation
- Section reveal animations
- Modern, minimalist UI
- Interactive skill cards
- Project showcase section

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Font Awesome Icons

## Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript for interactivity
├── config.js          # Configuration file for personal information and themes
└── README.md          # Project documentation
```

## Getting Started

1. Clone or download this repository
2. Customize your information in `config.js` (see Configuration section below)
3. Open `index.html` in a web browser to view the page

## Configuration

The `config.js` file contains all customizable content. Here's how to configure each section:

### Personal Information
```javascript
{
    // Basic Info
    name: "Your Name",
    title: "Your Professional Title",
    profileImage: "path/to/your/image.jpg",
    aboutMe: "Your professional summary",

    // Skills List
    skills: [
        {
            name: "Skill Name",
            progress: 90,  // Percentage of proficiency
            icon: "fa-code"  // Font Awesome icon class
        }
        // Add more skills as needed
    ],

    // Project Showcase
    projects: [
        {
            title: "Project Name",
            description: "Project description",
            image: "path/to/project/image.jpg",
            tags: ["Technology1", "Technology2"],  // Tech stack
            liveUrl: "https://your-demo-url.com",
            githubUrl: "https://github.com/username/repo"
        }
        // Add more projects as needed
    ],

    // Social Media Links
    socialMedia: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername"
    },

    // Theme Colors
    theme: {
        light: {
            primary: "#2ecc71",    // Main accent color
            background: "#ffffff", // Page background
            text: "#333333",      // Text color
            cardBg: "#f5f5f5",    // Card background
            navBg: "rgba(255, 255, 255, 0.9)"
        },
        dark: {
            // Dark theme colors (same structure as light)
        }
    }
}
```

### Customization Examples

1. **Adding a New Skill**
```javascript
skills: [
    {
        name: "React",
        progress: 85,
        icon: "fa-react"  // Font Awesome icon
    }
]
```

2. **Adding a New Project**
```javascript
projects: [
    {
        title: "Portfolio Website",
        description: "Personal portfolio built with modern web technologies",
        image: "./images/portfolio.jpg",
        tags: ["HTML5", "CSS3", "JavaScript"],
        liveUrl: "https://myportfolio.com",
        githubUrl: "https://github.com/username/portfolio"
    }
]
```

3. **Customizing Theme Colors**
```javascript
theme: {
    light: {
        primary: "#007bff",    // Change to your preferred color
        background: "#f8f9fa",
        text: "#212529",
        cardBg: "#ffffff"
    }
}
```

### Font Awesome Icons

This project uses Font Awesome for icons. To find icon classes:
1. Visit [Font Awesome](https://fontawesome.com/icons)
2. Search for your desired icon
3. Use the icon class name (e.g., "fa-github", "fa-code")

## Adding New Sections

1. Create a new section in `index.html`:
```html
<section id="new-section" class="section">
    <!-- Your content here -->
</section>
```

2. Add a navigation link:
```html
<a href="#new-section" class="nav-link">New Section</a>
```

3. Add corresponding configuration in `config.js` if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

- Font Awesome for the icons
- Google Fonts for typography
- Inspiration from modern portfolio designs
