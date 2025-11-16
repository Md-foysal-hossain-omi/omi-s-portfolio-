document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Sticky Header & Scroll Effect ---
    const header = document.getElementById('main-header');
    
    function handleScroll() {
        // Toggle 'scrolled' class on header
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Check visibility for scroll animations
        checkElementVisibility();
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load

    // --- 2. Element Visibility (Fade-in on Scroll) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    // Use Intersection Observer for efficient visibility check
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once it's visible
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove class when out of view (for repeated animation)
                // entry.target.classList.remove('is-visible');
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // Triggers when 10% of element is visible
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // --- 3. Skill Bar Animation (Triggered when visible) ---
    const skillItems = document.querySelectorAll('.skill-item');
    
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add class to trigger CSS transition for skill bar width
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, { threshold: 0.5 }); // Triggers when 50% of skill item is visible

    skillItems.forEach(item => {
        skillObserver.observe(item);
    });

    // --- 4. Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent default hash behavior unless it's a social link or email
            if (this.getAttribute('href').length > 1) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop;
                    // Adjust for fixed header height
                    const headerHeight = header.offsetHeight; 
                    
                    window.scrollTo({
                        top: offsetTop - headerHeight - 20, // 20px extra padding
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- 5. Dynamic Footer Year ---
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // --- 6. Form Submission Placeholder (You will need server-side code for actual submission) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message, Omi will get back to you soon!'); 
            // In a real project, you would use fetch() here to send data to a server/API
            this.reset();
        });
    }

    // --- 7. Mobile Menu Toggle (Currently just hides/shows) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Simple toggle for now, you can add a full-screen menu overlay here
            alert('Mobile Menu Toggle clicked! Add your responsive navigation logic here.');
            // For a basic toggle: navLinks.classList.toggle('active');
        });
    }
});