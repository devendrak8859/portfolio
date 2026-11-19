// ==========================================
// DOM Elements
// ==========================================
let navbar, mobileMenuBtn, navLinks, contactForm, formSuccess, themeToggle;

// ==========================================
// Theme Toggle (Light/Dark Mode)
// ==========================================
const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
};

// Initialize theme from localStorage or system preference
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        // Default to dark mode (original design)
        document.documentElement.setAttribute('data-theme', 'dark');
    }
};

// ==========================================
// Animation Observer for scroll animations
// ==========================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const animateOnScroll = (entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const delay = index * 0.1;
            element.style.animation = `fadeInUp 0.6s ease forwards ${delay}s`;
            element.style.opacity = '1';
            observer.unobserve(element);
        }
    });
};

const animationObserver = new IntersectionObserver(animateOnScroll, observerOptions);

// ==========================================
// Scroll Animations
// ==========================================
const animateOnScrollSimple = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScrollSimple, observerOptions);

// ==========================================
// Parallax Effect for Hero Background (Optional Enhancement)
// ==========================================
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        if (scrolled < window.innerHeight) {
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        }
    });
}

// ==========================================
// FAQ Accordion
// ==========================================
// FAQ accordion will be initialized inside DOMContentLoaded

// ==========================================
// Form Validation Functions
// ==========================================
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const showError = (elementId, message) => {
    const errorElement = document.getElementById(elementId);
    const inputElement = document.getElementById(elementId.replace('Error', ''));

    if (errorElement && inputElement) {
        errorElement.textContent = message;
        inputElement.classList.add('error');
    }
};

const clearError = (elementId) => {
    const errorElement = document.getElementById(elementId);
    const inputElement = document.getElementById(elementId.replace('Error', ''));

    if (errorElement && inputElement) {
        errorElement.textContent = '';
        inputElement.classList.remove('error');
    }
};

const clearAllErrors = () => {
    const errorElements = document.querySelectorAll('.error-message');
    const inputElements = document.querySelectorAll('input, textarea');

    errorElements.forEach(el => el.textContent = '');
    inputElements.forEach(el => el.classList.remove('error'));
};

// ==========================================
// Initialize
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize DOM elements
    navbar = document.getElementById('navbar');
    mobileMenuBtn = document.getElementById('mobileMenuBtn');
    navLinks = document.getElementById('navLinks');
    contactForm = document.getElementById('contactForm');
    formSuccess = document.getElementById('formSuccess');
    themeToggle = document.getElementById('themeToggle');

    // Initialize theme
    initTheme();

    // Theme toggle event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Animate skill tags immediately
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.animation = 'fadeInUp 0.5s ease forwards';
            tag.style.opacity = '1';
        }, index * 50);
    });

    // Observe service cards for scroll animation
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card) => {
        card.style.opacity = '0';
        animationObserver.observe(card);
    });

    // Observe project cards for scroll animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => {
        card.style.opacity = '0';
        animationObserver.observe(card);
    });

    // Observe AI tool cards for scroll animation
    const aiToolCards = document.querySelectorAll('.ai-tool-card');
    aiToolCards.forEach((card) => {
        card.style.opacity = '0';
        animationObserver.observe(card);
    });

    // Observe result items for scroll animation
    const resultItems = document.querySelectorAll('.result-item');
    resultItems.forEach((item) => {
        item.style.opacity = '0';
        animationObserver.observe(item);
    });

    // Observe experience items for scroll animation
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item) => {
        item.style.opacity = '0';
        animationObserver.observe(item);
    });

    // Observe testimonial cards for scroll animation
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card) => {
        card.style.opacity = '0';
        animationObserver.observe(card);
    });

    // Observe process steps for scroll animation
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step) => {
        step.style.opacity = '0';
        animationObserver.observe(step);
    });

    // Observe FAQ items for scroll animation
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item) => {
        item.style.opacity = '0';
        animationObserver.observe(item);
    });

    // Observe all sections for animation
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add active state to navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    });

    // Navigation Scroll Effect
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50 && navbar) {
            navbar.classList.add('scrolled');
        } else if (navbar) {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile Menu Toggle
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navbar && !navbar.contains(e.target)) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = navbar ? navbar.offsetHeight : 70;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Real-time validation
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const value = this.value.trim();
            if (value && !validateEmail(value)) {
                showError('emailError', 'Please enter a valid email address');
            } else {
                clearError('emailError');
            }
        });
    }

    if (nameInput) {
        nameInput.addEventListener('blur', function() {
            const value = this.value.trim();
            if (value && value.length < 2) {
                showError('nameError', 'Name must be at least 2 characters');
            } else {
                clearError('nameError');
            }
        });
    }

    if (subjectInput) {
        subjectInput.addEventListener('blur', function() {
            const value = this.value.trim();
            if (value && value.length < 3) {
                showError('subjectError', 'Subject must be at least 3 characters');
            } else {
                clearError('subjectError');
            }
        });
    }

    if (messageInput) {
        messageInput.addEventListener('blur', function() {
            const value = this.value.trim();
            if (value && value.length < 10) {
                showError('messageError', 'Message must be at least 10 characters');
            } else {
                clearError('messageError');
            }
        });
    }

    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            clearAllErrors();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            let isValid = true;

            // Validate name
            if (!name) {
                showError('nameError', 'Name is required');
                isValid = false;
            } else if (name.length < 2) {
                showError('nameError', 'Name must be at least 2 characters');
                isValid = false;
            }

            // Validate email
            if (!email) {
                showError('emailError', 'Email is required');
                isValid = false;
            } else if (!validateEmail(email)) {
                showError('emailError', 'Please enter a valid email address');
                isValid = false;
            }

            // Validate subject
            if (!subject) {
                showError('subjectError', 'Subject is required');
                isValid = false;
            } else if (subject.length < 3) {
                showError('subjectError', 'Subject must be at least 3 characters');
                isValid = false;
            }

            // Validate message
            if (!message) {
                showError('messageError', 'Message is required');
                isValid = false;
            } else if (message.length < 10) {
                showError('messageError', 'Message must be at least 10 characters');
                isValid = false;
            }

            if (isValid) {
                // Simulate form submission
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;

                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                // Simulate API call
                setTimeout(() => {
                    // Reset form
                    contactForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;

                    // Show success message
                    if (formSuccess) {
                        formSuccess.style.display = 'block';

                        // Hide success message after 5 seconds
                        setTimeout(() => {
                            formSuccess.style.display = 'none';
                        }, 5000);
                    }

                    // In production, you would send the form data to a server
                    // Example:
                    // fetch('/api/contact', {
                    //     method: 'POST',
                    //     headers: { 'Content-Type': 'application/json' },
                    //     body: JSON.stringify({ name, email, subject, message })
                    // })
                    // .then(response => response.json())
                    // .then(data => { /* handle success */ })
                    // .catch(error => { /* handle error */ });
                }, 1500);
            }
        });
    }

    // FAQ Accordion - Initialize inside DOMContentLoaded
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                const isExpanded = question.getAttribute('aria-expanded') === 'true';

                // Close all other FAQ items
                faqQuestions.forEach(otherQuestion => {
                    if (otherQuestion !== question) {
                        otherQuestion.setAttribute('aria-expanded', 'false');
                        otherQuestion.parentElement.classList.remove('active');
                    }
                });

                // Toggle current FAQ item
                question.setAttribute('aria-expanded', !isExpanded);
                faqItem.classList.toggle('active');
            });
        });
    }
});

