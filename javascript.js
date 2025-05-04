// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});
// Dark mode toggle functionality
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save the user's preference in localStorage
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
});

// Load the user's preference on page load
window.addEventListener("DOMContentLoaded", () => {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference === "enabled") {
        document.body.classList.add("dark-mode");
    }
});

// Check saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    }
});

// Progress bar animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Initialize progress bars when skills section is in view
const skillsSection = document.querySelector('#skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(skillsSection);

// Side navigation functionality
const sideNavItems = document.querySelectorAll('.side-nav-item');
const sections = document.querySelectorAll('section');

sideNavItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

function highlightSideNav() {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            sideNavItems.forEach(item => item.classList.remove('active'));
            sideNavItems[index]?.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightSideNav);
highlightSideNav();

// Sakura animation
document.addEventListener('DOMContentLoaded', function () {
    const sakuraContainer = document.getElementById('sakura-container');
    const colors = ['#ffc0cb', '#ffb6c1', '#ff69b4', '#ffa07a', '#f8c9d4'];
    const petalCount = 50;

    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'petal';

        const size = Math.random() * 15 + 10;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 10 + 8;
        const delay = Math.random() * 15;
        const color = colors[Math.floor(Math.random() * colors.length)];

        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.left = `${left}%`;
        petal.style.animationDuration = `${animationDuration}s`;
        petal.style.animationDelay = `${delay}s`;
        petal.style.backgroundColor = color;
        petal.style.borderRadius = '30% 70% 70% 30% / 30% 30% 70% 70%';
        petal.style.filter = 'drop-shadow(0 0 1px rgba(255, 255, 255, 0.5))';

        sakuraContainer.appendChild(petal);

        setTimeout(() => {
            petal.remove();
            createPetal();
        }, (animationDuration + delay) * 1000);
    }

    for (let i = 0; i < petalCount; i++) {
        createPetal();
    }
});
// Project data
const projects = {
    "first-grading": [
        { id: 1, title: "Activity 1", description: "Description for Activity 1.", image: "/api/placeholder/600/400", link: "https://example.com/activity1", htmlCode: "<div>HTML Code for Activity 1</div>", cssCode: "div { color: red; }", jsCode: "console.log('Activity 1');" },
        { id: 2, title: "Activity 2", description: "Description for Activity 2.", image: "/api/placeholder/600/400", link: "https://example.com/activity2", htmlCode: "<div>HTML Code for Activity 2</div>", cssCode: "div { color: blue; }", jsCode: "console.log('Activity 2');" },
        { id: 3, title: "Activity 3", description: "Description for Activity 3.", image: "/api/placeholder/600/400", link: "https://example.com/activity3", htmlCode: "<div>HTML Code for Activity 3</div>", cssCode: "div { color: green; }", jsCode: "console.log('Activity 3');" },
        { id: 4, title: "Activity 4", description: "Description for Activity 4.", image: "/api/placeholder/600/400", link: "https://example.com/activity4", htmlCode: "<div>HTML Code for Activity 4</div>", cssCode: "div { color: yellow; }", jsCode: "console.log('Activity 4');" },
        { id: 5, title: "Activity 5", description: "Description for Activity 5.", image: "/api/placeholder/600/400", link: "https://example.com/activity5", htmlCode: "<div>HTML Code for Activity 5</div>", cssCode: "div { color: orange; }", jsCode: "console.log('Activity 5');" },
        { id: 6, title: "Activity 6", description: "Description for Activity 6.", image: "/api/placeholder/600/400", link: "https://example.com/activity6", htmlCode: "<div>HTML Code for Activity 6</div>", cssCode: "div { color: purple; }", jsCode: "console.log('Activity 6');" },
        { id: 7, title: "Activity 7", description: "Description for Activity 7.", image: "/api/placeholder/600/400", link: "https://example.com/activity7", htmlCode: "<div>HTML Code for Activity 7</div>", cssCode: "div { color: pink; }", jsCode: "console.log('Activity 7');" }
    ],
    "midterms": [
        { id: 8, title: "Activity 1", description: "Description for Activity 1.", image: "/api/placeholder/600/400", link: "https://example.com/activity8", htmlCode: "<div>HTML Code for Activity 1</div>", cssCode: "div { color: cyan; }", jsCode: "console.log('Activity 1');" },
        { id: 9, title: "Activity 2", description: "Description for Activity 2.", image: "/api/placeholder/600/400", link: "https://example.com/activity9", htmlCode: "<div>HTML Code for Activity 2</div>", cssCode: "div { color: magenta; }", jsCode: "console.log('Activity 2');" },
        { id: 10, title: "Activity 3", description: "Description for Activity 3.", image: "/api/placeholder/600/400", link: "https://example.com/activity10", htmlCode: "<div>HTML Code for Activity 3</div>", cssCode: "div { color: lime; }", jsCode: "console.log('Activity 3');" },
        { id: 11, title: "Activity 4", description: "Description for Activity 4.", image: "/api/placeholder/600/400", link: "https://example.com/activity11", htmlCode: "<div>HTML Code for Activity 4</div>", cssCode: "div { color: teal; }", jsCode: "console.log('Activity 4');" },
        { id: 12, title: "Activity 5", description: "Description for Activity 5.", image: "/api/placeholder/600/400", link: "https://example.com/activity12", htmlCode: "<div>HTML Code for Activity 5</div>", cssCode: "div { color: navy; }", jsCode: "console.log('Activity 5');" },
        { id: 13, title: "Activity 6", description: "Description for Activity 6.", image: "/api/placeholder/600/400", link: "https://example.com/activity13", htmlCode: "<div>HTML Code for Activity 6</div>", cssCode: "div { color: olive; }", jsCode: "console.log('Activity 6');" },
        { id: 14, title: "Activity 7", description: "Description for Activity 7.", image: "/api/placeholder/600/400", link: "https://example.com/activity14", htmlCode: "<div>HTML Code for Activity 7</div>", cssCode: "div { color: maroon; }", jsCode: "console.log('Activity 7');" },
        { id: 15, title: "Activity 8", description: "Description for Activity 8.", image: "/api/placeholder/600/400", link: "https://example.com/activity15", htmlCode: "<div>HTML Code for Activity 8</div>", cssCode: "div { color: silver; }", jsCode: "console.log('Activity 8');" }
    ],
    "finals": [
        { id: 16, title: "Activity 1", description: "Description for Activity 1.", image: "/api/placeholder/600/400", link: "https://example.com/activity16", htmlCode: "<div>HTML Code for Activity 1</div>", cssCode: "div { color: gold; }", jsCode: "console.log('Activity 1');" },
        { id: 17, title: "Activity 2", description: "Description for Activity 2.", image: "/api/placeholder/600/400", link: "https://example.com/activity17", htmlCode: "<div>HTML Code for Activity 2</div>", cssCode: "div { color: coral; }", jsCode: "console.log('Activity 2');" },
        { id: 18, title: "Activity 3", description: "Description for Activity 3.", image: "/api/placeholder/600/400", link: "https://example.com/activity18", htmlCode: "<div>HTML Code for Activity 3</div>", cssCode: "div { color: khaki; }", jsCode: "console.log('Activity 3');" },
        { id: 19, title: "Activity 4", description: "Description for Activity 4.", image: "/api/placeholder/600/400", link: "https://example.com/activity19", htmlCode: "<div>HTML Code for Activity 4</div>", cssCode: "div { color: indigo; }", jsCode: "console.log('Activity 4');" }
    ]
};

