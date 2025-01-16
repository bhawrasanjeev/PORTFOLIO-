document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("div[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const updateActiveLink = () => {
        let currentSection = "home"; // Default to 'home'

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").slice(1) === currentSection) {
                link.classList.add("active");
            }
        });
    };

    const handleClick = (event) => {
        // Remove 'active' from all links
        navLinks.forEach((link) => link.classList.remove("active"));

        // Add 'active' to the clicked link
        event.target.classList.add("active");

        // Smoothly scroll to the section
        const targetSectionId = event.target.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth", // Smooth scrolling
            });
        }

        // Prevent default anchor behavior
        event.preventDefault();
    };

    // Add click event listener to navigation links
    navLinks.forEach((link) => link.addEventListener("click", handleClick));

    // Run the function on scroll and initial load
    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();
});
document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
});
