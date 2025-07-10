// Improved Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
const mobileBackdrop = document.createElement('div');
mobileBackdrop.className = 'mobile-menu-backdrop';
document.body.appendChild(mobileBackdrop);

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    mobileBackdrop.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

mobileBackdrop.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    mobileBackdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        mobileBackdrop.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
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

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-category, .project-card');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animation
document.querySelectorAll('.skill-category, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Run animation on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Prevent form submission
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
Swal.fire({
    title: "Form submitted successfully",  // Title message
    text: "We will reply as soon as possible",  // Additional info
    icon: "success",  // Success alert
    confirmButtonText: "OK"  // Optional: Custom button text
})
.then((result) => {
    // Agar user ne 'OK' button press kia
    if (result.isConfirmed) {
        // Form fields ko reset kar rahe hain
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
    }
});

    
});