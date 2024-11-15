const config = {
    // Personal Information
    name: "John Doe",
    title: "Web Developer & Designer",
    profileImage: "https://via.placeholder.com/150",
    aboutMe: "Welcome to my personal webpage! I'm passionate about creating beautiful and functional web experiences.",

    // Skills Configuration
    skills: [
        {
            name: "Web Development",
            progress: 90,
            icon: "fa-code"
        },
        {
            name: "Design",
            progress: 85,
            icon: "fa-palette"
        },
        {
            name: "Responsive Design",
            progress: 95,
            icon: "fa-mobile-alt"
        }
    ],

    // Projects Configuration
    projects: [
        {
            title: "E-commerce Platform",
            description: "A full-featured online store with shopping cart and payment integration",
            image: "https://via.placeholder.com/300x200",
            tags: ["React", "Node.js", "MongoDB"],
            liveUrl: "https://project1.example.com",
            githubUrl: "https://github.com/yourusername/project1"
        },
        {
            title: "Weather Dashboard",
            description: "Real-time weather tracking app with interactive maps",
            image: "https://via.placeholder.com/300x200",
            tags: ["JavaScript", "Weather API", "Leaflet.js"],
            liveUrl: "https://project2.example.com",
            githubUrl: "https://github.com/yourusername/project2"
        },
        {
            title: "Task Manager",
            description: "Collaborative task management system with real-time updates",
            image: "https://via.placeholder.com/300x200",
            tags: ["Vue.js", "Firebase", "Bootstrap"],
            liveUrl: "https://project3.example.com",
            githubUrl: "https://github.com/yourusername/project3"
        }
    ],

    // Social Media Links
    socialMedia: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername"
    },

    // Theme Configuration
    theme: {
        light: {
            primary: "#2ecc71",
            background: "#ffffff",
            text: "#333333",
            cardBg: "#f5f5f5",
            navBg: "rgba(255, 255, 255, 0.9)"
        },
        dark: {
            primary: "#2ecc71",
            background: "#1a1a1a",
            text: "#ffffff",
            cardBg: "#2d2d2d",
            navBg: "rgba(45, 45, 45, 0.9)"
        }
    }
};