// Generate project cards and modals
Object.keys(projects).forEach((category) => {
    const container = document.querySelector(`#${category} .row`);
    projects[category].forEach((project) => {
        // Create project card
        const projectCard = `
            <div class="col-md-4" data-aos="fade-up">
                <div class="card project-card" data-bs-toggle="modal" data-bs-target="#projectModal${project.id}">
                    <img src="${project.image}" class="card-img-top" alt="${project.title}">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <div class="project-card-overlay">
                            <span class="view-project">View Details</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += projectCard;

        // Create project modal
        const projectModal = `
            <div class="modal fade" id="projectModal${project.id}" tabindex="-1" aria-labelledby="projectModalLabel${project.id}" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="projectModalLabel${project.id}">${project.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src="${project.image}" alt="${project.title}" class="img-fluid mb-3">
                            <p>${project.description}</p>
                            <div class="code-buttons">
                                <button class="btn btn-primary btn-sm" onclick="showCode('html', ${project.id})">Show HTML</button>
                                <button class="btn btn-secondary btn-sm" onclick="showCode('css', ${project.id})">Show CSS</button>
                                <button class="btn btn-success btn-sm" onclick="showCode('js', ${project.id})">Show JavaScript</button>
                            </div>
                            <pre class="code-preview mt-3" id="codePreview${project.id}" style="display: none;"></pre>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <a href="${project.link}" class="btn btn-custom" target="_blank">View Full Project</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.innerHTML += projectModal;
    });
});

// Function to show code
function showCode(type, projectId) {
    const project = Object.values(projects).flat().find((p) => p.id === projectId);
    const codePreview = document.getElementById(`codePreview${projectId}`);
    let code = "";

    if (type === "html") {
        code = project.htmlCode;
    } else if (type === "css") {
        code = project.cssCode;
    } else if (type === "js") {
        code = project.jsCode;
    }

    codePreview.style.display = "block";
    codePreview.textContent = code;
}
